import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

class MenuDrawer extends React.Component {
  render() {
    const {
      classes,
      theme,
      open,
      handleDrawerClose,
      handleCartButton,
      handleHomeButton
    } = this.props;

    return (
      <div className={classes.rootDrawer}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List onClick={handleDrawerClose}>
            <ListItem button onClick={handleHomeButton}>
              <ListItemIcon>
                <HomeIcon
                  color="disabled"
                  className={classes.icon}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleCartButton}>
              <ListItemIcon>
                <ShoppingCartIcon
                  color="disabled"
                  className={classes.icon}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText primary="Shopping Cart" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuDrawer);
