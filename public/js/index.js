import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Webpage from "../components/main.jsx";
import page1 from "../components/page1.jsx";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Webpage} />
          <Route path="/resume" component={page1} />
        </Switch>
      </Router>
    );
  }
}

render(<Home />, document.getElementById("app"));
