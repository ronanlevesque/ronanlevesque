import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

const Title = ({ as: Component, children, className, ...other }) => {
  const darkMode = useDarkMode(true);

  return (
    <Component
      className={cx(
        'fw-normal mv-0 fsz-20 lh-bigger md:fsz-24 lg:fsz-32',
        darkMode.value ? 'color-zircon' : 'color-sanJuan',
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};

Title.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  as: 'h1',
};

export default Title;
