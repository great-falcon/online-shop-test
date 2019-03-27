import React from 'react';
import { connect } from "react-redux";
import Order from './Order';
import Error from '../../components/Error';
import Loader from '../../components/Loader';


const TAX_RATE = 0.07;


class OrderContainer extends React.Component {

  ccyFormat = num => {
    return `${num.toFixed(2)}`;
  }
  
  subtotal = items => {
    return items.map(({ rowPrice }) => rowPrice).reduce((sum, i) => sum + i, 0);
  }
  invoiceTaxes = items => {
    return TAX_RATE * this.subtotal(items)
  }
  invoiceTotal = items => {
    return this.invoiceTaxes(items) + this.subtotal(items)
  }

  render() {
    const rows = this.props.orderItems
    const { isLoading, error } = this.props;
    if (error) {
      return <Error error={error} />;
    }
    if (!rows.length && isLoading) {
      return <Loader loading={isLoading} />
    }
    
    return <Order
      rows={rows} 
      invoiceSubtotal={this.subtotal(rows)}
      invoiceTaxes={this.invoiceTaxes(rows)}
      invoiceTotal={this.invoiceTotal(rows)}
      ccyFormat={this.ccyFormat}
      tax={(TAX_RATE * 100).toFixed(0)}
       />
  }
}

const mapStateToProps = store => {
  return {
    orderItems: store.order.itemsList,
    isLoading: store.loading.isLoading,
    error: store.errorHandling.error,
    isError: store.errorHandling.isError,
  };
};


export default connect(
  mapStateToProps
)(OrderContainer);