import cx from 'classnames';

type SubtitleProps = {
  children: string;
  className?: string;
};

const Subtitle = ({ children, className, ...other }: SubtitleProps) => (
  <h2
    className={cx(
      'font-libre italic text-blueBayoux ~text-18/24 ~mt-8/12',
      className
    )}
    {...other}
  >
    {children}
  </h2>
);

export default Subtitle;
