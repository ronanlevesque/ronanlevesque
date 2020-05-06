import React from 'react';
import PropTypes from 'prop-types';

import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const SectionTitle = ({ as = 'h2', children, ...other }) => (
  <SmallText
    as={as}
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
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
