---
title: 'Keeping the words in Topic Models'
date: 2013-01-09T12:55:00.000-05:00
draft: false
url: /2013/01/keeping-words-in-topic-models.html
tags:
  - Digital Humanities Now Editors' Choice
  - Changes in language over time
  - Topic Modelling
---

Following up on my [previous topic modeling post](http://sappingattention.blogspot.com/2012/11/when-you-have-mallet-everything-looks.html), I want to talk about one thing humanists actually do with topic models once they build them, most of the time: chart the topics over time. Since I think that, although Topic Modeling can be very useful, there's too little skepticism about the technique, I'm venturing to provide it (even with, I'm sure, a gross misunderstanding or two). More generally, the sort of mistakes temporal changes cause should call into question the complacency with which humanists tend to  'topics' in topic modeling as stable abstractions, and argue for a much greater attention to the granular words that make up a topic model.

In the middle of this, I will briefly veer into some odd reflections about how the post-lapsarian state of language. Some people will want to skip that; maybe some others will want to skip to it.

Humanists seem to want to do different things with topic models than the computer scientists who invented them. David Blei's group at Princeton (David Mimno aside) most often seem to push LDA (I'm using topic modeling and LDA interchangeably again) as an advance in information _retrieval_: making large collections of text browsable by giving useful tags to the documents. When someone gives you 100,000 documents, you can 'read' the topic headings first, and then only read articles in the ones that interest you.

Probably there *are* people using LDA for this sort of thing. I haven't it seen it much in practice, though: it just isn't very interesting\* to talk about. And while this power of LDA is great for some institutions, it's not a huge sellling point for the individual researcher: it's a lot of effort for something that produces almost exactly the same outcome as iterative keyword searching. Basically you figure out what you're interested in, read the top documents in the field. If discovery is the goal, humanists would probably be better off trying to get more flexible search engines than more machinely learned ones.

_\*I spun around a post for a while trying to respond to [Trevor Owens' post about the binary](http://www.trevorowens.org/2012/11/discovery-and-justification-are-different-notes-on-sciencing-the-humanities/) of  "justification" and "discovery" by saying that really only justification matters, but I couldn't get it to cohere—obviously discovery matters in some way. That post of his is ironclad. So I'll just say here that I think conversations which are purely about discovery methods are rare, and usually uninteresting; when scholars make public avowals of their discovery methodology, they frequently do it in part as evidence for the quality of their conclusions. Even if they say they aren't. Anyhow._

So instead of building a browser for their topics, humanists like to take some or all of the topics and plot their relative occurrence over time. I could come up with at least a dozen examples: in DH, one of the most high-profile efforts like this is Rob Nelson's [Mining the Dispatch](http://dsl.richmond.edu/dispatch/). On the front page is this plot, which assigns labels to two topics and uses them to show rates of two different types of advertising.

[![](http://1.bp.blogspot.com/-v9fjaTA4DkI/UJgcN74p7lI/AAAAAAAADoA/5FJp40726mQ/s640/Nelson.png)](http://1.bp.blogspot.com/-v9fjaTA4DkI/UJgcN74p7lI/AAAAAAAADoA/5FJp40726mQ/s1600/Nelson.png)

There's an obvious affinity between plotting _topic_ frequencies and plotting _word_ frequencies, something dear to my heart. The most widely-used line charts of this sort are Google Ngrams. (The first time I myself read up on topic modeling was after seeing it referenced in the comments to [Dan Cohen's first post about Google Ngrams](http://www.dancohen.org/2010/12/19/initial-thoughts-on-the-google-books-ngram-viewer-and-datasets/).) [Bookworm](http://bookworm.culturomics.org/) is obviously similar to Ngrams: it's designed to keep the Ngrams strategy of investigating trends through words, but also foreground the individual texts that underlie the patterns: it makes it natural to [investigate the history of books using words, as well as the history of words using books](http://sappingattention.blogspot.com/2011/09/bookworm-and-library-search.html).

Bookworm/Ngrams-type graphs and these topic-model graphs promote pretty much the same type of reflection, and share many of the same pitfalls. But one of the reasons I like the Ngrams-style approach better is that it wears its weaknesses on its sleeves. Weaknesses like: vocabulary changes, individual words don't necessarily capture the full breadth of something like "Western Marxism," any word can have multiple meanings, an individual word is much rarer.

Topic modeling seems like an appealing way to fix just these problems, by producing statistical aggregates that map the history of ideas better than any word could. Instead of dividing texts into 200,000 (or so) words, it divides them into 200-or-so topics that should be nearly as easy to cognize, but that will be much more heavily populated; the topics should map onto concepts better than words; and they avoid the ambiguity of a word like "bank" (riverbank? Bank of England?) by splitting it into different bins based on context.

So that's the upside. What's the downside? First, as [I said last time](http://sappingattention.blogspot.com/2012/11/when-you-have-mallet-everything-looks.html), the model can go wrong in ways that the standard diagnostics I see humanists applying won't work. (Dave Mimno points out that MALLET's diagnostic package _can_ catch things like this, which I believe; but I'm not clear that even the humanists using topic modeling are spending much time using these.) Each individual model thus takes some serious work to get one's head around. Second, even if the model works, it's no longer possible to judge the results without investment in the statistical techniques. If I use Ngrams to argue that Ataturk's policies [propelled the little city of Istanbul out of obscurity](http://books.google.com/ngrams/graph?content=Istanbul&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=) around 1930, anyone [can explain why I'm an idiot](http://books.google.com/ngrams/graph?content=Istanbul%2CConstantinople&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=). If I show a topic model I created, on the other hand, I'll have a whole trove of explanations at hand of how it doesn't match the problems you see.

\~~~~~~~~~~~~~~~  
Digression: Fundamentally, this starts to get into some really basic questions about modeling and magic. Permit me three paragraphs off the hook. My general stance is that quantification hasalways been a fundamental part of humanistic practice we shouldn't shy away from, but that there's a great deal to be said for the sort of quantification we do being _simple_ in the sense of easily communicated or argued against. That has implications for public evidence, for private discovery, and for public discovery. I have a post somewhere in the hopper about Edward Gibbon and all of this.

I think—although I'm not sure that practice bears me out—that most of the arguments against any particular Ngram are widely accessible. That's because we know what words are: we care incredibly deeply about them, have a nearly religious veneration for words. One of the most important objections against using Ngrams for research is that words don't bear a straightforward relationship to actual concepts. And that's not just a methodological objection: the sundering of a direct relation between signifier and signified is sometimes attributed to [Fall of Man](http://townsendlab.berkeley.edu/frankfurt-school-working-group/files/walter-benjamin-language-such-and-language-man-1916). If people are blaming Eve for something, you know it's a serious problem.

So the question is: does replacing words with topics sidestep all that mystical weight? Obviously not. Are—on the other hand—the results of topic modeling so appealing because they seem to lift the burden of living in a fallen world from our shoulders? Honestly, I kind of think so. One of the things that's so appealing about having computers re-arrange texts is that the arbitrariness of words, all their problems and complexities, is a fundamental fact of human life. Part of the freshness of reading machine-derived aggregates is the Edenic joy of being able to imagine what it would be like to work with pure ideas, free from the prison-house of language. It's no wonder we grab at any chance.  
\~~~~~~~~~~~~~~~~~~~~

OK, digression over. The assumptions in LDA will create some problems, though, and an under-used way to find them is making sure to incorporate the individual words as well as the individual works into the way we analyze topic models. One reason I keep forging ahead with projects tracking anachronisms in fiction is that I'm fascinated by how regular linguistic change is. LDA, though, assumes stasis.\*

_\*More advanced topic modeling like dynamic topic models and Topics over Time don't. But they require specific assumptions about the way discourses change that are much more challenging than those in vanilla topic modeling, which is probably one reasons humanists never seem to use them. A quick run-down on why humanists shouldn't use Topics over Time is at the end of this post._

That means on the surface, topics are going to look constant: but even aside from the really obvious shifts (Petrograd->Leningrad->Petersburg) there's going to be a strong undertow of change. In any 150-year topic model, for example, the spelling of "anyone" will change to "any one," "sneaked" to "snuck", and so forth. The model is going to have to account for those changes somehow. In my experience, there tend _not_ to be topics that straightforwardly map onto general linguistic drift, though (am I wrong?) Instead, it finds its place among the other topics as a sort of undertow in other topics that are _also_ thematically related in real ways. W can't see that undertow—the surface is still—but it's treacherous.

\[Yes, I'm using a metaphor where I should be using a formula here. Hopefully someone with the math will shout me down if I'm seriously off base here.\]

The result is, for example, that in long duration corpuses (over 40 years, say) there should start to be a pretty strong trend to split topics up over time even when they're conceptually clean; and for shorter ones (like newspapers) there may be strong forces driving cyclic patterns. For all I know, I should emphasize, the effect of this is trivial. But since humanities-topics tend to be a lot less obviously coherent than the science-topics Blei's original papers modeled, I wonder just how strong a role this drift plays.

Anyhow, I've been wondering about this for a while. After I started this post, [Andrew Goldstone](http://andrewgoldstone.com/blog/2012/12/13/pmla/) and [Ted Underwood](http://tedunderwood.com/2012/12/14/what-can-topic-models-of-pmla-teach-us-about-the-history-of-literary-scholarship/) put together a tour-de-force post whose centerpiece is topic models of PMLA. One of their arguments is that the individual topic is too _small—_"interpreters really need to survey a topic model as a whole, instead of considering single topics in isolation." They argue we need to look at networks of interconnection through the whole thing in the course of looking at individual topics. This is true, and I want to underline that one implication is that it's not so easy to pull out an individual topic and chart it because—for example—there may be another set of topics that it displaces at once.

But I want to make a reminder on the other hand that's based in changes in language over time: understanding one single topic is much too _big._ It presumes a lot to just take a topic as constant through time. In particular, we should be using the individual word assignments that topic models produce, not just taking the labels (as listed by the top-10 words) as intrinsically meaningful.

**An experiment in lazy topic modeling.**

I wanted to see this, so I pulled Goldstone's scripts off github and the 3500 longest PMLA articles from Jstor, and built my own 125-topic model to look for places where it breaks. I should be completely clear that I have been far sloppier about my methods and results than they were (I'm just using the out-of-the-box stopword list, I just took the first model out of the gate, etc). Theirs seems like a model project just because it is digging deeply into one particular model. I do want to push back against the idea—perhaps the straw man—that more people should start integrate topic modeling into their work flow. I don't think that it's necessarily a good idea for someone to just fire up MALLET and let the intuitions start rolling in. And I want to argue that any serious literary/historical use of topic modeling should absolutely include in-depth observations of how individual tokens are categorized, not just the relations between topics.

The primary appeal of topic modeling, again, is that you get a single topic which \_means\_ something. So for example, one of the topics I produced would be called **"grant state twain language foreign bs teachers."** It's a little difficult to characterize, you can see, but probably it has something to with education and nationalism in the late 19th century United States. Probably it falls over time. We could look at this sort of thing.

But it's actually stranger than that. One of the things I liked about shipping data was that we could see everything in the model on a chart. That's hard to do with words, but we can at least load in all the data (using the option to dump the full MALLET state at the end). But usually topic-modelers just use the document assignments and the topic descriptions, and leave all that other information on the table.

So I took that data and (again using Goldstone's scripts) matched it with the Jstor metadata. For every topic, split it into two pieces of equal size around the median year. If you look at this 'grant state twain' topic not as a single ordered list but as _two_ ordered lists from different historical periods, you get a very different sense of what it means. Here I take _one_ topic and split the words in half: one batch is before 1959, and one after. Taking the top 20 words overall, I rank them in each period, and draw lines to connect them across the middle.

[![](http://3.bp.blogspot.com/-o8PxS7ecN3A/UOyO8x_T8yI/AAAAAAAADu8/BHVYqLBrk48/s1600/Grant+Twain+topic.png)](http://3.bp.blogspot.com/-o8PxS7ecN3A/UOyO8x_T8yI/AAAAAAAADu8/BHVYqLBrk48/s1600/Grant+Twain+topic.png)

The first topic would be called "grant state bs ba teachers language:" suddenly it looks basically like a topic about land-grant Universities. The second would be called "twain language mark clemens foreign:" that would appear to 'obviously' be about Mark Twain. (Why foreign? I don't know, but could come up with something. Maybe it's _Innocents Abroad,_ or the king and duke in _Huck Finn,_ or something. We're good at justifying things like this.) The third and fourth most common words in the first period—BS and BA, the degrees—are the 115th and 570th most common in the later period. That's a huge gap. Even though the model is predicated on finding topics that are the same through time, they end up being massively shaped by historical changes. There is presumably—buried in the lower realms of this topic—some deeper coherence. It's probably helped on by some coincidences: Twain tends to write about the same sort of states that have land grant colleges (Mississippi and Illinois do well), and he helped publish Ulysses Grant's autobiography. And probably some pre-1959 Twain writing and post-1959 land-grant college stuff manages to creep in.

Obviously I cherry-picked this example: but out of the 100-or-so English language topics I ended up with, there were plenty to choose from. Here are the worst 10:

[![](http://4.bp.blogspot.com/-anlV4JJtpuc/UOyReAZuQ3I/AAAAAAAADvQ/mrEvV1uIZJA/s640/10+worst+topics.png)](http://4.bp.blogspot.com/-anlV4JJtpuc/UOyReAZuQ3I/AAAAAAAADvQ/mrEvV1uIZJA/s1600/10+worst+topics.png)

(click to enlarge)

In the middle of the top row, for example, there's a category that would have just been labeled "Jewish fiction," but that manages to switch from being largely a mishmash of Ulysses with 19th-century Russian novelists to—after 1994—something completely free from Leopold Bloom and much more interested in the Arab world. You might be tempted to draw some conclusions from that: maybe to start looking for the period that PMLA's political sympathy's shifted away from the Israelis towards the Palestinians, when writing on Jewish topics, or whatever.  But given that the whole point of the mathematical abstractions in LDA is stability of topics, that seems like a curious route to go: better to take some seed words and track out from them, or something similar.

Even a sample of 10 random topics, below, shows some strange things. In the middle top, for example, we get a  topic anchored by a common emphasis on things "Italian": but before 1924, it seems to heavily rely on the British museum, while afte that falls away entirely in favor of Dante and Petrarch.

[![](http://1.bp.blogspot.com/-ppFALufvihQ/UOyly50r66I/AAAAAAAADvk/1GX4u9zAhk8/s640/10+Random.png)](http://1.bp.blogspot.com/-ppFALufvihQ/UOyly50r66I/AAAAAAAADvk/1GX4u9zAhk8/s1600/10+Random.png)

**Words as signals**  
Another thing that using individual words should be good for is letting us see how individual words drift among topics. Take the word "represent," which doesn't show up as anchored in any particular topic, although clearly it has some vocabulary of its own. It drifts among several ones: appearing in a bin of three topics before 1960, appearing most in 'criticism meaning literary' in the 60s and 70s, and appearing overwhelmingly in 'language narrative text trans' from 1980 onwards.

[![](http://2.bp.blogspot.com/-zvkyyinArjo/UO2fjd911rI/AAAAAAAADwY/I0tESXGBEHI/s640/file_show.png)](http://2.bp.blogspot.com/-zvkyyinArjo/UO2fjd911rI/AAAAAAAADwY/I0tESXGBEHI/s1600/file_show.png)

Why would it switch like that? Well, it's possible that the language of representation is shifting, and the result is that it has to find new topics to appear in. For example, "mimesis" and "mimetic" are lumped into that same "language narrative text" topic, but only appear after 1980:

[![](http://4.bp.blogspot.com/-12GLznW9ZU4/UO2gurmoHcI/AAAAAAAADww/CVhCtU32FSg/s640/plot_zoom_png.png)](http://4.bp.blogspot.com/-12GLznW9ZU4/UO2gurmoHcI/AAAAAAAADww/CVhCtU32FSg/s1600/plot_zoom_png.png)

If so, basic shifts in the 'concept of representation' are causing local incoherence. But instead of helping us see those, the model is just producing a random grab bag of 'generic 1980s literary language.' Which can be useful, but also can be tautological. (You can't say 'generic 1980s literary language' peaked in the 1980s; and words or phrases that are characteristic of real 80s literary language won't appear in the topic if they're also part of something slightly more coherent, so you'd want to be careful interpreting the batch as a whole). In a case like this—which I suspect is a large number of cases—we can only understand the meaning of the topics by pulling out the words that compose them.

**Technical Note**  
It's harder to include words because you have to deal with some much bigger objects in memory. I don't think this presents insuperable obstacles most of the time, since almost all applications of LDA are done on what I'd call "collection-sized," not "library-sized," batches of documents. [All the code for this post, with a little bit more technical explanation, is online here](http://rpubs.com/benmschmidt/PMLALDA). Well, all the code that I wrote. But that's the vast minority, since it's mostly stuff by David Mimno and Andrew Goldstone I'm using.

**Appendix: Topics over Time**

I was going to write up the advantages of the two temporal topic models, but for now I only have some notes for Topics over Time. Which I will share, because I don't think humanists should be using it. Dynamic topic models seem more useful to me, but I haven't dug so deeply into the internals. I think I remember Ted Underwood saying the exact opposite somewhere.

The problem with Topics over Time is that it presumes that some statistical distributions are better than others over time. This is potentially useful, but it will cause haywire on inference. It's a common fallacy to throw results into a model that tends to produce a certain sort of result, and then act surprised that your data can fit that particular type of model. If you run, for example, Principal Components Analysis, you'll almost always get a smooth distribution through space in the dimensions you analyze in. That doesn't mean that the real phenomenon is less batchy than we might have thought: It means you ran PCA.

Two mistakes are likely to result from these assumptions:

1. Prior distributions will lead questionable assignments of documents from immediately before their peak. For example, in Wang-McCallum's paper, they identify a topic for the "Cold War." Since that topic is quite strong from 1947 to 1989, the prior distribution assumes there _must_ be a number of documents from 1900 to 1945. But while smooth priors cannot imagine it, there's good reason to want a Cold War topic that emerges de novo in 1945. They are pleased that it works better than than the related LDA topic: but the vanilla one is also more general, not including, for instance, "soviet" in its top ten.

[![](http://1.bp.blogspot.com/-2BC0cH2gemM/UO2jFjTF6AI/AAAAAAAADxQ/EuJ8WA7wA3k/s320/Screen+shot+2013-01-09+at+12.04.00+PM.png)](http://1.bp.blogspot.com/-2BC0cH2gemM/UO2jFjTF6AI/AAAAAAAADxQ/EuJ8WA7wA3k/s1600/Screen+shot+2013-01-09+at+12.04.00+PM.png)

[source](http://www.bradblock.com/Topics_over_Time_A_Non_Markov_Continuous_Time_Model_of_Topical_Trends.pdf).

2. Topics that don't follow a beta distribution in their temporal pattern will be lost or split. This seems like the deal-breaker to me. There's absolutely no reason to presume that historical patterns should follow a beta distribution, not the way there is to expect linguistic groupings to. Direchlet distributions are convenient abstractions for topic-document distributions, but seem like an obviously incorrect prior for topic-year distributions. One can see this from the Ngrams data: the curves on not symmetric, but rather tend to show a brief peak followed by a long decay. I can show you a lot of camel-backed curves. Every anachronism that I found in the movie "Lincoln," for example, looked a lot like this one:

[![](http://2.bp.blogspot.com/-rLdz20bUpuc/UO2iQOnOosI/AAAAAAAADxI/CACoex5BZSU/s640/Screen+shot+2013-01-09+at+12.00.29+PM.png)](http://2.bp.blogspot.com/-rLdz20bUpuc/UO2iQOnOosI/AAAAAAAADxI/CACoex5BZSU/s1600/Screen+shot+2013-01-09+at+12.00.29+PM.png)

So you'll end up artificially reinforcing the already-problematic tendency of LDA to split a natural 'war' discourse into two historically conditioned ones. If you're analyzing newspapers, it will penalize election topics on some horizons because they peak in 2 to 4 year increments. And so forth.

## So if you want to find heavily concentrated in time events, Topics over Time might be useful; but it doesn't seem like a good all-purpose solution to the problem of language drift.

### Comments:

#### As someone who's graphed LDA-topics over time,...

[Jonathan](https://www.blogger.com/profile/06558056270607433658 'noreply@blogger.com') - <time datetime="2013-01-09T13:09:43.556-05:00">Jan 3, 2013</time>

As someone who's graphed LDA-topics over time, I appreciate your argument here about some of the pitfalls of that approach and hope to be able to respond at greater length once I've had time to think about it more.

I did just want to note, however, that I have experimented with dynamic topic modeling and am using for to track changes in topics over time in a project analyzing disciplinary changes in folklore: http://johnlaudun.org/20121202-of-topics-networks-and-a-discipline-an-update/

<hr />
#### You raise some very good points, as always, and I&...
[Scott B. Weingart](http://www.scottbot.net) - <time datetime="2013-01-09T13:38:46.940-05:00">Jan 3, 2013</time>

You raise some very good points, as always, and I'm definitely inclined to agree with you on the superiority of DTM over ToT. At any rate, I think you give short shrift to discovery; the only times I've ever used LDA, at least non-recreationally, have been for IR or discovery. As it stands now, I'm still hesitant about the use of LDA as evidence. None of my LDA work has made it into any of my research papers, because I instead use it to point me in the direction of trends or connections I might not otherwise have seen, and then explore those trends using more traditional or less epistemologically questionable quantitative means.

(I should point out, re: Trevor's point on hermeneutics, that of course I'm using LDA as evidence in these instances; I'm just not \*presenting\* it as evidence, or even presenting it at all, which means anyone who believes my conclusions must do so on the strength of the other supporting arguments and evidence I highlight. It seems the important thing is whether you can still convincingly argue your point without the support of LDA output.)

<hr />
#### Wow. As I was just saying on Twitter, I wish any o...
[Anonymous]() - <time datetime="2013-01-09T13:58:04.363-05:00">Jan 3, 2013</time>

Wow. As I was just saying on Twitter, I wish any of my print publications had ever received such thoughtful commentary. You've replicated the experiment in order to explore volatility in the data! Pretty cool that we can do this in the humanities now.

I love the device of splitting topics in half to demonstrate that the word composition of a topic changes significantly over time. I'm not yet sure whether I view that as a significant problem with LDA. I'll have to think more about the principle of the thing, and I also want to see what happens when I expand the corpus with more journals.

In principle, you could view these changes as a tacit version of Dynamic Topic Modeling. In other words, topics are allowed to change subtly over time. Of course, that still leaves open your more fundamental question — which is about the complexity vs. transparency of methods. Do we want to leave anything 'tacit'?

But it could also just be that n is relatively small in these models. In my model, I did notice that some topics are effectively dominated by single authors. PMLA has a long print run, but it's still a small pond. I want to reproduce the results with a larger corpus.

I think I basically agree with you about Topics Over Time. I wrote code that does a version of ToT, but I changed the algorithm for \*exactly\* the reason you note here. There's just no reason to assume that history has a Beta distribution! So I replaced the Beta distribution with a smoothing parameter that does the same job: in principle that would allow double or triple-humped time curves. BUT ... in all honesty, I'm not using that code. I just run vanilla LDA. Because even the smoothing parameter seems like a bit of a hidden assumption, and because in practice LDA already 'works so well' -- whatever I mean by that!

To my mind, the assumptions in Dynamic Topic Modeling are even scarier than ToT. The basic assumption is that topics emerge from other topics. Not sure that's warranted. It seems to leave no room for material events that introduce totally new subjects of discourse. -- Ted (in case my wordpress ID doesn't translate)

<hr />
#### Thanks Ted. Although I should say, part of what to...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2013-01-09T14:58:02.687-05:00">Jan 3, 2013</time>

Thanks Ted. Although I should say, part of what to argue is that it's _always_ been a feature of the humanities that we can reproduce an experiment, when the experiment just 'reading a document'; one of the dangers of algorithmic approaches is that it becomes much harder to do so. I suppose I'm arguing against my own case by going out and doing it, though. But it's also a demonstration of why norms like code sharing (which you two have been much better about than I) are so important in the humanities for the social organization of research.

And thanks for the explanation on the problem with dynamic topic modeling: when you think about PMLA, which appears to have major shifts for demographic/political reasons in the 1970s/1980s.

I'm extremely interested in the way single authors can dominate--I think you showed that in one of your earliest posts. We all know that authorship effects on word choice are extremely large; in models of science research, though, those authorship effects are probably going to line up very well with epistemological topics based on prolific authors authors. (Andrew Gelman's personal style will be 'baked in' in to the topics for Bayesian Statistics and Political Science, say, although we won't see it). That seems like less of an asset when it's just the personal habits of the Bronte sisters. Larger n's may fix that, although it's hard to build a corpus that's not dominated even when it's large:

<hr />
#### So I definitely have no problem with people coming...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2013-01-09T15:11:10.686-05:00">Jan 3, 2013</time>

So I definitely have no problem with people coming to insights by finding new connections using LDA and then not mentioning they used it. That seems kosher to me. I guess I don't find the process of hypothesis-discovery particular hard--it's never seemed to me like the humanities were short of hypothesis-generating machines--and ideal case for Topic Modeling, the 'massive collection of texts with no metadata,' does not seem to exist all that often.

I think 'short shrift' to discovery is just a subjective thing, which is why I couldn't write anything coherent about it: I just don't find people's descriptions of their own research process very interesting right now, whether it's writing software or productivity methods or whatever. Just not my thing. But lots of others seem to find it really interesting to talk these things in public, so it's probably just peevish of me to complain about it.

<hr />
#### Thanks Jonathan. What do you think about the resul...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2013-01-09T15:44:35.929-05:00">Jan 3, 2013</time>

Thanks Jonathan. What do you think about the results of dynamic topic modeling? Is it better than vanilla LDA, or are the problems Ted describes below pretty serious?

<hr />
#### This is fantastic, Ben. Those final MALLET states ...
[Andrew Goldstone](http://andrewgoldstone.com) - <time datetime="2013-01-09T17:10:31.832-05:00">Jan 3, 2013</time>

This is fantastic, Ben. Those final MALLET states have been watching me from my hard drive for months, waiting for me to do something interesting with them...now you've shown the way, and once again shown vividly how careful we have to be in making arguments on the basis of the results of LDA. Comparing single-word frequencies (within topics or overall) is a completely natural, very useful idea.

You describe the discovery/argument (I also say: heuristic/explanatory) issue in a nice way. Suffice to say that "enhanced" search is not the only use for topic models. But this leads into a tricky issue: \*should\* we tune models using diagnostics or intuition? What does it mean to tune parameters until LDA spits out a model that is "good," either by inspection or according to quantitative rules of thumb like those MALLET's diagnostics provide? If the goal is not simply to provide a good enhanced search but to use models as historical evidence, I think we don't have an easy way of saying why a tuned model is better evidence than an untuned model. Every model slices up the same data using assumptions drawn from the same family. That's part of the reason why Ted and I made a whole bunch of models of the same data, and why we're thinking about how to talk about multiple models.

The MALLET diagnostics are underused because they are very sparsely documented (cough cough) and they are not offered from the default "mallet train-topics" command-line interface. The diagnostics also constitute a \*lot\* of extra information, when you're looking at a model with a hundred or more topics.

"It presumes a lot to just take a topic as constant through time. In particular, we should be using the individual word assignments that topic models produce, not just taking the labels (as listed by the top-10 words) as intrinsically meaningful."

Completely agreed. But I don't think this is quite as dangerous for interpreting "vanilla" LDA in combination with time metadata as your post implies. I like talking about topics as "patterns of word use" rather than slapping conceptual labels on topics ("the Western Marxism topic"). I think our intuitive notion of a pattern of word use has some room for chronological variation and fuzziness that our intuition about ideas lacks. That allows us to look at a topic over time without \*necessarily\* assuming that we are looking at \*the same concept\* over time.

I think we need more evidence to decide on whether language change matters to vanilla LDA in a given corpus. Doing only unigrams and eliminating stop words is going to attenuate the signal from language change on the decade-to-decade scale. Language change as a factor shaping topics is not obvious to me on the surface of the PMLA models Ted and I did (in the [10x10-topic PMLA visualization from our blog post](http://tedunderwood.files.wordpress.com/2012/12/overview-ordered.png) there seems to be a good deal of variation in the kinds of time-curves topics have).

Anyway, just random initial ideas. Fantastic post, and so, so helpful for further work. And it's incredibly gratifying that my ugly scripts on github facilitated this spectacular jeux d'esprit on your part.

<hr />
#### It is very sensitive to the initial time-slice. We...
[Jonathan](https://www.blogger.com/profile/06558056270607433658) - <time datetime="2013-01-09T17:48:30.395-05:00">Jan 3, 2013</time>

It is very sensitive to the initial time-slice. We have a corpus of folklore journals downloaded from DfR that covers about the same period as PMLA and Science (roughly 1890-present). Varying the width of the slice changes quite significantly the drift in topics over time with our corpus, as you would expect, and I think it gives less immediately relevant results than Blei et al's Science model does. I find it useful to compare the dynamic topics with regular-LDA changes over time, though we're also looking at correlations in regular-LDA model over time similar to the networks that Andrew and Ted created.

I know that's not very specific, and using the DTM software is not what I'd call easy. It has to be compiled (apply the patch or you'll get seg faults as), and formatting the data files correctly was also difficult (for me--David Blei kindly answered an email that helped me make sense of the format). We also are using a lemmatized (via NLTK WordNet) corpus and are pruning unwanted words aggressively with a stop list. Both of these regularize the models and seem to produce more coherent topics.

So, I think a dynamic topic model can offer another, somewhat validating, perspective on the regular LDA. We are particularly interested in signs of disciplinary change that reinforce or at odds with received understanding, and we hope to be able to connect these models with citation patterns once we can get that data from JSTOR. I'm glad I got it running and would recommend it to others as another exploratory tool.

<hr />
#### erratum; read "jeu d'esprit." Also m...
[Andrew Goldstone](http://andrewgoldstone.com) - <time datetime="2013-01-10T09:49:48.846-05:00">Jan 4, 2013</time>

erratum; read "jeu d'esprit." Also my comment failed to get the point of your undertow metaphor about language change. Of course this is a problem human interpreters have too. But anyway it shouldn't be too hard to find a few examples and work them through. I suspect topic labelings might be pretty robust to gradual language change (provided a whole bunch of collocates don't change at once). It might make the "top key words" that everyone, including me, uses (even) more misleading. I file this in the same category as the question of whether lemmatizing should or shouldn't matter--right?

<hr />
#### Interesting. I look forward to seeing where you ta...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2013-01-10T11:32:37.165-05:00">Jan 4, 2013</time>

Interesting. I look forward to seeing where you take it.

<hr />
#### The tuning question is an interesting one, since t...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2013-01-10T14:54:28.930-05:00">Jan 4, 2013</time>

The tuning question is an interesting one, since the whole purpose of topic modeling has usually been to be useful: one can tune to reduce LL/token or tune to try to make the top-ten-lists more intuitive, but those might not always work in the same directions. (Or maybe they will: I really don't know what I'm talking about).

I think that's right about 'patterns of word use,' but I also think our intuitive notion of what a 'pattern' is relatively small (across maybe 25 words, not hundreds) which makes the top-ten lists potentially misleading. Or maybe what I mean is that we don't have good intuitive sense of non-semantic patterns of speech, although that doesn't seem quite right either.

You may be right that topic labelings are robust to gradual change: this is definitely a case where someone (me) knows One Thing and wonders how much it describes the universe. (Although the basic idea is extendable across other metadata: you could split a topic based on author gender, based on even-or-odd-year of publication, based on whether it's a review or an article, and those each might show individual places that the statistics aren't flexible enough to catch real change.

<hr />
#### I think the discovery part of this is enormously i...
[Anonymous]() - <time datetime="2013-01-10T15:24:41.877-05:00">Jan 4, 2013</time>

I think the discovery part of this is enormously important. I think I understand where you're coming from, Ben; I agree with all of this:

"... conversations which are purely about discovery methods are rare, and usually uninteresting; when scholars make public avowals of their discovery methodology, they frequently do it in part as evidence for the quality of their conclusions. Even if they say they aren't."

That seems true to me. But for me the key word there is "conversations." I think discovery methods play an enormous, but \*structurally unacknowledged\* role in our research. Perhaps they're unacknowledged because conversations are, sort of by definition, about evidence. Once you're having a conversation the discovery is always already over, and has been for some time. To the extent that you mention it, yes, it usually has an evidentiary function.

But in the case of PMLA it's really clear to me that I now have a lot of hypotheses I didn't have before topic modeling, and I don't know what to call that but "discovery." It's probably true that discovery methods can't be made interesting as such, purely on their own, but what I want to do more than anything now is make some novel arguments about literary history, in print, in a way that dramatizes how they emerge from digital methods of discovery. Here," discovery" doesn't have to mean "machine learning"; there are a whole lot of ways of going about this -- individual words, corpus comparison, etc. All those approaches seem good to me, but I do want to push back against humanists' notion that discovery is an intuitive, unanalysable process.

<hr />
