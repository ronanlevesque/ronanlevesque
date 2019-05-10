import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ as: Component, children, className, ...other }) => (
  <Component
    className="fw-normal w-100p mh-0 pv-48 fsz-20 mv-auto ta-center lh-bigger color-sanJuan md:fsz-24 md:pv-80 lg:pv-120 lg:fsz-32"
    {...other}
  >
    {children}
  </Component>
);

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  as: 'h1',
};

export default Title;
