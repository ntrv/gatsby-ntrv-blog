/* eslint react/no-danger: 0 */

import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Page = ({ data }) => (
  <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
);

Page.propTypes = {
  data: PropTypes.shape({
    post: {
      html: PropTypes.string.isRequired,
    },
  }).isRequired,
};

export default Page;
