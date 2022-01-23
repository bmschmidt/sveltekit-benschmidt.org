<script>
  import {html as preamble} from "$lib/../content/_index.md"
  import LogoGithub24  from "carbon-icons-svelte/lib/LogoGithub24";
  import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
  import LogoGoogle24 from "carbon-icons-svelte/lib/LogoGoogle24";
  import Email24 from "carbon-icons-svelte/lib/Email24";
  import {recent_posts} from '$lib/markdown'
  import Postgroup from '$lib/components/Postgroup.svelte';

  const roles = [
    {icon: Email24,
      link: "mailto:bs145@nyu.edu"
    },
    {icon: LogoTwitter24,
    link: "https://twitter.com/benmschmidt"},
    {icon: LogoGoogle24,
    link: "https://scholar.google.com/citations?user=QSmupT4AAAAJ&hl=en"
    },
    {
      icon: LogoGithub24,
      link: "https://github.com/bmschmidt"
    },  
    {
      icon: Email24,
      link: "https://orcid.org/0000-0002-1142-5720"
    }
  ]

</script>

<img src="/orcid.svg" style="display: inline" />
<div id="reset" class="items-center absolute left-0 top-0">
  <div id="photo-and-desc" class="flex-col flex sm:flex-row items-center">
    <div id="img-and-links" class="flex flex-row items-center 
             sm:flex-col w-full sm:w-1/3">
      <div class="w-full items-center">
        <img class="object-contain" src="/img/ben.png" alt="Ben Schmidt photo">
      </div>
      <div id="links" class="backdrop-blur-sm relative z-10">
        <div class="p-4 sm:p-8 flex-wrap bg-white shadow-lg flex">
          {#each roles as role} 
            <a href="{role.link}" class="underline violet-800 m-1">
              <svelte:component this={role.icon} />
            </a>
          {/each}
        </div>
      </div>
    </div>
    <div class="w-2/3 mx-24 prose prose-stone prose-l">
      <h1 class="font-size-32">Ben Schmidt</h1>
      {@html preamble}
    </div>
  </div>

  <div id="blog">
    <h2><a class="text-xl" href="/blog">Blog</a></h2>
    <Postgroup posts={recent_posts} />
  </div>
</div>

