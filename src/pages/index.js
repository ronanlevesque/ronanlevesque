import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import JobsList from 'components/JobsList';
import Link from 'components/Link';
import SectionTitle from 'components/SectionTitle';
import Title from 'components/Title';
import * as colors from 'constants/colors';
import * as routes from 'constants/routes';
import { useSiteMetadata } from 'hooks';
import DefaultLayout from 'layouts/DefaultLayout';

const styles = {
  link: css`
    body.light-mode & {
      color: ${colors.SAN_JUAN};
    }
  `,
};

const IndexPage = ({ data }) => {
  const { title } = useSiteMetadata();

  return (
    <DefaultLayout title="Home" url={routes.HOME}>
      <Container>
        <Hero alignLeft navText={title} navTextTag="h1">
          <Title as="p">
            Hello! I’m a Sr. Software Engineer, currently working as Technical
            and Team Lead at{' '}
            <Link
              css={styles.link}
              className="color-zircon td-none"
              to="https://www.algolia.com"
            >
              Algolia
            </Link>
            . I ❤️ pushing pixels around and playing with{' '}
            <Link
              css={styles.link}
              className="color-zircon td-none"
              to="https://reactjs.org/"
            >
              React
            </Link>{' '}
            to build fast, accessible and powerful web applications.
          </Title>
        </Hero>
        <section>
          <SectionTitle>Previous experiences</SectionTitle>
          <JobsList data={data.allWorkJson.edges} />
        </section>
        <section className="mt-48 md:mt-80 lg:mt-120">
          <SectionTitle>In another life…</SectionTitle>
          <JobsList data={data.allPreviousWorkJson.edges} />
        </section>
        <Footer />
      </Container>
    </DefaultLayout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    allWorkJson {
      edges {
        node {
          company
          job
          url
          start
          end
        }
      }
    }
    allPreviousWorkJson {
      edges {
        node {
          company
          job
          url
          start
          end
        }
      }
    }
  }
`;

export default IndexPage;
