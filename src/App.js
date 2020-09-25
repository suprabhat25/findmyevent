import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./components/events/Events";
import AddEvent from "./components/events/AddEvent";
import EditEvent from "./components/events/EditEvent";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Notfound from "./components/pages/Notfound";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Find Event" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />
                <Route exact path="/event/edit/:id" component={EditEvent} />
                <Route exact path="/about" component={About} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
