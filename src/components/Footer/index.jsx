// import { Link } from 'gatsby'
import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

// const Footer = ({ author, title }) => (
const Footer = ({ title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        {title}
        {/*
        <Link to="/profile/">
          <br />
          <strong>{author}</strong> on Profile
        </Link>
        */}
      </p>
    </div>
  </div>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
};

export default Footer;
