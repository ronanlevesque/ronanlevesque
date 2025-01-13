import cx from 'classnames';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Sidebar from '@/components/sidebar';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

import { formatDate } from '@/helpers';

import { getToc } from '@/plugins/remark-toc';

type ArticleLayoutProps = {
  children: React.ReactNode;
  frontmatter: {
    date: string;
    title: string;
  };
  slug: string;
};

const ArticleLayout = async ({
  children,
  frontmatter,
  slug,
}: ArticleLayoutProps) => {
  const toc = await getToc(slug);
  return (
    <>
      <Nav text="Back to articles" link={routes.ARTICLES} withIcons={false} />
      <Hero className={cx('~max-w-700/824', 'lg:max-w-1200')}>
        <Title className="text-zircon">{frontmatter.title}</Title>
        <Subtitle className="block">{formatDate(frontmatter.date)}</Subtitle>
      </Hero>
      <main
        className={cx(
          'm-auto ~max-w-700/824',
          'lg:flex lg:max-w-1200 lg:items-start'
        )}
      >
        <article
          className={cx(
            'article-container leading-bigger text-manatee ~px-8/12',
            'lg:w-70p lg:pr-0'
          )}
        >
          {children}
        </article>
        <Sidebar slug={slug} toc={toc} />
      </main>
      <div className={cx('with-border hidden', 'lg:mt-96 lg:block')} />
      <Footer />
    </>
  );
};

export default ArticleLayout;
