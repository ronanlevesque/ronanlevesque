import React from 'react';
import * as routes from 'constants/routes';
import Container from 'components/Container';
import Hero from 'components/Hero';
import DefaultLayout from 'layouts/DefaultLayout';

const ArticlesPage = () => {
  return (
    <DefaultLayout title="Articles" url={routes.ARTICLES}>
      <Container>
        <Hero
          navText="Back to homepage"
          navTextLink={routes.HOME}
          navWithIcons={false}
        >
          Work in progress, come back later&hellip;
        </Hero>
      </Container>
    </DefaultLayout>
  );
};

export default ArticlesPage;
