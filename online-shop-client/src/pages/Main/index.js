import React, { Component } from "react";
import getItems from "../../actions/ItemsActions/getItems";
import { connect } from "react-redux";
import Main from "./Main";
import Loader from "../../components/Loader";
import Error from "../../components/Error/";

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { itemsList, isLoading, error } = this.props;
    if (error) {
      return <Error />;
    }
    if (!itemsList.length && isLoading) {
      return <Loader loading={isLoading} />
    }

    return <Main items={itemsList} />
  }
}

const mapStateToProps = store => {
  return {
    itemsList: store.items.itemsList,
    isLoading: store.loading.isLoading,
    error: store.errorHandling.error,
    isError: store.errorHandling.isError,
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
