import Layout from "../components/Layout";

export default function App(args) {
  const { Component, pageProps } = args;
  return (
    <Layout
      pageTitle="Archè - Il Vuoto"
      description="Filosofia, Psicologia, Arte, Poesia"
      url={args.router.route}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
