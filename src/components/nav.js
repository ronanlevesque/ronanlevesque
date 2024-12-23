'use client';

import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import NavItem from '@/components/nav-item';
import SmallText from '@/components/small-text';
import Svg from '@/components/svg';

import * as routes from '@/constants/routes';

import socialData from '@/data/social';

const Nav = ({ text, link, withIcons = true, ...other }) => (
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
          {Object.keys(socialData).map((icon) => (
            <NavItem key={icon} icon={icon} href={socialData[icon]} as="a" />
          ))}
          <NavItem
            as="button"
            icon="Mail"
            onClick={() => {
              navigator.clipboard.writeText('ronan.levesque@gmail.com');
              alert('Email address successfully copied to clipboard.');
            }}
          />
          <NavItem icon="Articles" href={routes.ARTICLES} />
        </ul>
      ) : null}
    </div>
  </nav>
);

Nav.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.string,
  withIcons: PropTypes.bool,
};

export default Nav;
