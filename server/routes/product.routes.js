import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import shopCtrl from '../controllers/shop.controller';
import productCtrl from '../controllers/product.controller'

const router = express.Router();

// Creates products for every store and retrieve them
router.route('/api/products/by/:shopId')
    .post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create)
    .get(productCtrl.listByShop)

// Retreiving the latest products
router.route('/api/products/latest')
    .get(productCtrl.listLatest)

// Related products
router.route('/api/products/related/:productId')
    .get(productCtrl.listRelated)

// Get product categories
router.route('/api/products/categories')
    .get(productCtrl.listCategories)

// List searched products
router.route('/api/products')
    .get(productCtrl.list)

// Read a product
router.route('/api/products/:productId')
    .get(productCtrl.read)

// Product picture
router.route('/api/product/image/:productId')
    .get(productCtrl.photo, productCtrl.defaultPhoto)

router.route('/api/product/defaultphoto')
    .get(productCtrl.defaultPhoto)

// Edit a product
router.route('/api/product/:shopId/:productId')
    .put(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.update)
    .delete(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.remove)


// Processes the :shopId param and retrieve the associated shop from the database
router.param('shopId', shopCtrl.shopByID)

// Processes the :productId param and retrieve the associated product from the database
router.param('productId', productCtrl.productByID)

export default router;