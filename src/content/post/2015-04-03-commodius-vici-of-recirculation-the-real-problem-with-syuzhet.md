---
id: 440
title: 'Commodius vici of recirculation: the real problem with Syuzhet'
date: 2015-04-03T16:37:21+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=440
url: /2015/04/03/commodius-vici-of-recirculation-the-real-problem-with-syuzhet/
categories:
  - Digital Humanities
---

Practically everyone in Digital Humanities has been posting increasingly epistemological reflections on [Matt Jockers&#8217; Syuzhet package](https://github.com/mjockers/syuzhet) since Annie Swafford posted a [set of critiques of its assumptions](https://annieswafford.wordpress.com/2015/03/02/syuzhet/). I&#8217;ve been drafting and redrafting one myself. One of the major reasons I haven&#8217;t is that the obligatory list of links keeps growing. Suffice it to say that this here is not a broad methodological disputation, but rather a single idea crystallized after reading Scott Enderle on &#8220;[sine waves of sentiment](http://www.lagado.name/blog/?p=78).&#8221; I&#8217;ll say what this all means for the epistemology of the Digital Humanities in a different post, to the extent that that&#8217;s helpful.

Here I want to say something much more specific: that Fourier transforms are the wrong &#8220;smoothing function&#8221; (insofar as that is the appropriate term to use) to choose for plots, because they assume plot arcs are periodic functions in which the beginning must align with the end. I&#8217;m pretty sure I&#8217;m right about this, but as usual I&#8217;m relying on an intuitive understanding of the techniques under discussion here rather than a deeply mathematical one. So let me know if I&#8217;m making a total ass of myself, and I&#8217;ll withdraw my statements here.

Even before Swafford posted her critique, I felt like there was something quite wrong about using the Fourier transform as a &#8220;smoothing&#8221; mechanism. Fourier transforms, in my experience with them, are bad at dealing with humanities data, because they rely on a very precise definition of &#8220;signal.&#8221; I&#8217;ve had to use wavelets instead of the Fourier transform in the past even to extract obviously periodic data from time series, because the assumptions of regularity in the fourier transform are so strong that some periods are simply missed.

As I was reading Enderle&#8217;s post, it occurred to me that we&#8217;ve been graphing these fourier transformed waves with the x axis reading 1 to 100, as if it was a closed domain. But, in fact, if plot is a sum of sine waves, that domain should actually read from 0 to 2\*pi. (Or, if you&#8217;re so inclined, from 0 to [tau](http://www.tauday.com/)). The difference being that waveforms are _cyclical: _this is the fundamental assumption of fourier transforms, whence all of the ringing artifacts that Swafford usefully points out come. After 100 comes 101: but 2 pi is the same as zero. This assumption is true only for novels whose last sentence is aligned to feed back into their first, a rare breed indeed. (Although ironically, given the primacy that _Portrait of the Artist _has played in this debate, [Joyce wrote one](http://en.wikipedia.org/wiki/Finnegans_Wake).)

To put that graphically: this cyclicality means that syuzhet imposes an assumption that the start of plot lines up with the end of a plot. If you generate an artificial plot that starts with sentiment &#8220;-5&#8221; and ends with sentiment &#8220;5&#8221;, it looks like this with normal smoothing methods. (Rolling average or loess).

&nbsp;

![](/wp-content/uploads/2015/04/Screen-Shot-2015-04-03-at-11.52.25-AM.png)

&nbsp;

&nbsp;

But if you try to use syuzhet&#8217;s filter, it comes up looking completely different: wavy.

![](/wp-content/uploads/2015/04/Screen-Shot-2015-04-03-at-11.47.38-AM.png)

&nbsp;

This holds true on real documents. I ran it on every state of the union address since 1960. I&#8217;ve added dashed lines to show the overall sentiment movement in the address. Blue shows loess smoothing from beginning to end, and red shows the fourier transform. As you can see, loess allows plots to get happier or sadder: fourier forces them to return almost to their starting place.

All the code for this is [online here](http://rpubs.com/benmschmidt/Syuzhet): you can try it on your own plots as desired.

![](/wp-content/uploads/2015/04/Screen-Shot-2015-04-03-at-11.55.30-AM.png)

&nbsp;

&nbsp;

I can see no sound reason to do this. Plots can start sad and get happy. [But if you look at Jockers&#8217; six &#8220;fundamental plots,&#8221; all start and end in the same approximate emotional register](http://www.matthewjockers.net/2015/02/25/the-rest-of-the-story/). This, I think, is an artifact of the assumptions of periodicity built into the Fourier transform, not the underlying plots. There&#8217;s no room in this world for Vonnegut&#8217;s &#8220;From bad to worse,&#8221; or for any sort of rags to riches. It treats plot as a zero-sum game.

If I&#8217;m not misunderstanding something here, this should convince Jockers to retire the waveform assumptions in favor of something like Loess smoothing or moving averages, so digital humanists can move on to talking about something other than &#8220;ringing artifacts.&#8221; I don&#8217;t think this devastating for the Syuzhet package as a whole: it has absolutely nothing to do with the suitability of sentiment analysis for determining plot, which is a much more interesting question others are contributing to. (I am still undecided whether I think [my own method of plotting arcs through multidimensional topic spaces](http://sappingattention.blogspot.com/2014/12/fundamental-plot-arcs-seen-through.html), which I originally came up from my misunderstanding something Jockers said to me a year ago about his idea for syuzhet, is better: I do think it adds something to the conversation.) One of the broader points my unfinished post makes is that we shouldn&#8217;t be taking failures in one component of a chain to mean the rest is unsound: that&#8217;s an oddly out-of-domain application of falsifiability.

&nbsp;

&nbsp;
