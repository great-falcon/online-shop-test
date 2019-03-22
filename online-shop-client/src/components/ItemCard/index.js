import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ItemCard from './ItemCard'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px'
  }
};

function ItemCardContainer(props) {
  const { classes, item } = props;
  return <ItemCard classes={classes} item={item} />
}

ItemCardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCardContainer);