import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import productCtrl from '../controllers/product.controller';
import orderCtrl from '../controllers/order.controller';

const router = express.Router();

router.route('/api/orders/:userId')
    .post(authCtrl.requireSignin, userCtrl.stripeCustomer,
        productCtrl.decreaseQuantity, orderCtrl.create)


router.param('userId', userCtrl.userByID)

export default router