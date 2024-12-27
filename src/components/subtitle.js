import cx from 'classnames';
import PropTypes from 'prop-types';

const Subtitle = ({ as: Component = 'h2', children, className, ...other }) => (
  <Component
    className={cx(
      'mb-0 font-libre italic text-blueBayoux ~text-18/24 ~mt-12/16',
      className
    )}
    {...other}
  >
    {children}
  </Component>
);

Subtitle.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Subtitle;
