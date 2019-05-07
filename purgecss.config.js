// eslint-disable-next-line import/no-commonjs
module.exports = {
  content: [
    'src/components/**/*.js',
    'src/layouts/**/*.js',
    'src/pages/**/*.js',
    'src/templates/**/*.js',
  ],
  css: ['src/css/fragments.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:/]+/g);
        }
      },
      extensions: ['js'],
    },
  ],
};
