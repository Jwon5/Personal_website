import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <div className="collpase navbar-collapse float-right ">
              <ul className="navbar-nav mr-auto float-right">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Exercises
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Exercise Log
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/user" className="nav-link">
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
