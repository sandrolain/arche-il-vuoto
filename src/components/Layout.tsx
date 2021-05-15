import Head from "next/head";
import Header from "./Header";
import favicon from "./favicon.png";
import matrix from "./scott-szarapka-y07ClgzcVmc-unsplash.jpg";


export default function Layout({ children, pageTitle, description, url }) {
  const shareUrl = `https://arche.sandrolain.com${url}`;
  const defaultOgImage = `https://arche.sandrolain.com${matrix}`;
  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta key="description" name="description" content={description}></meta>
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta key="ogtitle" property="og:title" content={pageTitle} />
        <meta key="ogdescription" property="og:description" content={description} />
        <meta key="ogimage" property="og:image" content={defaultOgImage} />
        <link href={shareUrl} rel="canonical" />
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <style dangerouslySetInnerHTML={{__html: /*css*/`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Yantramanav:wght@100;400&display=swap');

        :root {
          --main-color-hue: 24deg;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Yantramanav', sans-serif;
          background: var(--main-color-ll);
        }

        body {
          --main-color-d: hsl(var(--main-color-hue), 20%, 10%);
          --main-color-md: hsl(var(--main-color-hue), 20%, 30%);
          --main-color-m: hsl(var(--main-color-hue), 20%, 50%);
          --main-color-l: hsl(var(--main-color-hue), 20%, 90%);
          --main-color-ll: hsl(var(--main-color-hue), 20%, 95%);
        }

        main {
          padding: 0 1em;
          max-width: 600px;
          margin: 0 auto;
        }

      `}}></style>
      <Header />
      <main>{children}</main>
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: /*javascript*/`
document.addEventListener("DOMContentLoaded", function() {
  const update = function() {
    const deg = (((new Date()).getTime() % (60 * 1000) / (60 * 1000)) * 360) - 90;
    document.body.style.setProperty("--main-color-hue", deg.toFixed(1) + "deg", "important");
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});
      `}}></script>
    </>
  );
}
