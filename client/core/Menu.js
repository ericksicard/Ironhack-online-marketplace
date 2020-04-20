import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from './../auth/auth-helper'
import cart from '../cart/cart-helper'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const isActive = (history, path) => {
    if (history.location.pathname == path) {
        return {color: 'ff4081'}
    }
    else {
        return {color: '#ffffff'}
    }
}

const isPartActive = (history, path) => {
    if (history.location.pathname.includes(path)) {
        return {color: '#bef67a'}
    }
    else {
        return {color: '#ffffff'}
    }
}

const Menu = withRouter( ({ history }) => (
        <AppBar position="static" >
            <Toolbar>
                <Typography type="title" color="inherit" >
                    Ironhack Online Marketplace
                </Typography>
                <div>
                    <Link to="/">
                        <IconButton aria-label="Home" style={isActive(history, "/")} >
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link to="/shops/all">
                        <Button style={isActive(history, "/shops/all")}>All Shops</Button>
                    </Link>
                    <Link to='/cart'>
                        <Button style={isActive(history, '/cart')}>
                            Cart
                            <Badge 
                                color="secondary"
                                badgeContent={cart.itemTotal()}
                                style={{'marginLeft': '7px'}}
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        </Button>
                    </Link>
                    <Link to="/users" >
                        <Button style={isActive(history, "/users")}>Users</Button>
                    </Link>
                </div>

                <div style={{'position':'absolute', 'right': '10px'}}>
                    <span style={{'float': 'right'}}>
                    {!auth.isAuthenticated() && (
                        <span>
                            <Link to="/signup">
                                <Button style={isActive(history, "/signup")}> Sign up </Button>
                            </Link>
                            <Link to="/signin">
                                <Button style={isActive(history, "/signin")}> Sign In </Button>
                            </Link>
                        </span>)
                    }
                    {auth.isAuthenticated() && (
                        <span>
                            {auth.isAuthenticated().user.seller && (
                                <Link to="/seller/shops">
                                    <Button style={isPartActive(history, "/seller/")}>
                                        My Shops
                                    </Button>
                                </Link>
                            )}
                            <Link to={"/user/" + auth.isAuthenticated().user._id} >
                                <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)} >
                                    My Profile
                                </Button>
                            </Link>
                            <Button color="inherit" onClick={ () => { auth.signout( () => history.push('/') )}} >
                                Sign Out
                            </Button>
                        </span>
                    )}
                    </span>
                </div>
            </Toolbar>
        </AppBar>

))

export default Menu;