import withPlugins     from "next-compose-plugins";
import images          from "remark-images";
import emoji           from "remark-emoji";
import highlight       from "rehype-highlight";
//import optimizedImages from "next-optimized-images";
import mdx             from "@next/mdx"

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [images, [emoji, { emoticon: true }]],
    rehypePlugins: [highlight]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default async (phase, { defaultConfig }) =>
  withPlugins([withMDX], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
