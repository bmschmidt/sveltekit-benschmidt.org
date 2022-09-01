---
title: 'Century of -isms, take one'
date: 2010-11-14T13:43:00.001-05:00
draft: false
url: /2010/11/century-of-isms-take-one.html
tags:
  - Changes in language over time
  - Featured
  - isms
---

Here's a fun way of using this dataset to convey a lot of historical information. I took all the 414 words that end in ism in my database, and plotted them by the year in which they peaked,\* with the size proportional to their use at peak. I'm going to think about how to make it flashier, but it's pretty interesting as it is. Sample below, and full chart after the break.

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TOAsM2sQVQI/AAAAAAAACF0/ufOpNRg6b28/s1600/Scattersample.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TOAsM2sQVQI/AAAAAAAACF0/ufOpNRg6b28/s1600/Scattersample.png)

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TOAs6dhKi0I/AAAAAAAACF8/DvM7X023xBc/s1600/ismscatter.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TOAs6dhKi0I/AAAAAAAACF8/DvM7X023xBc/s1600/ismscatter.png)

The x-axis doesn't mean anything, and the years are jittered a little to make it easier to read. If I ever get this database running quickly enough to use, I'd love to color-code the words by machine-categorized field (science, religion, politics, etc.). Any other ideas for additional information this could show?

## \*Actually the year in which a fitted loess curve peaked. I turned up the sensitivity of the loess curve because it gave better results for a few words (knownothingism, in particular) that were intensely used for only a few years and then at a lower level of use later.

### Comments:

#### So does this tell us that the number of "-ism...

[Hank]("noreply@blogger.com") - <time datetime="2010-11-15T00:54:51.138-05:00">Nov 1, 2010</time>

So does this tell us that the number of "-isms" rises steadily over the century, or does it not tell us that? How do these relate to their associated "-ists," or is that too hard to figure out?

<hr />
#### The increased density of 'isms' in the tee...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-11-15T10:02:31.068-05:00">Nov 1, 2010</time>

The increased density of 'isms' in the teens shows that they did increase over time.

It would be pretty easy to add the 'ists,' although there would be false positives and negatives: there's no such thing as a utilitarianist, and an organist is not a follower of organized organism.

<hr />
#### Can we select a few to track though? I'd be in...
[Hank]( "noreply@blogger.com") - <time datetime="2010-11-15T14:01:57.943-05:00">Nov 1, 2010</time>

Can we select a few to track though? I'd be interested in disparities between "sociology" and "sociologist," for example, as well as "Darwinism," "Darwinist," and "Darwinian"...

<hr />
#### And of course: capitalism vs. capitalist
[Dan](https://www.blogger.com/profile/05217832960135325575 "noreply@blogger.com") - <time datetime="2010-12-04T12:06:50.754-05:00">Dec 6, 2010</time>

And of course: capitalism vs. capitalist

<hr />
#### Ben, just now coming onto your site, great work--I...
[Scott (csnesbit)](http://dsl.richmond.edu "noreply@blogger.com") - <time datetime="2010-12-06T09:43:33.815-05:00">Dec 1, 2010</time>

Ben, just now coming onto your site, great work--I'm struck by the persistence of religious denominations as the featured "isms" into the end of the 19C. They're placed by the peak and the font size is by the number of hits at peak, you mention--is this in absolute terms, or is it weighted by number of publications per year? So this makes the graph heavy in the 20thC, no?

<hr />
#### Scott, Good catch, I misspoke on the labels--it&#...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-06T10:10:00.513-05:00">Dec 1, 2010</time>

Scott,

Good catch, I misspoke on the labels--it's weighted by the percentage of books in the year of peak. So these do represent some change.

I couldn't say for sure, but it looks to me like the religious words that peak later are often ones with more historical import—puritanism, calvinism? I've been meaning to take the clustering tree of these words and try color-coding them from that, which might shed light on whether different groups of religious terms peak at different times. (Though there's a little chicken-egg problem here--they'll be classed as different groups in part \_because\_ they peak at different times).

There may be a little of error pushing things towards the back since my corpus isn't perfectly curated--I still have to cull out a bunch of improperly maintained foreigh-language books, for instance, and those might be clustered towards the beginning. There are various other problems. But I think all that clustering at the end is real

<hr />
