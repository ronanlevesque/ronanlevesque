import cx from 'classnames';
import Link from 'next/link';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import JobsList from '@/components/jobs-list';
import Nav from '@/components/nav';
import SectionTitle from '@/components/section-title';
import Title from '@/components/title';

import previousWorkData from '@/data/previous-work';
import workData from '@/data/work';

export const metadata = {
  description: '',
  title: 'Ronan Levesque',
};

const Home = () => (
  <>
    <Nav text="Ronan Levesque" textTag="h1" />
    <Hero alignLeft>
      <Title as="p" className="text-manatee">
        Hello! I’m an Engineering Manager and former Senior Software Engineer. I
        ❤️ pushing pixels around and playing with{' '}
        <Link
          className={cx(
            'text-zircon no-underline transition',
            'hover:text-white'
          )}
          href="https://reactjs.org/"
        >
          React
        </Link>{' '}
        to build fast and powerful web apps.
      </Title>
      <Title as="p" className="text-manatee ~mt-20/32">
        I’m currently looking for new work opportunities, don’t hesitate to{' '}
        <Link
          className={cx(
            'text-zircon no-underline transition',
            'hover:text-white'
          )}
          href="https://www.linkedin.com/in/ronanlevesque"
        >
          contact me
        </Link>
        !
      </Title>
    </Hero>
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