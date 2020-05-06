import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Svg from 'components/Svg';

const Footer = ({ className, ...other }) => (
  <footer className={cx('fluid:pt-48-96 fluid:pb-24-48', className)} {...other}>
    <Svg
      className="d-block m-auto h-auto color-manatee fluid:w-20-28"
      name="logo-ronan-levesque"
    />
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Footer;
