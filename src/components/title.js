import cx from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ as: Component = 'h1', children, className, ...other }) => (
  <Component
    className={cx(
      'leading-bigger my-0 font-libre font-normal ~text-20/32',
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
