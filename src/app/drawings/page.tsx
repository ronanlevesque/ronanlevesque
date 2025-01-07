import Image from 'next/image';

import DrawingsList from '@/components/drawings-list';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import SectionTitle from '@/components/section-title';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as meta from '@/constants/meta';
import * as routes from '@/constants/routes';

import archivesData from '@/data/drawings/archives.json';
import coloredData from '@/data/drawings/colored.json';

export const metadata = {
  description: 'A selection of various old drawings from the past.',
  title: `Drawings | ${meta.NAME}`,
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
        <DrawingsList drawings={coloredData} folder="colored" />
      </section>
      <section className="~mt-32/64">
        <SectionTitle asChild withBorder={false}>
          <h3>Archives</h3>
        </SectionTitle>
        <DrawingsList drawings={archivesData} folder="archives" />
      </section>
      <section className="~mt-32/64">
        <SectionTitle asChild withBorder={false}>
          <h3>The Rite (board)</h3>
        </SectionTitle>
        <Image
          src="/images/drawings/boards/rite.jpg"
          alt="Board for a movie called The Rite"
          className="block w-100p ~px-8/12"
          width={667}
          height={1256}
        />
      </section>
      <section className="~mt-32/64">
        <SectionTitle asChild withBorder={false}>
          <h3>The Rite (board)</h3>
        </SectionTitle>
        <Image
          src="/images/drawings/boards/voisinage.jpg"
          alt="Board describing some old neighbours issues"
          className="block w-100p ~px-8/12"
          width={314}
          height={585}
        />
      </section>
      <section className="~mt-32/64">
        <SectionTitle asChild withBorder={false}>
          <h3>Saint-Lazare (board)</h3>
        </SectionTitle>
        <Image
          alt="Board describing the chaos in Saint-Lazare"
          className="block w-100p ~px-8/12"
          height={1270}
          src="/images/drawings/boards/saint-lazare.jpg"
          width={667}
        />
      </section>
    </main>
    <Footer />
  </>
);

export default Drawings;
