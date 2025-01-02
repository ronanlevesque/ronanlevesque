import { readdir } from 'fs/promises';
import fs from 'fs';

export const formatDate = (date: string) => {
  const timestamp = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(timestamp);
};

export const getArticles = async () => {
  const slugs = (
    await readdir('./src/app/articles/_content', { withFileTypes: true })
  ).filter((file) => file.isDirectory());
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { frontmatter } = await import(
        `../app/articles/_content/${name}/page.mdx`
      );
      return { slug: name, ...frontmatter };
    })
  );
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return posts;
};

export function getSlugs(dir: string) {
  const allFiles = fs.readdirSync(dir, { withFileTypes: true });
  const directories = allFiles.filter((file) => file.isDirectory());
  const slugs = directories.map(({ name }) => ({ slug: name }));
  return slugs;
}

export const pxToRem = (px: number) => `${px * 0.0625}rem`;
