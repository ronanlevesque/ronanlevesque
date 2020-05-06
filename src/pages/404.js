import React from 'react';

import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Iframe from 'components/Iframe';
import Nav from 'components/Nav';
import Subtitle from 'components/Subtitle';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import DefaultLayout from 'layouts/DefaultLayout';

const ErrorPage = () => (
  <DefaultLayout
    metaDescription="This page doesn’t exist or was removed from the website."
    title="Page not found"
    url={routes.ERROR}
  >
    <Container>
      <Nav text="Back to homepage" textLink={routes.HOME} withIcons={false} />
      <Hero>
        <Title className="color-zircon">Sorry, this page doesn’t exist.</Title>
        <Subtitle>Meanwhile, enjoy the Pen below!</Subtitle>
      </Hero>
      <main>
        <Iframe
          noMobile
          src="https://codepen.io/eskiiss/embed/CAysg?height=700&amp;theme-id=dark&amp;default-tab=result"
        />
      </main>
      <Footer />
    </Container>
  </DefaultLayout>
);

export default ErrorPage;
