import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Nav from 'components/Nav';

const Hero = ({
  alignLeft,
  children,
  navText,
  navTextLink,
  navTextTag,
  navWithIcons,
}) => (
  <header className="d-flex fxd-column">
    <Nav
      className="fxs-1"
      text={navText}
      textLink={navTextLink}
      textTag={navTextTag}
      withIcons={navWithIcons}
    />
    <div className="pv-80 fxg-1 d-flex md:pv-120 lg:pv-160">
      <div
        className={cx(
          'w-100p xs:w-80p m-auto',
          alignLeft ? 'ta-left' : 'ta-center'
        )}
      >
        {children}
      </div>
    </div>
  </header>
);

Hero.propTypes = {
  alignLeft: PropTypes.bool,
  children: PropTypes.node.isRequired,
  navText: PropTypes.node.isRequired,
  navTextLink: PropTypes.string,
  navTextTag: PropTypes.string,
  navWithIcons: PropTypes.bool,
};

Hero.defaultProps = {
  navTextTag: 'span',
  navWithIcons: true,
};

export default Hero;
