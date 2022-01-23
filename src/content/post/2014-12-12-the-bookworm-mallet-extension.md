---
id: 382 
title: The Bookworm-Mallet extension 
date: 2014-12-12T04:15:07+00:00 
author: ben 
layout: post 
guid: http://benschmidt.org/?p=382 
url: /2014/12/12/the-bookworm-mallet-extension/
categories: 
  - Bookworm 
---
I promised Matt Jockers I&#8217;d put together a slightly longer explanation of the weird constraints I&#8217;ve imposed on myself for topic models in the Bookworm system, like t[hose I used to look at the breakdown of typical TV show episode structures.](http://sappingattention.blogspot.ca/2014/12/typical-tv-episodes-visualizing-topics.html) So here they are.

The basic strategy of Bookworm at the moment is to have a core suite of tools for combining metadata with full text for any textual corpus. In the case of the movies, the texts are each three-minute chunks of movies or TV shows; a topic model will capture the size of each individual movie. A variety of extensions allow you to port in various other algorithms into the system; so for instance, you can use the geolocation plugin to put in a latitude and longitude for a corpus which has publication places listed in it.

The [Bookworm-Mallet extension](https://github.com/bmschmidt/Bookworm-Mallet) handles incorporating topic models into Bookworm. The obvious way to topic model is to just feed the text straight into Mallet. This is particularly easy because the Bookworm ingest format is designed to be [exactly the same as the Mallet format](http://bookworm-project.github.io/Docs/input.txt.html). But I don&#8217;t do that, partly because Bookworm has an insanely complicated (and likely to be altered) [set of tokenization rules](http://bookworm-project.github.io/Docs/Tokens.html) that would be a pain to re-implement in the package, and partly because we&#8217;ve \*already\* tokenized; why do it again?

So instead of working with the raw text, I load a [stopwords list](https://github.com/bmschmidt/Bookworm-Mallet/blob/master/bookwormStopwords.txt) (starting with Jockers&#8217; list of names) directly into the database, and pull out not the tokens but the internal numeric IDs used by Bookworm for each word. This has an additional salutary effect, which is that we can define from the beginning exactly the desired vocabulary size. If we want a vocab size of the most common 2^16-1 tokens in the corpus, it&#8217;s trivially easy to do it. That means that the Mallet memory requirements, which many Bookworms bump up against, can be limited. (David Mimno has used tricks like this to speed up Mallet on extremely large builds; I don&#8217;t actually know how he does it, but want to keep the options open for later.) And though I&#8217;m not already limited precisely, I do drop out words that appear fewer than two times from the model to save space and time.

The actually model is run on a file not of words, but of integer IDs. Here are the first ten lines of the movie dataset as I enter it into Mallet.

<pre class="lang:default decode:true">1       883 24841 3714 932 2354 2343 1851 6850 5889 2205 273 4427 1088 2343 7900 139 9357 883 932 1060 590
2       9184 251 1613 11137 883 535 883 1140 4225 1003 290 1549 1000 3299 706 706 9498 16435 932 2216 232 
3       2475 412 535 2937 4342 177 177 559 1927 559 177 164 799 177 2901 177 6620 516 1855
4       1874 7769 271 567 5816 1878 410 388 1726 23371 353 3389 19793 8182 250 14188 5490 3766 5889 1145 3
5       356 520 1603 459 290 2110 8896 2339 1927 1184 1699 2150 912 8829 4340 2937 545 324 1726 114 4630 5
6       1591 2466 5889 3155 598 706 3946 433 2790 2429 1190 24220 13273 304 290 1060 3766 2351 177 2138 44
7       662 2797 656 11073 4887 1654 6492 3203 13119 6448 960 1237 2343 16247 9630 548 1776 2343 253 934 1
8       114 602 2343 348 1726 271 222 6080 1240 3790 4329 2442 4263 7030 1963 5535 2811 700 897 1157 1629 
9       1320 3476 5806 877 1320 1603 1603 7563
10      2077 545 2077 9250 3358 302 330 1984 2284 752 589 5588 3358 4648 6105 545 114 23884 19943 290 232</pre>

Each number is a code for a word; they appear not in the original order, but randomly shuffled. Wordid 883 is &#8216;land,&#8217; 24841 is &#8220;Stubborn,&#8221; 3714 is &#8220;influence,&#8221; etc. This file is much shorter for being composed of integers without stopwords than it would be from the full text.

Then all the tokens and topic assignments are loaded back into the database, not just as overall distributions but as individual assignments. That makes it possible to look directly at the individual tokens that make up a topic, which I think is potentially quite useful. This gives a much faster, non-memory based access to the data in the topic state file than any other I know of; and it comes with full integration with any other metadata you can cook up.

Jockers&#8217; &#8220;Secret sauce&#8221; consists, in part, of restricting to only nouns, adjectives, or other semantically useful terms. There is a way of doing that in the Bookworm infrastructure, but it involves not treating the topic model as a one-off job, but fully integrating the POS-tagging into the original tokenization. We would be then be able to only feed adjectives into the topic modeling. But the spec for that isn&#8217;t fully laid out: and POS-tagging takes so long that I&#8217;m in no big hurry to implement it. It has proven somewhat useful in the Google Ngrams corpus, but I&#8217;m a little concerned by the ways that it tends to project modern POS uses into the past. (Words only recently verbified get tokenized as words much longer ago in the 2012 Ngrams release).

Perhaps more interesting are the ways that the full Bookworm API may expose some additional avenues for topic modeling. Labelled LDA is an obvious choice, since Bookworm instances are frequently defined by a plethora of metadata. Another option would be to change the tokens imported in; using either Bookworm&#8217;s lemmatization (removed in 2013 but not forgotten) or even something weirder, like the set of all placenames extracted out in NLP, as the basis for a novel. Finally, it&#8217;s possible to use metadata to more easily change the definition of a \*text\*; for something like the new Movie Bookworm, where each text takes three minutes, it would be easy to recalculate with each text instead coming in as an individual film.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
