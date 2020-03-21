import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config/config'

//Sign-in
const signin = (req, res) => {
    User.findOne({
        "email": req.body.email
    }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: "User not found"
            })
        }
        if (!user.authenticate(req.body.password)) {
            return res.status(401).send({
                error: "Email and password don't match."
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, config.jwtSecret)

        res.cookie("t", token, {
            expire: new Date() + 999
        })

        return res.json({
            token,
            user: {_id: user._id, name: user.name, email: user.email}
        })
    })
}

//Sign-out
const signout = (req, res) => {
    res.clearCookie("t")
    return res.status(200).json({
        message: "signed out"
    })
}

//Requiring sign-in
/*
The requireSignin method uses express-jwt to verify that the incoming request has a valid
JWT in the Authorization header. If the token is valid, it appends the verified user's ID
in an 'auth' key to the request object, otherwise it throws an authentication error.
*/
const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth'
    })

//Authorizing signed in users
/*
For some of the protected routes such as update and delete, on top of checking for
authentication we also want to make sure the requesting user is only updating or deleting
their own user information. To achieve this, the hasAuthorization function checks if the
authenticated user is the same as the user being updated or deleted before the corresponding
CRUD controller function is allowed to proceed.

The req.auth object is populated by express-jwt in requireSignin after
authentication verification, and the req.profile is populated by the userByID function
in the user.controller.js . We will add the hasAuthorization function to routes that
require both authentication and authorization.
*/
const hasAuthorization = (req, res) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
    next()
}

export default { signin, signout, requireSignin, hasAuthorization }