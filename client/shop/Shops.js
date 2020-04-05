import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { list } from './api-shop'  


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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


class Shops extends Component {
    state = { shops: []}
    
    loadShops = () => {
        list()
            .then( data => {
                if (data.error) console.log(data.error)
                else this.setState({ shops: data })
            })
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
                        All Shops
                    </Typography>
                    <List dense>
                        {this.state.shops.map( (shop, idx) => {
                            return <Link to={'/shops/' + shop._id} key={idx}>
                                        <Divider />
                                        <ListItem button>
                                            <ListItemAvatar>
                                                <Avatar src={'/api/shops/logo/' + shop._id + '?' + new Date().getTime()} />
                                            </ListItemAvatar>
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
                                    </Link>
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
Shops.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Shops)