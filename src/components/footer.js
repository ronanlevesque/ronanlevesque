import cx from 'classnames';
import PropTypes from 'prop-types';

import Svg from '@/components/svg';

const Footer = ({ className, ...other }) => (
  <footer className={cx('~pt-48/96 ~pb-20/40', className)} {...other}>
    <Svg
      className="~w-22/28 h-auto m-auto block text-blueBayoux"
      name="logo-ronan-levesque"
    />
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
