import React from 'react';
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
    <NavItem key={icon} icon={icon} href={social[icon]} as="a" />
  ));

const Nav = ({ text, textLink, textTag, withIcons = true, ...other }) => {
  const { social } = useSiteMetadata();

  return (
    <nav css={helperStyles.gradientLine} {...other}>
      <div className="d-flex jc-between ai-center color-zircon fluid:ph-8-12 fluid:h-48-64">
        <SmallText
          as={textTag}
          css={styles.SmallText}
          className="m-0 fw-medium d-flex ai-center jc-between fluid:h-32-40"
        >
          {textLink ? (
            <Link
              className="h-100p td-none d-flex ai-center jc-between color-zircon hover:color-white"
              to={textLink}
            >
              <Svg
                name="arrow-left"
                className="d-block color-manatee h-auto fluid:w-18-24 fluid:mr-8-12"
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
            <NavItem icon="Articles" to={routes.ARTICLES} />
          </ul>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  text: PropTypes.node.isRequired,
  textLink: PropTypes.string,
  textTag: PropTypes.string,
  withIcons: PropTypes.bool,
};

export default Nav;
