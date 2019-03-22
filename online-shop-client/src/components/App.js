import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import MenuAppBar from './MenuAppBar';
import ShoppingCart from "../pages/ShoppingCart";

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
        <MenuAppBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart/" component={ShoppingCart} />
            {/* <Route exact path="/users/" component={Users} />
            <Route exact path="/posts/new-post/" component={NewPost} />
            <Route exact path="/users/:userId/posts/" component={Posts} />
            <Route exact path="/posts/:postId/" component={Post} /> */}
        </Switch>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(App));
