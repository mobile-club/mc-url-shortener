/* eslint @typescript-eslint/no-var-requires: off */

module.exports = {
  client: {
    service: {
      name: 'url-shortener',
      url: 'http://localhost:4000/graphql',
    },
    excludes: ['**/*.{ts,tsx,js,jsx}'],
  },
};
