import Link from 'next/link';
import PropTypes from 'prop-types';

import SmallText from './small-text';
import Svg from './svg';

const Nav = ({ text, textLink, textTag, withIcons = true, ...other }) => (
  <nav {...other}>
    <div className="flex items-center justify-between text-zircon ~h-48/64 ~px-8/12">
      <SmallText
        as={textTag}
        className="group m-0 flex items-center justify-between font-medium ~h-32/40"
      >
        {textLink ? (
          <Link
            className="flex h-100p items-center justify-between text-zircon no-underline hover:text-white"
            href={textLink}
          >
            <Svg
              className="~w-18/24 h-auto block text-manatee ~mr-8/12  group-hover:text-linkWater group-focus:text-linkWater"
              name="arrow-left"
            />
            {text}
          </Link>
        ) : (
          text
        )}
      </SmallText>
      {withIcons ? <ul className="relative m-0 flex list-none p-0"></ul> : null}
    </div>
  </nav>
);

{
  /* <ul className="d-flex m-0 p-0 lis-none pos-relative">
{renderSocialNavItems(social)}
<NavItem
  as="button"
  icon="Mail"
  onClick={() => {
    copyToClipboard('ronan.levesque@gmail.com');
    // eslint-disable-next-line no-alert
    alert('Email address successfully copied to clipboard.');
  }}
/>
<NavItem icon="Articles" to={routes.ARTICLES} />
</ul> */
}

Nav.propTypes = {
  text: PropTypes.node.isRequired,
  textLink: PropTypes.string,
  textTag: PropTypes.string,
  withIcons: PropTypes.bool,
};

export default Nav;
