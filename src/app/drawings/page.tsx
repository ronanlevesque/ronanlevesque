import Nav from '@/components/nav';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import SectionTitle from '@/components/section-title';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

export const metadata = {
  description: 'A selection of various old drawings from the past.',
  title: 'Drawings | Ronan Levesque',
};

const Drawings = () => (
  <>
    <Nav text="Back to Homepage" link={routes.HOME} withIcons={false} />
    <Hero>
      <Title className="text-zircon">My drawings</Title>
      <Subtitle>Littles doodles</Subtitle>
    </Hero>
    <main>
      <section>
        <SectionTitle asChild withBorder={false}>
          <h3>Colored</h3>
        </SectionTitle>
      </section>
    </main>
    <Footer />
  </>
);

export default Drawings;
