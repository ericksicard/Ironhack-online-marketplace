import React, {Component} from 'react'
import PropTypes from 'prop-types'
import auth from '../auth/auth-helper'
import { remove } from './api-product.js'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteProduct extends Component {
    state = { open: false };

    clickButton = () => {
        this.setState({ open: true })
    }

    deleteProduct = () => {
        const jwt = auth.isAuthenticated()
        remove(
            {
                shopId: this.props.shopId,
                productId: this.props.product._id
            },
            {t: jwt.token}
        )
        .then( data => {
            if (data.error) console.log( data.error)
            else this.setState({ open: false }, () => {
                this.props.onRemove(this.props.product)
            })
        })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <span>
                <IconButton arial-label="Delete" onClick={this.clickButton} color='secondary'>
                    <DeleteIcon />
                </IconButton> 

                <Dialog open={this.state.open} onClose={this.handleRequestClose}>
                    <DialogTitle>{ "Delete " + this.props.product.name }</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Confirm to delete your product {this.props.product.name}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color='primary'>
                            Cancel
                        </Button>
                        <Button onClick={this.deleteProduct} color='secondary' autoFocus='autoFocus'>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        )
    }

}


/*
To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
DeleteProduct.propTypes = {
    shopId: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired 
}

export default DeleteProduct
