module.exports = {
  siteMetadata: {
    title: 'Ronan Levesque',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://ronanlevesque.com',
    social: {
      GitHub: 'https://github.com/ronanlevesque',
      CodePen: 'https://codepen.io/eskiiss/',
      Twitter: 'https://twitter.com/ronanlevesque',
      Mail: 'mailto:ronan.levesque@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Libre Baskerville:400,400i,700',
          'Roboto:400,600',
          'Roboto Mono:400',
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-emotion',
  ],
};
