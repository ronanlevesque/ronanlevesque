import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SmallText = ({
  as: Component = 'span',
  children,
  className,
  ...other
}) => (
  <Component
    className={cx('ff-roboto tt-upper lsp-big fluid:fsz-12-16', className)}
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

export default SmallText;
