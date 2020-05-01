import React, { useState } from 'react'
import {Elements} from 'react-stripe-elements'

import auth from '../auth/auth-helper'
import cart from './cart-helper.js'
import PlaceOrder from './PlaceOrder'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
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
  }))

export default function Checkout () {
  const classes = useStyles();
  const user = auth.isAuthenticated().user;
  const [values, setValues] = useState({
    checkoutDetails: {
      products: cart.getCart(),
      customer_name: user.name,
      customer_email: user.email,
      delivery_address: {
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      }      
    },
    error: ''
  })

  const handleCustomerChange = ( event, name ) => {
    let checkoutDetails = values.checkoutDetails;
    checkoutDetails[name] = event.target.value || undefined
    setValues({ ...values, checkoutDetails: checkoutDetails })
  }

  const handleAddressChange = ( event, name ) => {
    let checkoutDetails = values.checkoutDetails;
    checkoutDetails.delivery_address[name] = event.target.value || undefined
    setValues({ ...values, checkoutDetails: checkoutDetails })
  }

  return (
    <Card className={classes.card}>
      <Typography type='title'>
        Checkout
      </Typography>
      <TextField
        id='name'
        label='Name'
        className={classes.textField}
        margin='normal'
        value={values.checkoutDetails.customer_name}
        onChange={ event => handleCustomerChange(event, 'customer_name')}
      /> <br/>
      <TextField
        id='email'
        label='Email'
        className={classes.textField}
        margin='normal'
        value={values.checkoutDetails.customer_email}
        onChange={ event => handleCustomerChange(event, 'customer_email')}
      /> <br/>
      
      <Typography type='subheading' component='h3' className={classes.subheading}>
        Delivery Address
      </Typography>
      <TextField
        id='street'
        label='Street Address'
        className={classes.streetField}
        margin='normal'
        value={values.checkoutDetails.delivery_address.street}
        onChange={ event => handleAddressChange(event, 'street')}
      /> <br/>
      <TextField
        id='city'
        label='City'
        className={classes.addressField}
        margin='normal'
        value={values.checkoutDetails.delivery_address.city}
        onChange={ event => handleAddressChange(event, 'city')}
      /> <br/>
      <TextField
        id='state'
        label='State'
        className={classes.addressField}
        margin='normal'
        value={values.checkoutDetails.delivery_address.state}
        onChange={ event => handleAddressChange(event, 'state')}
      /> <br/>
      <TextField
        id='zipcode'
        label='Zip Code'
        className={classes.addressField}
        margin='normal'
        value={values.checkoutDetails.delivery_address.zipcode}
        onChange={ event => handleAddressChange(event, 'zipcode')}
      /> <br/>
      <TextField
        id='country'
        label='Country'
        className={classes.addressField}
        margin='normal'
        value={values.checkoutDetails.delivery_address.country}
        onChange={ event => handleAddressChange(event, 'country')}
      /> <br/>
      {
        values.error && 
          (<Typography component='p' color='error'>
            <Icon color='error' className={classes.error}>error</Icon>
            {values.error}
          </Typography>)
      }

      <div>
        <Elements>
          <PlaceOrder checkoutDetails={values.checkoutDetails} />
        </Elements>
      </div>
    </Card>
  )


}