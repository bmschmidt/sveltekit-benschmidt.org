---
title: 'Compare and Contrast'
date: 2011-11-14T15:57:00.043-05:00
draft: false
url: /2011/11/compare-and-contrast.html
tags: 
- Dunning
- Featured
- Comparisons
---

I may (or may not) be about to dash off a string of corpus-comparison posts to follow up the ones I've been making the last month. On the surface, I think, this comes across as less interesting than some other possible topics. So I want to explain why I think this matters now. This is not quite my long-promised topic-modeling post, but getting closer.  
  
Off the top of my head, I think there are roughly three things that computers may let us do with text so much faster than was previously possible as to qualitatively change research.  
  
1\. Find texts that use words, phrases, or names we're interested in.  
2\. Compare individual texts or groups of texts against each other.  
3\. Classify and cluster texts or words. (Where 'classifying' is assigning texts to predefined groups like 'US History', and 'clustering' is letting the affinities be only between the works themselves).  
  
These aren't, to be sure, completely different. I've argued before that in some cases, [full-text search is best thought of as a way to create a new classification scheme and populating it with books](http://sappingattention.blogspot.com/2011/09/bookworm-and-library-search.html). (Anytime I get fewer than 15 results for a historical subject in a ProQuest newspapers search, I read all of them--the ranking inside them isn't very important). Clustering algorithms are built around models of cross group comparisons; full text searches often have faceted group comparisons. And so on.  
  
But as ideal types, these are different, and in very different places in the digital humanities right now. Everybody knows about number 1; I think there's little doubt that it continues to be the most important tool for most researchers, and rightly so. (It wasn't, so far as I know, helped along the way by digital humanists at all). More recently, there's a lot of attention to 3. [Scott Weingart has a good summary/literature review on topic modeling and network analysis](http://www.scottbot.net/HIAL/?p=221) this week--I think his synopsis that "they’re powerful, widely applicable, easy to use, and difficult to understand — a dangerous combination" gets it just right, although I wish he'd bring the hammer down harder on the danger part. I've read a fair amount about topic models, implemented a few on text collections I've built, and I certainly see the appeal: but not necessarily the embrace. I've also done some work with classification.  
  
In any case: I'm worried that in the excitement about clustering, we're not sufficiently understanding the element in between: comparisons. It's not as exciting a field as topic modeling or clustering: it doesn't produce much by way of interesting visualizations, and there's not the same density of research in computer science that humanists can piggyback on. At the same time, it's not nearly so mature a technology as search. There are a few production quality applications that include some forms of comparisons (WordHoard uses Dunning Log-Likelihood; I can only find relative ratios on the [Tapor page](http://portal.tapor.ca/portal/portal)). But there isn't widespread adoption, generally used methodologies for search, or anything else like that.  
  
This _is_ a problem, because cross-textual comparison is one of the basic competencies of the humanities, and it's one that computers ought to be able to help with. While we _do_ talk historically about clusters and networks and spheres of discourse, I think comparisons are also closer to most traditional work; there's nothing quite so classically historiographical as tracing out the similarities and differences between Democratic and Whig campaign literature, Merovingian and Carolingian statecraft, 1960s and 1980s defenses of American capitalism. These are just what we teach in history---I in fact felt like I was coming up with exam or essay questions writing that last sentence.  
  
So why isn't this a more vibrant area? (Admitting one reason might be: it is, and I just haven't done my research. In that case, I'd love to hear what I'm missing).  
  
  
I think the biggest reason for this is probably **legal-technical**, and getting solved. A site like J-Stor (or Bookworm, for that matter) can set up full-text search much easier than it can cross-corpus comparisons; one takes tenths of a second, and the other can take minutes. Minutes isn't very much, of course, and if it worked plenty of humanists would be happy to let their laptops plug away at the problem; but restrictions on downloading texts makes that impossible. Add into the mix all the completely un-digitized texts we'd want to include in many comparisons, and there are only a few cases where it's possible. Topic modelling and search both work much better with a research model where one centralized research server provides on-demand service to lots of people who don't necessarily understand what's going on behind the scenes.  
  
Another reason is **algorithmic**. To put it bluntly, Dunning Log-Likelihood doesn't work very well; not only does it over-represent common words, it also finds spurious differences based on one or two texts. Ted Underwood has been exploring some aspects of Mann-Whitney; but it too has its share of flaws, and in some cases, it can be much more difficult or inappropriate to implement. TF-IDF suffers some difficult translation problems when comparing two parts to comparing a part to a whole. I started a few posts on these things, and hopefully, they'll see the light of day. But in general, I get the impression that there isn't a very good all-around corpus comparison tool any scholar could apply to their questions.  
  
I also suspect that there are some **cultural-psychological** reasons. One of the things that's so appealing about the topic models and the networks is that they alleviate the feeling of being overwhelmed by unstructured information. (Or the print age, or whatever.) Topic models and network graphs put the world in order, which is very reassuring; they also create things that are very cool looking, which is very (too?) important in the web ecosystem where DH lives. (This site tends to a lot of Google image search results to some [cluster charts](http://sappingattention.blogspot.com/2011/01/cluster-charts.html) I made in the past, which are certainly among the least clear charts I've ever posted; there's something about the untangling that sort of puzzle that people find very rewarding.)  
  
Comparisons just create word lists, and they aren't as rewarding as topic models--you just get a list of differences to sift through. And they don't deal in the same way with the whole corpus--you are much more restricted in what you work with. I think there's a bit of a tendency to think that as long as we're using computers to read texts, we might as well do all of the ones that are in good enough shape to work with--moving down for comparisons doesn't tell us much.  
  
I don't see any of these reasons as basically good ones. The inability to get digital texts to work with or text curators who allow multifaceted access is the biggest problem facing textual digital analysis. The lack of good algorithms is just more evidence that this is _our_ problem; that humanists need to be developing expertise and a feel for the data here themselves. And there's certainly no one who defends eye-candy for itself; they (and I) would only point to its usefulness for asking more interesting questions. But comparisons should let us do that too.
---
### Comments:
#### Ben - great post, and you're right to call me ...
[Scott Weingart](http://www.scottbot.net "noreply@blogger.com") - <time datetime="2011-11-21T17:43:29.093-05:00">Nov 1, 2011</time>

Ben - great post, and you're right to call me out on not focusing on the dangers of tools that are easy to use and difficult to understand. I think that was one of those threads I planned on picking back up at the end but, instead, entirely forgot.  
  
My knee-jerk reaction to this post was to say, come now, this doesn't yet exist because the first and third are \*easy\*, whereas genuine comparisons are things people can still do way better than computers. You've got to take into account pragmatics and semantics, while the others work just fine on syntax.  
  
But of course, both more-explored problems just use syntax because the other avenues aren't yet available; they both certainly would benefit from the addition of semantic and pragmatic awareness. Topic modeling certainly tries to. In either case, it's not good excuse - if people don't build the tools for us, we ought to be able to build 'em ourselves.  
  
One of the issues is precisely that comparisons \*are\* closer to our traditional work - and as such, it's a lot easier to tell when the algorithms are insufficient.  
  
When Google popped up, librarians didn't (and still don't) consider it an IR solution, because this is something they're deeply familiar with, and they realize there are still difficulties to be tackled. Similarly, we humanists will probably take a good deal more convincing with regards to a comparison tool than any other group might.
<hr />
#### Scott, That's a great point--another way to p...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-11-21T18:02:58.713-05:00">Nov 1, 2011</time>

Scott,  
  
That's a great point--another way to put it is that comparison is something scholars hardly ever relegate to others, while there's a long history of farming search out to undergrads and classification to librarians and archivists.  
  
I'm not sure that classification is actually easier than comparison; a lot of my relations with topic modeling have been similar to your hypothetical humanist seeing a comparison. ("Come on, I don't want a category of British vs. American spellings", and so forth). Certainly the algorithms are much more complicated--LDA stretches my comprehension, but it's easy for me to implement Dunning or Mann-Whitney.  
  
But certainly _good_ comparison may be a lot harder than _good_ classification or search. That's an important point I hadn't thought about.  
  
The thing I find interesting is we have algorithms that do a good job on unigram searches and on classification, and we don't for comparison. I was talking a non-digital humanist recently who was fascinated by the Amazon statistically improbably phrases.
<hr />
#### Interesting discussion, which I overlooked in Nove...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 "noreply@blogger.com") - <time datetime="2012-02-28T09:13:26.164-05:00">Feb 2, 2012</time>

Interesting discussion, which I overlooked in November when it happened. I think all of what you and Scott say is right. Comparison is hard to do well, and there are also some thorny questions about what exactly the goal should be -- questions that you exposed well in unpacking the Dunning's algorithm. There are a range of different ways we could weight comparison, and there may be no single "right" way to do it -- that's going to make things very sticky.  
  
The same thing may turn out to be true about topic modeling, incidentally. But right now only a few humanists (mainly Travis Brown, I think!) have looked much beyond generic LDA, so people assume that topic modeling = LDA, which makes matters seem more straightforward than they are ...
<hr />
