import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Elements} from 'react-stripe-elements'


import auth from '../auth/auth-helper'
import cart from './cart-helper.js'
//import PlaceOrder from './PlaceOrder'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    card: {
      margin: '24px 0px',
      padding: '16px 40px 90px 40px',
      backgroundColor: '#80808017'
    },
    title: {
      margin: '24px 16px 8px 0px',
      color: theme.palette.openTitle
    },
    subheading: {
      color: 'rgba(88, 114, 128, 0.87)',
      marginTop: "20px",
    },
    addressField: {
      marginTop: "4px",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "45%"
    },
    streetField: {
      marginTop: "4px",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "93%"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%"
    }
  })

class Checkout extends Component {
    state = {
        checkoutDetails: {
            customer_name: '',
            customer_email: '',
            delivery_address: {
                street: '',
                city: '',
                state: '',
                zipcode: '',
                country: ''
            }
        }
    }

    componentDidMount = () => {
        let user = auth.isAuthenticated().user;
        let checkoutDetails = this.state.checkoutDetails;
        checkoutDetails.products = cart.getCart();
        checkoutDetails.customer_name = user.name;
        checkoutDetails.customer_email = user.email;
        
        this.setState({ checkoutDetails: checkoutDetails })
    }

}


Checkout.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Checkout)
