import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({ children, className }) => (
  <div className={cx('m-auto maw-600 md:maw-800 lg:maw-1200', className)}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
