---
title: 'Bookworm and library search'
date: 2011-09-30T10:58:00.000-04:00
draft: false
url: /2011/09/bookworm-and-library-search.html
tags:
  - Bookworm
---

We just launched a new website, [Bookworm](http://bookworm.culturomics.org/), from the Cultural Observatory. I might have a lot to say about it from different perspectives; but since it was submitted to the DPLA beta sprint, let's start with the way it helps you find library books.

Google Ngrams, which Bookworm in many ways resembles, was fundamentally about words and their histories; Bookworm tries to place texts much closer to the center instead. At their hearts, Ngrams uses a large collection of texts to reveal trends in the history of words; Bookworm lets you use words to discover the history of different groups of books--and by extension, their authors and readers.

This means that rather than presenting one particular set of texts as the best way to understand words, it starts with a library that you yourself narrow down. [As Mark Liberman rightly notes](http://languagelog.ldc.upenn.edu/nll/?p=3449), that the flaws in the catalog are foregrounded is a feature, not a problem. (It would be relatively easy to throw out most duplicate works and misdated serials, but for now I like that Bookworm accurately reflects the full catalog driving it, warts and all.)

As a tool for finding and thinking about books from words, Bookworm in fact straddles the space between something like Ngrams and the more traditional library catalog. So one useful way of describing what it does, I think, is to think about it in that context.

There are a lot of ways to find a book in the library about a topic you find interesting without ever cracking a spine. Let me walk through a few to explain where digital browsing takes us:

**1) Use the subject headings in a library card catalog.**

Subject headings are the best resource for a particular topic, but a lot of the time they won't work; your subject may not exist in the catalog, you may not know what it's called, and librarians may not have assigned some relevant books to the subject heading you're using.

**2) Find one book in the stacks that you find interesting, and see what's next to it on the shelves.**

This, for better or worse, has always been the mainstay of my library use. For unscanned/in copyright books, I've spent a fair amount of time flipping through the index of every book on a shelf. And shelves work well; the criteria for classification are relevant enough that most readers will find a few promising leads in the stacks (particularly for non-fiction). Unlike subject catalogs, this is a relational way of finding books--rather than starting from a fixed idea of your subject, you let curation decisions guide your search outward. Next to the book you want may be another book by the same author on the same subject; on adjacent shelves are similar topics; etc.

This is great for finding books to compare to the one that led to the stacks; but it's littered with problems. LC classifications are a peculiar hierarchy of knowledge, and call numbers are one-dimensional, unlike subject headings (where a book can simultaneously be about 19th-century Russia _and_ be fiction). And individual libraries have funny exceptions; older books at Princeton are shelved according to a different cataloging system, for example, and many are shipped to two different forms of offsite storage. These problems can lead to unexpected discoveries; but they can keep two closely related books separated forever.

So this is the pre-digitized library; even electronic card catalogs don't change this balance in any important important way. But the advent of full-text search for books creates a major new entrant, that we're just starting to use:

**3) Search the full text of thousands of books for a word or phrase of interest.**

For scholarly journals and newspapers, two fields where full-text search is older than for books, this is probably the most important way of finding texts. For most purposes, full-text search obliterates method (1) above; where before you had to find a subject vaguely connected to your interests, now you can identify your topic as precisely as you can describe it in language.

I'd argue, though, that full text searching may be less revolutionary than it seems. If, as I argued earlier, [we think of full-text indexes as more catalog information, not as the book itself,](http://sappingattention.blogspot.com/2011/09/is-catalog-information-really-metadata.html) text searches seem rather less novel; in some ways, they just allow you to create a new subject heading at a moment's notice, oriented around whatever phrase you enter in. Since much historical work is based around researching subjects who only glancingly appear in the historical record, this can be incredibly useful. But the traditional list of results in response to a search query is in many ways no different than flipping through a section of a card catalog. (With the non-trivial exception that your search results are ranked according to relevance).

This means that full-text search does far less to replace method (2) above than it does to replace method (1). It's good at finding particular things; it's far less good at revealing relational swathes. For the most part, I find talk of scholarly 'serendipity' a bit puddleheaded, but I think that the condescension at keyword searches might capture something quite real on this point. How can computers help improve on the experience of stack-browsing in the same way that they improve on the experience of subject-browsing?

**4) Organize the library according to your personal principles, and browse it from arbitrary points.**

This is where we need to go. Bookworm presents one set of ways for reordering the library based on the principle that language is constrained by the fields of its utterance--geographical (publication place), disciplinary (LC classification), temporal (publication year), even autobiographical (author age). The line chart that a search creates is a representation of overall trends; but it is also, taken point by point, an enormous collection of books. If you search for a term by author age and publication place, Bookworm is reordering the collection of the Open Library (a lot of it, anyway) into chunks divided by author age and place, showing you information about each one of those chunks, and inviting you to dive into a particular one to find the books matching your term.

There still is a bit of the search engine in ordering the results after you choose your basket; but choosing \_where to start browsing\_ is driven by different principles entirely. You might want to find peaks for word usage; you might want to see early usage of a phrase without knowing what 'early' means; or you might just want to chop up the library in a way that leads you to books you wouldn't otherwise find. (I was pleased to see Liberman, shortly after his post, using Bookworm to [stumble onto strange documents from the past](http://languagelog.ldc.upenn.edu/nll/?p=3450) and comment on them; personally, I've found lots of fascinating short documents turned up by random searches for place names.)

This presumes, of course, that you care about the metadata categories that we're serving. And maybe you aren't. But that highlights one of the biggest challenges facing digital libraries; how better to collect and integrate different forms of metadata that will assist users in browsing their collections in ways that make sense for them while keeping an orientation that lets patrons have a sense of _exploring the collection_ to answer questions that it creates, rather than of being told which books best fulfill their awkwardly-phrased request.

Though Bookworm is one way of making a library explorable on new dimensions, there should be lots of them. Some would start with maps or bubble charts instead of line charts; all of them will use different metadata in different ways. (Though all of them should be using wordcount metadata to supplement catalog metadata, which we haven't yet figured out to integrate into bookworm in a non-confusing way).

These will be as different from traditional search engines as browsing the stacks is from using a card catalog. After a lot of discussion we decided to keep the text search box front and center on Bookworm because that's how people know how to search; but going forward, it doesn't need to be there at all. You should be able to search by networks of words, or by constellations that build out from particular books, by books that show the \_fewest\_ matches for your terms, etc. (One thing I've learned is that coding these is _far_ easier than making them available from a UI perspective).

## In all these cases, [the ways that a library gets reorganized can tell us things about the past we might not otherwise see](http://sappingattention.blogspot.com/2011/02/fresh-set-of-eyes.html). The one thing they have in common, though, is that they will have to move away from the single search box and the ordered list towards a multifaceted way of playing all the information we have about books against each other.

### Comments:

#### Bookworm looks pretty neat; I'm looking forwar...

[andrew](http://thewayside.wordpress.com 'noreply@blogger.com') - <time datetime="2011-10-04T04:10:13.827-04:00">Oct 2, 2011</time>

Bookworm looks pretty neat; I'm looking forward to seeing what I can find with it.

This is a bit tangential to your post, but picking up on your comments about subject headings, I wrote what turned out to be a rather long comment about how they could be put to more use, and then Blogger rejected it (I think there may be a word limit for comments). So I ended up turning it into a post [here](http://thewayside.wordpress.com/2011/10/04/access-to-subjects/).

<hr />
