import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";
import changeQuantity from "../../actions/ShoppingCartActions/changeQuantity";
import removeFromShoppingCart from "../../actions/ShoppingCartActions/removeFromShoppingCart";

class ShoppingCartContainer extends React.Component {
  handleDeleteItem = id => () => {
    this.props.removeFromShoppingCart(id);
  };

  handleDecrementItemsCount = id => () => {
    this.props.changeQuantity(
      id,
      this.props.itemsInCart.find(elem => elem.id === id).count - 1
    );
  };

  handleIncrementItemsCount = id => () => {
    this.props.changeQuantity(
      id,
      this.props.itemsInCart.find(elem => elem.id === id).count + 1
    );
  };

  render() {
    const { itemsInCart } = this.props;
    return (
      <ShoppingCart
        items={itemsInCart}
        handleDeleteItem={this.handleDeleteItem}
        handleDecrementItemsCount={this.handleDecrementItemsCount}
        handleIncrementItemsCount={this.handleIncrementItemsCount}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    itemsInCart: store.shoppingCart.itemsInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeQuantity: (id, newCount) => dispatch(changeQuantity(id, newCount)),
    removeFromShoppingCart: id => dispatch(removeFromShoppingCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
