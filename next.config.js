const withPlugins     = require("next-compose-plugins");
const images          = require("remark-images");
const emoji           = require("remark-emoji");
const highlight       = require("rehype-highlight");
const optimizedImages = require("next-optimized-images");
const withMDX         = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
    rehypePlugins: [highlight]
  }
});

module.exports = withPlugins([
  [withMDX, { pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"] }],
  [optimizedImages, { inlineImageLimit: 0}]
]);
