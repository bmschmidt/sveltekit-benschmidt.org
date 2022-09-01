---
title: 'Visualizing Ocean Shipping'
date: 2012-04-09T22:58:00.000-04:00
draft: false
url: /2012/04/visualizing-ocean-shipping.html
---

I saw some historians talking on Twitter about a very nice data visualization of shipping routes in the 18th and 19th centuries on [Spatial Analysis](http://spatialanalysis.co.uk/2012/03/mapped-british-shipping-1750-1800/). (Which is a great blog--looking through their archives, I think I've seen every previous post linked from somewhere else before).

They make a basically static visualization. I wanted to see the ships in motion. Plus, Dael Norwood made some guesses about the increasing prominence of Pacific trade in the period that I would like to see confirmed. That got me interested with the ship data that they use, which consists of detailed logbooks that have been digitized for climatological purposes. On the more technical side, I have been fiddling a bit lately with ffmpeg and ggplot (two completely unrelated systems, despite what the names imply) to make animated visualizations, and wanted to put one up. And it's an interesting case; historical data was digitized for climatological purposes, which means visualization is going to be on of the easiest ways to think about whether it might be usable for historical demonstration or analysis, as well.

So here are two visualizations.

\[Update 11/12: [For more of this, see my discussion of _American_ shipping, and whaling in particular, from 1800 to 1860](http://sappingattention.blogspot.com/2012/10/data-narratives-and-structural.html).\]

The first one is long: it shows about 100 years of ship paths in the seas, as recorded in hundreds of ship's log books, by hand, one or several times a day. I haven't watched the whole thing at once, but skipping around gives a pretty good idea of the state of the database (if not world shipping) at any given moment.

**You can watch either of these in much higher resolution by clicking around here or on YouTube--I definitely recommend 720p.**

This shows mostly Spanish, Dutch, and English routes--they are surprisingly constant over the period (although some empires drop in and out of the record), but the individual voyages are fun. And there are some macro patterns--the move of British trade towards India, the effect of the American Revolution and the Napoleonic Wars, and so on.

The second has to do with seasonality: it compresses all those years onto a single span of January-December, to reveal seasonal patterns. I loop through a couple times so you can get a better sense, but the data is the same for each year.

There aren't many truly seasonal events, but a few stand out. There are regular summer voyages from Scotland to Hudson's Bay, and from Holland up towards Spitsbergen, for example: both these appear as huge convoys moving in sync. (What were those about?) Trips around Cape Horn, on the other hand, are extremely rare in July and August. More interestingly, the winds in the Arabian sea seem to shift directions in November or so. I also really like the way this one brings across the conveyor belt nature of trade with the East.

19th century ocean trade isn't exactly much my field, so I don't have much analytically to say about these. I'm hoping Dael might. I tend to generally think this source _won't_ be that useful to historians, because it's such a funny set of ship's logs--dictated by climatological needs, by EU priorities, and so on. But there may be certain questions.

• You get some individual voyages of interest. [The Battle of Saldanha Bay](http://en.wikipedia.org/wiki/Battle_of_Saldanha_Bay_%281796%29) (1796), when a contingent of Dutch ships sail south and engage with the British in August by the Cape, is clearly visible on the map; so is much of the *Resolution's route _on Captain Cook's second voyage (1772-1775) through the South Pacific, including its southernmost point. Some other events--the massive Spanish convoys in 1778 leaving from Peru, for example--I can't place as easily. The \_Beagle,* unfortunately,is not represented.

• This is nothing resembling either a comprehensive list of ships, or a random sample of the same. The world's seas, for example, were not actually entirely Dutch controlled in the mid-nineteenth century.

• The Pacific is, as I said, almost completely ignored in the records. Still, I'm amazed at how consistently the voyages end around Singapore/Batavia rather than proceed up to China and Japan. Dael's the expert on Pacific shipping, maybe he has something to say on this.

• Relatedly, so are the United States--possibly since this is biased towards naval vessels, and the US was mostly trading, possibly since this is an EU project. But French ships are almost as poorly represented.

A few more notes, though I think most things here are pretty self-explanatory. Each ship leaves a dimming trail behind it. I set them for four days long for the one-year visualization, and 180 days for the 100-year one. That lets one see more clearly, for example, that what appear to be two different trade routes on some maps are simply out-and-back on prevailing winds. On a long scale, this lets you see individual voyages; on a short one, predominant direction.

The basic code that got me started with the data [was posted by Einar in the comments on Spatial Analysis](http://spatialanalysis.co.uk/2012/03/mapped-british-shipping-1750-1800/). Logbooks aren't consistent, and so have to be massaged--I use ship and logbook names to separate voyages in the data, and don't connect any points separated by 60 days or 30 points of longitude/latitude. The basic idea for that is the same James Cheshire used for his maps on Spatial Analysis. The shapefiles for the continents are from [Natural Earth Data](http://www.naturalearthdata.com/).

You see a blink in the year charts at January 1st--that's a bug. You see another one at March 1: that's because 3/4 of all the ships disappear from the seas on February 29th every year. I just left that one in, because it's interesting.

Seasonality is a geographical phenomenon as well as a temporal one, so I positioned the month labels directly beneath the location of the sun at noon over Africa. This looks better to me than a time ticker, and captures the way the location of the sun enables greater sailing. I actually wanted to rhythmically deform the projection according to the position of the earth in space, but turned out to be a bad idea on a couple of counts. One of them is just how much the globe rocks back and forth--it's really kind of scary.

## I use Gilbert's two-world perspective for the plot, because it gives a nice view on the Atlantic and Indian oceans, while wreaking havoc on the Pacific--that maps nicely onto the data sets. I thought about something more elaborate--like the "Lotus" projection used to display the oceans in the 1954 Times Atlas--but my GIS skills are not quite there. (And neither, unfortunately, is the mapproj/ggplot2 combo in R--lots of split lines, confusions on the global level, and so forth. I've been hoping I might be able to give up on ArcGIS for the next map project I do and keep everything in R--I'm not convinced after this experience that it will be possible). In any case: my apologies to any New Zealanders or Hawaiians out there. You are gone, but not forgotten.

### Comments:

#### Very, very nice. These have all kinds of potential...

[Anonymous]("noreply@blogger.com") - <time datetime="2012-04-10T10:16:13.801-04:00">Apr 2, 2012</time>

Very, very nice. These have all kinds of potential uses, including (I would think) in teaching. A lot of courses about the 18th or 19th century Atlantic world could profit from this visualization.

<hr />
#### I just really wanted to see what this would look l...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T10:30:53.347-04:00">Apr 2, 2012</time>

I just really wanted to see what this would look like. Certainly something from logbooks could be very useful. (I think there have been a few other climate projects since this one, which was 2001-2003, I think; including a lot of British U-boats, which is interesting). I'm worried this data isn't good enough to represent anything as it is, since it seems so wildly un-representative--the whole Pacific is terra incognita in a way that shouldn't really be true. (Or maybe it is).

It can at least get certain things across (the importance of Capetown and Singapore).

<hr />
#### Beautiful. I suspect that the underlying dataset ...
[Tim Hitchcock](https://www.blogger.com/profile/17851547190864328027 "noreply@blogger.com") - <time datetime="2012-04-10T10:53:42.192-04:00">Apr 2, 2012</time>

Beautiful. I suspect that the underlying dataset is a real issue, but my udnerstanding is that there are a number of projects to add to it, that should help create something more comprehensive and useable (funded by climatology) and including all the British records. I love the seasonality of the Cod and Whaling fleets; and was surprised that the slave trade wasn't more apparent. And did I see a change to more direct routes as steam came on from the 1820s or 30s?

<hr />
#### Hi Ben, thanks for this -- it's fabulous to se...
[Margaret Schotte](https://www.blogger.com/profile/05628292855348162251 "noreply@blogger.com") - <time datetime="2012-04-10T10:57:34.227-04:00">Apr 2, 2012</time>

Hi Ben, thanks for this -- it's fabulous to see a graphic representation for a later sampling of the logs I've been working with!  
A few quick comments -- the VOC issued two different sets of instructions depending on the time of year their fleet was sailing to Java -- I'm going to see if I can pick that pattern out.  
Also, the national rate of survival of these logs seems to vary quite a bit. The French collected theirs assiduously, but having called up a few boxes of them this summer, there are a lot of 'fantomes' in the catalogues--so, a decent proportion of official voyages can't be in this database.  
The Dutch records are incomplete in different ways; you could check with Alex Bick, but I believe that most of the WIC material was 'deaccessioned' (they got rid of their archives in the ~19C?) so that would change the shape of their trade (for the previous century).  
More to come, but just wanted to chime in with my thanks!

<hr />
#### Great work. Does the data include packet mail ship...
[Chris Leeder](https://www.blogger.com/profile/00707015699196067228 "noreply@blogger.com") - <time datetime="2012-04-10T10:57:38.423-04:00">Apr 2, 2012</time>

Great work. Does the data include packet mail ships? I looked at the Spatial Analysis site but didn't see specific descriptions of what types of ships were covered.

<hr />
#### Hi Ben--this is a remarkable feat! Very very cool.
[Gautham Rao](https://www.blogger.com/profile/17463059166235601412 "noreply@blogger.com") - <time datetime="2012-04-10T11:30:22.941-04:00">Apr 2, 2012</time>

Hi Ben--this is a remarkable feat! Very very cool.

<hr />
#### I think the visualizations came out great, Ben! Bu...
[Dael](https://goosecommerce.wordpress.com/ "noreply@blogger.com") - <time datetime="2012-04-10T11:43:00.323-04:00">Apr 2, 2012</time>

I think the visualizations came out great, Ben! But the main thing I think better visualizations of the data has demonstrated is how limited the set is. To be sure, that's a very useful thing in and of itself....

Looking over what the climatological folks [say about their data](http://www.ucm.es/info/cliwoc/logbooks.htm) it seems like the logbooks are primarily derived from vessels out on state business of some kind -- in this period, that means exploring vessels, naval missions, and the operations of some of the big joint-stock companies (EIC, VOC, etc). So, as you noted, you get to see some movement because of wars (esp. the Brit dominance of the ocean during the AR/FR period). It sure is a neat way to see the effects of winter weather around the Capes, or the monsoons of the Indian ocean.

Perhaps unsurprisingly, what I'm shocked by is the nearly-complete absence of any representations of trade with China, the world's biggest economy for the bulk of this period under consideration. In pure numbers of European vessels Canton was not the most visited port, but still -- there were tons of ships going there! Including official (or at least East India Co.) voyages! And this is not even considering the question of the absolutely huge amount of intra-Asian shipping going on (esp. India-China in this period). So the Singapore/Batavia wall makes no sense whatsoever except as an artifact of the data set (not least because only about 1,000 people living in Singapore before the 1820s; it was made an important port by British imperialism).

This weirdness is replicated in the analysis presented in the CLIWOC's [own trade route map](http://www.ucm.es/info/cliwoc/routes.htm), which shows a thin route that bypasses Canton and Shanghai en route to Japan. I don't want to read too much into a map with a spelling error in the title – this was clearly an informal effort – but almost nothing about the map is correct. This is, I think, what happens when you trust your data collection too much.

Makes me a bit sad, really; I had a lot of questions about shipping density, periodization, etc. that this kind of thing could've answered if it were more representative.

All that said, I think you and Erian have incontroveribly demonstrated how useful these kinds of visualizations can be – as much in terms of provoking questions as providing alternate ways of understanding the data. Now all we need is a GoogleLogBooks to start running queries on...

<hr />
#### This is great! As someone who teaches and writes a...
[Evan Gottlieb]( "noreply@blogger.com") - <time datetime="2012-04-10T12:06:07.026-04:00">Apr 2, 2012</time>

This is great! As someone who teaches and writes about the increasingly globalized worldview of the British Romantics (1770-1830), this is incredibly useful for me. Thank you!

<hr />
#### If climatology could get us something comprehensiv...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T12:20:34.087-04:00">Apr 2, 2012</time>

If climatology could get us something comprehensive on the British navy, that would produce some amazing stuff to work with. You can already see here some naval blockades, shifting priorities, and so on. Piggybacking on the climatological needs seems like a great opportunity, since the extent and activities of European navies and merchant marines is a really live historiographical question.

Are those Hudson's Bay/Spitsbergen voyages cod and whaling? I couldn't figure out what they were doing myself. Would there have been naval escorts sent along with shipping fleets ever? I suspect there are few if any slave ships in here. Maybe they are packet ships, as Chris suggests below.

<hr />
#### Hi Margaret! Let me know if there's any more s...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T12:26:16.925-04:00">Apr 2, 2012</time>

Hi Margaret! Let me know if there's any more specific breakouts you'd like to see--the data does include destinations, so I could plot just Dutch ships going to Batavia, say.

Has anyone digitized earlier logs? I assume it's very hard to get this resolution on longitude without working chronometers, which is right at the beginning of the period here?

Dutch shipping certainly looks the most complete here, but that's possibly just because I know of English voyages that aren't represented--do you think there are any substantial Dutch/VOC routes that should appear but don't?

<hr />
#### It's hard to tell--the data just gives ship na...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T12:27:40.944-04:00">Apr 2, 2012</time>

It's hard to tell--the data just gives ship names and nationalities, and I don't know quite well enough to tell more than that. I should post a little bit of this somewhere, and maybe one of the experts (Dael or Margaret?) can give some sense of what archives these are coming from.

<hr />
#### Thanks for that, it's good to know. Do you thi...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T12:34:35.000-04:00">Apr 2, 2012</time>

Thanks for that, it's good to know. Do you think there might be [VOC](http://en.wikipedia.org/wiki/Dutch_East_India_Company) but not British East India Company ships in the database, possibly? I was surprised how (relatively) few ships there were going to India, as well, compared to the number heading towards Malacca.

Do you think that this Atlantic/Indian ocean bias is accurate for European imperial navies in the period? That seems plausible.

There might be an interesting opportunity here, even: the climatologists clearly need more Pacific data to make up for the easy availability of Atlantic stuff, but they're consistently poking around in the naval archives--but maybe they should be looking at merchant marine logs instead, which do make it to Canton and tend to be located in different archives and more diffuse. There should be some way to redirect NOAA money to history grad students at the Peabody-Essex museum, or wherever.

<hr />
#### Well, the VOC went bankrupt in 1798, so its over-r...
[Dael](http://goosecommerce.wordpress.com "noreply@blogger.com") - <time datetime="2012-04-10T12:49:19.891-04:00">Apr 2, 2012</time>

Well, the VOC went bankrupt in 1798, so its over-representation in the later period is unlikely -- though there might have been a successor company, I don't know. The EIC records may have the same problems Margaret identified for the WIC; there were fires and a waste-paper sale at one point. But at the very least you should see a yearly flotilla of British ships coming out of India, as a convoy.

I'm not convinced that the Atlantic bias is accurate for Euro navies, or at least not to that extent. The Brits, for example, blockaded Asian ports during the Napoleonic wars, and sent a big invasion force to China in the late 1830s. The absence of this latter invasion is especially notable, I think, because my understanding is the ships in it came mainly from India -- so this database is not only missing a massive amount of shipping activity in Asia (and to a lesser extent, the Pacific in the 19th-c), but also a significant portion of European forces, because they were based in Asia.

Agreed that the climatologists clearly need more Pacific data, and that they're likely missing a lot because they aren't looking at "private" voyages -- though with the caveat that that shouldn't matter, really, until the mid-19th century (bc the EIC was active in a significant way until 1833). I'm not even sure that it's an archival problem, though; navies follow trade routes, after all (this is doubly true of the American navy, which couldn't navigate its way out of a paper bag without merchant help). My guess is that they just haven't yet gotten to the "East India squadron" files.

Not that I would say no to a grant proposal using stuff at Salem, of course...

<hr />
#### Do navies really follow trade routes, or do they j...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T15:47:21.255-04:00">Apr 2, 2012</time>

Do navies really follow trade routes, or do they just shuttle between naval stations? The second most common destination in the files is Spithead--do EIC ships go there, or just the royal navy?

I wonder about convoys. You see quite a few in the Spanish records, but only one or two for anyone else.

For reference, here are the most common places in the database:

Nationality place Freq  
806 Dutch Batavia 737  
585 British Spithead 378  
763 Dutch 313  
1428 Spanish LA HABANA 284  
1022 Dutch Nederland 251  
1427 Spanish LA CORUÑA 248  
1171 Dutch Suriname 214  
1378 Spanish CÁDIZ 213  
1436 Spanish La Coruña 205  
1097 Dutch Rotterdam 202  
1455 Spanish Montevideo 202  
872 Dutch Curacao 187  
1031 Dutch Nieuwediep 185  
608 British St Helena 178  
935 Dutch Hellevoetsluis 166  
1186 Dutch Texel 160  
375 British Madras 151  
676 British Table Bay 147  
465 British Plymouth 146  
372 British Madeira 117

<hr />
#### Wow, those initial numbers are going to be confusi...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-10T15:48:31.013-04:00">Apr 2, 2012</time>

Wow, those initial numbers are going to be confusing, huh? Here's without.

Nationality place Freq  
1 Dutch Batavia 737  
2 British Spithead 378  
3 Dutch 313  
4 Spanish LA HABANA 284  
5 Dutch Nederland 251  
6 Spanish LA CORUÑA 248  
7 Dutch Suriname 214  
8 Spanish CÁDIZ 213  
9 Spanish La Coruña 205  
10 Dutch Rotterdam 202  
11 Spanish Montevideo 202  
12 Dutch Curacao 187  
13 Dutch Nieuwediep 185  
14 British St Helena 178  
15 Dutch Hellevoetsluis 166  
16 Dutch Texel 160  
17 British Madras 151  
18 British Table Bay 147  
19 British Plymouth 146  
20 British Madeira 117

<hr />
#### Hi again -- I'm crunched for time this week, b...
[Margaret Schotte](https://www.blogger.com/profile/05628292855348162251 "noreply@blogger.com") - <time datetime="2012-04-10T16:45:35.165-04:00">Apr 2, 2012</time>

Hi again -- I'm crunched for time this week, but am finding your discussion w Dael fascinating.  
I am only aware of the data set you linked to, but the Dutch historian A.R.T. Jonkers processed a huge number of international logs for his dissertation on magnetic variation --that was mostly 17th/early 18th if I remember correctly. He's very into computer analysis, so I wonder if that might be available somehow?  
You'd still get longitude data prior to Harrison/the lunar method, but evidently it was so distorted that retrospectively plotting a voyage to NYC often made the vessel appear to have hit land somewhere as far west as Philly...

<hr />
#### Hi Ben. Great work. I have bus data that I have be...
[Andrew Landgraf](https://www.blogger.com/profile/16603453765851716066 "noreply@blogger.com") - <time datetime="2012-04-11T20:42:54.332-04:00">Apr 3, 2012</time>

Hi Ben. Great work. I have bus data that I have been trying to do something similar with. Right now, I just plot 10 points to represent the bus moving. I like how your animation uses a line that fades for this purpose. Can you share the code you used for this visualization?  
Much appreciated.

<hr />
#### Andrew--here's the basic code used for the plo...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-12T14:33:52.265-04:00">Apr 4, 2012</time>

Andrew--here's the basic code used for the plots (will put up the code if I can clean it): the variable 'timelag' sets the time, and by setting alpha in ggplot to (timevar-mytime)/timelag, you get a gradient from 1 to 0 that's stronger the closer it is to the present.

#This can be used for either type of plot--it's agnostic about the time variable going, and the lag can be set.  
mapPlot = function(myframe=useful,mytime=654100,timelag=34,timevar="time",...) {  
#I define half the plot here, and half later. No real reason. This is why I don't usually share that much code.  
myframe$timevar=get(timevar,myframe)  
myframe=myframe\[myframe$timevar>=(mytime-timelag) & myframe$timevar<=mytime,\]  
if (timevar=="time") {myframe$group = myframe$voyageID}  
if (timevar=="yearday") {myframe$group = paste(myframe$voyageID,myframe$Year)}  
ggplot(myframe,  
aes(y=Lat,x=Long))+  
geom_polygon(data=world,aes(x=x,y=y,group=id),drop=T)+  
geom_path(size=.5,  
aes(group=group,  
#This alpha here decaying by time is what makes the trails slowly erase.  
alpha=(timevar-mytime)/timelag,color=color))+  
scale_color_identity() +  
geom_point(data=myframe\[myframe$timevar==mytime,\],size=.75,  
aes(group=voyageID,alpha=(timevar-mytime)/timelag,  
color=color)) +  
ylab("")+xlab("") +  
opts(legend.position = "none",axis.text.x=theme_blank(),  
axis.text.y=theme_blank(),axis.ticks=theme_blank()) +  
coord_map(...)  
}

<hr />
#### I love love love these pieces! As a singer of 18t...
[Marc Bridgham](https://www.blogger.com/profile/11967290785187011752 "noreply@blogger.com") - <time datetime="2012-04-14T13:27:38.751-04:00">Apr 6, 2012</time>

I love love love these pieces! As a singer of 18th and 19th century maritime songs I want this up on a big screen behind me at concerts!

<hr />
#### I tried to get some of the direction information t...
[unconsenting](http://unconsenting.wordpress.com/ "noreply@blogger.com") - <time datetime="2012-04-15T10:52:12.396-04:00">Apr 0, 2012</time>

I tried to get some of the direction information that your movies contain into a static plot via use of colour. See http://unconsenting.wordpress.com/2012/04/01/shipping-1750-1855-visualised/.

<hr />
#### Hi Ben, (a) This is awesome -- a clever idea and ...
[Rob Hunter](https://www.blogger.com/profile/11938208338425846250 "noreply@blogger.com") - <time datetime="2012-04-16T08:05:01.858-04:00">Apr 1, 2012</time>

Hi Ben,

(a) This is awesome -- a clever idea and well-executed.

(b) Thought you'd like to know you've been MetaFilter'd: http://www.metafilter.com/114927/100-years-of-ocean-travel-1750-to-1850

Rob

<hr />
#### Hey man, great job! As a brazilian I am just curio...
[Eduardo Rodrigues](https://www.blogger.com/profile/16268067832954063766 "noreply@blogger.com") - <time datetime="2012-04-16T14:27:42.541-04:00">Apr 1, 2012</time>

Hey man, great job! As a brazilian I am just curious on why isn't there a portuguese line, since they were pioneers and had some importance on those days. Is it because you have no records on those ships? I believe portuguese data would have a great impact on the sailing routes from Africa to America, right?

<hr />
#### With this one I can help you: "from Holland u...
[Martin Steffens](https://www.blogger.com/profile/01536293121477409035 "noreply@blogger.com") - <time datetime="2012-04-16T14:37:09.071-04:00">Apr 1, 2012</time>

With this one I can help you: "from Holland up towards Spitsbergen, for example: both these appear as huge convoys moving in sync."  
That would be the whaling fleets travelling up there every year until the bases there were abandoned in the late 18th century.

Also the expansion of Dutch trade to Indonesia happened after the Dutch republic/monarchy took over the possessions of the VOC (East India Company) and expanded them from a number of trade posts on the isle of Java into a full blown colony covering what's currently Indonesia.

You're missing the one to two Dutch ships which were allowed to trade with Japan via Deshima as well. They'd have been VOC until around 1800, hidden under different flags during the Napoleonic wars and then resumed in limited numbers again until Perry opened up trade with Japan forcefully.

<hr />
#### Hey! I swear I could see the Surprise circling ar...
[Todd](https://www.blogger.com/profile/05568106082557405230 "noreply@blogger.com") - <time datetime="2012-04-16T15:18:05.115-04:00">Apr 1, 2012</time>

Hey! I swear I could see the Surprise circling around pick up poor 'ol stranded Dr. Maturin!

Great idea. Thanks.

<hr />
#### The Hudson Bay are probably fur, the bay is only n...
[Anonymous]( "noreply@blogger.com") - <time datetime="2012-04-16T20:03:17.950-04:00">Apr 1, 2012</time>

The Hudson Bay are probably fur, the bay is only navigable in summer, and HBC was in the trade within my memory.

raymond larsson

<hr />
#### Ben, I saw this from the link through Wonkblog. ...
[Joseph Younger](https://www.blogger.com/profile/12541207819017646530 "noreply@blogger.com") - <time datetime="2012-04-17T15:32:27.972-04:00">Apr 2, 2012</time>

Ben,

I saw this from the link through Wonkblog. Great to see all of your work getting out into the mainstream!

Joseph

<hr />
#### Very cool. I like the
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-17T16:28:55.186-04:00">Apr 2, 2012</time>

Very cool. I like the [movie cartogram](http://unconsenting.wordpress.com/2012/04/16/films-making-around-the-world/) you just put up, too--I didn't realize someone had ported the Gastner-Newman code into R, I'll have to play around with it when I get a chance.

<hr />
#### Particularly in the early (pre-Napoleon) part, you...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-17T16:31:22.848-04:00">Apr 2, 2012</time>

Particularly in the early (pre-Napoleon) part, you're right that the Portuguese data would definitely add something. As with French shipping, I'm not exactly sure why so little was included--I suspect it has to do with preservation practices, and maybe the agencies that did the digitization as well.

<hr />
#### Interesting. Now that you mention it, I remember s...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-17T16:37:20.158-04:00">Apr 2, 2012</time>

Interesting. Now that you mention it, I remember seeing some old Dutch prints at the [New Bedford whaling museum](http://www.whalingmuseum.org/upcoming/nexhibit.html), but I generally don't know anything about whaling before the Moby-Dick period.

It's interesting that historians know these ships in the Pacific are out there, but they're missing from the climatological databases. Maybe it's not at a greater rate than we're missing the Atlantic voyages (and it's certainly at a _lesser_ rate than we're missing the Mediterranean), but just for climate coverage, you wonder if there's some way to leverage the knowledge into data for everyone.

<hr />
#### This is really cool. Semi-related question: which ...
[drewblaisdell](https://www.blogger.com/profile/01871806647032110360 "noreply@blogger.com") - <time datetime="2012-04-17T23:34:43.545-04:00">Apr 2, 2012</time>

This is really cool. Semi-related question: which program did you use to create this visualization? Adobe After Effects?

<hr />
#### bad work. Where is the Portuguese ships? the count...
[Anonymous]( "noreply@blogger.com") - <time datetime="2012-04-18T09:59:09.099-04:00">Apr 3, 2012</time>

bad work. Where is the Portuguese ships? the country who found america, brasil, africa, japon?????????

<hr />
#### This is terrific, and I definitely want to show th...
[Atlantic Literature](http://atlanticliterature.blogspot.com/ "noreply@blogger.com") - <time datetime="2012-04-18T11:39:33.096-04:00">Apr 3, 2012</time>

This is terrific, and I definitely want to show this to my students in my Atlantic Literature class.

I have two questions. The lines on your map are color-coded by nationality. Would it be possible to in some way represent the commodities and/or primary role of the ship? It might be interesting to see how certain commodity trades -- e.g., slaves, tobacco, sugar, cotton, etc. -- were seasonal and interconnected.

I'm also wondering how many of those ships were commercial and how many non-commercial (military or whatever.)

Thanks for doing this!

<hr />
#### Just to be clearer on the question of why the Port...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-18T11:45:39.254-04:00">Apr 3, 2012</time>

Just to be clearer on the question of why the Portuguese is not in here--this particular EU log digitization project seems to not have included any Portuguese logs; I'm not exactly sure why.

<hr />
#### See what I said to Eduardo above. I'm sort of ...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-18T11:47:20.046-04:00">Apr 3, 2012</time>

See what I said to Eduardo above. I'm sort of interested that more people are interested in the Portuguese data than the French (or the American, for that matter), which a similarly huge omission. Since the Portuguese do have wide coverage, they'd be a great addition to the literature.

<hr />
#### Yeah, wouldn't it something if we could actual...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-18T11:53:08.032-04:00">Apr 3, 2012</time>

Yeah, wouldn't it something if we could actually show the triangle trade changing colors by commodity? Since this stuff was digitized for climate purposes, though, none of that stuff made it into the digital versions of the logbooks. That's not to say it isn't out there somewhere--some sort of crowd-sourcing effort or grant funding might be able to pull the historical context back onto these ships. (Aside from what I show here, the data also frequently includes ship names and origin/departure ports, but nothing else).

I'm probably not actually the person to guess, but I suspect that a high percentage of these are national ships--either naval or monopolistic companies--since those tend to be the easiest ships to get at the logs of. But I think Dael, Tim, and Margaret above all have a much better handle on this than I do.

<hr />
#### All free software--the ggplot2 package in R to mak...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-04-18T11:54:46.766-04:00">Apr 3, 2012</time>

All free software--the ggplot2 package in R to make a few hundred png files, and then ffmpeg to stitch them together into a single movie. There's probably an easier way to do this, but just setting it up as a batch job and running took a couple hours that I didn't have to be there for.

<hr />
#### Definitely fur -- there's a big collection of ...
[nick s]( "noreply@blogger.com") - <time datetime="2012-04-18T14:02:19.088-04:00">Apr 3, 2012</time>

Definitely fur -- there's a big collection of HBC and First Nations' artefacts in Scotland, with Aberdeen as the Scottish shipping hub, and many HBC recruits came from the Orkneys.

http://www.abdn.ac.uk/materialhistories/collections.php

As others have mentioned, the data's sketchy, but I love how it illustrates the connectedness of port cities an ocean apart, which often had more in common than those cities and settlements a dozen miles inland.

<hr />
#### I was wondering the same thing about how a Portugu...
[Benjamin Breen](https://www.blogger.com/profile/11900877607660032582 "noreply@blogger.com") - <time datetime="2012-04-23T10:46:33.865-04:00">Apr 1, 2012</time>

I was wondering the same thing about how a Portuguese map of this would look. I've been working in the Lisbon archives this year and I would assume that the data is available. My project timeframe ends at 1750 so I haven't looked at anything after then, but there is definitely a ton of shipping data for Brazil, Angola and the Indies before that, and that's even with factoring in all the archival sources that got destroyed in the Lisbon earthquake.

Searching the slave trade database (http://www.slavevoyages.org/tast/database/search.faces) turned up 11,426 Portuguese slaving voyages that are recorded between 1514 and 1866. I wonder if those can be visualized in a similar way.

<hr />
#### A color-coded visualization by commodity is a grea...
[Benjamin Breen](https://www.blogger.com/profile/11900877607660032582 "noreply@blogger.com") - <time datetime="2012-04-23T11:00:32.634-04:00">Apr 1, 2012</time>

A color-coded visualization by commodity is a great idea. My sense is that it would indeed be possible to do something like that (albeit with a much smaller set of available data) for the eighteenth century Atlantic world. I suspect it'd be quite worthwhile because it would likely show that the textbook depiction of the triangle trade is a bit of an oversimplification of a very complex set of trade routes.

Just wanted to add that I've greatly enjoyed reading the comments to this post! I'm excited to see how this sort of research progresses in the next few years, and hope to do something similar myself. (I'm working on a GIS map of the circulation of various early modern medicinal drugs in the Atlantic world).

<hr />
#### Spitzbergen was whaling and also walruses and seal...
[Jeremy](https://www.blogger.com/profile/04639265958695262241 "noreply@blogger.com") - <time datetime="2012-04-24T04:19:57.668-04:00">Apr 2, 2012</time>

Spitzbergen was whaling and also walruses and seals for fur and blubber. Wonderful vizualization.

<hr />
#### See also: More on time-based GIS http://bit.ly/iZI...
[Andrew Zolnai Blog](https://www.blogger.com/profile/14579698318895235779 "noreply@blogger.com") - <time datetime="2012-04-24T12:37:07.703-04:00">Apr 2, 2012</time>

See also: More on time-based GIS http://bit.ly/iZIAhT

In particular, my comments on Capt. Cook's missing voyages and what happened to the data?

<hr />
#### The HALF of the traffic if left out: The Pacific o...
[Ferran](https://www.blogger.com/profile/03341400161327663942 "noreply@blogger.com") - <time datetime="2012-04-26T15:12:48.826-04:00">Apr 4, 2012</time>

The HALF of the traffic if left out: The Pacific of Spain are out.

Just for the record: The Manila-Acapulco (with their route taking them south of the Hawaiian Islands) Galleon Trade begin in 1565 with the discovery of the ocean passage by Andrés de Urdaneta, and continued until 1815. Two and a half centurys, the most large in time (and one of the most large in space) Ocean Shipping rout of the history.

<hr />
#### Thank you. It helped me very much. How long did it...
[Andrew Landgraf](https://www.blogger.com/profile/16603453765851716066 "noreply@blogger.com") - <time datetime="2012-05-23T11:05:43.359-04:00">May 3, 2012</time>

Thank you. It helped me very much. How long did it take you to create all the plots? For me, it takes a couple of seconds per image.

<hr />
#### A couple seconds sounds maybe a little wrong, but ...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-05-23T14:02:47.087-04:00">May 3, 2012</time>

A couple seconds sounds maybe a little wrong, but in the right ballpark--once I had the code set up, I just started the process running before I went to bed.

<hr />
#### Thanks a lot Ben, your job will help to visualize ...
[Mestre](http://www.culturamaritima.org "noreply@blogger.com") - <time datetime="2013-02-12T16:03:17.672-05:00">Feb 2, 2013</time>

Thanks a lot Ben, your job will help to visualize the maritime history of Galicia (Spain), Corunna is here, and most of the traffic from and to Corunna was originated by "Correos marítimos" something like "Royal Maritime Mail". We've made a post (on galician) about this on our site (http://www.culturamaritima.org/node/17754)

<hr />
#### Wow, this is really cool. I really appreciated the...
[Unknown](https://www.blogger.com/profile/13020897545489499630 "noreply@blogger.com") - <time datetime="2013-02-20T17:38:51.954-05:00">Feb 3, 2013</time>

Wow, this is really cool. I really appreciated the visuals, that was awesome. I'm into [shipping in Ontario](http://www.shipmts.com), but it was really interesting to see it on a global scale. So thanks for sharing!

<hr />
#### Thanks for sharing this information. I feel like t...
[Unknown](https://www.blogger.com/profile/03974191363407903211 "noreply@blogger.com") - <time datetime="2013-03-18T10:44:02.036-04:00">Mar 1, 2013</time>

Thanks for sharing this information. I feel like the [shipping](http://www.shipmts.com) methods around the world have changed dramatically. In Ontario, they have some very cool options. Keep up the great work!

<hr />
#### I tried something similar 3 years ago, and founder...
[John Bray]( "noreply@blogger.com") - <time datetime="2013-03-24T07:00:44.294-04:00">Mar 0, 2013</time>

I tried something similar 3 years ago, and foundered in the details, so its great to see you do it so well. I was looking for concentrations of ships at major battles, and perhaps try and sneak in the voyages of Hornblower and Maturin into the mix...

<hr />
#### This is very interesting. Thank you for sharing th...
[Unknown](https://www.blogger.com/profile/10609152449834781153 "noreply@blogger.com") - <time datetime="2013-04-15T20:30:49.991-04:00">Apr 1, 2013</time>

This is very interesting. Thank you for sharing this information about [shipping(ontario)](http://www.shipmts.com). I learned a lot.

<hr />
#### Hii Thanks for great information you write it ...
[Freight Transporters](http://www.freightguru.com/A/freight-transporters.html "noreply@blogger.com") - <time datetime="2013-05-27T08:20:30.454-04:00">May 1, 2013</time>

Hii  
Thanks for great information you write it very clean. I am very lucky to get this tips from you

<hr />
#### Just want to say your article is as amazing. The c...
[Unknown](https://www.blogger.com/profile/07354788952144883134 "noreply@blogger.com") - <time datetime="2013-06-23T11:15:10.714-04:00">Jun 0, 2013</time>

Just want to say your article is as amazing. The clearness in your post is Just nice and i could assume you are an expert on this subject. Fine with your permission let me to grab your feed to keep up to date with forthcoming post. Thanks a million and please keep up the gratifying work.

[cargo services in ajman](http://www.bs-cargo.com)  
[cargo services in Sharjah](http://www.bs-cargo.com)

<hr />
#### The
[Popal Media and Animation](https://www.blogger.com/profile/08132019518120801943 "noreply@blogger.com") - <time datetime="2013-07-07T10:06:11.184-04:00">Jul 0, 2013</time>

The [**animation studio in dubai**](http://popalmedia.com/about/) business is very dynamic and is evolving with every single day. The way consumers interact with services and brands have changed.

<hr />
#### True shipping are dependent on true buisness:-
[Anonymous]( "noreply@blogger.com") - <time datetime="2013-07-24T07:39:17.370-04:00">Jul 3, 2013</time>

True shipping are dependent on true buisness:-[Freight audit](http://www.freightaudit.com) is the evaluation of the bills sent forth to the companies that are using your services. [Freight bill auditing](http://www.freightaudit.com) is now-a-days done mainly through outsourcing which requires you to only give them the details of the transaction and the rest is done by them. [Ocean freight](http://www.freightaudit.com) is being widely used as it is the simplest though [ocean freight rates](http://www.freightaudit.com) are very unpredictable in nature.

<hr />
#### If you can't found or have any problem on ship...
[Unknown](https://www.blogger.com/profile/03809489994973391852 "noreply@blogger.com") - <time datetime="2013-08-13T18:59:53.771-04:00">Aug 2, 2013</time>

If you can't found or have any problem on shipping services try to open and visit this site [freight forwarding services](http://www.waledshipping.com/), this page is really great on giving info and full services that could satisfy the customer. Thanks!

<hr />
#### It is rather important to know the
[Unknown](https://www.blogger.com/profile/14620959641996735702 "noreply@blogger.com") - <time datetime="2013-09-26T08:09:31.329-04:00">Sep 4, 2013</time>

It is rather important to know the [Ocean freight rates](http://www.freightaudit.com) properly, so that there are no issues later on while getting into transactions with the logistics company. There are different reasons why a company should know about [Ocean freight](http://www.freightaudit.com), [Freight bill audit](http://www.freightaudit.com) and [Freight audit](http://www.freightaudit.com). As a client, you should make sure that the logistics company has not only got clearance from a private audit company but from the government as well.

<hr />
#### Quite amazing to watch but after about 1820 the vo...
[Anonymous]( "noreply@blogger.com") - <time datetime="2013-11-02T11:14:38.515-04:00">Nov 6, 2013</time>

Quite amazing to watch but after about 1820 the voyages appear to be almost all Dutch vessels going to and fro the E.Indies. I also watched hard for Captain Cooks 1st voyage 1769-72 and the "First Fleet" of 1787-8 but neither were there.

<hr />
#### Out of curiosity, what did you build the video wit...
[Dave Troy](https://www.blogger.com/profile/09594731243753943289 "noreply@blogger.com") - <time datetime="2013-12-25T12:25:44.428-05:00">Dec 3, 2013</time>

Out of curiosity, what did you build the video with? Processing?

<hr />
#### I saw your condensed one year map recently via the...
[Peter Wibaux](http://theindiaroad.com "noreply@blogger.com") - <time datetime="2014-01-06T05:14:08.754-05:00">Jan 1, 2014</time>

I saw your condensed one year map recently via the Frank Jacobs site, and in my own blog at http://theindiaroad.wordpress.com/2014/01/05/digital/ explain the saiing patterns observed for the South Atlantic, which he incorrectly interprets.

Those patterns reproduce the route discovered by the Portuguese in the last quarter of the XVth century and first used by Vasco da Gama - this was the route used to get from Europe and the eastern seaboard of the US to India until the end of the age of sail.

Your animation also illustrates Gama's Indian Ocean route, using the summer monsoon to sail up the Mozambique channel and east to India (he made landfall at Calicut) and the return voyage using the November-March monsoon. Vessels then followed the Agulhas current west, rounded the Cape of Good Hope, and headed home.

I published a book called The India Road in 2009 which tells the whole story, and I will definitely be using this map in university lectures next year.

Congratulations on such nice work, Peter Wibaux

<hr />
#### So many years in only few minutes, quite a fascina...
[Kroviniu](http://www.adrem.lt/?pageid=4903%E2%80%8E "noreply@blogger.com") - <time datetime="2014-01-20T06:44:03.664-05:00">Jan 1, 2014</time>

So many years in only few minutes, quite a fascinating summary I could say.

<hr />
#### Update: posted same via MapCentia's service on...
[Andrew Zolnai Blog](https://www.blogger.com/profile/14579698318895235779 "noreply@blogger.com") - <time datetime="2014-02-21T05:11:09.242-05:00">Feb 5, 2014</time>

Update: posted same via MapCentia's service on my AWS account

http://54.194.60.93/apps/viewer/aizolnai/cliwoc/?fw=leaflet#osm/2/20.3906/45.4601/

<hr />
#### Dave, Processing is cool! I don't think Ben us...
[Ellie Kesselman](https://www.blogger.com/profile/11231840376889029260 "noreply@blogger.com") - <time datetime="2014-04-28T10:38:53.417-04:00">Apr 1, 2014</time>

Dave,  
Processing is cool! I don't think Ben used it though. Deep in the comments, he said that he used R's ggplot2 package to create many PNG files and ffmpeg to concatenate them into a video. I see some of his [code here](http://sappingattention.blogspot.com/2012/04/visualizing-ocean-shipping.html?showComment=1334255632265#c71815862772048495).

<hr />
#### Nice Info! Catering the specific require for shipp...
[Unknown](https://www.blogger.com/profile/11783889858211935469 "noreply@blogger.com") - <time datetime="2014-05-12T06:27:59.233-04:00">May 1, 2014</time>

Nice Info! Catering the specific require for shipping of auto products, world wide shipping companies are present almost in all cities.

**[Shipping from USA to India](http://www.worldwide4shipping.com 'Shipping in USA')** | **[Shipping from India to USA](http://www.worldwide4shipping.com 'Shipping in India')**

<hr />
#### At Extra-Baggage.com - Get a free baggage shipping...
[Unknown](https://www.blogger.com/profile/08120889370048512180 "noreply@blogger.com") - <time datetime="2014-07-03T07:37:14.745-04:00">Jul 4, 2014</time>

At Extra-Baggage.com - Get a free baggage shipping quote of Door to Door Excess Baggage Shipping for Worldwide Delivery.. **[Shipping to Australia](http://www.extra-baggage.com/excess-baggage-to-australia.php)**

<hr />
#### Hii Thanks for great information you write it very...
[Seantrans](http://www.translogera.lt "noreply@blogger.com") - <time datetime="2014-07-14T10:51:37.144-04:00">Jul 1, 2014</time>

Hii  
Thanks for great information you write it very clean. I am very lucky to get this from you

<hr />
#### For my business we tend to ship off a lot of stuff...
[Unknown](https://www.blogger.com/profile/14234792900725497322 "noreply@blogger.com") - <time datetime="2014-07-16T18:37:49.741-04:00">Jul 3, 2014</time>

For my business we tend to ship off a lot of stuff. It hard finding one that is cheap, because a lot of them charge a lot for how much you have. I just hope this new place I found can help me out with a better deal.

<hr />
#### Good knowledgeable Information on shipping. Thanks...
[DiamondDenisa](http://www.jasico.com.sg/ "noreply@blogger.com") - <time datetime="2014-08-07T07:33:09.750-04:00">Aug 4, 2014</time>

Good knowledgeable Information on shipping. Thanks for the update.

<hr />
#### The hardest part of picking among the numerous
[Unknown](https://www.blogger.com/profile/14267203368077599454 "noreply@blogger.com") - <time datetime="2014-08-22T06:33:26.660-04:00">Aug 5, 2014</time>

The hardest part of picking among the numerous [international shipping companies in Toronto](http://mspmoveit.com/airocean.aspx) the greater Toronto area is which to say no to and which to say yes to and put your trust in. Some very important things to keep in mind before picking a company and determining whether they are professional or not and reliable is being aware of what the requirements and rules and regulations involved with what you plan on shipping

<hr />
#### Hi Ben--this is a remarkable feat! Very very cool....
[Unknown](https://www.blogger.com/profile/17145791996723864933 "noreply@blogger.com") - <time datetime="2014-09-07T09:26:28.329-04:00">Sep 0, 2014</time>

Hi Ben--this is a remarkable feat! Very very cool.

**[shipping to usa](http://www.extra-baggage.com/shipping-to-usa.php)**  
**[shipping to Canada](http://www.extra-baggage.com/excess-baggage-to-canada.php)**  
**[shipping to Australia](http://www.extra-baggage.com/excess-baggage-to-australia.php)**  
**http://www.extra-baggage.com/excess baggage shipping**

<hr />
#### 
[Unknown](https://www.blogger.com/profile/14267203368077599454 "noreply@blogger.com") - <time datetime="2014-09-08T07:34:46.199-04:00">Sep 1, 2014</time>

This comment has been removed by a blog administrator.

<hr />
#### I just found this - great work! I am working on a...
[C](https://www.blogger.com/profile/10011702398352639846 "noreply@blogger.com") - <time datetime="2014-09-22T21:36:59.019-04:00">Sep 1, 2014</time>

I just found this - great work! I am working on a project similar to yours - involving historical shipbuilding data and creating visualizations in R or Tableau to tell the story. Do you by chance know of databases similar to the one you referenced that contains shipbuilding data?

<hr />
#### I'm also visiting this site regularly, this we...
[Leona](https://www.blogger.com/profile/04144499430392121542 "noreply@blogger.com") - <time datetime="2014-10-23T06:52:10.911-04:00">Oct 4, 2014</time>

I'm also visiting this site regularly, this web site is really nice and the users are genuinely sharing good thoughts.  
[shipping services washington dc](http://www.vmwexpress.com/services)

<hr />
#### Excellent Ben, it's obvious that a lot of hard...
[Sheila Laurens](https://www.blogger.com/profile/04209500540118377422 "noreply@blogger.com") - <time datetime="2014-12-05T05:23:23.551-05:00">Dec 5, 2014</time>

Excellent Ben, it's obvious that a lot of hard work has gone into this study and I, for one, very much appreciate it. I found you via Exploring our Oceans, Future Learn btw

<hr />
#### Very nice work. You might be interested in seeing ...
[Unknown](https://www.blogger.com/profile/12454834756812738668 "noreply@blogger.com") - <time datetime="2015-05-10T10:43:15.529-04:00">May 0, 2015</time>

Very nice work. You might be interested in seeing what I did back in 2011 at [my web site](http://www.cassiodorus.com/CLIWOC/). This was primarily directed at the Atlantic Triangle slave trading routes.

<hr />
#### Thanks for this Ben. As someone from St Helena Is...
[Lisa]( "noreply@blogger.com") - <time datetime="2015-06-09T09:21:42.426-04:00">Jun 2, 2015</time>

Thanks for this Ben. As someone from St Helena Island it's fascinating to see just how many ships were calling at St Helena during that period of history. It would be interesting to compare it with logs after 1869, when the Suez Canal opened, as I know this had a huge effect on the number of ships calling at St Helena.

<hr />
#### Hi Ben, I am trying to find out which shipping rou...
[Unknown](https://www.blogger.com/profile/15034334274120184502 "noreply@blogger.com") - <time datetime="2015-09-23T04:52:16.148-04:00">Sep 3, 2015</time>

Hi Ben, I am trying to find out which shipping routes may have been common to and from France, to Ipswich in Suffolk, England, during the 1880's? Do you have info on this?

<hr />
