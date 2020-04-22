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
    className={cx(
      'fsz-12 ff-roboto tt-upper lsp-big md:fsz-14 lg:fsz-16',
      className
    )}
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
