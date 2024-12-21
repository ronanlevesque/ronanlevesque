import PropTypes from 'prop-types';

const ListItem = ({ children, ...other }) => (
  <li className="leading-bigger withBorder" {...other}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
