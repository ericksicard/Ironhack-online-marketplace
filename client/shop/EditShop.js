import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { read, update } from './api-shop.js'
import auth from '../auth/auth-helper'
import MyProducts from '../product/MyProducts'


import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    subheading: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    error: {
        verticalAlign: 'middle'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 'auto'
    },
    input: {
        display: 'none'
    },
    filename:{
        marginLeft:'10px'
    }
  })


class EditShop extends Component {
    constructor({match}) {
        super()
        this.state = {
            name: '',
            description: '',
            image: '',
            redirect: false,
            error: ''
        }
        this.match = match
    }
    
    
    componentDidMount = () => {
        this.shopData = new FormData();
        const jwt = auth.isAuthenticated();
        
        read(
            {shopId: this.match.params.shopId},
            {t: jwt.token}
        )
        .then( data => {
            if ( data.error ) this.setState({ error: data.error })
            else this.setState({ 
                id: data._id,
                name: data.name,
                description: data.description,
                owner: data.owner.name
            })
        })
    }

    clickSubmit = () => {
        const jwt = auth.isAuthenticated();
        update(
            {shopId: this.match.params.shopId},
            {t: jwt.token},
            this.shopData
        )
        .then( data => {
            if (data.error) this.setState({ error: data.error })
            else this.setState({ redirect: true })
        })
    }

    handleChange = (event, name) => {
        const value = name ==='image'
        ? event.target.files[0]
        : event.target.value

        this.shopData.set(name, value);
        this.setState({ [name]: value })
    }

    render() {
        const {classes} = this.props
        const logoUrl = this.state.id
            ? `/api/shops/logo/${this.state.id}?${new Date().getTime()}`
            : '/api/shops/defaultphoto'

        if (this.state.redirect) {
            return (<Redirect to={'/seller/shops'} />)
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={3} >
                    <Grid item xs={6} sm={6} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography type='headline' component='h2' className={classes.title} >
                                    Edit Shop
                                </Typography>
                                <br/>
                                <Avatar src={logoUrl} className={classes.bigAvatar} />
                                <br/>
                                <input 
                                    accept='image/*' 
                                    onChange={ event => this.handleChange(event, 'image')} 
                                    className={classes.input}
                                    id="icon-button-file" 
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="icon-button-file">
                                    <Button variant='contained' color='primary' component='span' >
                                        Change Logo
                                    </Button>
                                </label>
                                <span className={classes.filename}>
                                    {this.state.image ? this.state.image.name : ''}
                                </span> <br/>
                                <TextField 
                                    id='name'
                                    label='Name'
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={ event => this.handleChange(event, 'name')}
                                    margin='normal'
                                /><br/>
                                <TextField 
                                    id='multiline-flexible'
                                    label='Description'
                                    multiline
                                    rows='3'
                                    className={classes.textField}
                                    value={this.state.description}
                                    onChange={ event => this.handleChange(event, 'description')}
                                    margin='normal'
                                /><br/>
                                <Typography type='subheading' component='h4' className={classes.subheading}>
                                    Owner: {this.state.owner}
                                </Typography> <br/>
                                {
                                    this.state.error && (
                                        <Typography component='p' color='error'>
                                            <Icon color='error' className={classes.error}>error</Icon>
                                            {this.state.error}
                                        </Typography>
                                    )
                                }
                            </CardContent>
                            <CardActions>
                                <Button 
                                    color='primary' 
                                    variant='contained'
                                    onClick={this.clickSubmit}
                                    className={classes.submit}
                                >Update</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <MyProducts shopId={this.match.params.shopId}/>
                    </Grid>
                </Grid>                
            </div>
        )
    }
}

/*
To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
EditShop.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(EditShop)