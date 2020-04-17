import formidable from 'formidable';
import fs from 'fs'
import _ from 'lodash'

import Product from '../models/product.model';
import errorHandler from '../../helpers/dbErrorHandler'
import profileImage from '../../client/assets/images/profile-pic.png'

// Create a new product
/* This method uses the formidable npm module to parse the multipart request that
may contain an image file uploaded by the user along with the product fields.
The parsed data is then saved to the Product collection as a new product.
*/
const create = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse( req, (err, fields, files) => {
        if (err) return res.status(400).json({
            message: "Image could not de uploaded"
        })
        //creating the new product and completing its info
        let product = new Product(fields);
        product.shop = req.shop;
        if (files.image) {
            product.image.data = fs.readFileSync(files.image.path)
            product.image.contentType = files.image.type;
        }
        //saving information included after creating the product
        product.save()
            .then( result => { res.json(result) } )
            .catch( err => res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            }))
    })
}

/* Finds a product by ID and attach it to the request object to be used in the 
next() method. */
const productByID = (req, res, next, id) => {
    Product
    .findById(id)
    .populate('shop', '_id name')
    .exec( (err, product) => {
        if ( err || !product ) {
            return res.status(400).json({
                error: "Product not found"
            })
        }
        req.product = product;
        next()
    })
}

/*The product in the request object is used by the read controller method to
respond to the read request.*/
const read = (req, res) => {
    req.product.image = undefined;
    return res.json(req.product)
}

// Finding products by shop
const listByShop = (req, res, next) => {
    Product
    .find({ shop: req.shop._id })
    .populate('shop', '_id name')
    .select('-image')
    .then( products => { res.json(products) })
    .catch( err => res.status(400).json({
        error: errorHandler.getErrorMessage(err)
    }))
}

// Listing latest products
const listLatest = (req, res, next) => {
    Product.find({})
            .sort('-created')
            .limit(5)
            .populate('shop', 'id name')
            .then( products => res.json(products))
            .catch( err => res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            }))
}

// Related products
const listRelated = (req, res, next) => {
    Product.find({
        '_id': {'$ne': req.product},
        'category': req.product.category
    })
    .limit(5)
    .populate('shop', '_id name')
    .then( products => { res.json(products)} )
    .catch( err => res.status(400).json({
        error: errorHandler.getErrorMessage(err)
    }))
}

// Update product
const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse( req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                message: 'Photo could not be uploaded'
            })
        }
        let product = req.product;
        product = _.extend(product, fields);
        product.updated = Date.now();

        if (files.image) {
            product.image.data = fs.readFileSync(files.image.path)
            product.image.contentType = files.image.type
        }

        product.save()
        .then( result => { res.json(result) })
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))
    })
}

// Delete a product
const remove = (req, res, next) => {
    let product = req.product;
    product.remove()
        .then( deletedProduct => { res.json(deletedProduct)} )
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))
}

// This method pass the picture stored in MongoDB
const photo = (req, res, next) => {
    if (req.product.image.data) {
        res.set("Content-Type", req.product.image.contentType)
        return res.send(req.product.image.data)
    }
    next()
}
// This method pass a default picture in case there is NO picture stored in MongoDB 
const defaultPhoto = (req, res) => {
    return res.sendFile(process.cwd() + profileImage)
}

// List product categories
const listCategories = (req, res) => {
    Product.distinct('category')
        .then( products => res.json(products))
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))
}

// List serached products
const list = (req, res) => {
    const query = {};  // initializing the query object as an empty object

    /* If the URL's Query Parameter "value" has a value asigned we start building the first .find()
    condition, which is all product names that match the value passed as the first query parameter*/
    if (req.query.value) {
        query.name = {'$regex': req.query.search, '$option': 'i'};
    }

    /* Now we create the second .find() condition which is related to the product category*/
    if (req.query.category && req.query.category != 'All') {
        query.category = req.query.category;
    }

    // The last step is the finding
    Product.find( query )
        .populate('shop', '_id, name')
        .select('-image')                       // excludes the image
        .then( products => res.json(products))
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))

}

export default { 
    create,
    productByID,
    read,
    listByShop,
    listLatest,
    listRelated,
    update,
    remove,
    photo,
    defaultPhoto,
    listCategories,
    list
}