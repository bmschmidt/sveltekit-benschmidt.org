---
title: "Reading digital sources: a case study in ship's logs"
date: 2012-11-15T11:35:00.000-05:00
draft: false
url: /2012/11/reading-digital-sources-case-study-in.html
tags:
  - Ships
  - Whaling
---

\[Temporary note, March 2015: those arriving from reddit may also be interested in [this post](http://sappingattention.blogspot.com/2014/03/shipping-maps-and-how-states-see.html), which has a bit more about the specific image and a few more like it.\]

Digitization makes the most traditional forms of humanistic scholarship more necessary, not less. But the differences mean that we need to _reinvent,_ not _reaffirm,_ the way that historians do history.

This month, I've posted several different essays about ship's logs. These all grew out of a single post; so I want to wrap up the series with an introduction to the full set. The motivation for the series is that a medium-sized data set like Maury's 19th century logs (with 'merely' millions of points) lets us think through in microcosm the general problems of reading historical data. So I want in this post to walk through the various parts I've posted to date as a single essay in how we can use digital data for historical analysis.

The central conclusion is this: To do humanistic readings of digital data, we cannot rely on _either_ traditional humanistic competency or technical expertise from the sciences. This presents a challenge for the execution of research projects on digital sources: research-center driven models for digital humanistic resource, which are not uncommon, presume that traditional humanists can bring their interpretive skills to bear on sources presented by others.

[![](http://3.bp.blogspot.com/-rpKWf1ZEZxk/UKQmrPWdlDI/AAAAAAAADpE/Vx4qBM6pPYI/s640/MauryMetadata.png)](http://3.bp.blogspot.com/-rpKWf1ZEZxk/UKQmrPWdlDI/AAAAAAAADpE/Vx4qBM6pPYI/s1600/MauryMetadata.png)

All voyages from the ICOADS US Maury collection. Ships tracks in black, plotted on a white background, show the outlines of the continents and the predominant tracks on the trade winds.

We need to rejuvenate three traditional practices: first, a **source criticism** that explains what's in the data; second, a [**hermeneutics**](http://writinghistory.trincoll.edu/data/gibbs-owens-2012-spring/) that lets us read data into a meaningful form; and third, **situated argumentation** that ties the data in to live questions in their field.

Historians tend to view that third part, argumentation, as the heart of their creative endeavor. But the widespread availability of digital sources calls that priority into question. The outlines of historical argument tend to be quite constrained. Most anyone can slap together an argument that (to take a fictional event) bureaucratic continuity largely pre-determined the course of Rufus T. Firefly's administration; that Bob Roland's role in instigating the Sylvanian war has been underestimated; or that Gloria Teasdale creatively exploited traditional expectations of femininity to take on enormous power without explicitly challenging the status quo. The historian's real contribution is in assembling the evidence to make those claims convincingly, and knowing how to effectively read the sources so as not to be misled by all their biases.

In the past, historians held a safe monopoly over the first two stages that allowed them to develop uncontested expertise. But confronted with digital sources, their hold is much more tenuous. Facing a digital source base with primarily expertise in close reading and navigating traditional archives, we are--whether we admit it or not--largely disarmed. A historian whose access is mediated by an archivist tends to know how best to interpret her sources; one plugging at databases through dimly-understood methods has lost his claim to expertise.

Ship's logs can illustrate what it might mean to build this historical expertise on a digital source base. The sources I've been working with--[climatological records from the National Oceans and Atmospheric Administration](http://icoads.noaa.gov/)\--are obviously historically interesting and neglected. In addition to the Maury collection I've been examining, it contains extensive records of the US Navy in World War II, the Japanese merchant marine over much of the post-Meiji period, and millions of other records that show the commercial and military interconnections of the world at sea. They're problem is that they are essentially intractable to more traditional forms of historical analysis, while still significantly less complicated than the massive textual collections in which I (like most humanists) see the greatest potential for future research.

The first post offers that source criticism by means of a genealogy of the shipping data that we have. To use any sort of historical data, we must above all understand the constraints under which it was collected. In this case, that means [retelling the history of why and how the ship's logs were first collected, and how the constraints of digitization in the punch card era radically shape the sort of evidence we can draw from them](http://sappingattention.blogspot.com/2012/10/logbooks-and-long-history-of.html). The important thing about this sort of work is that it helps us understand the overall biases of a particular data set, which is crucial for limiting our interpretive leaps.

The Maury collection (and the full ICOADs set) presents a welter of conflicting visions. Humanists and scientists alike, trained in the language of survey research, tend to ask of data sets: "Is it a representative sample?" I doubt there is a single dataset of interest to historians that is. But while attempting to normalize away the biases in a sample is the best scientific solution to the problem, the humanistic approach is to understand a source _through_ its biases without expecting it to yield definitive results.

While this is the central goal of digital source criticism, it can be quite interesting in itself: that ship's records were digitized before computers existed (or more precisely, [when computers were women](https://muse.jhu.edu/journals/technology_and_culture/v040/40.3light.html)) ensures that we treat digitization not as the default fate of all historical objects but as the result of peculiar institutional choices. In histories based on large textual corpora, this requires trying to understand the changing acquisition and cataloging patterns of dozens of different libraries and their interactions with thousands of presses. With ships, at least, there are relatively few organizations whose imperatives we need to understand

A hermeneutics of data is harder than understanding the biases of its sources. I take the position that the best way to 'read' data is through visual representation. (At least, most forms of auditory representation or narrative description are far less good at allowing cyclical representation). A first, basic step is simply understanding what's contained in the data. Basic visualizations of ships moving over time ([which I developed in an earlier post, not in this series](http://sappingattention.blogspot.com/2012/04/visualizing-ocean-shipping.html)) allow strong insights into what's going on in the data, and are generative of new questions. One quickly notices in the seasonal plot of whaling patterns, for instance, massive migrations north and south each year that turn out to be whaling ships:

To move from this observation to the study of the whaling ships in particular requires integrating algorithmic techniques into the cycle of visualization. [I show how particular machine-learning algorithms can be used to extract subsamples of interest from the dataset, as well as give a view of its overall shape more interpretable than simply plotting them](http://sappingattention.blogspot.com/2012/11/machine-learning-on-high-seas.html).

Again, this carries implications for textual research. My preferred method here, a two level application of K-nearest neighbor classification based on a training set tagged by a number of origin ports, only began to work after an iterative searching through several techniques. In this sense, visualization on a corpus of _geographical_ data is easy. I was able to keep visualization rooted in a cycle of reading against maps where individual ships could be pulled out and checked against the full data, and where visual inspection could confirm algorithmic sorting to be 'working' or 'broken.' That led me to [worry over the uncritical acceptance of topic modeling in textual research](http://sappingattention.blogspot.com/2012/11/when-you-have-mallet-everything-looks.html). Topic models fail on whaler voyages in a way that would not be detected by most 'normal' users of topic models, since visualization for model fit is somewhere from elusive to impossible.

_\*Visualization to_ explore _the model is possible, but that's something quite different: traditionally, visualization is used to find patterns on raw data, and to confirm the fit of models. But topic models tend to be so complicated and specialized that we need visualization simply to understand what they're saying._

Technical competence, however, is insufficient. A hermeneutics of data also has to deal with the complications of working with these statistical aggregates at all. As I've argued before, digital history needs theoretical justifications for its reading of aggregate sources. I tried to give that in my post on [the benefits of writing digital histories that avoid telling the stories of individuals](http://sappingattention.blogspot.com/2012/11/where-are-individuals-in-data-driven.html). "Whaling" and "ship's voyages" are not nearly as complicated aggregates as the ones that digital history should really be investigating: things that we can investigate with texts like gender, academic disciplines, and generations. But even there, there is a case to be made for stories that conceive of aggregate systems rather than individual actors.

_\*At the same time, one of the benefits of working in a digital medium is that there's a ready avenue to share evidence that's outside. For instance, some of the ships most important to the plot of Moby-Dick happen to be in Maury's database: it's easy enough to break those maps out and show [the tracks of the Essex and the Acushnet](http://sappingattention.blogspot.com/2012/10/melville-plots.html)._

Finally, in the central piece in the series, I try to apply that hermeneutics and source criticism to argue how this interpretive framework allows us to recenter our interpretations of the place of shipping and extraction in the mid-19th century United States. This makes use of visualization again, but as a narrative technique rather than the heuristic role it played in data selection. [Narrating voyages through data visualization clarifies the unique role of the whaling industry in American shipping: it is both the primary industrial use of the sea (as opposed to commercial voyages that reach across it), and a self-exhausting process of resource depredation that gives an unlikely perspective on the movement patterns of early American capitalism](http://sappingattention.blogspot.com/2012/10/data-narratives-and-structural.html). The progressive depletion of whaling grounds drives the fleet farther and farther afield each year, expanding the reach of American voyagers.

This is a geographical reach has enormous consequences; one can see how and why the internal dynamics of whaling brought previously exotic lands including Japan and Alaska into the American sphere, while placing the Hawaiian islands at the center of a trans-pacific network. At the same time, thinking of the operation of the whaling system makes clear just how historically limited each of these interactions was: although the Sea of Japan was one of the hotbeds of whaling in the summers of 1848 and 1849, it was almost entirely abandoned by the time Matthew Perry's "Black Ships" arrived. Industrial depletion operates by a clearly evident logic, but one quite different from commercial interconnection. As historians, driven by contemporary politics, try to analogize from the well-trod grounds of the interlinked Atlantic World to a new Pacific one, we could do worse than to recognize the differences as well as the similarities.

\~~~~~~~~  
A couple due thanks: to [Dael Norwood](http://goosecommerce.wordpress.com/), through whom I've gotten most of my information about 19th century shipping history and who was explaining the importance of Maury's collecting practices before I knew there was Maury logbook data out there.

## And a plug for the [New Bedford Whaling Museum](http://www.whalingmuseum.org/), which does a great job curating the history of whaling through actual material culture. Which, I'll concede, has its advantages. The chronological sequence of increasingly inventive cruelty in the ["Harpoons and Whalecraft" exhibit in the Bourne Building](http://www.whalingmuseum.org/explore/exhibitions/current/harpoons-and-whalecraft) is something to behold.

### Comments:

####

[HurryUpToEnjoyLife](http://hurryuptoenjoylife.wordpress.com/ 'noreply@blogger.com') - <time datetime="2013-01-30T07:08:45.661-05:00">Jan 3, 2013</time>

This comment has been removed by a blog administrator.

<hr />
#### I'm simply amazed by the level of high technol...
[track forms](http://www.clicktale.com/product/form_analytics "noreply@blogger.com") - <time datetime="2013-03-14T05:40:49.160-04:00">Mar 4, 2013</time>

I'm simply amazed by the level of high technology we have reached. Your article is really interesting, probably a little too technical for me, but great information. Thanks.

<hr />
#### Thank you for a interesting post like this to unde...
[Unknown](https://www.blogger.com/profile/12814129778541530276 "noreply@blogger.com") - <time datetime="2013-05-13T13:08:59.248-04:00">May 1, 2013</time>

Thank you for a interesting post like this to understand the digitization. The presents a challenge for the execution of research projects on digital sources: research-center driven models for digital humanistic resource, which are not uncommon, presume that traditional humanists can bring their interpretive skills to bear on sources presented by others.

[Thesis for All](http://thesis4all.com)

<hr />
#### Thanks for a very interesting article... I wonder ...
[attention tracking](http://www.clicktale.com/products/heatmap-suite/attention-heatmaps "noreply@blogger.com") - <time datetime="2013-05-30T05:05:49.552-04:00">May 4, 2013</time>

Thanks for a very interesting article... I wonder how many future science academic works will come out of the massive new technologies we have to our disposition !

<hr />
#### It is really great to continue getting more resear...
[Mary](https://www.blogger.com/profile/14369328801499873607 "noreply@blogger.com") - <time datetime="2013-09-02T06:57:31.927-04:00">Sep 1, 2013</time>

It is really great to continue getting more research done to improve our current system.

[Mary, the History Writer](http://www.attractionacademy.com/article.php?story=20080209191047721)

<hr />
#### I enjoyed reading your articles. This is truly a g...
[Ahmmed](http://www.matemingler.com/ "noreply@blogger.com") - <time datetime="2013-09-19T01:29:59.353-04:00">Sep 4, 2013</time>

I enjoyed reading your articles. This is truly a great read for me. I have bookmarked it and I am looking forward to reading new articles. Matemingler is the number one dating site for singles seeking long-term relationships. Join for free to be matched with compatible singles.  
[number one dating websites](http://www.matemingler.com/)  
[number one free dating website](http://www.matemingler.com/)  
[dating](http://www.matemingler.com/)

<hr />
#### your article is very interesting.thanks for sharin...
[webexpert66](https://www.blogger.com/profile/08713596422905473588 "noreply@blogger.com") - <time datetime="2013-10-08T01:56:56.876-04:00">Oct 2, 2013</time>

your article is very interesting.thanks for sharing a very useful information.  
[HP0-Y46](http://www.cert4prep.com/HP0-Y46.html)

<hr />
#### Your blog is newly found to me and full of great w...
[Unknown](https://www.blogger.com/profile/08093547149839453921 "noreply@blogger.com") - <time datetime="2013-12-05T11:54:47.178-05:00">Dec 4, 2013</time>

Your blog is newly found to me and full of great work! I'd really love to get a high res version of the ICOADS US Maury collection black and white if you have it.

Keep up the cool work -- I've already started spreading the word.

<hr />
#### A very interesting read, and a beautiful black &am...
[Unknown](https://www.blogger.com/profile/09182480646513425043 "noreply@blogger.com") - <time datetime="2013-12-24T13:58:24.036-05:00">Dec 2, 2013</time>

A very interesting read, and a beautiful black & white image. Have you thought about offering prints of it? My father is a sailor and a scientist. He'd love the image and the context

<hr />
#### Love it. I don't suppose you could make a hi-...
[Dan Von Kohorn](https://www.blogger.com/profile/07363312321753544616 "noreply@blogger.com") - <time datetime="2013-12-24T18:17:11.788-05:00">Dec 2, 2013</time>

Love it. I don't suppose you could make a hi-res copy of the image available? I'd love to see it in more detail. Thanks for all this!!

<hr />
#### Good work. The historical project on World Whaling...
[Jesse Ausubel](http://phe.rockefeller.edu "noreply@blogger.com") - <time datetime="2013-12-29T11:03:47.527-05:00">Dec 0, 2013</time>

Good work. The historical project on World Whaling of the Census of Marine Life did a lot of this work in slightly earlier form and includes interpretation. See  
http://hmapcoml.org/projects/ww/  
and  
http://www.ploscollections.org/article/browse/issue/info%3Adoi%2F10.1371%2Fissue.pcol.v02.i10  
e.g.  
Spatial and Seasonal Distribution of American Whaling and Whales in the Age of Sail  
Tim D. Smith, Randall R. Reeves, Elizabeth A. Josephson, Judith N. Lund  
PLOS ONE: published 27 Apr 2012 | info:doi/10.1371/journal.pone.0034905  
Abstract • Figures

<hr />
#### Can we get a high resolution version of the Maurym...
[Anonymous]( "noreply@blogger.com") - <time datetime="2014-01-02T23:33:15.489-05:00">Jan 4, 2014</time>

Can we get a high resolution version of the Maurymetadata png? It's beautiful.

<hr />
#### I don't have exactly that file in high-rez, bu...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2014-01-03T10:33:31.872-05:00">Jan 5, 2014</time>

I don't have exactly that file in high-rez, but [here's a super-hi-rez one that also includes the CLIWOC database,](http://www.flickr.com/photos/10052187@N05) and a four-panel series taking it through to the present.

<hr />
#### Agreed. I'd buy the image if you offered it as...
[Mark Iliff](https://www.blogger.com/profile/02684530874049354667 "noreply@blogger.com") - <time datetime="2014-01-07T09:00:20.283-05:00">Jan 2, 2014</time>

Agreed. I'd buy the image if you offered it as a print

<hr />
#### (also posted on Unified Pop Theory article on same...
[Andrew Zolnai Blog](https://www.blogger.com/profile/14579698318895235779 "noreply@blogger.com") - <time datetime="2014-01-07T10:52:49.411-05:00">Jan 2, 2014</time>

(also posted on Unified Pop Theory article on same)  
This is a great dataset indeed! Let me point to the CLIWOC dataset gathered by EU program of British, Dutch, French and Spanish ships captains’ logs from 1750 – 1850 – I only mapped ships locations but it had also all the climatological data recorded then – I wonder if this data set has it too (must go look LOL).  
http://slidesha.re/KzTYTH  
http://youtu.be/2fnAlFJdruQ

<hr />
#### Yeah, I actually posted a bit about CLIWOC
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2014-01-07T12:14:59.648-05:00">Jan 2, 2014</time>

Yeah, I actually posted a bit about CLIWOC [here](http://sappingattention.blogspot.com/2012/04/visualizing-ocean-shipping.html).

<hr />
#### Cool. see my recent post there about mapping it in...
[Andrew Zolnai Blog](https://www.blogger.com/profile/14579698318895235779 "noreply@blogger.com") - <time datetime="2014-02-21T05:12:44.173-05:00">Feb 5, 2014</time>

Cool. see my recent post there about mapping it in Mapcentia's stack on my AWS

<hr />
#### I think the top image is not only jam-packed with ...
[Unknown](https://www.blogger.com/profile/01759690895133150352 "noreply@blogger.com") - <time datetime="2014-02-28T08:43:14.733-05:00">Feb 5, 2014</time>

I think the top image is not only jam-packed with information but it's also so beautiful! I'd love your permission to use it in a blopost on non-verbal communication. It's a perfect example of how 'dry' data can be represented wonderfully as a picture.

What do you think?

<hr />
#### This looks so great! It is so good to see you post...
[Roger M. Lloyd](https://www.blogger.com/profile/12665847304821581994 "noreply@blogger.com") - <time datetime="2014-07-12T02:01:12.050-04:00">Jul 6, 2014</time>

This looks so great! It is so good to see you posting again! Ok so I'm guessing you mean the next recipe is the pie that Florida is known for????? I'm sooooo excited for that one!!!  
[clipping paths](http://www.clippingpathcenter.com/clipping-path-service.php)

<hr />
#### Thanks for sharing such kind of nice and wonderful...
[amusement241](https://www.blogger.com/profile/06985415873967170818 "noreply@blogger.com") - <time datetime="2014-08-23T12:07:05.413-04:00">Aug 6, 2014</time>

Thanks for sharing such kind of nice and wonderful collection......Nice post Dude keep it up.  
I have appreciate with getting lot of good and reliable and legislative information with your post......  
[Builders Brisbane](http://brisbanebuildersandrenovators.com.au/)  
[Renovations brisbane](http://brisbanebuildersandrenovators.com.au/)

<hr />
#### This article just amazing feature. Thanks for shea...
[Unknown](https://www.blogger.com/profile/13920811944064769223 "noreply@blogger.com") - <time datetime="2014-10-28T23:56:34.589-04:00">Oct 2, 2014</time>

This article just amazing feature. Thanks for shearing.

<hr />
