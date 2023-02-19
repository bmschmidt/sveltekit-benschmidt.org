---
title: 'Blogging with Pandoc'
date: 2023-02-12
draft: false
tags: ['Blog', 'Programming', 'Web']
abstract: |
  In which I describe building a blog on top of pandoc.
---



A blog is a set of essays, by date, with an accompanying Atom or RSS feed.[^1]
The best way to write this sort of thing is in Markdown; and the best Markdown processor is Pandoc. One of the things that makes pandoc-flavored markdown so compelling is that it includes a rich set of templates for classes and divs. But for as long as I've been on the Web, it's been weirdly difficult to write a blog in pandoc-styled Markdown, with all the benefits that come with it. The sites that people use for blogging, like Wordpress, Jekyll and Hugo (all of which I've used to some degree in the past), tend to promise--and largely, deliver--on a system where you don't have to edit HTML. But instead, they force you to endlessly manipulate configuration files in [YAML](https://yaml.org/) (or worse, [TOML](https://toml.io)).
and once you do, you have learned an obscure templating format in a language that has nothing to do the web.[^2]

-------

* [Pandoc Svelte Components]()

I've been gradually building out one way to write with pandoc on the web.

This repo extracts out the basic architecture from my personal site into a truly bare-bones blog that can be easily extended. Svelte-kit is a well-thought out way to write performant, accessible, standards-oriented web sites that use Javascript as a templating language, prioritize accessibility and quick build times (unlike, say, Jekyll) and avoid the bloated abstractions of React. Writing in Svelte components is about as close as you can get nowadays to actually using the things you'd learn in a web dev class about CSS, HTML, and Javascript.

You should use a javascript-based build framework for your blog, because love it or hate it-- who am I kidding, obviously you hate it--it's the language of the web and it makes it easier to do webby things. People who like Jekyll sometimes like to call it 'battle-tested.' This is bonkers-- it's like if you had to had to choose one country's Olympic team to protect your home and blurted out 'Persia!' because you remember how scary they were in the movie 300.[^3] First off, that was a long time ago, and there are a lot of Russians on steroids and Americans on marginally less detectable PEDs you might want to consider first. Second of all, they lost the war. So did Jekyll, friends. If you've been using it since 2012, by all means keep it going. But for the love of God, don't foist it on other people.

The real point here is to be able to do neat things inside the blocks. For some examples, see the pandoc-svelte-components library I use heavily here. But the point here is minimalism that's fast, flexible, and showcases modern web architecture.

Pandoc is the Cadillac of Markdown engines, and is amply served with npm modules. This module, built primarily to support my [pandoc-svelte-components] library, plugs a few gaps.

Most importantly for me, it provides a Rollup plugin for importing markdown files directly inside a svelte-kit project as JSON. I can (and may) support html exports as well, but the JSON format is the place where pandoc allows really interesting things to happen.

[^1]: Yes, there were blogs before there was RSS. And there were eggs before chickens. But if you serve me an omelet, I'm going to assume it's made of chicken eggs; if it turns out to be made with salmon roe or alligator eggs, there's something wrong with you.
[^2]: Something that's always puzzled me is how there isn't a dominant one of these things everyone uses written in Python, even though there's a whole industry devoted to convincing people to learn to code in Python. Like there's django--which I also don't think you should use--and there are some things--I want to say Pelican?--but basically nothing.

[^3]: I haven't actually seen the movie 300, because... I mean so many reasons. It looks kind of racist, first off.

Currently supported formats:

markdown
IPython notebooks
Microsoft Word (docx) files.
Usage in a vite project with sveltekit.

// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { pandoc_rollup_plugin } from 'pandoc-tools';

export default defineConfig({
plugins: [pandoc_rollup_plugin({ cache_loc: 'posts_cache' }), sveltekit()]
});
// src/routes/+page.svelte
