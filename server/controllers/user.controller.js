import _ from 'lodash'
import request from 'request'
import stripe from 'stripe'

import errorHandler from '../../helpers/dbErrorHandler'
import config from '../../config/config'
import User from '../models/user.model'

// Initializing stripe instance with the application's Stripe secret key.
const myStripe = stripe(config.stripe_test_secret_key)

//Creating a new user
const create = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then( () => {
            res.status(200).json({
                message: "Successfully signed up!"
            })
        })
        .catch( err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        })
}

//Listing all users
const list = (req, res) => {
    User.find()
        .select('name email updated created')
        .then( users => {
            res.json(users)
        })
        .catch( err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        })
}

//Loading a user by ID to read, update, or delete
const userByID = (req, res, next, id) => {
    User.findById(id)
        .then( user => {
            req.profile = user;
            next()
        })
        .catch( err => res.status('400').send({ errorMessage: "User not found" }) )
}

/*  When the Express app gets a GET request at '/api/users/:userId' , it executes the
userByID controller function to load the user by the userId value in the param, and then
the read controller function.
*/
const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

/* When the Express app gets a PUT request at '/api/users/:userId' , similar to the read ,
it first loads the user with the :userId param value, and then the update controller
function is executed.
*/
const update = (req, res, next) => {
    let user = req.profile;
    user = _.extend(user, req.body);
    user.updated = Date.now();
    user.save()
        .then( () => {
            user.hashed_password = undefined
            user.salt = undefined
            return res.json(user)
        })
        .cath( err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
                })
        })
}

/* When the Express app gets a DELETE request at '/api/users/:userId' , similar to the
read and update, it first loads the user by ID, and then the remove controller function is
executed.
*/
const remove = (req, res, next) => {
    let user = req.profile;
    user.remove()
        .then( deletedUser => {
            deletedUser.hashed_password = undefined
            deletedUser.salt = undefined
            res.json(deletedUser)
        })
        .cath( err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
                })
        })
}

//This method will ensure the current user is actually a seller before creating the new shop.
const isSeller = (req, res, next) => {
    const isSeller = req.profile && req.profile.seller;
    if (!isSeller) {
        return res.status(403).json({
            error: "User is not a seller"
        });
    };
    next();
}

/* This method retrieves the credentials from Stripe and passes it to the existing
user update method to be stored in the database.

The POST API call to Stripe takes the platform's secret key and the retrieved auth code to
complete the authorization and returns the credentials for the connected account, which is
then appended to the request body so the user can be updated in the next() method.
With these credentials, the application can create charges on customer credit cards on
behalf of the seller.
*/
const stripe_auth = (req, res, next) => {
    request({           // CHANGE IT FOR AXIOS
        url: "https://connect.stripe.com/oauth/token",
        method: "POST",
        json: true,
        body: {
            client_secret: config.stripe_test_secret_key,
            code:req.body.stripe,
            grant_type:'authorization_code'
        }
    }, (error, response, body) => {
        if (body.error) {
            return res.status(400).json({
                error: body.error_description
            })
        }
        req.body.stripe_seller = body
        next()
    })
}

const stripeCustomer = (req, res, next) => {
    // Updating an existing Stripe Customer
    if (req.profile.stripe_customer) {
        //update stripe customer
        myStripe.customer.update(req.profile.stripe_customer, {
            source: req.body.token
        }, (err, customer) => {
            if (err) {
                return res.status(400).send({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            req.body.order.payment_id = customer.id
            next()
        })
    }
    else {
        // Creating a new Stripe Customer
        myStripe.customer.create({
            email: req.profile.email,
            source: req.body.token
        })
        .then( customer => {
            User.update({ '_id': req.profile._id }, 
            { '$set': {'stripe_customer': customer.id} },
            (err, order) => {
                if (err) {
                    return res.status(400).send({
                        error: errorHandler.getErrorMessage(err)
                    })
                }
                req.body.order.payment_id = customer.id
                next()
            })
        })
    }
}

// Creating a charge for each product processed
/* When a seller updates an order by processing the product ordered in their shop, the application
will create a charge on behalf of the seller on the Customer's credit card for the cost of the product
ordered. The createCharge controller method will use Stripe's create a charge API, and need the seller's
Stripe account ID along with the buyer's Stripe Customer ID.
*/
const createCharge = (req, res, next) => {
    /*If the seller has not connected their Stripe account yet, the createCharge method will
    return a 400 error response to indicate that a connected Stripe account is required.*/
    if (!req.profile.stripe_seller) {
        return res.status(400).json({
            error: 'Please connect your Stripe account'
        })
    }
    myStripe.tokens.create(
        {customer: req.order.payment_id},
        {stripe_account: req.profile.stripe_seller.stripe_user_id}
    )
    .then( token => {
        myStripe.charges.create(
            {
                amount: req.body.amount * 100, //amount in cents
                currency: 'usd',
                source: token.id
            },
            { stripe_account: req.profile.stripe_seller.stripe_user_id }        
        )
        .then( charge => {
            next()
        })
    })
}



export default {
    create,
    userByID,
    read,
    list,
    remove,
    update,
    isSeller,
    stripe_auth,
    stripeCustomer,
    createCharge
}