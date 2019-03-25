import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ItemCard from '../../components/ItemCard'
import { styles } from './style';

function ItemsGridList(props) {
  const { classes, items } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} spacing={1} className={classes.gridList}>
        {items.map((item) => (
          <GridListTile key={item._id}>
            <ItemCard item={item} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ItemsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ItemsGridList);
