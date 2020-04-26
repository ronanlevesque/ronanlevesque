import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import ArticlesList from 'components/ArticlesList';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
import SectionTitle from 'components/SectionTitle';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import DefaultLayout from 'layouts/DefaultLayout';

const ArticlesPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <DefaultLayout
      metaDescription="Tips, tutorials, useful resources, thoughts and questions around front-end development tools and languages."
      title="Articles"
      url={routes.ARTICLES}
    >
      <Container>
        <Nav text="Back to homepage" textLink={routes.HOME} withIcons={false} />
        <Hero>
          <Title className="color-zircon">Articles on web development</Title>
        </Hero>
        <main>
          <section>
            <SectionTitle>Recent articles</SectionTitle>
            <ArticlesList
              posts={posts.filter(post => !post.node.frontmatter.archive)}
            />
          </section>
          <section className="fluid:mt-48-120">
            <SectionTitle>Archives (French)</SectionTitle>
            <ArticlesList
              posts={posts.filter(post => post.node.frontmatter.archive)}
            />
          </section>
        </main>
        <Footer />
      </Container>
    </DefaultLayout>
  );
};

ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArticlesPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            archive
          }
        }
      }
    }
  }
`;
