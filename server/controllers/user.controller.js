import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from '../../helpers/dbErrorHandler'


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

//Reading
/* 
When the Express app gets a GET request at '/api/users/:userId' , it executes the
userByID controller function to load the user by the userId value in the param, and then
the read controller function.
*/
const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

//Updating
/*
When the Express app gets a PUT request at '/api/users/:userId' , similar to the read ,
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
            res.json(user)
        })
        .cath( err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
                })
        })
}

//Deleting
/*
When the Express app gets a DELETE request at '/api/users/:userId' , similar to the
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


export default { create, userByID, read, list, remove, update }