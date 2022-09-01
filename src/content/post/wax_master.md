---
title: Extra Wax Content to Farm out
date: 2023-01-01
draft: true
---

**Speed is an issue**

Wax builds are extremely slow; 45 minutes to create the derivatives, and
3-5 minutes to run various builds. For someone trying to develop a web
site, especially a beginner, this is a **major** pain point; it means
that if something is going wrong, it is also impossible to do the kind
of test-and-rerun debugging that are invaluable for learning.

Take CSS, for example

The radical solution here is to rethink whether this needs to be in
Jekyll. (See the Ruby selection, below.). When I switched my personal
website away from Wordpress in 2015 or so, I used Hugo because everyone
else seemed to be doing it. because of how slow Jekyll is. I couldn't
imagine that it would make a difference on a small personal blog, but
since I don't know either Go or Ruby, I figured I might as well go with
the thing with momentum. Watching the build times on Jekyll, I have to
say I'm glad I did; I'm really stunned that the build times are as
incredibly long as they are. The Jekyll ecosystem is not thriving, and
the major thing propping Jekyll up nowadays, Github pages, seems to be
weakening. There are a couple alternatives I can think of.

1.  **Hugo.** This seems like the obvious choice. It's basically the

    > same as Jekyll, but since it's a precompiled binary it will be a
    > lot easier for most non-power-users to install. The templating
    > language is different, but while I'm fully on board with the Wax
    > mission of "teaching basic tools," not some framework, it seems
    > clear to me that liquid is not a basic tool. It wouldn't be too
    > hard to migrate. The [[Go-IIIF
    > framework]{.ul}](https://github.com/go-iiif/go-iiif) is not easy
    > to manage, but would probably provide straightforward ways of
    > accomplishing the stuff that the current IIIF scripts do. And the
    > speed would mean not just that the experience would be far better
    > for users, but that wax-as-a-service involving publication to s3
    > or library buckets would become much more feasible. Rather than
    > requiring mucking around with Ruby versions and stuff,

2.  **Pandoc.** Alex Gil has already done a lot of work with Pandoc, and
    > it has a better and more widely used markdown syntax than the
    > kramdown parser built into Jekyll. Ed seems to fit in very well
    > with pandoc, and I see Alex on the pandoc github issues page from
    > time to time. And pandoc has its own templating language using the
    > YAML header block that's not much worse than liquid, and which
    > avoids some of the problems around escaping that make liquid
    > difficult to use.

> Problems: Orchestration of various pandoc templates is tricky. I lied
> up above. I didn't switch straight from Wordpress to Hugo; I actually
> ran my webpage in [[Hakyll]{.ul}](https://jaspervdj.be/hakyll/) for a
> year or two rather than accept an inferior markdown parser. It was a
> nightmare.
>
> Minimalism: The new Lua-based templating scripts for pandoc, though,
> are intriguing; they integrate with the pandoc binaries, so there's no
> need to install anything, and they make it possible to write
> arbitrarily complex templating scripts. Lua is sort of the minimalist
> computer language par-excellence; although it's sort of nice, it's far
> more worth learning than liquid templating and I've always had a soft
> spot for it as, I think, the only major programming language from
> south of the equator. (I'm counting the New-Zealand-created "R" as
> just a version of the New-Jersey-created "S.") But something else
> would need to orchestrate the pandoc templates and calls. I've always
> used a Makefile; the rubberstamp package uses Python, which can handle
> your system pandoc well. Rake would probably work too... but see my
> notes on Ruby below.

3.  **Next.js/Gatsby/svelte-kit.js.** Static site generation and dynamic
    > site generation are getting harder and harder to tell apart; both
    > Next and Sveltekit (and probably nuxt on vue.js, too?) make it
    > possible to generate a collection of static sites with, I think,
    > **no javascript** as well as integrating rich javascript. I've
    > only worked much with Svelte, but it provides a really elegant
    > approach to the same sort of problems of building discrete
    > components that Ruby set in motion fifteen years ago. And while
    > svelte very much **is** a framework, '.svelte' files force people
    > to reckon with css, html, and javascript in quite a useful way for
    > teaching basic skills.
    > The progressive-enhancement strategy of svelte-kit would also be
    > in certain cases more minimal than Jekyll because it can hydrate
    > links without fully reloading the page\--great for low-quality
    > phones especially to reduce bandwidth use\--without giving up the
    > fallback of a static page. And svelte components\--unlike
    > React\--are just pages that include HTML, JS, and CSS in them. For
    > \*teaching\* and skill building, there's a lot to like here. I
    > will post an example of a svelte-kit site.

**Could there be waxes?**

For me the core idea here is an ontology, where a digital project is
build out of three things:

1.  A CSV of metadata
2.  A folder of images
3.  Some markdown files of exhibits.

And it materializes into a web site that looks like Omeka.

**Separation of roles is** **an issue**

A Wax consists of user metadata, user-generated templates, wax-generated
templates and scripts, and Jekyll boilerplate. These roles are blurred
together in a way that's a bit confusing. I wasn't expecting, for
instance, to have to go into \_layouts right away to edit the
\`generic_collection_item\` for it to show metadata\--I figured it would
just show the metadata that I have. This is always a problem with static
sites, where the themes, the user files, the templating files, and the
inputs cohabitate uneasily. The most appealing thing about Wax right now
to me is that in separating out the images and metadata from the rest of
the program (except for [[one
case]{.ul}](https://github.com/minicomp/wax_tasks/issues/72)) it manages
to keep a bright line. But the example site blurs this immediately;
rather than being able to use the base templates, it has to create a
special collection type for 'qatar item,' and the \`grep\`-less computer
newcomer will have a hard time tracking down the origins all the text
that appears on their Wax page should they wish to swap out a link or
change a menu item.

My preferred solution would be to fully isolate content-sources and
template-sources; put all the links, introductions, and lists of
metadata fields to show in one set of files, so that the collection
items just work. This is tricky, and perhaps un-jekylly. But it would
really help. An example of how: right now, a Wax page with a IIIF viewer
will not load any image if Javascript is disabled. For a minimal
project, this is disastrous; it means that users without JS can't see
the core reason of the site, and that webcrawlers like the Internet
Archive will never download the images for wax sites they encounter.
I've fiddled with a change to the collection-item template to use
progressive enhancement to update that page. But if I were to publish it
to the wax theme, existing users would need to download it explicitly.
The hugo themes I've used offer a clear update path, where you can apply
updates and bugfixes to your site in-place; if users want to keep their
wax site up-to-date but also keep the tweaks they made to the fields in
their item display, they'll have to do a lot of hand-merging and
cutting-and-pasted within individual files.

I don't have a full blown solution here, but a partial one might involve
segregating the wax theme from the site theme. I don't know if
\_includes and \_layouts are magic words in jekyll or just names of
directories, but it would be nice if a user could

**Version control is hard.**

Anything that you produce as text files should be under version control.
This applies to web sites, too. Software that you use should be
upgradeable. This applies to Wax. But since a core principle of Wax is
that you should be able to edit the HTML files yourself.

**Tests and separation of roles are related.**

Web sites need integration testing, not just unit testing. Wax has some
html-proofing built in, but when I load a page with missing or malformed
IIIF image manifests, it is not very helpful about reporting or
identifying them. In general, it should fail harder.
