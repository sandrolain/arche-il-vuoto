import Link from "next/link"

export const ListItem = ({ post }) => {
  const { link, module: { meta }, } = post
  return (
    <>
    <style jsx>{/*css*/`
      .item {
        border-radius: 0.25em;
      }
      a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 0.5em 1em;
      }
      a:hover {
        background: var(--main-color-l);
      }
      h3 {
        margin: 0;
        font-size: 1.2em;
        line-height: 1em;
        color: var(--main-color-md);
      }
      em {
        font-size: 0.8em;
        line-height: 1em;
        color: var(--main-color-m);
      }
    `}</style>
      <Link href={"/blog" + link}>
        <a className="item">
          <h3>{meta.title}</h3>
          <em>{Intl.DateTimeFormat("it", {
            hour12: false,
          }).format(new Date(meta.date))}</em>
        </a>
      </Link>
    </>
  )
}
