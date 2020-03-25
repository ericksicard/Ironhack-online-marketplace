import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import seaImg from '../assets/images/underwaterSurface.jpg'

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing(5)
    },
    title: {
      padding:`${theme.spacing(3)}px ${theme.spacing(2)}.5px ${theme.spacing(2)}px`,
      color: theme.palette.text.secondary
    },
    media: {
      minHeight: 330
    }
  })

class Home extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>               
                    <Typography type="headline" component="h2" className={classes.title}>
                        Home Page
                    </Typography>
                    <CardMedia className={classes.media} image={seaImg} title="Underwater Surface" />
                    <CardContent>
                        <Typography type="body1" component="p">
                            Welcome to the Ironhack Online Marketplace home page
                        </Typography>
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
Home.propTypes = {
    classes: PropTypes.object.isRequired
  }

/*
Exporting the component with the defined styles passed in using withStyles from Material-UI.
Using withStyles like this creates a Higher-Order Component(HOC) that has access to the defined
style objects as props.
*/  
export default withStyles(styles)(Home)