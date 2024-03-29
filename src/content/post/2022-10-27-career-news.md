---
title: New Directions
date: 2022-10-27
draft: false
tags:
  - News
  - Programming
---

I'm excited to finally share some news: I've resigned my position on the
NYU faculty and started working full time as Vice President of Information Design at [Nomic](https://nomic.ai), a startup helping people explore, visualize, and interact with massive
vector datasets in their browser.

This will be a big shift. I've spent my whole career up to this point in
academic institutions; but right now, Nomic is the best possible place
to tackle the most important and interesting questions that I've spent
years thinking about. How do we interact with huge collections of texts,
images, and information? How do we interpret, critique, and improve the
implicit knowledge bases that institutions rely on? Today that means
being able to give shape to digital text and images and to build new
tools for machine learning interpretability.

Almost two years ago I wrote a [blog post about the web and the future of data programming](https://benschmidt.org/post/2020-01-15/2020-01-15-webgpu/). I scratched from the early drafts a few
paragraphs about _Halt and Catch Fire_, a top-10 all-time TV show,
about the joys and frustrations of **knowing** that something important
is amassing on the horizon and not being sure if you'll be able to take
part. For three years, I've been watching as representation learning
models (e.g. BERT, GPT-3, CLIP, and DALL-E), multi-language binary
serialization formats (e.g. Apache Arrow), and tools for scalable data
visualization and analytics in the browser (WebGL and WebGPU), have all
simultaneously experienced massive technical inflections, directing them
towards a common destination.

I want to be as close to that impact site as possible, and for me it
won't be in a history department. While historical datasets present some
of the most compelling playgrounds for work applying these technologies,
the academic habit of treating building as play makes it hard to fully
realize the potential of these shifts. Actually developing the tools and
frameworks necessary for this visualization has been a spare-time hobby
compared to teaching, administration, and research.
Even academic
centers in data science and CS (which obviously produce incredible work in
the AI field) are well behind industry in thinking through the systems
and engineering required to bring these tools to the world.

Knowing this, I've been talking to a lot of people in these fields
recently. Out of all them, [Brandon](https://www.linkedin.com/in/brandon-duderstadt-a3269112a/) and [Andriy](https://www.linkedin.com/in/andriymulyar/) at Nomic, and their vision for making AI
more transparent while making datasets more visible via AI models, are
the people that most trip my _Halt and Catch Fire_ test. Something
interesting is happening **right now** as AI models get bigger, as
dimensionality reduction algorithms proliferate, and as web standards
emerge that make the browser a compelling computing environment.

Over the past few months I've been watching Brandon and Andriy improve
their models and create rich interfaces for exploring, filtering, and
even editing embedding spaces. I've been incredibly impressed by their
progress and am convinced that, given the extremely specific interests
I've developed over the past few years, Nomic is the best place to be
doing the kind of work I'm really interested in doing.

![A map I'm excited to share soon](/img/nomic-dotcloud.png)

If you pay only glancing attention to "artificial
intelligence,"embedding spaces might seem like an arcane detail to be so
excited about. But they're critical--not just for machine learning
pipelines, but for the whole cultural apparatus we inhabit today. When
you listen to new music from your streaming subscription, it's chosen
based on embedding vectors for the songs and an embedding vector for
you. Unified spaces for representing image and text embeddings have
unleashed a dizzying cascade of innovations in generative AI over the
last six months through models like DALL-E and Stable Diffusion. Search
engines, recommendation systems, translation algorithms--anywhere there
is an AI model, there is an embedding space underpinning it. And
understanding and navigating these multidimensional spaces has been a
key concern of data visualization for longer than most people know. For
years I've assigned my classes--to the bemusement and amusement of
students--an absolutely amazing Stanford Linear Accelerator video
featuring the legendary statistician John Tukey manipulating a
nine-dimensional scatterplot with a custom-made array of knobs. Nowadays
we all use UMAP, T-SNE, and newer methods for trying to disentangle
spaces like this, but the concerns and goals are real and satisfy a need
that's been around since the earliest days of exploratory data analysis.

<iframe width="704" height="525"
src="https://www.youtube.com/embed/B7XoW2qiFUA" title="prim9"
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>
</iframe>

I've worked on a lot of different projects in this general area over the
years, but one that's especially important here is [Deepscatter](https://github.com/nomic-ai/deepscatter), my personal
typescript/WebGL library for visualizing arbitrarily large collections
of points in the browser. For the last two years I've been captivated by
the possibilities here, even though they haven't fit into any of the
work I've been doing at NYU. While I'll have to set a lot of my other
projects aside, at Nomic I'll get to spend a lot more time expanding the
possibilities for defining and exploring large embedding spaces. I met
Brandon and Andriy through their contributions to deepscatter, and providing pointers as they build a fork into their new product, [Atlas](http://atlas.nomic.ai). As part of this new position I'll get to spend more time working building out features I've long had in mind for Deepscatter but haven't had the bandwidth or
support to pursue, and sharing some new and exciting maps. This should
be good news for everyone I know using Deepscatter now, both because
I'll be able to implement these features, and because Nomic's internal
fork enables some very exciting possibilities including search,
selection, and filtering.

From now on this improved library will live at
github.com/nomic-ai/deepscatter repo under a CC-BY-NC-SA license, where
NC means research and personal use is encouraged, but any commercial
applications require a license from Nomic. If you have any questions
about using Deepscatter for something, join .

But you can also start making maps more easily and robustly by using
Atlas. If you have a large collection of text, embeddings, or something
else, do reach out! Atlas is invite-only right now, and you can join the
waitlist [here](https://atlas.nomic.ai/waitlist). I'm excited to start showing off some of what we've been working on--helping set up full-text search has been revelatory about what kinds of data interactions are now possible.

I've written and discussed a lot over the years about the humanities,
the university, the sciences, and all the rest, so leaving at this
moment feels a bit more fraught for me than it would for most.
Some of our redoubts are dealing with a slight fire and brimstone problem--I'm sure
I'll take some chances to look back on those
bigger questions soon. But not too soon--don't want to turn into a
pillar of salt.

I do want to thank and note some people at NYU as I go, though. In the
past three years many students and faculty have made great strides in
digital humanities, and it has been exciting to help introduce many
students to digital humanities work and to create spaces that encourage
new and interesting work. In my role as director of digital humanities I
launched, alongside Zach Coble in Digital Scholarship, a new seed grant
program that has funded sixteen DH projects: several have already earned
major external grants, and I'm sure you'll be hearing more from some of
them in the future. . I also managed to cobble together funding for a
new series of summer fellowships starting in 2021: running this summer
class with Jojo Karlin and others at the libraries has been extremely
rewarding. (--and I should say it's a delight to be able to link to the
new website that we built last spring and which Marii Nyrop
superintended in just one of their irreplaceable contributions to DH
community life at NYU.) I co-directed, with Ellen Noonan and Sibylle
Fischer, the Asylum Lab, what was my intellectual lodestar at the university
taking an interdisciplinary approach to understanding the life stories
migrant records from the last hundred years with a group of graduate
students and an undergraduate class. And teaching, talking to, and
working with students from all levels and fields at NYU was uniformly a
joy.

But while it's hard to walk away, like so many people during this
pandemic I realized that there's no time to waste. And I'm excited to
see what's next.
