import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav.js";
import Home from "./components/home.js";
import contact from "./components/contact.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/Projects" component={Project}>
          <Project />
        </Route>
        <Route path="/contact" component={contact}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
