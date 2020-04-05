import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import auth from '../auth/auth-helper'; 
import create from './api-shop';


import { withStyles } from '@material-ui/core/styles';
import { CardContent, Button, TextField, Icon, CardActions } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle,
      fontSize: '1em'
    },
    error: {
      verticalAlign: 'middle'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    input: {
        display: 'none'
    },
    filename:{
        marginLeft:'10px'
    }
  })

class NewShop extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        redirect: false,
        error: ''
    }

    componentDidMount = () => {
        this.shopData = new FormData()
    }

    handleChange = (event, name) => {
        const value = name === 'image'
        ? event.target.file[0]
        : event.target.value

        this.shopData.set(name, value)
        this.setState({ [name]: value })
    }

    clickSubmit = () => {
        const jwt = auth.isAuthenticated()

        create(
            {userId: jwt.user._id},
            {t: jwt.token},
            this.shopData   
        )
        .then( data => {
            if (data.error) this.setState({error: data.error})
            else this.setState({error: '', redirect: true})
        })
    }

    render() {
        const {classes} = this.props;

        if (this.state.redirect) {
            return (<Redirect to={'/seller/shops'} />)
        }

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography type='headline' component='h2' className={classes.title}>New Shop</Typography><br/>
                    <input accept='image/*' onChange={ event => this.handleChange(event, 'image')} className={classes.input} id='icon-button-file' type='file' />
                    <label htmlFor='icon-button-file'>
                        <Button color='secondary' variant='contained' component='span'>
                            Upload Logo
                            <PhotoCamera />
                        </Button>
                    </label>
                    <span className={classes.filename}>{this.state.image ? this.state.image : ''}</span><br/>
                    <TextField 
                        id='name' 
                        label='Name' 
                        className={classes.textField} 
                        value={this.state.name}
                        onChange={ event => this.handleChange(event, 'name')}
                        margin='normal'
                    /> <br/>
                    <TextField 
                        id='multiline-flexible'
                        label='Description'
                        multiline
                        rows='2'
                        value={this.state.description}
                        onChange={ event => this.handleChange(event, 'description')}
                        className={classes.textField}
                        margin='normal'
                    /> <br/>
                    
                    {this.state.error && (
                        <Typography component='p' color='error'>
                            <Icon color='error' className={classes.error}>error</Icon>
                            {this.state.error}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button color='primary' variant='contained' onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
        )
    }
}

/* To validate the required injection of style declarations as props to the component, we add
the PropTypes requirement validator to the defined component.
*/
NewShop.propTypes = { classes: PropTypes.object.isRequired }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(NewShop)