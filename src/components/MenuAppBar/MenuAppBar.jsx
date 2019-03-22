import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

class MenuAppBar extends React.Component {
  render() {
    const {
      classes,
      itemsInCart,
      auth,
      open,
      handleDrawerOpen,
      handleCartButton,
      handleAuthButton
    } = this.props;

    return (
      <div className={classes.rootAppBar}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              UltraShop
            </Typography>
            {auth ? (
              <IconButton color="inherit" onClick={handleCartButton}>
                <Badge badgeContent={itemsInCart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : (
              <Button color="inherit" onClick={handleAuthButton}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuAppBar);
