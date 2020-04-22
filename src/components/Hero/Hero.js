import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Hero = ({ alignLeft, children }) => (
  <header className="pv-80 fxg-1 d-flex md:pv-120 lg:pv-160">
    <div
      className={cx(
        'ph-8 xs:w-90p xs:ph-0 m-auto',
        alignLeft ? 'ta-left' : 'ta-center'
      )}
    >
      {children}
    </div>
  </header>
);

Hero.propTypes = {
  alignLeft: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Hero;
