function importAll(r: __WebpackModuleApi.RequireContext) {
  const keys = r.keys().map((item) => item.replace("src/pages", ".")).filter((v, i, a) => a.indexOf(v) === i);
  return keys.map((fileName) => ({
    link: fileName.substring(1).replace(/\.mdx?$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(
  require.context("./pages/", true, /\.mdx?$/)
);
