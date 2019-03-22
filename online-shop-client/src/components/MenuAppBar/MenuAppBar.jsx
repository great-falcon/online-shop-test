import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CssBaseline from '@material-ui/core/CssBaseline';

class MenuAppBar extends React.Component {
  state = {
    auth: false,
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleAuthButton = () => {
    this.setState({ auth: !this.state.auth });
  };

  handleHomeButton = () => {
    this.props.history.push('/');
  }

  handleCartButton = () => {
    this.props.history.push('/cart');
  }

  render() {
    const { classes, theme, itemsInCart } = this.props;
    const { auth, open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              UltraShop
            </Typography>
            {auth ? (
              <IconButton color="inherit" onClick={this.handleCartButton}>
                <Badge badgeContent={itemsInCart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : (
              <Button color="inherit" onClick={this.handleAuthButton}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
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
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List onClick={this.handleDrawerClose}>
            <ListItem button onClick={this.handleHomeButton}>
              <ListItemIcon>
                <HomeIcon
                  color="disabled"
                  className={classes.icon}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={this.handleCartButton}>
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

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    itemsInCart: store.shoppingCart.itemsInCart
  }
}


export default connect(
  mapStateToProps
)(withRouter(MenuAppBar));