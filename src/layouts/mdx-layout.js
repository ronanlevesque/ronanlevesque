import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Subtitle from '@/components/subtitle';
import Title from '@/components/title';

import * as routes from '@/constants/routes';

const MdxLayout = ({ children, metadata }) => {
  const timestamp = new Date(metadata.date);
  return (
    <>
      <Nav text="Back to articles" link={routes.ARTICLES} withIcons={false} />
      <Hero>
        <Title className="text-zircon">{metadata.title}</Title>
        <Subtitle as="time" className="block">
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(timestamp)}
        </Subtitle>
      </Hero>
      <main className="with-border m-auto ~max-w-700/824">
        <article className="article-container leading-bigger text-manatee ~px-8/12 ~pb-48/96">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MdxLayout;
