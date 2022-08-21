import { promises as fs } from 'fs';
import {promisify} from 'util'
import { exec as raw_exec} from 'child_process'
import yaml from 'js-yaml';
const exec = promisify(raw_exec)
const fulltext = import.meta.globEager("/src/content/**/*.md?raw", { as: 'raw' })

export const pages = [];

for (const [k, v] of Object.entries(fulltext)) {
  console.log({v})
  const attributes = yaml.load(v.split('---')[1])
  const filepath = k;
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
  path = path.replace(/\/\/?index.md$/, "").replace(/\.md$/, "")
  attributes.date = new Date(attributes.date || 0)
 
  const type = path.startsWith("post/") ? "post" : "page"
  if (path.match(/svelte/)) {
    console.log({path, type})
  }
  let url = `https://benschmidt.org/${path}`
  if (path.startsWith("post/sappingattention")) {
    // Hold off here.
    continue
    url = `https://benschmidt.org/` + v.attributes.url.replace(".html", "/")
  }
  pages.push({url, path, slug, filepath, type, dir, attributes});
}

pages.sort((a, b) => b.attributes.date - a.attributes.date)

export const posts = pages.filter(d => d.type == "post")
posts.sort((a, b) => b.attributes.date - a.attributes.date)

// An object that doesn't encode the full html
export const post_index = posts.map(
  post_original => 
  // Don't do deletions at top level.
  {
    const page = {...post_original}
    if (isNaN(page.attributes.date)) {
      throw new Error(`Invalid date for ${page.filepath}`)
    }
    page.preview = page.html.split("<p>")[1].split("</p>")[0] + ` <a class="text-violet-700" href="/${page.path}">[Read complete post...]</a>`
    page.html = undefined;
    page.attributes.tags = page.attributes.tags || []
    if (typeof(page.attributes.tags) === "string") {
      page.attributes.tags = page.attributes.tags.split(",")
    }
    page.attributes.tags = page.attributes.tags.map(d => d.trim()).filter(d => d.length > 0)
    if (page.attributes.categories) {
      page.attributes.tags = [...new Set([...page.attributes.tags, ...page.attributes.categories])]
    }
    return page
  }
)

post_index.sort((a, b) => a.attributes.date > b.attributes.date ? -1 : 1)

// An object that doesn't encode the full html
export const recent_posts = post_index.filter((a) => !a.attributes.draft).slice(0, 5)
