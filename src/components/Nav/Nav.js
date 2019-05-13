import React from 'react';
import PropTypes from 'prop-types';
import * as routes from 'constants/routes';
import Link from 'components/Link';
import SmallText from 'components/SmallText';
import Svg from 'components/Svg';
import { useSiteMetadata } from 'hooks';
import styles from './Nav.css';
import helperStyles from 'css/helpers.css';

const renderIcon = (icon, link) => (
  <li className="ml-12 md:ml-16 lg:ml-20" key={icon}>
    <Link
      to={link}
      css={[helperStyles.colorTransition, styles.iconLink]}
      className="d-block color-blueBayoux td-none hover:color-blackPearl"
      data-before={icon}
    >
      <Svg
        className="d-block w-20 h-20 lg:w-24 lg:h-24"
        name={icon.toLowerCase()}
        aria-label={`${icon} icon`}
      />
    </Link>
  </li>
);

const renderSocialIcons = social =>
  Object.keys(social).map(icon => renderIcon(icon, social[icon]));

const Nav = ({ text, textLink, textTag, withIcons, ...other }) => {
  const { social } = useSiteMetadata();

  return (
    <nav css={helperStyles.gradientLine} {...other}>
      <div className="pv-12 d-flex jc-between ai-center md:pv-16 lg:pv-20">
        <SmallText as={textTag} className="m-0 color-sanJuan fw-medium">
          {textLink ? (
            <Link
              className="color-sanJuan td-none d-flex ai-center jc-between"
              to={textLink}
            >
              <Svg
                name="arrow-left"
                className="color-blueBayoux mr-8 d-inline w-20 h-20 md:mr-10 lg:w-24 lg:h-24 lg:mr-12"
              />
              {text}
            </Link>
          ) : (
            text
          )}
        </SmallText>
        {withIcons && (
          <ul className="d-flex m-0 p-0 lis-none pos-relative">
            {renderSocialIcons(social)}
            {renderIcon('Articles', routes.ARTICLES)}
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
