import React, { Component } from "react";
import getItems from "../../actions/ItemsActions/getItems";
import { connect } from "react-redux";
import Main from "./Main";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { itemsList, isLoading, error } = this.props.items;
    if (error) {
      return <Error error={error} />;
    }
    if (isLoading) {
      return <Loading />;
    }

    return <Main items={itemsList} />;
  }
}

const mapStateToProps = store => {
  return {
    items: store.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsContainer);
