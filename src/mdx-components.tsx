import type { MDXComponents } from 'mdx/types';

import CodeSample from '@/components/code-sample';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeSample,
    ...components,
  };
}
