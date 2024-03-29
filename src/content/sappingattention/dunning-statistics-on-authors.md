---
title: 'Dunning Statistics on authors'
date: 2011-10-07T15:42:00.002-04:00
draft: false
url: /2011/10/dunning-statistics-on-authors.html
tags:
  - Dunning
  - Howells
  - Data exploration and visualization
  - Comparisons
  - Literature
---

As promised, some quick thoughts broken off [my post on Dunning Log-likelihood](http://sappingattention.blogspot.com/2011/10/comparing-corpuses-by-word-use.html). There, I looked at \_big\_ corpuses--two history classes of about 20,000 books each. But I also wonder how we can use algorithmic comparison on a much smaller scale: particularly, at the level of individual authors or works. English dept. digital humanists tend to rely on small sets of well curated, TEI texts, but even the ugly wilds of machine OCR might be able to offer them some insights. (Sidenote--[interesting post by Ted Underwood today](http://tedunderwood.wordpress.com/2011/10/07/the-challenges-of-digital-work-on-early-19c-collections/) on the mechanics of creating a middle group between these two poles).

As an example, let's compare all the books in my library by Charles Dickens and William Dean Howells, respectively. (I have a peculiar fascination with WDH, regular readers may notice: it's born out of a month-long fascination with _Silas Lapham_ several years ago, and a complete inability to get more than 10 pages into anything else he's written.) We have about 150 books by each (they're among the most represented authors in the Open Library, which is why I choose it), which means lots of duplicate copies published in different years, perhaps some miscategorizations, certainly some OCR errors. Can Dunning scores act as a crutch to thinking even on such ugly data? Can they explain my Howells fixation?

I'll present the results in faux-wordle form as discussed last time. That means I use wordle.com graphics, but with the size corresponding not to frequency but to Dunning scores comparing the two corpuses. What does that look like?

**Words overrepresented in Dickens vs Howells:**

[![](http://4.bp.blogspot.com/-BOExZoju8v0/To3w4riuN9I/AAAAAAAAC3s/eg5xomlgwC4/s640/Dickens+vs+Howells.png)](http://4.bp.blogspot.com/-BOExZoju8v0/To3w4riuN9I/AAAAAAAAC3s/eg5xomlgwC4/s1600/Dickens+vs+Howells.png)

[  
](http://2.bp.blogspot.com/-rNKcmI7KFhg/To3rkG2CktI/AAAAAAAAC3k/kzUWY7VKEwQ/s1600/Dickens+vs+Howells.png)

We get a bit of the British orthography, but less than I'd fear; and we do get a number of insights into Dickens's style ('appearance','merry','little','bright','eyes') as well as some interesting social distinctions probably more reflective of the US vs. Britain and the mid vs the late 19th century ('gentlemen,' 'gentleman,' 'wot', 'coach').

**Words overrepresented in Howells vs. Dickens:**

[![](http://2.bp.blogspot.com/-TSKZWnlUFe4/To3w4y2xK5I/AAAAAAAAC3w/PWtyZK10HHQ/s640/Howells+vs+Dickens.png)](http://2.bp.blogspot.com/-TSKZWnlUFe4/To3w4y2xK5I/AAAAAAAAC3w/PWtyZK10HHQ/s1600/Howells+vs+Dickens.png)

[  
](http://3.bp.blogspot.com/-pFWa0xm0EQY/To3rkfQE1HI/AAAAAAAAC3o/xlQehi0m9vM/s1600/Howells+vs+Dickens.png)

Howells is dominated by two things compared to Dickens. First, that enormous looming 'she' that denotes a significantly larger proportion of female characters, and clusters around it of words like "mother," "girl," "girls"; second, a string of short, common words that reflect the more pedestrian American style compared to Dickensian specificity, including a great number of fragments from contractions (don from "don't", "isn" from "isn't", and probably "ve" from "could've,should've,would've"?). One gets Howells' literary interests as well with 'literature,' 'literary', etc., although I'd have to further refine to see if they came from criticism or from the inclusion of novels themselves as plot points in books like _Silas Lapham._

How is reading these texts the same as or different than comparing Dickens and Howells themselves? It's not quite what I've had expected on the Howells side: he comes off with an Austinian directness (Jane, not J.L.) that doesn't match my expectations. In some ways, I'd say that the comparison tells us far more about Dickens than about Howells.

Just how becomes clear when we compare Howells to a more comparable figure, Henry James. Howells still overuses common words, but now appears overly _masculine_ in his character choices, and fond of 'and' conjunction (while Dickens used 'and' significantly more than Howells...)

**Words overrepresented in Howells vs. James**

[![](http://4.bp.blogspot.com/-YKi0kH36lvQ/To3z0aNbHVI/AAAAAAAAC30/VDc9rQpMc0s/s640/Howells+vs+James+literary+words.png)](http://4.bp.blogspot.com/-YKi0kH36lvQ/To3z0aNbHVI/AAAAAAAAC30/VDc9rQpMc0s/s1600/Howells+vs+James+literary+words.png)

**Words overrepresented in James vs. Howells**

[![](http://1.bp.blogspot.com/-xl3wVF_fR9s/To34CpM0bvI/AAAAAAAAC34/s1nvLcrQWVg/s640/James+compared+to+Howells.png)](http://1.bp.blogspot.com/-xl3wVF_fR9s/To34CpM0bvI/AAAAAAAAC34/s1nvLcrQWVg/s1600/James+compared+to+Howells.png)

Again, I feel like this more closely captures the distinctive qualities of James (moment-companion-charming-extraordinary-view) than of Howells. Even Howell's distinctive points (lots of boys?) -- can be seen as reflections more of James's attributes (endless portraits of ladies). I'd use it as a sort of evidence for the phenomenal blankness of Howells; it's one of the reasons he's an interesting source. (Dan Rodgers once told me he read a lot of Howells one summer to get a better sense of the late 19th century, since James was just too _good_ to portray it blankly.)

But: we're firmly in the fun-with-wordle camp right here. This is not even senior thesis material; I wouldn't count myself qualified to make good English dept. pronouncements about different authors. But I would say--the algorithm seems to be doing a reasonable job using hundreds of minimally processed books to make meaningful distinctions here, and that's for the good. Perfect OCR isn't necessary to get started on this if we know what we're looking for.

## Of course: what are we looking for? Some more database-building for me now, and we'll try to get there soon. If anybody can think of some great corpus-comparisons they'd like to see, let me know.

### Comments:

#### Great stuff, as usual. I agree that it's possi...

[Anonymous](#) - <time datetime="2011-10-07T20:46:16.949-04:00">Oct 5, 2011</time>

Great stuff, as usual. I agree that it's possible to do a lot even with pretty uneven OCR. I know because sometimes after getting good results out of a corpus I go back and discover that I made a silly error in processing that should have really noisified and flattened the results. I don't know how to quantify this yet, but my gut feeling is that certain methods (clustering/LSA, for instance) are pretty robust and tolerate a great deal of noise.

I've actually been thinking about Dunnings lately too. I was put in mind of it by a great article a couple of months ago by Ben Zimmerman addressing the character of "literary diction" in a given period (i.e., Dunnings on a fiction corpus versus the broader corpus of works in the same period).

I'd like to incorporate a diachronic dimension to that analysis. In other words, first take a corpus of 18/19c fiction and compare it to other books published in the same period. Then, among the words that are generally overrepresented in 18/19c fiction, look for those whose degree of overrepresentation \*peaks in a given period\* of 10 or 20 years. Perhaps this would involve doing a kind of meta-Dunnings on the Dunnings results themselves!

<hr />
#### Or, if the "literariness/fictiveness" of...
[Anonymous]() - <time datetime="2011-10-07T22:50:35.146-04:00">Oct 5, 2011</time>

Or, if the "literariness/fictiveness" of a word changes as steadily and gradually as I'm hoping, it might be possible simply to do time series graphs of the Dunning's log likelihood statistic for a given word over the course of a century, by using a sliding temporal window while keeping the generic contrast constant.

<hr />
