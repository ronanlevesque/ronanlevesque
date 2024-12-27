import PropTypes from 'prop-types';

const Figure = ({ caption, children }) => (
  <figure>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);

Figure.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
};

export default Figure;
