import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-warning">
          <a className="navbar-brand pl-2" href="#">
            <strong>LOGO</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/props123">
                  Props
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  New Page
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  New Page
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  New Page
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
