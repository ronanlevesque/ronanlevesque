import Nav from '@/components/nav';

import ArticlesList from '@/components/articles-list';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import SectionTitle from '@/components/section-title';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

import { getArticles } from '@/helpers';

export const metadata = {
  description:
    'Tips, tutorials, useful resources, thoughts and questions around front-end development tools and languages.',
  title: 'Articles | Ronan Levesque',
};

const Articles = async () => {
  const articles = await getArticles('(posts)');
  const oldArticles = await getArticles('(old-posts)');
  return (
    <>
      <Nav text="Back to Homepage" link={routes.HOME} withIcons={false} />
      <Hero>
        <Title className="text-zircon">Articles on web development</Title>
        <Subtitle>CSS, JavaScript, React etc.</Subtitle>
      </Hero>
      <main>
        <section>
          <SectionTitle as="h3">Recent articles</SectionTitle>
          <ArticlesList articles={articles} />
        </section>
        <section className="~mt-32/64">
          <SectionTitle as="h3">Archives (French)</SectionTitle>
          <ArticlesList articles={oldArticles} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
