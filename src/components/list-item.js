import PropTypes from 'prop-types';

const ListItem = ({ children, ...other }) => (
  <li className="with-border leading-bigger" {...other}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
