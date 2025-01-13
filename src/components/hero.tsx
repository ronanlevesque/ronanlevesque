import cx from 'classnames';

type HeroProps = {
  children: React.ReactNode;
  className?: string;
};

const Hero = ({ children, className }: HeroProps) => (
  <header
    className={cx(
      'm-auto text-balance text-center ~px-8/12 ~py-48/96',
      className
    )}
  >
    {children}
  </header>
);

export default Hero;
