import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ as: Component, children, className, ...other }) => (
  <Component
    className={cx(
      'fw-normal mv-0 fsz-18 lh-bigger md:fsz-24 lg:fsz-32',
      className
    )}
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
