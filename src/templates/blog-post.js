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
    <DefaultLayout
      metaDescription={post.frontmatter.description}
      lang={post.frontmatter.archive ? 'fr' : 'en'}
      title={post.frontmatter.title}
      url={post.frontmatter.path}
    >
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
          <Title className="color-zircon">{post.frontmatter.title}</Title>
          <time className="d-block ff-mono tt-upper lsp-big color-blueBayoux fluid:mt-4-12 fluid:fsz-12-16">
            {post.frontmatter.date}
          </time>
        </Hero>
        <main
          css={postContainerStyles.root}
          className="post-container m-auto lh-bigger ff-roboto color-manatee fluid:pl-8-12 fluid:pr-8-12 fluid:maw-700-824"
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
        description
        path
        title
        archive
      }
    }
  }
`;
