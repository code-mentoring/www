// Allows us to transpile @codement/ui files from source
const withTM = require('next-transpile-modules')([
  '@codement/ui'
]);

const replacePlugin = require('webpack-plugin-replace');

const isProd = process.env.NODE_ENV === 'production';
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
    cfg.plugins.push(new replacePlugin({
      values: {
        '%%IS_PROD%%': isProd ? 'https://codementoring.co/' : 'http://localhost:3000'
      }
    }));
    return cfg;
  }
});
