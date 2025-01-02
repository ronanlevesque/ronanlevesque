import path from 'path';

import ArticleLayout from './article-layout';

import * as meta from '@/constants/meta';

import { getSlugs } from '@/helpers';

type ParamsProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ParamsProps) {
  const { slug } = await params;
  const { frontmatter } = await import(`../_content/${slug}/page.mdx`);
  return {
    title: `${frontmatter.title} | ${meta.NAME}`,
    description: frontmatter.description,
  };
}

const articlesDir = path.join(
  process.cwd(),
  'src',
  'app',
  'articles',
  '_content'
);

export function generateStaticParams() {
  return getSlugs(articlesDir);
}

const Article = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const content = await import(`../_content/${slug}/page.mdx`);
  return (
    <ArticleLayout frontmatter={content.frontmatter}>
      <content.default />
    </ArticleLayout>
  );
};

export default Article;
