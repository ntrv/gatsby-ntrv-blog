import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Navi = ({ location, title }) => (
  <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
    <div className="container">
      <Link className="text-center" to="/">
        <h1 className="navbar-brand mb-0">{title}</h1>
      </Link>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li
            className={
              location.pathname === "/" ? "nav-item active" : "nav-item"
            }
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={
              location.pathname === "/profile/" ? "nav-item active" : "nav-item"
            }
          >
            {/*
            <Link to="/profile/" className="nav-link">
              Profile
            </Link>
            */}
          </li>
        </ul>
      </div>
      <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
    </div>
  </nav>
);

Navi.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navi;
