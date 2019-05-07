import React from 'react';
import * as routes from 'constants/routes';
import Container from 'components/Container';
import Hero from 'components/Hero';
import DefaultLayout from 'layouts/DefaultLayout';

const ErrorPage = () => {
  return (
    <DefaultLayout title="Page not found" url={routes.ERROR}>
      <Container>
        <Hero
          navText="Back to homepage"
          navTextLink={routes.HOME}
          navWithIcons={false}
        >
          This page doesn&rsquo;t exist.
        </Hero>
      </Container>
    </DefaultLayout>
  );
};

export default ErrorPage;
