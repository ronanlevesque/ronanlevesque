module.exports = {
  siteMetadata: {
    title: 'Ronan Levesque',
    description:
      'I’m a Sr. Software Engineer, currently working as Tech Lead at Algolia. I ❤️ pushing pixels around and playing with React to build fast and powerful web applications.',
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
          'Roboto:400,500',
          'Roboto Mono:400',
        ],
        display: 'swap',
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
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-use-dark-mode',
    'gatsby-plugin-emotion',
  ],
};
