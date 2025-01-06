import { MetadataRoute } from 'next';

import * as directory from '@/constants/directory';
import * as meta from '@/constants/meta';

import { getSlugs } from '@/helpers';

const staticLinks = ['articles', 'drawings'];
const slugs = getSlugs(directory.ARTICLES).map(
  (name: { slug: string }) => `articles/${name.slug}`
);

const links = [...staticLinks, ...slugs].map((link: string) => ({
  url: `${meta.URL}/${link}`,
  lastModified: new Date(),
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: meta.URL,
      lastModified: new Date(),
    },
    ...links,
  ];
}
