<script context="module">
  export const prerender = true;
  export async function load({params, fetch}) {
    const slug = params.slug;
    const article = await fetch(`/post/${slug}/raw.json`).then(d => d.json());
    return {
      props : {
        html: article.html,
        attributes: article.attributes
      }
    }
  }
</script>

<script>
  export let html;
  export let attributes;
  import Blogpost from '$lib/components/Blogpost.svelte'
</script>

<Blogpost {attributes} {html} />

