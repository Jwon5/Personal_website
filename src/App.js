import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav.js";
import Home from "./components/home.js";
import Projects from "./components/project.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import { container } from "./assets/jss/material-kit-react/material-kit-react";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
