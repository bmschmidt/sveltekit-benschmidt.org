---
title: 'Comparing usage patterns across the isms'
date: 2010-11-26T19:12:00.001-05:00
draft: false
url: /2010/11/comparing-usage-patterns-across-isms.html
tags: 
- Featured
- collocation
- Evolution
- isms
---

What can we do with this information we’ve gathered about unexpected occurrences? The most obvious thing is simply to look at what words appear most often with other ones. We can do this for any ism given the data I’ve gathered. Hank asked earlier in the comments about the difference between "Darwinism" and evolutionism, so:  
  
\> find.related.words("darwinism",matrix = "percent.diff", return=5)  
phenomenism evolutionism revolutionism subjectivism hermaphroditism  
2595.147 1967.021 1922.339 1706.679 1681.792  
  
  
Phenomenism appears 2,595%—26 times—more often in books about Darwin than chance would imply. That revolutionism is so high is certainly interesting, and maybe there’s some story out there about why hermaphroditism is so high. The takeaway might be that Darwinism appears as much in philosophical literature as scientific, which isn’t surprising.  
  
But we don’t just have individual counts for words—we have a network of interrelated meanings that lets us compare the relations across all the interrelations among words. We can use that to create a somewhat different list of words related to Darwinism:  
  
  
  
  
find.related.words("darwinism",matrix = "cordist", return=5)  
phenomenism altruism solipsism evolutionism occultism  
2.147993 2.305089 2.320898 2.358127 2.549453  
  
What I’ve done here is to look at correlations between what words are used together a lot to find similarities. Rather than telling us ‘darwinism’ and altruism are used in the same texts, this tells us that that they share a similar pattern of word use—both appear surprisingly often with many of the same words, and surprisingly little with other similar words. The side effect is that now, instead of showing closeness, we show distance—listing the words that stray the least from the pattern of use. To get a sense of the sort of connections this unearths, let’s do both methods for a number of words. I’ll list the words that appear most surprisingly often next to a word first (matrix=”percent.diff” in the R function I wrote for this), and then second the difference in correlations across words (matrix=”cordist”).\* (further note below on the output)  
  
\> find.related.words("**evolutionism**",matrix = "percent.diff")  
uniformitarianism necessitarianism catastrophism intuitionalism subjectivism  
11052.01 8425.68 7229.09 6255.13 6163.75  
  
  
\> find.related.words("evolutionism",matrix = "cordist")  
hedonism intuitionalism necessitarianism utilitarianism phenomenalism  
1.20 1.37 1.37 1.46 1.78  
  
As with Darwinism, they’re pretty similar. I think there’s a trend, though, for the smaller words to rank higher in the first method, because it’s easier for them to appear many more times than expected. That may not be a bad thing, on the face of it—we want to find relations between words regardless of their commonality. On the other hand, rarer words will almost always be more telling than commoner ones because most of the time they’re more specific. I may need to dig back into matrix multiplication to normalize the first matrix a little more.  
(Technical note, mostly to myself: A quick check shows that’s right—there’s a mild negative correlation (R=-.13 as word B, -.25 as word A) between size of word and its power in the rank matrix. But there’s an equally strong positive correlation (R=.203 in both directions) using the correlation matrix. I think these are flipsides of the same issue It boils down to a) can I get something better, and b) does this reflect something real—smaller words are more likely to have extreme fluctuations, and (as a result of that?) will more likely match a single word and less likely match the full set of other words.  
  
But enough chat, let’s try a few more words. I'll keep doing the co-occurrences in words first, and the correlations in use second.  
  
\> word = "**bimetallism**"; find.related.words(word,matrix = "percent.diff",first.index=1,return=6); find.related.words(word,matrix = "cordist");  
  
  
jointmetallism monometallism bimetallism protectionism sectionalism antisemitism  
8197.64 7909.90 5978.65 2226.97 1135.75 1125.64  
  
  
monometallism monometalism bimetalism jointmetallism protectionism  
0.70 1.59 1.66 1.70 2.14  
  
  
This one is great for illustrating what’s going on here. The percent difference, pulls out three related words. Of those, “bimetallism” itself is only the third-most common word—usually I omit the word itself, but here it snuck it because it wasn’t the most popular. And then it goes to broader questions of political economy, includingly, interestingly, anti-Semitism. (By the way, I’m thinking of changing my word scanning so it treats all hyphenated words as a single word—these occurrences are either “antisemitism” as an unhyphenated word, or as a hyphenated word around a line break that my scanner misreads as a single word).  
  
The correlation method also notices the connection between the rhetoric of “bimetallism” and of “bimetalism”. Note that hardly anyone would use both spellings in the same text, so this is completely inferential on the program’s part to realize they’re similar concepts. That’s a sign things are working, but also a reminder that correlation and simultaneous use are two very different things. Another reminder that this is exploration, not necessarily proof.  
  
OK, this is getting long enough. I’ll add a couple more words of interest to find the related terms, and the next step—clustering these terms by their closeness to each other—will have to wait for a separate post.  
  
  
\> word = "**protestantism**"; find.related.words(word,matrix = "percent.diff"); find.related.words(word,matrix = "cordist");  
  
  
newmanism lutheranism wesleyanism bomanism jansenism  
563.40 522.76 520.64 498.94 498.51  
  
  
lutheranism romanism calvinism catechism catholicism  
0.76 0.82 0.84 0.94 1.03  
  
  
I guess “bomanism” is a typo?  
  
  
\> word = "**bonapartism**"; find.related.words(word,matrix = "percent.diff"); find.related.words(word,matrix = "cordist");  
  
  
pacifism prussianism caesarism constitutionalism lamaism  
7604.79 7171.72 2955.34 2579.24 2521.46  
  
  
fenianism stateism royalism sansculottism landlordism  
1.98 2.02 2.02 2.14 2.21  
  
  
And finally: how have I been skipping this one so far?  
  
  
\> word = "**pragmatism**"; find.related.words(word,matrix = "percent.diff"); find.related.words(word,matrix = "cordist");  
  
  
pluralism intuitionism intellectualism moralism aestheticism  
4710.64 3473.58 2608.32 2395.96 2113.03  
  
  
intuitionism pessimism selfcriticism hedonism utilitarianism  
1.32 1.73 1.81 1.90 2.01  
  
  
\*Just for those who are interested—that’s an R function I wrote to quickly do a couple transformations. The great thing about R is that, although it takes longer to get something set up in Excel, it allows you to save your steps and do custom functions you’d like. So for instance, that’s a very simple function which takes as input a word and either the percent difference matrix or the correlation matrix. It then sorts the row of the percent difference matrix and returns the five closest words to the word that was entered. Fast, pretty easy once you get the hang of it.