import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Nav from 'components/Nav';

const Hero = ({
  children,
  fullScreen,
  navText,
  navTextLink,
  navTextTag,
  navWithIcons,
}) => (
  <header className={cx('d-flex fxd-column', fullScreen && 'mih-100vh')}>
    <Nav
      className="fxs-1"
      text={navText}
      textLink={navTextLink}
      textTag={navTextTag}
      withIcons={navWithIcons}
    />
    <div className="fxg-1 d-flex">{children}</div>
  </header>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  fullScreen: PropTypes.bool,
  navText: PropTypes.string.isRequired,
  navTextLink: PropTypes.string,
  navTextTag: PropTypes.string,
  navWithIcons: PropTypes.bool,
};

Hero.defaultProps = {
  fullScreen: true,
  navTextTag: 'span',
  navWithIcons: true,
};

export default Hero;
