import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const InternalLink = ({ children, ...props }) => {
  const handleClick = () => {
    window.handlePageTransition();
  };

  const { to } = props;

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

InternalLink.defaultProps = {
  children: []
};

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array])
};

export default InternalLink;
