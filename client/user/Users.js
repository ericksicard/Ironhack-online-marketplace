import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { list } from './api-user.js'  


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(1),
      margin: theme.spacing(5)
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    }
});

class Users extends Component {
    state = { users: []}

    componentDidMount = () => {
        list()
            .then( data => {
                if (data.error) console.log(data.error)
                else this.setState({ users: data })
            })
    }

    render() {
        const {classes} = this.props

        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {this.state.users.map( (user, idx) => {
                        return <Link to={'/user/' + user._id} key={idx}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={user.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <ArrowForwardIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Link>
                    })}
                </List>
            </Paper>
        )
    }
}

/*
To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
Users.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Users)