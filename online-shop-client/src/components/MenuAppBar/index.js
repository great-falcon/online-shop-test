import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import MenuAppBar from "./MenuAppBar";
import MenuDrawer from "./MenuDrawer";

class MenuAppBarContainer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleAuthButton = () => {
    // this.setState({ auth: !this.state.auth });
    this.props.history.push('/login')
  };

  handleHomeButton = () => {
    this.props.history.push("/");
  };

  handleCartButton = () => {
    this.props.history.push("/cart");
  };

  render() {
    const { theme, itemsInCart, isAuthorized } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <MenuAppBar
          itemsInCart={itemsInCart}
          auth={isAuthorized}
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
    itemsInCart: store.shoppingCart.itemsInCart,
    isAuthorized: store.auth.isAuthorized,
  };
};

export default connect(mapStateToProps)(withRouter(MenuAppBarContainer));
