import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({ children, className, ...other }) => (
  <div className={cx('m-auto maw-1200', className)} {...other}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
