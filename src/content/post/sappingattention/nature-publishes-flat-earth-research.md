---
title: 'Nature publishes flat-earth research paper '
date: 2016-07-05T11:37:00.002-04:00
draft: false
url: /2016/07/nature-publishes-flat-earth-research.html
---

I usually keep my mouth shut in the face of the many hilarious errors that crop up in the burgeoning world of datasets for cultural analytics, but this one is too good to pass up. _Nature_ has just published a dataset description paper that appears to devote several paragraphs to describing "center of population" calculations made on the basis of a _flat earth._

["Spatializing 6,000 years of global urbanization from 3700 BC to AD 2000" by Reba et al](http://www.nature.com/articles/sdata201634#technical-validation) presents what seems like a fairly useful digitization of two books that give fairly speculative historical estimates of city populations. But as part of the writeup, it includes the following chart calculating "Global mean centers" of population as they have shifted through history: starting somewhere near Baghdad in 1000 BCE, to heading northwest for the next 2500 years, pushing west almost to Izmir by 1900, and then veering sharply south in the 20th century into the Sahara.

[![](https://2.bp.blogspot.com/-WBeb08fzHQM/V3vE9JKkLTI/AAAAAAAAG74/MqDmk_4axWcH7YQlWWPLZNcj7ZnJVb-3wCLcB/s1600/Screen%2BShot%2B2016-07-05%2Bat%2B10.29.44%2BAM.png)](https://2.bp.blogspot.com/-WBeb08fzHQM/V3vE9JKkLTI/AAAAAAAAG74/MqDmk_4axWcH7YQlWWPLZNcj7ZnJVb-3wCLcB/s1600/Screen%2BShot%2B2016-07-05%2Bat%2B10.29.44%2BAM.png)

"Center of population" calculations are something I've become very interested in lately. The earliest I've seen is Moses Greenleaf's calculation of the [shifting center of population of Maine in his 1828 atlas](http://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~24208~880040:Maine,-inhabited-part-?sort=pub_list_no_initialsort%2Cpub_list_no_initialsort%2Cpub_list_no_initialsort%2Cpub_date?&qvq=q:Greenleaf%2Bmoses;sort:pub_list_no_initialsort%2Cpub_list_no_initialsort%2Cpub_list_no_initialsort%2Cpub_date;lc:RUMSEY~8~1&mi=8&trs=10); from 1870, they were laboriously calculated at the US Census bureau for the full population and a large number of regional and ethnic subgroups. (If anyone knows a pre-1900 example of center of population calculations happening *outside* the United States, I'd love to hear it.)

It didn't really matter for Greenleaf on a scale as small as Maine, but census cartographers were aware of the challenges of calculating centers on a round earth. In the early twentieth century they weighted calculations by miles instead of lines of longitude; more recently they use trigonometry to weight the calculations. But they knew that simply averaging latitude and longitude would misrepresent the sphere. These problems are even worse for the whole globe at once. There hasn't been much serious work put into calculating the global center, since we don't have global population data at the granularity of the US census's; but any reasonable approach would have to begin by assuming the earth was a sphere.

What's particularly baffling about the _Nature_ map here is that although they _do_ assume a flat earth, they _don't_ make the easy mistake of assuming a rectangular one. Instead, according to the caption above, they calculate their centers of population using the Goode Homolosine projection. It's not immediately recognizable in their map, so here's [a version from Wikipedia](https://en.wikipedia.org/wiki/Goode_homolosine_projection):

[![](https://4.bp.blogspot.com/-Zf-nWxgFes8/V3vJlJ-nsrI/AAAAAAAAG8E/j8rbswhw_bEfkDqHguQx7LOKd4YwWpU9wCLcB/s320/Goode_homolosine_projection_SW.jpg)](https://4.bp.blogspot.com/-Zf-nWxgFes8/V3vJlJ-nsrI/AAAAAAAAG8E/j8rbswhw_bEfkDqHguQx7LOKd4YwWpU9wCLcB/s1600/Goode_homolosine_projection_SW.jpg)

The homolosine projection is great for thematic global mapping because it preserves equal area without distorting the shapes and north-south orientations of local land areas too much. It does this at the cost, though, of several gigantic cuts through the oceans and Greenland; these make it singularly inappropriate for a center of population calculation. For example, Tokyo is just about due north of Adelaide in real life: but because Goode chose splits that would pull Japan closer to the Eurasian mainland, in this projection it ends up closer to Perth. Eastern North American cities for nearly double the distance of the Atlantic ocean.

And obviously, there's no particular reason that Africa should be in the middle of the map. The Americas could be east of Asia instead of West of Europe. The interrupted homolosine projection I came up with to map shipping routes (below) splits Western Europe from the Near East; it would probably put the center moving from Iran due westward into the Pacific. And that's not even to get into maps that move the equator off the center of the map.

[![](https://4.bp.blogspot.com/-4yYww0T_quc/V3vOGOcFGxI/AAAAAAAAG8Q/0VqFDspjx3MLT0ahQx1mis1oAdVoKMStQCLcB/s640/Screen%2BShot%2B2016-07-05%2Bat%2B11.10.39%2BAM.png)](https://4.bp.blogspot.com/-4yYww0T_quc/V3vOGOcFGxI/AAAAAAAAG8Q/0VqFDspjx3MLT0ahQx1mis1oAdVoKMStQCLcB/s1600/Screen%2BShot%2B2016-07-05%2Bat%2B11.10.39%2BAM.png)

So why are they using a homolosine projection at all? I don't want to put too much more thought into this than they did. But it must be some combination of them acknowledging the problems with the mercator and/or equirectangular projections, while just wanting to get along with center of population calculations that show the march of population. So they use the first equal-area projection that comes to hand, and assume it's good enough to show centers of population. Which, honestly, it is; centers of population are such a vaguely-defined thing that there isn't really any harm in presenting them in whatever light you want.

## But it's still kind of a joke on all of us that we inhabit a scholarly ecosystem where a data publication has to be accompanied with lots of explanatory text and diagrams to seem respectable, but in which no cares if you demonstrate that without worrying about the shape of the globe. (And as [Seth Denbo points out](https://twitter.com/seth_denbo/status/748516710181801988), one of the first applications of the new set was an animation that places Moses leading the Israelites from Egypt as just another precisely dated historical migration).

### Comments:

#### Now I'm looking at this post a year later and ...

[Ben](https://www.blogger.com/profile/04856020368342677253 'noreply@blogger.com') - <time datetime="2017-07-21T09:50:45.553-04:00">Jul 5, 2017</time>

Now I'm looking at this post a year later and thinking "But the earth is the geoid, not a sphere! What if someone came along and pointed that out in the comments? Would I feel stupid?" Which is totally unimportant for the point here, but a sign of how defensive one can get about blogging. (Would geoid vs sphere make any difference for center of population calculations? Probably not.)

<hr />
