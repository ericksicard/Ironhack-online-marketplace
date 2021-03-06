import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
    //Name
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    
    //Email
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    
    //Created and updated timestamps
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    
    //Hashed password and salt
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    salt: String,

    //Seller option
    seller: {
        type: Boolean,
        default: false
    },
    
    //Seller's Stripe account credential
    stripe_seller: {},
    
    //Customer's Stripe account credential
    stripe_customer: {}
});


/*The password string provided by the user is not stored directly in the user
document. Instead, it is handled as a virtual field.*/
UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password
        this.salt = this.makeSalt()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password
    });


// Password field validation
UserSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required')
    }
}, null)


// Encryption and authentication
UserSchema.methods = {

    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: function(password) {
        if(!password) return ''
        try {
            return crypto
                .createHmac('sha256', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },

    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

export default mongoose.model('User', UserSchema)



