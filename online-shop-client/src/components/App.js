import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import ShoppingCart from "../pages/ShoppingCart";
import MainLayout from '../layaut/default'
import Order from "../pages/Order";
import LoginForm from "./LoginForm";
import Test from '../components/Test'


const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login/" component={LoginForm} />
          <Route exact path="/cart/" component={ShoppingCart} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/test' component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(App));
