---
title: 'Are words the atomic unit of a dynamic system?'
date: 2013-02-06T12:27:00.002-05:00
draft: false
url: /2013/02/are-words-atomic-unit-of-dynmic-system.html
---

My last post was about how the [frustrating imprecisions of language drive humanists towards using statistical aggregates instead of words](http://sappingattention.blogspot.com/2013/01/keeping-words-in-topic-models.html): this one is about how they drive scientists to treat words as fundamental units even when _their_ own models suggest they should be using something more abstract.  
  
I've been thinking about a recent article by Alexander M. Petersen et al., "[Languages cool as they expand: Allometric scaling and the decreasing need for new words](http://www.nature.com/srep/2012/121210/srep00943/full/srep00943.html)." The paper uses Ngrams data to establish the dynamics for the entry of new words into natural languages. [Mark Liberman argues](http://languagelog.ldc.upenn.edu/nll/?p=4456) that the bulk of change in the Ngrams corpus involves things like proper names and alphanumeric strings, rather than actual vocabulary change, which keeps the paper from being more than 'though-provoking.' Liberman's fundamental objection is that although the authors say they are talking about 'words,' it would be better for them to describe their findings in terms of 'tokens.' Words seem good and basic, but dissolve on close inspection into a forest of inflected forms, capitals, and OCR mis-readings. So it's hard to know whether the conclusions really apply to 'words' even if they do to 'tokens.'  
  
  
  
There's a serious problem, though, with religiously talking only about "tokens." Or better, an unserious problem: talking about 'tokens' isn't as fun as talking about words. Research like this (a similar paper, though probably less interesting to most, is [here](http://rsif.royalsocietypublishing.org/content/early/2012/07/23/rsif.2012.0491.full)) is predicated on human language responding to quantitative laws. And so it needs a fundamental element. For demography (a major touchstone in this paper), that's people. For physics (the source of the 'cool as they expand' metaphor) they are atoms. For texts, it's better if the unit is something in our actual experience like words rather than an abtruse concept like tokens. Liberman's point is interesting in part because it deflates the strikingness of the claim. The _real_ finding, he's saying, would be about words, not about tokens: findings about alphanumeric strings are not intrinsically interesting.  
  
It occurs to me there's a sensible argument for going yet further. Looking for language to obey physical laws might undermine even the basic concept of an atomic unit of language. Whether words or tokens, though, the fundamental assumption is that whitespace does delineate some fundamental element of language. In the most trivial sense, that's obviously not true. Tokenizing is hard and ultimately arbitrary. For example: in the Google Ngrams set (and [Bookworm](http://bookworm.culturomics.org/), which uses the same rules), the text 'C#' is one 'word' and 'N#' is two; 'database' is one, 'data base' is two, and 'data-base' is three; and ["couldn't" is either two words or three depending on whether you use the 2009 or 2012 corpus](http://books.google.com/ngrams/graph?content=couldn%27t%3Aeng_2012%2Ccould+not%3Aeng_2012%2Ccouldn%27t%3Aeng_2009%2Ccould+not%3Aeng_2009&year_start=1800&year_end=2000&corpus=1&smoothing=3&share=).  
  
In the systems-dynamics view, "evolution" is straightforwardly a word that enters the language at some point, and "natural selection" is not. The thing that shows a culture's core vocabulary is its use of those individual words. Things like "natural selection" are interesting, but not necessary for modeling. And since it's much more simple--more 'elegant'--to work with words alone, it's a reasonable simplification. (And a hugely convenient one: the 1grams are trivial to do most sorts of research with in a software package of your choosing, but the 2- and 3-grams start to require a lot more attention to memory management and data indexing and all sorts of other inelegancies.) And while "natural selection" might be a concept, other ngrams—"core vocabulary is its use"—are obviously not. So let's abstract them away.  
  
But maybe we can disagree about this: words _aren't_ as fundamental as atoms. As Liberman notes, an enormous number of the 1grams are proper nouns. That suggests we need greater length to delineate concepts. So while "Adams" might represent a single person in a small, constrained community, over time we need longer and longer strings to express a simple idea--"John Adams" (2) in 1776, "John Quincy Adams" (3) in 1820, "John Adams the composer" (4) in the 1970s. I have more than once exceeded the 5-gram limit in trying to distinguish "the composer John Adams who wrote Nixon in China" (9) from "John Adams the composer who lives in Alaska" (8). So where should we draw the line? This might seem like a rather pointless and irresolvable debate, best solved by cutting the Gordian knot and taking 'words' as the most obvious choice for basic unit. Linguists might care about the difference between 'tokens' and 'words' and 'ngrams' and 'concepts,' but system dynamicists don't need to care.  
  
But there's an interesting contradiction buried inside the dynamics case. Both the papers I link to above frame much of their work around Zipf's law. Petersen et al say that while Zipf's and Heaps' laws have been "exhaustively tested on relatively small snapshots of empirical data, here we test the validity of these laws using extremely large corpora." Much of their analysis is predicated on kinks in the data: it turns out that Zipf's law does _not_ hold in certain cases (above words of a certain length), and so they offer up psychological and cultural explanations of why that might be. ([Zipf's law states that word frequency is inversely proportional to rank among the most common words](http://en.wikipedia.org/wiki/Zipf's_law)).  
  
Others have noted this discover before. Petersen et al eventually cite Cancho and Taylor, which I'm not reading right now because it's behind a firewall and I'm on a train: even [the Wikipedia page](http://en.wikipedia.org/wiki/Zipf's_law) on Zipf's law shows the trail-off after about 100K words in the wikipedia language use chart, although without mentioning it. It takes 1990s-sized corpuses to detect this, not something the length of Ngrams.  
  
What they _don't_ cite is my favorite finding about Zipf's law. Le Quan Ha et al found 10 years ago that the trail-off effect is only true for 'words'; if you use indefinite-length ngrams, the pattern holds much farther out. In a [succinct and persuasive paper](http://acl.ldc.upenn.edu/coling2002/proceedings/data/area-04/co-305.pdf) (pdf link), they argue that while unigrams, bigrams, and trigrams each_almost_ follow Zipf's law on their own, it's only by _combining_ them all together that the Zipf distribution is fully revealed. So while Cancho and Taylor argue for 'two different regimes' of scaling on unigram counts, they argue for an expansive definition of tokens but just one regime. The key images from their paper show the fall-off for unigrams in English and Mandarin, but a continuous decline when using all n-grams combined. (I don't know anything about Mandarin, but it seems like a pretty obvious case where "orthographical unit" and "token" and "word" will obviously fall apart).  

[![](http://1.bp.blogspot.com/-RClDyIhOm18/URGvLHzPMwI/AAAAAAAAD2s/QdBAgn5ZKnw/s1600/Screen+shot+2013-02-05+at+7.20.49+PM.png)](http://1.bp.blogspot.com/-RClDyIhOm18/URGvLHzPMwI/AAAAAAAAD2s/QdBAgn5ZKnw/s1600/Screen+shot+2013-02-05+at+7.20.49+PM.png)

They showed that Zipf's law falls away after  10^5 words for English and 10^3 for Mandarin  
  

[![](http://4.bp.blogspot.com/-Oil0p0oHl9w/URGuEcH5ITI/AAAAAAAAD2Y/XFF6d8Dc85Y/s1600/Screen+shot+2013-02-05+at+7.21.01+PM.png)](http://4.bp.blogspot.com/-Oil0p0oHl9w/URGuEcH5ITI/AAAAAAAAD2Y/XFF6d8Dc85Y/s1600/Screen+shot+2013-02-05+at+7.21.01+PM.png)

…but that the law holds almost perfectly when using the top ngrams instead of just the 1-grams

(In case this isn't clear, "all ngrams" means the phrase "I know what I know" produces the following 1-grams:  
  
I: 2  
know: 2  
what: 1  
  
  
...but the following n-grams:  
  
I: 2  
know: 2  
what: 1  
I know: 2  
I know what: 1  
I know what I: 1  
I know what I know: 1  
know what: 1  
know what I: 1  
...and so on.  
  
Just to be sure they weren't completely wrong, I checked their finding on the text corpus I had closest to hand, the first three seasons of dialogue on the TV show Downton Abbey. Zipf's law works far better on 1-, 2-, and 3-grams combined than it does individually: I think this is the relevant test. You can see that the points don't really form a line as you'd expect in the first chart, but come closer in the second.  
  

[![](http://2.bp.blogspot.com/-k9A3vwUj7ss/URKSMGALvNI/AAAAAAAAD34/FivIqRR1nJo/s640/Downton+Zipf+ngrams.png)](http://2.bp.blogspot.com/-k9A3vwUj7ss/URKSMGALvNI/AAAAAAAAD34/FivIqRR1nJo/s1600/Downton+Zipf+ngrams.png)

  
  

[![](http://1.bp.blogspot.com/-1FpMJjg2dXM/URKJTZ9AY-I/AAAAAAAAD3Y/mHIQNgVtSvY/s640/Zipfs+overall.png)](http://1.bp.blogspot.com/-1FpMJjg2dXM/URKJTZ9AY-I/AAAAAAAAD3Y/mHIQNgVtSvY/s1600/Zipfs+overall.png)

  

  

  
  
  
I love this finding, because it upends the idea that words are atoms that follow laws like Zipf's. The thing that's statistically regular isn't the naturalized concept of 'words' or even 'tokens': it's n-grams, which isn't something we have a strong intuitive sense of. (Nor is it discrete: any given word is a member of a theoretical huge number of different ngrams in a text when n is allowed to be large.) So the numbers are suggesting _that a model of words as the fundamental units of language doesn't jive with the idea of language following quantitative rules_.  
  
But Cancho and Taylor--who write about "two regime scaling" on the unigram counts and the reasons for that--seem to be getting the cites in the subset of textual studies that wants to treat words as dynamic systems rather than Quan Ha et al. ([Here's another example from even more recently](http://www.nature.com/srep/2013/130130/srep01082/full/srep01082.html).) There are probably lots of reasons for this. But I do think an important one is that quantification is just less appealing when the units aren't discrete and understandable.  I wrote last time about how humanists flee into topic models because it lets them escape the post-lapsarian confusions of words. There's a funny dynamic: one of the reasons scientists are drawn _in _to describing words is that it imposes a sense of order on the frustrating chaos of language.  
  
If you don't care whether language responds to laws, you won't care about this finding. But if you are beholden to a particle-dynamics, statistically-oriented view of language where things like Zipf's law ought to hold, then it suggests the right data to use is the entirety of the Ngrams corpus, not the 1-grams. Because that's where the real system dynamics seem to be happening. Working with a framework where Zipf's law holds for some time, but then stops holding, and the reasons are complicated--that's like epicycles on a planetary orbit. It's ugly.  
  
But it's at a cost. It suggests two completely different ways of doing research on a system including tens of thousands of tokens--using words as a test set, and using Ngrams of all lengths. (I haven't checked the results of the more substantive findings of Petersen et al using two- and three-grams, but given how much they rely on Zipf's law, I wouldn't be surprised if it showed a completely different result vis-a-vis languages cooling.) Probably most research will work on individual tokens for both practical (you can load them into memory) and prejudicial (it just doesn't sound as good to say "in the beginning was a series of overlapping variable-length ngrams; and the overlapping variable-length ngrams were with God, and the overlapping variable-length ngrams were God").  
  
The point is, neither of those reasons strike me as particularly good. If I believed that looking at the internal mechanism of language/culture as a system following mechanical laws, I'd probably have to think about using the larger sets, for all its computational complexity. And even if I don't, it's necessary to keep some very heavy skepticism around the use of words as units in a lot of contexts where I like to use them.
---
### Comments:
#### This is cool, and it makes intuitive sense to me q...
[Anonymous]( "noreply@blogger.com") - <time datetime="2013-02-06T13:07:11.412-05:00">Feb 3, 2013</time>

This is cool, and it makes intuitive sense to me quite apart from Zipf's law. Given the wide range of ways languages handle word-formation, it just stands to reason that the boundaries between a "morpheme," a "word," and a "phrase" are a bit arbitrary.  
  
In fact, I bet you could iron out some of the squiggles at the top of the bottom (most linear) graph if you pursued this logic down to the level of the morpheme. I'm not sure there's any profound reason why "of" counts as a word and apostrophe-s doesn't.  
  
I see a couple of practical implications for text-mining. One is that it probably does make sense to include common 2grams, etc, as that becomes feasible. But also -- if I'm right about extending this down to the level of the morpheme -- it might help explain why "stemming" often turns out to be a bad idea. Discarding suffixes is not all that different from discarding common words. There are situations where that makes sense, but also a lot of situations where it doesn't.
<hr />
#### That's probably right about morphemes, I hadn&...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2013-02-06T13:58:03.447-05:00">Feb 3, 2013</time>

That's probably right about morphemes, I hadn't thought of it that way: there's definitely a paucity of extremely common words, and "un","s",and "ed" might fit the bill.  
  
The implication might be also that stemming should be thought of as splitting the stems from associated morphemes, and that the morphemes should be kept _besides_ the stems. In cases where stopword exclusion was appropriate, they'd get dropped: in other cases, they wouldn't.  
  
If I had all the time in the world, I'd redo the Mosteller-Wallace Federalist papers analysis with trimmed stems in addition to function words to see if any of them proved useful.
<hr />
#### Another interesting Zipfian result (I'm not su...
[JoFrhwld](https://www.blogger.com/profile/07758410674075401468 "noreply@blogger.com") - <time datetime="2013-02-06T14:11:18.743-05:00">Feb 3, 2013</time>

Another interesting Zipfian result (I'm not sure who to cite for it) is that if you tokenize by some other delimiter besides whitespace, like vowel characters, you still get out Zipfian like distributions. I did it here with with the Brown corpus: http://val-systems.blogspot.com/2012/07/dont-worry-im-physicist.html It really makes me suspicious that any valid linking hypothesis can be made between the Zipfian distribution of a corpus and psychological or cultural processes.
<hr />
#### That's nice. It's a logical extension of t...
[Anonymous]( "noreply@blogger.com") - <time datetime="2013-02-06T14:39:42.568-05:00">Feb 3, 2013</time>

That's nice. It's a logical extension of the idea that 1grams and 2grams need to be considered as a continuum. And in fact, I bet some morphemes _would_ prove useful for that kind of problem. (If one had all the time in the world!)
<hr />
#### That's a very nice demonstration, I'll kee...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2013-02-06T14:44:38.679-05:00">Feb 3, 2013</time>

That's a very nice demonstration, I'll keep track of it. I believe there's also some work on just fixed-length strings (if you just break after 6 characters) out there, although I couldn't find it.  
  
But yeah, that's the right lesson, I think: statistical regularities and cultural explanations may just not be speaking the same language.  
  
Or possibly, it's that if scientists are going to keep publishing this kind of stuff the peer-review standard should possibly include checking the language strings against the various nonsensical strings that will also show the same patterns: although there are lots of problems with that.
<hr />
#### Just to set this idea down more clearly: Traditio...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2013-02-06T16:08:49.789-05:00">Feb 3, 2013</time>

Just to set this idea down more clearly:  
  
Traditionally, the process for bag of words approaches is:  
'tokenize into words'-> optionally('lemmatize')->optionally('remove stopwords');  
  
It might make more sense to have it be:  
'tokenize into morphemes' -> optionally('remove stopmorphemes')  
  
And as a best practice never do things this makes impossible (such as, include stopwords but not common morphemes).  
  
It's enough of a pain that I'll never do it, I think, but there's something to be said for the idea.
<hr />
#### From a theoretical standpoint, there is no questio...
[David Golumbia](http://uncomputing.org "noreply@blogger.com") - <time datetime="2013-02-06T18:34:54.425-05:00">Feb 3, 2013</time>

From a theoretical standpoint, there is no question about the generalization you seem to be worrying about a bit: "it upends the idea that words are atoms that follow laws like Zipf's." "Word" is not a well-enough specified concept to bear the weight that gets put on it, and this is well-understood in linguistics. As Ted writes above, "Given the wide range of ways languages handle word-formation, it just stands to reason that the boundaries between a "morpheme," a "word," and a "phrase" are a bit arbitrary." I believe this is part of what Liberman is referring to in his criticism of the underlying article for its failure to consult linguists. It just isn't clear that some kinds of words -- grammatical particles, for example -- are the same "type," even in English, to be able to be properly "tokenized" in the way that others are ("regular" nouns that take ordinary -s plural and so on). On many accounts, "-ed" must be counted as a "word" in English, but is rarely taken to be that due mostly to printing conventions.  
  
  
This is easy to see when we move outside of English. In traditional Chinese grammar, for example, there was no standalone concept of "word" that parallels English "word." Consulting a Chinese phrasebook you may find "lǜ​ shī" as the "word" for "lawyer." But it's composed of two elements, 律 and 师. Each of these are referred to as "zi" in Chinese, and "zi" is therefore translated "letter / symbol / character / word." But to meet English-style grammar, a new word had to be developed, "ci," which usually refers to something like 律师 as a unit, although it can also refer to single-zi "words." Thus "ci" has the standard definition "word / statement / speech / lyrics." Thus, the definition of "word" in two major world languages like Chinese and English is very different.  
  
When we get into heavily inflectional languages or polysynthetic languages, the definition of "word" starts to lose any of the coherence it can appear to have from the perspective of English. Polysynthetic languages essentially allow words to implement syntax inside the "word," and languages that use them pose real difficulties for the construction of dictionaries, since they are more easily understood as systems of rules for word-formation, rather than "lists" of words. But if we start from such rules, as for example in Van Valin's Role and Reference Grammar, we are forced to consider the notion that even the words in English (and Chinese) may look atomic to us, in part due to printing conventions, but may be far from atomic.  
  
I realize you may know all this but thought I'd rehearse it for its relevance to the topic. It's not that Zipf's laws may not apply in some ways to practices like English, but at a deeper level, if we want to understand how "words" function in "language" per se, matters get complicated very quickly.  
  
One good account of these issues, oriented toward generative grammar (but where morphosyntactic rules and their relation to syntax become important) is found in Di Sciullo and Williams, "On the Definition of Word" (MIT, 1987)--it is hard to read this book and walk away being very sure about what "words" are at all.  
  
http://www.amazon.com/Definition-Word-Linguistic-Inquiry-Monographs/dp/0262540479
<hr />
#### That's definitely useful: Mandarin plays an in...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2013-02-06T21:24:25.879-05:00">Feb 3, 2013</time>

That's definitely useful: Mandarin plays an interesting role in the whole thing, since Zipf-like distributions are much harder to generate with a limited character set: I'm curious about how Google's tokenization rules (which allow multicharacter one-grams, I believe) differ from the Irish group, which sees the failings in Zipf's laws immediately. (I"ve seen another case where differences in the character set have led Chinese computer scientists to some very interesting algorithmic applications in text compression--there's probably something to be said for knowing a non-phonetic alphabet to work with.  
  
This also helps me rephrase what I think is interesting about the Zipf law case here. I can see four possibilities for the application of Zipf's law.  
  
0\. Zipf's law does not have any useful applications to words: the near-fits in certain areas can't be explained in any meaningful way.  
  
1\. Zipf's law applies to words, where 'word' is defined as a token by the Google. (Seems to be untrue based on data, but can be salvaged by saying it applies in two different regimes: this is the solution of most of the research).  
  
2\. Zipf's law might apply to words, but 'word' is a concept that has not been adequately operationalized in the current research. A sufficiently sophisticated scheme—which allowed words as short as '-ed', potentially, or as long as "The United States of America" might be able to make it work. (I take Liberman to be suggesting the authors shoud be trying to do something like this, but he might disagree).  
  
2b. Same as above, but it is impossible to usefully operationalize "word," so we should use different vocabulary--'morpheme,' or 'token,' say--for the operational definitions we settle on to make clear that they don't derive from existing definitions of 'word.'  
  
3\. Zipf's law does apply to linguistic phenomena that are obviously not commensurable with _any_ possible operationalization of the term 'word'; instead it applies to more abstract phenomena, like overlapping 10-grams. (I'm arguing for this: first because I think the evidence points towards longer n-gram strings being needed than anyone would call a word (strings such as "abstract pheonomena, like overlapping", etc.); second, because I believe that while reasonable people can disagree about whether the string "the doghouse" is one, two, or three words, I don't think any notion of words—or at least any atomic notion of words—could say that the letters "dog" are _simultaneously_ part of the 'words' 'dog,' 'doghouse,' and 'the doghouse'.)  
  
I think view (1) is silly to hold without first checking views (2) and (3); I think this because to assert two different regimes at different frequencies is ugly compared to finding a domain over which the law applies. (This is only a good reason in the limited sphere where anyone would care if language follows quantitative laws). But I've also jumped straight past (2) myself to view (3), without explaining why I think that it, rather than (2), is correct. It's basically a hunch. If some forms of (3) were correct, it suggests that scientists _could_ do systems dynamics without knowing a whit of linguistics, but that they'd have to stop using the magic "word." If (2) is correct, then they could do systems dynamics by finding a definition of 'word' or an alternate proxy ('token', which will get changed to 'word' in the popular science press) that does make sense.
<hr />
#### This is really interesting and I've been mulli...
[David Golumbia](http://uncomputing.org "noreply@blogger.com") - <time datetime="2013-02-08T11:32:13.002-05:00">Feb 5, 2013</time>

This is really interesting and I've been mulling it over. I mean, I am fairly persuaded that something like Zipf's Law holds for English in a very general sense, but you have uncovered some interesting regularities that may obtain at levels both below and above the word level. I don't know of research about Zipf's law at the morpheme level, but it strikes me as quite reasonable that it might apply, and for many related reasons it might also apply at the construction/supra-word level (what you are calling n-grams).  
  
Since in many languages what look like n-grams to us might be inflected single words, it would not be surprising to find those n-grams mimicking the behavior of inflected words in other languages, or even to find that phrases like "I know" might function, essentially, as words.  
  
To some extent this would fit into some of the more statistical accounts of language structure, where very frequent constructions end up being "grammaticalized" (Hopper, Bresnan, even Givon).  
  
There really may be a rich vein of research here, searching for occurrences of Zipf's law (and the Zipf-Mandelbrot law) at levels "below" and "above" the word.  
  
Interestingly, I found this in the Wikipedia page for Inuit (a polysynthetic language where the definition of "word" is notoriously problematic) and wonder if an approach like yours might not provide some more insight into it:  
  
In one large Canadian corpus – the Nunavut Hansard – 92% of all words appear only once, in contrast to a small percentage in most English corpora of similar size. This makes the application of Zipf's law quite difficult in the Inuit language. Furthermore, the notion of a part of speech can be somewhat complicated in the Inuit language. Fully inflected verbs can be interpreted as nouns.  
  
http://en.wikipedia.org/wiki/Inuit\_languages
<hr />
#### Fascinating discussion. There's long been a ri...
[Ryan Shaw](http://aeshin.org/ "noreply@blogger.com") - <time datetime="2013-02-08T12:21:41.388-05:00">Feb 5, 2013</time>

Fascinating discussion. There's long been a rift in information science/studies between "information physicists" looking for universal laws of language\[1\] and those who take a more interpretive approach.  
  
But what really caught my interest here was your observation that any given word is a member of a theoretical huge number of different n-grams. I've been reading lately about theories of individuation. And I've been struggling to conceptualize some of the alternatives that are advanced, for example Tarde's monadology, which Theo Lorenc describes as "a dense froth of interpenetrating spheres, in which both the circumference and the centre are everywhere." What we identify as individuals are the transient and observer-dependent overlappings of these spheres. This seems like an apt metaphor for n-grams of indefinite length, where "words" are points of coincidence among a dense froth of interpenetrating potentials for meaning. Incidentally, Tarde was deeply interested in finding quantitative ways to grasp social phenomena that did \*not\* rely on reducing reality to a class of "basic" entities.  
  
\[1\] See a recent example here: http://www.cs.vu.nl/~frankh/spool/ISWC2011Keynote/
<hr />
#### INTERNATIONAL CONCEPT OF WORK FROM HOME Work from ...
[otr214423](https://www.blogger.com/profile/16376109133070654680 "noreply@blogger.com") - <time datetime="2014-09-09T05:22:59.514-04:00">Sep 2, 2014</time>

INTERNATIONAL CONCEPT OF WORK FROM HOME  
Work from home theory is fast gaining popularity because of the freedom and flexibility that comes with it. Since one is not bound by fixed working hours, they can schedule their work at the time when they feel most productive and convenient to them. Women & Men benefit a lot from this concept of work since they can balance their home and work perfectly. People mostly find that in this situation, their productivity is higher and stress levels lower. Those who like isolation and a tranquil work environment also tend to prefer this way of working. Today, with the kind of communication networks available, millions of people worldwide are considering this option.  
  
Women & Men who want to be independent but cannot afford to leave their responsibilities at home aside will benefit a lot from this concept of work. It makes it easier to maintain a healthy balance between home and work. The family doesn't get neglected and you can get your work done too. You can thus effectively juggle home responsibilities with your career. Working from home is definitely a viable option but it also needs a lot of hard work and discipline. You have to make a time schedule for yourself and stick to it. There will be a time frame of course for any job you take up and you have to fulfill that project within that time frame.  
  
There are many things that can be done working from home. A few of them is listed below that will give you a general idea about the benefits of this concept.  
  
Baby-sitting  
This is the most common and highly preferred job that Women & Men like doing. Since in today's competitive world both the parents have to work they need a secure place to leave behind their children who will take care of them and parents can also relax without being worried all the time. In this job you don't require any degree or qualifications. You only have to know how to take care of children. Parents are happy to pay handsome salary and you can also earn a lot without putting too much of an effort.  
  
Nursery  
For those who have a garden or an open space at your disposal and are also interested in gardening can go for this method of earning money. If given proper time and efforts nursery business can flourish very well and you will earn handsomely. But just as all jobs establishing it will be a bit difficult but the end results are outstanding.  
  
Freelance  
Freelance can be in different wings. Either you can be a freelance reporter or a freelance photographer. You can also do designing or be in the advertising field doing project on your own. Being independent and working independently will depend on your field of work and the availability of its worth in the market. If you like doing jewellery designing you can do that at home totally independently. You can also work on freelancing as a marketing executive working from home. Wanna know more, email us on workfromhome.otr214423@gmail.com and we will send you information on how you can actually work as a marketing freelancer.  
  
  
Internet related work  
This is a very vast field and here sky is the limit. All you need is a computer and Internet facility. Whatever field you are into work at home is perfect match in the software field. You can match your time according to your convenience and complete whatever projects you get. To learn more about how to work from home, contact us today on workfromhome.otr214423@gmail.comand our team will get you started on some excellent work from home projects.  
  
  
Diet food  
Since now a days Women & Men are more conscious of the food that they eat hence they prefer to have homemade low cal food and if you can start supplying low cal food to various offices then it will be a very good source of income and not too much of efforts. You can hire a few ladies who will help you out and this can be a good business.  
  
Thus think over this concept and go ahead.
<hr />
