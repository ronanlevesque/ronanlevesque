import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Container from 'components/Container';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Nav from 'components/Nav';
import Subtitle from 'components/Subtitle';
import Title from 'components/Title';
import * as routes from 'constants/routes';
import helperStyles from 'css/helpers.css';
import postContainerStyles from 'css/post-container.css';
import DefaultLayout from 'layouts/DefaultLayout';

const BlogPostTemplate = ({ data }) => {
  const { mdx: post } = data;

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
        <Hero>
          <Title className="color-zircon">{post.frontmatter.title}</Title>
          <Subtitle as="time" className="d-block">
            {post.frontmatter.date}
          </Subtitle>
        </Hero>
        <main
          className="m-auto fluid:maw-700-824"
          css={helperStyles.gradientLine}
        >
          <article
            css={postContainerStyles.root}
            className="lh-bigger ff-roboto color-manatee fluid:ph-8-12 fluid:pb-48-96"
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </main>
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
    mdx(frontmatter: { path: { eq: $path } }) {
      body
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
