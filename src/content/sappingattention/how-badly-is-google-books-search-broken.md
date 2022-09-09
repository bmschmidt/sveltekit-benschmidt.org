---
title: 'How badly is Google Books search broken, and why?'
date: 2019-02-10T17:40:00.001-05:00
draft: false
url: /2019/02/how-badly-is-google-books-search-broken.html
---

I periodically write about Google Books here, so I thought I'd point out something that I've noticed recently that should be concerning to anyone accustomed to treating it as the largest collection of books: it appears that when you use a year constraint on book search, the search index has dramatically constricted to the point of being, essentially, broken.

Here's an example. While writing something, I became interested in the etymology of the phrase 'set in stone.' Online essays seem to generally give the phrase an absurd antiquity--they talk about Hammurabi and Moses, as if it had been translated from language to language for decades. I thought that it must be more recent--possibly dating from printers working with lithography in the 19th century.

So I put it into Google Ngrams. As it often is, the results were quite surprising; about 8,700 total uses in about 8,000 different books before 2002, the majority of which are after 1985. Hammurabi is out, but lithography doesn't look like a likely origin for widespread popularity either.

[![](https://1.bp.blogspot.com/-Y9frEigf96E/XF-B8IGKpjI/AAAAAAAAOTU/nUnc39bp4WAWpvD5lqNgJw0U8r6p7RABACLcBGAs/s320/Set%2Bin%2Bstone.png)](https://1.bp.blogspot.com/-Y9frEigf96E/XF-B8IGKpjI/AAAAAAAAOTU/nUnc39bp4WAWpvD5lqNgJw0U8r6p7RABACLcBGAs/s1600/Set%2Bin%2Bstone.png)

That's much more modern that I would have thought--this was not a pat phrase until the 1990s. That's interesting, so I turned to Google Books to find the results. Of those 8,000 books published before 2002, how many show up in the Google Books search result with a date filter before 2002?

Just five. Two books that have "set in stone" in their titles (and thus wouldn't need a working full-text index), one book from 2001, and two volumes of the Congressional record. 99.95% of the books that should be returned in this search--many of which, in my experience, _were_ generally returned four years ago or so--have vanished.

[![](https://1.bp.blogspot.com/-aIkICWrJarE/XF-DCSpEWMI/AAAAAAAAOTg/qbvzRIxCEF4m7fl1D52wWGXmvJaLPIiAQCLcBGAs/s400/Set_in_stone_books.png)](https://1.bp.blogspot.com/-aIkICWrJarE/XF-DCSpEWMI/AAAAAAAAOTg/qbvzRIxCEF4m7fl1D52wWGXmvJaLPIiAQCLcBGAs/s1600/Set_in_stone_books.png)

Many of these books \*do\* still exist in the HathiTrust index.

Changing the date does not produce the results you'd expect, either. "Set in stone" with a date filter set before 1990 returns \*nothing\*, with a single non-book result returned from a 1982 Washington Post article that has wandered into the Google index. This is especially interesting, because it means that the displayed representation of the two congressional serial's volumes dates as being 1900 is \*not\* being used for the purpose of retrieval. This is probably wise: books listed as being published in 1900 in the library catalogs feeding into Google can be from any time. Choosing a date before 2020 (which should return all books) adds only a few books to the 2002 listing.

When you search for the term with no date restrictions, Google claims to be returning 100,000-ish results. I have no way of assessing if this is true; but scrolling through results, they do include a few pre-1990 books that didn't show up in the earlier searches.

What's going on? I don't know. I guess I blame the lawyers: I suspect that the reasons have to do with the way the Google books project has become a sort of Herculaneum-on-the-Web, frozen in time at the moment that anti-Books lawsuits erupted in earnest 11 years ago. The site is still littered with pre-2012 branding and icons, and the still-live "[project history](https://books.google.com/googlebooks/about/history.html)" page ends with the words "stay tuned..." after describing their annual activity for 2007.[![](https://1.bp.blogspot.com/-9KzsI7HO0QI/XGCkOyfCtjI/AAAAAAAAOUI/h-7FABICXCM_o67dn8fWwoMMbAutYX_sQCLcBGAs/s200/Google%2BBooks%2BBranding.png)](https://1.bp.blogspot.com/-9KzsI7HO0QI/XGCkOyfCtjI/AAAAAAAAOUI/h-7FABICXCM_o67dn8fWwoMMbAutYX_sQCLcBGAs/s1600/Google%2BBooks%2BBranding.png)

So possibly Google has one year it displays for books online as a best guess, and another it uses internally to represent the year they have legal certainty a book is released. So maybe those volumes of the congressional record have had their access rolled back as Google realized that 1900 might actually mean 1997; and maybe Google doesn't feel confident in library metadata for most of its other books, and doesn't want searchers using date filters to find improperly released books.

Oddly, this pattern seems to work differently on other searches. Trying to find another rare-ish term in Google Ngrams, I settled on "rarely used word"; the Ngrams database lists 192 uses before 2002. Of those, 22 show up in the Google index. A 90% disappearance rate is bad, but still a far cry from 99.95%.

So we can't even know how bad the uncertainty is. One intriguing possibility is that the searches I'm using are themselves caught up in the algorithms used to classify books. If I worked at Google, I would have implemented a text-based date-prediction algorithm to flag erroneously classified books. (I have actually done this and sent a list to the HathiTurst of books they may have erroneously released into the public domain. It works). If they use trigrams, it's possible that a term like "set in stone," because of its recency, might \*itself\* be pushing a bunch of 20th century books into the realm of uncertainty.

## Partly this is the story that we all know: Google Books has failed to live up to its promise as the company has moved away from its original mission of organizing information for people. But the particular ways that it has actually eroded, including this one, are worth documenting, because it's easy to think that search tools that worked perfectly well a few years ago won't have been consciously degraded.

### Comments:

####

[Anonymous](#) - <time datetime="2019-02-11T13:09:50.617-05:00">Feb 1, 2019</time>

This comment has been removed by a blog administrator.

<hr />
#### This is all true and worth saying. Google Books i...
[Unknown](https://www.blogger.com/profile/00342517673996060931) - <time datetime="2019-02-12T12:20:52.180-05:00">Feb 2, 2019</time>

This is all true and worth saying. Google Books is not a reliable research resource. I've also noticed that its results can sometimes change from one day to another.

There's also the question of how to study a fixed idiom like "set in stone." Presumably there is a first time that string appears in the written record. But there's also the question of when it appears \*as an idiom\*, rather than as a description of something actually being inscribed in stone, and with which idiomatic meaning.

That raises a second point: idioms can often undergo a period of variability before arriving at their "set" form. Using CQP web you can search EEBO for \[VERB\] in stone, which returns a range of verbs: written, engraved, graved, wrought, embossed, figured, dug, cut, enchassed, and more (with various inflections) - many of them used with idiomatic and non-compositional use. I think "carved in stone" and "written in stone" are still current idioms, but probably without the frequency of "set in stone" (I'm just guessing). Then it's a question when "set" became the standard verb: not before 1700, so far as I can tell with a quick search.

One precursor in particular stands out for many of these variations and thus probably for our "set in stone": St. Paul, as in 2 Corinthians 3:7 in the KJV:

"But if the ministration of death, written and engraven in stones, was glorious, so that the children of Israel could not stedfastly behold the face of Moses for the glory of his countenance; which glory was to be done away."

Paul often uses the metaphor whereby the old law is dead stone (it was written in the stone tablets of the ten commandments), whereas the new dispensation of life and spirit is written in the flesh or heart.

We use "set in stone" as an invariant idiom to mean merely fixed or invariant. I wonder if, following Paul, it had an earlier (pejorative) idiomatic meaning: lacking in vitality or spirit, dead rather than living.

<hr />
#### These are good points, and I hadn't recalled t...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2019-02-13T09:56:33.510-05:00">Feb 3, 2019</time>

These are good points, and I hadn't recalled the New Testament verse.

But I want to distinguish between the origin and the process. I often three stages in these sorts of transformations:

1\. First literal use of a phrase--who cares?  
2\. First metaphorical use of a phrase. Metaphors are very often independently invented, especially when there's a shared cultural context like Paul's epistle.  
3\. Widespread idiomatic use, in which the original metaphor becomes all but dead. This I think we understand the least, because it's fundamentally a quantitative question, not an interpretive one.

One of the things that's interesting about set in stone is that although various other forms circulate for decades, almost all (cast in stone,fixed in stone,etched in stone,written in stone,set in stone,writ in stone) become 10-20 more popular around the mid-1980s. "carved in stone" was the only version in widespread use before then; it remains the most popular in ngrams, and its usage is up ~70% as well.

So although I think I'm more persuaded that there's some biblical bedrock on which this metaphor rests, the question of its spread through various uses--and especially the use "set"--in the 1980s is much more unclear to me, and interesting. I saw some allusions online to "set" being an improper metaphor for stone, in any case; 'carved,' 'written,' or 'etched' much better captures what Moses did. "Set," on the other hand, may pull a little bit from a set of metaphors around clay or--more likely, given the 1980s--concrete. And so the rise after 1980s could indicate a slight disentangling of the metaphor from writing.

<hr />
#### I have written a lot on Google Books in German (I ...
[kg](https://www.blogger.com/profile/10175613438967407983) - <time datetime="2019-02-17T09:07:12.417-05:00">Feb 0, 2019</time>

I have written a lot on Google Books in German (I recommend Deeply as automatic translation tool), see e.g.

https://archivalia.hypotheses.org/91823  
https://de.wikiversity.org/wiki/Benutzer:Histo/GBS\_Digital\_Humanities

<hr />
