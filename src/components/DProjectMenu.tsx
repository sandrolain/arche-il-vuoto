import { posts } from "../getAllPosts";
import Link from "next/link"

export default function DProjectMenu ({ router }) {
  const projPosts = posts.filter((post) => {
    return post.link.match(/D\-project/) && (post.link != router.route);
  });
  projPosts.sort((postA, postB) => {
    const dateA = postA.module.meta.date;
    const dateB = postB.module.meta.date;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  if(projPosts.length === 0) {
    return null;
  }

  return (
    <>
    <style jsx>{/*css*/`
      aside {
        width: 33%;
        float: right;
        font-size: 14px;
        line-height: 1.3em;
        padding: 1em;
        border: 1px solid var(--main-color-m);
        background-color: var(--main-color-l);
        margin: 0 0 2em 2em;
        border-radius: 4px;
      }
      ul {
        padding-left: 1.5em;
      }
      li {
        list-style: square;
      }
    `}</style>
    <aside>
      Questo contenuto<br/>fa parte del mio <em>Progetto D</em>.<br/>
      Altri contenuti della serie:
      <nav><ul>
      {projPosts.map((post) => {
        const { link, module: { meta }, } = post
        return <li key={link}><Link href={link}>{meta.title}</Link></li>;
      })}
      </ul>
      </nav>
    </aside>
    </>
  )
}
