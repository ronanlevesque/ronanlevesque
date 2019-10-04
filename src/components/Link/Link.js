import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

const isInternalLink = link => /^\/(?!\/)/.test(link);

const Link = ({ children, to, ...other }) => {
  const isInternal = isInternalLink(to);
  const CustomTag = isInternal ? GatsbyLink : 'a';

  return (
    <CustomTag
      href={!isInternal ? to : null}
      to={isInternal ? to : null}
      {...other}
    >
      {children}
    </CustomTag>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
