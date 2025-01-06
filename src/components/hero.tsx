import cx from 'classnames';

type HeroProps = {
  children: React.ReactNode;
};

const Hero = ({ children }: HeroProps) => (
  <header className="flex grow text-center ~py-48/96">
    <div className={cx('m-auto text-balance px-8', 'xs:w-90p xs:px-0')}>
      {children}
    </div>
  </header>
);

export default Hero;
