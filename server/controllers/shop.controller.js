import formidable from 'formidable';
import fs from 'fs';

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

export default { create, photo, defaultPhoto };