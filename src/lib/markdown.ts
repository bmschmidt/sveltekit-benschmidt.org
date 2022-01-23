const urls = import.meta.globEager("/src/content/**/*.md")

export const pages = [];
for (let [k, v] of Object.entries(urls)) {
  let filepath = k;
  let dir = filepath.split("/")
  dir.pop()
  dir = dir.join("/")

  let path = k.replace("/src/content/", "")
  let slug;
  if (path.endsWith("index.md")) {
    const p = path.split("/")
    p.pop()
    slug = p.pop()
  } else {
    slug = path.split("/").pop().replace(".md", "")
  }
  path = path.replace(/\/index.md$/, "").replace(/\.md$/, "")
  v.attributes.date = new Date(v.attributes.date)
  const type = path.startsWith("post/") ? "post" : "page"
  if (path.match(/svelte/)) {
    console.log({path, type})
  }
  let url = `https://benschmidt.org/${path}`
  if (path.startsWith("post/sappingattention")) {
    // Hold off here.
    continue
    console.log(v.attributes.url)
    url = `https://benschmidt.org/` + v.attributes.url.replace(".html", "/")
  }
  pages.push({url, path, slug, filepath, type, dir, ...v});
}

pages.sort((a, b) => b.attributes.date - a.attributes.date)

export const posts = pages.filter(d => d.type == "post")

// An object that doesn't encode the full html
export const post_index = posts.map(
  post_original => 
  // Don't do deletions at top level.
  {
    const page = {...post_original}
    page.preview = page.html.split("<p>")[1].split("</p>")[0] + ` <a class="text-violet-700" href="/${page.path}/">[Read complete post...]</a>`
    page.html = undefined;
    page.attributes.tags = page.attributes.tags || []
    if (page.attributes.categories) {
      page.attributes.tags = [...new Set([...page.attributes.tags, ...page.attributes.categories])]
    }
    return page
  }
)

post_index.sort((a, b) => a.attributes.date > b.attributes.date ? -1 : 1)

// An object that doesn't encode the full html
export const recent_posts = post_index.filter((a) => !a.attributes.draft).slice(0, 5)
