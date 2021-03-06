import React from "react";
import PropTypes from "prop-types";

import StyledBreadcrumb from "./Breadcrumb.styles";

const Breadcrumb = ({ children, ...props }) => (
  <nav>
    <StyledBreadcrumb
      itemScope
      itemType="http://schema.org/Breadcrumb"
      {...props}
    >
      {children}
    </StyledBreadcrumb>
  </nav>
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
