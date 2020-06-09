import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <div className="row">
            <Link to="/" className="navbar-brand">
              John Won
            </Link>
          </div>
          <div className="row float-right">
            <div className="collpase navbar-nav navbar-collapse float-right ">
              <NavLink to="/" className="navbar-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-item nav-link">
                About
              </NavLink>
              <NavLink to="/portfolio" className="navbar-item nav-link">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="navbar-item nav-link">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
