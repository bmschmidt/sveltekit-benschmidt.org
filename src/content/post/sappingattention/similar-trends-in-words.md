---
title: 'Similar Trends in Words'
date: 2010-11-15T15:31:00.005-05:00
draft: false
url: /2010/11/similar-trends-in-words.html
tags: 
- Changes in language over time
- isms
---

I'm going to keep looking at the list of isms, because a) they're fun; and b) the methods we use on them can be used on any group of words--for example, ones that we find are highly tied to evolution. So, let's use them as a test case for one of the questions I started out with: how can we find similarities in the historical patterns of emergence and submergence of words?  
  
Well, let's take a few things for granted. First, we're interested in _relative_ trends: we want to compare all words, say, that get twice as popular during World War I, regardless of how popular they were before. It's easy to normalize for that, but we're still left with a mess of different curves. Below the jump is a very ugly chart, with the adjusted loess curves for the 300 most popular isms, with "1" being a year in which a word is used its average amount.  
  
  
  

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TOGL58r465I/AAAAAAAACGE/ot_9Io9_3bU/s1600/uglyplot.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TOGL58r465I/AAAAAAAACGE/ot_9Io9_3bU/s1600/uglyplot.png)

  

  
This chart is unimportant, so I won't try to make it pretty. You can see, though, that a lot of words have dramatic peaks after 1910, a surprising number have peaks around 1880 (that's probably some sort of data artifact I need to work out), and that otherwise a lot of words just meander around. Let's say we pick one of these words--unionism, say. I've already marked that above, as the thicker green line that stands out. What if we want to find other words with similar patterns--a spike in the 1890s, and then a larger one in the teens that temporarily dips during the Great War? (The Civil War spike, to do with saving the union, is probably too small to get picked up).  
  
There are a lot of ways to do this, but I'm going to try just one now. Intuitively, it works like this. Say we ranked each of the isms by how often they appear in 1914. That would give us a rank ordering with some information about the pattern, but not much. Now imagine (I'm not going to do this) a scatterplot with the 1914 occurrences rate on one axis, and the 1896 occurrences rate on the other. That would give us a little bit more information, and allow us to cluster some words together--those that don't appear much in either year, those that appear a lot in 1914 and a little in 1896, those that appear a lot in 1896 and a lot in 1914, etc. That would be more valuable. We could even add another year--say the base, 1830--and make a three-dimensional plot--you might be able to visualize that, though it's trickier.  
  
But what would be best is if we could plot all the years at once, in 93 dimensions. You can't visualize it, but you can do it in a computer. Basically, we're seeing how far apart any given two words are at each year, and working all that information together. If we do it for "unionism", the closest words, with their normalized distance, are:  
  
   collectivism cosmopolitanism     medievalism    emotionalism   
       4.104188        5.958098        7.230171        7.385482   
  
  
So, collectivism shows the most similar trend to unionism over time. That's great--it shows that semantically similar words show similar changes in use patterns, which is what we'd expect if this were working. The other words make less sense semantically, but that's OK too--there will just be coincidences. Here they are in one of the charts I've been making. (Which uses a slightly different kind of loess fitting, so the curves will look different).  
  
  

[![](http://1.bp.blogspot.com/_Pge31alC_E8/TOGUQTMQXhI/AAAAAAAACGI/aMHeumDRKeI/s1600/unionism+collectivism+cosmopolitanism+medievalism.png)](http://1.bp.blogspot.com/_Pge31alC_E8/TOGUQTMQXhI/AAAAAAAACGI/aMHeumDRKeI/s1600/unionism+collectivism+cosmopolitanism+medievalism.png)

So far, so good.  Those loess curves don't quite show it, but all of those have a mini-spike around 1895, and then a maxi-spike around the war, perhaps a little lower during. (By the way, these are all using wordcounts, not bookcounts).  
  
An admission: I cheated in choosing unionism, because I knew it was closely tied to collectivism already. So let's see the closest linked words for a few other isms:  
  
\> closest.words("darwinism")  
 evolutionism      nihilism dilettanteism        theism   
     6.209610      6.922990      7.293343      7.416601   
  
\> closest.words("protestantism")  
catholicism   dogmatism    stoicism      truism   
   2.243458    2.679069    2.897427    2.912831   
  
\> closest.words("militarism")  
     infantilism internationalism         feminism      prussianism   
        7.482263         7.557075         7.952049         9.253820   
  
\> closest.words("bimetallism")  
    bohemianism       anarchism   particularism ecclesiasticism   
       7.685904        8.121062        9.964955       10.562600   
  
\> closest.words("monometallism")  
bimetallism   anarchism  deafmutism bohemianism   
   10.74706    13.37249    13.78629    13.92116   

  

  
  
  
Not so bad. A mix of close synonyms, suggestive combinations, and probably random coincidences. It doesn't always work like we'd hope--I thought 'bimetallism' and 'monometallism' would be much closer than they are, although that seems to be about 'monometallism' having a quite unique curve--but it certainly works. (It's been pointed out that not everyone may know those words--they're shorthands for the gold or silver standard in the populist era). Remember, we're not using any form of collocation here to see what words appear together except a smoothed version of the year it appears. (It would probably find more closely related concepts if I didn't loess smooth first, but that would tell us less about trends and more about temporary spikes, which we probably don't want for this purpose).  
  
  
The two words that have the closest curves are, by far, "heroism" and "patriotism". That's pretty interesting. The two least similar words, a much less useful insight, are "phenomenism" and "bolshevism."  
  
  
What to do with this tool? Well, we can apply it inside other groups of words--the ones that we identified as interesting in their relations to "evolution", say--to find groups that trend together around the time we're interested in. (We idenfitied 'heredity', say, as one word that had a suggestive pattern--we could find the words that accompanied 'heredity' in its rise, either in general or specifically in books about Darwin).   
  
  
It also may be interesting to compare the results from this sort of distance analysis to other groupings of words--like those that appear in the same books. That would let us do a better job at finding words that are actually semantically linked, rather than just words that appear in books from the same year.  
  
  
  
  
  
  
\~~~~  
I have the MySQL database I mentioned earlier running, but a) it's too slow, and b) it has trouble with books the internet archive identifies in a certain way in their catalog. This has already been too much work, but I may keep at it. Database optimization and query optimization both seem to be as much art as science, which makes just throwing things together a pain. Is there someone at Princeton whose job it would be to answer my questions about database design?