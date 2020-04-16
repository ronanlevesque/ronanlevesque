import React from 'react';

import Container from 'components/Container';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
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
        <Title className="color-zircon">This page doesn’t exist.</Title>
      </Hero>
    </Container>
  </DefaultLayout>
);

export default ErrorPage;
