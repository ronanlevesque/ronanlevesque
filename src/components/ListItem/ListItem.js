import React from 'react';
import PropTypes from 'prop-types';

import helperStyles from 'css/helpers.css';

const ListItem = ({ children, className, ...other }) => (
  <li className="lh-bigger" css={helperStyles.gradientLine} {...other}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ListItem;
