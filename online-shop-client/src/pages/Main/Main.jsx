import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ItemCard from '../../components/ItemCard'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center'
  },
  gridList: {
    width: '80%',
    height: '100%',
  },
});

function ItemsGridList(props) {
  const { classes, items } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} spacing={1} className={classes.gridList}>
        {items.map((item) => (
          <GridListTile key={item.url}>
            <ItemCard item={item} />
          </GridListTile>
          // <GridListTile key={item.url}>
          //   <img src={item.url} alt={item.title} />
          // </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ItemsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsGridList);
