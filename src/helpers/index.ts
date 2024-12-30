import { readdir } from 'fs/promises';

export const formatDate = (date: string) => {
  const timestamp = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(timestamp);
};

export const getArticles = async (folder: string) => {
  const slugs = (
    await readdir(`./src/app/articles/${folder}`, { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/articles/${folder}/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    })
  );
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return posts;
};

export const pxToRem = (px: number) => `${px * 0.0625}rem`;
