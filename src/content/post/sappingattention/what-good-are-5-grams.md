---
title: 'What good are the 5-grams?'
date: 2010-12-23T13:31:00.001-05:00
draft: false
url: /2010/12/what-good-are-5-grams.html
tags: 
- Ngrams
---

 [Dan Cohen](http://www.dancohen.org/2010/12/19/initial-thoughts-on-the-google-books-ngram-viewer-and-datasets/) gives the comprehensive Digital Humanities treatment on Ngrams, and he mostly gets it right. There's just one technical point I want to push back on. He says the best research opportunities are in the multi-grams. For the post-copyright era, this is true, since they are the only data anyone has on those books. But for pre-copyright stuff, there's no reason to use the ngrams data rather than just downloading the original books, because:  
  

1.  Ngrams are not complete; and
2.  Were they complete, they wouldn't offer significant computing benefits over reading the whole corpus.

Edit: let me intervene after the fact and change this from a rhetorical to a real question. Am I missing some really important research applications of the 5-grams in what follows? Another way of putting it: has [the dump that Google did for the non historical ngrams in 2006](http://googleresearch.blogspot.com/2006/08/all-our-n-gram-are-belong-to-you.html) been useful in serious research? I don't know, but I suspect it might have been.  
  
  
  
  
Google only includes a word or phrase in ngrams if it appears a certain number of times—40 books, or something like that. If you plug a random phrase from a book with only a few editions into ngrams, it shows up blank. When you get up to five words, you're losing a lot of information. So say, using Cohen's example, you're looking for 'marriage'; you can use the two grams to find "loving marriage" and "happy marriage," but if you want to find words a little farther away ("[marriage between two equals](http://ngrams.googlelabs.com/graph?content=marriage+between+two+equals&year_start=1800&year_end=2000&corpus=0&smoothing=3)," "[marriage of two equals](http://ngrams.googlelabs.com/graph?content=marriage+of+two+equals&year_start=1800&year_end=2000&corpus=0&smoothing=3)," "[marriage between equals](http://marriage%20between%20equals/)") the engine breaks down. Of those three, two of the individual formulations are too rare to show up in the data. Maybe they don't show up at all--but maybe they show up twenty times. No way to know. You really want to be able to look for marriage within five words of equal or equals. (Mark Davies' [COHA](http://corpus.byu.edu/coha) lets you do that, but only through a web interface without access to underlying data--and I'm talking about raw data processing here, not nice web interfaces). But there's no way to do that at all, unless you're looking at phrases that you know to be stereotyped: "the united states is" vs "the united states are," etc.  
  
  
Why doesn't Google just release all the 5-grams? First off, it might create copyright problems: A computer could take each of the strings and stitch them together: "to be or not to" overlaps with "be or not to be," etc, until it had a whole book. For once, the genomics analogy is accurate--that's how they reconstructed the genome out of DNA fragments.  
  
  
But say Google got around that by chopping off grams at the sentence line, or introducing error, or something. For every edition of Dickens, you'd get the following five-grams for the first sentence alone (spaces just to make it clearer):  
  
  
           best of times it was  
                of times it was the  
it was the best of  
                         it was the worst of  
       the best of times it  
                   times it was the worst  
   was the best of times  
                            was the worst of times  
  
  
And they wouldn't even be sorted alphabetically--they'd probably be scattered across 6 files. If you wanted to find words that appear near 'times,' you'd have to scan six grams and 30 words just to find the 8 words that appear near it; and then you'd have to do some more processing to see that "was" appears three times, not five times, near "times" since some of them are double-counted.  
  
  
It's doable, but it's a monstrously inefficient way of storing that sentence for word-collocation purposes. It works for Google's computing power and for creating graphs like the ones they do, but I suspect there are better ways to do it (indexes of word locations followed by local processing of sentences, or something) if your goal is to find the answer to one or a dozen questions, rather than allow thousands of people to hit your servers with various requests.   
  
  
The corpus of pre-copyright texts is not \_so\_ large (Ngrams American books from 1830 to 1922 looks to be about 180 GB) that we can't do it on our laptops. And there are significant benefits to allowing this sort of research to be done by individuals, rather than forcing humanists into a grant-chasing access wars just to access to books in the public domain.   
  
  
So what's my agenda, then? I think we should hope for a few things:  
A) For all the academic parties clamoring for open access, it's only theInternet Archive that's actually released texts (not PDFs) into the wild. Google, Hathi, individual libraries: everyone else is holding back on this. That's a shame.   
B) The next best thing to full text is word counts for books. I'm sure this is a completely quixotic request, but I think text word counts should be public domain even for books in copyright—it's just an assemblage of statistics, after all. I have to pay Major League Baseball to watch video of games, but I don['t have to pay them](http://www.allbusiness.com/services/legal-services/4465090-1.html) for box scores. I'd love that for copyright-era books. Probably not going to happen, though.  
C) Something about the potential of the Zotero commons for academic crowd-sourced texts and cataloging. I'm fuzzy from my cold, I can't finish this thought, though.  
  
  
Anyway, I need to stop blogging about ngrams. It doesn't really bring out the best, I don't think.