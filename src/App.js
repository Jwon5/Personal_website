import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav.js";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
