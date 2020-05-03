import React from 'react';
import PropTypes from 'prop-types';

import helperStyles from 'css/helpers.css';

const ListItem = ({ children, ...other }) => (
  <li css={helperStyles.gradientLine} {...other}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
