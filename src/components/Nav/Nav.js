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

const Nav = ({ text, textLink, textTag, withIcons, ...other }) => {
  const { social } = useSiteMetadata();

  return (
    <div css={helperStyles.gradientLine} {...other}>
      <div className="ph-8 d-flex jc-between ai-center h-48 color-zircon md:ph-10 md:h-56 lg:h-64 lg:ph-12">
        <SmallText
          as={textTag}
          css={styles.SmallText}
          className="m-0 fw-medium ws-nowrap ov-hidden to-ellipsis"
        >
          {textLink ? (
            <Link
              className="td-none d-flex ai-center jc-between color-zircon hover:color-white"
              to={textLink}
            >
              <Svg
                name="arrow-left"
                className="mr-8 d-block color-manatee w-16 h-16 md:w-20 md:h-20 md:mr-10 lg:w-24 lg:h-24 lg:mr-12"
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
    </div>
  );
};

Nav.propTypes = {
  text: PropTypes.node.isRequired,
  textTag: PropTypes.string,
  textLink: PropTypes.string,
  withIcons: PropTypes.bool,
};

Nav.defaultProps = {
  withIcons: true,
};

export default Nav;
