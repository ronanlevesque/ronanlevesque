import cx from 'classnames';
import React from 'react';

type SmallTextProps = {
  children: React.ReactNode;
  className?: string;
};

const SmallText = ({ children, className, ...other }: SmallTextProps) => (
  <span
    className={cx('uppercase tracking-widest ~text-14/16', className)}
    {...other}
  >
    {children}
  </span>
);

export default SmallText;
