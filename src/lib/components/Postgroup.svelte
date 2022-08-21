<script>
  import { dev } from '$app/env'
  export let posts
  console.log({posts})
</script>

  {#each posts as post}
    {#if dev || !post.attributes.draft}
    <div class="article mb-10 prose prose-slate">
      <div>
        <a class="hover:underline no-underline {post.attributes.draft ? "text-red-700" : "text-violet-700"} transition" href="/{post.path}/">{post.attributes.title}</a>
        <span class="text-slate-500">
          {post.attributes.date.toString().slice(4, 15)}
        </span>
      </div>
      <div>
        {@html post.preview}
      </div>
    </div>
    {/if}
  {/each}
