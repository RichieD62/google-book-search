import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Search from "./components/Search"
import Saved from "./components/Saved"


class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
