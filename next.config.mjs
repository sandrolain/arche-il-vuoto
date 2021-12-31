import withPlugins     from "next-compose-plugins";
import images          from "remark-images";
import emoji           from "remark-emoji";
import highlight       from "rehype-highlight";
//import optimizedImages from "next-optimized-images";
import mdx             from "@next/mdx"

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, [emoji, { emoticon: true }]],
    rehypePlugins: [highlight]
  }
});

const config = withPlugins([
  [withMDX, { pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"] }],
  //[optimizedImages, { inlineImageLimit: 0 }]
]);

export default config;
