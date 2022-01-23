---
title: 'Genre similarities'
date: 2011-12-16T17:01:00.000-05:00
draft: false
url: /2011/12/genre-similarities.html
tags: 
- Digital Humanities Now Editors' Choice
---

When data exploration produces Christmas-themed charts, that's a sign it's time to post again. So here's a chart and a problem.  

  

First, the problem. One of the things I like about the posts I did [on author age and vocabulary](http://sappingattention.blogspot.com/2011/04/age-cohort-and-vocabulary-use.html) [change](http://sappingattention.blogspot.com/2011/05/predicting-publication-year-and.html) in the spring is that they have two nice dimensions we can watch changes happening in. This captures the fact that language as a whole doesn't just up and change--things happen among particular groups of people, and the change that results has shape not just in time (it grows, it shrinks) but across those other dimensions as well.

  

There's nothing fundamental about author age for this--in fact, I think it probably captures what, at least at first, I would have thought were the least interesting  types of vocabulary change. But author age has two nice characteristics.

  

1) It's straightforwardly linear, and so can be set against publication year cleanly.

2) Librarians have been keeping track of it, pretty much accidentally, by noting the birth year of every book's author.

  

Neither of these attributes are that remarkable; but the combination is.

  
  

There are plenty of linear variables out there: I'd love to be able to see how vocabulary changes lie in time by linear variables like author income, years of schooling, or annual sales figures for books; but no one has been collecting that data. The stuff that has been collected, on the other hand, is essential categorical--a book can be fiction, published in Philadelphia, about set theory, in English. Nobody keeps track of any of these as linear variables, though they could (it just barely mentions set theory, it has a lot of French words, etc.)

  

The trick is to make this categorical data more ordinal. Given something reasonably good at turning publication location into real life places, for instance, you could turn geographical data into latitude-longitude pairs, or into any number of mildly interesting one-dimensional series. (Maybe the adoption of some vocabulary can be modeled well by miles from Muncie, or by city population at date of publication).

  

But [book data just isn't strongly geographical enough](http://sappingattention.blogspot.com/2011/01/where-were-19c-us-books-published.html) to make those sorts of comparisons worth coding. (Newspaper data, on the other hand...) And I'm particularly interested in genre. What I'd really like is some way to make genre information univariate. One way to do this is to create new ordinal genre information through principal components analysis or something. But that doesn't use metadata, just the text, which seems somewhat wasteful. The best genre information we have is probably LC classification numbers; and they are frustratingly almost-ordinal. Q-R-S-T is all science-math-technology type stuff; D-E-F is history leading into the social sciences in G-H-K; and so on. But there's not really a continuous scale from A to Z. Right?  
  
I wanted to get a quick-ish handle on this, and just how similar or dissimilar the various LC classes are, and how that maps to the order they're shelved in.  
  
This is where the chart comes in. The easiest way to compare genres seemed to be comparing their word usage using cosine similarity. (To keep the data size manageable, I actually compared only words preceding the word 'are.' Good enough, hopefully; it shouldn't seriously compromise the data, but does mean that the variations are mostly about noun-usage, not word usage in general.)  
  
1 is perfect similarity, and anything below about .85 is 'not very close'--I've lumped those together. Every point is colored to show the similarity score of the genre immediately to the left against the genre below. Green is very similar, white is averagely similar, red is not very similar. You'll see a green line running through the middle--that's because every genre is identical to itself. The chart, in accidentally Christmas colors (click on the chart to enlarge, and to Wikipedia for a refresher on [LC classifications](http://en.wikipedia.org/wiki/Library_of_Congress_Classification)):  
  
[![](http://3.bp.blogspot.com/-ZaU1dqeuc7s/Tu9o2DzrL2I/AAAAAAAAC7Q/uUHDXwxu76k/s640/Cosine+similarity+among+LC+classification+genres.png)](http://3.bp.blogspot.com/-ZaU1dqeuc7s/Tu9o2DzrL2I/AAAAAAAAC7Q/uUHDXwxu76k/s1600/Cosine+similarity+among+LC+classification+genres.png)  
  
  
This is not one of those charts where the meaning just jumps out. But a few notes:  
  
1) There are roughly three big groupings that are relatively coherent: the social sciences and humanities, let's call them, A to PN; fiction, PQ-PZ; and the sciences, Q to Z. These map on to the LC classification scheme relatively well, so it's not a completely arbitrary mapping.  
  
2) Some genres are mostly red, meaning they're entirely _sui generis._ Most notable is fiction, PZ, which is also the largest one in the collection, and the other P-categories; QA, math; and TK, electrical engineering.  
  
3) Some genres have green bands running all the way up and down. (Or left and right, since the chart's symmetric). Q, R, T, F, and G are like this; notably, those are all general classes. So the books classed as 'general science' or 'general technology' actually do have some lack of specificity, either individually or when averaged out, that makes them closer to random other books. That's sort of interesting.  
  
Still, it doesn't exactly look like the genres are placed in the best of all possible orders. AE (encyclopedias) looks more like science than like its nearest neighbors in the B category, psychology-philosophy-religion (although that category, which has always felt too much like a grab-bag to me, actually coheres very nicely in a sea of green. The early Ps, which are world literature and literary studies, look more like world history (the Ds) than they do like the bulk of fiction in PR, PS, and PZ. And so on.  
  
So, can we create a single best linear ordering? No, not really. The data is too dimensional for that. That would be like trying to create a single ordering of the cities in North America from the distance grid in the corner of a AAA map. You could run a spectrum from San Diego to St John's Newfoundland, or from Vancouver to Miami; either would make sense, but neither would work, because the data is fundamentally two-dimensional. (I actually just tried this using lat-long coordinates; principal components analysis runs a spectrum from Providence RI to Eugene Oregon, that Bangor and Vancouver end up in the _inside_ of.) Here, the data has many more than 2 dimensions, which makes a single useful ordering all the less likely.  
  
What we _can_ do, though, is create any number of somewhat useful orderings; to extend the analogy, the best ranking of the cities in North America for _me_ is going to be their distance from Somerville, MA. So we can rearrange this chart by showing the distance of various genres from QH, natural history:  
   
[![](http://3.bp.blogspot.com/-BmyPfZ6tXuk/Tu9o6AnsLhI/AAAAAAAAC7Y/LJY3wqnzcqg/s640/Cosine+similarity+among+library+of+congress+genres+ordered+by+distance+from+biology.png)](http://3.bp.blogspot.com/-BmyPfZ6tXuk/Tu9o6AnsLhI/AAAAAAAAC7Y/LJY3wqnzcqg/s1600/Cosine+similarity+among+library+of+congress+genres+ordered+by+distance+from+biology.png)  
  
Reading down from the left, QH is identical to itself; next closest is Q (general science, then QL (zoology), QP (physiology), and so on. On the face of it, this doesn't look much better, or much worse, than the original one. We still get some nice groupings, but outside of a few helpful rearrangements close to QH (anthropology _is_ like natural history!) it's more arbitrary than the original LC ordering, and certainly not as good as [the hierarchy I built using textual data](http://sappingattention.blogspot.com/2011/02/fresh-set-of-eyes.html) a while back.  
  
What's potentially interesting, though, about that sort of ordering is that it lets us look at how transmission moves--or doesn't--across those similarity lines. We know that Q is statically similar to S, and not so to PR; when language changes, how do those similarities affect the changes that happens?  
  
So that's what's next.
---
### Comments:
#### Up to now I have been taking your interest in genr...
[Jamie ](https://www.blogger.com/profile/13542022273476075921 "noreply@blogger.com") - <time datetime="2011-12-28T13:49:42.808-05:00">Dec 3, 2011</time>

Up to now I have been taking your interest in genre for granted, since it's obviously awesome, but now I want to know: does it interest you more for methodological reasons—which are obvious enough in your blog discussions—or is it also rooted in some historical question you've got (i.e., the popular appropriation of certain strands of psychological research)?
<hr />
#### Yeah, it's definitely historical--I like, as d...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-12-28T19:30:09.437-05:00">Dec 3, 2011</time>

Yeah, it's definitely historical--I like, as do (I think) lots of people doing something vaguely intellectual-history-like, to talk about what 'psychology did' and what sociology did as if they are historical agents or subjects in themselves. (Or at least as if their process of cohering to each other is real interesting in itself). Just as a pure methodological point, I think the geographical stuff is probably more interesting, and I've love to post more maps here. But yeah, I think I'm basically interested in how words/phrases can show how ideas or concepts or practices spread, and I'm simply a lot more interested in how (say) the term 'natural selection' escaped from biology than I am in how 'Abraham Lincoln' escaped from Illinois.  
  
Although as for psychology, I'm inclining in the direction that popular appropriation of psychology is more a conventional story intellectual historians love to tell, because it lets them keep studying James and Dewey and justifies the effort they put into understanding them; when in fact the actual networks of transmission and distortion look quite different, centered as much on advertising or pedagogy, etc. I am hopeful this might be quantifiable on a big scale, though, yeah.
<hr />
