import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ArticleOverflowContent.css';

const ArticleOverflowContent = ({
  as: Component = 'div',
  children,
  className,
}) => (
  <Component
    css={styles.root}
    className={cx('d-grid fluid:fsz-14-18 xl:w-1200 xl:ph-12', className)}
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
