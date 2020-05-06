import React from 'react';
import PropTypes from 'prop-types';

import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const SectionTitle = ({ children, ...other }) => (
  <SmallText
    as="h2"
    css={helperStyles.gradientLine}
    className="m-0 fw-medium color-manatee"
    {...other}
  >
    <span className="d-flex ai-center fluid:ph-8-12 fluid:h-48-64">
      {children}
    </span>
  </SmallText>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
