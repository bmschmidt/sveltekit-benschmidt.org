---
title: 'Full-text American versions of the Times charts'
date: 2010-12-04T15:25:00.000-05:00
draft: false
url: /2010/12/full-text-american-versions-of-times.html
tags:
  - Changes in language over time
  - Featured
  - Data exploration and visualization
---

This verges on unreflective datadumping: but because it's easy and I think people might find it interesting, I'm going to drop in some of my own charts for total word use in [30,000 books by the largest American publishers](http://sappingattention.blogspot.com/2010/11/back-to-basics.html) on the same terms for which the Times published [Cohen's charts of title word counts](http://www.nytimes.com/imagepages/2010/12/04/books/04victorian-graphic.html?ref=books). I've tossed in a couple extra words where it seems interesting—including some alternate word-forms that tell a story, using a perl word-stemming algorithm I set up the other day that works fairly well. My charts run from 1830 (there just aren't many American books from before, and even the data from the 30s is a little screwy) to 1922 (the date that digital history ends--thank you, Sonny Bono.) In some cases, (that 1874 peak for science), the American and British trends are surprisingly close. Sometimes, they aren't.

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TPqaaT0wOXI/AAAAAAAACVw/-Yaw-Mi6lvk/s1600/christian+god+bible.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TPqaaT0wOXI/AAAAAAAACVw/-Yaw-Mi6lvk/s1600/christian+god+bible.png)

This is pretty close to Cohen's chart, and I don't have much to add. In looking at various [words that end in -ism](http://sappingattention.blogspot.com/search/label/isms), I got some sense earlier of how individual religious discussions--probably largely in history—peak at substantially different times. But I don't quite have the expertise in American religious history to fully interpret that data, so I won't try to plug any of it in.

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TPqadbJctrI/AAAAAAAACV0/mLa0CuNNOpI/s1600/universal.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TPqadbJctrI/AAAAAAAACV0/mLa0CuNNOpI/s1600/universal.png)

The decline here is not as pronounced in the British titles, and the word itself is much less common. If it's as true for British texts as American texts, it would suggest that decline was more about conventions for naming books than a retreat from universalism per se. There are a lot more movies with the word "return" in their title these days than there used to be, but that doesn't portend some resurgence of Vico.

[![](http://1.bp.blogspot.com/_Pge31alC_E8/TPqa1JBI4KI/AAAAAAAACV4/Zbkx0jJ761Y/s1600/industrial+industry+industries+industrious.png)](http://1.bp.blogspot.com/_Pge31alC_E8/TPqa1JBI4KI/AAAAAAAACV4/Zbkx0jJ761Y/s1600/industrial+industry+industries+industrious.png)

The twin surprises here are the steady rise and how late it begins--in Cohen's title numbers, industry shoots up to about 1850 and then stays mostly level. I have no idea whether this is an artifact of usage in books, or if it actually reflects different patterns of industrialization between the two countries. Probably a little of both.

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TPqa1gHRi1I/AAAAAAAACV8/AKGh7jnvfTI/s1600/science+scientific+sciences.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TPqa1gHRi1I/AAAAAAAACV8/AKGh7jnvfTI/s1600/science+scientific+sciences.png)

This is one of the words that just cries out for some analysis of comparative word usage at the beginning and the end of the frame: there's no way the context for 'science' is the same in 1830 and 1920, even if the rate of incidence is.

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TPqbGo4W8CI/AAAAAAAACWA/n02qe9uhE-0/s1600/evil+industrial+science+god.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TPqbGo4W8CI/AAAAAAAACWA/n02qe9uhE-0/s1600/evil+industrial+science+god.png)

## I haven't been using the same scale on these charts, but since scale was the point for evil, here are some together. In American full texts, unlike in Victorian titles, "evil" is a fairly common word, thought it does show a slight downward trend: "Industrial" and "science" aren't much more common at the end. And of course, God alone is the most high.

### Comments:

#### Ben - Continued rafts of good material (here's...

[Hank]("noreply@blogger.com") - <time datetime="2010-12-04T15:44:55.312-05:00">Dec 6, 2010</time>

Ben - Continued rafts of good material (here's hoping it won't dry up after a return to domestic normalcy in a few months?). I agree about "science," and I'd like to talk more about this soon.

@gwijthoff (Princeton English) has been doing some interesting thinking on this, re: the word "Gadget" and changing meanings over time, with simple periodized google-searches and then use tags to map change over time.

For now, let's see some thoughts on how to tag for meaning before we get full genre-indexing for the database!

<hr />
#### 2.0 - From the Times caption for the "scien...
[Hank]( "noreply@blogger.com") - <time datetime="2010-12-05T12:34:28.428-05:00">Dec 0, 2010</time>

2.0 -

From the Times caption for the "science" graph:

"Reaching a peak in 1874, its use shows the age's growing interest in science but may also reflect changes in the word's meaning. By the mid-19th century the word 'science' was increasingly associated with the natural sciences."

A. Why is "but" the conjunction for the first sentence - don't these go hand-in-hand?

B. Where is this interpretation about natural sciences coming from, and how does it help explain the noted uptick?

<hr />
#### I think there are two supposed to be two counter-t...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-06T09:43:23.860-05:00">Dec 1, 2010</time>

I think there are two supposed to be two counter-trends, hence the but: an overall growth in science, but a narrowing in meaning. It's sort of an apology for science not completely taking the world by storm as technology does.

Isn't that commonplace about the natural sciences becoming "the sciences"--I couldn't source it, but I know back in an Anne Blair class we read a lot of comparative epistemologies from the 12-13C on, and this just seemed to be assumed. Arnold comes in to oppose the Humanities--this is bastardized memories of freshman year, but isn't it just some story about Huxley vs. Arnold prefiguring the CP Snow Two Cultures split, as opposed to Geisteswissenschaften and all that jazz? Maybe it's a little less true in the US, with stronger connections to German universities, but it's still familiar here, right?

<hr />
#### I resent the implication, 'Hank', that I m...
[Anne]( "noreply@blogger.com") - <time datetime="2010-12-06T14:56:13.627-05:00">Dec 1, 2010</time>

I resent the implication, 'Hank', that I might somehow imperil Ben's progress.

Ben--it's 'Ann' Blair. Takes one to know one.

<hr />
#### I am really impressed from your imaginative thinki...
[Image masking Service](http://www.clippingsolutions.com "noreply@blogger.com") - <time datetime="2014-09-24T14:48:18.009-04:00">Sep 3, 2014</time>

I am really impressed from your imaginative thinking and impressive stated information, i am glad.

<hr />
