import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../../config/config'
import CartItems from './CartItems'
//import CheckOut from './CheckOut'

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
                    {/*
                    {this.state.checkout &&
                        <Grid item xs={6} sm={6}>
                            <CheckOut />    
                        </Grid>
                    }
                    */}
                </Grid>
            </div>
        )
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired
}
  
export default withStyles(styles)(Cart)
