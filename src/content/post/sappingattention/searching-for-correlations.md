---
title: 'Searching for Correlations'
date: 2011-01-10T11:16:00.000-05:00
draft: false
url: /2011/01/searching-for-correlations.html
tags: 
- Historical memory
- Featured
- Evolution
- Data exploration and visualization
---

More access to the connections between words makes it possible to separate word-use from language. This is one of the reasons that we need access to analyzed texts to do any real digital history. I'm thinking through ways to use patterns of correlations across books as a way to start thinking about how connections between words and concepts change over time, just as word count data can tell us something (fuzzy, but something) about the general prominence of a term. This post is about how the [search algorithm](http://sappingattention.blogspot.com/2011/01/basic-search.html) I've been working with can help improve this sort of search. I'll get back to evolution (which I talked about in [my post introducing these correlation charts](http://sappingattention.blogspot.com/2011/01/correlations.html)) in a day or two, but let me start with an even more basic question that illustrates some of the possibilities and limitations of this analysis: What was the Civil War fought about?  
  
I've always liked this one, since it's one of those historiographical questions that still rattles through politics. The literature, if I remember generals properly (the big work is [David Blight](http://www.google.com/url?sa=t&source=web&cd=1&ved=0CBoQFjAA&url=http%3A%2F%2Fwww.amazon.com%2FRace-Reunion-Civil-American-Memory%2Fdp%2F0674003322&ei=5jwnTYS2JYP-8AbAuIGxAQ&usg=AFQjCNE9OiXRZK-BoywZc9AvpdtYbQ3-Dw&sig2=HueLXFSnovYn5g8mmf00xA), but in the broad outline it comes out of the self-situations of Foner and McPherson, and originally really out of Du Bois), says that the war was viewed as deeply tied to slavery at the time—certainly by emancipation in 1863, and even before. But as part of the process of sectional reconciliation after Reconstruction (ending in 1876) and even more into the beginning of Jim Crow (1890s-ish) was a gradual suppression of that truth in favor of a narrative about the war as a great national tragedy in which the North was an aggressor, and in which the South was defending states' rights but not necessarily slavery. The mainstream historiography has since swung back to slavery as the heart of the matter, but there are obviously plenty of people interested in defending the Lost Cause. Anyhow: let's try to get a demonstration of that. Here's a first chart:  

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TSZQOg-nZdI/AAAAAAAACao/YafMOwX76DI/s1600/civil+%2526+war+cor+to+slavery+%2526+s.png) ](http://4.bp.blogspot.com/_Pge31alC_E8/TSZQOg-nZdI/AAAAAAAACao/YafMOwX76DI/s1600/civil+%2526+war+cor+to+slavery+%2526+s.png)

  

How should we read this kind of chart? Well, it's not as definitive as I'd like, but there's a big peak the year after the war breaks out in 1861, and a massive plunge downwards right after the disputed Hayes–Tilden election of 1876. But the correlation is perhaps higher than the literature would suggest around 1900. And both the ends are suspicious. In the 1830s, what is a search for "civil war" picking up? And why is that dip in the 1910s so suspiciously aligned with the Great War? Luckily, we can do better than this.

  

\[As a reminder, I'm using search terms here to combine words. It would be better, to be sure, if I just loaded in the bigram (digram?) for "civil\_war" into my database, but I'm going to be lazy about that for now . This is like not putting quotes around "civil war" when you put it into a search field on an old website—not Google, which I'm sure has layers upon layers of optimization, but maybe JSTOR or LOC American Memory or something.\]

  

My answer, naturally, is that we can improve it. Like I keep saying, we need to view the data we get out of computers as part of an iterative search. This is just like searching in any other database--we just have to make our terms better or our search engine better. Specifically, I'm going to do two things. The first is pretty basic—I'm going to stick "Lincoln" in with the search terms on the Civil War side. The second is on the technical side—I'm going to tweak the TF-IDF algorithm so it responds less readily to increases in only one of the two terms (like "war") by using the geometric instead of the arithmetic mean. That gives us the following chart, including the results for the original search with the new algorithm):

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TSdOYIwgjqI/AAAAAAAACa4/Am4n7gJSVOQ/s1600/civil+%2526+war+cor+to+slavery+%2526+s.png) ](http://3.bp.blogspot.com/_Pge31alC_E8/TSdOYIwgjqI/AAAAAAAACa4/Am4n7gJSVOQ/s1600/civil+%2526+war+cor+to+slavery+%2526+s.png)

That's much better. Even on the original search, the algorithm clears out that original spike and some—not all—of the Great War noise. But adding Lincoln in really clears up the picture quite a bit--almost no correlation before 1860, a drop immediately after Reconstruction, and then a definite climb back up around 1890, sustained completely through to 1922.

  

If individual words are so important, can we really trust that any of these results mean anything? That's a real problem. I'm missing some things like "War between the States" and so on—maybe they have completely different results. But: if we're smart about our search terms, we can check these things. What else defines the civil war besides its name and Lincoln's? Let's try putting the names of the belligerents:

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TSdRfN-TiNI/AAAAAAAACbA/CCuL-mep-nQ/s1600/confederacy+%2526+union+cor+to+sla.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TSdRfN-TiNI/AAAAAAAACbA/CCuL-mep-nQ/s1600/confederacy+%2526+union+cor+to+sla.png)

  

That's fantastically similar, and goes a long way towards proving this really measures something about the discourse of the civil war, and not just random word fluctuations for "civil" and "war". (For the record, my first try was for "confederacy" and "army", which wasn't quite so close). The biggest difference is that Lincoln's name isn't so closely tied to the other words during the war years themselves, and that there's a base correlation between the political words 'union' and 'confederacy' and "slavery." That shouldn't be too surprising.  
  
So what is this showing? That the civil war remained more about slavery in American culture in the Jim Crow era than we might have thought? Certainly not anything so expansive. Let's talk about the limitations.  
  
The most important is that I'm just looking at a few books—4,000 have all the words 'confederacy', 'union', 'civil', 'war', and 'lincoln', for example. We're talking about these books, not culture. (This is basically the standard ngrams disclaimer, even they do have more—10x in this period, FTR—books than me).  
  
In particular, I've selected for large publisher, which means almost all my books are published in Boston, New York, or Philadelphia. For a topic like the Civil War, we'd definitely want to download a few more books published south or west of the Susquehanna before coming to any final conclusions.  
  
  
The lull in slavery language in the late 1870s might also come, hypothetically, from a different type of book being written about the war—a rush of generals memoirs or [institutional histories](http://digital.library.cornell.edu/m/moawar/waro.html) that didn't talk about slavery at all. The best way to answer this would a combination of searches looking at books to see if patterns and jump out, and some more charting. We can ask, for instance, how strongly books using union, confederacy, and battle correlate to books just using union and confederacy to get a sense of how important battles are to Civil War books. That does indeed go up after reconstruction, but it stays up even as the language of slavery rises again, so I don't think there's a strong conclusion to be made.  
  

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TSsvb1kSp-I/AAAAAAAACbU/vP2t28v1CkI/s1600/union+%2526+confederacy+%2526+battle+c.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TSsvb1kSp-I/AAAAAAAACbU/vP2t28v1CkI/s1600/union+%2526+confederacy+%2526+battle+c.png)

  
  
Finally, there's a more interesting problem. I can't search for negatives right now--that requires some sort of language processing. If a book from 1895 says "the civil war had nothing to do with slavery," I'm counting it as tying the Civil War to slavery.  
  
That one is maybe unfortunate, but not as much as it appears at first blush. What I'm interested in are discourses around a topic—whether or not authors of books felt the need to address an issue, not necessarily which side they came down on. Opposites are always firmly situated within the same frame, and the need to deny something is an indication that the author thinks the reader might believe it. That's a sort of reading historians are accustomed to practicing, and if we're limited to it in certain spheres of digital history, it's not such a bad thing.  
  
  
Next up: some charts to separate out different families of discourse.
---
### Comments:
#### This is so cool.
[Jamie ](https://www.blogger.com/profile/13542022273476075921 "noreply@blogger.com") - <time datetime="2011-01-11T08:57:35.567-05:00">Jan 2, 2011</time>

This is so cool.
<hr />
