import React from 'react';
import PropTypes from 'prop-types';
import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const Container = ({ children, ...other }) => (
  <SmallText
    as="h2"
    css={helperStyles.gradientLine}
    className="m-0 color-blueBayoux fw-medium"
    {...other}
  >
    <span className="pv-12 d-flex ai-center md:pv-16 lg:pv-20">{children}</span>
  </SmallText>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
