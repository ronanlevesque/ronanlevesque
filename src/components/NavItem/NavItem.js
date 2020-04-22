import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavItem.css';
import Link from 'components/Link';
import Svg from 'components/Svg';

const NavItem = ({
  as: Component = Link,
  dataBefore,
  icon,
  isLast,
  ...other
}) => (
  <li className="d-flex ai-center ml-4 md:ml-8 lg:ml-16">
    <Component
      aria-label={icon}
      css={styles.cta}
      className="p-0 bdw-0 app-none bgc-transparent cursor-pointer d-flex ai-center jc-center td-none ff-libre color-linkWater w-24 h-32 hover:color-white md:w-28 md:h-40 lg:w-32 lg:h-48"
      data-before={dataBefore ? dataBefore : icon}
      onClick={e => {
        e.target.blur();
      }}
      {...other}
    >
      <Svg
        aria-hidden
        className="pe-none d-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        name={icon.toLowerCase()}
      />
    </Component>
  </li>
);

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dataBefore: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default NavItem;
