import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavItem.css';
import Link from 'components/Link';
import Svg from 'components/Svg';

const NavItem = ({ as: Component = Link, dataBefore, icon, ...other }) => (
  <li className="d-flex ai-center fluid:ml-8-12">
    <Component
      aria-label={icon}
      css={styles.cta}
      className="p-0 bdw-0 app-none bgc-transparent cursor-pointer d-flex ai-center jc-center td-none ff-libre color-linkWater hover:color-white fluid:w-24-32 fluid:h-32-40"
      data-before={dataBefore ? dataBefore : icon}
      onClick={e => {
        e.target.blur();
      }}
      {...other}
    >
      <Svg
        aria-hidden
        className="pe-none d-block h-auto fluid:w-18-24"
        name={icon.toLowerCase()}
      />
    </Component>
  </li>
);

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dataBefore: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default NavItem;
