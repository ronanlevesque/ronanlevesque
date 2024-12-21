import cx from 'classnames';
import PropTypes from 'prop-types';

const Hero = ({ alignLeft, children }) => (
  <header className="flex grow ~py-80/160">
    <div
      className={cx(
        'm-auto px-8',
        'xs:w-90p xs:px-0',
        alignLeft ? 'text-left' : 'text-center'
      )}
    >
      {children}
    </div>
  </header>
);

Hero.propTypes = {
  alignLeft: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Hero;
