---
title: 'Links between words'
date: 2010-11-23T16:02:00.000-05:00
draft: false
url: /2010/11/links-between-words.html
tags:
  - collocation
  - isms
---

Ties between words are one of the most important things computers can tell us about language. I already looked at one way of looking at connections between words in [talking about the phrase "scientific method"](http://sappingattention.blogspot.com/2010/11/wordcounts-in-research-agendas-what-do.html#more)\--the percentage of occurrences of a word that occur with another phrase. I've been trying a different tack, however, in looking at the interrelations among [the isms](http://sappingattention.blogspot.com/2010/11/century-of-isms-take-one.html). The whole thing has been do complicated--I never posted anything from Russia because I couldn't get the whole system in order in my time here. So instead, I want to take a couple posts to break down a simple sentence and think about how we could statistically measure each component. Here's the sentence:

**How often, compared to what we would expect, does a given word appear with any other given word?**

In doing the math, we have to work from the back to the front, so this post is about the last part of the sentence: What does it mean to _appear with another word_?

There's actually not much new on this part of the sentence--the real meat comes with the earlier questions. I dealt with most of it in [my post on collocation](http://sappingattention.blogspot.com/2010/11/collocation.html). But let me just review:

A word can appear with another word:

- Within a certain word radius: I've used 6 before, which I think is what the Corpus of Historical American English uses, and seems reasonable. One would be a good number, too, particularly if we stripped out prepositions and articles—then we'd get mostly associated adjectives and verbs for any given noun. This data is very hard to store, and has to be recreated for each word.
- Within the same sentence. I used this a bit with the Scientific Method stuff, and I anticipate using it more when I bring the focus back to attention a bit. It's good for common words and general questions about language. My perl parsing scripts aren't perfect, so it tends to chop up some initials into sentences, and the OCR probably misses some periods. Like word radius, it's hard to store for a large number of words.
- Within the same book. This is what I'm mostly using now, because a) books are a better container for subject matter than sentences for rarer words, which include most of the isms; and b) it's just small enough to fit on my computer, although the queries take a while. It doesn't work as well for truly common words, and the fact that books are of different lengths creates some problems that I might but don't compensate for.
- Within the same year. I put this in just to point out that semantic and historical categories aren't completely separate--as I saw analyzing the trend lines for the isms, we found a lot of semantic similarities as well. If I'd used year-by-year spikes, there probably would have been more. Any other wrapper could provide interesting information along these lines--genre, publisher, city of publishing, etc. My data is worse on those, though. Author would be a particularly interesting one to use.

So that's all. I'm using within the same book right now, but there are other options. Next, I'll talk about how often we'd expect two words to appear together.
