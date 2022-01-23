---
id: 468
title: Feature Reduction on the Underwood-Sellars corpus
date: 2016-03-19T15:17:35+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=468
url: /2016/03/19/feature-reduction-on-the-underwood-sellars-corpus/

categories:
  - Dimensionality Reduction
---
  
This is some real inside baseball; I think only two or three people will be interested in this post. But I&#8217;m hoping to get one of them to act out or criticize a quick idea. This started as a comment on Scott Enderle&#8217;s blog, but then I realized that Andrew Goldstone doesn&#8217;t have comments for the parts pertaining to him… Anyway.

Basically I&#8217;m interested in feature reduction for token-based classification tasks. Ted Underwood and Jordan Sellars&#8217; article on the pace of change (hereafter U&S) has inspired a number of replications. They use the 3200 most-common words to classify 720 books of poetry as &#8220;high prestige&#8221; or &#8220;low prestige.&#8221;

Shortly after it was published, [I made a Bookworm browser designed to visualize U&S&#8217;s core model](http://bookworm.benschmidt.org/posts/2015-05-22-paceofchange.html), and asked Underwood about [whether similar classification accuracy on a much smaller feature set was possible](https://twitter.com/benmschmidt/status/601812515639681025). My hope was that a smaller set of words might produce a more interpretable model. In January, [Andrew Goldstone took a stab at reproducing the model](http://andrewgoldstone.com/blog/2016/01/04/standards/): he does, but then argues that trying to read the model word by word is something of a fool&#8217;s errand:

> Researchers should be very cautious about moving from good classification performance to interpreting lists of highly-weighted words. I’ve seen quite a bit of this going around, but it seems to me that it’s very easy to lose sight of how many sources of variability there are in those lists. Literary scholars love getting a lot from details, but statistical models are designed to get the overall picture right, usually by averaging away the variability in the detail.

I&#8217;m sure that Goldstone is being sage here. Unfortunately for me, he hits on this wisdom _before _using the lasso instead of ridge regression to greatly reduce the size of the feature set (down to 219 features at 77% success rate, if I&#8217;m reading his console output correctly), so I don&#8217;t get to see what features a smaller model selects. [Scott Enderle took up Goldstone&#8217;s challenge, explained the difference between ridge regression and lasso in an elegant way, and actually improved on U&S&#8217;s classification accuracy with 400 tokens](http://www.lagado.name/blog/to-conquer-all-mysteries-by-rule-and-line/)&#8211;an eightfold reduction in size.

So I&#8217;m left wondering whether there&#8217;s a better route through this mess. For me, the real appeal of feature selection on words would be that it might create models which are intuitively apprehensible for English professors. But if Goldstone is right that this shouldn&#8217;t be the goal, I&#8217;m unclear why the best classification technique would use words as features at all.

So I have two questions for Goldstone, Enderle, and anyone else interested in this topic:

  1. Is there any redeeming interpretability to the features included in unigram model? Or is Goldstone right that we shouldn&#8217;t do this?
  2. If we don&#8217;t want model interpretability, why use tokens as features at all? In particular, wouldn&#8217;t the highest classification accuracy be found by using dimensionality reduction techniques across the \*entire\* set of tokens in the corpus? I&#8217;ve been using the U&S corpus to test a dimensionality reduction technique I&#8217;m currently writing up. It works about as well as U&S&#8217;s features for classification, even though it does nothing to solve the collinearity problems that Goldstone describes in his post. A good feature reduction technique for documents, like latent semantic indexing or independent components analysis, should be able to do much better, I&#8217;d think&#8211;I would guess the classification accuracy over 80% with under a thousand dimensions. Shouldn&#8217;t this be the right way to handle this? Does anyone want take a stab at it? This would be nice to have as a baseline for these sorts of abstract feature-based classification tasks.
