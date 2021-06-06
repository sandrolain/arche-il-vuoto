import Link from "next/link"

export const ListItem = ({ post }) => {
  const { link, module: { meta }, } = post
  return (
    <>
    <style jsx>{/*css*/`
      .item {
        border-radius: 0.25em;
        margin-bottom: 0.5em;
        background: no-repeat 50% 50%;
        background-size: cover;
      }
      .item-cnt {
        border-radius: 0.26em;
        background: linear-gradient(90deg, hsla(var(--main-color-hue), 20%, 90%, 0.9), hsla(var(--main-color-hue), 20%, 90%, 0.9), hsla(var(--main-color-hue), 20%, 90%, 0.5));
        padding: 0.5em 1em;
      }
      a {
        text-decoration: none;
        color: inherit;
        display: block;
      }
      a:hover .item-cnt {
        background: linear-gradient(90deg, hsla(var(--main-color-hue), 20%, 90%, 1), hsla(var(--main-color-hue), 20%, 90%, 0));
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
      <Link href={link}>
        <a className="item" style={{"backgroundImage": `url(${meta.image})`}}>
          <div className="item-cnt">
            <h3>{meta.title}</h3>
            <em>{Intl.DateTimeFormat("it", {
              hour12: false,
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric"
            }).format(new Date(meta.date))}
            {link.match(/\/blog\//) ? " - Blog" : ""}
            {link.match(/\/D-project\//) ? " - Progetto D" : ""}</em>
          </div>
        </a>
      </Link>
    </>
  )
}
