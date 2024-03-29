---
title: 'When you have a MALLET, everything looks like a nail'
date: 2012-11-02T12:26:00.001-04:00
draft: false
url: /2012/11/when-you-have-mallet-everything-looks.html
tags:
  - Digital Humanities Now Editors' Choice
  - Ships
  - Whaling
  - Topic Modelling
  - Machine Learning
---

Note: this post is part 4, section 2 of [my series on whaling logs and digital history](http://sappingattention.blogspot.com/2012/11/reading-digital-sources-case-study-in.html). For the full overview, [click here](http://sappingattention.blogspot.com/2012/11/reading-digital-sources-case-study-in.html).

One reason I'm interested in ship logs is that they give some distance to think about problems in reading digital texts. That's particularly true for machine learning techniques. [In my last post, an appendix to the long whaling post, I talked about using K-means clustering and k-nearest neighbor methods to classify whaling voyages](http://sappingattention.blogspot.com/2012/11/machine-learning-on-high-seas.html). But digital humanists working with texts hardly ever use k-means clustering; instead, they gravitate towards a more sophisticated form of clustering called topic modeling, particularly David Blei's [LDA](http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) (so much so that I'm going to use 'LDA' and 'topic modeling' synonymously here). There's a whole genre of introductory posts out there encouraging humanists to try LDA: [Scott Weingart](http://www.scottbot.net/HIAL/?p=19113)'s wraps a lot of them together, and [Miriam Posner](http://miriamposner.com/blog/?p=1335)'s is freshest off the presses.

So as an appendix to that appendix, I want to use ship's data to think about how we use LDA. I've wondered for a while why there's such a rush to make topic modeling into _the_ machine learning tool for historians and literature scholars. It's probably true that if you only applyone algorithm to your texts, it should be LDA. But most humanists are better off applying zero clusterings, and most of the remainder should be applying several. I haven't mastered the arcana of various flavors of topic modeling to my own satisfaction, and don't feel qualified to deliver a full-on jeremiad against its uses and abuses. Suffice it to say, my basic concerns are:

1.  The ease of use for LDA with basic settings means humanists are too likely to take its results as 'magic', rather than interpreting it as the output of one clustering technique among many.
2.  The primary way of evaluating its result (confirming that the top words and texts in each topic 'make sense') ignores most of the model output and doesn't map perfectly onto the expectations we have for the topics. (A Gary King study, for example, that [empirically ranks document clusterings based on human interpretation of 'informativeness'](http://gking.harvard.edu/files/201018067_online_1.pdf) found Direchlet-prior based clustering the least effective of several methods.)

Ship data gives an interesting perspective on these problems. So, at the risk of descending into self-parody, I ran a couple topic models on the points in the ship's logs as a way of thinking through how that clustering works. (For those who only know LDA as a text-classification system, this isn't as loony as it sounds; in computer science, the algorithm gets thrown at all sorts of unrelated data, from images to music).

Instead of using a vocabulary of words, we can just use one of latitude-longitude points at decimal resolution. Each voyage is a text, and each day it spends in, say, Boston is one use of the word "42.4,-72.1". That gives us a vocabulary of 600,000 or so 'words' across 11,000 'texts', not far off a typical topic model (although the 'texts' are short, averaging maybe 30-50 words). Unlike k-means clustering, a topic model will divide each route up among several topics, so instead of showing paths, we can visually only look at which points fall into which 'topic'; but a single point isn't restricted to a single topic, so New York could be part of both a hypothetical 'European trade' and 'California trade' topic.

With words, it's impossible to meaningfully convey all the data in a topic model's output. Geodata has the nice feature that we can inspect all the results in a topic by simply plotting them on a map. Essentially, 'meaning' for points can be firmly reduced a two-dimensional space (although it has other ones as well), while linguistic meaning can't.

Here's the output of a model, plotted with high transparency so that a point on the map will appear black if it appears in that topic in 100 or more log entries. ([The basic code to build the model and plot the code is here](http://rpubs.com/benmschmidt/shipLDA)\--dataset available on request).

[![](http://2.bp.blogspot.com/-km7aAjZqBlc/UJGWJ9nuKlI/AAAAAAAADnQ/SDmg0XTd4ss/s640/Topic+Modelling+ships.png)](http://2.bp.blogspot.com/-km7aAjZqBlc/UJGWJ9nuKlI/AAAAAAAADnQ/SDmg0XTd4ss/s1600/Topic+Modelling+ships.png)

Click to enlarge

At first glance, topic modeling performs far better than it has any right to on this sort of data. A 25-topic model yields a number of distinctively 'whaling' topics (see below); if I had a dataset with no metadata but a strong sense of what these map regions might mean, I might be able to separate out whaling by picking voyages heavy in topics 18, 5, 21, 16, and 11, each of which roughly corresponds to a few of the whaling grounds in the master chart.  I was frankly surprised how well this worked; I was expecting less cognizable chunks (I thought, based on my fuzzy understanding of the math, that the Atlantic crossing might be split into two topics, for example, and that most trips would draw from several smaller chunks like that. Maybe this would be true of a 100-topic model.)

The optimistic take on this is pretty obvious:

1.  Topic modelling is amazing;
2.  Why not topic model everything?

Since that's so straightforward, let me give the pessimistic take instead.

In short, the results are not always magic, and the way that we interpret textual topic models doesn't seem as robust as geographic analysis. For example: if I ask MALLET (the software package most people use for topic modelling) for a 9-topic model instead of a 25-topic one, things look all right on first glance: you even get some nice features, like separate clusters for the routes from and to US east coast on the trade winds. Closer inspection, though, reveals some strange decisions on the part of the clustering, such as binning the western Pacific whaling grounds in with the transatlantic clipper routes (middle right), or trade around Florida with the Bering straits (lower right).

[![](http://1.bp.blogspot.com/-gJDlkvicS4o/UJGXJU6bniI/AAAAAAAADnY/mGQxDqCiAfg/s640/9+Topic+model.png)](http://1.bp.blogspot.com/-gJDlkvicS4o/UJGXJU6bniI/AAAAAAAADnY/mGQxDqCiAfg/s1600/9+Topic+model.png)

Let me blow up that topic 5 so you can see how strange it is:

[![](http://2.bp.blogspot.com/-oLbm0Tm0hdc/UJGfME-52hI/AAAAAAAADns/4Wct5osYenA/s640/Topic+5+presents+problems.png)](http://2.bp.blogspot.com/-oLbm0Tm0hdc/UJGfME-52hI/AAAAAAAADns/4Wct5osYenA/s1600/Topic+5+presents+problems.png)

The algorithm is obviously combining two very different clusters together; whaling from Hawaii, and the eastern seaboard–England shipping route. But the standard way of interpreting topic model results, looking at the top words in each topic, might have led me to label it as "transatlantic shipping", which encompasses 9 of the ten top places in the topic. (The 10th is Guam, which isn't particularly close to the larger cluster in the Pacific; no individual point in there is all that common). Are there similar sub-threshold parasite topics in MALLET output on textual data that we don't see? I'm curious if someone who knows LDA better than I can explain why this might be a quirk of this particular source, rather than a general phenomenon of the clustering algorithm. (Topic 0 in the 25-topic model has similar problems).

This is a case where I'm really being saved by the restrictive feature space of data. If I were interpreting these MALLET results as text, I might notice it, for example, but start to tell a just-so story about how transatlantic shipping and Pacific whaling really are connected. (Which they are; but so is everything else.) The absurdity of doing that with geographic data like this is pretty clear; but interpretive leaps are extraordinarily easy to make with texts.

Obviously this is an extreme test of LDA; that it performs at all is to its credit, and weird clustering results like this are probably a result of the differences between this and the data MALLET is designed for. Better priors and maybe some other sounder assumptions might fix this somewhat; ship's paths are not texts, even in the shape of their data. (In this case, I bet the model could be made a lot better by fine-tuning the alpha and beta parameters to expect less breadth of documents across words; does that sound right? For the record, their distribution across geopoints isn't too far off Zipf's law after the first ten points.)

The reason I find it useful at all for understanding topic modeling is that it's also extreme, in that it's much easier to visually see the whole results of what a topic model spits out, not just the top ten words or top 20 results. One of the things I always say about [Bookworm](http://bookworm.culturomics.org/) is that humanists need search interfaces that return more than just a unidimensional ordered list. We need that for interpreting clustering results much _more_ than we need it for search results; but it's extremely hard to do. The nice thing about geographic data is that we have a ready-made contextual system for spatially situating points that let us instantly see outliers like above. That doesn't really exist for texts. (Using word clouds for topic model results, [as Elijah Meeks does](https://dhs.stanford.edu/algorithmic-literacy/using-word-clouds-for-topic-modeling-results/), is a great idea, but word clouds are just an alternate univariate way of visualizing ordered lists.)

The lesson of the whales I'd want to apply here is that we need to be able to tune and return our results in concert with outside evidence; outside metadata, visual inspection, or (ideally) both. That's not to say LDA is completely inscrutable; Matt Jockers, for example, has done just this sort of iterative improvement on the models of the Stanford literary corpus, and that lets him made some great conclusions from the data. But even those as deep into the plumbing as Jockers, Ted Underwood, or Allen Riddell will have a hard time bringing other humanistic readers along on the interpretive choices they make in tuning their topic models, and instead will have to rely on protestations of authority. Which isn't terrible—it's standard interpretive practice—but loses one of the big benefits I've seen in humanistic research, which is that it [can help open up the act of humanistic inference to non-experts](http://sappingattention.blogspot.com/2011/06/whats-new.html).

And most humanists who do what I've just done—blindly throwing data into MALLET—won't be able to give the results the pushback they deserve. I feel like I have some sense of how points cluster in high-dimensional cartesian spaces, which helps me troubleshoot k-means results, but find myself completely unable to to intuit what might go wrong in 25-dimensional simplexes. I don't think I'm alone: and I'm not sure that we should too enthusiastic about interpreting results from machine learning which we can only barely steer.

So there are cases where topic modeling can be useful for data-creation purposes; I'm satisfied with my other way of extracting whaling voyages, for instance, but topic models would work here. But as artifacts to be interpreted on their own, topic models may be less useful. The downside of too-aggressive topic modeling is that it leads occasionally leads us to treat junk as an oracle. (This isn't specific to topic modeling, obviously: other methods I've written about in the past, like principal components analysis, can be ever worse).

## A poorly supervised machine learning algorithm is like a bad research assistant. It might produce some unexpected constellations that show flickers of deeper truths, but there are lots of ways to get creative rearrangements. If it's not doing the task we want, it's time to give it some clearer instructions, or to find a new one.

### Comments:

#### Ben, you're absolutely right that the sort of ...

[Anonymous](#) - <time datetime="2012-11-02T12:49:39.977-04:00">Nov 5, 2012</time>

Ben, you're absolutely right that the sort of problem you discover here pops up also in textual LDA. If you reduce the number of topics, you'll get things stuck together in odd ways. E.g., when Andrew Goldstone and I topic-modeled the print run of PMLA, there were some topics that combined film studies and Jewish studies. I could have constructed a big theory about that conjunction, but the reality is probably that they overlap in a couple of semantic/contextual places, and if you reduce the number of topics, things that overlap \*at all\* have to get fused.

But I would say this exemplifies a broader issue about interpretation of machine learning in general. You've got to understand the algorithm. With (most forms of) k-means and LDA, the number of clusters is an arbitrary input. (There are some sophisticated ways around that with k-means, but let's hold that thought.) So you've got to start by realizing that you can't overinterpret the points of division between topics/clusters. Those boundaries are in principle, as you're observing here, arbitrary. It is not necessarily significant that "these two things got grouped together."

But ultimately this is a potential problem for clustering as well. K-means clustering can be great, if you choose an appropriate value of k. What's an appropriate value? Well, you need to tinker ... and even when you're done tinkering, you need to realize that there's nothing absolute and inherent about those cluster boundaries. But they may still be heuristically useful.

I'll admit that LDA is a bit harder to understand, and therefore potentially more likely to function as a mystifying black box. That's no good, and I hope the MITH workshop this weekend will help combat that danger (usefully guided by your warnings here).

<hr />
#### One of the implications of the arbitrariness of k ...
[Anonymous]() - <time datetime="2012-11-02T13:15:57.602-04:00">Nov 5, 2012</time>

One of the implications of the arbitrariness of k is that, properly speaking, there's no such thing as interpreting a single cluster, or a single topic.

You have to interpret the model as a whole. That's the only way to factor out the arbitrariness of particular boundaries. But you're right that this point hasn't been made sufficiently forcefully yet to a humanistic audience.

<hr />
#### Marvelous post as always, Ben. I'd like to ext...
[Scott B. Weingart](http://scottbot.net) - <time datetime="2012-11-02T13:26:25.936-04:00">Nov 5, 2012</time>

Marvelous post as always, Ben. I'd like to extend one of your gripes to a very limited degree. When most researchers present LDA results, they show an ordered word list. Not only is the list univariate, it's also completely ordinal. At least Elijah's word clouds display the data on an interval scale; it's still not as complex a representation as it ought to be, but it displays a heck of a lot more data than those ordered lists do.

<hr />
#### Slightly incoherently: Yeah, one problem is the a...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-02T14:22:07.130-04:00">Nov 5, 2012</time>

Slightly incoherently:

Yeah, one problem is the arbitrariness of choosing K. (Machine-oriented methods for choosing 'better' k-values comes up constantly on the topic-modeling list-serve: basically, it seems like most of the solutions to it aren't especially effective). One solution to this is 'run loads of topics, and some of them will be meaningful'. Not the worst solution, as it turns out, but the whole appeal of topics to say that they correspond to something real, and we don't have the best tools to assess whether they do.

Still, I think it's a little tricky to say "you can't overinterpret the points of division between topics/clusters" when the whole thing that makes topic modeling appealing is that it creates hard and fast divisions. On this, K-means is definitely as problematic: it's just useful as a sort of garden-variety machine classification, less complicated than LDA and easier to understand. I should really do a k-means clustering of points like the one above, to see if it produces similar merged artifacts vs. just fuzzier boundaries.

I guess I worry that something about topic modeling, though, is actively sidestepping the heuristics that normally lead us to reject the arbitrary results you get when setting K.

Maybe put it this way. Hard and fast divisions are extraordinarily useful for thinking. But machine-generated ones tend not to work. So any clustering algorithm has to convince us it works. We think topic modeling works largely because it has: 1) distributions over documents and words so that you don't have to have a single bin for each word or document; in that way, it's just better.

But at the same time, topic modeling also succeeds because it has 2) output that's difficult to falsify, because the top n documents and the top n words tend to intuitively make sense. (Except when they don't, which is when we throw it out as a 'junk topic,' which we don't have a cognitive problem with.) Again, this is also true of k-means, but we often reject k-means document results outright. And K-means results are slightly more susceptible to being interpreted visually (you can drill through plots of the top principal components on whatever vectors you're classifying on, say, to get some basic spatial sense). I think I care more about having visual fallbacks than most people, but we need _some_ fallbacks.

It's not clear to me that picking a clustering algorithm that works for top-n documents and top-n words is the best possible way. Would topic modeling succeed over its competitors equally well if we had some uncorrelated test of how well clustering algorithms succeed? The reason I keep thinking about that Gary King paper is that it suggests it might not.

<hr />
#### Yeah, that's a good point. Random question, f...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-02T14:28:13.134-04:00">Nov 5, 2012</time>

Yeah, that's a good point.

Random question, for you or anyone in these comments: sometimes I think we shouldn't exclude stopwords in topic model results, either; feels like a funny hack just to preserve the illusion we're looking at epistemological categories, not computerized results. Is that just curmudgeonly?

<hr />
#### To restate the end of my last comment more succinc...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-02T14:57:38.555-04:00">Nov 5, 2012</time>

To restate the end of my last comment more succinctly: I don't know how to assess the validity of the following statement: **The apparent advantages of LDA over other clustering algorithms are primarily artifacts of the indicators of quality we like to use (top-n lists of documents and words), and it tends to be un-extraordinary on other metrics (like visual scatters across a map, or King's surveys about similarity-score usefulness).**

<hr />
#### In case this ends up confusing anyone, my longer c...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-02T14:58:25.813-04:00">Nov 5, 2012</time>

In case this ends up confusing anyone, my longer comment below is in reply to this.

<hr />
#### Amazing as ever, Ben. Though I have to say in term...
[Andrew Goldstone](http://www.rci.rutgers.edu/~ag978) - <time datetime="2012-11-02T15:34:03.143-04:00">Nov 5, 2012</time>

Amazing as ever, Ben. Though I have to say in terms of outreach to humanists, comments like "I feel like I have some sense of how points cluster in high-dimensional cartesian space...but find myself completely unable to to intuit what might go wrong in 25-dimensional simplexes" may pose trouble. (Because it's "simplices.")

Anyway, this is a very concrete demonstration of the vague worry I have as a statistically undereducated person in looking at topic modeling: how do I evaluate the quality of the model? When I make a topic model, what can I report as an index of the fit? The introductory presentations of LDA emphasize its use as a heuristic: this might help you discover related stuff in a big archive of documents. For the heuristic use the possibility of artificially "fused" topics and nonsense isn't a big deal. But one also wants to use the classification itself--the whole model, as Ted says, not any individual topic--and the introductions I've looked at say much less about how to tell a dataset that is well modeled by LDA from a set that isn't. Inspecting top n words for a theme is dangerous, because of the Ay-very-like-a-whale problem. Anyway this is definitely chastening me and making me want to be very careful how I report any LDA result.

It's at first surprising and then not surprising that the spatial voyage data worked: surprising because you're throwing out the time ordering of the data! how can that not matter! then not surprising, because the spatial continuity of the track of a voyage guarantees that LDA will be able to do something with the way coordinates co-occur in a document.

Maybe it would be helpful to try to come up with a document set, textual or not, that MALLET just completely bombs on. Uh...

<hr />
#### I wouldn't want to claim that LDA is "bet...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750) - <time datetime="2012-11-02T16:38:36.009-04:00">Nov 5, 2012</time>

I wouldn't want to claim that LDA is "better" than k-means at all. They do different things. K-means works by measuring similarity. It's often used to cluster documents -- but you could use it to cluster features (represented as distributions over document-space).

To the extent that LDA can be conceived as clustering (which I think is only "sorta"), it's clustering specific _occurrences_ of features. And it doesn't do that by measuring similarity between them; it just assigns them to "bins." That's a basically different approach. So I wouldn't use LDA to produce a metric of similarity at all. (I think King is actually talking about a different algorithm.)

I also agree that the current popularity of LDA is in danger of making "everything look like a nail." Humanists are probably more commonly interested in grouping documents than they are in grouping "kinds of vocabulary." But in that case, we need classification or clustering algorithms, rather than LDA. People should also be familiar, e.g., with the hierarchical clustering algorithm you've used so effectively. Hierarchical clustering does have the advantage of not producing those arbitrary divisions.

<hr />
#### Stopwords are definitely a "pay no attention ...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750) - <time datetime="2012-11-02T17:07:20.017-04:00">Nov 5, 2012</time>

Stopwords are definitely a "pay no attention to the man behind the curtain" moment. My experience has been that choices about stopwords profoundly shape the results. E.g., if you include personal names when you model fiction, it just doesn't work, because you'll get an "Elizabeth" topic.

Does this mean we can't exclude stopwords? Well, my attitude to LDA is that it's useful as a heuristic, not as evidence. I know that's not how people are imagining it right now, and I'm afraid there's going to be some disillusionment ... But if you're approaching it as a heuristic, there's no reason not to exclude whatever stopwords you want. It's not about proof, for me, it's about making the heuristic work for you.

<hr />
#### But I wouldn't say that about all algorithms. ...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750) - <time datetime="2012-11-03T08:34:46.122-04:00">Nov 6, 2012</time>

But I wouldn't say that about all algorithms. I _would_ be willing to use corpus comparison, or a classification algorithm, as evidence -- both because they're simpler and because they're answering a more sharply-defined sort of question.

So I guess I'm agreeing with you about LDA. I think it's a great way to map a large collection that you couldn't otherwise survey. But if people want to produce evidence, they might be better off with a simpler algorithm.

<hr />
#### Thanks, that's helpful. It's true, King is...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-03T09:26:47.911-04:00">Nov 6, 2012</time>

Thanks, that's helpful. It's true, King is citing a [different Blei-Jordan DIrechlet paper](http://www.cs.princeton.edu/~blei/papers/BleiJordan2004.pdf); I'm just guessing that for document purposes it might be similar. And then there's a tendency to cluster inside the topic space that you create; I saw Project Bamboo do something like that once with PCA, and tried it on the ships on lark. (Didn't work, probably because there's too little dimensionality; higher-k topics on this set seem to produce about 60% random scatters).

<hr />
#### Can't tell you how many times I've _almo..._
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-03T09:44:40.467-04:00">Nov 6, 2012</time>

Can't tell you how many times I've _almost_ finally convinced a humanist that close reading is obsolete and only computers can truly appreciate an author's intentions, only to lose them at the last moment by carelessly saying 'corpuses' instead of 'corpora.'

Yeah, it's the aggregate results that are so tricky. That question I was asking you at Rutgers about the super-Ngrams people tend to make with topic models falls into the same bin, I think. I've wondered if doing something on every edition of Shakespeare published over 200 years would fail in a demonstrative way. (Although yeah, it would also still work. Grr.)

<hr />
#### Inclusion of stopwords, and what makes it into the...
[Scott B. Weingart](http://www.scottbot.net) - <time datetime="2012-11-03T20:42:22.041-04:00">Nov 6, 2012</time>

Inclusion of stopwords, and what makes it into the stopword list, largely depends on your use. As Ted says, model results should be used as heuristics; in cases of poetry analysis, authorship attribution, etc., not using stopwords is generally ideal. When looking for trending topics in scientific articles, stopwords are pretty useful.

<hr />
#### Wow, I had missed the LDA-as-authorship-attributio...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-11-03T22:03:58.902-04:00">Nov 6, 2012</time>

Wow, I had missed the LDA-as-authorship-attribution-technique papers. Obvious in retrospect… You're saying not using stopwords there is ideal? I would have thought the opposite, given the standard literature on authorship attribution; seems to be at least one paper out there suggesting that LDA on stopwords ALONE is the best as classifying Federalists papers. Which makes sense, but, yuck.

I've got to think a bit more about this "whole model" thing, because it's not something I'm sure anybody is doing.

<hr />
#### Sorry, er, I meant "not using a stopword list...
[Scott B. Weingart](http://www.scottbot.net) - <time datetime="2012-11-04T01:26:32.870-05:00">Nov 0, 2012</time>

Sorry, er, I meant "not using a stopword list \*at all\*" with regards to the poetry and authorship studies, and then using a stopword list for scientific articles, so reverse what you thought I'd said.

Anyway, there are better ways to attribute authorship, it's just something I'd pulled off the top of my head, haven't actually tried to compare it to the usual methods. Jockers likes to split up stylistic and thematic similarity, but both make up an author's unique thumbprint, so I imagine LDA might still be useful in that regard.

<hr />
#### Most of this conversation passed far over my head....
[Yoni]() - <time datetime="2012-11-05T14:41:36.844-05:00">Nov 1, 2012</time>

Most of this conversation passed far over my head. But I thought of it again when I read this [account](http://bostonglobe.com/ideas/2012/11/03/how-twitter-language-reveals-your-gender-your-friends/e68H6Z0Z2GAfnJ6UjU3IxO/story.html) of gender, affective language, and Twitter. It describes the work of a clever Stanford linguist named Tyler Schnoebelen, who used topic-modeling on 14k users to classify their language by gender. ([Gender in Twitter: Styles, stances, and social networks](http://arxiv.org/abs/1210.4567)) In a separate paper, also part of his doctoral work, he looked at the use of emoticons, using a corpus of 39 million American tweets. ([Do You Smile with Your Nose? Stylistic Variation in Twitter Emoticons](http://repository.upenn.edu/pwpl/vol18/iss2/14/))

What's striking about the work is that after producing apparently-robust-yet-facile conclusions from simple topic modeling, a model that was 88% predictive of a user's actual gender based on the incidence of certain words, he went back and looked further down the list. That, in turn, enabled him to identify smaller populations of users whose patterns of language use differed significantly from gendered norms. And these populations exhibited other differences, too - their interactions skewed toward users of the opposite gender.

I'm less interested in his specific findings than in his approach. If he'd set out to find ways to classify users by gender, he might've declared success after his initial round of analysis - or refined his topic-modeling to make it even more tightly predictive. But, from his papers, it seems he was much more interested in subverting facile gender dichotomies than in reinforcing them, so he dug a little deeper. And he probably could've gone further, still. I suspect that even among the 88% of users whose gender was correctly predicted by topic modeling, there'd be some fascinating differences in incidence of specific words and constructions that reflect very different constructions of gender - much that way that if you'd been looking to identify east-west voyages, Topic 5 would've been highly predictive, even though it lumps together Hawaiian and Transatlantic routes that are fundamentally dissimilar.

I don't know that it adds much, other than to highlight the fact that the quality of the corpus and the sophistication of the algorithm probably matter a whole hell of a lot less than the innate skepticism and curiosity of the researcher.

<hr />
#### I have not come across LDA before but to me (a sta...
[Unknown](https://www.blogger.com/profile/14586290254444971774) - <time datetime="2012-11-06T01:42:41.887-05:00">Nov 2, 2012</time>

I have not come across LDA before but to me (a statistician with an interest in mixtures of distributions) it seems the same as LCA, Latent Class Analysis, a form of mixture modelling attuned to categorical data.  
Mixture modelling can be used for clustering but it is not as straightforward and 'black-boxy' as algorithmic clustering methods.

There is an excellent web page http://john-uebersax.com/stat/ by John Uebersax which deals at length with various aspects of LCA (?= LDA) from a social and medical science perspective.

Passing on the link was all I wanted to do, really, but I could add that one of the difficult aspects of using LCA is choosing the number of classes, a point that Ben's post illustrates. On the positive side LCA deals quite well with overlapping clusters, which is not done very well by distance-based clustering methods. K-means, which Ben seems to like has quite a few features in common with mixture models, but is not formally based of an statistical model.

<hr />
#### I was very pleased to find this site. I wanted to ...
[webexpert66](https://www.blogger.com/profile/08713596422905473588) - <time datetime="2013-10-08T02:00:23.790-04:00">Oct 2, 2013</time>

I was very pleased to find this site. I wanted to thank you for this great read!  
[HP0-Y46](http://www.cert4prep.com/HP0-Y46.html)

<hr />
