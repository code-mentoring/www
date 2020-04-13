// Remove unused CSS on production
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    "postcss-import",
    "postcss-mixins",
    "tailwindcss",
    "autoprefixer",
    "postcss-nested",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
