import ArticleLayout from './article-layout';

import * as directory from '@/constants/directory';
import * as meta from '@/constants/meta';

import { getSlugs } from '@/helpers';

import '@/css/tokyo-night-dark.css';

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

export function generateStaticParams() {
  return getSlugs(directory.ARTICLES);
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
