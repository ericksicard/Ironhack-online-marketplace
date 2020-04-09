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
            product.image.data = fs.readFileSync(files.image.path);
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

// Finding a product by ID
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

export default { create, productByID }