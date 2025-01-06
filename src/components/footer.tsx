import cx from 'classnames';

import Svg from '@/components/svg';

type FooterProps = {
  className?: string;
};

const Footer = ({ className, ...other }: FooterProps) => (
  <footer className={cx('~pt-48/96 ~pb-20/40', className)} {...other}>
    <Svg
      className="m-auto block h-auto text-blueBayoux ~w-22/28"
      name="logo-ronan-levesque"
    />
  </footer>
);

export default Footer;
