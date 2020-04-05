import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { listByOwner } from './api-shop'
import auth from '../auth/auth-helper'
import DeleteShop from './DeleteShop'  


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Divider, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.protectedTitle,
        textAlign: 'center',
        fontSize: '1.2em'
    },
    avatar:{
        width: 100,
        height: 100
    },
    subheading: {
        color: theme.palette.text.secondary
    },
    shopTitle: {
        fontSize: '1.2em',
        marginBottom: '5px'
    },
    details: {
        padding: '24px'
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
            {userId: jwt.user._id},
            {t: jwt.token}
            ).then( data => {
                if (data.error) this.setState({redirectToSignin: true})
                else this.setState({ shops: data })
            })
    }

    removeShop = (shop) => {
        const updatedShop = this.state.shops;
        const shops = updatedShop.filter( (shop, idx, arr) => arr.indexOf(shop) == idx );
        this.setState({ shops: shops })
    }

    componentDidMount = () => {
        this.loadShops()
    }

    render() {
        const {classes} = this.props

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography type="title" className={classes.title}>
                        Your Shops
                        <span className={classes.addButton}>
                            <Link to='/seller/shop/new'>
                                <Button color='primary' variant='contained'>
                                    <AddBoxIcon className={classes.leftIcon} />
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
                                                <Avatar src={'/api/shops/logo/' + shop._id + '?' + new Date().getTime()} />
                                            </ListItemAvatar>
                                            <ListItemText primary={shop.name} secondary={shop.description} />
                                            { auth.isAuthenticated().user && auth.isAuthenticated().user._id == shop.owner._id && (
                                                <ListItemSecondaryAction>
                                                    <Link to={'/seller/orders/' + shop.name + '/' + shop._id}>
                                                        <Button aria-label='Orders' color='primary'>
                                                            View Orders
                                                        </Button>
                                                    </Link>
                                                    <Link to={"/seller/shop/edit/" + shop._id}>
                                                        <IconButton aria-label='Edit' color='primary'>
                                                            <Edit />
                                                        </IconButton>
                                                    </Link>
                                                    <DeleteShop shop={shop} onRemove={this.removeShop} />
                                                </ListItemSecondaryAction>
                                            )} 


                                            <div className={classes.details}>
                                                <Typography type='headline' component='h2' color='primary' className={classes.shopTitle}>
                                                    {shop.name}
                                                </Typography>
                                                <Typography type='subheading' component='h4' className={classes.subheading}>
                                                    {shop.description}
                                                </Typography>
                                            </div>                                    
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