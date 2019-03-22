import React from "react";
import { connect } from "react-redux";
import addToShoppingCart from "../../actions/ShoppingCartActions/addToShoppingCart";
import ItemCard from "./ItemCard";

class ItemCardContainer extends React.Component {
  handleAddToCart = () => {
    this.props.addToShoppingCart(this.props.item);
  };

  render() {
    const { item } = this.props;
    return <ItemCard handleAddToCart={this.handleAddToCart} item={item} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: item => dispatch(addToShoppingCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemCardContainer);
