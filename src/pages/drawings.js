import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Board from '../components/Board/Board';
import Container from 'components/Container';
import DrawingList from '../components/DrawingList';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
import SectionTitle from 'components/SectionTitle';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import DefaultLayout from 'layouts/DefaultLayout';

const DrawingsPage = ({ data }) => {
  return (
    <DefaultLayout
      metaDescription="A selection of various old drawings from the past."
      title="Drawings"
      url={routes.ARTICLES}
    >
      <Container>
        <Nav text="Back to homepage" textLink={routes.HOME} withIcons={false} />
        <Hero>
          <Title className="color-zircon">Drawings</Title>
        </Hero>
        <main>
          <section>
            <SectionTitle as="h3">Colored</SectionTitle>
            <DrawingList drawings={data} folder="colored" />
          </section>
          <section className="fluid:mt-48-96">
            <SectionTitle as="h3">Archives</SectionTitle>
            <DrawingList drawings={data} folder="archives" />
          </section>
          <section className="fluid:mt-48-96">
            <SectionTitle as="h3">The Rite (board)</SectionTitle>
            <Board image="rite" />
          </section>
          <section className="fluid:mt-48-96">
            <SectionTitle as="h3">Voisinage (board)</SectionTitle>
            <Board image="voisinage" />
          </section>
          <section className="fluid:mt-48-96">
            <SectionTitle as="h3">Saint-Lazare (board)</SectionTitle>
            <Board image="saint-lazare" />
          </section>
        </main>
        <Footer />
      </Container>
    </DefaultLayout>
  );
};

DrawingsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DrawingsPage;

export const pageQuery = graphql`
  query DrawingsQuery {
    colored: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "drawing/colored" }
      }
    ) {
      edges {
        node {
          name
          dir
        }
      }
    }
    archives: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "drawing/archives" }
      }
    ) {
      edges {
        node {
          name
          dir
        }
      }
    }
    boards: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "drawing/boards" }
      }
    ) {
      edges {
        node {
          name
          dir
        }
      }
    }
  }
`;
