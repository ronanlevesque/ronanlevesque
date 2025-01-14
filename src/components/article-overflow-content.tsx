import cx from 'classnames';

type ArticleOverflowContentProps = {
  children: React.ReactNode;
  className: string;
};

const ArticleOverflowContent = ({
  children,
  className,
  ...other
}: ArticleOverflowContentProps) => (
  <div
    className={cx(
      'grid ~gap-24/28',
      'xl:!ml-[-201px] xl:w-1200 xl:px-12',
      className
    )}
    {...other}
  >
    {children}
  </div>
);

export default ArticleOverflowContent;
