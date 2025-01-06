import Nav from '@/components/nav';

import ArticlesList from '@/components/articles-list';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import SectionTitle from '@/components/section-title';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as meta from '@/constants/meta';
import * as routes from '@/constants/routes';

import { getArticles } from '@/helpers';

export const metadata = {
  description:
    'Tips, tutorials, useful resources, thoughts and questions around front-end development tools and languages.',
  title: `Articles | ${meta.NAME}`,
};

const Articles = async () => {
  const articles = await getArticles();
  const recentArticles = articles.filter((article) => !article.archive);
  const oldArticles = articles.filter((article) => article.archive);
  return (
    <>
      <Nav text="Back to Homepage" link={routes.HOME} withIcons={false} />
      <Hero>
        <Title className="text-zircon">Articles on web development</Title>
        <Subtitle>CSS, JavaScript, React etc.</Subtitle>
      </Hero>
      <main>
        <section>
          <SectionTitle asChild>
            <h3>Recent articles</h3>
          </SectionTitle>
          <ArticlesList articles={recentArticles} />
        </section>
        <section className="~mt-32/64">
          <SectionTitle asChild>
            <h3>Archives (French)</h3>
          </SectionTitle>
          <ArticlesList articles={oldArticles} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
