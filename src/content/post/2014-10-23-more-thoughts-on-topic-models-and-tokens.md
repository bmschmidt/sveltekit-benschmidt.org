---
id: 369
title: More thoughts on topic models and tokens
date: 2014-10-23T18:37:43+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=369
url: /2014/10/23/more-thoughts-on-topic-models-and-tokens/
categories:
  - Uncategorized
---

I&#8217;ve been thinking a little more about how to work with the [topic modeling extension](https://github.com/bmschmidt/Bookworm-Mallet) I recently built for bookworm. (I&#8217;m curious if any of those running installations want to try it on their own corpus.) With the movie corpus, it is most interesting split across _genre;_ but there are definite temporal dimensions as well. [As I&#8217;ve said before](http://journalofdigitalhumanities.org/2-1/words-alone-by-benjamin-m-schmidt/), I have issues with the widespread practice of just plotting trends over time; and indeed, for the movie model I ran, nothing particularly interesting pops out. (I invite you, of course, to tell me how it _is_ interesting.)

So here I&#8217;m going to give two different ways of thinking about the relationship between topic labels and the actual assigned topics that underlie them.

One way of thinking about the tension between a topic and the semantic field of the words that make it up is to simply just plot the &#8220;topic&#8221; percentages vs the overall percentages of the _actual words_. So in this chart, you get all the topics I made on 80,000 movie and TV scripts: in red are the _topic_ percentages, and in blue are the percentages for the top five words in the topic. Sometimes the individual tokens are greater than the topic, as in &#8220;Christmas dog dogs little year cat time,&#8221; probably mostly because &#8220;time&#8221; is an incredibly common word that swamps the whole thing; sometimes the topic is larger than the individual words, as in the swearing topic, but there are all sorts of ways of swearing beside the topic assignments.

In some cases, the two lines map very well&#8211;this is true for swearing, and true for the OCR error class (&#8220;lf,&#8221; &#8220;lt&#8221; spelled with an ell rather than an aye at the front).

In other cases, the topic shows sharper resolution: &#8220;ain town horse take men&#8221;, the &#8220;Western&#8221; topic, falls off faster than its component parts.

In other cases the identification error is present: towards the top, &#8220;Dad Mom dad mom&#8221; takes off after 1970 after holding steady with the component words until then. I&#8217;m not sure what&#8217;s going on there&#8211;perhaps some broader category of sitcom language is folded in?

![](/wp-content/uploads/2014/10/Topics-vs-tokens.png)

&nbsp;

&nbsp;

Another approach is to ask how _important_ those five words are to the topic, and how it changes over time. So rather than take all uses of the tokens in &#8220;Christmas dog dogs little year cat time,&#8221; I can take only those uses assigned into that full topic: and then look to see how those tokens stack up against the full topic. This line would ideally be flat, indicating that the label characterizes it equally well across all time periods. For the Christmas topic, it substantially is, although there&#8217;s perhaps an uptick towards the end.

But in other topics, that&#8217;s not the case. &#8220;Okay okay Hey really guys sorry&#8221; was steadily about 8% composed of its labels: but after 2000, that declined steadily to about 4%. Something else is being expressed in that later period.&#8221;Life money pay work…&#8221; is also shifting significantly, _towards_ being composed of its labels.

On the other hand, this may not be only a bug: the swear topic is slowly becoming more heavily composed of its most common words, which probably reflects the actual practice (and the full of ancillary &#8220;damn&#8221; and &#8220;hells&#8221; in sweary documents. You can see the rest here.

&nbsp;

![](/wp-content/uploads/2014/10/Percentages.png)

These aren&#8217;t particularly bad results, I&#8217;d say, but do suggest a further need for more ways to integrate topic counts in with results. I&#8217;ve given two in the past: looking at how an individual word is used across topics:

<img class="alignnone" src="http://journalofdigitalhumanities.org/wp-content/uploads/2013/02/Use-of-Represent.png" alt="" width="1231" height="498" />

and slope charts of top topic-words across major metadata splits in the data:

<img class="alignnone" src="http://journalofdigitalhumanities.org/wp-content/uploads/2013/02/Grant-State-Twain.png" alt="" width="538" height="668" />

&nbsp;

Both of these could be built into Bookworm pretty easily as part of a set of core diagnostic suites to use against topic models.

The slopegraphs are, I think, more compelling; they are also more easily _portable_ across other metadata groupings besides just time. (How does that &#8220;Christmas&#8221; topic vary when expressed in different genres of film?) Those are questions for later.
