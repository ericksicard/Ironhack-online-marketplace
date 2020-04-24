import React, {Component} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import auth from '../auth/auth-helper';
import { stripeUpdate } from './api-user.js';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: theme.mixins.gutters({
      maxWidth: 600,
      margin: 'auto',
      padding: theme.spacing(3),
      marginTop: heme.spacing(5)
    }),
    title: {
      margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
      color: theme.palette.protectedTitle,
      fontSize: '1.1em'
    },
    subheading: {
      color: theme.palette.openTitle,
      marginLeft: "24px"
    }
  })

class StripeConnect extends Component {
    state = {
        error: false,
        connecting: false,
        connected: false
    }

    componentDidMount = () => {
        const parsed = queryString.parse(this.props.location.search);

        if (parsed.error) {
            this.setState({ error: true })
        }

        if (parsed.code) {
            this.setState({ connecting: true, error: false })
            //post call to stripe, get credentials and update user data
            const jwt = auth.isAuthenticated()
            stripeUpdate(
                { userId: jwt.user._id },
                { t: jwt.token },
                parsed.code
            )
            .then( data => {
                if (data.error) this.setState({ error: true, connected: false, connecting: false })
                else this.setState({ error: false, connected: true, connecting: false})
            })
        }
    }

    render() {
      const {classes} = this.props;

      return (
        <div>
          <Paper className={classes.root} elevation={4}>
            <Typography type='title' className={classes.title}>
              Connect your Stripe Account
            </Typography>
            {this.state.error && 
              (<Typography type='subheading' className={classes.subheading}>
                Could not connect your Stripe account. Try again later.
              </Typography>)
            }
            {this.state.connecting && 
              (<Typography type="subheading" className={classes.subheading}>
                Connecting your Stripe account ...
              </Typography>)
            }
            {this.state.connected && 
              (<Typography type="subheading" className={classes.subheading}>
                Your Stripe account successfully connected!
              </Typography>)
            }
          </Paper>
        </div>
      )
    }
}



StripeConnect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StripeConnect)