import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
    //Name & Description
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true
    },

    //Logo image
    image: {
        data: Buffer,
        contentType: String    
    },

    //Shop owner
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    //Created and updated at times
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Shop', ShopSchema);