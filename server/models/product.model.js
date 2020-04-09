import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
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

    //Product image
    image: {
        data: Buffer,
        contentType: String    
    },

    //Product category
    category: {
        type: String
    },

    //Product quantity
    quantity: {
        type: Number,
        required: "Quantity is required"
    },

    //Product price
    price: {
        type: Number,
        required: "Price is required"
    },

    //Shop shop
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop'
    },

    //Created and updated at times
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Product', ProductSchema);