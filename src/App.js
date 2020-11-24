import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav0 from "./components/Nav0/Nav0";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Nav0 />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
