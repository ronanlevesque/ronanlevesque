import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionTitle.css';
import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const Container = ({ children, ...other }) => (
  <SmallText
    as="h2"
    css={[helperStyles.gradientLine, styles.root]}
    className="m-0 fw-medium color-manatee"
    {...other}
  >
    <span className="d-flex ai-center h-40 md:h-48 lg:h-64">{children}</span>
  </SmallText>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
