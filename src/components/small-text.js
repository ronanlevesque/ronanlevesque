import PropTypes from 'prop-types';
import cx from 'classnames';

const SmallText = ({
  as: Component = 'span',
  children,
  className,
  ...other
}) => (
  <Component
    className={cx('~text-14/16 uppercase tracking-widest', className)}
    {...other}
  >
    {children}
  </Component>
);

SmallText.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SmallText;
