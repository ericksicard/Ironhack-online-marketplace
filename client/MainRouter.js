import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './core/Home';
import Menu from './core/Menu';

import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import EditProfile from './user/EditProfile';
import Profile from './user/Profile';
import PrivateRoute from './auth/PrivateRoute';

import NewShop from './shop/NewShop';
import EditShop from './shop/EditShop'
import Shops from './shop/Shops';
import Shop from './shop/Shop'
import MyShops from './shop/MyShops'

import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'

import Cart from './cart/Cart'

import StripeConnect from './user/StripeConnect'

import ShopOrders from './order/ShopOrders'

class MainRouter extends Component {
    //Removes the server-side injected CSS when React component mounts
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render () {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signin" component={Signin}/>
                    <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
                    <Route path="/user/:userId" component={Profile}/>
                    
                    <PrivateRoute path="/seller/shop/new" component={NewShop}/>
                    <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
                    <PrivateRoute path="/seller/shops" component={MyShops}/>                    
                    <Route path="/shops/all" component={Shops}/>
                    <Route path="/shops/:shopId" component={Shop}/>
                    
                    <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
                    <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>
                    <Route path="/product/:productId" component={Product}/>

                    <Route path="/cart" component={Cart}/>
                    <Route path="/seller/stripe/connect" component={StripeConnect}/>

                    <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;