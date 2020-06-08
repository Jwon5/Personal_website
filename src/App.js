import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <h1>wtf</h1>
    </Router>
  );
}

export default App;
