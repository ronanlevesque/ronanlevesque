import cx from 'classnames';
import PropTypes from 'prop-types';

const SmallText = ({
  as: Component = 'span',
  children,
  className,
  ...other
}) => (
  <Component
    className={cx('uppercase tracking-widest ~text-14/16', className)}
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
