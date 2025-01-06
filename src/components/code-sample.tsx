const CodeSample = ({ children }) => (
  <pre data-lang={children?.props?.className?.replace('hljs language-', '')}>
    {children}
  </pre>
);

export default CodeSample;
