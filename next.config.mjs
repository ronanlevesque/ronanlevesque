import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});

export default withMDX(nextConfig);
