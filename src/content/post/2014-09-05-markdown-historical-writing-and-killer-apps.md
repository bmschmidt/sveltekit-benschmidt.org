---
id: 335
title: Markdown, Historical Writing, and Killer Apps
date: 2014-09-05T20:34:25+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=335
url: /2014/09/05/markdown-historical-writing-and-killer-apps/
categories:
  - Publishing
---

Like many technically inclined historians (for instance, [Caleb McDaniel](http://wcm1.web.rice.edu/hacks.html), [Jason Heppler](http://jasonheppler.org/2012/11/20/using-markdown-like-an-academic/), and [Lincoln Mullen](http://chronicle.com/blogs/profhacker/markdown-the-syntax-you-probably-already-know/35295)) I find that I&#8217;ve increasingly been using the plain-text format Markdown for almost all of my writing.

The core idea of Markdown is that rather than use Microsoft Word, Scrivener, or any of the other pretty-looking tools out there, you type in &#8220;plain text&#8221; using formatting conventions that should be familiar to anyone who&#8217;s ever written or read an e-mail. (Click on Mullen&#8217;s or Heppler&#8217;s name for a better introduction than this, or see the [Chronicle&#8217;s wrapup of approaches](http://chronicle.com/blogs/profhacker/markdown/47813)).

The benefits are many, but they&#8217;re mostly subtle:

- A simple format like Markdown creates documents you&#8217;ll have not trouble reading in twenty years. I&#8217;ve been teaching a survey course this semester and had a hell of a time reading my old notes from generals which I took using EndNote; with Markdown, any web browser, text editor, or Microsoft Word descendant will have no trouble opening it.
- It&#8217;s very easy to produce content that will look good in multiple media: I can make a course syllabus or personal CV with that formats nicely on a website and produces a clean looking PDF _at the same time_.
- It becomes much easier to do things to a bunch of notes at the same time: bundle them into PDFs, search through all of your notes simulataneously, and so forth.

None of these, though, are a particularly strong sell for those who use a computer instrumentally: in reality, your Microsoft Words documents aren&#8217;t about to disappear, either. And there are disadvantages to giving up Word.

- Things like footnotes with a citation manager are not very easy, even for the technically competent.[^footnote] Even footnotes without a citation manager are fairly clumsy.
- The best tool for making your Markdown documents into attractive web pages , [Pandoc](http://johnmacfarlane.net/pandoc/), is not especially easy to install or configure if you don&#8217;t use the command line on a regular basis.
- The core definition of Markdown is a little unclear: particularly in the last week, there have been some conflicts over the definition that will be confusing to newcomers. (Although the proposal that sparked them, &#8220;Common Markdown,&#8221; is likely to be a good thing in the long run)

The heart of Markdown&#8217;s appeal is its flexibility: to drive any adoption outside the hard core of people, you need a killer app built off of it that solves a problem. In the technology sector, that has been Markdown&#8217;s ability to easily handle links and snippets of computer code for those writing on two widely used sites, [GitHub](http://github.com) and [Stack Overflow](http://stackoverflow.com)

Among historians, neither of those are very important. And the footnote problem is big enough that I generally wouldn&#8217;t recommend anyone to use Markdown, right now, unless they enjoy banging their head against the wall.

# Lectures and Notes: the killer apps. {#lectures-and-notes-the-killer-apps.}

There are two places, though, where even historians don&#8217;t tend to use footnotes: lectures, and notes. And in both of these, Markdown makes some amazing things possible.

If there&#8217;s any reason for historians to use markdown, it&#8217;s in these two spheres. The reason I keep using Markdown is that it makes it possible for me to personally solve two problems that have driven me crazy:

<ol style="list-style-type: decimal;">
  <li>
    Quickly making slides decks to go alongside a lecture, and borrowing and reusing chunks of slides from one talk in another;
  </li>
  <li>
    Making heads or tails of the thousands of pictures you take while in an archival trip.
  </li>
</ol>

## Markdown and lectures: multimedia and transposability. {#markdown-and-lectures-multimedia-and-transposability.}

First lectures. With Markdown, I&#8217;m able to write my own notes and create a slide deck _at the same time_. An example will help. Here&#8217;s a snippet from my lecture notes on the memory of the Civil War:

    # Abolitionist memory of the war.

    *Image: http://upload.wikimedia.org/wikipedia/commons/1/19/William-Tecumseh-Sherman.jpg* Caption: William Tecumseh Sherman

    There's another set of people who aren't content to see it go: those who remembered the war as the period of national renewal, rebirth, and freedom. We remember World War II today as the "Good War," because we fought the Nazis and won.

    But unlike WWII, Civil War actually changed the country for the better. It abolished slavery. It instituted amendments that guaranteed citizenship to every American. It promised equal protection under the law.

    Memory that's particularly strong among African Americans.

    They remember Sherman differently.
    Sherman not as maurauder but as unfifilled promise.
    Sheman, you might remember, when he finally made it to the sea issued his famous **Field Order 15**

With some ancillary code I wrote, that does two things at once: builds a slide showing the wikimedia copy of [Sherman&#8217;s grizzled mug](http://upload.wikimedia.org/wikipedia/commons/1/19/William-Tecumseh-Sherman.jpg), and creates a set of notes for me under the header &#8220;Abolitionist memory of the war&#8221; to go on the paper notes I&#8217;ll read from.

Later on, I&#8217;ll write another script that will find pull every phrase in boldface (like &#8220;Field Order 15&#8221;) from all my notes and put them onto a list of possible IDs for the midterm I can hand out. Another script could strip just the section headers and print out outlines for the lectures to hand out before class.

This is **writing documents for multiple uses,** and it can be incredibly useful. If, two minutes before class, I decide I want to switch the order I talk about the abolitionist memory of the war and the white supremacist memory of the war, I can just cut and paste the chunks of text, and all the slides associated with each will have their order switched.

Something like this could provide a really useful way to integrate and share resources, and free up some of the tedium with prepping lectures. But:

- That syntax for including an image as a slide is my own, not standard Markdown. I&#8217;ve defined scripts for dropping in YouTube videos, images, captions, and some other predefined formats: but it would take a lot of work to define a set of them that make sense for anyone but me.
- There are a lot of standards out there for working with HTML slides. None is winning, in part because none is anywhere as good as Keynote or Powerpoint for the average user. My code works with deck.js, one of the only HTML formats _not_ supported by Pandoc; but there&#8217;s no obvious other standard to switch to.
- Constructing slides that are more complicated than a single image with a title, or a numbered list, requires some serious HTML/CSS expertise. My scripts support that, but not in a pretty way.

Modern HTML allows some beautiful things: I can easily imagine a GUI for one of the standards that would make it easy to create slides for re-use in one of the competing platforms. But I think the standards are still evolving too rapidly in this sphere to make the way forward obvious.

Pull out the slide deck, and you still might have a useful tool here: something that generates a lecture notes for me, outlines for the students/course web page, and IDs for the test prep sessions. But I think there&#8217;s something even more valuable possible for archive notes.

## Markdown and the Archives: integrating notes and photos {#markdown-and-the-archives-integrating-notes-and-photos}

Markdown is a great language for taking archival notes. Archives are all about hierarchy: and Markdown easily lets you tag mutliple levels of headers (Series, Box, Collection, file&#8230;). But so is Microsoft Word: and there are plenty of outlining programs out there that are even better.

There are a few things that Markdown notes might do more easily than normal ones. Build a good enough web interface, and you could even click on a photo or quote in your notes and instantly get back a string that ascends the various headers to tell you where it is: `Series 3a, Box 13, Folder 4, Letter on 4/18`. But the place where there&#8217;s really an opportunity lies in Digital Photos.

Digital cameras have completely changed historians&#8217; relations to archives in the last 15 years. (That is, in the subset of archives where cameras are allowed). We used to take notes: now, a massive part of our archival practice involves taking pictures, which have to be sorted through on our return.

When I&#8217;m wading through boxes, I tend to type the name of the box, and then some information about each folder followed by descriptions of the documents: if it&#8217;s especially useful or especially visual, I take a picture (or a series of several pictures). I think this is pretty similar to what most people do. It means that I end up with two separate timelines to sort through when I get home. 1) A bunch of textual notes that contain my impressions of the works and the rationales for why I copied them and what they are. 2) A stream of pictures with little context but their order to patch together their origin, sometimes with a close-up of a box or folder label thrown in to help.

The tough question is: how can you insert pictures into your notes? Unless you want to physically pick up your laptop and use the webcam for your pictures, it&#8217;s not obvious what the best way would be. And if you try to put more than a couple pictures into a Word document, it will crash right away.

Unlike the systems most historians use for notes, Markdown is **plain text** and has an **easy method for inserting multimedia**. That means that you can use it to integrate your archival photos directly into your notes; and that unlike Word, it can handle hundreds of images or thumbnails with aplomb.

The last challenge is knowing which parts of your notes go with which pictures. This is a surprisingly hard thing to solve: but there&#8217;s an existing answer in a second technology much beloved by the technology industry: **version control**.

Version control can get complicated, but in its simplest form it&#8217;s much like a wikipedia edit history: not just the current state of a file, but _every previous revision_ is stored in memory.

So for archival notes, we just need to save the state of your archival notes every 10 or 15 seconds; match those markers against the timestamps of the photos from a digital camera; and insert the pictures into the text just in place.

When you want to review your notes, you just open them up in HTML format: thumbnails of every picture will appear in place, and you can click on them to get the full version.

For the technically savvy, I&#8217;ve put a [set of scripts online that do just this.](https://github.com/bmschmidt/archiveSync) I use gitit to view the notes themselves so I can interlink between pages. A daemon handles the git commits: but that only works because I have always been a compulsive, several-times-a-minute saver of my documents.

# What would a user-friendly platform look like? {#what-would-a-user-friendly-platform-look-like}

My repo might be useful for those who are already comfortable with tools like version control: but those are the people who are already using Markdown anyway.

To make this useful for anyone else, we&#8217;d need a system with three easy, non-command line steps:

### 1. Installation {#installation}

Puts Pandoc, Git, and a good Markdown editor on your computer at once.

### 2. Writing (in the archives) {#writing-in-the-archives}

This should resemble existing note taking as closely as possible: the user will need to make sure their camera&#8217;s clock is well-calibrated, but other than that it should look only like using a new text editor.

Whenever you type in the editor, it saves the files **and** runs git commit at close intervals. (Git experts may find the idea of automatic commits without a clear commit message cringe-inducing. Insofar as they have a point, edits should probably take place on a separate branch that is forked back into the main one periodically.)

### 3. Compilation (loading your pictures) {#compilation-loading-your-pictures}

Imports photos from an sdcard or photo library, finds the version control files and matches photo times against them, and builds an html file for each document of notes.

## What&#8217;s the platform? {#whats-the-platform}

Some of the technical components are obvious. I can&#8217;t imagine using anything other than git for version control; and though I use gitit to view files, I think that standalone html files are the only sensible way for most people to view their files. The scripting language for step three, as well, isn&#8217;t very important: I&#8217;ve used python, but anything with a set of hooks into git.

The big question is: what&#8217;s the text editor to be? I use emacs, and get the impression that most people writing in Markdown are using vim. Both of these are clearly bad choices for the ordinary historian. For all that Markdown can be written in any editor, the writing function also must support auto-save and auto-git-commit, so anything without a scripting interface is out. SublimeText has its selling points, but free&#8217;s probably the way to go.

That means, unless I&#8217;m missing a central player in the ecosystem, that the natural choice is the new Atom editor from Github. But perhaps there&#8217;s a more lightweight alternative?

Platform will also be an issue. The Mac is the obvious platform to capture a majority of historians: but a surprising number of people seem to take their notes with an iPad-keyboard array, which would call the whole stack into question.

# Infrastructure {#infrastructure}

So that&#8217;s the proposal. Once historians see how great Markdown is for notes, maybe they&#8217;ll think about it for lectures; once they use it for lectures, maybe the footnote ecosystem will start to improve, and we&#8217;ll finally be able to distribute historical papers as text, making them more portable, more easily structured, and more lasting.

So, anyone want to try?

[^footnote]: It took me a few hours of mucking about in Emacs Lisp to make inserting a link to something in my Zotero library <em>almost</em> as easy as it is under Microsoft Word; and if you want to configure the core behavior of Pandoc, it&#8217;s best to use Haskell. Even the &#8220;programming historian&#8221; may not have heard of either of these languages. Both (well, at least Haskell) have their strengths: but suffice it to say that neither has ever been anyone&#8217;s answer to the question &#8220;If I should only learn one computer language, which should it be?&#8221;
