import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import postContainerStyles from 'css/post-container.css';
import DefaultLayout from 'layouts/DefaultLayout';

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <DefaultLayout title={post.frontmatter.title} url={post.frontmatter.path}>
      <Container>
        <Nav
          text="Back to articles"
          textLink={routes.ARTICLES}
          withIcons={false}
        />
        <Hero
          navText="Back to articles"
          navTextLink={routes.ARTICLES}
          navWithIcons={false}
        >
          <Title className="color-linkWater">{post.frontmatter.title}</Title>
          <time className="d-block ff-mono tt-upper lsp-big fsz-12 color-blueBayoux md:mt-4 md:fsz-14 lg:fsz-16 lg:mt-8">
            {post.frontmatter.date}
          </time>
        </Hero>
        <main
          css={postContainerStyles.root}
          className="post-container maw-800 m-auto lh-bigger ff-roboto color-manatee"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Footer />
      </Container>
    </DefaultLayout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        archive
      }
    }
  }
`;
