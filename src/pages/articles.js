import React from 'react';
import Container from 'components/Container';

import Hero from 'components/Hero';
import Title from 'components/Title';
import * as routes from 'constants/routes';
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
          <Title>Work in progress, come back later…</Title>
        </Hero>
      </Container>
    </DefaultLayout>
  );
};

export default ArticlesPage;
