'use client';

import cx from 'classnames';

import Slot from '@/components/slot';
import SmallText from '@/components/small-text';

type SectionTitleProps = {
  asChild?: boolean;
  children: React.ReactNode;
  withBorder?: boolean;
};

const SectionTitle = ({
  asChild,
  children,
  withBorder = true,
  ...other
}: SectionTitleProps) => {
  const Component = asChild ? Slot : 'h2';
  return (
    <SmallText
      className={cx(
        'm-0 font-medium text-manatee',
        withBorder && 'with-border'
      )}
      {...other}
    >
      <Component className="flex items-center ~h-48/64 ~px-8/12">
        {children}
      </Component>
    </SmallText>
  );
};

export default SectionTitle;
