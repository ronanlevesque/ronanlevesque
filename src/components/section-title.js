import PropTypes from 'prop-types';

import SmallText from '@/components/small-text';

const SectionTitle = ({ as = 'h2', children, ...other }) => (
  <SmallText
    as={as}
    className="with-border m-0 font-medium text-manatee"
    {...other}
  >
    <span className="flex items-center ~h-48/64 ~px-8/12">{children}</span>
  </SmallText>
);

SectionTitle.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
