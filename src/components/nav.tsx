'use client';

import cx from 'classnames';
import Link from 'next/link';

import NavIcon from '@/components/nav-icon';
import NavItem from '@/components/nav-item';
import SmallText from '@/components/small-text';
import Svg from '@/components/svg';

import * as routes from '@/constants/routes';

import socialData from '@/data/social.json';

type NavProps = {
  text: React.ReactNode;
  link?: string;
  withIcons?: boolean;
};

const Nav = ({ text, link, withIcons = true, ...other }: NavProps) => (
  <nav className="with-border" {...other}>
    <div className="flex items-center justify-between text-zircon ~h-48/64 ~px-8/12">
      <SmallText className="m-0 flex items-center justify-between font-medium ~h-32/40">
        {link ? (
          <Link
            className={cx(
              'group flex h-100p items-center justify-between text-zircon no-underline'
            )}
            href={link}
          >
            <Svg
              aria-hidden
              className={cx(
                'block h-auto text-manatee transition ~mr-8/12 ~w-18/24',
                'group-hover:text-linkWater group-focus:text-linkWater'
              )}
              name="arrow-left"
            />
            {text}
          </Link>
        ) : (
          text
        )}
      </SmallText>
      {withIcons ? (
        <ul className="relative m-0 flex list-none p-0">
          {Object.keys(socialData).map((name) => (
            <NavItem asChild name={name} key={name}>
              <Link href={socialData[name]}>
                <NavIcon icon={name.toLowerCase()} />
              </Link>
            </NavItem>
          ))}
          <NavItem
            name="Mail"
            onClick={() => {
              navigator.clipboard.writeText('ronan.levesque@gmail.com');
              alert('Email address successfully copied to clipboard.');
            }}
          >
            <NavIcon icon="mail" />
          </NavItem>
          <NavItem asChild name="Articles">
            <Link href={routes.ARTICLES}>
              <NavIcon icon="articles" />
            </Link>
          </NavItem>
        </ul>
      ) : null}
    </div>
  </nav>
);

export default Nav;
