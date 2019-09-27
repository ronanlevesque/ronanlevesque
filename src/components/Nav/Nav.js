import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

import Link from 'components/Link';
import NavItem from 'components/NavItem';
import SmallText from 'components/SmallText';
import Svg from 'components/Svg';
import * as routes from 'constants/routes';
import helperStyles from 'css/helpers.css';
import { useSiteMetadata } from 'hooks';

const renderSocialNavItems = social =>
  Object.keys(social).map(icon => (
    <NavItem key={icon} icon={icon} link={social[icon]} />
  ));

const Nav = ({ text, textLink, textTag, withIcons, ...other }) => {
  const { social } = useSiteMetadata();
  const darkMode = useDarkMode(false);

  return (
    <nav css={helperStyles.gradientLine} {...other}>
      <div
        className={cx(
          'pv-12 d-flex jc-between ai-center md:pv-16 lg:pv-20',
          darkMode.value ? 'color-zircon' : 'color-sanJuan'
        )}
      >
        <SmallText as={textTag} className="m-0 fw-medium">
          {textLink ? (
            <Link
              className={cx(
                'td-none d-flex ai-center jc-between',
                darkMode.value ? 'color-zircon' : 'color-sanJuan'
              )}
              to={textLink}
            >
              <Svg
                name="arrow-left"
                className={cx(
                  'mr-8 d-block w-20 h-20 md:mr-10 lg:w-24 lg:h-24 lg:mr-12',
                  darkMode.value ? 'color-manatee' : 'color-blueBayoux'
                )}
              />
              {text}
            </Link>
          ) : (
            text
          )}
        </SmallText>
        {withIcons && (
          <ul className="d-flex m-0 p-0 lis-none pos-relative">
            {renderSocialNavItems(social)}
            <NavItem icon="Articles" link={routes.ARTICLES} />
            <NavItem
              as="button"
              dataBefore={`${darkMode.value ? 'Light' : 'Dark'} theme`}
              icon={darkMode.value ? 'sun' : 'moon'}
              isLast
              onClick={darkMode.toggle}
              onMouseLeave={e => e.target.blur()}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  text: PropTypes.string.isRequired,
  textTag: PropTypes.string,
  textLink: PropTypes.string,
  withIcons: PropTypes.bool,
};

Nav.defaultProps = {
  withIcons: true,
};

export default Nav;
