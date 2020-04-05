import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { signin } from './api-auth'
import auth from './../auth/auth-helper'


import { Card, CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

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

class Signin extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false,  //it should be set to true when the user successfully signs in after submitting the form and the received JWT is stored in the sessionStorage. 
        seller: false
    }

    /* The redirectToReferrer should be set to true when the user successfully signs in after
    submitting the form and the received JWT is stored in the sessionStorage. To store the
    JWT and redirect afterwords, we will call the authenticate() method defined in auth-helper.js. */
    clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        signin(user)
            .then( data => {
                if (data.error) this.setState({ error: data.error })
                else {
                    auth.authenticate( data, () => {
                        this.setState({ redirectToReferrer: true, seller: data.seller })
                    })
                }
            })
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    render() {
        const {classes} = this.props;
        /* The Redirect component, if rendered, will take the app to the last location or to the Home
        component at the root. */
        const {from} = this.props.location.state || { from: {pathname: '/'} }
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return (<Redirect to={from} />)
        }

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        Sign In
                    </Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/><br/> 
                    { this.state.error && (
                    <Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {this.state.error}
                    </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
        )
    }
}

/* To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component. */
Signin.propTypes = {
    classes: PropTypes.object.isRequired
}

/* Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props. */
export default withStyles(styles)(Signin)