import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const InternalLink = ({ children, ...props }) => {
  const handleClick = () => {
    window.handlePageTransition();
  };

  const { to, onClick } = props;

  return (
    <Link
      to={to}
      onClick={e => {
        handleClick();
        onClick(e);
      }}
    >
      {children}
    </Link>
  );
};

InternalLink.defaultProps = {
  children: [],
  onClick: () => {}
};

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array])
};

export default InternalLink;
