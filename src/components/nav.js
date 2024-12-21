'use client';

import cx from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import NavItem from '@/components/nav-item';
import SmallText from '@/components/small-text';
import Svg from '@/components/svg';

import * as routes from '@/constants/routes';

import socialData from '@/data/social';

import { copyToClipboard } from '@/helpers';

const Nav = ({ text, textLink, textTag, withIcons = true, ...other }) => (
  <nav className="withBorder" {...other}>
    <div className="flex items-center justify-between text-zircon ~h-48/64 ~px-8/12">
      <SmallText
        as={textTag}
        className="m-0 flex items-center justify-between font-medium ~h-32/40"
      >
        {textLink ? (
          <Link
            className={cx(
              'group flex h-100p items-center justify-between text-zircon no-underline'
            )}
            href={textLink}
          >
            <Svg
              className={cx(
                '~w-18/24 h-auto block text-manatee ~mr-8/12',
                'transition group-hover:text-linkWater group-focus:text-linkWater'
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
              copyToClipboard('ronan.levesque@gmail.com');
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
  textLink: PropTypes.string,
  textTag: PropTypes.string,
  withIcons: PropTypes.bool,
};

export default Nav;
