import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Divider from "@material-ui/core/Divider";
import { styles } from "./style";
import Button from "@material-ui/core/Button";

class ShoppingCart extends React.Component {
  render() {
    const {
      classes,
      items,
      handleDeleteItem,
      handleDecrementItemsCount,
      handleIncrementItemsCount,
      totalCost,
      handleCheckout
    } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Shopping Cart
        </Typography>
        <div className={classes.demo}>
          <List>
            {items.map(item => (
              <ListItem key={item._id}>
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.thumbnailUrl} />
                </ListItemAvatar>
                <ListItemText primary={item.title} />
                <ListItemSecondaryAction>
                  {item.count > 1 && (
                    <IconButton
                      aria-label="Decrement"
                      onClick={handleDecrementItemsCount(item._id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  )}
                  {item.count}
                  <IconButton
                    aria-label="Increment"
                    onClick={handleIncrementItemsCount(item._id)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={handleDeleteItem(item._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className={classes.checkout}>
            <Typography variant="h6" className={classes.costText}>
              Total Cost: ${totalCost.toFixed(2)}
            </Typography>
            {totalCost > 0 && <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button>}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingCart);
