/* eslint-disable import/no-commonjs */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const fsExtra = require('fs-extra');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const sourceNorm = path.normalize(`${__dirname}/src/images`);
  const destination = `/images`;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }

  if (node.internal.type === 'File') {
    const dir = path.normalize(node.dir);

    if (dir.includes(sourceNorm)) {
      const relativeToDestination = dir.replace(sourceNorm, '');
      const newPath = path.join(
        process.cwd(),
        'public',
        destination,
        relativeToDestination,
        node.base
      );

      fsExtra.copy(node.absolutePath, newPath, err => {
        if (err) {
          // eslint-disable-next-line
          console.log('Error copying file: ', err);
        }
      });
    }
  }
};
