---
title: 'Measuring word collocation, part III'
date: 2010-11-26T18:49:00.001-05:00
draft: false
url: /2010/11/measuring-word-collocation-part-iii.html
tags: 
- collocation
- isms
---

 <!-- /\* Font Definitions \*/ @font-face {font-family:Times; panose-1:2 0 5 0 0 0 0 0 0 0; mso-font-charset:0; mso-generic-font-family:auto; mso-font-pitch:variable; mso-font-signature:3 0 0 0 1 0;} @font-face {font-family:Cambria; panose-1:2 4 5 3 5 4 6 3 2 4; mso-font-charset:0; mso-generic-font-family:auto; mso-font-pitch:variable; mso-font-signature:3 0 0 0 1 0;} @font-face {font-family:"Trebuchet MS"; panose-1:2 11 6 3 2 2 2 2 2 4; mso-font-charset:0; mso-generic-font-family:auto; mso-font-pitch:variable; mso-font-signature:3 0 0 0 1 0;} /\* Style Definitions \*/ p.MsoNormal, li.MsoNormal, div.MsoNormal {mso-style-parent:""; margin-top:0in; margin-right:0in; margin-bottom:10.0pt; margin-left:0in; mso-pagination:widow-orphan; font-size:12.0pt; font-family:"Times New Roman"; mso-ascii-font-family:Cambria; mso-ascii-theme-font:minor-latin; mso-fareast-font-family:Cambria; mso-fareast-theme-font:minor-latin; mso-hansi-font-family:Cambria; mso-hansi-theme-font:minor-latin; mso-bidi-font-family:"Times New Roman"; mso-bidi-theme-font:minor-bidi;} span.apple-style-span {mso-style-name:apple-style-span;} @page Section1 {size:8.5in 11.0in; margin:1.0in 1.25in 1.0in 1.25in; mso-header-margin:.5in; mso-footer-margin:.5in; mso-paper-source:0;} div.Section1 {page:Section1;} -->   

Now to the final term in my sentence [from earlier](http://sappingattention.blogspot.com/2010/11/links-between-words.html#more)—  **“How often, compared to what we would expect, does a given word appear with any other given word?”****.** Let’s think about _How much more often._ I though this was more complicated than it is for a while, so this post will be short and not very important.

Basically, I’m just using the percentage of time more often as the measuring stick—I fiddled around with standard deviations for a while, but I don’t have a good way to impute expected variations, and percentages seems to work well enough. I do want to talk for a minute about an aspect that I’ve glossed over so far—how do we measure the occurrences of a word relative to itself?

  

I can think of four options:

1\. Assume that each word appears with itself exactly as many times as we’d expect.

2\. Assume that each word has the average ‘lumpiness’ of the words in our sample—a word that appears with itself a lot will get a positive score for appearances with itself, and one that is more evenly distributed will get a negative score. This is odd because it will push words that are relatively spread further away from words they frequently appear with, and words that are highly concentrated closer to the ones they appear with. I can’t think of a good reason to do this.

3\. Assume each word is distributed at random throughout the text, and treat every occurrence above that baseline as unexpected. A word that appears 10,000 times in 25,000 books will appear with itself maybe 1000 times at random—if it appears with itself 5000 times, we could treat that as 4000 extra appearances.

4\. Assume each word is thinly spread through all the books, and treat every occurrence above that as unexpected. I can’t think of any reason to do this, either.

There’s a lot to be said for the third approach, but I’m using the first one right now. The problem with the third is that words appear with themselves both a) far more frequently than with any other word, and b) at quite varying rates that are related to overall frequency. Since I’m assuming we already know about a word’s lumpiness for the first part of these calculations, I’m keeping that assumption for the second part.