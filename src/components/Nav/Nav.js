import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.css';
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
  const themeStorage =
    typeof window !== 'undefined' && window.localStorage.getItem('theme');
  const { social } = useSiteMetadata();
  const [theme, setTheme] = useState(themeStorage);

  return (
    <nav css={helperStyles.gradientLine} {...other}>
      <div
        css={styles.wrapper}
        className="d-flex jc-between ai-center h-40 md:h-48 lg:h-64 color-zircon"
      >
        <SmallText
          as={textTag}
          className="m-0 fw-medium ws-nowrap ov-hidden to-ellipsis"
        >
          {textLink ? (
            <Link
              css={styles.link}
              className="td-none d-flex ai-center jc-between color-zircon"
              to={textLink}
            >
              <Svg
                name="arrow-left"
                css={styles.icon}
                className="mr-8 d-block w-20 h-20 md:mr-10 lg:w-24 lg:h-24 lg:mr-12 color-manatee"
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
              dataBefore={`${theme === 'light' ? 'Dark' : 'Light'} mode`}
              icon={theme === 'light' ? 'moon' : 'sun'}
              isLast
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
                document.querySelector('body').classList.toggle('light-mode');
                localStorage.setItem(
                  'theme',
                  themeStorage === 'light' ? 'dark' : 'light'
                );
              }}
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
