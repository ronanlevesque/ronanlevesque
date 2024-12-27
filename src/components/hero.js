import cx from 'classnames';
import PropTypes from 'prop-types';

const Hero = ({ children }) => (
  <header className="flex grow text-center ~py-48/96">
    <div className={cx('m-auto text-balance px-8', 'xs:w-90p xs:px-0')}>
      {children}
    </div>
  </header>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
