import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <nav css={helperStyles.gradientLine} {...other}>
      <div className="d-flex jc-between ai-center h-40 md:h-48 lg:h-64 color-zircon">
        <SmallText
          as={textTag}
          className="m-0 fw-medium ws-nowrap ov-hidden to-ellipsis"
        >
          {textLink ? (
            <Link
              className="td-none d-flex ai-center jc-between color-zircon"
              to={textLink}
            >
              <Svg
                name="arrow-left"
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
          </ul>
        )}
      </div>
    </nav>
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
