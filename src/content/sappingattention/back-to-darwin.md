---
title: 'Back to Darwin'
date: 2010-11-13T13:01:00.002-05:00
draft: false
url: /2010/11/back-to-darwin.html
tags:
  - Evolution
---

Henry asks in the comments whether the decline in evolutionary thought in the 1890s is the "'Eclipse of Darwinism,' rise or prominence of neo-Lamarckians and saltationism and kooky discussions of hereditary mechanisms?" Let's take a look, with our new and improved data (and better charts, too, compared to earlier in the week--any suggestions on design?). First,three words very closely tied to the theory of natural selection.

[![](http://1.bp.blogspot.com/_Pge31alC_E8/TN7BvVe7qdI/AAAAAAAACFo/950YxmjutCQ/s1600/evolution+darwin+spencer.png)](http://1.bp.blogspot.com/_Pge31alC_E8/TN7BvVe7qdI/AAAAAAAACFo/950YxmjutCQ/s1600/evolution+darwin+spencer.png)

Three rises from around 1859, _Origin_'s publication date (obviously the numbers for Spencer are inflated by other Spencers in the world, but the trend seems like it might be driven by Herbert); and three peaks at different points from 1885 to 1900, followed by a fall and perhaps a recovery. The question is: how significant are those falls, and how can we interpret them? First, let's look at the bookcounts: are those falls a result of less intensive discussion of the subjects, or of a waning in interest across all books?

[![](http://1.bp.blogspot.com/_Pge31alC_E8/TN7EvHAuR3I/AAAAAAAACFs/PXpMHBPrUeM/s1600/evolution+darwin+spencer.png)](http://1.bp.blogspot.com/_Pge31alC_E8/TN7EvHAuR3I/AAAAAAAACFs/PXpMHBPrUeM/s1600/evolution+darwin+spencer.png)

Interesting. This makes it clear that 'evolution' continued to diffuse across the language as late as 1910; any fall in wordcount could reflect the fact that it's simply not contentious anymore. Darwin, likewise, still rises but doesn't fall quite so dramatically. So we could provisionally read these as saying that the extensiveness of discussion of evolution increased, even as its intensiveness declined. It would be great to actually put some sort of numbers on these--occurences of a word per book it appears in is the obvious metric of intensivity of discussion. But that won't scale well for rare or common words. We can create a better one, but first I'll need to fit a curve to that [bookcounts chart](http://2.bp.blogspot.com/_Pge31alC_E8/TNwZsQ00_2I/AAAAAAAACFA/-EMMNVCr1Jw/s1600/BookcountsWordcount.png) from earlier.

(I'm not even going to try to read those Spencer results, given my uncertainty about how much of that involves the [ancestors of Winston Churchill and Princess Diana.](http://en.wikipedia.org/wiki/Spencer_family) We could write some just-so stories about it, but that's already too much of a temptation. (There's probably an Erasmus Darwin spike in there too--but under my current system, it takes too long--maybe 45 minutes--to get results for a firstname lastname pair).)

Also interesting is how closely aligned the rises of evolution and Darwin have become, at least initially; but then in the 1880s, evolution rises again without a concurrent interest in Darwin. What accompanies evolution's second wind? Well, I could just pull some words out of a hat. I'm going to do bookcounts only (got to make the code change the titles to make that clear):

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TN7LbnNBaZI/AAAAAAAACFw/KwIaJFFtuvI/s1600/heredity+haeckel+genetic+lamarck+fiske.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TN7LbnNBaZI/AAAAAAAACFw/KwIaJFFtuvI/s1600/heredity+haeckel+genetic+lamarck+fiske.png)

Henry's neo-Lamarckian explanation may have some currency, although his curve is so shaky it's hard to impute much meaning to its 1880-1890 spike. Fiske rises right in the period we're talking about, but Haeckel is a little early. Saltation, which I didn't plot, peaks at 25‰ (first and only warning--I'm generally going to use [per mil](http://en.wikipedia.org/wiki/Per_mil) instead per cent to describe numbers on this blog) of books in 1845, and is generally below 10 after 1870.

Heredity, though, is a big winner--it starts rising along with our other two words, but keeps climbing as they peak out. That's a correlation that's helpful, because it helps us think about what sort of discourse of evolution was rising. Henry's 'kooky discussions of hereditary mechanisms' seems like a likely candidate--after Darwin is somewhat digested, other theories of evolution keep coming forth.

Now, instead of pulling names out of a hat to analyze, I could have actually done a full analysis of word and book collocation as I did yesterday. We could even do it for different periods--words associated with evolution in the 1870s as opposed to the 1890s. That probably would have prompted some intuitions about better words to search for in these charts. (Even now, I'm realizing I should have tried to get lester frank ward in there, although his names are a little common). Currently those collocations take too much time. I might try to implement a database solution that would let us do it much faster sometime later, though.

## Lastly, a caveat (I always bury these at the bottom): these bookcounts are even more vulnerable to changes in the genre composition of my library over the years than are the wordcounts. In terms of data cleaning and segmentation, that's the most important thing I can do. Some sort of text-based classification would be fun to implement, although I obviously wouldn't do it as well as some others. Talking to Ben Gross the other day, I realized that I might be able to batch search the library of congress or worldcat and end up with call numbers for at least some of these books, which would be amazing. But if they do allow batch queries, getting the ugly title and author data from internet archive to be accepted by their system is probably going to be a pain. So we'll see if I get it done.

### Comments:

#### Good stuff again, Ben - to be more specific about ...

[Hank](#) - <time datetime="2010-11-13T14:42:18.791-05:00">Nov 6, 2010</time>

Good stuff again, Ben - to be more specific about 'kooky discussions of hereditary mechanisms,' it bears noting that, insofar as heredity (or the lack of an explanation for a plausible mechanism thereof) was taken to be the chief failing of the natural selection hypothesis, you might consider plotting "heredity" and "evolution" on the same graph and/or (probably "or") finding an associated word that might explain around what, exactly, debates hinged after evolution was accepted by Darwin was denied (1880s/1890s). Something similar to your work yesterday on "scientific method" might suffice, yes?

<hr />
