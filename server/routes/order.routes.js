import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import productCtrl from '../controllers/product.controller';
import orderCtrl from '../controllers/order.controller';
import shopCtrl from '../controllers/shop.controller';

const router = express.Router();

// creates an order
// router.route('/api/orders/:userId')
//         .post(authCtrl.requireSignin, userCtrl.stripeCustomer,
//         productCtrl.decreaseQuantity, orderCtrl.create)
router.route('/api/orders/:userId')
        .post(authCtrl.requireSignin, productCtrl.decreaseQuantity,
        orderCtrl.create)


// lists orders by shops
router.route('/api/orders/shop/:shopId')
        .get(authCtrl.requireSignin, shopCtrl.isOwner, orderCtrl.listByShop)


// lists orders by users
router.route('/api/orders/user/:userId')
        .get(authCtrl.requireSignin, orderCtrl.listByUser)


// retrieves the status of a product in an order
router.route('/api/order/status_values')
        .get(orderCtrl.getStatusValues)


// order cancellation
router.route('/api/order/:shopId/cancel/:productId')
        .put(authCtrl.requireSignin, shopCtrl.isOwner,
        productCtrl.increaseQuantity, orderCtrl.update)


// process charge for product
router.route('/api/order/:orderId/charge/:userId/:shopId')
        .put(authCtrl.requireSignin, shopCtrl.isOwner,
        userCtrl.createCharge, orderCtrl.update)


// order status update other that 'Processing' or 'Cancelled'
router.route('/api/order/status/:shopId')
        .put(authCtrl.requireSignin, shopCtrl.isOwner, orderCtrl.update)


// getting the order entered
router.route('/api/order/:orderId')
        .get(orderCtrl.read)


router.param('userId', userCtrl.userByID)
router.param('shopId', shopCtrl.shopByID)
router.param('productId', productCtrl.productByID)
router.param('orderId', orderCtrl.orderByID)

export default router