import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StripeProvider} from 'react-stripe-elements'

import config from '../../config/config'
import CartItems from './CartItems'
import CheckOut from './Checkout'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: 30,
    }
})

class Cart extends Component {
    state = {
        checkout: false,
        stripe: null
    }

    /* Stripe will only be required in the Cart view, where the Checkout component needs 
    it to render the Card Elements and process card detail input. Hence, we will initialize
    the Stripe instance with the application's Stripe API key, after the Cart component mounts,
    in its componentDidMount.    
    */
    componentDidMount = () => {
        if (window.Stripe) {
            this.setState({ stripe: window.Stripe(config.stripe_test_api_key) })
        }
        else {
            document.querySelector('#stripe-js')
                    .addEventListener('load', () => {
                        //Create Stripe instance once Stripe.js loads
                        this.setState({ stripe: window.Stripe(config.stripe_test_api_key) })
                    })
        }
    }

    setCheckout = val => {
        this.setState({ checkout: val })
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6}>
                        <CartItems 
                            checkout={this.state.checkout}
                            setCheckout={this.setCheckout}
                        />
                    </Grid>
                    {this.state.checkout &&
                        <Grid item xs={6} sm={6}>
                            <StripeProvider stripe={this.state.stripe}>
                                <CheckOut />
                            </StripeProvider>
                        </Grid>
                    }
                </Grid>
            </div>
        )
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Cart)
