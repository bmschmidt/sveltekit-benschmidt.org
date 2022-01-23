---
title: 'Practices, the periphery, and Pittsburg(h)'
date: 2012-01-05T10:01:00.004-05:00
draft: false
url: /2012/01/practices-periphery-and-pittsburgh.html
tags: 
- Digital Humanities Now Editors' Choice
- Featured
---

\[This is not what I'll be saying at the AHA on Sunday morning, since I'm participating in a [panel discussion with Stefan Sinclair, Tim Sherrat, and Fred Gibbs, chaired by Bill Turkel](http://aha.confex.com/aha/2012/webprogram/Session6143.html). Do come! But if I were to toss something off today to show how text mining can contribute to historical questions and what sort of issues we can answer, now, using simple tools and big data, this might be the story I'd start with to show how much data we have, and how little things can have different meanings at big scales...\]  
  
Spelling variations are not a bread-and-butter historical question, and with good reason.  There is nothing at stake in whether someone writes "Pittsburgh" or "Pittsburg." But precisely because spelling is so arbitrary, we only change it for good reason. And so it can give insights into power, center and periphery, and transmission. One of the insights of cultural history is that the history of practices, however mundane, can be deeply rooted in the history of power and its use. So bear with me through some real arcana here; there's a bit of a payoff. Plus a map.  
  
The set-up: until 1911, the proper spelling of Pittsburg/Pittsburgh was in flux. Wikipedia (always my go-to source for legalistic minutia) has an exhaustive [blow-by-blow](http://en.wikipedia.org/wiki/Etymology_of_Pittsburgh), but basically, it has to do with decisions in Washington DC, not Pittsburgh itself (which has usually used the 'h'). The city was supposedly mostly "Pittsburgh" to 1891, when the new US Board on Geographic Names made it firmly "Pittsburg;" then they changed their minds, and made it and once again and forevermore "Pittsburgh" from 1911 on. This is kind of odd, when you think about it: the government changed the name of the eighth-largest city in the country twice in twenty years. (Harrison and Taft are not the presidents you usually think of as kings of over-reach). But it happened; people seem to have changed the addresses on their envelopes, the names on their baseball uniforms, and everything else right on cue.  
  
Thanks to about 500,000 books from the Open Library, though, we don't have to accept this prescriptive account as the whole story; what did people actually do when they had to write about Pittsburgh?  
  
Here's the usage in American books:  

[  
](http://3.bp.blogspot.com/-8BO8Pq-udu8/TwSkWkn3zxI/AAAAAAAAC7w/tlPbu_Oos_Y/s1600/Usage+of+Pittsburg+vs+Pittsburgh+in+the+19th+century.png)

[![](http://3.bp.blogspot.com/-j9plN5SsgkM/TwTnDK7VXEI/AAAAAAAAC9c/Q8okNs6JzR8/s1600/Usage+of+%2522Pittsburgh%2522+vs+%2522Pittsburg%2522+spellings+in+American+books%252C+19th+century.png)](http://3.bp.blogspot.com/-j9plN5SsgkM/TwTnDK7VXEI/AAAAAAAAC9c/Q8okNs6JzR8/s1600/Usage+of+%2522Pittsburgh%2522+vs+%2522Pittsburg%2522+spellings+in+American+books%252C+19th+century.png)

  
What does this tell us about how practices change?  
  
  
  
  
This is telling us that usage was fairly confused up to about 1890; there seems to have been a push for 'Pittsburg' in the 1860s, but it somehow lost steam. When the Feds appeared in 1890, the 'h' appeared in about 80% as many books as the solo-G--not such a bad decision to go with the 'G' as some imply. But the rule made a difference: once the state intervened, 'Pittsburg' became about three times as popular as 'Pittsburgh'; and after it changed tacks in 1911, usage quickly tracked back towards 'gh.'\*  
  
\*\[Quick guide for the perplexed: since we're comparing ratios, we have to use a log chart to get reasonable data. The dotted line at 1 shows where "Pittsburgh" and Pittsburg are used in equal numbers of books; equal distances above and below show proportionally more use of "Pittsburgh" and "Pittsburg" respectively.  Each dot is a year, with a trend line superimposed. And for all of these, I use number of books using the words, not word counts; we're interested in what people are doing, and letting how many times they do it into the data will just muddy it up. The color just reinforces that scale on a blue-to-white-to-red distribution. And remember those colors, we're using them again later.\]  
  
Now, I'm interested in not the _fact_ of linguistic change, but its _dynamics._ What happens when the government tries to implement changes of spelling; does everyone respond equally? This is where library metadata starts to get useful.  
  
The first thing I checked here was the usage by age groups. [A lot of language changes by cohort displacement](http://sappingattention.blogspot.com/2011/04/age-cohort-and-vocabulary-use.html); is that the case for spelling reforms? Here's the same sort of chart I made in the spring with author age on the y-axis, and year on the x. ([Longer explanation here](http://sappingattention.blogspot.com/2011/04/age-cohort-and-vocabulary-use.html); I'm using a moving average to smooth instead of loess, for sanity reasons). Once again, blue is with an h, and red without one:  
  

[![](http://4.bp.blogspot.com/-LAu6uuO4Y7g/TwSqaiAIUtI/AAAAAAAAC8g/i9YinDntSuM/s1600/Usage+of+Pittsburgh+vs+Pittsburg+by+age+group.png)](http://4.bp.blogspot.com/-LAu6uuO4Y7g/TwSqaiAIUtI/AAAAAAAAC8g/i9YinDntSuM/s1600/Usage+of+Pittsburgh+vs+Pittsburg+by+age+group.png)

This one is quick: there's almost no age effect. We're missing some data from the early period here, but pretty clearly the shifts in 1891 and 1911 happen across all generations, except maybe the very old. (And there, we expect to see some reprints skewing the data more.)  
  
The next place I looked for this was by stack location. Taking the headline LC classifications, do any patterns jump out?  

[![](http://3.bp.blogspot.com/-Q8m15bv5Bnw/TwSr65FbEcI/AAAAAAAAC84/Vt-bnSOjS28/s1600/Pittsburg+vs+Pittsburgh+by+library+genre.png)](http://3.bp.blogspot.com/-Q8m15bv5Bnw/TwSr65FbEcI/AAAAAAAAC84/Vt-bnSOjS28/s1600/Pittsburg+vs+Pittsburgh+by+library+genre.png)

[  
](http://1.bp.blogspot.com/-kRHN0aLqYJ4/TwSrtLC7AkI/AAAAAAAAC8s/yfVbIpjbtBE/s1600/Pittsburg+vs+Pittsburgh+by+library+genre.png)

This one is more suggestive... K, the law, is curiously unresponsive to most shifts; and some areas (J, political science, and S, agriculture) seem more attached to the 'gh' spelling before 1891, perhaps because of individual institutions (the University of Pittsburgh, etc.); and C and E, both history genres, take their time accomodating to changes. But nothing seems overwhelming.  
  
Publication country, however, has a dramatic difference: (still blue for Pittsburgh, red for Pittsburg)  

[![](http://4.bp.blogspot.com/-CgJKxY_1QUE/TwStKzgOrPI/AAAAAAAAC9E/lDm-7j54oBI/s1600/Usage+of+Pittsburgh+and+Pittsburg+by+country.png)](http://4.bp.blogspot.com/-CgJKxY_1QUE/TwStKzgOrPI/AAAAAAAAC9E/lDm-7j54oBI/s1600/Usage+of+Pittsburgh+and+Pittsburg+by+country.png)

  
Only one of these countries flies the red, white and blue. The British don't get the memo--[according to ngrams](http://books.google.com/ngrams/graph?content=Pittsburgh%2CPittsburg&year_start=1900&year_end=1950&corpus=6&smoothing=0), it's not until the 1930s they make the switch for good. (The Bookworm database only goes to 1922, so we can't tell here). The Canadians, with many fewer books, show less of a pattern, but might be in between.  
  
I find this interesting; it says something about either the ability of information like lexicographic reform to travel across international boundaries, or about the ability of states to impose these constraints on others. Britons kept moving along in their own community of practice for two decades; why bother changing spelling? It's not as though they had to address many envelopes.  
  
But the most compelling for me lies in the patterns across US states, by location of publisher (only including the top 15 states, since [there aren't many books from elsewhere](http://sappingattention.blogspot.com/2011/01/where-were-19c-us-books-published.html)):  
  

[![](http://3.bp.blogspot.com/-NHDmbnWiZuY/TwS0iWhyo6I/AAAAAAAAC9Q/xdHQhLGY22g/s1600/Pittsburg+vs+Pittsburgh+usage+across+states.png)](http://3.bp.blogspot.com/-NHDmbnWiZuY/TwS0iWhyo6I/AAAAAAAAC9Q/xdHQhLGY22g/s1600/Pittsburg+vs+Pittsburgh+usage+across+states.png)

  
This reveals two separate, interesting things:  
  
1) This points toward the possibility of an event that I didn't know about before. 1891 may not actually be the first time the government changed its spelling of 'Pittsburgh'; something happened quickly and decisively to shift it in Washington DC in 1871 as well. Looking at book titles, I'm pretty confident this is a real pattern, albeit [one the Pittsburgh sources don't mention](http://www.clpgh.org/exhibit/apology7.html). That mysterious plateau in the first chart from 1871 to 1891 towards 'Pittsburgh,' I suspect, can be directly attributed to whatever this is. Anyone want to put together a grant proposal to the Carnegie foundation? There's an opportunity for a major contribution to Pittsburghiana here!  
  
2) Of much broader interest; the spread seems to have a geographical pattern. Most states lack the quick and clear definition of Washington DC in their shifts, but if we squint for the white squares and try to group them by the date they cross over to using the 'gh' spelling, a pattern emerges:  
  
1911: DC,CT  
1912: PA,MD,OH  
1913: IN, IL,NY  
1914: WI, IA, MA, MI  
1916: MN  
1918: MO  
Post-1922: CA (A special case, along with Kansas and Oklahoma, since it has a 'Pittsburg' of its own. Still, they all are dwarfed by the real one; California's had 6,000 people in 1920.)  
  
With the exception of Connecticut (which already had a strange predilection for the 'h'), what do we see? I would say: a path that traces concentric circles away from Washington, DC (or maybe Pittsburgh itself). I trust this enough to make a map. If we add every state with at least 20 books using either spelling after 1910, and bump up the smoothing window to six years, we can see this on a map: when do they switch over to the newly mandated spelling?  
  
  
**Year majority of books published in state switched from "Pittsburg" to "Pittsburgh"** // jsData function gvisDataGeoChartIDa822dc5 () { var data = new google.visualization.DataTable(); var datajson = \[ \[ "US-AL", 1919 \], \[ "US-CA", 1923 \], \[ "US-CO", 1922 \], \[ "US-CT", 1911 \], \[ "US-DC", 1911 \], \[ "US-GA", 1923 \], \[ "US-IA", 1915 \], \[ "US-IL", 1913 \], \[ "US-IN", 1914 \], \[ "US-KS", 1923 \], \[ "US-KY", 1919 \], \[ "US-LA", 1923 \], \[ "US-MA", 1914 \], \[ "US-MD", 1912 \], \[ "US-MI", 1915 \], \[ "US-MN", 1918 \], \[ "US-MO", 1918 \], \[ "US-NB", 1923 \], \[ "US-NC", 1920 \], \[ "US-NH", 1916 \], \[ "US-NJ", 1911 \], \[ "US-NY", 1914 \], \[ "US-OH", 1913 \], \[ "US-OR", 1923 \], \[ "US-PA", 1911 \], \[ "US-TN", 1915 \], \[ "US-TX", 1923 \], \[ "US-UT", 1922 \], \[ "US-VA", 1918 \], \[ "US-VT", 1915 \], \[ "US-WA", 1918 \], \[ "US-WI", 1915 \], \[ "US-WV", 1915 \], \[ "US-XX", 1914 \] \]; data.addColumn('string','state'); data.addColumn('number','TransitionYear'); data.addRows(datajson); return(data); } // jsDrawChart function drawChartGeoChartIDa822dc5() { var data = gvisDataGeoChartIDa822dc5(); var options = {}; options\["width"\] = 650; options\["height"\] = 420; options\["region"\] = "US"; options\["displayMode"\] = "regions"; options\["resolution"\] = "provinces"; options\["colorAxis"\] = {colors:\['DE2D26','FEE0D2'\]}; var chart = new google.visualization.GeoChart( document.getElementById('GeoChartIDa822dc5') ); chart.draw(data,options); } // jsDisplayChart function displayChartGeoChartIDa822dc5() { google.load("visualization", "1", { packages:\["geochart"\] }); google.setOnLoadCallback(drawChartGeoChartIDa822dc5); } // jsChart displayChartGeoChartIDa822dc5() <!-- jsFooter --> //-->

(Anything that crosses later than 1922, I just count as 1923 here. And sorry for the legend; I don't know how to tell GoogleVis about years).  
  
Now the DC story is slightly less strong visually--Pennsylvania seems to be on top of the trend as well. (The story from the ground seems to be that Pittsburgundians were only too happy to go along with change). Knowing what we do, it's not unreasonable to see the practice as a joint effort of the city and the federal government. And indeed, the change does seem to radiate out from that central point through space--the farther out, the longer it takes the new practice to come into effect. (And the weaker it is when it does).  
  
Data for the 1891 transition work less well--in large part, the Western states seem to just like the simpler spelling no matter what, and likewise Pennsylvania the 'gh'. But we can make a less easy to read, but more accurate, map as well. It shows how the (log of the ratio of the) ratio of 'gh' to 'g' use changed from the aughts to the teens; bright blue (like Maryland) means it followed the federal mandates more strictly, purples show foot-dragging, and more red means that it departed from them.  
  

**Strength of change in "Pittsburg(h)" spelling, 1900-1908 compared to 1913-1921**

// jsData function gvisDataGeoChartID4dbc6a06 () { var data = new google.visualization.DataTable(); var datajson = \[ \[ "US-AR", 0.8472978604 \], \[ "US-CA", 0.2210739154 \], \[ "US-CT", 2.333210022 \], \[ "US-GA", 0.06367309486 \], \[ "US-IA", 2.182884274 \], \[ "US-IL", 1.774534387 \], \[ "US-IN", 1.00867551 \], \[ "US-KS", 1.343003753 \], \[ "US-KY", 1.609437912 \], \[ "US-LA", 0.5959834321 \], \[ "US-MA", 1.520522011 \], \[ "US-MD", 2.373895371 \], \[ "US-ME", 1.914819562 \], \[ "US-MI", 1.844977308 \], \[ "US-MN", 0.4688891632 \], \[ "US-MO", 0.5795408943 \], \[ "US-NH", 1.017196897 \], \[ "US-NJ", 1.01595686 \], \[ "US-NY", 1.650051872 \], \[ "US-OH", 1.393509015 \], \[ "US-PA", 1.866481647 \], \[ "US-TN", 2.430459443 \], \[ "US-UT", -0.6668298722 \], \[ "US-VA", 1.428999398 \], \[ "US-VT", 1.85629799 \], \[ "US-WA", 1.662547738 \], \[ "US-WI", 1.471964631 \], \[ "US-WV", 1.70664024 \], \[ "US-XX", 1.356433509 \] \]; data.addColumn('string','state'); data.addColumn('number','LogofChange04to17'); data.addRows(datajson); return(data); } // jsDrawChart function drawChartGeoChartID4dbc6a06() { var data = gvisDataGeoChartID4dbc6a06(); var options = {}; options\["width"\] = 650; options\["height"\] = 420; options\["region"\] = "US"; options\["displayMode"\] = "regions"; options\["resolution"\] = "provinces"; options\["colorAxis"\] = {colors:\['red','blue'\]}; var chart = new google.visualization.GeoChart( document.getElementById('GeoChartID4dbc6a06') ); chart.draw(data,options); } // jsDisplayChart function displayChartGeoChartID4dbc6a06() { google.load("visualization", "1", { packages:\["geochart"\] }); google.setOnLoadCallback(drawChartGeoChartID4dbc6a06); } // jsChart displayChartGeoChartID4dbc6a06() <!-- jsFooter --> //-->  

I find it somewhat compelling that the two poles are Washington DC (not pictured on account of size), which uses the new spelling 20x more frequently after 1911; and Utah, which managed to use the federally mandated spelling proportionally _less_ in 1917 than it did before the government demanded it. (Of course it's Utah--and just after statehood, too! One wishes South Carolina, in all its fire-eating glory, would have published enough books to show up on the chart.) Perhaps this one is less clear than the straight transition, but there's still quite a noticeable trend from metropole to periphery. The influence of the government wanes as we get farther from its native sphere. (Not shown; the pattern is somewhat similar, with less data, for the 1880s to 1890s transition.)  
  
This, I'd argue, is pretty close to what you'd expect to see if the normative power of the federal government declines as you get further from its seat. Historians have well overplayed the center-periphery card in recent years, but they do exist; even in America, maybe the field of power declines with distance. (Can anyone think of some more terms that allow exactly this sort of application? British titles come to mind--Who says 'Sir David', and who merely "David Cannadine"?- but I don't have extensive geographic information for the UK.) Certainly, it seems like this one normative pattern does.  
  
Am I saying that this one orthographic example tells us basic things about the nature of the fin-de-siecle American state? Well, not _really_. (Although I probably would push it a bit farther than you'd like). This data is suggestive at best, misleading at worst; Enough for a hunch, and not much more. But, quite seriously, the accumulation of practices like this, when we can figure out how to group them together, has the potential to tell us enormously compelling things about sources of power and the patterns of imitation in all sorts of cultural spheres. Not all practices are driven by government actors; some _are_ generational or disciplinary. There are vast numbers of subtle linguistic ticks--like the spelling of Pittsburgh--that exist in the textual record; we can use them to see how practices reproduce, how influences spread.  
  
And they only work _because_ they're so hard to spot that even the people using them may not think about what they're doing. An author may remind himself about the up-to-date spelling of Pittsburgh; but it's very rare that he'd think about his relationship to the federal government before deciding which version to use. And yet, what he does reflects his participation in those fields nonetheless. These sorts of changes are like the dark matter of the historical universe; weak, tricky to spot, and not worth much in isolation; but they're everywhere. Cast a wide enough net, and we can use them for our ends.
---
### Comments:
#### Thanks for this post. These data are indeed both i...
[Anonymous]( "noreply@blogger.com") - <time datetime="2012-01-09T13:07:40.555-05:00">Jan 1, 2012</time>

Thanks for this post. These data are indeed both intriguingly suggestive and yet maddeningly inconclusive. Such is life.  
  
Because I'm interested in circulation, my question is about how much it matters that it takes until 1923 (or later) for Utah, Oklahoma, Oregon, even California to make the switch. I guess I'm asking how the data would look overlaid/weighted by the map in the post you link, where you note that the vast majority of publishing is coming from the Northeast.  
  
In other words, even if it took publishing outfits in the West a long time to make the switch, isn't it likely that the average reader -- even in the West -- would have been more likely to encounter "Pittsburgh" than "Pittsburg" because New York, Massachusetts (Boston), Pennsylvania (Philadelphia), and Illinois (Chicago) had all made the switch by 1914?  
  
Food for thought, another blog post, and perhaps major distractions. But greatly enjoyed these first thoughts.
<hr />
#### Joe, As you say, it's a maddening question. I...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-01-09T13:29:35.741-05:00">Jan 1, 2012</time>

Joe,  
  
As you say, it's a maddening question. I can't think of a rational weigh to weight those two maps against each other. Anyway, I think I'd argue that I'm interested here in **writers**, not readers. (And possibly editors; publishing location doesn't say as much as I'd like about author location, after all). Even if most readers in the West would be more likely to encounter 'gh' in the teens, writers and editors there weren't necessarily aping the latest fashion out of Washington. It's not just a transmission of information problem, it's a transmission of practice one.  
  
Another catch: how much reading happens in books, anyway? A better way to do this would certainly be newspapers or letters.
<hr />
#### Yoni Appelbaum (@YAppelbaum) pointed out on Twitte...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-01-09T13:38:33.540-05:00">Jan 1, 2012</time>

Yoni Appelbaum (@YAppelbaum) pointed out on Twitter the interfering effect of "Pittsburg Landing," the location of (and alternate name for) the battle of Shiloh. It definitely does play some role in spikes in the 1860s in the h-less spelling, moving it about 25% higher than it would have been.  
  
One great effect of having my research database online, at Bookworm, is that anyone can tweak the terms to test some questions like these: for example, [the relative size of Pittsburg Landing](http://bookworm.culturomics.org/?%7B%22query%22%3A%7B%22index%22%3A0%2C%22time_measure%22%3A%22year%22%2C%22time_limits%22%3A%5B1815%2C1922%5D%2C%22counttype%22%3A%22Occurrences_per_Million_Words%22%2C%22words_collation%22%3A%22Case_Sensitive%22%2C%22smoothingSpan%22%3A%225%22%2C%22search_limits%22%3A%5B%7B%22word%22%3A%5B%22Pittsburg%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburg+Landing%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburgh%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburg%22%2C%22Pittsburgh%22%5D%7D%5D%7D%2C%22terms%22%3A%5B%22Pittsburg%22%2C%22Pittsburg+Landing%22%2C%22Pittsburgh%22%2C%22Pittsburg%2CPittsburgh%22%5D%2C%22category_data%22%3A%5B%5B%5B%22country%22%2C%5B%5D%5D%2C%5B%22state%22%2C%5B%5D%5D%2C%5B%22lc0%22%2C%5B%5D%5D%2C%5B%22lc1%22%2C%5B%5D%5D%2C%5B%22LCSH%22%2C%5B%5D%5D%2C%5B%22aLanguage%22%2C%5B%5D%5D%5D%5D%2C%22comparison%22%3A%22word%22%7D) or [the unsmoothed numbers for Washington DC](http://bookworm.culturomics.org/?%7B%22query%22%3A%7B%22index%22%3A0%2C%22time_measure%22%3A%22year%22%2C%22time_limits%22%3A%5B1815%2C1922%5D%2C%22counttype%22%3A%22Percentage_of_Books%22%2C%22words_collation%22%3A%22Case_Sensitive%22%2C%22smoothingSpan%22%3A%220%22%2C%22search_limits%22%3A%5B%7B%22word%22%3A%5B%22Pittsburg%22%5D%2C%22state%22%3A%5B%22DC%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburg+Landing%22%5D%2C%22state%22%3A%5B%22DC%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburgh%22%5D%2C%22state%22%3A%5B%22DC%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburgh+Landing%22%5D%2C%22state%22%3A%5B%22DC%22%5D%7D%2C%7B%22word%22%3A%5B%22Pittsburg%22%2C%22Pittsburgh%22%5D%2C%22state%22%3A%5B%22DC%22%5D%7D%5D%7D%2C%22terms%22%3A%5B%22Pittsburg%22%2C%22Pittsburg+Landing%22%2C%22Pittsburgh%22%2C%22Pittsburgh+Landing%22%2C%22Pittsburg%2CPittsburgh%22%5D%2C%22category_data%22%3A%5B%5B%5B%22country%22%2C%5B%5D%5D%2C%5B%22state%22%2C%5B%22DC%22%5D%5D%2C%5B%22lc0%22%2C%5B%5D%5D%2C%5B%22lc1%22%2C%5B%5D%5D%2C%5B%22LCSH%22%2C%5B%5D%5D%2C%5B%22aLanguage%22%2C%5B%5D%5D%5D%5D%2C%22comparison%22%3A%22word%22%7D).
<hr />
#### Point taken about writers, and I agree that books ...
[Anonymous]( "noreply@blogger.com") - <time datetime="2012-01-09T14:08:34.451-05:00">Jan 1, 2012</time>

Point taken about writers, and I agree that books are perhaps not the best place to look (they'd be a lagging indicator, right? Takes a long time to write one).  
  
So I did some very, _very_ quick looking through newspaper databases to see what happened. This is about five minutes of work and very crude.  
  
I looked in two newspaper databases: America's Historical Newspapers and Chronicling America (through the Library of Congress). Each has selection biases, but I said it was crude, right?  
  
Here's what it showed:  
  
"Pittsburg"  
Chronicling America:  
1908-1911: 56,544 hits  
1912-1915: 22,513  
1916-1919: 8,921  
  
AHN:  
1908-1911: 70,132 hits  
1912-1915: 37,597  
1916-1919: 28,240  
  
  
"Pittsburgh"  
Chronicling America:  
1908-1911: 7,168 hits  
1912-1915: 25,312  
1916-1919: 20,398  
  
AHN:  
1908-1911: 12,994 hits  
1912-1915: 58,437  
1916-1919: 57,124  
  
So the same change happens (which is reassuring in its own way). I didn't run specifics on a state-by-state level, of course, and for the moment these are just crude keywords searches with date ranges. But it's a start.  
  
As for the weighting problem, I agree that it's different for writers/editors (i.e., the production side) than for readers, but I still wonder about the effect of the mass of print that comes from just a few geographic locations. It is, as a disclaimer, a question that I have to deal with myself, and an even more pressing one -- 75% of print in the 1760s came from Boston, New York, or Philadelphia!
<hr />
