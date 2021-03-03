import path from "path";
import fs from "fs";
import slugify from "slugify";
import jsonData from "./posts/posts.json";

interface TumblrJSON {
  tumblr: {
    posts: {
      post: {
        _attributes: {
          id: string;
          type: string;
          "date-gmt": string;
          slug: string;
        };
        "regular-title"?: {
          _text: string;
        };
        "regular-body"?: {
          _text: string;
        };
        "quote-text"?: {
          _text: string;
        };
        "quote-source"?: {
          _text: string;
        };
        "tag"?: {
          _text: string;
        }[];
        "photo-caption"?: {
          _text: string;
        };
        "link-text"?: {
          _text: string;
        };
        "link-url"?: {
          _text: string;
        };
        "link-description"?: {
          _text: string;
        };
      }[];
    };
  };
}


const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;


const data = jsonData as TumblrJSON;

data.tumblr.posts.post.forEach((post) => {
  const date        = new Date(post._attributes["date-gmt"]);
  const dateISO     = date.toISOString();
  const slug        = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).substr(-2)}${("0" + date.getDate()).substr(-2)}-${slugify(post._attributes.slug)}`;
  const fileName    = `${slug}.mdx`;
  const filePath    = path.join(__dirname, `../src/pages/blog/tumblr/${fileName}`);
  let title: string = post["regular-title"]?._text ?? post["link-text"]?._text;


  if(!title && post["regular-body"]?._text) {
    title = post["regular-body"]?._text.match(/<h1>([^]+)<\/h1>/)?.[1];
  }

  if(!title && post["quote-text"]?._text) {
    title = truncate(post["quote-text"]._text.replace(/<[^>]+>/gm, " ").replace(/\s+/g, " "), 50, "");
  }

  if(!title) {
    title = post._attributes.slug.replace(/-/g, " ").trim();
  }

  title = title.substring(0, 1).toUpperCase() + title.substring(1);

  const description = "";
  let image: string = `${post._attributes.id}.jpg`;
  const imagePath = path.join(__dirname, `./media/${image}`);
  let body: string = "";

  try {
    if(!fs.statSync(imagePath)) {
      image = null;
    }
  } catch (e) {
    image = null;
  }

  if(post["regular-body"]?._text) {
    body        = post["regular-body"]._text.replace(/<h1>[^<]+<\/h1>/, "");
  } else if(post["quote-text"]?._text) {
    body        = /*html*/`
<blockquote>
  <p>${post["quote-text"]._text}</p>
  <em>${post["quote-source"]?._text ?? ""}</em>
</blockquote>
    `;
  } else if(post["photo-caption"]?._text) {
    image = `${post._attributes.id}.jpg`;
    body = /*html*/`
<figure>
  <img src={image} />
  <figcaption>${post["photo-caption"]?._text ?? ""}</figcaption>
</figure>
    `;
  } else if(post["photo-url"]) {
    image = `${post._attributes.id}.jpg`;
    body = /*html*/`
<figure>
  <img src={image} />
</figure>
    `;
  } else if(post["link-url"]?._text) {
    if(!post["link-description"]?._text) {
      return;
    }

    body = /*html*/`
${post["link-description"]._text}
`;
  }

  body = body.replace(/class="[^"]+"/, "");
  body = body.replace(/<img[^>]+src="[^>]+tumblr[^>]+"[^>]+>/, `<img src={image} />`);


  const fileContent = /*javascript*/`
import BlogPost from "../../../components/BlogPost"
${image ? `import image from "./images/${image}"` : ""}

export const meta = {
  title: "${title}",
  description: "${description}",
  date: "${dateISO}"
}

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

# ${title}

${body}
  `;

  fs.writeFileSync(filePath, fileContent);
  if(image) {
    fs.copyFileSync(imagePath, path.join(__dirname, `./../src/pages/blog/tumblr/images/${image}`));
  }
})
