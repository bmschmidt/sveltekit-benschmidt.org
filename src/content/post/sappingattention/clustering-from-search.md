---
title: 'Clustering from Search'
date: 2011-01-11T10:12:00.001-05:00
draft: false
url: /2011/01/clustering-from-search.html
tags:
  - Evolution
  - Data exploration and visualization
---

Because of my primitive [search engine](http://sappingattention.blogspot.com/2011/01/basic-search.html), I've been thinking about some of the ways we can better use search data to a) interpret historical data, and b) improve our understanding of what goes on when we search. As I was saying then, there are two things that search engines let us do that we usually don't get:

1)  Numeric scores on results  
2) The ability to from a set of books to a set of high-scoring words, as well as (the normal direction) from a set of words to a set of high-scoring books.

We can start to do some really interesting stuff by feeding this information back in and out of the system. (Given unlimited memory, we could probably do it all even better with pure matrix manipulation, and I'm sure there are creative in-between solutions). Let me give an example that will lead to ever-elaborating graphics.

An example: we can find the most distinguishing words for the 100 books that use “evolution” the most frequently:

\> books = names(sort(TFIDF.from.usage("evolution"),decreasing=T))

working on item number 1 of 1 (evolution)...

\> bookTFIDF(books)\[1:10\]

evolution    organisms     organism      organic      mammals  vertebrates    phenomena    sociology

0.0039030229 0.0014772785 0.0012406171 0.0010053423 0.0009848822 0.0009823578 0.0009781454 0.0009637798

fig   intestinal

0.0008745183 0.0008426900

Evolution itself is the most common, but we get a bunch of other words in there—most have to do with biological evolution. "Intestinal" probably includes a lot of course-of-diseases descriptions, and "sociology," of course, is the discourse that I'm most interesting. So that's interesting, but nothing new.

What I think is kind of cool, though, is that we can tell the computer to go into  _those_ words. We can do a bunch of searches to see what words distinguish books that score highly on a search for “evolution” and “organisms”, and what words distinguish books that score highly on a search for “evolution” and “society.” (Note--I'm just arbitrarily using the top hundred books using a word as my cutoff to find interesting words here, but if I had more processing power, I'd like to try weighting the results on a scale related to their search score).

A lot of those words will be the same. “Organism” and “organisms”, for instance, have a lot of the same vocabulary when we do co-search with evolution:

\> bookTFIDF(books\[1:100\])\[1:10\]  
  evolution    organism   organisms   molecular   psychical     organic  
0.002821304 0.002344120 0.001888864 0.001626369 0.001358292 0.001274280  
  phenomena       cells integration environment  
0.001142712 0.001058429 0.000937243 0.000915636

\> bookTFIDF(books\[1:100\])\[1:10\]  
    evolution     organisms      organism   integration       organic  
  0.002881946   0.002109943   0.001685654   0.001314584   0.001276740  
        cells     molecular heterogeneity     phenomena           fig  
  0.001170736   0.001144163   0.001051732   0.001030783   0.001026932

We can use the information on co-occurrence to cluster words together into patterns of co-use. This is why I was so bold, Hank, as to call what I was doing looking at "discourses"--these sorts of scores let us start to cluster words into general conversational groups.

\[In the language of text analysis, of course, I'm drifting towards not discourses, but a simple form of topic modelling. But I'm trying to only submerge myself slowly into that pool, because I don't know how well fully machine-categorized topics will help researchers who already know their fields. Generally, we're interested in heavily supervised models on locally chosen groups of texts. Plus, like Pierre Menard, I find it more fun to reinvent the wheel than to be the first one to invent the—what's something crappy and wheel related?—[steering-wheel desk](http://www.amazon.com/Wheelmate-Laptop-Steering-Wheel-Desk/dp/B000IZGIA8).\]

There are a lot of ways to approach the data, and I don't know the best one. Here are three. Don't think of these as static visualizations, which isn't exactly my thing, but as a process that we can redo for any word or words. When we don't know about a word or phrase, it can be helpful in rapidly immersing us into information about what discourses it occurs in and helping us do things like craft smarter searchers. When we know a lot, there will always be some data that sticks out as odd--figuring out why that seems odd is a route to better understanding.

1\. We can ask for 7 clusters using [k-means clustering](http://www.autonlab.org/tutorials/kmeans.html) (powerpoint PDF, but it's the one I found useful), on about a hundred words highly tied to “evolution."  I’ve invented the labels, but the results themselves and the choice of the words to cluster all came out TF-IDF scores.

\> clusters = 7; kmeans(graph,clusters,20,nstart=10)$cluster -> dat; lapply(1:clusters, function (i) {names(dat\[dat==i\])})

**Zoology and microbiology?**

\[1\] "amphioxus"     "animals"       "apes"          "cell"

\[5\] "cells"         "development"   "embryo"        "evolution"

\[9\] "evolutionary"  "fishes"        "heredity"      "layer"

\[13\] "mammals"       "membrane"      "nutrition"     "ontogeny"

\[17\] "organisms"     "organs"        "physiological" "primitive"

\[21\] "protoplasm"    "reptiles"      "sexual"        "tertiary"

\[25\] "theory"        "tissue"        "vertebrate"    "vertebrates"

**Anatomy**

\[1\] "anterior"  "cavity"    "dorsal"    "fig"       "gastrula"

\[6\] "posterior" "ventral"

**Chemistry, math, etc.?**

\[1\] "actions"          "aggregate"        "aggregates"

\[4\] "chemical"         "differentiations" "equilibration"

\[7\] "equilibrium"      "genesis"          "heterogeneity"

\[10\] "heterogeneous"    "hypothesis"       "integrated"

\[13\] "integration"      "molecular"        "molecules"

\[16\] "motion"           "motions"          "similarly"

\[19\] "units"            "vegetal"

**Philosophy, etc**

\[1\] "chromosomes" "comte"       "cosmic"      "fiske"

\[5\] "fiskes"      "germlayers"  "intestinal"  "kant"

\[9\] "obvgootlc"   "philosophy"  "polygyny"    "science"

\[13\] "scientific"  "spencer"     "tho"         "universe"

\[17\] "youmans"

"obvgootlc," I'm sure, is an OCR misreading of the "Digitized by Google" watermarks on a bunch of scans. I've given up trying to root those out for the time being, since they don't corrupt the rest of the data that much.

**Darwinism proper**

\[1\] "darwin"     "darwinism"  "darwins"    "geological" "huxley"

\[6\] "plants"     "selection"  "species"    "variation"

**Biological science?**

\[1\] "axis"            "biology"         "complex"

\[4\] "differentiation" "environment"     "homogeneous"

\[7\] "inorganic"       "morphological"   "nervous"

\[10\] "organic"         "organism"        "phenomena"

\[13\] "processes"       "structures"      "tissues"

\[16\] "variations"      "vascular"        "yelk"

**Social Darwinism!**

\[1\] "activities"    "altruism"      "altruistic"    "biological"

\[5\] "consciousness" "economic"      "egoistic"      "ethical"

\[9\] "ethics"        "factors"       "objective"     "psychical"

\[13\] "psychology"    "social"        "sociological"  "sociology"

\[17\] "subjective"

That's K-means clustering. We can also create hierarchical trees using Ward's clustering algorithm, also in R:

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TSUIggGyASI/AAAAAAAACaY/jxkPHuTQmAM/s1600/Evolution+words+Dendrogram.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TSUIggGyASI/AAAAAAAACaY/jxkPHuTQmAM/s1600/Evolution+words+Dendrogram.png)

There are a lot more details to get out of a hierarchical chart like this. I think my favorite is that "Huxley" is closer to "Darwinism" than any other word, followed by "evolution." Remember, all these correlations are limited to books that use 'evolution' AND the listed word, so a word like "theory" doesn't necessarily get to have all its other meanings. It's also interesting to see just how different the anatomical language is from everything else (the last five words on the chart). I also like seeing how Fiske, Kant, Spencer and Comte each appear amidst a slightly different cluster of words in the philosophical grouping near the top. If only the sample ran a little later, this is surely where Dewey would land.

Finally, I wondered if there was some way to capture the strength of ties among words using some sort of force-directed placement algorithm like the ones usually used for social networks. Each word has different strengths of ties to other words. This doesn't totally work, but it's a little interesting nonetheless, so I might as well post it. (click to enlarge). It's also a slightly different set of words, as I've kept tweaking with the selection mechanism. With enough work I think one could create some interesting visualizations. But right now, I see the good of this sort of work in helping perfect searches, and I'm not sure how deep the insight we get from this sort of view are.

But we shouldn't underestimate shallow insights--that's what computers are best at, and the best of us need them. Reminders of common words, the ability to skim through areas for words in a family, and so on—can be very valuable in the places we might fall flat. (It took one of these, for example, to remind me that a lot of 19th century books that use the word 'society' do so in the context of missionaries).

Historians do a tremendous volume of searches, and we don't always remember just what it is we know. To stretch for an analogy: Intermediate pianists should often play a scale in the key before striking out on a piece to reacquaint their fingers with the environment of the new key. Reviewing visualizations can serve something of the same purpose—reminding us what we know before we try to apply that knowledge, so we're less likely to make common mistakes.

Also, of course, it's just fun to see the words arrange themselves into networks that seem to instantiate some sort of semiotic web. There's social Darwinism in the upper left,  geology on the right, and a cluster of words—species, sexual, cell— at the heart. Sometimes it's just good to confirm what we already know through a different path.

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TSvdsn9pH9I/AAAAAAAACbY/bVi54GyH-2c/s400/evolution+social+network.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TSvdsn9pH9I/AAAAAAAACbY/bVi54GyH-2c/s1600/evolution+social+network.png)

[  
](http://1.bp.blogspot.com/_Pge31alC_E8/TSVh5UbQIPI/AAAAAAAACak/p2GeUXBJSAk/s1600/evolution++social+network.png)

---

### Comments:

#### Good stuff, Ben. Are you purposefully riling up de...

[Hank]("noreply@blogger.com") - <time datetime="2011-01-11T12:24:53.077-05:00">Jan 2, 2011</time>

Good stuff, Ben. Are you purposefully riling up defenders of (more traditional definitions of) discourse by adopting the term instead of a different one?

I wonder because you're still going to get push-back from those who think the sorts of thinking you're doing here (which they'll \*have\* to admit is thinking) is at a level of remove from the sorts out of which historians make their livings.

Of course, this is something you agree with, more-or-less explicitly, in this post - by suggesting we use some of these tools as refreshers, or primers, or a means of getting up over before we dig down deep, you've again defined a terrain for these search tools that separates them off from those with which other (older) scholars are increasingly, haltingly, and then, all of a sudden, stubbornly familiar.

Which, come to think of it, might make the entree of all of this a bit easier - a dash of novelty, a gesture at familiarity. We just don't want it to become another Wordle...

<hr />
#### I've enjoyed this post and several earlier one...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-01-11T17:30:50.495-05:00">Jan 2, 2011</time>

I've enjoyed this post and several earlier ones.

The word "discourse" gets used differently in different subfields, but the way you're clustering texts here does feel to me rather similar to the way I use "discourse," in practice, as a literary historian.

I agree that it's useful to be reminded of what we already know -- in part because we're not always really \*sure\* that we know it. But it's not hard to see how this approach could also lead to the discovery of patterns that we weren't in fact expecting.

You could apply a similar method to different kinds of initial "seeds." For instance, I would be very interested in starting simply with a list of terms whose frequencies seem to peak (say) in a particular twenty-year period, as compared to the twenty years before and after. You'd get terms peaking for a whole range of different reasons. Then you might break that list up into "discourses" using something like the method you're outlining here. In doing that, I suspect we would discover some very predictable patterns connected to known events -- but also perhaps some surprising clusters of concepts that define a "discourse" specific to the period.

<hr />
#### Your technique of clustering based on tf-idf weigh...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-01-12T10:13:38.554-05:00">Jan 3, 2011</time>

Your technique of clustering based on tf-idf weighting seems really promising to me.

I don't have tools yet that can do this properly, but I couldn't resist writing a post that speculates about other ways one could use the same technique.

http://tedunderwood.wordpress.com/2011/01/12/identifying-topics-with-a-specific-kind-of-historical-timeliness/

<hr />
#### Btw, if I characterized the mechanics of your tech...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-01-12T10:16:04.390-05:00">Jan 3, 2011</time>

Btw, if I characterized the mechanics of your technique inaccurately, please let me know so I can correct it. I think I grasp the way you do this, but I might be getting something wrong.

<hr />
#### @Hank - With 'discourse,' I'm definite...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-01-13T15:20:25.790-05:00">Jan 4, 2011</time>

@Hank - With 'discourse,' I'm definitely trying to go the comfort route more than the provocation one. Historians toss around discourse and language to mean all sorts of things, and my point—I know it's tendentious, too—is that the structuralist language of discourse and languages and communities is actually really amenable to computerized analysis. You're right that it's thinking a level removed from a lot of historical work, but the point I'm fixated on right now (ie, the last month or so) is that that level has always existed in the form of finding and classifying relevant documents. But now there's a whole new infrastructure we need to understand that supplements relationships to librarians and archivists, whom historians have always known are our most important partners and whose trades we've always tried to understand.

@Ted–Thanks, I've enjoyed reading your blog, too. I'll try to pop by later and be a little clearer about a few of the corners that I've cut, but you're definitely helping me to think about a few things. I'm been interested in timeline curve similarity since the start of this blog, but it's hard to compare all words in terms of peak period just for memory reasons, although I'm sure I could better. That's mostly to say—thanks for pushing me back in a direction I've been meaning to go, and I hope I can figure out how to do it.

<hr />
#### Ben - Good stuff. Very quickly: I think you'r...
[Hank]( "noreply@blogger.com") - <time datetime="2011-01-15T09:56:08.899-05:00">Jan 6, 2011</time>

Ben -

Good stuff. Very quickly: I think you're right on about these tools being amenable to the "structuralist language" that revolves around discourse/languages/communities, and vice versa (as you state yourself).

This suggests to me that these tools can do more than pitch themselves as a supplement to librarians/archivists, or to "a lot of historical work," or to the sorts of interpretation and fine-grained Renaissance-style humanism people fear is on the way out if we let computers run the show.

Instead, these sorts of tools \*can\* be pitched as part of a return to that structuralism that, while floating around (<--see?) when we invoke discourse or language, gets left out of analysis in favor of individual agency and choice.

Does that sound right?

<hr />
