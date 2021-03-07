import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Archè - Il Vuoto" description="Filosofia, Psicologia, Arte, Poesia">
      <Component {...pageProps} />
    </Layout>
  );
}
