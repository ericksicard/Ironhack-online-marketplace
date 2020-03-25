import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import auth from './../auth/auth-helper'
import { remove } from './api-user.js'

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

class DeleteUser extends Component {
    state = {
        redirect: false,
        open: false
    }

    clickButton = () => {
        this.setState({ open: true })
    }

    deleteAccount = () => {
        const jwt = auth.isAuthenticated();

        remove({ userId: this.props.userId }, { t: jwt.token })
            .then( data => {
                if (data.error) console.log(data.error)
                else {
                    auth.signout( () => console.log('deleted') )
                    this.setState({ redirect: true })
                }
            })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render() {
        const redirect = this.state.redirect;
        if (redirect) return <Redirect to='/' />

        return (
            <span>
                <IconButton aria-label="Delete" onClick={this.clickButton} color="secondary" >
                    <DeleteIcon />
                </IconButton>
                <Dialog open={this.state.open} onClose={this.handleRequestClose} >
                    <DialogTitle>{"Delete Account"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Confirm to delete your account</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary" >
                            Cancel
                        </Button>
                        <Button onClick={this.deleteAccount} color="secondary" autoFocus="autoFocus" >
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        )
    }
}

/* DeleteUser takes the userId as a prop to be used in the delete fetch call, so we add a
propType check for the required prop userId.
*/
DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired
}

export default DeleteUser;