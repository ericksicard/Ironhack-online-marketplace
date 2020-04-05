import formidable from 'formidable';
import fs from 'fs'
import _ from 'lodash'

import Shop from '../models/shop.model';
import errorHandler from '../../helpers/dbErrorHandler'
import profileImage from '../../client/assets/images/profile-pic.png'

// Creates a new store
const create = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    
    form.parse( req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                message: "Image could not be uploaded"
            })
        }
        
        let shop = new Shop(fields);
        shop.owner = req.profile;

        if (files.image) {
            shop.image.data = fs.readFileSync(files.image.path);
            shop.image.contentType = files.image.type;
        }

        shop.save()
            .then( result => {
                res.status(200).json(result)
            })
            .catch( err => {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })
    })
}

//Listing the shops
const list = (req, res) => {
    Shop.find()
        .then( shops => res.json(shops))
        .catch( err => {
            return res.status(400).json({
                error:errorHandler.getErrorMessage(err)
            })
        })
}

//Listing shops by owner
const listByOwner = (req, res) =>{
    Shop
    .find({ owner: req.profile._id })
    .then( shops => res.json(shops))
    .catch( err => {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    })
    .populate('owner', '_id name')
}

// Finding a store by ID
const shopByID = (req, res, next, id) => {
    Shop
    .find(id)
    .populate('owner', '_id name')
    .exec( (err, shop) => {
        if ( err || !shop ) {
            return res.status(400).json({
                error: "Shop not found"
            })
        }
        req.shop = shop;
        next()
    })
}

// Read shop information
const read = (req, res) => {
    return res.json(req.shop)
}


/* The isOwner controller method ensures that the signed-in user
is actually the owner of the shop being edited. */
const isOwner = (req, res, next) => {
    const isOwner = req.shop && req.auth && req.shop.owner._id == req.auth._id;
    if (!isOwner) {
        return res.status(404).json({
            error: 'User is not authorized'
        })
    }
    next();
}

// Update shop information
const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse( req, (err, fields, files) => {
        if (err) {
            res.status(400).json({
                message: 'Photo could not be uploaded'
            })
        }
        let shop = req.shop;
        shop = _.extend(shop, fields);
        shop.updated = Date.now();

        if (files.image) {
            shop.image.data = fs.readFileSync(files.image.path);
            shop.image.contentType = files.image.type;
        }

        shop.save()
        .then( shop => { res.json(shop) })
        .cath( err => res.status(400).send({
            error: errorHandler.getErrorMessage(err)
        }))
    })
}

// This method pass the picture stored in MongoDB
const photo = (req, res, next) => {
    if(req.shop.image.data){
      res.set("Content-Type", req.shop.image.contentType)
      return res.send(req.shop.image.data)
    }
    next()
  }

// This method pass a default picture in case there is NO picture stored in MongoDB 
const defaultPhoto = (req, res) => {
    return res.sendFile(process.cwd() + profileImage)
}

export default { 
    create,
    list,
    listByOwner,
    shopByID,
    read,
    isOwner,
    update,
    photo,
    defaultPhoto };