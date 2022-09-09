---
title: 'Genres in Motion'
date: 2011-02-22T15:38:00.005-05:00
draft: false
url: /2011/02/genres-in-motion.html
tags:
  - pca
  - Data exploration and visualization
---

Here's an animation of the PCA numbers I've been exploring [this](http://sappingattention.blogspot.com/2011/02/fresh-set-of-eyes.html) [last](http://sappingattention.blogspot.com/2011/02/pca-on-years.html) [week](http://sappingattention.blogspot.com/2011/02/vector-space-overlapping-genres-and.html).

There's quite a bit of data built in here, and just what it means is up for grabs. But it shows some interesting possibilities. As a reminder: at the end of my [first post on categorizing genres](http://sappingattention.blogspot.com/2011/02/fresh-set-of-eyes.html), I arranged all the genres in the Library of Congress Classification in two dimensional space using the first two principal components. PCA basically find the combinations of variables that most define the differences within a group. (Read more by me [here](http://sappingattention.blogspot.com/2010/12/second-principals.html) or generally [here](http://en.wikipedia.org/wiki/Principal_component_analysis).). The first dimension roughly corresponded to science vs. non-science: the second separated social science from the humanities. It did, I think, a pretty good job at showing which fields were close to each other. But since I do history, I wanted to know: do those relations change? Here's that same data, but arranged to show how those positions shift over time. I made this along the same lines as the great [Rosling/Gapminder bubble charts](http://www.youtube.com/watch?v=jbkSRLYSojo), created with [this](http://code.google.com/apis/visualization/interactive_charts.html) via [this](http://cran.r-project.org/web/packages/googleVis/index.html). To get it started, I'm highlighting psychology.  
&amp;lt;p&amp;gt;&amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;You need iframes and javascript or something to display this content&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;gt;&amp;lt;/p&amp;gt;

\[If this doesn't load, you can click through to the file [here](http://www.princeton.edu/%7Ebschmidt/PCAgoog1.htm)\]. What in the world does this mean?  
That's partly up to you to decide, but here's a rough guide to reading it. \[Note: this doesn't seem to work in Google Reader, you may need to head to the web site to see the graphics.\] The chart begins in 1863 for psychology. (That's the year at the bottom: it goes back to 1861 for some fields). At that point, psychology is closest to the general philosophy/psychology LC classification "B"; its word-use patterns also align it with education, social pathology, and American history. You can look at the general space to get a sense of what PCA regards as the basic characteristics to separate on. The first principal component, for example, runs from south to north. All of the high scorers are science and technology disciplines; chemistry is the most distinctive from other subclasses, and biology the least. In the south are the social sciences and humanities; three religion classes are the least "scientific" works in the sample. (Scare quotes necessary because PCA word-choice differs from semantics in important ways). The second component runs from right to left, and separates out the humanities (literature above all) from the law and the emerging social sciences at the bottom; it also finds a set of words that create a similar split in the north from medicine to manufacturing. I like to think of that axis as being from personal to social in some way, but that's probably an exaggeration. (Although there are nice touches to support it: for example, "Public aspects of Medicine" is the most 'social' of the medical fields, and engineering the most social of the sciences).

So that's the landscape. Press play to see how it shifts over the period 1861-1922, if you haven't yet. You'll see psychology track steadily \[\*See important disclaimer about smoothing at the bottom\] towards medicine in the upper left until about 1879. (Which is the date of [Wundt's lab](http://sappingattention.blogspot.com/2011/02/graphing-word-trends-inside-genres.html), traditionally the origin of scientific psychology—spooky!). The dots are quite small--hover over, and you'll see it only has a few hundred thousand words a year. That means only a couple books annually at first (rule of thumb: 100,000 words = one or two books), and none in a few. Once the field actually gets established, it settles into a relatively constrained area that it occupies until 1922. The size of the dots grows, indicating that more books are published in psychology.

What other fields might be interesting? I like LB, theory and practice of education, which makes a late dash towards the social sciences after crossing paths with psychology. Rather than go through them all myself, I'm just throwing it out there. Google did a great job making the charts fully interactive; you can change any aspect of them—turn on and off trails, highlight other groups, change the color classification scheme to work by LC class instead of my made-up higher classes, etc. Click away, something's bound to happen. I've included a few additional principal components to substitute out for the axes, though I don't pretend to know just what they mean. Click on the axis name, for example, to switch out the second principal component separating years for the fourth in the psychology graph, for instance, to see a metric that finds a logic in the B classification I'm somewhat blind to.

One thing that I find particularly interesting is the possibility of using a completely different set of criteria besides the PCA weights to chart on. I described earlier a [separate PCA analysis](http://sappingattention.blogspot.com/2011/02/pca-on-years.html) that found axes of change over time: I've put that chart in here, too. You can change the options on the above chart to generate it in the window above, but let me give you another example.

&amp;lt;p&amp;gt;&amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;You need iframes and javascript or something to display this content&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;lt;/p&amp;amp;amp;amp;amp;gt;&amp;lt;/p&amp;gt;

\[Original version hosted [here](http://www.princeton.edu/%7Ebschmidt/PCAgoog2.htm).\]

The essential point to this chart is that all the classes drift to right over time. That's because the left is finding language typical of the 1850s, and the right language typical of the 1910s. But within that overall drift, there is variation. Some genres are "ahead of the times," and some behind; some travel against the current. I highlighted three interesting ones here: Chemistry, US Law, and US History. They show different possible paths. Chemistry begins ahead of the pack in 1861--it is an advanced science, it doesn't republish old books much, etc. \[See the caveat at the bottom about re-publication.\] But as time goes on, its lead erodes. After about 1908, the language of chemistry is as modern as it will be before 1920. Engineering fields are using more modern language, physics catches up from well behind, and so forth. A lot of this probably represents percentage of reprinted books, but some of it as well is about what vocabularies have currency.

The law/history example shows something similar. Law moves back and forth, well behind the times in its vocabulary: while American history moves more steadily forward, with a number of notable pauses--particularly in the 60s/70s it moves backwards, and in the 90s it stays still long enough for law to catch up for a moment. Again, I'm not sure what's driving it—I'd need to build in a bit more processing to see what sort of vocabulary is causing it to take the course it does—but it's suggestive.

If you want to play around more, [here is a wider version](http://www.princeton.edu/%7Ebschmidt/PCAgooglarge.htm) of the charts for free clicking that I'll keep up for a little while. These charts are really great for exploration--they let you change the axes, the arbitrary categories I use for colors, they let you look at moving bar graphs of the shifting distributions over time, etc. They really give a nice way to allow a lot more exploration of somewhat complex data sets than flat files allow, in addition to the cool animations.

I said this is "suggestive." That's a classic weasel word and raises the question: What's the point here? I admit I mostly just wanted to see what this would look like, and I'm going to stop with all the PCA for a bit. This is about as far as I can get on my own in a week while teaching. Still, let me think about what it's good for for a minute.

The point I want to make is not necessarily that this particular PCA weighting gives us vast new insights, although there might be some that are good for spurring critical thinking. (The lack of any separation at all between social sciences/humanities along the axis that parcels off science is quite interesting, for example). Certainly it's not that these particular weightings on a relatively small fraction of books are an end in themselves.

Rather, it's another demonstration of the sort of objects and movements we can study now that weren't possible even five years ago. Historians often want to write about Big Topics, but feel that they can't do so responsibly. Instead, we hunker down in to particular archives, study small movements, etc. We often want to write about concepts, discourses, genres as subjects, but finding ourselves forced to write about individuals instead because of the constraints of what we can read.

There's a route in to the big questions by aggregation: we can really make genres and other big groups our subjects. (That the dots breath in and out certainly  helps further the illusion). We get to talk about structures, relations between genres and between discourses while still having a way to keep our feet on the ground. Or maybe to plant our feet on the ceiling for a change--we work down from the aggregates to find the individual cases, instead of vice versa. I think there are better ways to talk about, say, the scientization of psychology than these charts: as Allen's been [trying to convince me](http://sappingattention.blogspot.com/2011/02/pca-on-years.html?showComment=1298168230421#c4861180576103051343), topic modeling is probably one

I like this the most, then, as a sort of demonstration of the new perspectives that statistical techniques can offer on our sources. We can analyze in new ways, now, the big networks of terms and words and discourses all the humanists got so excited about in the 80s. The structure of ideas and the flow of knowledge on the largest levels is more accessible than it's ever been.

I had an interesting talk last with Erez Lieberman-Aiden, one of the authors of the culturomics paper in _Science_ and creator of ngrams, that I'm still mulling over. He thinks one of the big results of data will be in allowing a new sort of research in the humanities that focuses on falsifiability, reproducible claims, and so forth. If that does happen, though, it will at the same time open up the field for much more traditional humanistic research. When we find new angles that take big shifts as facts principally to be _explained_, not just _unearthed_, we'll find more and more interesting things to write about even within the traditional framing of humanistic research.

\~~~~~~~~~~

Fine Print: First, the components data is smoothed by a loess regression against year, span = .5, weighted by the number of books in each year. There simply aren't enough books in each year in my 45,000 book sample to use the raw data stand in and get any sense of overall trends outside of the top 3 or 4 classes. [Here's what it looks like](http://www.princeton.edu/%7Ebschmidt/PCAnosmoothing.htm): too much popcorn maker. I could do a decade-by-decade plot, but that's just a cruder form of smoothing. I figured I'd go the pretty way and keep the year results, but it's worth noting that the future is somewhat embedded in each years' point. The data on number of words in each genre is not smoothed, and it provides an important corrective to assigning too much importance to the beginning or end of a discipline's trail.

I dropped one subclass: AP--Periodicals. Periodicals aren't in any particular genre, and they aren't supposed to be in the Open Library to begin with. There are a few, though, and they come from very different fields in large numbers at increments of a few decades. The net result is that the dot sweeps around all across the screen, while not contributing to an understanding of genre relations. It's kind of neat to watch, though, and gives a little insight into how the smoothing works in the long stretches it tries to find a point while there is no data. Check it out [if you like](http://www.princeton.edu/%7Ebschmidt/crazyAP.html).

## Finally, it's worth mentioning again that my data includes reprints. Shakespeare, for example, may be an important part of the reason that British literature lags behind American. Open Library data makes it possible to use creation dates, but I'm not sure that data is so reliable that it's worth porting over to it. Plus, it says something important about fields if some continue to reprint lots of books from decades earlier while others do not.

### Comments:

#### I'm getting a window size here too small to se...

[Anonymous](#) - <time datetime="2011-02-22T16:45:30.994-05:00">Feb 2, 2011</time>

I'm getting a window size here too small to see the whole animation at once. Using Firefox. Would you recommend Chrome instead?

<hr />
#### 
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2011-02-22T17:49:20.865-05:00">Feb 2, 2011</time>

This comment has been removed by the author.

<hr />
#### Ahah, I changed the setup and I think it might wor...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2011-02-22T18:00:41.867-05:00">Feb 2, 2011</time>

Ahah, I changed the setup and I think it might work better? I chose an unfortunately kludgy way to display this.

<hr />
#### It works for me too now. Very nice. I'm intri...
[Anonymous]() - <time datetime="2011-02-23T09:15:53.175-05:00">Feb 3, 2011</time>

It works for me too now. Very nice. I'm intrigued by the way "Languages and Lit" seems to lead the parade in the second animation.

I know these are based on LoC classifications. In practice, does that turn out to be mostly fiction/poetry/drama or mostly critical nonfiction? In this period, I would guess the former.

This is pretty cool -- not just technically as a visualization, but I think the underlying result is also interesting. I've got some results that might be relevant, at least to the literary part of this. I think I'll have to write them up as a blog post.

<hr />
#### I've looked at the bubbles more carefully, and...
[Anonymous]() - <time datetime="2011-02-23T09:54:03.196-05:00">Feb 3, 2011</time>

I've looked at the bubbles more carefully, and it appears that all fiction may be filed under PZ, along with "juvenile belles lettres." Am I getting that right?

<hr />
#### So the standard is the LC classification
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2011-02-23T10:49:18.103-05:00">Feb 3, 2011</time>

So the standard is the LC classification [descriptions](http://www.loc.gov/catdir/cpso/lcco/), and past that I just have to scan titles. It looks to me like PZ is all fiction: [here is a full list](http://www.princeton.edu/~bschmidt/PZclass.htm) of every book title (no authors, alas) that I'm using with links to the IA pages. Ugly, but it can give you an idea. Let me know if you want any other genres to get an idea what's in them, that's easy to do.

Looking at the components, I think the key to PZ's lead is more casual language, in various ways--contractions, for example, really jump out.

<hr />
#### I should say:
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2011-02-23T11:01:27.955-05:00">Feb 3, 2011</time>

I should say: [PR](http://www.princeton.edu/~bschmidt/PRclass.htm) and [PS](http://www.princeton.edu/~bschmidt/PSclass.htm) both have a good deal of fiction too. Here's the list for them. There's an artificial distinction between fiction and literature that's hard to nail down--is Huckleberry Finn literature, juvenile belles-lettres, or fiction? I've seen it categorized within my sample under at least two of them.

<hr />
#### Thanks for those clarifications. I suspect you'...
[Anonymous]() - <time datetime="2011-02-23T11:58:29.133-05:00">Feb 3, 2011</time>

Thanks for those clarifications. I suspect you're right about "more casual language, in various ways." From a literary-historical perspective, though, it gets interesting to specify exactly what we mean by "casual." I'm working on a hypothesis about the changing relationship between oral and written language 1700-1900, and I'm about to try to find out whether literary texts turn out to be outliers on the trend curves I'm working with. This looks very much like a clue that they will be.

I suspect PS probably leads PR just because the volume of American prose overall is growing, making PS more "forward looking" in a sort of tautological way.

Great visualization, though; there's so much in there to think about.

<hr />
#### Here's the promised post about one metric of &...
[Anonymous]() - <time datetime="2011-03-18T16:44:14.665-04:00">Mar 5, 2011</time>

Here's the promised post about one metric of "casualness" in English diction 1700-1900:  
http://tedunderwood.wordpress.com/2011/03/17/a-selection-of-the-language-really-spoken-by-men/

<hr />
