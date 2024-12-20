import PropTypes from 'prop-types';

const Svg = ({ name, ...other }) => {
  const ImportedSvg = require(`./svg/${name}`).default;
  return <ImportedSvg {...other} />;
};

Svg.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Svg;
