import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.css';

const Title = ({ as: Component, children, className, ...other }) => (
  <Component
    css={styles.root}
    className="fw-normal mv-0 fsz-20 lh-bigger md:fsz-24 lg:fsz-32 color-zircon"
    {...other}
  >
    {children}
  </Component>
);

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  as: 'h1',
};

export default Title;
