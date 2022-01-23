---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "2020 06 08 Historians and AI"
subtitle: ""
summary: ""
authors: []
tags: ["AI", "Historical Profession"]
date: 2021-06-08T15:32:28-04:00
lastmod: 2021-06-08T15:32:28-04:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---


Thanks for coming, thanks for your contributions, and special thanks
to Darrell and the AHA staff for organizing this and putting up with
at least my repeated inability to hold a deadline during a pandemic.

My frame for thinking about this has been Lara Putnam's article from 2016 about the 
"Transnational and the Text Searchable" which made a really interesting argument
about the unacknowledged ways that full text search, if it didn't *cause* the boom in 
transnational history in the 1990s and 2000s, at least made it much easier 
for it to take a particular form while leaving historians with an
abbreviated investment in the countries, periods, and people they study.

So the perspective that I tried to advance is that
the most important changes brought about by AI for the historical 
profession will be ones that we largely do not notice, except for the
general sense of a conformation of historians superpowers of research.
It will be ones where the underlying methods align so nicely with the tools that
Google, Elsevier, and JStor are developing that we don't even quite 
notice them.

But what we won't notice is that we'll increasing our powers, others are 
gaining them for the first time.

## Representation Learning

But in order to understand that analogy, I think I'll take it a little
onto myself to try to explain just how these algorithms work.
"Artificial Intelligence" is a philosophical term that I don't
really understand and that tends to conflate many only semi-related things
together--Machine Learning, Data Science, Neueral Nets, Deep Learning, and so on. 

But just in the period since I started doing digital history 
a decade or so ago, there is something new, and it's something 
worth understanding. 
The best, most 
specific term is "representation learning," and it is a shared
strategy that has quickly transformed the information architecture
of the contemporary age.

It relies heavily on vast troves of data to train on,
and I'm sure we'll get to talk more about the implications of what's in
those datasets. But it also has an actual underlying model. 
 
RL is a general strategy for transforming any type of digital object, from a book, to your listening history on a streaming service, into a “vector” of numbers. These models often require a massive
number of examples to get started, but once trained on they can quickly place any similar digital surrogate into the same “vector space.” These vectors are usually trained in order to predict some discrete outcome. (Whether you’ll skip a Bob Dylan song; what the next word in a sentence will
be; if a photo is of a marmot, a hedgehog, or an aircraft carrier.) But the vector—the
"representation" in RL—is more than the prediction it makes; it is a representation of the object
in a mathematical space. Each poem, song, or picture floats among all the other objects the
computer could see, situated in terms of their relationships to each other.

It's a map without a territory.

This is not any particular representation; it's just the words that appear, 
without any real deep learning. But it captures in a more useful way than the network diagrams 
the *goals* here.
[](http://creatingdata.us/datasets/hathi-features/)

Searches and retrieval happen in this space.

## Effects of representation learning.

There are two important changes that this will bring about:

1. It makes search operate both on new kinds of *sources* and on new kinds of 
   *terms.* Images, handwriting, and foreign languages. (I'd wager that the
   effect of languages specifically isn't sufficiently through yet.)
2. It blurs the line between "search" and "recommendation systems" in interesting 
   but also problematic ways. If you search not for a term but as a trajectory,
   you get different results; one of the things that makes Spotify, Google, and the
   rest work is that the reduce not just their *songs* to vectors but their *users*
   as well. Research that is tailored towards what the scholar wants to see--which
   they often dissemble means simply "easy to use."

# Shades of grey and the menagerie.

This is the first thing we need to worry about.

Intelligent people sometimes assume that since computers are binary, they have to see
things in black and white; only the human mind can handle subtlety, ambiguity, and nuance. But
really, the neural networks that build RL models can see only in shades of grey. This changes the questions they can help us think about. In my own research, I’m using a neural network to probe the design of the early 20th-century Library of Congress Classification by looking at the differences between machine predictions and actual decisions. But while I train the classifier to return a single prediction, the underlying model actually returns some tiny probability that every book could belong to any subject. Give it Moby Dick, and the model is fairly confident it’s reading a novel; but it nonetheless holds out a significant possibility that the book might be shelved as biology or travel literature, and even allocates a tiny chance that it might be a mathematical treatise or a musical score. In these uncertainties lies a space for escaping conventional orders.

[Melville]

Representation models are not binary--they are pathologically sophisticated smooth, incapable of 
seeing distinctions rather than gradations.

## The menagerie

So what are the equivalents to keyword search from a machine that only sees shades of grey? 
In certain ways, it's precisely the opposite of what we've come to expect from the
ways we intentionally use digital archives.

Rather than enabling hyper-specific searches, it will promote engaging with
broad concepts. One of the most interesting digital history papers I've read in 
the last few years was by a team of concepts who assembled a vector to represent "law
and economics thought." 

If I can drop some pessimism at the end; I am not convinced this is a golden
opportunity for historians at all, because to serious engage with this 
suggests a need to deal with methodology in a way that historians have been reluctant to.
It will reward those who understand how to fit the engine together.

But what I'm maybe most worried about is that historians will overestimate their relevance.
In one of the projects I'm working on, we find all the things that don't fit into
New discovery methods will make it easy to see the places that the classifiers fail.
One of the issues that comes up again and again is that of bias.
But one of the most
curious biases of these new classification systems is that they provide enormous ammunition
to those who are skeptical of classification itself. In a project with 
Peter Organisciak where I'm using deep learning to track duplicate volumes in various different
books, we have a section
of one notebook that's called the "menagerie"; places where things have happened that
don't fit into the understanding of book publication that we bought to the project;
books that 

Preparing for today, I got into a too-long discussion with some literary scholars and Spotify employees
about whether Spotify is killing genre. I don't know. But I am confident that the representation learning
strategy and certain things about higher dimensional spaces operate in a space that, because
of their fuzziness, will tend to surface things not at the center of dense areas in a high dimensional
space but things off at their margins. I've seen that again and again.

With the historical profession stuck in a sort of holding pattern for hiring, it seems to me that the 
prevailing evaluation of AI systems will be for historians to focus in a self-congratulatory way,
on their shortcoming, biases, and errors, and leave serious engagement with digital methodology to
fields that are able to focus more singularly on methodology like Economics, Computer Science, and
even English. Historians will be able to come up with a continuing supply of strange examples that
make for great lecture examples, that complicate the grand narratives of history offered by economists,
or that confirm the strangeness of the past and the uniqueness of each individual artifact in it.

But this would itself be a capitulation to the machine, and isn't necessarily the place that we want to be.
Matt Jones wrote about the "Auxiliary Sciences of History" in his piece.


