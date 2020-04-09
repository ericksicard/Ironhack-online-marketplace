import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import shopCtrl from '../controllers/shop.controller';
import productCtrl from '../controllers/product.controller'

const router = express.Router();

router.route('/api/products/by/:shopId')
    .post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create)



// Processes the :shopId param and retrieve the associated shop from the database
router.param('shopId', shopCtrl.shopByID)

// Processes the :productId param and retrieve the associated product from the database
router.param('productId', productCtrl.productByID)

export default router;