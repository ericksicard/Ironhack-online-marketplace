import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { listByOwner } from './api-shop.js'
import auth from '../auth/auth-helper'
import DeleteShop from './DeleteShop'  


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px` ,
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
      },
    addButton:{
        float:'right'
    },
    leftIcon: {
        marginRight: "8px"
    },
    secondaryActions: {
        top: '35%'
    }
});


class MyShops extends Component {
    state = { 
        shops: [],
        redirectToSignin: false
    }
    
    loadShops = () => {
        const jwt = auth.isAuthenticated()
        listByOwner(
            { userId: jwt.user._id },
            { t: jwt.token }
            )
            .then( data => {
                if (data.error) this.setState({ redirectToSignin: true }) 
                else {
                    this.setState({ shops: data }) 
                }
            })
    }

    removeShop = (shop) => {
        const updatedShops = this.state.shops
        const index = updatedShops.indexOf(shop)
        updatedShops.splice(index, 1)
        this.setState({shops: updatedShops})
    }

    componentDidMount = () => {
        this.loadShops()
    }

    render() {
        const {classes} = this.props
        const redirectToSignin = this.state.redirectToSignin
        
        if (redirectToSignin) {
            return <Redirect to='/signin'/>
        }

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography type="title" className={classes.title}>
                        Your Shops
                        <span className={classes.addButton}>
                            <Link to='/seller/shop/new'>
                                <Button color='primary' variant='contained'>
                                    <Icon className={classes.leftIcon}>add_box</Icon>
                                    New Shop
                                </Button>
                            </Link>
                        </span>
                    </Typography>
                    <List dense>
                        {this.state.shops.map( (shop, idx) => {
                            return <span key={idx}>                            
                                        <ListItem button>
                                            <ListItemAvatar>
                                                <Avatar src={'/api/shops/logo/' + shop._id + "?" + new Date().getTime()} />
                                            </ListItemAvatar>
                                            <ListItemText primary={shop.name} secondary={shop.description} />
                                            { 
                                                auth.isAuthenticated().user && auth.isAuthenticated().user._id == shop.owner._id &&
                                                (
                                                    <ListItemSecondaryAction className={classes.secondaryActions}>
                                                        <Link to={'/seller/orders/' + shop.name + '/' + shop._id}>
                                                            <Button aria-label='Orders' color='primary'>
                                                                View Orders
                                                            </Button>
                                                        </Link>
                                                        <Link to={"/seller/shop/edit/" + shop._id}>
                                                            <IconButton aria-label='Edit' color='primary'>
                                                                <EditIcon />
                                                            </IconButton>
                                                        </Link>
                                                        <DeleteShop shop={shop} onRemove={this.removeShop} />
                                                    </ListItemSecondaryAction>
                                                )
                                            }                                   
                                        </ListItem>
                                        <Divider />
                                    </span>
                        })}
                    </List>
                </Paper>
            </div>
        )
    }
}

/*
To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
MyShops.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(MyShops)