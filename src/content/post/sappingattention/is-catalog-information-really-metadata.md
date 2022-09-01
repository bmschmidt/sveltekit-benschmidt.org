---
title: 'Is catalog information really metadata?'
date: 2011-09-05T13:46:00.000-04:00
draft: false
url: /2011/09/is-catalog-information-really-metadata.html
---

We've been working on making a different type of browser using the Open Library books I've been working with to date, and it's raised a interesting question I want to think through here.

I think many people looking at word countson a large scale right now (myself included) have tended to make a distinction between wordcount data on the one hand, and catalog metadata on the other. (I know I have the phrase "catalog metadata" burned into my reflex vocabulary at this point--I've had to edit it out of this very post several times.) The idea is that we're looking at the history of words or phrases, and the information from library catalogs can help to split or supplement that. So for example, my big concern about the ngrams viewer when it came out was that it included only one form of metadata (publication year) to supplement the word-count data, when it should really have titles, subjects, and so on. But that still assumes that word data--catalog metadata is a useful binary.

I'm starting to think that it could instead be a fairly pernicious misunderstanding.

The argument for this is that words aren't the base unit of measure at all. What we really care about are texts (which [aren't necessarily books](http://sappingattention.blogspot.com/2011/01/basic-search.html), but it doesn't really hurt to think of them that way). Thanks to librarians, we have a number of pieces of information about each book--[where it was written](http://sappingattention.blogspot.com/2011/01/where-were-19c-us-books-published.html), [how old its author was](http://sappingattention.blogspot.com/2011/03/author-ages.html), etc. And thanks to computers, we can store thousands of new pieces of information about books that relate to their vocabulary: how many times it uses the word 'science', how many times it uses any form of the word 'evolution', how many words it has overall.

All these pieces of information are variables in the same data set. You can call them metadata or data, depending on what you think a book is--but it's misleading to call one of them data and the other metadata. Pretending that word counts are 'data' and the rest are 'metadata' could promote at least four significant mistakes:

1\. **We end up at once getting too hung up on word percentages as, in themselves, meaningful**. But a word percentage has a very obscure meaning outside of the book it's in. Treating each year as a long text that has its own percentages for each word is problematic--it might make more sense, for example, to take the average for all books in that year, or some characterization of a beta distribution for the spread, or something else. (I have a post on this from last month in the hopper). All the people on Twitter who searched for "love" vs. "war" as if it meant something profound about human nature are only the most obvious example of this problem. The jump from this figure to 'fame,' for example, is very problematic, because it doesn't take any of the other metadata into account besides year. To build up a plausible proxy for fame, you'd need both some measure of which books are more popular, which we don't have (although see my third point, below); or at least some sense of how to weight different subject categories against each other, since [some subjects breed books like rabbits and others don't](http://ngrams.googlelabs.com/graph?content=Derrida%2CThe+Beatles%2CBeatles%2CJacques+Derrida&year_start=1800&year_end=2008&corpus=0&smoothing=3).

When we talk about the history of words in history, we're usually using them as imperfect proxies for the history of concepts. And when we talk about the history of concepts, we're really talking about the history of groups of people--what they believed, how that changed, who influenced whom. Word percentages tell us meaningful things about these questions, for the most part, only as far as we can define the groups of people we're interested in--and that's what catalog information is good for. Eliding the actual books from analysis is a bad thing.

2\. **We keep ourselves from seeing all the ways variables can interact with each other**. In some cases, words counts are just another form subject categorization to go alongside LC subject headings and BISAC codes. Just as I want to look at how often 'Lincoln' is used in books that are published in 1875, I might want to look at how often "Grant" is used in books that mention "Lincoln" a lot. Thinking of word-counts as a different kind of data can blind us to how well it supplements our existing catalog data.

In the opposite direction, downplaying metadata can also keep us from seeing ways catalog data and word count data can interplay with each other--it took me too long, for example, to figure out [how to make author age, publication year, and count data interact with each other](http://sappingattention.blogspot.com/2011/04/age-cohort-and-vocabulary-use.html); mostly that has to do with dimensionality, but I think it was also because because I was stuck seeing the metadata filtering stage as something that needed to be completed before looking at the word count information, rather than seeing the word counts as being just another element in the metadata filtering.

3\. **We downplay the importance of creating catalog information.** This is a more minor point, but still gets at something. Wordcount data's usefulness is limited by how much other data is included in the same series. If we treated it as just another form of catalog information when releasing it, it would always be released tied to some kind of unique book identifier. The more additional data we have about books--what language they're in, what percentage of their words are in a foreign language, etc., the more useful they are. But if we treat word counts as important public resources but other catalog fields as something we wait for library institutions to create, we'll have less stuff to work with. Since most people still are on the fence about whether even wordcount information is a useful public resource, though, we're a ways from having to worry about this problem. Still, I think we should all be more excited about the possibilities of creating and sharing other forms of derived catalog data from texts.

## 4\. **We understate the absurdity of the deference which custodians of our digital books give to copyright holders _vis-a-vis_ word counts.** (Forgive me this--I haven't had a good copyright rant in a few months.) If you think of word counts as another form of catalog information, the idea that they should be protected from the public domain while other sorts of information (the title, for example) _can_ get out is absurd. If you take a few simple precautions such as not allowing ngrams to traverse sentence breaks (which keeps whole books from being reconstituted), there isn't a good argument against even letting 5-grams out into the open for each book. They're just more information that can be used to find a book you want.

### Comments:

#### You're certainly right that I habitually make ...

[Anonymous]("noreply@blogger.com") - <time datetime="2011-09-05T15:26:35.110-04:00">Sep 1, 2011</time>

You're certainly right that I habitually make a distinction between wordcount data and catalog metadata. It's burned into my code and data structures.

I like the reminder that we need to be alert to patterns that are located \*between\* these levels.

I also agree that, in principle, all of this is "metadata." It would be absurd for copyright holders to claim ownership of wordcounts. And it's almost equally absurd for us to imagine that wordcounts are in themselves, e.g., a barometer of "fame."

Of course the data/metadata boundary is a flexible, contextual convenience ... For certain kinds of historical questions -- e.g. social or economic questions -- the texts themselves might almost count as "metadata." E.g., books written about Irish violence are not necessarily direct evidence that violence was increasing in Ireland!

<hr />
#### Digression, nominally @Ted: It's very odd how ...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-09-06T15:03:30.871-04:00">Sep 2, 2011</time>

Digression, nominally @Ted: It's very odd how much this has to do with code. To make an interface work more cleanly, I ended up coding a Python layer to wrap my MySQL database, and that seemed to work more cleanly the less I treated word as different than catalog data. Plus, it starts to make more interesting queries easier. I really think I'm going to try to do it more often, even though it involves the weird step of writing what amounts to an API to use a database I already have access to.

I agree that calling it metadata vs. data is purely conventional; more important, I think, is not separating them so much that they can't both fill either role. (Although I think in the last example I still wouldn't call the books metadata to distinguish two distinct data series: actual violence in Ireland, and then some model of violence in Ireland one could construct with wordcounts, publication information, metadata by looking up author last names against census records that tell which names tend Protestant and which Catholic, etc. Those two distinct series might or might not be highly correlated--probably not very correlated, alas.)

<hr />
