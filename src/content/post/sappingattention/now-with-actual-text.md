---
title: 'Now with actual text!'
date: 2010-12-04T10:07:00.000-05:00
draft: false
url: /2010/12/now-with-actual-text.html
tags:
  - Building a Corpus
  - Evolution
---

Lexical analysis widens the hermeneutic circle. The statistics need to be kept close to the text to keep any work sufficiently under the researcher's control. I've noticed that when I ask the computer to do too much work for me in identifying patterns, outliers, and so on, it frequently responds with mistakes in the data set, not with real historical data. So as I start to harness this new database, one of the big questions is how to integrate what the researcher already knows into the patterns he or she is analyzing.

This is all by way of showing off the latest thing it lets me do--get examples of actual usage so we can do semantic processing ourselves, rather than trying to have a computer do it poorly. It might be good to put some tests like this into the code by default, as a check on interpretive hubris. I need to put the years and titles in here too, but if we just take a random set of samples of the language of natural selection, I think it's already clear that we get an interesting new form of text to interpret; it's sort of like reading the usage examples in the OED, except that we can create much more interesting search contraints on where our passages come from.

\> get.usage.example("natural selection",sample(books,1))  
\[1\] "we might extend the parallel and get some good illustrations of natural selection from the history of architecture and the origin of the different styles under different climates and conditions"

\> get.usage.example("natural selection",sample(books,1),1)  
\[1\] "soon however by natural selection a contrast must have arisen between them"  
\> get.usage.example("natural selection",sample(books,1),1)  
\[1\] "i regard them simply as i do the phenomena of the aurora borealis or darwins studies on natural selection as curious studies into nature"  
\> get.usage.example("natural selection",sample(books,1),1)  
\[1\] "under such circumstances the law of natural selection can never become operative to solve the vocational problems of women"

---

### Comments:

#### Hank, did you notice the first example? It's ...

[Jamie ](https://www.blogger.com/profile/13542022273476075921 'noreply@blogger.com') - <time datetime="2010-12-05T09:55:48.786-05:00">Dec 0, 2010</time>

Hank, did you notice the first example? It's on a platter here!

(Ben: Hank and I have been talking about whether the architectural metaphor has any more tricks left for talking about historical change as another alternative to the ideas-as-tools view. Full disclosure: I hope so.)

<hr />
#### Word, Jamie - this is good. Ben, can we get you to...
[Hank]( "noreply@blogger.com") - <time datetime="2010-12-05T10:29:43.860-05:00">Dec 0, 2010</time>

Word, Jamie - this is good. Ben, can we get you to run something with "natural selection" and terms from architecture?

This might take the form of something like what happens over at "The Mind is a Metaphor" (http://mind.textdriven.com/db/about.html), or it might be different.

More from you, in general, on whether what you've got can do something like parse metaphorical language from the welter of notions would be welcome.

<hr />
#### Jamie- What's the architectural metaphor? Ther...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-05T11:59:23.137-05:00">Dec 0, 2010</time>

Jamie- What's the architectural metaphor? There's just one?

Henry- I suppose it would be possible—and is probably a simplification of what he's doing now—to just parse out all "(A) is like (B)" and a few other constructions from sentences and see if it looked possible that B was a metaphor for A. Parsing syntax is a pain, though. Just breaking up books into sentences was kind of hard once you get into all the exceptions, though, so I'm not headed down that road until I exhaust some low-hanging fruit first.

<hr />
#### The metaphor is more diffuse than my comment sugge...
[Jamie ](https://www.blogger.com/profile/13542022273476075921 "noreply@blogger.com") - <time datetime="2010-12-05T19:53:17.249-05:00">Dec 0, 2010</time>

The metaphor is more diffuse than my comment suggested, but I was thinking of "structure" in particular. It's a valuable word for history but difficult to use when talking about change. (How does something built morph into something else?) Although your example doesn't use the word "structure," the imagery it invokes is similar, and I was surprised to this in a discussion about a dynamic process like natural selection. So like Hank, I was just wondering if this was a comparison that was seriously batted around, or not.

<hr />
