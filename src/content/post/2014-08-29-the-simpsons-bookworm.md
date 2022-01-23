---
id: 320
title: The Simpsons Bookworm
date: 2014-08-29T19:38:24+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=320
url: /2014/08/29/the-simpsons-bookworm/
categories:
  - Bookworm
---
I thought it would be worth documenting the difficulty (or lack of) in building a Bookworm on a small corpus: I&#8217;ve been reading too much lately about the Simpsons thanks to the FX marathon, so figured I&#8217;d spend a couple hours making it possible to check for changing language in the longest running TV show of all time.

For some thoughts on how to build a bookworm, read &#8220;prep&#8221;: otherwise, skip to analysis. [Or just head over the browser](http://benschmidt.org/Simpsons/).

### Prep

Step one is getting the texts. This is easy enough here, something I know how to do from all my [Prochronisms](http://prochronism.com) posts: I can just use the subtitles, which are available a batch at a time. The only challenge is deciding what to do with audio-effects subtitles. I&#8217;m deciding to download the files that include them where necessary, but probably disable them by default. I also end up with only 540-something episodes, about ten short of the complete run: rather than try to figure that out at the start, I&#8217;m going to let the Bookworm data visualizations themselves be the clue to what I&#8217;m missing.

Next up is choosing what a &#8220;text&#8221; will be. The obvious choice would be for each episode to be a single text: but 550 episodes, while it&#8217;s a lot to watch, doesn&#8217;t give many angles for analysis. My second idea is that it might be interesting to look at a really granular level: ideally, we&#8217;d be able to compare the first, second, and third acts. That info isn&#8217;t in the subtitles, but we can split up by lines of speech: later on, we&#8217;ll be able to aggregate the queries to look in just the first hundred lines, or the first third, or whatever. The only downside is that it dramatically increases the number of texts: but that&#8217;s not really a huge problem.

That also makes it easy to decide what I&#8217;ll display in the search results: the individual line from the script containing the word.

Next step is to parse into bookworm format. Since these are in SRT format, it&#8217;s not as easy as it could be: I&#8217;m looking to create indexes that are episode-season-line. To get the season and episode names, I write out some regular expressions that match the various different filenames. This one of the uglier parts, and where I actually spend the most time. The final parsing code uses a whole bunch of regexes to handle the different formats people use: &#8220;S04E20&#8221;, &#8220;[1.3],&#8221; and so forth. One batch doesn&#8217;t have season numbers at all: I&#8217;ll have to fix that later.

<pre class="lang:python decode:true " title="Getting season and ep numbers from the files is the hardest part" >def parseFilename(string):
    form1 = r"[sS](\d\d?)[eE](\d\d?)"
    form2 = r"(\d\d?)x(\d\d?)"
    form3 = r"\[(\d\d?)\.(\d\d?)"

    for regexp in [form1,form2,form3]:
        matches = re.findall(regexp,string)
        if len(matches) &gt; 0:
            return matches[0]

    return ("",re.sub(".*Episode (\d\d).*",r"\1",string))</pre>

Next is actually parsing the text, and adding some new information to it about the position of each line. This is usually the hardest part, but SRT parsing is pretty easy as these things go. Plus, nailing down the format leads me to an insight&#8211;rather than use line number, I can take the embedded time information in the SRT files and index by the minute and second in the episode that a subtitle flashes on the screen. Each subtitle block will correspond to a file, and we&#8217;ll know the exact moment it appeared. Turns out there are about 200,000 of those in the series, which is a reasonable number of texts to include in a Bookworm. (Though if I were hypothetically to do this for a whole bunch of TV series (more than a couple hundred) at the same time, that might push the system&#8217;s limits.) Parsing out the SRT time information works well. We&#8217;re left with some straggling sound effects, which I&#8217;m just leaving in for the time being. Occasionally characters names appear at the front of texts: again, that&#8217;s something I&#8217;d correct if this were a weekend project rather than a weeknight one.

That means the final scheme will give us, for each subtitle block:
  
1. Season Number
  
2. Episode number in the season
  
3. Episode number in the series (will make some plots easier).
  
4. Minute in the episode
  
5. Second in the episode
  
6. The actual text of the block.

From that information, if we were true Simpsons scholars, we could easily add:

1. Act (roughly: call minutes 0-7 act 1, minutes 8-14 act 2, and minutes 15 to the end act 3)
  
2. Air date, episode director, and other information easily linkable from IMDB.
  
3. Whether it&#8217;s a finale or what.

Once the text is parsed, the file-creation is pretty easy, we&#8217;re ready to ingest. The [input.txt](http://bmschmidt.github.io/Presidio/input.txt.html) file is just the text and an id number constructed from the moment the block appears on screen: the jsoncatalog.txt is just a dump of an object that&#8217;s useful for processing, anyway.

I&#8217;ve already written a specialized makefile for my Federalist papers bookworm to clone the Bookworm repo and put files in the right place, so that&#8217;s easily adapted.

And then we&#8217;ve got it! I didn&#8217;t designate any fields as &#8220;time,&#8221; so a first inspection will be easier using the D3 browser.

The first test is to find out about those pesky missing episodes. So I&#8217;ll plot a heatmap of the number of words for each episode (x axis) and season (y axis):
  
![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-11.35.28-AM.png)

This shows that we&#8217;ve got about 25 episodes for season, but: we&#8217;ve got a season 0 and no season 1 (that one set of srts that didn&#8217;t give a season, no doubt); we&#8217;ve got no seasons 16 and 17; and, curiously, most season 6 episodes are twice as long as they should be. Probably season 16 was mislabeled season 6, and we&#8217;re actually missing season 17. We&#8217;re also missing the first 9 episodes of season 21, and the first two of season 22. Oh well. Something to catch on a next run.

**Analysis**

The beta lets us quickly check out some other things, like the number of words (color) by \*minute\* (y axis) and season (x): you can see commercial creep, as sometime around season 14 we lose most of minute 21.

![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-11.40.32-AM.png)

OK: let&#8217;s check the actual words. Here are uses of each of the central four characters: season on the x axis, unigram on the y axis.

![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-12.19.33-PM.png)

Nothing too suspicious here: the shift from Bart to Homer looks good, etc.

Just trying some line charts: yep, Maude only gets mentioned much by name around the season she dies:

![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-12.31.00-PM.png)

But what&#8217;s really interesting, maybe, isn&#8217;t the season-to-season change but the internal episode structure. For instance, at what minute in the episodes do characters talk about &#8220;school?&#8221;

![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-12.33.00-PM.png)

That&#8217;s pretty interesting, actually: pretty much every minute, the plots seem to shift away from school.

Likewise, &#8220;I&#8217;m Kent Brockman&#8221; seems to be overwhelmingly a gag from the opening scene:

![](/wp-content/uploads/2014/08/Screen-Shot-2014-08-29-at-12.35.03-PM.png)

OK, that&#8217;s enough: [here&#8217;s the link to the Bookworm](http://benschmidt.org/Simpsons/), and here&#8217;s the source code.</p>