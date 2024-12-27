import PropTypes from 'prop-types';

const CodeSample = ({ children }) => {
  return (
    <pre data-lang={children.props.className.replace('language-', '')}>
      {children}
    </pre>
  );
};

CodeSample.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeSample;
