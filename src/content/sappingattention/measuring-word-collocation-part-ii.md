---
title: 'Measuring word collocation, part II'
date: 2010-11-26T01:22:00.000-05:00
draft: false
url: /2010/11/measuring-word-collocation-part-ii.html
tags:
  - collocation
  - isms
---

This is the second post on ways to measure connections—or more precisely, distance—between words by looking at how often they appear together in books. These are a little dry, and the payoff doesn't come for a while, so let me remind you of the payoff (after which you can bail on this post). I’m trying to create some simple methods that will work well with historical texts to see relations between words—what words are used in similar semantic contexts, what groups of words tend to appear together. First I’ll apply them to the isms, and then we’ll put them in the toolbox to use for later analysis.  
[I said earlier](http://sappingattention.blogspot.com/2010/11/links-between-words.html#more) I would break up the sentence “**How often, compared to what we would expect, does a given word appear with any other given word?**” into different components. Now let’s look at the central, and maybe most important, part of the question—how often do we expect words to appear together?

I don’t think there’s any one best way, to be honest, but I want to get this written down somewhere. Note that part of the challenge here is I’m trying to use the information in how many times “Darwinism”, say, appears in a book that also includes the word “Presbyterianism,” not just how many books. This is wordcounts done on a limited sample of books, made possible by that database I’ve been talking so much about yet that I don’t find myself using as much as I’d like.

One way is to compare the frequency with which a word appears to a different sample—for example, the proportions I did looking at words that appear with scientific method, or the comparisons that the CoHAE produces between decades. (I think that’s how CoHAE works, at least). This is good when comparing between two samples, but you need to have a baseline to compare against. When starting with something like the isms in my dataset as a whole, there’s no larger group. And it may be that in the future we’ll want to look at a particular corpus—novels, say—without using the language of science and cookery and everything else I have now as the standard to judge it by.

So we need to figure out, for each of our words, how often we expect it to appear in the same book as each other word. To answer this, we’ll need to choose an assumption about the distribution of words. I tried two ways, and feel better about the second.

1\. We could assume an even distribution of our word across texts. We would assume that that each word appears randomly across texts, and then multiply the expected number of books for Presbyterianism with the average number of times we’d expect “Darwinism” to appear per book. This assumes that words are not at all “lumpy”, as I described it last week, though, which we know to generally be not true.

2\. We could take as given the “lumpiness” of any given word, and use what we know to adjust our expectations. This should strip information what words are more lumpy from the final data, and focus it more on the actual links. This might be a bad idea—that lumpiness data, I was just arguing earlier, tells us important information about how restricted the scope of a word’s meanings are. But I’m going to try it, because the expectations the computer comes out with for words of vastly different commonalities seem skewed to me.

3\. An in-between way, which only occurs to me now, is to project the typical lumpiness at any given word count (that is, use that red loess regression line I plotted on the bookcounts–wordcounts graph) for a word, to get something in between these two. My blogging is a little behind my playing with the data right now, but I may try that if I come back to this method at some point.
