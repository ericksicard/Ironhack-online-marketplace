import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(1),
      paddingBottom: 24,
      backgroundColor: '#80808024'
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle,
      fontSize: '1.1em'
    },
    viewButton: {
      verticalAlign: 'middle'
    },
    card: {
      display: 'inline-flex',
      
      width: '100%',
      //display: 'inline-flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      padding: '5% 1%'
    },
    cover: {
      width: '65%',
      height: '85%',
      padding: '1%'
    },
    controls: {
      marginTop: '8px'
    },
    date: {
      color: 'rgba(0, 0, 0, 0.4)'
    },
    icon: {
      verticalAlign: 'sub'
    },
    iconButton: {
      width: '28px',
      height: '28px'
    },
    productTitle: {
      fontSize: '1.15em',
      marginBottom: '5px'
    },
    subheading: {
      color: 'rgba(88, 114, 128, 0.67)'
    },
    actions: {
      float: 'right',
      marginRight: '6px'
    },
    price: {
      display: 'inline',
      lineHeight: '3',
      paddingLeft: '8px',
      color: theme.palette.text.secondary
    }
  })

  class Suggestions extends Component {
      render() {
          const {classes} = this.props;

          return(
              <div>
                  <Paper className={classes.root} elevation={4}>
                    <Typography type='title' className={classes.title}>
                        {this.props.title}
                    </Typography>
                    {this.props.products.map( (product, idx) => {
                        return <span key={idx}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img" 
                                    className={classes.cover}
                                    image={'/api/product/image/' + product._id}
                                    title={product.name}
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                      <Link to={'/product/' + product._id}>
                                        <Typography component='h3' variant='h3' className={classes.productTitle} color='primary'>
                                          {product.name}
                                        </Typography>
                                      </Link>
                                      <Link to={'/shops/' + product.shop._id}>
                                          <Typography variant="subtitle1" className={classes.subheading}>
                                              <StorefrontIcon className={classes.icon} />
                                              {product.shop.name}
                                          </Typography>
                                      </Link>
                                      <Typography component="p" className={classes.date}>
                                          Added on {(new Date(product.created)).toDateString()}
                                      </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                        <Typography type="subheading" component="h3" className={classes.price} color="primary">
                                            $ {product.price}
                                        </Typography>
                                        <span className={classes.actions}>
                                            <Link to={'/product/' + product._id}>
                                                <IconButton color="secondary" dense="dense">
                                                    <VisibilityIcon className={classes.iconButton}/>
                                                </IconButton>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </Card>
                            <Divider />
                        </span>
                    })}
                  </Paper>
              </div>
          )
      }
  }


Suggestions.propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default withStyles(styles)(Suggestions)