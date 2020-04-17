import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import JobsList from 'components/JobsList';
import Link from 'components/Link';
import Nav from 'components/Nav';
import SectionTitle from 'components/SectionTitle';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import { useSiteMetadata } from 'hooks';
import DefaultLayout from 'layouts/DefaultLayout';

const IndexPage = ({ data }) => {
  const { title } = useSiteMetadata();

  return (
    <DefaultLayout title="Home" url={routes.HOME}>
      <Container>
        <Nav text={title} textTag="h1" />
        <Hero alignLeft>
          <Title as="p" className="color-manatee">
            Hello! I’m a Sr. Software Engineer, currently working as Technical
            and Team Lead at{' '}
            <Link
              className="color-zircon td-none hover:color-white"
              to="https://www.algolia.com"
            >
              Algolia
            </Link>
            . I ❤️ pushing pixels around and playing with{' '}
            <Link
              className="color-zircon td-none hover:color-white"
              to="https://reactjs.org/"
            >
              React
            </Link>{' '}
            to build fast and powerful web applications.
          </Title>
        </Hero>
        <main>
          <section>
            <SectionTitle>Previous experiences</SectionTitle>
            <JobsList data={data.allWorkJson.edges} />
          </section>
          <section className="mt-48 md:mt-80 lg:mt-120">
            <SectionTitle>In another life…</SectionTitle>
            <JobsList data={data.allPreviousWorkJson.edges} />
          </section>
        </main>
        <Footer />
      </Container>
    </DefaultLayout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allWorkJson {
      edges {
        node {
          company
          job
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
          start
          end
        }
      }
    }
  }
`;
