import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import productCtrl from '../controllers/product.controller';
import orderCtrl from '../controllers/order.controller';
import shopCtrl from '../controllers/shop.controller';
import auth from '../../client/auth/auth-helper';

const router = express.Router();

// creates an order
router.route('/api/orders/:userId')
        .post(authCtrl.requireSignin, userCtrl.stripeCustomer,
        productCtrl.decreaseQuantity, orderCtrl.create)


// lists orders by shops
router.route('/api/orders/shop/:shopId')
        .get(authCtrl.requireSignin, shopCtrl.isOwner, orderCtrl.listByShop)


// retrieves the order status values
router.route('/api/order/satus_values')
        .get(orderCtrl.getStatusValues)


// order cancellation
router.route('/api/order/:shopId/cancel/:productId')
        .put(auth.requireSignin, shopCtrl.isOwner,
        productCtrl.increaseQuantity, orderCtrl.update)


// process charge for product
router.route('/api/order/:orderId/charge/:userId/:shopId')
        .put(auth.requireSignin, shopCtrl.isOwner,
        userCtrl.createCharge, orderCtrl.update)


// order status update other that 'Processing' or 'Cancelled'
router.route('/api/order/status/:shopId')
        .put(auth.requireSignin, shopCtrl.isOwner, orderCtrl.update)


router.param('userId', userCtrl.userByID)
router.param('shopId', shopCtrl.shopByID)
router.param('productId', productCtrl.productByID)
router.param('orderId', orderCtrl.orderByID)

export default router