import Link from "next/link";
import { ListItem } from "../components/ListItem";
import { posts } from "../getAllPosts";
import { useRouter } from "next/router";
import { MDXProvider } from '@mdx-js/react'
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function IndexPage() {
  const router = useRouter();
  const [state, setState] = useState<{page: number; pages: any[]; pagePosts: any[]}>({
    page: 0,
    pages: [],
    pagePosts: []
  });

  useEffect(() => {
    (async () => {
      for(const post of posts) {
        post.module = await post.module;
      }

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
      console.log("🚀 ~ file: index.tsx ~ line 38 ~ pagePosts", pagePosts)

      setState({page, pages, pagePosts});
    })();
  }, []);

  const {page, pages, pagePosts} = state;

  return (
    <MDXProvider>
      <div className={styles.pagination}>
        {pages.map((num, i) => (<Link key={num} href={`/?p=${num}`} className={i === page ? "active" : ""}>{i + 1}</Link>))}
      </div>
      <div id="homepage">
        {pagePosts.map((post) => (<ListItem key={post.link} post={post} />))}
      </div>
      <div className={styles.pagination}>
        {pages.map((num, i) => (<Link key={num} href={`/?p=${num}`} className={i === page ? "active" : ""}>{i + 1}</Link>))}
      </div>
    </MDXProvider>
  );
}
