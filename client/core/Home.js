import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { listLatest, listCategories } from '../product/api-product.js'
import seaImg from '../assets/images/underwaterSurface.jpg'
import Search from '../product/Search'
import Categories from '../product/Categories'
import Suggestions from '../product/Suggestions'

import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  }
})

class Home extends Component {
  state = {
    suggestionTitle: "Latest Products",
    suggestions: [],
    categories: []
  };

  loadLatest = () => {
    listLatest()
    .then( data => {
      if (data.error) console.log(data.error)
      else this.setState({ suggestions: data })
    })
  }

  loadCategories = () => {
    listCategories()
    .then( data => {
      if (data.error) console.log(data.error)
      else this.setState({ categories: data })
    })
  }

  componentDidMount = () => {
    this.loadLatest()
    this.loadCategories()
  }

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>             
          <Grid container spacing={3}>
            <Grid item xs={8} sm={8}>
              <Search categories={this.state.categories} />
              <Categories categories={this.state.categories} />
            </Grid>
            <Grid item xs={4} sm={4}>
              <Suggestions products={this.state.suggestions} title={this.state.suggestionTitle} />
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
Home.propTypes = {
    classes: PropTypes.object.isRequired
  }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Home)