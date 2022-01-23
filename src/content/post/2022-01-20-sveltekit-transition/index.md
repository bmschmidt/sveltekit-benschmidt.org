---
date: 2022-01-22
featured: false
draft: false
title: From Hugo to Svelte-Kit
tags: ["This site", "Javascript", "Sveltekit"]
---

I've been spending more time in the last year exploring modern web stacks, and have started evangelizing
for [Svelte-Kit](https://kit.svelte.dev/), which is a new-ish entry into the often-mystifying world 
of web frameworks. As of today, I've migrated this, personal web site from Hugo, which I've been using 
the last couple years, to svelte-kit. Let me know if you encounter any broken links, unexpected behavior,
accessibility issues, etc. I figured here I'd give a brief explanation of why svelte-kit, and how I did a
Hugo-Svelte kit migration.

# Why Svelte-Kit for a personal site?

I've had some kind of content up at benschmidt.org for over a decade; and I've been using it as my primarily outlet
for blog posts for about five years (although still posting occasionally on my [old blogger site](https://sappingattention.blogspot.com) as well. For a time it was hosted on Wordpress; for a time after that, on Hugo. I also have a large number of other items living on benschmidt.org I've made over the years that weren't integrated into the Hugo site; most are things like standalone visualizations that I'd like to be able to retain all their existing javascript but share a top bar with the rest of the site so that people link them to me.

Hugo works find for building compared to wordpress, by giving a static site solution that unlike Wordpress doesn't present security vulnerabilities. I like, compared to Jekyll, that it's a quick build. But left me with a somewhat clunky set of pages for things like a visualizations gallery. And although I picked a decent theme--Hugo Academic--I never fully got on board with the weird way that you basically end up having to learn to manage Hugo's build process through a set of TOML and YAML files. I saw someone once decry the growing trend to make people do things in YAML that are fundamentally *programming*; although yaml is great for some things, learning the configuration setting for some particular theme is generally frustrating.

Also, the pile-up of all these old web sites means the URL requirements are a little finicky--I want to support some of the old wordpress links, some of the Hugo-style links, and potentially bring in some blog posts for other domains (bookworm.benschmidt.org, for instance, which had a number of posts that I've entirely lost.)

So here are the problems that Svelte-kit solves.

1. **Routing**. I never really figured out the URL setup for blog posts in the Academic theme for Hugo; and I have a number of old posts from a Hakyll setup I breifly explored in 2015-2017 before abandoning it.  


# Hugo to Svelte-Kit

For example--I've also moved all my old blogger posts here, by dumping them from 