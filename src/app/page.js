import Footer from '@/components/footer';
import Intro from '@/components/intro';
import JobsList from '@/components/jobs-list';
import Nav from '@/components/nav';
import SectionTitle from '@/components/section-title';

import previousWorkData from '@/data/previous-work';
import workData from '@/data/work';

export const metadata = {
  description:
    'I’m an Engineering Manager and former Senior Software Engineer. I ❤️ pushing pixels around and playing with React to build fast and powerful web applications.',
  title: 'Ronan Levesque',
};

const Home = () => (
  <>
    <Nav text="Ronan Levesque" />
    <Intro />
    <main>
      <section>
        <SectionTitle>Previous experiences</SectionTitle>
        <JobsList data={workData} />
      </section>
      <section className="~mt-48/96">
        <SectionTitle>In another life…</SectionTitle>
        <JobsList data={previousWorkData} />
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
