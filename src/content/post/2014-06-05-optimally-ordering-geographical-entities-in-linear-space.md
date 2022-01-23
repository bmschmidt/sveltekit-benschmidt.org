---
id: 290
title: Finding the best ordering for states
date: 2014-06-05T14:36:07+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=290
url: /2014/06/05/optimally-ordering-geographical-entities-in-linear-space/
categories:
  - Data Visualization
---

Here&#8217;s a very technical, but kind of fun, problem: what&#8217;s the optimal order for a list of geographical elements, like the states of the USA?

If you&#8217;re just here from the future, and don&#8217;t care about the details, here&#8217;s my favorite answer right now:

<pre tabindex="0">["HI","AK","WA","OR","CA","AZ","NM","CO","WY","UT","NV","ID","MT","ND","SD","NE","KS","IA","MN","MO","OH","MI","IN","IL","WI","OK","AR","TX","LA","MS","AL","TN","KY","GA","FL","SC","WV","NC","VA","MD","DE","PA","NJ","NY","CT","RI","MA","NH","VT","ME"]</pre>

But why would you want an ordering at all? Here&#8217;s an example. In the baby name bookworm, if you search for a name, you can see the interaction of states and years. Let&#8217;s choose &#8220;Kevin,&#8221; because it played such a role in my [anachronism-hunting piece on Lincoln](http://www.theatlantic.com/entertainment/archive/2013/01/did-anyone-say-racial-equality-in-1865-the-language-of-i-lincoln-i/266990/).

![](/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-3.00.44-PM.png)

Clearly the name took off around the start of the baby boom. But is there a geographical pattern? It&#8217;s very hard to say. It does look like the red names begin around 1955 in much of the country. But in a few, it&#8217;s not until the early 1970s. Which ones? Alabama, Georgia, North Carolina, South Carolina. That is, after substantial reading parsing over to the axis, it&#8217;s clear that most of those are southern states. But this is the sort of insight that should be immediately obvious. And there may be other connections we&#8217;re missing out on. The whole point of data visualization over tables is that you can pick out patterns using faster forms of cognition: requiring you to push over to the left to read off the names is a major loss.

Alphabetical order makes it easy to find any individual state (assuming you know its name) but hard to see the way related states move with each other.  It means that to trace out regional variations over time, we tend to animate maps: but using time as the proxy for time makes cross-temporal comparisons much harder to tell. As Tufte says, comparisons should be enforced across the eyespan: relying on animation to trace out common names is a big problem. So there&#8217;s a dramatic interest in seeing different names pop up in (for instance) [Reuben Fischer-Baum&#8217;s animation of baby names](http://jezebel.com/map-sixty-years-of-the-most-popular-names-for-girls-s-1443501909); but you have to watch the whole thing to think through questions like &#8220;what regions tend to adopt names early?&#8221; or &#8220;what&#8217;s the name that stays on top for the longest?&#8221;

<span style="line-height: 1.714285714; font-size: 1rem;">Putting it all into X-Y makes these questions easier. But that means we need to map states to X or to Y. Alphabetical order means that states are not arranged in a way that places states near others like them.</span>

So how could we make the states usefully arranged? We need some dimensionality reduction.

**Linear reductions**

One obvious way would be east-to-west or north-to-south: that starts out quite well, with all of New England:

<pre tabindex="0">ME MA RI NH VT CT NY NJ PA DE MD DC VA NC SC WV OH FL GA MI KY IN AL TN IL WI MS MO LA AR MN IA TX KS NE OK SD ND WY CO NM MT UT AZ ID NV CA OR WA AK HI</pre>

But quickly falls apart with Ohio, Florida, Georgia, and Michigan in immediate succession. If we plot the states, you can quickly see why. Rather than list orders, I&#8217;m going to show them as paths through a map: here&#8217;s what that looks like in this case.

![](/wp-content/uploads/2014/06/eastToWest.png)

&nbsp;

(By the way, you can see that the points are a little arbitrary: I&#8217;ve taken the first geonames hit for the state, which is sometimes the capital, sometimes the state centroid, and sometimes the most important city. Ideally I&#8217;d be using the population-weighted centroid, but in some ways I kind of like the results that come out of this.

There are some other possibilities for linear dimensionality reduction (principal components comes to mind) but they&#8217;ll have the same fundamental problem. We want a metric that takes proximity more fully into account. Even **non-metric multi-dimensional scaling** fails: it handles a couple cases better (Jackson and St. Louis are in a more sensible order, for instance), but it still jumps erratically up and down, preventing any larger groups like &#8220;the south&#8221; from coming into sight:

![](/wp-content/uploads/2014/06/nonmetric-MDS.png)

&nbsp;

**Hierarchical clustering approaches**

One possible approach, suggested to me by Miriam Huntley, is hierarchical clustering: using distances, we can cluster the states by proximity. Here&#8217;s the initial result of that:

![](/wp-content/uploads/2014/06/Initial-Dendrogram.png)

The individual groups are quite nice (New England is there, plus New York at the end), and every state is adjacent to an immediate neighbor. And while the groups have geographical coherence, they aren&#8217;t exactly the regions we know and love: the &#8220;mid-atlantic&#8221; runs down to South Carolina, and the midwest includes the gulf coast all the way to Tallahassee. The connections between the groups are scattered. Florida is next to Pennsylvania, and South Carolina to Massachusetts. Seen as a path, the weirdness of this is clear:

![](/wp-content/uploads/2014/06/hclust.png)

Leaf ordering in dendrograms is arbitrary, however, and we can do better than this. Using a method developed by Bar-Joseph et al, and implemented in the &#8220;cba&#8221; library for R, we can reorder the dendrogram so that groups stay the same, but the leaves are ordered so that transitions from one group to the next are maintained.

&nbsp;

![](/wp-content/uploads/2014/06/Reordered-dendrogram.png)

&nbsp;

Now, the path looks considerably better:

![](/wp-content/uploads/2014/06/Optimal-map.png)

&nbsp;

The clusters remain adjacent, but now the transitions are so smooth that it&#8217;s not obvious where one begins and the other ends. Instead, we get a serpentine path through the states that both ensures every path is between two adjacent states, and keeps paths generally inside the same region.

**Network approaches**

Can we do better? The strategy of plotting these as paths suggests that maybe this is an instance of the traveling salesperson problem, in which we want to travel through all the states minimizing the distance traveled. Why shouldn&#8217;t the &#8220;best&#8221; solution simply be the one where the overall sum of distances is the least?

Inserting a dummy node as start- and end-point lets us view that: using the best method found by the &#8220;TSP&#8221; package in R (which is not guaranteed to be the optimal solution, since the traveling salesman is a notoriously difficult problem to solve), we get quite a different path:

![](/wp-content/uploads/2014/06/TravelingSalesman1.png)

&nbsp;

Rather than start in Maine, this route begins in Tennessee! After winding through the Midwest to West Virginia, it leaps to Vermont and then takes a beautifully practical course down the Eastern seaboard through Texas, through the great plains, and then takes up nearly an east-to-west ordering through the Mountain and Western time zones. While many of the regional choices here look better to me than the dendrogram solution (particularly the coherence of the south, the distance-optimizing strategy means that there are a few nearby states that have nothing in common: the leap from New Mexico to Montana, for example, and the extremely strange choice to place Washington DC between West Virginia and Vermont, ten nodes removed from either Maryland or Virginia, the closest geographical points. (In fact, I think the route could be improved by heading straight to Vermont from WV and putting DC in its rightful place: but it says something that out of the 7 algorithms in the free version of the TSP package, none was able to improve on this route).

<strong style="line-height: 1.714285714; font-size: 1rem;">Fractal Curves</strong><span style="line-height: 1.714285714; font-size: 1rem;"> </span>

Another option is not to minimize travel distance but to maximize the likelihood that two points will be next to each other. That suggests filling the geographic region with some kind of fractal curve, and then positioning each state along the curve.

This is an appealing way to think of arranging the country linearly: not as a network, but as iterable set of points. For just the United States, we could use some already-existing curve path. The most widespread linear mapping of points is the Zip code system: Samuel Arbesman has [written about this on Wired](http://www.wired.com/2012/01/the-fractal-dimension-of-zip-codes/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%253A+wired%252Findex+%2528Wired%253A+Index+3+%2528Top+Stories+2%2529%2529), and includes a link to [Robert Kosara&#8217;s ZipScribble maps](http://eagereyes.org/zipscribble-maps/united-states). Here&#8217;s Kosara&#8217;s idea with a few minor changes (I use a rainbow spectrum, rather than coloring each state separately, and an Albers projection. And it appears that the zip database I have handy has something weird going on in southwest Georgia.)

![](/wp-content/uploads/2014/06/ZipManifold.png)

**Space-filling curves**

The ZIP system isn&#8217;t especially logical, but there should be something similar that&#8217;s better. My first thought for this problem, which the whole post, was to use a **Hilbert Curve**. It turns out that [Kosara has mapped that approach onto the Zip dataset](http://eagereyes.org/zipscribble-maps/travelling-presidential-candidate-map).

Using just the state points, it&#8217;s possible to draw a Hilbert curve that covers the continental United States, and then visit each state at the moment it&#8217;s closest to the curve. The actual path taken can then be simplified down to eliminate the intervening states. Here&#8217;s what that looks like, with both the Hilbert curve and the simplified route. I&#8217;ve shaded the Hilbert curve using a double rainbow so it&#8217;s easier to trace from its origin near the Bahamas (first making shore near South Carolina) to its exit off the coast of Los Angeles.

![](/wp-content/uploads/2014/06/Hil.png)

&nbsp;

I&#8217;m disappointed by the performance here. While there is some regional coherence (the stretch from Wisconsin to Kansas is well done, and the first jumps through the South are acceptable), the square binning forces some rather strange choices: the odd jag down to North Carolina, the detour to Colorado and Wyoming.

There are other issues as well. Hilbert curves work best in square spaces, and the patches of ocean/Canada/Mexico that get filled are pretty far off limits. While I don&#8217;t show Alaska and Hawaii, for the other algorithms they&#8217;ve simply been tacked on at the end in a reasonable manner: here, though, a solution that includes Alaska and Hawaii makes some significant changes to the full arrangement and vastly increases the percentage of empty space, which tends to introduce odd decisions (like interposing Alaska between Oregon and Nevada.)

![](/wp-content/uploads/2014/06/HilbertCurveWIthAK.png)

&nbsp;

I suspect there are ways of optimizing the Hilbert curve, or some similar fractal path, so that it better maps onto actual geographic spaces. That seems like an interesting avenue, potentially: but the initial results here seem worse, not better, than traveling salesman approximations.

**Conclusions and Deus ex Machina**

So on this particular set, the best results seem to come from, in descending order,

1) Reordered hierarchical clustering

2) Traveling Salesperson solutions

3) Fractal Curves

4) Quasi-linear dimensionality reduction (east-to-west, multi-dimensional scaling, etc).

<span style="line-height: 1.714285714; font-size: 1rem;">For the general problem (European countries, say, or counties in a state) I&#8217;d probably start with reordered hierarchical clustering or TSP solutions, at least until I learn how better to fit a fractal curve to an arbitary space.</span>

But for this particular problem, I&#8217;ve got an ace in the hole: there _are _conventional orderings of states that provide an acid test. In particular, we want something that matches to [census regions](https://www.census.gov/geo/maps-data/maps/docs/reg_div.txt).

The ordering inside census regions is arbitrary, just like our clustering diagrams. So the best possible solution that includes some knowledge about the intrinsically _real _regions of the United States (the midwest, the south, etc.) is to combine the census regions with the optimal-dendrogram measures.

Putting phony clusters just from the census regions looks like this: ![](/wp-content/uploads/2014/06/Phony-Cluster.png)

I can just plug those into a dummy distance matrix so that group membership trumps any other sorts of distance: and then allow geographical distance to sort out the spinning of those trees into a more sensible order.

So, adding the constraint that census divisions and regions be kept intact, the optimal ordering looks like this: starting in Maine, traveling through the South west to Texas, skipping to the upper Midwest and then taking the same route west through the plains and mountains as the dendrogram:

![](/wp-content/uploads/2014/06/Census-Clustering.png)

Is this the perfect ordering? To my mind, it&#8217;s not: but the flaws come straight from the census, not from the algorithm. West Virginia should not in the coastal south, it should be in the same division as Kentucky; the leap from Oklahoma to Wisconsin is unfortunate, and so is the one from Florida to Kentucky. Still, the census regions constrain is quite nice to have. And unlike the unguided paths, it preserves all but one of what I intuitively think of as the essential pairings: the Dakotas, the Carolinas, Alabama-Mississippi, Vermont-New Hampshire, Kansas-Nebraska, Colorado-Wyoming.

So, let&#8217;s return to the original visualization to see what this new ordering helps us see. Remember, this original version revealed only with some serious axis-reading that the South starting using &#8220;Kevin&#8221; later.

&nbsp;

&nbsp;

![](/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-3.00.44-PM.png)

Here it is with the census-based ordering. The southern states, two-thirds of the way down the page, clearly do begin later: but now it&#8217;s also immediately evident which of them _don&#8217;t _lag as much. There are also several patterns that are immediate evident which remain completely obscure in an alphabetical ordering: usage of &#8220;Kevin&#8221; is significantly higher around 1990 in the northeast, particularly the mid-Atlantic, than it is in the rest of country. And while the South waits the longest, a lag in the Arizona-New Mexico pairing is also clear.

![](/wp-content/uploads/2014/06/Screen-Shot-2014-06-05-at-3.52.16-PM.png)

&nbsp;

This style of display also makes subtler patterns visible. &#8220;Jennifer,&#8221; for example, rises a year later in the South than elsewhere. That would be lost as visual noise in an alphabetical ordering, but is completely clear here.

Is a geographical ordering the best? Not always. Take &#8220;[Madison](http://benschmidt.org/statenames/#{{%22database%22%3A%22SSA%22%2C%22search_limits%22%3A%7B%22word%22%3A%5B%22Madison%22%5D%7D%2C%22aesthetic%22%3A%7B%22y%22%3A%22state%22%2C%22x%22%3A%22year_year%22%2C%22color%22%3A%22WordsPerMillion%22%7D%2C%22plotType%22%3A%22heatmap%22%2C%22method%22%3A%22return_json%22%2C%22counttype%22%3A%5B%22WordsPerMillion%22%5D%2C%22groups%22%3A%5B%22state%22%2C%22year_year%22%5D%2C%22scaleType%22%3A%22linear%22%7D)&#8220;: its rise shows striped bands that don&#8217;t seem to be regional. Illinois, New Jersey, Washington DC, and New Mexico all avoid the wave. In fact, if you look closer, this is clearly a racial thing: &#8220;Madison&#8221; was most popular in states with overwhelmingly white populations. (Except Wisconsin, it seems). And aside from the bend through the southwest, there aren&#8217;t a whole lot of largely-minority states in any contiguous curve.

![](/wp-content/uploads/2014/06/Screen-Shot-2014-06-05-at-4.04.51-PM.png)

&nbsp;

But on another level, that just points out more the usefulness of _some _sensible ordering to start with.
