module.exports = {
  extends: 'algolia/react',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
  },
  settings: {
    react: {
      version: '16.4.2',
    },
  },
};
