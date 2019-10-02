import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

import styles from './NavItem.css';
import Link from 'components/Link';
import Svg from 'components/Svg';

const NavItem = ({
  as: Component,
  dataBefore,
  icon,
  isLast,
  link,
  ...other
}) => {
  const darkMode = useDarkMode(true);

  return (
    <li
      className={cx('d-flex ai-center ml-12 md:ml-16 lg:ml-20')}
      css={isLast && styles.last}
    >
      <Component
        {...other}
        aria-label={icon}
        to={link ? link : null}
        css={styles.cta}
        className={cx(
          'p-0 bdw-0 app-none bgc-transparent cursor-pointer d-block td-none ff-libre',
          darkMode.value
            ? 'color-linkWater hover:color-white'
            : 'color-blueBayoux hover:color-blackPearl'
        )}
        data-before={dataBefore ? dataBefore : icon}
      >
        <Svg
          aria-hidden
          className="pe-none d-block w-20 h-20 lg:w-24 lg:h-24"
          name={icon.toLowerCase()}
        />
      </Component>
    </li>
  );
};

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
