import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useDarkMode from 'use-dark-mode';

import SmallText from 'components/SmallText';
import helperStyles from 'css/helpers.css';

const Container = ({ children, ...other }) => {
  const darkMode = useDarkMode(false);

  return (
    <SmallText
      as="h2"
      css={helperStyles.gradientLine}
      className={cx(
        'm-0 fw-medium',
        darkMode.value ? 'color-manatee' : 'color-blueBayoux'
      )}
      {...other}
    >
      <span className="d-flex ai-center h-40 md:h-48 lg:h-64">{children}</span>
    </SmallText>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
