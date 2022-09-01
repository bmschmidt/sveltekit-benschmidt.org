---
id: 275
title: 'Bleg 1: String Distance'
date: 2014-03-27T21:44:24+00:00
author: ben
layout: post
guid: 'http://benschmidt.org/?p=275'
url: '/2014/03/27/bleg-1-string-distance/'
categories:
  - Data Munging
---

String distance measurements are useful for cleaning up the sort of messy data from multiple sources.

There are a bunch of string distance algorithms, which usually rely on some form of calculations about the similarities of characters. But in real life, characters are rarely the relevant units: you want a distance measure that penalized changes to the most information-laden parts of the text more heavily than to the parts that are filler.

Real-world example: say you&#8217;re trying to match two lists of universities to each other. In one you have:

[500 university names…]

Rutgers the State University of New Jersey

and in the other you have:

[499 university names…]

Rutgers University

New Hampshire State University

By most string distance measures, &#8216;State University&#8217; and &#8216;New&#8217; will make the long version of Rutgers match New Hampshire State, not Rutgers. But in the context of those 500 other names, that&#8217;s not the correct match to make. The phrase &#8220;State University&#8221; actually conveys very little information (I&#8217;d guess fewer than 8 bits) , but that &#8220;R-u-t-g-e-r-s&#8221; are characters you should lose lots of points for changing. (Rough guess, 14 bits).

In practice, I often get around this by changing the string vocabulary by hand. (Change all occurrences of &#8220;University&#8221; to &#8220;Uni&#8221;, etc., ) I can imagine a few ways to solve this: eg., normalized compression distance starting from a file of everything, or calculating a standard string distance metric on a compressed version of names instead of the English version. But I feel like this must exist, and my Internet searches just won&#8217;t find it.
