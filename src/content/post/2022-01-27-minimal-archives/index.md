---
title: Online Archives for the 2020s, Part I
tags: Modern Web Galleries
date: 2022-01-27
draft: true
---

I've been thinking a lot lately

**What is minimalism?**

Minimalism as a computing movement can mean different things. Wax is
torn in a few different directions. The footprint of the sites, and the
nature of the IIIF standard, are so large that you've pretty much got to
give up the idea of these as tiny, old-school websites. Build times will
be significant, and collections will be pretty big.

But there are two strands of minimalism that are in reach, and are in
tension on this project. One is what I think of as "Apple minimalism."
It's the idea that software should just work, that edges should be
sanded off, that it's possible to do everything you need on an iPad
without root access because the screen looks good, it comes with a
keyboard, and a child can figure it out.

The other is "Back to the Land Minimalism." It's the idea that interface
is a luxury and you can provide everything you need with some farming
tools, a copy of the Whole Earth Catalog, and land with decent soil and
somewhere to sink a well. It will be hard to put something together, but
it will be yours, it will last, and you won't rely on anyone else.

Wax looks to users like Apple Minimalism. It's pretty, it offers a basic
schema, and it tries to clear things out of the way for you. If you put
in a bad pid, it secretly changes the case because of course you didn't
mean that. It comes with templates that seem to offer a basic exhibit.

But it's also extensible in back-to-the-land minimalism ways. The config
files are integrated with Jekyll to make anything possible. There are
many options most users won't use (the possibility of multiple
collections; Jekyll integrations; etc.) And the core idea\--build your
own website that can run from a flash drive without the Internet\--is
about as back-to-the-land as you can get.

I think it's clear from the metaphor which one I prefer. Apple
minimalism is a fraud and a scourge, a parasite on the real minimalists
whose money Stewart Brand took when he sold the whole earth catalog, and
whose spirit he sold out when [[Wired put Newt Gingrich on the
cover]{.ul}](https://press.uchicago.edu/Misc/Chicago/817415.html) in the
1990s. I got my copy of the Whole Earth Catalog from my friend Jay, who
had left it sitting in the first room of the house he built by hand in
rural Maine for a couple decades. It still had a few inserts about
starting a collective day care center from the Twitchell hill commune he
was part of in the 1970s. Jay has a Ph.D. in engineering, and when he
told me he was going to an Apple conference at a nearby university I was
surprised but not shocked. But then I realized it was actually an apple
conference. As in, you might be able to get seeds from some new Macoun
hybrid or learn the latest in pollination strategies. Give a man an
Apple, and he'll have to spend \$1500 for the next one in two years;
give him an apple, and he can eat it, toss the core in the ground, wait
for the trees to sprout up and have a thousand in a decade. (If this
fruit metaphor were just a bit less tortured, I'd work in the raspberry
pi at this point. Let's just say; you could probably run Wax on one.)

But everyone who writes code for computers has a little bit of the
huckster Jobs in them, and Wax still has some too. Ruby itself has a bit
of this feeling to me, although I don't know it well; and the needless
proscriptiveness around metadata, columns, and ids (no spaces, no
slashes, no capitalization, snake case is better than camel case, etc.)
make it feel Apple-y. Here's some autobiography. (No, I never owned a
1992 Honda Civic, although I did have the next best thing, a 2002 Chevy
Prizm.) I spent my childhood trapped in Steve Jobs' pre-OS X Macintoshes
believing the command line was bad before, at the age of 23, I started
programming in R on a Windows machine at work and learned what computers
can actually do. Apple minimalism means that you constantly feel the
hand of the designer, and the products succeed if you love them;
back-to-the-land minimalism means that you're often unaware the designer
even exists, and the products succeed if they keep you from freezing to
death in the Maine winters. Wax's history as a teaching tool at Columbia
means that elements of it are designed to adjust for the foibles of Ivy
league 20-year-olds. That demographic seems like one that's already
pretty well represented, though. Better to build something for my friend
Jay up in Maine instead.

**What about Omeka?**

It's not worth talking about Wax without mentioning the incredibly
successful antecedent project, Omeka. Without using the Wax's language;
Wax is software for maintaining low-key digital object collections in a
static-site environment. It does some of the same things as Omeka, but
with a different philosophy: in the 2000s, when Omeka got started,
database-based content systems were all the rage (Wordpress, Drupal,
etc.) and it made sense to use php in conjunction with databases to
build databases on the server and ship them to users. This was a good
idea, but it requires a constantly-running database rather to meet the
needs of the user. In cases where a site doesn't change (doesn't need a
login, etc.) this is both overkill and a security risk. And as
javascript became omnipresent, php became an afterthought on the web. In
the 2010s, as databases started to fall apart and hard drives got a
little cheaper, people switched to static site generators that create
all the pages in advance. These can be faster and easier to organize.

Omeka has embraced this change by moving in the direction of better
integration with the system libraries use with Omeka S. As authorities
change and libraries maintain their datasets, Omeka S will evolve. Wax
moves in the other direction, by assuming you'll create a site once and
let it be. It doesn't bind you to linked open data, but instead assumes
you'll just throw up a csv and want to ingest it. It doesn't assume
you'll get a webserver; instead, it thinks it's good enough to just toss
something onto github until you figure it out.

Is this a competition? Let's be honest: in part, it is. I have to choose
a CMS for teaching digital public history periodically, and I usually
use Omeka. And then the sites disappear after a few years, because I
move servers or lose MySQL updates and the Northeastern libraries didn't
want to commit to perpetual hosting of Omeka sites created by grad
students in a week... So yeah, it's certainly Wax's goal to pull a few
Omeka users off the low end. There's a wide array of Omeka
plugins\--most notably Neatline\--that aren't replaced in Wax, and the
possibilities for collaborative group editing with Wax, which relies on
static folders, is pretty sparse out-of-the-box. (Although I've written
a Python program, "Rubberstamp," that turns Google Docs into the editing
window of a Wax site, which I think is potentially quite useful).

But since the turn from MySQL-based content management systems in the
late 2000s, it's been clear that the Digital Humanities are not going to
be the one field _not_ to switch over to a static CMS model. Omeka S
represents the high-end institutional approach; the low end has just
been sitting there, and Wax is making a play for it.

**What is the idea of Wax?**

It's from the Minimal computing group, so clearly it's "minimalism."
Minimalism can mean "small-footprint", but that's hard with image
collections, so it means instead here "flat file."

From talking to Alex and Marii, it's also "teaching through doing." The
idea is that Wax teaches basic skills\--metadata hygiene, HTML editing,
data ontology\--while you create a website around your own collection.

**Does Wax the project match Wax the idea?**

Of course not! Nothing can/will. But it gets close.

Where are the problems?

One is docs. I learn about features in the weirdest places, partly
because there just isn't a single canonical source.

Another place that the minimalism starts to slip is the templating
system. You can interact with Wax perfectly well without writing a line
of Ruby, but you do have to get into the warren of \_layout and
\_includes files that ship with Jekyll, and edit them using YAML
metadata and Liquid markup. YAML is a widely used standard (probably in
part from Jekyll itself). But liquid, for reasons that aren't entirely
clear to me, is a specific feature of Jekyll that hasn't been adopted.

Another is the flexibility offered by the libraries underneath. Wax
currently goes all-in on Jekyll. So it supports, for example, multiple
collections. My mental model is that one CSV=one wax site would be a
more minimalist model. Why not support everything Jekyll does? Well, it
cuts off other avenues. For instance, if a metadata field overlaps with
a jekyll name, the wax name loses; but if it overlaps with a IIIF
property, the IIIF property loses. (Some discussion in a pull request
from doneill here:
[[https://github.com/minicomp/wax_tasks/pull/42]{.ul}](https://github.com/minicomp/wax_tasks/pull/42)).
This gets to what's worth teaching. I'd rather teach IIIF than Jekyll.
It's a choice, is all I'm saying.

**What are the big problems for this as a project?**

1.  Is it too late already? If LAMP-stack CMS were the movement of the

    > 2000s, static site generators\--especially Jekyll ones\--are
    > extremely Obama administration. In our brave new world, javascript
    > has eaten almost all of the old LAMP (Linux, Apache, Mysql,
    > Php/python/perl) stack. Scripting happens browser-side in JS or
    > server side in JS; databases are omitted entirely, or run as cloud services; and even Apache
    > is falling to nginx and, increasingly, what appear to be insane
    > node based solutions. It would not be 'minimal,' but someone is
    > going to cook up a far-more-awesome-looking thing in React that
    > appears to "just work," and it might corner a lot of this market.

2.  Ruby. This is me being a management consultant, but it's going to be

    > a recurring theme in this document. Ruby is a problem. Maybe not
    > an unsolvable one, and maybe it's worth keeping. But only a crazy
    > person would say that Ruby is the future of anything right now.

3.  Scope. Wax is currently torn between being a teaching tool and being
    > the basic element. It's like you're buying a car in 1992. The best
    > \*teaching\* car is going to be one of the cheap stick shifts on
    > the market. But the best \*minimalist\* car is obviously the
    > greatest car of all time, the red 1992 Honda Civic with an
    > automatic transmission. Those things ran forever, they got better
    > gas mileage than a Prius without a hybrid engine, and they
    > required no maintenance. This is my motto.\
    > ![](media/image1.png){width="2.875in" height="1.90625in"}
