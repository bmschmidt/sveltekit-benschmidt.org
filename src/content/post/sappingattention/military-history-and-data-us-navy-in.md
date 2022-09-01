---
title: 'Military History and data: the US Navy in World War II'
date: 2012-11-15T12:57:00.004-05:00
draft: false
url: /2012/11/military-history-and-data-us-navy-in.html
---

A stray idea left over from my [whaling series](http://sappingattention.blogspot.com/2012/11/reading-digital-sources-case-study-in.html): just how much should digital humanists be flocking to military history? Obviously the field is there a bit already: the [Digital Scholarship lab at Richmond in particular has a number of interesting Civil War projects](http://dsl.richmond.edu/), and the [Valley of the Shadow](http://valley.lib.virginia.edu/) is one of the archetypal digital history projects. But it's possible someone could get a lot of mileage out of doing a lot more.

There are two opportunistic reasons to think so.

1\. Digital historians have always been very interested in public audiences; military history has always been one of the keenest areas of public interest.

2\. The data is there for algorithmic exploration. In most countries, no organization is better at keeping structured records than the military.

And the stuff is interesting. It's easy, for example,to pull out the locations of nearly the entire US Navy, season-by-season, in the Pacific Theater:

[![](http://4.bp.blogspot.com/-HDZVWzQEW44/UKUfNlU7-4I/AAAAAAAADpY/NFffZz5g14E/s640/Pacific+Theater.png)](http://4.bp.blogspot.com/-HDZVWzQEW44/UKUfNlU7-4I/AAAAAAAADpY/NFffZz5g14E/s1600/Pacific+Theater.png)

Click to enlarge.

Or even animate them and the less comprehensive Japanese records to show the tide of battle (America in blue, Japan in red):

(Best in HD).

I can pull a little out of this: the closing of the Panama Canal to Japanese shipping before the war, the gradual creep of American operations up through the Pacific atolls, and so forth. But I really don't have a clue. Like a lot of historians trained at top graduate programs, one of my great fears is that some knowledgeable undergrad will expose my complete ignorance of anything about--say--the battle of Spotsylvania.

Most historians think we _don't_ need a revival of traditional maps-and-battles military history; the cultural shift in recent decades is worth protecting, a military-digital history would confirm digital history as a boys' playground, and so forth. This is my first instinct, too. But I also sometimes wonder if the flatlining of military history in the most prestigious programs isn't part of a [general failure of imagination around structural histories more generally--something I'm on record as saying digital histories might help us overcome](http://sappingattention.blogspot.com/2012/11/where-are-individuals-in-data-driven.html).

The Overview project has been [analyzing hundreds of thousands of reports from the Iraq War](http://overview.ap.org/blog/2010/12/a-full-text-visualization-of-the-iraq-war-logs/) as one of its basic demonstration prototypes. I find it hard to believe that there aren't some new insights buried in all the imperfectly digitized paper the military-industrial complex creates as a matter of course.

## Anyhow, just a thought.

### Comments:

#### Ben, You may be right about the minefield create...

[Scott Nesbit](http://dsl.richmond.edu 'noreply@blogger.com') - <time datetime="2012-11-16T13:16:27.912-05:00">Nov 5, 2012</time>

Ben,

You may be right about the minefield created by linking digital humanities too closely to military history. Yet wars are about nothing if not disjuncture and the potential for structural change, not just on either side of a conflict but in the midst of war itself. There has been great work suggesting that sharp divisions between military and civilian life--certainly in the U.S. Civil War era--are illusory. This is what interests me about wartime emancipation, how hundreds of thousands of soldiers made ruptures in all kinds of practices, spaces, and structures.

So thanks very much for pointing out future work to be done on military datasets. Like you, I'm hopeful that they will become interesting "new" sources to those of us not initially inclined toward battles, battalions, and the swooping arrows of old set-piece maps.

<hr />
#### Thank you so much for these visualizations, they a...
[aditya menon](https://www.blogger.com/profile/04070706366039282939 "noreply@blogger.com") - <time datetime="2012-11-19T09:09:55.308-05:00">Nov 1, 2012</time>

Thank you so much for these visualizations, they are beautiful! However, may I request that you please include what the color codes mean? What is red and what is blue, for instance, in this video?

<hr />
#### Woops, just saw that I hadn't responded! Red i...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-11-26T12:39:24.807-05:00">Nov 1, 2012</time>

Woops, just saw that I hadn't responded! Red is Japanese shipping (primarily merchant marine, I believe), and blue is US Navy.

<hr />
#### Thanks for the comment, Scott. It's an interes...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-11-26T12:41:16.034-05:00">Nov 1, 2012</time>

Thanks for the comment, Scott. It's an interesting point that as the military-civilian divide becomes stronger today, we project that onto the past as well, in ways that may make us understand it less.

Besides the projects you're involved with at Richmond, do you see any other significant projects bringing together the military, the digital, and the academy out there?

<hr />
#### Ben, I got here from your article in The Atlantic...
[Unknown](https://www.blogger.com/profile/12843602366962599072 "noreply@blogger.com") - <time datetime="2013-01-27T17:00:27.222-05:00">Jan 0, 2013</time>

Ben,

I got here from your article in The Atlantic about Lincoln. Fascinating stuff. Nevertheless, your maps of US Navy movements caught my eye. Unless I'm mistaken it looks like you made them with ggplot2. I've been using the ggplot2 package to map bird movements between the Americas and Asia. You appear to have solved a problem I've as yet been unable to crack - plotting restricted lat-long zones, centred on mid-Pacific longitudes, with filled landmasses and map projection. Any chance you'd be willing share your code for so I could learn from reading it?

Regards,  
Stephen

<hr />
#### Yep, ggplot2. It's really a frustrating thing,...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2013-01-27T21:40:23.241-05:00">Jan 0, 2013</time>

Yep, ggplot2. It's really a frustrating thing, those lines. I use an adapted version of Claudia Engel's fix from online [available here.](http://www.stanford.edu/~cengel/cgi-bin/anthrospace/great-circles-on-a-recentered-worldmap-in-ggplot). [I just put mine up here](http://rpubs.com/benmschmidt/Recenter). It usually works, but sometimes I have to try a couple different nearly-next-to-each-other versions before something works.

<hr />
#### That is an interesting digital map, compared to WW...
[Mil-Tech Bard](https://www.blogger.com/profile/11654312581130984629 "noreply@blogger.com") - <time datetime="2013-09-29T12:08:47.502-04:00">Sep 0, 2013</time>

That is an interesting digital map, compared to WW2 shipping lane maps, as much as from what it \_doesn't show\_ as what it does.

The data does not include the movements of the US Army Transportation Service freighter hulls, nor those of Mac Arthur's SWPA coastal freighter fleet of impressed Dutch Vichy French and Australian ships nor those of Mac Arthur's small boat (1,000 tons or less) fleet.

Rather than reveling new insights on WW2 it in fact obscures them.

<hr />
#### Hi, I was wondering if you could provide a link fo...
[Anonymous]( "noreply@blogger.com") - <time datetime="2013-11-26T14:11:18.482-05:00">Nov 2, 2013</time>

Hi, I was wondering if you could provide a link for or information about the data set you used? Thank you

<hr />
#### Um...I hate to be a wet blanket, but...what, exact...
[Unknown](https://www.blogger.com/profile/15932318362316798388 "noreply@blogger.com") - <time datetime="2014-01-11T08:23:34.328-05:00">Jan 6, 2014</time>

Um...I hate to be a wet blanket, but...what, exactly, are you trying to accomplish with all of this? What purpose does it serve other than creating keen graphics? Shipping zone analysis and mapping is pretty old hat. Graphics are nice, and even interesting, but I have to wonder what value they might have.

<hr />
#### Just came across this blog as I was doing some cas...
[Anonymous]( "noreply@blogger.com") - <time datetime="2014-07-11T16:53:13.440-04:00">Jul 5, 2014</time>

Just came across this blog as I was doing some casual research on WWII troop movements. Great data visualization on ship movments. I'm interested in the underling data. I've done some searching but the closest I can find is log book data. Could you provide a link to the underlying data set? And thanks also for the link to the ggplot code! I've been using ggplot myself for a while now but haven't tried my hand at maps yet.

<hr />
#### It's really a nice and helpful piece of inform...
[Edra C. Peak](http://graphicexpertsbd.com/photoshop-clipping-path "noreply@blogger.com") - <time datetime="2014-07-22T07:33:04.994-04:00">Jul 2, 2014</time>

It's really a nice and helpful piece of information. I'm glad that you shared this helpful info with us. Please keep us informed like this. I want to say it would supply up to !

[clipping path](http://graphicexpertsbd.com/photoshop-clipping-path)

<hr />
