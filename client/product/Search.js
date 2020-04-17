import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {list} from './api-product.js'
import Products from './Products'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    card: {
      margin: 'auto',
      textAlign: 'center',
      paddingTop: 10,
      backgroundColor: '#80808024'
    },
    menu: {
      width: 200,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 130,
      verticalAlign: 'bottom',
      marginBottom: '20px'
    },
    searchField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      marginBottom: '20px'
    },
    searchButton: {
      minWidth: '20px',
      height: '30px',
      padding: '0 8px',
      marginBottom: '20px'
    }
  })

class Search extends Component {
  state = {
      category: '',
      search: '',
      results: [],
      searched: false
  }
  handleChange = (event, name) => {
      this.setState({ [name]: event.target.value })
  }
  search = () => {
    if (this.state.search) {
      list({
        search: this.state.search || undefined,
        category: this.state.category
      })
      .then( data => {
        if (data.error) console.log(data.error)
        else this.setState({ results: data, searched: true })
      })
    }
  }

  enterKey = event => {
    if (event.keyCode == 13) {
      event.preventDefault()
      this.search()
    }
  }
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Card className={classes.card}> 
          <TextField 
            id='select-category'
            select
            label='Select Category'
            className={classes.textField}
            value={this.state.category}
            onChange={ event => this.handleChange(event, 'category') }
            SelectProps={{
              MenuProps:{
                className: classes.menu
              }
            }}
            margin='normal'
          >
            <MenuItem value='All'>
              All
            </MenuItem>
            {this.props.categories.map( option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id='search'
            label='Search products'
            type='search'
            onKeyDown={this.enterKey}
            onChange={ event => this.handleChange(event, 'search')}
            className={classes.searchField}
            margin='normal'
          />
          <Button variant='contained' color='primary' className={classes.searchButton} onClick={this.search}>
            <SearchIcon />
          </Button>
          <Divider />
          <Products products={this.state.results} searched={this.state.searched} />
        </Card>
      </div>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default withStyles(styles)(Search)
