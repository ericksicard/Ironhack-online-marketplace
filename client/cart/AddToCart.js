import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import cart from './cart-helper.js'

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const styles = theme => ({
    iconButton: {
      width: '28px',
      height: '28px'
    },
    disabledIconButton: {
      color: '#7f7563',
      width: '28px',
      height: '28px'
    }
})

class AddToCart extends Component {
    state = {
        redirect: false
    }

    addToCart = () => {
        cart.addItem(this.props.item, () => {
            this.setState({ redirect: true })
        })
    }

    render() {
        const {classes} = this.props;

        if (this.state.redirect) {
            return (<Redirect to={'/cart'} />)
        }

        return (
            <span>
                {this.props.item.quantity >= 0
                ? <IconButton color='secondary' dense='dense' onClick={this.addToCart}>
                    <AddShoppingCartIcon className={this.props.cartStyle || classes.iconButton} />
                </IconButton>
                : <IconButton disabled={true} color='secondary' dense='dense'>
                    <RemoveShoppingCartIcon className={this.props.cartStyle || classes.disabledIconButton} />
                </IconButton>
                }
            </span>
        )
    }
}

AddToCart.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    cartStyle: PropTypes.string
}
  
export default withStyles(styles)(AddToCart)