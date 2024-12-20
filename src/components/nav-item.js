import Link from 'next/link';
import PropTypes from 'prop-types';
//import styles from './NavItem.css';

import Svg from './components/Svg';

const NavItem = ({
  as: Component = Link,
  dataBefore,
  icon,
  onClick,
  ...other
}) => (
  <li className="d-flex ai-center fluid:ml-8-12">
    <Component
      aria-label={icon}
      css={styles.cta}
      className="bdw-0 app-none bgc-transparent d-flex ai-center jc-center td-none ff-libre color-linkWater hover:color-white fluid:w-24-32 fluid:h-32-40 cursor-pointer p-0"
      data-before={dataBefore ? dataBefore : icon}
      onClick={(e) => {
        e.target.blur();
        if (onClick) onClick(e);
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
  onClick: PropTypes.func,
};

export default NavItem;
