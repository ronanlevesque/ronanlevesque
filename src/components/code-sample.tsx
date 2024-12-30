const CodeSample = ({ children }) => (
  <pre data-lang={children.props.className.replace('language-', '')}>
    {children}
  </pre>
);

export default CodeSample;
