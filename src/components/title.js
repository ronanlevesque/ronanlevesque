import cx from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ as: Component = 'h1', children, className, ...other }) => (
  <Component
    className={cx(
      'my-0 font-bold leading-big text-zircon ~text-32/48',
      className
    )}
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

export default Title;
