import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  costText: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

class ShoppingCart extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const { classes, items, handleDeleteItem, handleChangeQuantity } = this.props;
    const { dense } = this.state;
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Shopping Cart
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            {items.map(item => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.thumbnailUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                />
                <ListItemSecondaryAction>
                  {item.count > 1 && (<IconButton aria-label="Decrement" onClick={handleChangeQuantity(item.id, item.count-1)}>
                    <RemoveIcon />
                  </IconButton>)}
                    {item.count}
                  <IconButton aria-label="Increment" onClick={handleChangeQuantity(item.id, item.count+1)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton aria-label="Delete" onClick={handleDeleteItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" className={classes.costText}>
            Total Cost: 
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingCart);