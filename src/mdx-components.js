import CodeSample from '@/components/code-sample';

export const useMDXComponents = (components) => {
  return {
    pre: CodeSample,
    ...components,
  };
};
