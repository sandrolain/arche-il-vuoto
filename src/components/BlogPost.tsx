import hlTheme from "highlight.js/styles/tomorrow-night.css";
import Link from "next/link";

export default function BlogPost({ children, meta}) {
  return (
    <>
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
      img.wide {
        object-fit: cover;
        width: 100%;
        height: 240px;
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
        color: var(--main-color-md);
        font-size: 12px;
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
          }).format(new Date(meta.date))}</em>
        {children}
        <br/>
        <Link href="/"><a className="back">Indietro</a></Link>
      </article>
    </>
  )
}
