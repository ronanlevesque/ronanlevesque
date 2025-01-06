'use client';

import cx from 'classnames';
import React from 'react';

import Slot from '@/components/slot';

type NavItemProps = {
  asChild?: boolean;
  children: React.ReactNode;
  name: string;
  onClick?: () => void;
};

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(
  ({ children, asChild, name, onClick, ...other }, forwardedRef) => {
    const Component = asChild ? Slot : 'button';
    return (
      <li className="flex items-center ~ml-8/12">
        <Component
          aria-label={name}
          className={cx(
            'flex cursor-pointer appearance-none items-center justify-center border-0 bg-transparent p-0 font-libre text-linkWater no-underline transition ~h-32/40 ~w-24/32 hover:text-white focus:text-white',
            'md:hover:before:translate-x-0 md:hover:before:opacity-100',
            'before:hidden md:focus:before:translate-x-0 md:focus:before:opacity-100',
            'before:hidden',
            'md:before:pointer-events-none md:before:absolute md:before:right-full md:before:top-1/2 md:before:block md:before:-translate-y-1/2 md:before:translate-x-[0.3em] md:before:whitespace-nowrap md:before:italic md:before:text-manatee md:before:opacity-0 md:before:transition md:before:content-[attr(data-before)] md:before:~text-16/18'
          )}
          data-before={name}
          onClick={() => {
            (document.activeElement as HTMLElement).blur();
            if (onClick) onClick();
          }}
          ref={forwardedRef as React.RefObject<any>}
          {...other}
        >
          {children}
        </Component>
      </li>
    );
  }
);

export default NavItem;
