import Link from "next/link";
import { ListItem } from "../components/ListItem";
import { posts } from "../getAllPosts";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  posts.sort((postA, postB) => {
    const dateA = postA.module.meta.date;
    const dateB = postB.module.meta.date;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const postsPerPage = 10;
  const postsNum = posts.length;
  const pagesNum = Math.ceil(postsNum / postsPerPage);

  const pages = [];
  for(let i = 0; i <  pagesNum; i++) {
    pages.push(i);
  }

  const page = parseInt(router.query.p as string || "0", 10);
  const pagePosts = posts.slice(page * postsPerPage, (page + 1) * postsPerPage);

  return (
    <>
      <style jsx>{/*css*/`
        .pagination {
          display: flex;
          justify-content: flex-end;
          margin: 1em 0;
        }
        .pagination a {
          display: block;
          padding: 0.25em 0.5em;
          line-height: 1em;
          color: var(--main-color-m);
          text-decoration: none;
          border-radius: 0.25em;
        }
        .pagination a.active {
          font-weight: bold;
          background-color: var(--main-color-l);
        }
        .pagination a:hover {
          font-weight: bold;
          background-color: var(--main-color-m);
          color: var(--main-color-l);
        }
      `}</style>
      <div className="pagination">
        {pages.map((num, i) => (<Link key={num} href={`/?p=${num}`}><a className={i === page ? "active" : ""}>{i + 1}</a></Link>))}
      </div>
      <div id="homepage">
        {pagePosts.map((post) => (<ListItem key={post.link} post={post} />))}
      </div>
      <div className="pagination">
        {pages.map((num, i) => (<Link key={num} href={`/?p=${num}`}><a className={i === page ? "active" : ""}>{i + 1}</a></Link>))}
      </div>
    </>
  );
}
