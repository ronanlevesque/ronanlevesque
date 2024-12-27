import cx from 'classnames';
import PropTypes from 'prop-types';

const ArticleOverflowContent = ({
  as: Component = 'div',
  children,
  className,
  ...other
}) => (
  <Component
    className={cx(
      'grid gap-[1.5em] ~text-14/18',
      'xl:!ml-[-201px] xl:w-1200 xl:px-12',
      className
    )}
    {...other}
  >
    {children}
  </Component>
);

ArticleOverflowContent.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ArticleOverflowContent;
