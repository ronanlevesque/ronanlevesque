import React from 'react';
import PropTypes from 'prop-types';

import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const Container = ({ children, ...other }) => (
  <SmallText
    as="h2"
    css={helperStyles.gradientLine}
    className="m-0 fw-medium color-manatee"
    {...other}
  >
    <span className="d-flex ai-center fluid:pl-8-12 fluid:pr-8-12 fluid:h-48-64">
      {children}
    </span>
  </SmallText>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
