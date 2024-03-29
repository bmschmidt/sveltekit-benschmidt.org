---
title: 'State of the Union--and corpus comparison.'
date: 2015-01-19T14:47:00.001-05:00
draft: false
url: /2015/01/state-of-union-and-corpus-comparison.html
---

Mitch Fraas and I have put together a two-part interactive for the Atlantic using Bookworm as a backend to look at the changing language in the State of Union. Yoni Appelbaum, who just took over this week, spearheaded a great team over there including Chris Barna, Libby Bawcombe, Noah Gordon, Betsy Ebersole, and Jennie Rothenberg Gritz who took some of the Bookworm prototypes and built them into a navigable, attractive overall package. Thanks to everyone.

The first part is an [interactive map with every place name](http://www.theatlantic.com/features/archive/2015/01/mapping-the-state-of-the-union/384576/) we could find using the Stanford Natural Language Toolkit and some (Fraas-flavored) elbow grease. Then we got two great historians of American foreign policy, Dael Norwood and Gretchen Heefner, to explain some of the things in the maps.

The second is [about individual words presidents use](http://www.theatlantic.com/features/archive/2015/01/the-language-of-the-state-of-the-union/384575/). So the recent rise in "Freedom," the references to the Constitution predominantly in the time of crisis, and so forth.

My favorite feature, and one that the Atlantic team executed beautifully, is the deep access into individual texts: click on a circle or a bar, and you are off reading the actual paragraph from the state of the union that uses that word on mentions that place. This has always been a core feature of Bookworm on various levels--by treating paragraphs as documents for the modelling, it's easy to drill straight to the interesting stuff. One thing that's mostly missing are the Ngrams-style line charts. I've been saying for a while that I hope people see Bookworm enabling other forms of visualization. These pages are a great example of that; maps and bar charts of words are just as engaging, and sometimes things like "presidents" and "the world" are more engaging than individual years.

So go check those out. They speak for themselves.

But for the text analysis crowd, I also wanted to tell you a little more about [the link down right at the bottom of the second](http://benschmidt.org/poli/SOTU) (words) piece, and get a little technical about why that, although we decided not to include on the Atlantic site, contains the germ of something I find pretty interesting for online text analysis in general.

[That page gives you an in-browser live corpus comparison using Dunning Log-Likelihood](http://benschmidt.org/poli/SOTU) between the complete speeches of any two presidents. Click on any word on either chart and you get a bar graph showing which presidents used it the most. (I'm obligated to Isabel Mereilles for pointing out to me that this was the best approach over some awful wordcloud thing I had originally).

This visualization is a little more inside baseball--but for those who know either presidential history or text analysis, it should be pretty interesting. These aren't pre-compiled numbers: every search runs the Dunning keyword analysis anew. That means that although this front end is strictly about comparing presidents, you can use it for all sorts of other questions. I used myself, in fact, to find interest words to graph: I settled on "freedom" as one of my blurbs under the chart after rewriting the display to show words that showed marked differences between Republican and Democratic presidents since 1960.

[![](http://1.bp.blogspot.com/-gBaBiQd02U8/VL1Z6U4O05I/AAAAAAAAGHQ/f1E79ChiVJM/s1600/Screenshot%2Bfrom%2B2015-01-19%2B14%3A22%3A31.png)](http://1.bp.blogspot.com/-gBaBiQd02U8/VL1Z6U4O05I/AAAAAAAAGHQ/f1E79ChiVJM/s1600/Screenshot%2Bfrom%2B2015-01-19%2B14%3A22%3A31.png)

I find this exciting--and I think you should too--because as I've been saying for a while, [comparison is the most underused tool in the toolkit of the digital humanities](http://sappingattention.blogspot.com/2011/11/compare-and-contrast.html). A lot of pre-2010 work did fascinating comparative work. (The MONK interface for Dunning comparisons on TEI-annotated documents, for example). This is a proof-of-concept in a very similar space, but implemented inside quite a rich environment for text analysis that makes it easier to adopt the same tools for very different applications.

People who topic model talk about the potential to generate insights. I believe them. But I also think that in the presence of rich metadata, good comparison metrics (which Dunning approaches) can be far, far more productive. For the State of the Union, there are all sorts of useful comparisons to make: president vs. president, republican vs. Democrat, lame duck vs recently elected, opposition congress vs. friendly crowd... And for every other corpus, there are just as many. We currently treat these kinds of analytics as things that should be run client side, requiring individuals to obtain digital texts (frequently impossible) and install and run some tools for corpus comparison (a high barrier to entry.) But libraries and other content holders can--and I would argue, should--support these things as a form of exploration out of the box.

Currently the richest tools for building comparisons like these in Bookworm are still locked away on the developer side of the matrix. (Though it really only requires tweaking a few javascript variables on an existing template.) In part, this is deliberate; comparison metrics like this involve much more processing and much more data transfer than simple search techniques. Poorly designed, they can bring down a server. (Please don't abuse mine). But we offered search in the 1980s, when computers were nowhere near so powerful as today; it's certain realistic to serve this kind of thing now. Unlike topic modeling, say, it is realistic to offer them as a server side project; particularly when that server sits in a library. If you're a developer-librarian yourself, you can download the bookworm repos and get these sorts of comparisons running pretty easily on any metadata categories that you have. (In addition to Dunning Log Likelihood, the Bookworm API now supports TF-IDF as a comparison statistic, though both are probably going to have some changes in their execution methods. I think there's some room for improvement here.)

## But where I see this ultimately going is towards real-time, fully customizable in-browser comparison across any facets of a corpus as a service libraries and other content providers can easily offer on medium-sized (c. 20,000 documents) corpora. And "ultimately" here is really quite close. There are challenges of scale at the Hathi-scale level, but may be ways to address that through random sampling. And for smaller corpora, individuals and institutions could start to be spinning up Bookworm instances running these things and developing their own interfaces right now.

### Comments:

#### Wow. Great _Atlantic_ series. I haven't...

[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 'noreply@blogger.com') - <time datetime="2015-01-19T15:08:51.146-05:00">Jan 1, 2015</time>

Wow. Great _Atlantic_ series. I haven't had time to do more than skim them articles yet ... I have a second syllabus to finish.

But I just wanted to say briefly that I thoroughly agree with you about comparison. Topic modeling has its uses, but when we're actually trying to answer a specific question we usually want levers that are both simpler and more easily targeted. Supervised models are closest to my heart right now, because they have some nice features. But direct feature comparison is also valuable, and you're absolutely right that a scaled-up version of Monk's old Log-Likelihood feature would be a great thing to provide on the server side.

<hr />
#### Agreed right back. The reading of supervised model...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2015-01-19T15:16:20.429-05:00">Jan 1, 2015</time>

Agreed right back. The reading of supervised models for insight is a funny thing: for insight, I actually think one might be better of reading a Naive Bayes set of weights than one based on Logit regression that explains more variance. (And of course, Bookworm does provide an [in-browser Bayesian classification mode](http://benschmidt.org/beta/classifier)\--logit seems harder to implement streaming, but possible).

But I'm also very interested right now in the possibilities afforded of playing within the confines of web-deliverable services, because I think any instruction list which begins with "Install" instantly loses 99% of potential users. The big grant projects of 2008-2010 got us a lot farther than some people realize to a truly useful set of tools for non-technical humanists.

And of course these things play well together. One of the approaches that the Bookworm extensions are taking right now is to let you run some of the server-side classifications on your stuff and then share that in a much richer (but still non-consumptive) way with your audience.

<hr />
#### Agreed again! For insight, direct feature comparis...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750) - <time datetime="2015-01-19T16:15:29.811-05:00">Jan 1, 2015</time>

Agreed again! For insight, direct feature comparison might even be better than a model (since there are fewer hidden complications). What I like about predictive models isn't mainly that they provide rich insight but, so to speak, that I know when they fail. I'm doing some research now where I'm dealing with overlapping, closely related social boundaries and it's nice to be able to say how far they are or aren't "basically the same boundary." Predictions that can fail are a nice intuitive way of mapping that.

But what I find even more interesting is the notion that we've overlooked the real success of a previous generation of projects. I'm going to have to think about that, because what you're saying runs counter to some lessons I've been drawing from the last six years. At this point I've thoroughly convinced myself that the dream of the 2000s (user-friendly tools accessible for every humanist) is not alive even in Portland. But I could be wrong about that, and you could be right. Bookworm and Voyant have had some very impressive successes.

<hr />
#### YES, comparisons are fantastic! And also clicking...
[Brendan O'Connor](https://www.blogger.com/profile/01622411855846515340) - <time datetime="2015-01-19T22:19:27.641-05:00">Jan 1, 2015</time>

YES, comparisons are fantastic! And also clicking on a term to see it being used in context! I tried to put some of this in this system (a desktop application): http://brenocon.com/mte/ ... if you want to use it and find bugs, contact me -- i fixed a whole bunch in progress and am working on improving it now.

<hr />
#### It would also be interesting to have a link for &q...
[Gayle Snedecor](http://www.facebook.com/Snedworld) - <time datetime="2015-01-20T13:38:27.413-05:00">Jan 2, 2015</time>

It would also be interesting to have a link for "self-reference" to search for "I, me, my, mine" for all the presidents! We've been told that our current office holder is one of the most self-referential of all time, it would be interesting to see if the data supports this claim or not.

<hr />
#### No, the data does not support that claim, at least...
[Unknown](https://www.blogger.com/profile/04798509603212594098) - <time datetime="2015-01-21T08:19:57.849-05:00">Jan 3, 2015</time>

No, the data does not support that claim, at least according to the analysis at [Language Log](http://languagelog.ldc.upenn.edu/nll/?p=17246).

Incidentally, the map for the 1915 speech appears to confuse Lexington MA and Lexington KY.

\-Peter Chipman

<hr />
#### Yeah, I actually didn't include this in the ar...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2015-02-06T11:51:34.649-05:00">Feb 5, 2015</time>

Yeah, I actually didn't include this in the articles because the Language Loggers have so thoroughly investigated it.

My [other SOTU visualization does let you click on any term ever in a SOTU to see its use.](http://benschmidt.org/poli/2015-SOTU)

<hr />
#### What an awesome collection of data visualizations.
[William Bratches]() - <time datetime="2015-04-08T01:04:22.732-04:00">Apr 3, 2015</time>

What an awesome collection of data visualizations.

<hr />
