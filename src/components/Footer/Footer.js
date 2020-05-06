import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Svg from 'components/Svg';

const Footer = ({ className, ...other }) => (
  <footer className={cx('fluid:pt-48-96 fluid:pb-20-40', className)} {...other}>
    <Svg
      className="d-block m-auto h-auto color-sanJuan fluid:w-20-28"
      name="logo-ronan-levesque"
    />
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
