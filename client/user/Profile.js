import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import DeleteUser from './DeleteUser'
import auth from './../auth/auth-helper'
import { read } from './api-user.js'


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.protectedTitle
  }
})

/*
1- The profile information can be fetched from the server only if the user is signed in, and to
verify this, the component has to provide the JWT to the read fetch call, otherwise, the user
should be redirected to the Sign In view.

2- We also need to get access to the match props passed by the Route component, which will
contain :userId param value and can be accessed as this.match.params.userId when the component mounts.

3- The Profile component should fetch user information and render it when the userId
parameter changes in the route. However, when the app goes from one profile view to the
other, and it is just a param change in the route path, the React component does not re-
mount. Rather, it passes the new props in componentWillReceiveProps . In order to
make sure the component loads the relevant user's information when the route param
updates, we will place the read fetch call in the init() function, which can then be called
in both componentDidMount and componentWillReceiveProps .
*/
class Profile extends Component {
    constructor({ match }) {
        super()
        this.state = {
            user: '',
            redirectToSignin: false
        }
        this.match = match
    }

    /* The init(userId) function takes the userId value, and calls the read user fetch method.
    Since this method also requires credentials to authorize the signed-in user, the JWT is
    retrieved from sessionStorage using the isAuthenticated method from auth-helper.js.
    Once the server responds, either the state is updated with the user information or
     the view is redirected to the Sign-in view.
    */
    init = userId => {
        const jwt = auth.isAuthenticated()

        read({ userId: userId }, { t: jwt.token } )
            .then( data => {
                if (data.error) this.setState({ redirectToSignin: true })
                else this.setState({ user: data })
            })
    }

    /* This init function is called in componentDidMount and componentWillReceiveProps
    with the relevant userId value passed in as a parameter so that the correct user
    information is fetched and loaded in the component.
    */
    //CONSIDER static getDerivedStateFromProps
    componentWillReceiveProps = (props) => {
        this.init(props.match.params.userId)
    }

    componentDidMount = () => {
        this.init( this.match.params.userId)
    }

    render() {
        const {classes} = this.props;
        const redirectToSignin = this.state.redirectToSignin;

        if (redirectToSignin) return <Redirect to='/signin' />
        return (
            <div>
                <Paper className={classes.root} elevation={4} >
                    <Typography type="title" className={classes.title}>
                        Profile
                    </Typography>
                    <List dense >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={this.state.user.name} secondary={this.state.user.email} />
                            { auth.isAuthenticated().user && auth.isAuthenticated._id == this.state.user._id && (
                                <ListItemSecondaryAction>
                                    <Link to={'/user/edit/' + this.state.user._id} >
                                        <IconButton aria-label="Edit" color="primary">
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                    <DeleteUser userId={this.state.user._id} />
                                </ListItemSecondaryAction>
                            )}
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={ "Joined: " + (new Date(this.state.user.created)).toString() } />
                        </ListItem>
                    </List>
                </Paper>
            </div>
        )
    }
}

/* To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
Profile.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Profile)