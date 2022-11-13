import Link from "next/link"
import styles from "./ListItem.module.css"

export const ListItem = ({ post }) => {
  const { link, module: { meta }, } = post
  const image = meta.listimage ?? meta.image;
  return (
    <Link passHref href={link} className={styles.item} style={{"backgroundImage": image ? `url(${image.src})` : null}}>
      <div className={styles.itemCnt}>
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
    </Link>
  )
}
