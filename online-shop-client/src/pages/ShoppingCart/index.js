import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from 'react-redux';
import changeQuantity from "../../actions/ShoppingCartActions/changeQuantity";
import removeFromShoppingCart from "../../actions/ShoppingCartActions/removeFromShoppingCart";

class ShoppingCartContainer extends React.Component {
  removeItemFromCart = (id) => () => {
    this.props.removeFromShoppingCart(id);
  }

  handleChangeQuantity = (id, newCount) => () => {
    this.props.changeQuantity(id, newCount)
  }

  render() {
    const {itemsInCart} = this.props;
    return (
      <ShoppingCart items={itemsInCart} handleDeleteItem={this.removeItemFromCart} handleChangeQuantity={this.handleChangeQuantity} />
    )
  }
}


const mapStateToProps = store => {
  return {
    itemsInCart: store.shoppingCart.itemsInCart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeQuantity: (id, newCount) => dispatch(changeQuantity(id, newCount)),
    removeFromShoppingCart: (id) => dispatch(removeFromShoppingCart(id)),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);

