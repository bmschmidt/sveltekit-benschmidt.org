---
title: 'Google Books and the open web.'
date: 2018-07-10T16:26:00.001-04:00
draft: false
url: /2018/07/google-books-and-open-web.html
---

Historians generally acknowledge that both undergraduate and graduate methods training need to teach students how to navigate and understand online searches. See, for example, this recent article in [Perspectives](https://www.historians.org/publications-and-directories/perspectives-on-history/march-2018/search-history-making-research-transparent-in-the-digital-age).  Google Books is the most important online resource for full-text search; we should have some idea what's in it.

A few years ago, I felt I had some general sense of what was in the Books search engine and how it works. That sense is diminishing as things change more and more. I used to think I had a sense of how search engines work: you put in some words or phrases, and a computer traverses a sorted index to find instances of the word or phrase you entered; it then returns the documents with the highest share of those words, possibly weighted by something like TF-IDF.

Nowadays it's far more complicated than that. This post is just some notes on my trying to figure out one strange Google result, and what it says about how things get returned.

What's happening nowadays has little to do with that mental model. Idly wondering whether a strange phrase in the Wikipedia article on the 19th century Supreme Court justice Benjamin Curtis was plagiarized, I put it into Google books search. Consider the results here.

[![](https://3.bp.blogspot.com/-dF9ygizeqOA/W0UJTstU1iI/AAAAAAAANS0/XQg7BifC2KoHARKFUeWwIGq28boJ2wQWwCLcBGAs/s640/Search.png)](https://3.bp.blogspot.com/-dF9ygizeqOA/W0UJTstU1iI/AAAAAAAANS0/XQg7BifC2KoHARKFUeWwIGq28boJ2wQWwCLcBGAs/s1600/Search.png)

First, we get [a photograph from the Watertown Public Library in Massachusetts](https://www.digitalcommonwealth.org/search/commonwealth:rv043131r), Google Books is full of library catalog items which are not in fact books; in this case, though, it seems to be simply the top search result because the precise phrase I searched for is not present in any books. (The normal Google Books search format stuff is missing).

The next results though, are more interesting in what they say about the internal workings of the Google Books engine. They do not contain the phrase in question, but they _are_ all about Benjamin Curtis. There are only a dozen or so, not a full set of Curtis-related documents; in fact, it seems that Google Books is presenting me with the "Further Reading" section (not the bibliography) of the Wikipedia page from which the quote came. This seems to be general.  Search for any arbitrary phrase in Wikipedia, and you'll get a list back including some of the cited and required texts.

Why is it doing that? What mechanics of a search engine would cause this to happen? Is Books translating otherwise unmatched queries into Wikipedia pages, and returning their contents? Not in general: most unmatched phrases turn up nothing.

I can start to understand this individual rule by typing in random strings. I came up with the phrase "such a place would never be", which appears in no books but does have 6 search results on the web.

That phrase returns a series of books, starting with a book titled "John Brown to James Brown" which one Amazon reviewer described as "where such a place would never be imagined to have existed." The relationship of the rest of the books, which touch mostly on early history of the Mormons and moneymaking schemes, is less clear: I'd bet they all appeared on the Amazon page as "frequently bought," but I can't be sure. (I don't get "frequently bought" when I visit book, and the Google cache doesn't have it either.

[![](https://1.bp.blogspot.com/-ibpsa1M2P-o/W0URtgu2FbI/AAAAAAAANTA/fHzcIq8RuXM_twW9AbYo5JxyyZBwvpvEACLcBGAs/s640/such%2Ba%2Bplace%2Bwould%2Bnever.png)](https://1.bp.blogspot.com/-ibpsa1M2P-o/W0URtgu2FbI/AAAAAAAANTA/fHzcIq8RuXM_twW9AbYo5JxyyZBwvpvEACLcBGAs/s1600/such%2Ba%2Bplace%2Bwould%2Bnever.png)

So--there's some form of linked data about books driving Google Books search, driven by the open web  possibly as a fallback, or possibly as part of the core search. It seems to work best from structured data like Amazon or Wikipedia, but also engage in some pretty wild guesses based on semantic parsing.

Basically, the web index is hooked into Books search in ways that aren't obvious or transparent. And it leads to an extremely strange world of stacking algorithms on algorithms; that an Amazon review would lead to a phrase giving some random books assembled by Amazon at some point in the past is completely inscrutable.

EDIT, one day later:

## It occurs to me that part of what's going here may be that the same algorithm is used for books as in Google's *image* search. If you do an image search for these phrases, it pops up images from the Wikipedia article and the Amazon page (and, now, this very blog post). Google appears to treat books both as collections of text to be searched, \*and\* as entities that exist on the web described through the text of web pages.

### Comments:

#### These are bizarre results. Fundamentally, we need ...

[Unknown](https://www.blogger.com/profile/15208231335786258961 'noreply@blogger.com') - <time datetime="2018-07-12T09:08:09.980-04:00">Jul 4, 2018</time>

These are bizarre results. Fundamentally, we need to think more about how we think about searches. We aren't questioning a wise oracle, we're casting a line in a polluted pond; sometimes there's a fish, sometimes there's a boot.

<hr />
#### Well said. I second this. Although it's unders...
[RandomGuyDTB](https://www.blogger.com/profile/06958976420209326550) - <time datetime="2018-07-12T14:10:23.534-04:00">Jul 4, 2018</time>

Well said. I second this. Although it's understandable that Google doesn't release their algorithm, without it a scholar can't be sure /why/ they've received certain results.

<hr />
#### Searching the same phrase in duck duck go shows ht...
[gryftir](https://www.blogger.com/profile/06259419086877092820) - <time datetime="2018-07-12T19:33:37.384-04:00">Jul 4, 2018</time>

Searching the same phrase in duck duck go shows http://www.phoenixmasonry.org/freemasonry\_and\_mormonism.htm which may explain the mormonism stuff, since it has a bibliography at the bottom.

<hr />
