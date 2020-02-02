import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavItem.css';
import Link from 'components/Link';
import Svg from 'components/Svg';

const NavItem = ({ as: Component, dataBefore, icon, isLast, ...other }) => (
  <li
    css={isLast && styles.last}
    className="d-flex ai-center ml-12 md:ml-16 lg:ml-20"
  >
    <Component
      aria-label={icon}
      css={styles.cta}
      className="p-0 bdw-0 app-none bgc-transparent cursor-pointer d-block td-none ff-libre color-linkWater hover:color-white"
      data-before={dataBefore ? dataBefore : icon}
      onClick={e => e.target.blur()}
      rel={other.href ? 'noopener noreferrer' : null}
      target={other.href ? '_blank' : null}
      {...other}
    >
      <Svg
        aria-hidden
        className="pe-none d-block w-20 h-20 lg:w-24 lg:h-24"
        name={icon.toLowerCase()}
      />
    </Component>
  </li>
);

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dataBefore: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  link: PropTypes.string,
};

NavItem.defaultProps = {
  as: Link,
};

export default NavItem;
