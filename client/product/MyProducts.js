import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

import { listByShop } from './api-product.js';
import auth from '../auth/auth-helper'
import DeleteProduct from './DeleteProduct'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
    products: {
      padding: '24px'
    },
    addButton:{
      float:'right'
    },
    leftIcon: {
      marginRight: "8px"
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.protectedTitle,
      fontSize: '1.2em'
    },
    subheading: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    cover: {
      width: 110,
      height: 100,
      margin: '8px'
    },
    details: {
      padding: '10px'
    },
  })

class MyProducts extends Component {
    state = {
        products: []
    }

    loadProducts = () => {
        listByShop(
            {shopId: this.props.shopId}
        )
        .then( data => {
            if (data.error) this.setState({ error: data.error })
            else this.setState({ products: data })
        })
    }

    removeProduct = product => {
        const updatedProducts = this.state.products;
        const index = updatedProducts.indexOf(product);
        updatedProducts.splice(index, 1)
        this.setState({ products: updatedProducts })
    }

    componentDidMount = () => {
        this.loadProducts()
    }

    render() {
        const {classes} = this.props;

        return(
            <Card className={classes.products}>
                <Typography type='title' className={classes.title}>
                    Products
                    <span className={classes.addButton}>
                        <Link to={'/seller/' + this.props.shopId + '/products/new'}>
                            <Button color='primary' variant='contained'>
                                <Icon className={classes.leftIcon}>add_box</Icon>
                                New Product
                            </Button>
                        </Link>
                    </span>
                </Typography>
                <List dense>
                    {this.state.products.map( (product, idx) => {
                        return <span key={idx}>
                            <ListItem>
                                <CardMedia
                                    className={classes.cover}
                                    image={'/api/product/image/' + product._id + '?' + new Date().getTime()}
                                    title={product.name}
                                />
                                <div className={classes.details}>
                                    <Typography type='headline' component='h2' color='primary' className={classes.productTitle}>  
                                        {product.name}
                                    </Typography>
                                    <Typography type='subheading' component='h4' className={classes.subheading}>
                                        Quantity: {product.quantity} | Price: {product.price}
                                    </Typography>
                                </div>
                                <ListItemSecondaryAction>
                                    <Link to={'/seller/' + product.shop._id + '/' + product._id + '/edit'}>
                                        <IconButton aria-label='Edit' color='primary'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                    <DeleteProduct
                                        product={product}
                                        shopId={this.props.shopId}
                                        onRemove={this.removeProduct}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </span>
                    })}
                </List>
            </Card>
        )
    }
}

MyProducts.propTypes = {
    classes: PropTypes.object.isRequired,
    shopId: PropTypes.string.isRequired
  }
  
export default withStyles(styles)(MyProducts)