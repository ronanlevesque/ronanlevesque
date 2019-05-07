import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as routes from 'constants/routes';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import JobsList from 'components/JobsList';
import SectionTitle from 'components/SectionTitle';
import DefaultLayout from 'layouts/DefaultLayout';
import { useSiteMetadata } from 'hooks';

const IndexPage = ({ data }) => {
  const { title } = useSiteMetadata();
  return (
    <DefaultLayout title="Home" url={routes.HOME}>
      <Container>
        <Hero navText={title} navTextTag="h1">
          Hello! I&rsquo;m a Sr. Software Engineer, currently working as Tech
          Lead at{' '}
          <a className="color-sanJuan" href="https://www.algolia.com">
            Algolia
          </a>
          . I ❤️ pushing pixels around and playing with React to build fast and
          powerful web applications.
        </Hero>
        <section>
          <SectionTitle>Previous experiences</SectionTitle>
          <JobsList data={data.allWorkJson.edges} />
        </section>
        <section className="mt-48 md:mt-80 lg:mt-120">
          <SectionTitle>In another life&hellip;</SectionTitle>
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
