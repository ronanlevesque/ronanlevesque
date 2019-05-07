import React from 'react';
import PropTypes from 'prop-types';
import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const Container = ({ children, ...other }) => (
  <SmallText
    as="h2"
    css={helperStyles.gradientLine}
    className="m-0 color-manatee fw-semibold"
    {...other}
  >
    <span className="h-40 d-flex ai-center md:h-48 lg:h-64">{children}</span>
  </SmallText>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
