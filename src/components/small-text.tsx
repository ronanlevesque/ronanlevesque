import cx from 'classnames';
import React from 'react';

import Slot from '@/components/slot';

type SmallTextProps = {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
};

const SmallText = ({
  asChild,
  children,
  className,
  ...other
}: SmallTextProps) => {
  const Component = asChild ? Slot : 'span';
  return (
    <Component
      className={cx(
        'font-medium uppercase tracking-widest ~text-14/16',
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};

export default SmallText;
