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
    <span className="d-flex ai-center ph-8 h-48 md:h-56 md:ph-10 lg:h-64 lg:ph-12">
      {children}
    </span>
  </SmallText>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
