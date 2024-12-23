import Nav from '@/components/nav';

import Hero from '@/components/hero';
import SectionTitle from '@/components/section-title';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

export const metadata = {
  description:
    'Tips, tutorials, useful resources, thoughts and questions around front-end development tools and languages.',
  title: 'Articles | Ronan Levesque',
};

const Articles = () => (
  <>
    <Nav text="Back to Homepage" link={routes.HOME} withIcons={false} />
    <Hero>
      <Title className="text-zircon">Articles on web development</Title>
      <Subtitle>CSS, JavaScript, React etc.</Subtitle>
    </Hero>
    <main>
      <SectionTitle as="h3">Recent articles</SectionTitle>
    </main>
  </>
);

export default Articles;
