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
      Mail: 'mailto:ronan.levesque@gmail.com',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'none',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-preact',
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
