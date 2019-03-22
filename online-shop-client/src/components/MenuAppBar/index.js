import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import MenuAppBar from "./MenuAppBar";
import MenuDrawer from "./MenuDrawer";

class MenuAppBarContainer extends React.Component {
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
    this.props.history.push("/");
  };

  handleCartButton = () => {
    this.props.history.push("/cart");
  };

  render() {
    const { theme, itemsInCart } = this.props;
    const { auth, open } = this.state;

    return (
      <Fragment>
        <MenuAppBar
          itemsInCart={itemsInCart}
          auth={auth}
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
          handleCartButton={this.handleCartButton}
          handleAuthButton={this.handleAuthButton}
        />
        <MenuDrawer
          theme={theme}
          open={open}
          handleDrawerClose={this.handleDrawerClose}
          handleCartButton={this.handleCartButton}
          handleHomeButton={this.handleHomeButton}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    itemsInCart: store.shoppingCart.itemsInCart
  };
};

export default connect(mapStateToProps)(withRouter(MenuAppBarContainer));
