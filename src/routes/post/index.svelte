
<script>
  import {post_index} from '$lib/markdown.ts'
  import Postgroup from '$lib/components/Postgroup.svelte'
  const tags = {}
  let visible_tags = undefined;
  for (let post of post_index) {
    for (let tag of post.attributes.tags) {
      tags[tag] = tags[tag] + 1 || 1
    }
  }
  const taglist = Object.entries(tags).map(([tag, count]) => {return{tag, count}})
  taglist.sort((a, b) => b.count - a.count)
//  console.log(urls['/src/content/research-portfolio.md'])
</script>

<div id="reset" class="absolute left-0 top-0 w-full">
<div class="flex">
  <div class="basis-1/4">
    <div class="sticky top-20">
      <h2>Tags</h2>
      <ul>
      {#each taglist as {tag, count}}
      <li>
        <a href="/post/tag/{tag}">{tag}</a> ({count})
        </li>
      {/each}
      </ul>
    </div>
  </div>
  <div class="basis-1/2">
<h2 class="text-xl mb-10">Posts</h2>
<Postgroup posts={post_index} />
</div>
</div>
</div>