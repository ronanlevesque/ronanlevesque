import Nav from '@/components/nav';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Iframe from '@/components/iframe';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

export const metadata = {
  description: 'This page doesn’t exist or was removed from the website.',
  title: 'Page not found | Ronan Levesque',
};

const NotFound = () => (
  <>
    <Nav text="Back to Homepage" link={routes.HOME} withIcons={false} />
    <Hero>
      <Title className="text-zircon">Sorry, this page doesn’t exist.</Title>
      <Subtitle>Meanwhile, enjoy the Pen below!</Subtitle>
    </Hero>
    <main>
      <Iframe
        noMobile
        src="https://codepen.io/eskiiss/embed/CAysg?height=700&amp;theme-id=dark&amp;default-tab=result"
      />
    </main>
    <Footer />
  </>
);

export default NotFound;
