import { post_index } from '$lib/markdown'
import { Feed } from "feed";

function make_feed() {
  const feed = new Feed({
    title: "Ben Schmidt's Blog",
    description: "Posts and updates, hand-generated",
    id: "https://benschmidt.org/",
    link: "https://benschmidt.org/post",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    copyright: "All rights reserved 2021, Ben Schmidt",
  //  updated: new Date(2013, 6, 14), // optional, default = today
  //  generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: "https://benschmidt.org/feed.json",
      atom: "https://benschmidt.org/feed.xml"
    },
    author: {
      name: "Ben Schmidt",
      email: "bmschmidt@gmail.com",
      link: "https://benschmidt.org"
    }
  });

  post_index.filter(d => d.attributes.date).sort((a, b) => b.attributes.date - a.attributes.date)
  post_index.forEach(post_full => {
    const post = post_full.attributes
    post.url = post_full.url
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post_full.description || "",
      content: post_full.preview,
      author: [
        {
          name: "Ben Schmidt",
          email: "bmschmidt@gmail.com",
          link: "https://benschmidt.org"
        },
      ],
      date: post.date,
      image: post.image
    });
  });

  feed.addCategory("History");
  feed.addCategory("Programming");
  feed.addCategory("Digital Humanities");
  feed.addCategory("Data Analysis")
  feed.addCategory("Data Visualization")
  return feed
}
export async function get() {
  return {
    status: 200,
    headers: {
      "Content-type" : "text/xml"
    },
    body: make_feed().atom1()
  }
}