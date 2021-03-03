import hlTheme from "highlight.js/styles/tomorrow-night.css";
import Link from "next/link";

export default function BlogPost({ children, meta}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: /*css*/`

      article {
        padding: 16px;
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

      article {
        color: var(--main-color-d);
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
      }

      figure {
        margin: 1em 0;
      }

      img {
        max-width: 100%;
      }

      #back {
        margin: 1em 0;
        display: inline-block;
        padding: 0.25em 0.5em;
        border-radius: 0.25em;
      }
      #back:hover {
        font-weight: bold;
        background-color: var(--main-color-m);
        color: var(--main-color-l);
      }

      `}}></style>
      <article>
        <Link href="/"><a id="back">Indietro</a></Link>
        {children}
      </article>
    </>
  )
}
