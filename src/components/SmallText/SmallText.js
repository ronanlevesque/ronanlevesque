import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SmallText = ({ as: Component, children, className, ...other }) => (
  <Component
    className={cx('fsz-14 ff-roboto tt-upper lsp-big lg:fsz-16', className)}
    {...other}
  >
    {children}
  </Component>
);

SmallText.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SmallText.defaultProps = {
  as: 'span',
};

export default SmallText;
