// Allows us to transpile @codement/ui files from source
const withTM = require('next-transpile-modules')([
  '@codement/ui'
]);

module.exports = withTM({
  webpack: cfg => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      },
      {
        test: /\.yma?l$/,
        type: 'json',
        loader: 'yaml-loader'
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader'
      }
    );
    return cfg;
  }
});
