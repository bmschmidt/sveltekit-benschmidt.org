---
title: 'Centennials, part II'
date: 2010-12-03T17:29:00.000-05:00
draft: false
url: /2010/12/centennials-part-ii.html
tags: 
- Historical memory
- Changes in language over time
- Data exploration and visualization
---

So I just looked at patterns of commemoration for a few famous anniversaries. This is, for some people, kind of interesting--how does the publishing industry focus in on certain figures to create news or resurgences of interest in them?  I love the way we get excited about the civil war sesquicentennial now, or the Darwin/Lincoln year last year.  
  
I was asking if this spike in mentions of Thoreau in 1917, is extraordinary or merely high.  

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TPkO8406WLI/AAAAAAAACPI/cp5F5oZPrRY/s1600/emerson+thoreau+hawthorne+alcott.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TPkO8406WLI/AAAAAAAACPI/cp5F5oZPrRY/s1600/emerson+thoreau+hawthorne+alcott.png)

Emerson (1903) doesn't seem to have much a spike--he's up in 1904 with everyone, although Hawthorne, whose centenary _is_ 1904, isn't up very much.  
  
Can we look at the centennial spikes for a lot of authors? Yes. The best way would be to use a biographical dictionary or wikipedia or something, but I can also just use the years built into some of my author metadata to get a rough list of authors born between 1730 and 1822, so they can have a centenary during my sample. A little grepping gets us down to thousand or so authors. Here are the ten with the most books, to check for reliability:  
  
  
  
  
  
1   Thackeray  1811               86  
4      Holmes  1809               52  
9      Darwin  1809               30  
10    Dickens  1812               30  
14   Whittier  1807               29  
15  Hawthorne  1804               28  
21    Spencer  1820               25  
22    Tyndall  1820               25  
23    Holland  1819               24  
26 Longfellow  1807               22  
  
  
So who has the biggest centenaries? The 'Percent' column is the percentage of all mentions of an author that occur in his or her (hello, Harriet Beecher Stowe!) centenary. I'm only applying this to the 200 most represented authors. So Thoreau is indeed remarkable in having 11% of his mentions in his centennial year. There are a lot of other big centennials in the 90s and aughts, and only one from the first half of our sample.  
  
  
  
     Percent       Author Birth Year  
1  12.305728     [Gieseler](http://en.wikipedia.org/wiki/Johann_Karl_Ludwig_Gieseler)       1792  
2  11.053941      Thoreau       1817  
3   7.580752    Thackeray       1811  
4   5.753147      [Colburn](http://all-biographies.com/scientists/warren_colburn.htm)       1793  
5   5.594953        Stowe       1811  
6   4.320671 [Woodhouselee](http://en.wikipedia.org/wiki/Alexander_Fraser_Tytler)       1747  
7   4.209995        [Lewes](http://en.wikipedia.org/wiki/George_Henry_Lewes)       1817  
8   3.640463      Dickens       1812  
9   3.634805      Emerson       1803  
10  3.533058      Haswell       1809  
  
  
  
  
Do the centenary scores increase as time goes on?  
  
  
\> cor(centenary.scores\[,3\],centenary.scores\[,1\])  
\[1\] 0.02625526  
  
Emphatically they do not. It's unusualto get a correlation score so close to zero on this kind of data. But that may just be because most authors don't get centenary celebrations, in which case most of their mentions were probably closer to when they were alive. Or for some, like Darwin, the centennial just doesn't matter compared to the other controversies that get kicked up around the name at other points in time.  
  
What if we did a different set of centennials: say, presidents? I can just pull their dates off wikipedia and sort the percentage of their mentions that come in the centenary year:  
  
  

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TPlsXxtnAGI/AAAAAAAACPo/og0k449CkZc/s1600/presidential+centenaries.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TPlsXxtnAGI/AAAAAAAACPo/og0k449CkZc/s1600/presidential+centenaries.png)

  
So any number below 1 means their centenary year had a below average number of mentions. I knew the Lincoln centenary was a big deal, but Fillmore? Who knew? A graphic like this could be good for teaching if we want to talk about, say, the eclipse of Grant, who gets a smaller boost than Hayes in 1922.  I could go on, but I think it's clear that there's _some_ interesting stuff about not just publishing practices, but maybe larger questions of reputation.  
  
For the record, there is a positive correlation here:  
  
  
\> cor(as.numeric(presidents\[,2\]),result)  
\[1\] 0.4922704  
  
  
But it's mostly driven by the lack of centenaries for the founding fathers, which I think is something else entirely.  
  
But enough of this stuff--after 19 hours of processing, I've finally got my database running in a new form, which should open up some new possibilities for comparing across discursive spheres.
---
### Comments:
#### This, from wikipedia, is one of the dumbest senten...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-03T17:33:52.206-05:00">Dec 5, 2010</time>

This, from wikipedia, is one of the dumbest sentences I've read: "The record for the fewest Presidential birthdays is one, shared by June and September."
<hr />
#### Two questions: 1. Was that Bronson or Louisa May i...
[Dan](https://www.blogger.com/profile/05217832960135325575 "noreply@blogger.com") - <time datetime="2010-12-04T11:58:45.006-05:00">Dec 6, 2010</time>

Two questions:  
1\. Was that Bronson or Louisa May in that graph?  
2\. Could you do a similar graph with some writers who weren't transcendentalists or Am. Renaissance stars? I'm interested in knowing if that big jump in the 1880s and beyond has to do with subject matter, reputation, or is partly an artifact of a large general jump in US publishing.
<hr />
#### Dan, It's just "Alcott", unfortunat...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-04T15:39:11.485-05:00">Dec 6, 2010</time>

Dan,  
  
It's just "Alcott", unfortunately--my system only works quickly on single words. I'm curious about all those things, too, but I'm not sure I'm going to chase it down right away. Most of the jump is generic, I think--Longfellow gets it too, and more importantly, Shakespeare gets an abbreviated version. Even John Bunyan, who pretty clearly peaks earlier, has a secondary peak around 1885. I said earlier I was working on a post about the pitfalls of loess and the transcendentalists--I'm just not sure how deep I want to go into differences between publishing houses, etc., particularly before I have genre information.  
  
As for whether it's a 'large general jump', the numbers are normed against all words published that year, so it's not just that there are more books--but there's probably some sort of change, maybe involving publishers printing books about writers more, and not just the 'primary sources.'  
  
A less interesting possibility is that it has to do with publishers putting the names of other books in their catalogs on the endpapers, which my program would parse. I know you see that a lot in the late 19C, but I don't know when it starts. That's a whole problem I've hardly thought about at all.
<hr />
#### Ben, If it's the last alternative (which is, ...
[Hank]( "noreply@blogger.com") - <time datetime="2010-12-05T10:35:28.167-05:00">Dec 0, 2010</time>

Ben,  
  
If it's the last alternative (which is, I agree, less interesting, at least for content analysis), is there some way to spin out of it to claims about different efforts by different houses to push their wares in different books?  
  
It's possible thoughts on that would have to wait for genre tags from you, but I just wondered if there were, in theory, some way to zoom out from an admission about a seemingly technical snafu to some analysis about commercial patterns in the publishing industry a la the last piece of Dan's second question...
<hr />
