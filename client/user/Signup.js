import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { create } from './api-user.js'
import {Link} from 'react-router-dom'

import { Card,CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
})

class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    }

    //HANDLER FUNCTIONS    
    // The handleChange function takes the new value entered in the input field and sets it to state .
    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    //The clickSubmit function is called when the form is submitted.
    /*
    It takes the input values from state and calls the create fetch method to sign up the user with the backend.
    Then, depending on the response from the server, either an error message is shown or a success dialog is shown.
    */
    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }
        create(user)
            .then( data => {
                if (data.error) this.setState({ error: data.error })
                else this.setState({ error: '', open: true })
            })
    }


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.title}>
                            Sign Up
                        </Typography>
                        <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" /> <br/>
                        <TextField id="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal" /> <br/>
                        <TextField id="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal" /> <br/>
                        { this.state.error && (
                        <Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {this.state.error}
                        </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button color="primary" raised="raised" onClick={this.clickSubmit} className={classes.submit}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>New account successfully created.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button color="primary" autoFocus="autoFocus" variant="raised">
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

/* To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component. */
Signup.propTypes = {
    classes: PropTypes.object.isRequired
  }

/* Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props. */ 
export default withStyles(styles)(Signup)