import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Subtitle = ({ as: Component = 'h2', children, className, ...other }) => (
  <Component
    className={cx(
      'fw-normal ff-mono tt-upper lsp-big color-blueBayoux mb-0 fluid:mt-4-12 fluid:fsz-12-16',
      className
    )}
    {...other}
  >
    {children}
  </Component>
);

Subtitle.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Subtitle;
