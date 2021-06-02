import Link from "next/link";
import Head from "next/head";
import DProjectMenu from "./DProjectMenu";

export default function BlogPost({ children, meta, router }) {
  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta key="ogtitle" property="og:title" content={meta.title} />
        <meta key="ogdescription" property="og:description" content={meta.description} />
        {meta.image ? <meta key="ogimage" property="og:image" content={`https://arche.sandrolain.com${meta.image}`} /> : null}
      </Head>
      <style dangerouslySetInnerHTML={{__html: /*css*/`

      article {
        padding: 16px 16px 48px;
        color: var(--main-color-d);
      }

      blockquote {
        display: inline-block;
        position: relative;
        margin: 1em 0;
        padding: 0em 3em;
      }

      blockquote::before {
        content: "“";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 3em;
        line-height: 1em;
        color: #999;
      }

      blockquote::after {
        content: "”";
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 3em;
        line-height: 1em;
        color: #999;
      }

      a {
        color: inherit;
        text-decoration: none;
        color: var(--main-color-m);
      }

      article h1 {
        font-size: 2.4em;
        font-family: 'Amatic SC', cursive;
        color: var(--main-color-md);
        margin: 0em 0 0.75em 0;
        line-height: 1em;
      }

      figure {
        margin: 1em 0;
      }

      img {
        max-width: 100%;
      }

      #image {
        margin: 1em 0 2em;
        display: flex;
        position: relative;
      }
      #image img {
        object-fit: cover;
        width: 100%;
        height: 280px;
      }
      #image-lyr {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        z-index: 3;
        mix-blend-mode: color;
        background-color: var(--main-color-m);
        opacity: 0.3;
        pointer-events: none;
      }
      #image-attr {
        width: 100%;
        position: absolute;
        bottom: 0; left: 0;
        z-index: 2;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
        padding: 1em 0.5em 0.5em;
        text-align: right;
        box-sizing: border-box;
        font-size: 11px;
        color: hsl(0deg, 0%, 90%);
      }
      #image-attr a {
        color: hsl(0deg, 0%, 60%);
      }

      .back {
        margin: 1em 0;
        display: inline-block;
        padding: 0.25em 0.5em;
        border-radius: 0.25em;
      }
      .back:hover {
        font-weight: bold;
        background-color: var(--main-color-m);
        color: var(--main-color-l);
      }

      #date {
        display: block;
        color: var(--main-color-md);
        font-size: 12px;
        margin-bottom: 1em;
      }

      #text {
        line-height: 1.5em;
      }

      `}}></style>
      <article>
        <Link href="/"><a className="back">Indietro</a></Link>
        <br/>
        <em id="date">{Intl.DateTimeFormat("it", {
            hour12: false,
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric"
          }).format(new Date(meta.date))}
          {!router || router?.route.match(/\/blog\//) ? " - Blog" : ""}
          {router?.route.match(/\/D-project\//) ? " - Progetto D" : ""}
        </em>
        {meta.image ? <div id="image">
            <img src={meta.image} />
            <div id="image-lyr"></div>
            {meta.imageAttribute ? <div id="image-attr">{meta.imageAttribute}</div> : null}
          </div> : null}
        <section id="text">
        {router?.route.match(/D-project/) ? <DProjectMenu router={router} /> : null}
        {children}</section>
        <br/>
        <Link href="/"><a className="back">Indietro</a></Link>
      </article>
    </>
  )
}
