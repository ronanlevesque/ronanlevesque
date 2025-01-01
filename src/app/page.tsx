import Footer from '@/components/footer';
import Intro from '@/components/intro';
import JobsList from '@/components/jobs-list';
import Nav from '@/components/nav';
import SectionTitle from '@/components/section-title';

import * as meta from '@/constants/meta';

import previousWorkData from '@/data/previous-work.json';
import workData from '@/data/work.json';

export const metadata = {
  description:
    'I’m an Engineering Manager and former Senior Software Engineer. I ❤️ pushing pixels around and playing with React to build fast and powerful web applications.',
  title: meta.NAME,
};

const Home = () => (
  <>
    <Nav text={meta.NAME} />
    <Intro />
    <main>
      <section>
        <SectionTitle>Previous experiences</SectionTitle>
        <JobsList data={workData} />
      </section>
      <section className="~mt-32/64">
        <SectionTitle>In another life…</SectionTitle>
        <JobsList data={previousWorkData} />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
