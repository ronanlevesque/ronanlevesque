import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';

const Hero = ({ children, navText, navTextLink, navTextTag, navWithIcons }) => (
  <header className="d-flex fxd-column mih-100vh">
    <Nav
      className="fxs-1"
      text={navText}
      textLink={navTextLink}
      textTag={navTextTag}
      withIcons={navWithIcons}
    />
    <div className="fxg-1 d-flex">
      <p className="w-100p mh-0 pv-48 fsz-18 mv-auto ta-center lh-bigger color-sanJuan md:fsz-24 md:pv-80 lg:pv-120 lg:fsz-32">
        {children}
      </p>
    </div>
  </header>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  navText: PropTypes.string.isRequired,
  navTextLink: PropTypes.string,
  navTextTag: PropTypes.string,
  navWithIcons: PropTypes.bool,
};

Hero.defaultProps = {
  navTextTag: 'span',
  navWithIcons: true,
};

export default Hero;
