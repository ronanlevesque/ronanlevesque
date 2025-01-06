import cx from 'classnames';

type TitleProps = {
  children: string;
  className?: string;
};

const Title = ({ children, className, ...other }: TitleProps) => (
  <h1
    className={cx(
      'my-0 font-bold leading-big text-zircon ~text-32/48',
      className
    )}
    {...other}
  >
    {children}
  </h1>
);

export default Title;
