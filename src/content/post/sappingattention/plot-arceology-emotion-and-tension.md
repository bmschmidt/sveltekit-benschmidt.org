---
title: 'Plot arceology 2016: emotion and tension'
date: 2016-07-18T11:46:00.000-04:00
draft: false
url: /2016/07/plot-arceology-emotion-and-tension.html
---

Some scientists [came up with a list of the 6 core story types](http://arxiv.org/abs/1606.07772). On the surface, this is extremely similar to [Matt Jockers's work from last year](http://www.matthewjockers.net/2015/02/25/the-rest-of-the-story/). Like Jockers, they use a method for disentangling plots that is based on sentiment analysis, justify it mostly with reference to Kurt Vonnegut, and choose a method for extracting ur-shapes that naturally but opaquely produces harmonic-shaped curves. (Jockers using the Fourier transform, and the authors here use SVD.) I started writing up some thoughts on this two weeks ago, stopped, and then got a media inquiry about the paper so thought I'd post my concerns here. These sort of ramp up from the basic but important (only about 40% of the texts they are using are actually fictional stories) to the big one that ties back into Jockers's original work; why use sentiment analysis at all? This leads back into a sort of defense of my [method of topic trajectories for describing plots](http://dl.acm.org/citation.cfm?id=2878250) and some bigger requests for others working in the field.

**Basic methodology**

1\. They use some unspecified mechanism to limit the ~50,000 books in project Gutenberg to 1,700 "stories" or "works of fiction." They use these terms interchangeably. But this suffers 2 problems.

1a. First, whatever fiction/nonfiction classifier they use seems to work extraordinarily poorly--almost certainly worse than simply using the Library of Congress classifications that Gutenberg itself distributes with some of its dumps. It includes [personal narratives](http://www.gutenberg.org/cache/epub/51063/pg51063.txt), [political essays](http://hedonometer.org/books/v3/4776/?compExtent=[0.00,0.03]&refExtent=[0.03,0.07]), [instructions for building bird houses](http://hedonometer.org/books/v3/25990/), [psychology texts](http://hedonometer.org/books/v3/16287/?lens=[2.75,7]), and [so forth](http://hedonometer.org/books/v3/4763/). If you click the "random" button on their page (which is a great thing to include), you'll see many of these.

2a. It also includes many collections of short stories or pairs of novels published in a single volume. Some of these are the highest scoring "plots" for their basic arcs: for instance, "The Wonder Book of Bible Stories" is the best instance of the inverse of plot 3, and only 1 of the top 5 representatives of (- SV 2) seems to actually be a single narrative.

I ran a spot check of 50 random texts in their browser. I counted 18 non-fiction; 20 novels or short stories; and 12 collections of short stories, or other multi-work texts. So roughly 40% of the texts used are actually what the authors say they are. This makes the conclusions only provisional at best. So many of the titles in the captions are obviously not stories that it's a little baffling they didn't bother to clean up their data set, or use one of the many \*actual\* fiction collections out there. \[Edit: I noticed in the appendix that they classify "fiction" on the basis of length and download count. How they chose the parameters they use aren't clear to me; in any case, it's obvious that just length and download count are \*terrible\* inputs into a fiction/nonfiction classifier, so it's no wonder they do so poorly.\]

2\. The null hypothesis that they test against is "word salad;" a completely reshuffled set of orders. They do indeed seem to show that their stories have stronger shapes than word salads. But this is an _extremely_ weak finding. It's akin to saying that you can predict the stock market because you can show that stock prices exhibit greater regularity than random digits. Of course stocks are not random dice rolls every second; they have a trajectory that they move from randomly. But for a time series like this, I think the null hypothesis should be at the least a _random walk,_ not complete random words: that is, _particularly_ when using normalized scores as here, the assumption should be that any given paragraph has the same emotional valence as the previous paragraph, not a completely new one. That is to say, it is easy to generative a "null narrative" that is distinct from a "null text." This is not to say that there isn't some benefit to checking the weaker null hypothesis first. \[Although see below in the comments: Scott Enderle suggests that the random noise they get shouldn't be producing results like it is. So what's going on is yet more unclear.\]

Another question about plot as a time series is: can you predict what will happen? No one working in the field, to my knowledge, has tried to do this, but it could be interesting. In terms of emotional valences, this makes clear, I think, why the word salad null hypothesis is silly; if you want to predict the end of the book from the middle and beginning, you could do better than say "It will start randomly vacillating every word from negative to positive and so on."

3\. They decide to test success by number of downloads, and argue that shapes (SV 3) and (-SV 3) are most successful because they "have markedly higher downloads, and somewhat higher variance." The designation as "higher" is based entirely on mean downloads, since the medians are roughly the same. If both mean and median don't tell the story, there's probably something else going on. Maybe there's simply more variance, for example, and the number of downloads varies log-normally. When the summary statistics don't agree, it's a stretch to claim any actual conclusions.

**What are we doing here?**  
Next on to some bigger questions of what it means to study plot. This and Jockers are two of the more prominent things recently using sentiment analysis as a proxy for "plot." I saw [Ted Underwood on Twitter arguing](https://twitter.com/Ted_Underwood/status/747483145012797441) that the next step must be following up on [David Bamman's work on experimenting on whether sentiment analysis](http://www.davidbamman.com/?p=52) actually works by using Mechanical Turk to annotate the "emotional trajectory of texts."

I'm basically done thinking about all of these; the combination of [my paper on topic-modeling arcs](http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7363937&tag=1) and [my meta-reflections on algorithms, plots, and the Jockers-Swafford affair of 2015 for Debates in the Digital Humanities 2016](http://dhdebates.gc.cuny.edu/debates/text/99) give most of what I have to say formally about the issue. There are [some slides from the IEEE paper that have nice interactives about the beginnings and ends of TV shows.](http://benschmidt.org/slides/IEEE#/2/7) But I thought I'd just blog out a few additional directions I'd like to see followed up.

I have some issues with the idea of validating sentiment analysis results being especially useful for literary analysis, principally because I don't think that even perfectly working sentiment analysis would be a very good way to measure plot. Citing Vonnegut is a bit of a bait-and-switch; he writes about "good fortune" and "ill fortune," not "positive sentiment" and "negative sentiment." Sentiment analysis is already trained on large numbers of human samples of whether something is positive or negative; if we want to explicitly test Vonnegut's hypothesis, we ought to be building new models that classify text as "fortunate" and "misfortunate," which should subtly differ from ""positive sentiment" and "negative sentiment."

Or we should be testing theories of plot that, unlike Vonnegut's, actually have any influence beyond a web video from a few year's ago. (Vonnegut doesn't even strike me as a writer who was especially *good* at plot, to be honest.) Train an LTSM model on human-tagged data that can accurately extract the ["call to adventure" or the reaching of the innermost cave](http://www.skepticfiles.org/atheist2/hero.htm)  from a script, and then we might have something interesting, because there's a real interplay between the stories we consume through mass media and popularizations of Joseph Campbell.

Of course that brings me to the final problem here, which is that you \*can't\* use mechanical turk to label stories by their Cambpellian archetypes because ordinary readers don't speak in those terms. Is that a problem? Can we expect to find structures that most people wouldn't recognize?

I've said before that I think formal musical analysis is the real place to look here. One could, I imagine, try to classify every Beethoven sonata movement by its emotional trajectory; in some popular understanding of music that is what actually happens. But if macro-musicologists tried to do that, they'd obviously be missing out on the _actual_ formal elements the composer was working with. Early 19th-century European music is organized tonally; a good model of its structure would look at tonal organization, not some nebulous notion of emotionality.

I do not believe there are _general_ story principles as firm as classical-era sonata form. I _do_ think that some combination of Joseph Campbell, commercial organization, and three-act structure conformism leaves contemporary television and movies somewhat predisposed to one or a few narratives that could be usefully explored. Which is why I think it's a huge strategic blunder for everyone working with plots to be looking at novels--probably the least coherent narrative form in existence--instead of any of the many other forms of narrative out there.

Even if there are "master plots," I suspect they will be revealed as much in terms of *tension* as _emotion._ (Tension is also more easily analogized to classical form music, for better or worse, as dominant-tonic relationships.) A plot classifier shouldn't be looking at local emotion; it should be looking at arcs of introduction of tension and release. This requires a very different form of machine reading; every gun on every mantlepiece needs to be tracked until it goes off. (As with everything else these days, this seems structurally better suited for neural networks than the locally tokenized texts we're mostly working with.) Tension explains a wide variety of plots that none of the emotionally based mechanisms can. For example, the preponderance of plots in my [TV and movie database](http://movies.benschmidt.org/) are procedurals which are not organized around a single character's rise and fall; instead, they proceed from crime to punishment, from disease to cure, or from acquisition to sale.

## I have no idea how to define "tension." You could do it through Mechanical Turk, I guess. But what's really interesting is that we may be able to define it operationally. What sort of events in texts demand resolutions? What distinguishes beginnings from ends? These are more unsupervised questions than ones about emotional trajectories, and ones that might provide us with much more interesting questions to build on as well as answers.

### Comments:

#### These are great reflections, and I agree with pret...

[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 'noreply@blogger.com') - <time datetime="2016-07-18T12:53:29.394-04:00">Jul 1, 2016</time>

These are great reflections, and I agree with pretty much everything. To clarify: when I say we need more evidence about human reactions, I don't necessarily mean that we need to validate the sentiment analysis. That's one piece of it — a piece David Bamman covered well. But I agree that the bigger question is, How much does sentiment actually tell us about plot?

I want evidence about human responses -- in the form of genre or popularity or \*something\* -- mainly in order to address that part of the question, which you rightly identify as crucial. For instance, when I casually tried to use sentiment trajectories to distinguish Shakespearean tragedies and comedies, I didn't get significant results. That's a striking null. A sentiment-based method ought to be able to distinguish those two genres if it can distinguish \*anything.\*

There are lots of opportunities for further research here.

<hr />
#### Ah, responded to this already on Twitter. Treatin...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2016-07-18T13:03:43.902-04:00">Jul 1, 2016</time>

Ah, responded to this already on Twitter.

Treating this as a prediction problem would be one way to get at it. If someone were to say: which elements of a plot are predictive of it ending happily? Sadly? Then we might get away from treating plot time as one big mass of equally important stuff and finding which inflection points matter. Even sticking with sentiment analysis, I find it really unlikely that spreading sentiment over 100% really works well. These techniques make a huge distinction between a "man in hole" where he falls in the hole at 40% of the way through, and 60% of the way through. Something less rigid make work better; predicting the end state would be a good start.

In the musical analogy, these models are all getting hung up on the modulations in the development. But if you listen to the exposition of a sonata, you know what the key signatures and thematic groups in the recapitulation are going to be, give or take a theme.

Likewise anyone who reads the first third of Pride and Prejudice knows what the two major couples in the end are going to be.

<hr />
#### Hi Ben, I'm sympathetic to your skepticism ab...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-18T13:45:36.470-04:00">Jul 1, 2016</time>

Hi Ben,

I'm sympathetic to your skepticism about sentiment analysis >> plot and am sympathetic to your nod to musical analysis. And I've got a very specific interest which I've been calling ring-form composition, because that's the standard name. But I'm now thinking of it as ring-form rhetorical structure for reasons that will emerge soon enough.

What's ring-form? A text with a linear structure like this: A B C...X...C' B' A'. There's a structural center and the other segments are such that the second half is a mirror of the first.

I got interested in ring-form in email discussions with Mary Douglas, the anthropologist. Toward the end of her career she got interested in the Old Testment, which is one of the areas where ring-form has traditionally been studied (Homeric epic is another). She ended up writing books on Numbers and on Leviticus in which she argued/demonstrated each is ring-form. Then she gave a series of lectures at Yale (published as Thinking in Circles) in which she laid down some rules of thumb about the form and argued, in one chapter, that Tristram Shandy exhibits ring-form.

Meanwhile I'd been finding ring-form in various texts: Osamu Tezuka's manga, Metropolis; the Nutcracker Suite, Sorcerer's Apprentice, and Pastoral Symphony episodes of Disney's Fantasia; Conrad's Heart of Darkness; Coppola's Apocalypse Now (loosely based on Heart of Darkness); the 1954 Japanase film, Gojira (mangled and deformed into Godzilla, King of the Monsters for an American audience); a few lyric poems; Obama's eulogy for Clementa Pinckney; and, of all things, Ali Liu's PMLA essay on meaning in DH. That's quite a variety of texts, not all of them narratives, and at least one not even artistic (Liu's essay). So, it's a rhetorical form. But where it informs a narrative, as it does in some of these instances, you identify the form with reference to what we ordinarily think of as the plot.

\[continued in next comment\]

<hr />
#### \[continued from previous comment\] Now, for Obama&...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-18T13:46:33.266-04:00">Jul 1, 2016</time>

\[continued from previous comment\]

Now, for Obama's eulogy for Clementa Pinckney. It's a sermon. What tipped me to the ring-form is that the word "grace" first appeared roughly mid-way in the sermon and then kept on to the end, where he hammered it and then segued into "Amazing Grace." That told me it broke into two parts. Once I knew that, identifying the symmetry was not too difficult.

We've got a video of the eulogy. Obama was working in a tradition where audience response is important. That response, of course, is in the video. If we graphed the amplitude of the sound level we'd have a crude "sentiment" analysis. To my ear there's a noticeable increase at the structural center, but that pales in comparison to the climactic ending.

. I'd love a computational routine that would be able to pick out ring-forms in actual narratives. But I'm skeptical. Would a sentiment analysis of Heart of Darkness identify the structural center? I don't know and really have no way of guessing. I can tell you that the structural center occurs in the longest paragraph in the text, but I don't think that that would be a generally useful clue to much of anything. It just happens to be an interesting feature of this rather peculiar text.

I have no general conclusions to offer. This is just stuff that I've somewhat laboriously managed to dig up over the years. I've got a bunch of posts on ring-form at my blog, New Savanna but this post lists most of the best ones along with some explanatory text: [Literary Studies from a Martian Point of View: An Open Letter to Charlie Altieri](http://new-savanna.blogspot.com/2015/12/literary-studies-from-martian-point-of.html). Here's a working paper that gathers some of them into a PDF: [Ring Composition: Some Notes on a Particular Literary Morphology](https://www.academia.edu/8529105/Ring_Composition_Some_Notes_on_a_Particular_Literary_Morphology). Here's the Obama stuff: [Obama’s Eulogy for Clementa Pinckney: Technics of Power and Grace](https://www.academia.edu/14487024/Obama_s_Eulogy_for_Clementa_Pinckney_Technics_of_Power_and_Grace).

<hr />
#### Interesting. The musical equivalent, you probably ...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2016-07-18T14:05:30.656-04:00">Jul 1, 2016</time>

Interesting. The musical equivalent, you probably know, is the arch form that's particularly associated with Bartok. I seem to recall some rondo forms that are something similar with a filler recap (eg, ABACADACABA), but can't immediately come up with an example.

What's important here of course is \*local\* similarities rather than overall structures. It reminds me in a lot of ways of Andrew Piper's work on conversional narratives (http://txtlab.org/?p=459), which is an entirely different form but might be computationally tracked in similar ways. The big challenge with a ring/arch form, though, is sectional boundaries. Again there's some good computational musicological models out there, potentially, though prose "echoes" in a modified section are much less than strong than poetic ones.

<hr />
#### Marking boundaries, yes. Criterion #4 of the 7 Mar...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-18T14:11:56.232-04:00">Jul 1, 2016</time>

Marking boundaries, yes. Criterion #4 of the 7 Mary Douglas listed: "Indicators to mark individual sections."

<hr />
#### My concerns about this go even deeper, and I think...
[Scott](https://www.blogger.com/profile/11332828263550581927 "noreply@blogger.com") - <time datetime="2016-07-18T14:46:12.453-04:00">Jul 1, 2016</time>

My concerns about this go even deeper, and I think basically invalidate the entire project. I think the results that SVD gives here strongly suggest that these sentiment patterns are just random walks, plain and simple -- Brownian noise.

The results Regan et. al. get are very strange. Entirely reshuffling a random walk gives white noise, which yields chaotic SVD eigenfunctions. They say they used random permutations to generate word salad, but their SVDs look like Brownian noise. I was only able to get white noise to look like Brownian noise with heavy filtering. (I used a few different constant averages to do that.)

If it were really white noise, the SVD eigenfunctions would also look like white noise. And if it were Brownian noise with hidden structure -- which seems to be the fundamental claim -- then we should expect the SVD to pick up on that hidden structure. I've been investigating this for the last few days; here's a notebook illustrating the results:

https://github.com/senderle/svd-noise/blob/master/Noise.ipynb

The last example shows what the SVD looks like when there's hidden regularity in the data. It's very obvious. The hidden regularity would have to be extremely subtle given the results in Reagan et. al.

<hr />
#### Following up -- I think this reiterates your point...
[Scott](https://www.blogger.com/profile/11332828263550581927 "noreply@blogger.com") - <time datetime="2016-07-18T14:48:43.854-04:00">Jul 1, 2016</time>

Following up -- I think this reiterates your point, Ben, about smaller local regularities. But I suspect even smaller local regularities might show up in the SVD. I'm also looking into autocorrelation as a way of picking up those regularities.

<hr />
#### Well, if it \*is\* Brownian noise they test against,...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2016-07-18T15:26:25.984-04:00">Jul 1, 2016</time>

Well, if it \*is\* Brownian noise they test against, that's better from my perspective. (Though if it's actually just that they can't make something random when trying, that's not great).

I don't know if it totally invalidates--the results here remind me of what I found in using PCA on topic space, where you also get harmonic curves but more strongly than when working with random data. [notebook](https://rpubs.com/benmschmidt/52661). To say that something is more harmonic than brownian noise is not nothing. And why shouldn't some harmonic functions be the base elements of sentiment trajectories? They still may be useful.

But yeah, all those high-order vacillations do seem to indicate a whole lot of nothing to me. I don't want to get too far into reiterating the debates of last year, though.

The presence of so many non-narrative works in the test set, of course, also makes it possible their method is good and that they're mostly losing by testing on junk.

<hr />
#### Since we're talking Fourier analysis and harmo...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-18T18:15:47.035-04:00">Jul 1, 2016</time>

Since we're talking Fourier analysis and harmonic curves I'll offer some remarks specifically about _Heart of Darkness_. As you know Kurtz is a central character, but he doesn't appear until a ways into the text. So I got curious about his presence in the text. I divided the text into equal sized bins of 500 words, counted the occurence of "Kurtz" in each bin and graphed the results. (Seems I'd done what's called a periodogram.) It turns out that “Kurtz” appears in the text of _Heart of Darkness_ at periodic intervals. There is a short cycle of roughly 2000 words and a longer one that divides the text into four sections: an initial section with no appearances, a second section with relatively low activity, and a third section with more activity. As a check, I repeated the procedure with bins of 600 words.

I wonder what other periodicity we'd find in this text. And other texts? And if we ran Jockers' procedure on HoD?

I've written this up in a short working paper: [Periodicity in _Heart of Darkness_](https://www.academia.edu/7816423/Periodicity_in_Heart_of_Darkness_A_Working_Paper).

<hr />
#### Approaching this predictively is a great idea. So&...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 "noreply@blogger.com") - <time datetime="2016-07-18T18:27:16.090-04:00">Jul 1, 2016</time>

Approaching this predictively is a great idea. So's your idea about "tension."

My gut feeling is that there's room to do something really interesting with plot, but it's going to be slow initially. It's one of those projects where you could work for a year on cutting-edge NLP in order to get results that literary critics would look at and say "yeah, we knew that."

Right now I'm working on some issues related to time (duration) in fiction. Scene vs. summary. Not the same thing as plot, but I hope it's a little more tractable.

<hr />
#### Not sure just what you mean by scene, Ted, but whe...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-18T18:47:21.591-04:00">Jul 1, 2016</time>

Not sure just what you mean by scene, Ted, but when I found ring composition in _Metropolis_ and _Gojiro_ the physical setting of the action was the main clue.

<hr />
#### Also, I really agree that you're right that it...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 "noreply@blogger.com") - <time datetime="2016-07-18T18:51:29.266-04:00">Jul 1, 2016</time>

Also, I really agree that you're right that it's a strategic blunder to start with novels, because Vonnegut may well be \*wrong\* about novels.

In any case, assuming he's right is not a safe starting point. I tried to say a version of that last year — https://tedunderwood.com/2015/04/01/free-research-question-about-plot/.

<hr />
#### It looked more to me like the sentiment data was j...
[Scott](https://www.blogger.com/profile/11332828263550581927 "noreply@blogger.com") - <time datetime="2016-07-19T10:43:53.476-04:00">Jul 2, 2016</time>

It looked more to me like the sentiment data was just as harmonic as Brownian noise, and that the word salad data was also just as harmonic as Brownian noise, but with a smaller amplitude. If you look at the singular value graphs, you'll see that they have the same shape -- it's just that one is from a lower power signal. That's just a scaling effect. You can get it just by dividing the original signal by a constant.

So far I have been able to reproduce every result they describe in that paper using noise generators alone. (However, I still need to try hierarchical clustering, and I don't grok the SOM stuff yet.)

The key point for me is that if there were clearly large-scale, deterministic patterns hidden in the noise, the most significant eigenfunctions produced by SVD probably wouldn't look like sine waves at all. The wikipedia article on the Karhunen–Loève theorem theorem is instructive here.

<hr />
#### That's definitely possible: I wasn't looki...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2016-07-19T11:28:23.211-04:00">Jul 2, 2016</time>

That's definitely possible: I wasn't looking at amplitudes, and I have a particular brief here. Since I was using PCA on the assumptions they would extract arc shapes for this last year and before, and the validity of what I said depended entirely on amplitude/scree plot shape (are those functionally the same here?) So when you say "eigenfunctions produced by SVD probably wouldn't look like sine waves at all" it's worth saying, maybe, "But not definitely!" After all, Jockers chose Fourier transforms in part, I think, because he thought plots \*would\* be on some level harmonic.

If I can make a guess: the SOM looks like the thing they \*actually\* wanted to use to identify basic stories, because it has the wow factor of a neural network learning to read stories. But the shapes it puts out are not very good: significant overlap between trends, some essentially flat lines in the top 6, etc; so they went with SVD for the headline instead. SVD, at least, will never say that one of the the most common story structures is "nothing happens." While SOM can and will.

<hr />
#### You know, Ted, I can't say I'm surprised t...
[Bill Benzon](https://www.blogger.com/profile/08360044945265178991 "noreply@blogger.com") - <time datetime="2016-07-19T17:07:27.427-04:00">Jul 2, 2016</time>

You know, Ted, I can't say I'm surprised that you didn't get significant results when you tried sentiment analysis on Shakespearean comedies and tragedies. There's a remark in Frye's _Anatomy of Criticism_ to the effect that a tragedy is a truncated comedy. Now he was analyzing comedy as a three part structure where there's a middle section in which the social order weakened and the protagonist is in deep trouble. But then, there's a reconciliation in the third section and all's well the ends well. To create a tragedy, just drop that third move.

FWIW, when I read _Romeo and Juliet_ in graduate school it felt like a comedy for at least the first half or so. And Shakespeare wrote it at a period when he was writing mostly comedies and histories. That is, he wrote it before he'd moved on to mostly tragedies.

I've done a lot of thinking about _Much Ado About Nothing_ (a comedy), _Othello_ (a tragedy) and _The Winter's Tale_ (a romance or tragi-comedy). All three plays center on a couple where the man is deceived into thinking his beloved has been unfaithful. In the comedy the deception happens before the marriage takes place. In the tragedy the deception takes place between the marriage and the consummation of the marriage. In the romance the deception takes place well into the marriage where there is a six-year old son and another child on the way. There's a pile of other features that fit into a rather elegant pattern across the three plays (and I've published on this, but I'm embarrassed at always citing my own work on this or that, so I won't).

Now, as a critic who's looked quite carefully at a number of plots in a number of texts, I'd love to be able to see a sentiment analysis in relation to plot. But I'm not even sure what a _representation of plot_ would look like in this domain.

You know there's that [weird and wonderful essay by Steve Ramsay](http://digitalcommons.unl.edu/englishfacpubs/57/) in which he manages to more or less classify Shakespeare plays into the standard genres by looking at how the action moves from one physical setting to another. WTF! Do we have a clue about what's going on? That's plot in a rather rarified way, with nothing directly about _what actually happens_. It's just that something happens somewhere, and then something else happens in a different place. And yet, in two of my ring-form texts (_Metropolis_ and _Gojira_) the form can (mostly) be identified by noticing how the action moves from one place to another. (Does this have anything to do with Moretti's maps?)

There's Vladimir Propp style plot functions. Do we want to identify them algorithmically and constitute plot as a sequence of such things? I don't know, but color me skeptical. Could we start by differentiating between a happy and a sad ending? Well, if sentiment analysis couldn't discriminate between Shakespearean tragedy and comedy, maybe not.

So yes, "there are lots of opportunities for further research here." But what are they?

<hr />
#### But not definitely! -- indeed! I had not entirely...
[Scott](https://www.blogger.com/profile/11332828263550581927 "noreply@blogger.com") - <time datetime="2016-07-20T07:00:28.512-04:00">Jul 3, 2016</time>

But not definitely! -- indeed!

I had not entirely put it together that your SVD method from last year might overlap with theirs. And the 2D case may well be more complex.

There are just so many problems with that paper. Collections of short stories, poetry, nonfiction throughout -- and as Ted said, novels would already be hard. And so on. It maddens me to see that it has given this "X fundamental plots" meme unholy new life.

<hr />
