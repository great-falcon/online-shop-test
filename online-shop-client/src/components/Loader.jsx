import React from 'react';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from "classnames";

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
  placeholder: {
    height: 40,
  },
  disable: {
    display: 'none'
  }
});

class Loader extends React.Component {

  render() {
    const { classes, loading } = this.props;

    return (
      <div className={classNames(classes.root, {
        [classes.disable]: !loading
      })}>
        <div className={classes.placeholder}>
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Loader);
