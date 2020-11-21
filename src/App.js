import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            Main Page
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
