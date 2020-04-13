module.exports = {
  webpack: (cfg) => {
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
    )
    return cfg;
  }
}
