import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { read } from './api-shop.js'


import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 30,
    },
    card: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2)
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
    },
    bigAvatar: {
        width: 100,
        height: 100,
        margin: 'auto'
    },
    subheading: {
        marginTop: theme.spacing.unit,
        color: theme.palette.openTitle
    },
    productTitle: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle,
        width: '100%',
        fontSize: '1.2em'
    }
});

class Shop extends Component {
    constructor({ match }) {
        super()
        this.state = {
            shop: '',
            products: []
        }
        this.match = match;
    }
    
    componentDidMount= () => {
        read({ shopId: this.match.params.shopId })
        .then( data => {
            if (data.error) this.setState({ error: data.error })
            else this.setState({ shop: data })
        })
    }


    render() { 
        const { classes } = this.props;
        const logoUrl = this.state.shop._id
        ? `/api/shops/logo/${this.state.shop._id}?${new Date().getTime()}`
        : '/api/shops/defaultphoto'

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.title}>
                            {this.state.shop.name}
                        </Typography>
                        <br/>
                        <Avatar src={logoUrl} className={classes.bigAvatar}/>
                        <br/>
                        <Typography type="subheading" component="h2" className={classes.subheading}>
                            {this.state.shop.description}
                        </Typography><br/>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

/*
To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
Shop.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Shop)