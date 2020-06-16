/* eslint-disable camelcase, import/no-commonjs */

module.exports = {
  siteMetadata: {
    title: 'Ronan Levesque',
    description:
      'I’m a Sr. Software Engineer, currently working as Technical and Team Lead at Algolia. I ❤️ pushing pixels around and playing with React to build fast and powerful web applications.',
    siteUrl: 'https://ronanlevesque.com',
    social: {
      GitHub: 'https://github.com/ronanlevesque',
      CodePen: 'https://codepen.io/eskiiss/',
      Twitter: 'https://twitter.com/ronanlevesque',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Libre Baskerville:400,400i,700',
          'Roboto:400,400i,500,700',
          'Roboto Mono:400,700',
        ],
        display: 'swap',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 70,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 824,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
              quality: 70,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: false,
              classPrefix: '',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/pages/articles`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  date: edge.node.frontmatter.date,
                  description: edge.node.frontmatter.description,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.body }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Ronan Levesque’s RSS Feed',
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-emotion',
    'gatsby-plugin-preact',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-netlify',
  ],
};
