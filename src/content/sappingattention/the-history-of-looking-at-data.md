---
title: 'The history of looking at data visualizations'
date: 2017-04-14T15:34:00.002-04:00
draft: false
url: /2017/04/the-history-of-looking-at-data.html
---

One of the interesting things about contemporary data visualization is that the field has a deep sense of its own history, but that "professional" historians haven't paid a great deal of attention to it yet. That's changing. I attended a conference at Columbia last weekend about the history of data visualization and data visualization as history. One of the most important strands that emerged was about the cultural conditions necessary to _read_ data visualization. Dancing around many mentions of the canonical figures in the history of datavis (Playfair, Tukey, Tufte) were questions about the underlying cognitive apparatus with which humans absorb data visualization. What makes the _designers_ of visualizations think that some forms of data visualization are better than others? Does that change?

There's an interesting paradox about what the history of data visualization shows. The standards for data visualization being good change seem to change over time. Preferred color schemes, preferred geometries, and standards about the use of things like ideograms change over time. But, although styles change, the justifications for styles are frequently cast in terms of science or objective rules. People don't say "pie charts are out this decade"; they say, "pie charts are objectively bad at displaying quantity."  A lot of the most exciting work in the computer science side of information visualization is now trying to make the field _finally_ scientific. It works to bring scientific research into perception from mere style, like the influential and frequently acerbic work of Tableau's [Robert Kosara;](http://kosara.net/publications/Kosara-BELIV-2016.html) or to precisely identify what a visualization is supposed to do (be memorable? promote understanding?) like the work of [Michelle Borkin](http://ieeexplore.ieee.org/document/7192646/?arnumber=7192646&tag=1), my colleague at Northeastern, so that the success of different elements can be measured.

I think basically everyone who's thought about it agrees that good data visualization is not simply art and not simply science, but the artful combination of both. To make a good data visualization you have to both be creative, and understand the basic perceptual limits on your viewer. So you might think that I'm just saying: the style changes, but the science of perception remains the same.

That's kind of true: but what's interesting about thinking _historically_ about data visualization is that the science itself changes over time, so that both what's stylistically desirable and what a visualization's audience has the cognitive capacity to apprehend changes over time. Studies of perception can tap into psychological constants, but they also invariable hit on cultural conditioning. People might be bad at judging angles in general, but if you want to depict a number that runs on a scale from 1 to 60, you'll get better results by using a clock face because most people spend a lot of time looking at analog clocks and can more or less instantly determine that a hand is pointing at the 45. (Maybe this example is dated by now. But that's precisely the point. These things change; old people may be better at judging clock angles than young people.)

This reminds me of the period I studied in my dissertation, the period in the 1921s-1950s when advertisers and psychologists attempted to measure the graphical properties of an attention-getting advertisement. Researchers worked to understand the rules of whether babies or beautiful drew more attention, whether the left or the right side of the page was more viewed; but whether a baby grabs attention depends as much on how many other babies are on the page as on how much the viewer loves to look at babies. The canniest copywriters did better following their instinct because they understood that the attention economy was always in flux, never in equilibrium.

So one of the most interesting historical (in some ways \_art-\_historical) questions here is: are the conditions of apprehension of data visualization changing? Crystal Lee gave a fascinating talk at the conference about the choices that Joseph Priestley made in his [chart of history](https://en.wikipedia.org/wiki/A_New_Chart_of_History); I often use in teaching [Joseph Priestley's description of his chart of biography](https://archive.org/details/adescriptionach00priegoog), which uses several pages to justify the idea of timeline. In the extensive explanation, you can clearly see Priestley pushing back at contemporaries who found the idea of time on the x-axis unclear, or odd to understand.

[![](https://4.bp.blogspot.com/-vaTRGMtt440/WO-Ss77fETI/AAAAAAAAISA/2xOvglslwX8rLKhAM-SkvauSKsmTcygPQCLcB/s320/Timelines.png)](https://4.bp.blogspot.com/-vaTRGMtt440/WO-Ss77fETI/AAAAAAAAISA/2xOvglslwX8rLKhAM-SkvauSKsmTcygPQCLcB/s1600/Timelines.png)

This seems obvious: so why did Priestley take [pages and pages](https://archive.org/details/adescriptionach00priegoog) to make the point?

That doesn't mean that "time-as-the-x-axis" was impossible for \*everyone\* to understand: after all, Priestley's timelines were sensations in the late 18th century. But there were _some_ people who clearly found it very difficult to wrap their heads around, in much the same way that--for instance--I find many people have a lot of trouble today with the idea that the line charts in Google Ngrams are insensitive to the number of books published in each year because they present a ratio rather than an absolute number. (Anyone reading this may have trouble themselves believing that this is hard to understand or would require more than a word of clarification. For many, it does.)

That is to say: data visualizations create the conditions for their own comprehension. Lauren Klein spoke about a particularly interesting case of this, Elizabeth Peabody's mid-19th century pedagogical visualizations of history, which depict each century as a square, divided into four more squares, each divided into 25 squares, and finally divided into 9 more for a total of 900 cells.

[![](https://2.bp.blogspot.com/-b3J2adg-tbo/WO-fXbMrySI/AAAAAAAAISQ/xuoKFyI0wbMM8aZsMyJBFawsSJd5J7gtgCLcB/s320/Peabody.png)](https://2.bp.blogspot.com/-b3J2adg-tbo/WO-fXbMrySI/AAAAAAAAISQ/xuoKFyI0wbMM8aZsMyJBFawsSJd5J7gtgCLcB/s1600/Peabody.png)

Peabody's grid, explanation: http://shapeofhistory.net/

There's an oddly numerological aspect to this division that draws it structures by the squares of the first three primes; Manan Ahmed suggested that it drew on a medieval manuscript tradition of magic squares.

[![](https://s-media-cache-ak0.pinimg.com/564x/be/ac/ff/beacff743e676cdcc372bf013b8ee377.jpg)](https://s-media-cache-ak0.pinimg.com/564x/be/ac/ff/beacff743e676cdcc372bf013b8ee377.jpg)

Old manuscript from [pinterest](https://www.pinterest.com/pin/386254105511650544/): I don't really know what this is. But wow, squares within squares!

Klein has created a fully interactive recreation of Peabody's visualization online [here](http://shapeofhistory.net/), with original sources. Her accompanying argument ([talk form here](http://lklein.com/2017/01/feminist-data-visualization-or-the-shape-of-history/)), which I think is correct, includes the idea that Peabody deliberately engineered a "difficult" data visualization because she wanted a form that would promote reflection and investment, _not_ something that would make structures immediately apparent without a lot of cognition.

Still, one of the things that emerged again and again in the talks was how little we know about how people _historically_ read data visualizations. Klein's archival work demonstrates that many students had no idea what to do with Peabody's visualizations; but there's an interesting open question about whether they were easier to understand then than they are now?

The standard narrative of data visualization, insofar as there is one, is of steadily increasing capacity as data visualizations forms become widespread. (The more scientific you are, I guess, the more you might also believe in _constant_ capacity to apprehend data visualizations.) Landmark visualizations, you might think, introduce new forms that expand our capacity to understand quantities spatially. [Michael Friendly's timeline of milestone visualizations,](http://www.datavis.ca/milestones/) which was occasionally referenced, lays out this idea fairly clearly; first we can read maps, then we learn to read timelines, then arbitrary coordinate charts, then boxplots; finally in the 90s and 00s we get treemaps and animated bubble charts, with every step expanding our ability to interpret. These techniques help expand understanding both for experts and, through popularizers (Playfair, Tufte, Rosling), the general public.

What that story misses are the capacities, practices, and cognitive abilities that were lost. (And the roads not taken, of course; but _lost_ practices seem particularly interesting).

So could Peabody's squares have made more sense in the 19th century? Ahmed's magic squares suggest that maybe they were. I was also struck by the similarity to a conceptual framing that some 19th-century Americans would have known well; the public land survey system that, just like Peabody's grid, divided its object (most of the new United States) into three nested series of squares.

[![](https://1.bp.blogspot.com/-QuvLuIGR8JM/WO-tH538LiI/AAAAAAAAISg/3vePx-2MhTU5hTXqq4C7WxrjkghOEYBPgCLcB/s320/plss.gif)](https://1.bp.blogspot.com/-QuvLuIGR8JM/WO-tH538LiI/AAAAAAAAISg/3vePx-2MhTU5hTXqq4C7WxrjkghOEYBPgCLcB/s1600/plss.gif)

Did Peabody's readers see her squares in terms of magic squares or public lands? It's very hard--though not impossible--to know. It's hard enough to get visualization creators nowadays to do end-user testing; to hope for archival evidence from the 19th century is a bridge too far.

But it's certainly possible to hope for evidence; and it doesn't seem crazy to me to suggest that the nested series of squares used to be a first-order visualization technique that people could understand well, that has since withered away to the point where the only related modern form is the rectangular treemap, which is not widely used and lacks the mystical regularity of the squares.

I'm emphatically _not_ saying that 'nested squares are a powerful visualization technique professionals should use more.' Unless your audience is a bunch of Sufi mystics just thawed out of a glacier in the Elburz mountains, you're probably better off with a bar chart. I am saying that maybe they used to be; that our intuitions about how much more natural a hierarchical tree are might be just as incorrect as our intuitions about whether left-to-right or right-to-left is the better direction to organize text.

From the data visualization science side, this stuff may be interesting because it helps provide an alternative slate of subjects for visualization research. Psychometry more generally knows it has a [problem with WEIRD (Western, educated, industrialized, rich and democratic) subjects.](http://www.apa.org/monitor/2010/05/weird.aspx) The data visualization literature has to grapple with the same problem; and since Tufte (at least) it's looked to its own history as a place to find the conditions of possible. If it's possible to change what people are good at reading, that both suggests that "hard" dataviz might be more important than "easy" dataviz, and that experiments may not run long enough (decades?) to tell if something works. (I haven't seen this stuff in the dataviz literature, but I also haven't gone looking for it. I suspect it must exist in the medical visualization literature, where there are wars about whether it's worthwhile to replace old colorschemes in, say, an MRI readout that are perceptually suboptimal but which individual doctors may be )

From the historical side, it suggests a lot of interesting alignments with the literature. The grid of the survey system or Peabody's maps is also the "grid" Foucault describes as constitutive of early modern theories of knowledge. The epistemologies of scientific image production in the 19th century are the subject of one of the most influential history of science books of the last decade, [Daston and Gallison's _Objectivity_](https://mitpress.mit.edu/books/objectivity). The intersections are rich and considerably more explored, from what I've seen well beyond history of science into fields like communications. I'd welcome any references here, too, particularly if they're not to the established, directly relevant field of the history of cartography. (Or the equally vast field of books Tony Grafton wrote.)

## That history of science perspective was well represented at Columbia, but an equally important discipline was mostly absent. These questions of aesthetics and reception in visualization feel to me a lot like art-historical questions; there's a useful analogy between understanding how a 19th century American read a population bump chart, and understanding how a thirteenth century Catholic read a stained glass window. But most of the people I know writing about visualization are exiles from studying either texts or numbers, not from art history. External excitement about the digital humanities tends to get too excited about interdisciplinarity between the humanities and sciences and not excited enough about bridging traditions inside the humanities; one of the most interesting areas in this field going forward may be bridging the newfound recognition of the significance of data visualization as a powerful form of political rhetoric and scientific debate with a richer vocabulary for talking about the history of reading images.

### Comments:

#### If you mention Playfair, you have to mention Night...

[Kaleberg](https://www.blogger.com/profile/05283840743310507878 'noreply@blogger.com') - <time datetime="2017-04-14T20:44:40.528-04:00">Apr 5, 2017</time>

If you mention Playfair, you have to mention Nightingale who was one of the first to use data visualization to push a political agenda.

<hr />
#### Yeah, Nightingale is interesting particularly beca...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2017-04-17T10:54:03.148-04:00">Apr 1, 2017</time>

Yeah, Nightingale is interesting particularly because the coxcomb plot is actually quite difficult to read, at least for modern-day college students. I'd be curious what Klein's take on it is.

Although I'd actually say that using data visualization to push a political agenda has almost always been part of the form; Guerry's choropleths predate Nightingale but have their own agenda. Visualizations of how big the national debt is usually carry a political implication; I've been curious, but enough to look, how much Playfair's debt visualizations represent some particular view of political economy.

<hr />
#### Although you won't find the term "data vi...
[Jamie ](https://www.blogger.com/profile/13542022273476075921) - <time datetime="2017-04-18T08:28:04.830-04:00">Apr 2, 2017</time>

Although you won't find the term "data visualization" anywhere in the literature, medievalists have been thinking about the cognitive practices that different kinds of images are supposed to activate or encourage for almost forty years now. Medieval theorists of imagery and cognition differentiated between "easy" and "hard" images and between amateur and advanced contemplative techniques, but it's also possible to say that in general, medieval data visualization was predicated on mnemonic and meditative practices that also needed to be learned. Mary Carruthers is the canonical figure here (esp. her Book of Memory and Craft of Thought), but I'd also recommend Lina Bolzoni's Web of Images for its attention to both hyper-literate and less-literate audiences. Art history and iconography are the other obvious places to go for thinking about images and cognitive practices: the work of Jeffery Hamburger and Stephen Murray are great starting places. And historians of liturgy also have good things to say about medieval "media culture" being consistently multi-sensory (so, apprehension of what you're seeing is also contingent on the music you're hearing etc.) — for this see especially Margo Fassler, e.g. her Virgin of Chartres.

<hr />
#### Some shameful self-promotion here, but my own book...
[Chris](https://www.blogger.com/profile/06918703988508764584) - <time datetime="2017-04-21T12:50:59.592-04:00">Apr 5, 2017</time>

Some shameful self-promotion here, but my own book "Apostles of Certainty: Data Journalism and the Politics of Doubt" tackles some of these questions directly through the lens of the history of American data journalism from the late 19th c until today. Should be out May 2018 from Oxford. I'm happy to share a Pre-review draft with interested folks.

Two additional things: adding journalism to the mix here is interesting because it, too, was largely political and concerned with advancing a political agenda in the US for most of its history. So there are interesting parallels to data viz as WELL as American sociology (which was also born political).

Two, I totally agree that one future here lies in drawing more deeply on the work of art historians and visual culture theorists. I'm hoping to do some of that work at my new job at University of Leeds, which has a very strong VizComm faculty.

Anyway good stuff Ben.

<hr />
