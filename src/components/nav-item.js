'use client';

import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Svg from '@/components/svg';

const NavItem = ({ as: Component = Link, icon, onClick, ...other }) => (
  <li className="flex items-center ~ml-8/12">
    <Component
      aria-label={icon}
      className={cx(
        'flex cursor-pointer appearance-none items-center justify-center border-0 bg-transparent p-0 font-libre text-linkWater no-underline transition ~h-32/40 ~w-24/32 hover:text-white focus:text-white',
        'md:hover:before:translate-x-0 md:hover:before:opacity-100',
        'before:hidden md:focus:before:translate-x-0 md:focus:before:opacity-100',
        'before:hidden',
        'md:before:pointer-events-none md:before:absolute md:before:right-full md:before:top-1/2 md:before:block md:before:-translate-y-1/2 md:before:translate-x-[0.3em] md:before:whitespace-nowrap md:before:italic md:before:text-manatee md:before:opacity-0 md:before:transition md:before:content-[attr(data-before)] md:before:~text-16/18'
      )}
      data-before={icon}
      onClick={(e) => {
        e.target.blur();
        if (onClick) onClick(e);
      }}
      {...other}
    >
      <Svg
        aria-hidden
        className="pointer-events-none block h-auto ~w-18/24"
        name={icon.toLowerCase()}
      />
    </Component>
  </li>
);

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavItem;
