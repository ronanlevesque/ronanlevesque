import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classNames';
import styles from './SmallText.css';

const SmallText = ({ as: Component, children, className, ...other }) => (
  <Component
    css={styles.root}
    className={cx('fsz-12 ff-roboto tt-upper md:fsz-14 lg:fsz-16', className)}
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
