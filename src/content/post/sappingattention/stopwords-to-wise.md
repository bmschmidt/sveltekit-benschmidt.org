---
title: 'Stopwords to the wise'
date: 2011-04-03T13:45:00.001-04:00
draft: false
url: /2011/04/stopwords-to-wise.html
tags: 
- Building a Corpus
- Digital Humanities
---

[Shane Landrum](http://cliotropic.org/) (@cliotropic) [says](http://twitter.com/?from=emailheader&utm_campaign=newfollow20100823&utm_medium=email&utm_source=follow#%21/cliotropic/status/54409710627061760) my claim that historians have different digital infrastructural needs than other fields might be provocative. I don't mean this as exceptionalism for historians, particularly not compared to other humanities fields. I do think historians are somewhat exceptional in the volume of texts they want to process—at Princeton, they often gloat about being the heaviest users of the library. I do think this volume is one important reason English has a more advanced field of digital humanities than history does. But the needs are independent of the volume, and every academic field has distinct needs. Data, though, is often structured for either one set of users, or for a mushy middle.  
  
A particularly clear connection is from database structures to "categories of analysis" in our methodology. Since humanists share methods in a lot of ways, digital resources designed for one humanities discipline will carry well for others. But it's quite possible to design a resource that makes extensive use of certain categories of analysis nearly impossible.  
  
One clear-cut example: [ancestry.com](http://ancestry.com/). The bulk of interest in digitized census records lies in two groups: historians and genealogists. That web site is clearly built for the latter: it has lots of genealogy-specific features built into the database for matching sound-alike names and misspellings, for example, but almost nothing for social history. (I'm pretty sure you can't use it to find German cabinet-makers in Camden in 1850, for example.) [Ancestry.com](http://ancestry.com/) views **names** (last names in particular) as the most important field and structures everything else around serving those up. Lots of historians are more interested in the **place**  or the **profession**  or the **ancestry**  fields in the census: what we take as a unit of analysis affects what we want to see database indexes and search terms built around. (And that's not even getting into the question of aggregating the records into statistics.)  
  
  
That example is too cut-and-dried, to be sure: but a similar set of concerns applies to digitized newspapers, books, archival records, and so forth. For example, if I can get the work I've been doing on [generational](http://sappingattention.blogspot.com/2011/03/author-ages.html) [differences](http://sappingattention.blogspot.com/2011/04/generations-vs-contexts.html) in language to point somewhere interesting, that would help demonstrate how better author metadata can cast a new light on book metadata. The boundaries between disciplines aren't necessarily firm. (All the examples I can think of would apply to historicist literary criticism, too.) But **generation** is another category historians might want to use that could be lost from a database pretty easily.  
  
Those are easy examples, though. When it comes to history, some categories are more important than others. The Big Three categories are class-race-gender. And **gender**, in particular, can be implicated in the way we structure lexical databases here and now in really nitty-gritty ways. Let me talk about one: [Stop words](http://en.wikipedia.org/wiki/Stop_words), the common function words that are removed from many algorithmic processes and some databases in textual analysis.  
  
What's a stop word? That depends on the database designer. A list of stop words is a functional category: they are words that don't meet a cost-benefit cutoff to include in a given algorithm. The 100 most common words in the language account for about 50% of the word counts in printed matter. Since they're so common, they place a big tax on databases and algorithms, and it makes sense to strip most or all of them out. Lots of common text-processing methods do so--non-quote-enclosed google searches, topic modeling, etc. Those common words lack specific meaning so much that it's [surprisingly hard](http://www.sporcle.com/games/common_english_words.php) to name them all off the top of your head. So removing them makes sense, generally: the [first google hit](http://www.ranks.nl/resources/stopwords.html) for English stopwords includes words like "it","if","why","and."  
  
But: what we think is important depends on what categories we think are relevant. The list also includes words like "he," "she," "him,"and "her." Everything that tells us the gender of an actor or subject, in other words, is frequently presumed to be unimportant by most architects of information retrieval systems. For some purposes, you can get it out, of course; but if use a pre-made standard topic model and want to know how frequently gendered terms appear, you're probably out of luck.  
  
That might be a problem. There's actually some really interesting information buried inside there. For example, I found that while the two most strongly correlated words in my sample by one definition were "united" and "states," the strongest negative correlation was between ["her" and "government."](http://sappingattention.blogspot.com/2011/01/correlations.html) If we want to know where women are, that tells us something; if we believe there's something to structures of gendered discourse underlying language, that tells us something more. I think it's safe to say that a lot of computer database programmers aren't quite as interested in things like this as most historians.  
  
As a simple example of how stopwords can have meaning, we can look at ratio of male to female pronouns in books. I take the number of times "his","him", and "he" appears, and divide it by the number of times "hers","her", and "she" appears. Here's a list of Library of Congress subclasses, sorted from most male-preponderant to least in my [bigpubs database](http://sappingattention.blogspot.com/2011/02/technical-notes.html) of 48,000 books from 1800 to 1922:  
  
 QD: Chemistry: 35.89 times as many male pronouns  
 TJ: Mechanical engineering and machinery: 29.64 times as many male pronouns  
 TA: Engineering (General). Civil engineering: 28.86 times as many male pronouns  
 QR: Microbiology: 24.8 times as many male pronouns  
 TP: Chemical technology: 22.48 times as many male pronouns  
 TN: Mining engineering. Metallurgy: 22.44 times as many male pronouns  
 B: PHILOSOPHY. PSYCHOLOGY. RELIGION: 21.2 times as many male pronouns  
 QA: Mathematics: 20.2 times as many male pronouns  
 QC: Physics: 19.64 times as many male pronouns  
 BT: Doctrinal Theology: 19.56 times as many male pronouns  
 TS: Manufactures: 16.54 times as many male pronouns  
 HB: Economic theory. Demography: 16.42 times as many male pronouns  
 BS: The Bible: 15.26 times as many male pronouns  
 HM: Sociology (General): 14.31 times as many male pronouns  
 BR: Christianity: 13.91 times as many male pronouns  
 HG: Finance: 13.22 times as many male pronouns  
 T: TECHNOLOGY: 12.71 times as many male pronouns  
 Q: SCIENCE: 12.12 times as many male pronouns  
 Z: BIBLIOGRAPHY. LIBRARY SCIENCE.: 11.04 times as many male pronouns  
 KF: United States: 10.51 times as many male pronouns  
 QE: Geology: 9.97 times as many male pronouns  
 LD: Individual institutions - United States: 9.43 times as many male pronouns  
 JC: Political theory: 9.36 times as many male pronouns  
 E: HISTORY OF THE AMERICAS: 9.08 times as many male pronouns  
 BX: Christian Denominations: 9.02 times as many male pronouns  
 JK: Political institutions and public administration (United States): 8.97 times as many male pronouns  
 HF: Commerce: 8.65 times as many male pronouns  
 SK: Hunting sports: 8.38 times as many male pronouns  
 TK: Electrical engineering. Electronics. Nuclear engineering: 8.35 times as many male pronouns  
 BV: Practical Theology: 8.28 times as many male pronouns  
 F: HISTORY OF THE AMERICAS: 8.26 times as many male pronouns  
 R: MEDICINE: 8.25 times as many male pronouns  
 BL: Religions. Mythology. Rationalism: 8.06 times as many male pronouns  
 QH: Natural history - Biology: 7.77 times as many male pronouns  
 NA: NA: 7.63 times as many male pronouns  
 ND: Painting: 7.58 times as many male pronouns  
 GV: Recreation. Leisure: 7.56 times as many male pronouns  
 PA: Greek language and literature. Latin language and literature: 7.56 times as many male pronouns  
 QP: Physiology: 7.43 times as many male pronouns  
 DT: Africa: 7.23 times as many male pronouns  
 LA: History of education: 6.91 times as many male pronouns  
 RM: Therapeutics. Pharmacology: 6.57 times as many male pronouns  
 HN: Social history and conditions. Social problems. Social reform: 6.53 times as many male pronouns  
 LB: Theory and practice of education: 6.52 times as many male pronouns  
 S: AGRICULTURE: 6.5 times as many male pronouns  
 SB: Plant culture: 6.47 times as many male pronouns  
 QB: Astronomy: 6.3 times as many male pronouns  
 PE: English language: 6.16 times as many male pronouns  
 QK: Botany: 5.94 times as many male pronouns  
 RD: Surgery: 5.86 times as many male pronouns  
 HE: Transportation and communications: 5.8 times as many male pronouns  
 SF: Animal culture: 5.79 times as many male pronouns  
 DG: Italy - Malta: 5.59 times as many male pronouns  
 DD: Germany: 5.58 times as many male pronouns  
 DA: Great Britain: 5.45 times as many male pronouns  
 N: FINE ARTS: 5.33 times as many male pronouns  
 BJ: Ethics: 5.32 times as many male pronouns  
 DS: Asia: 5.12 times as many male pronouns  
 DK: Russia. Soviet Union. Former Soviet Republics - Poland: 4.74 times as many male pronouns  
 HC: Economic history and conditions: 4.7 times as many male pronouns  
 D: WORLD HISTORY: 4.69 times as many male pronouns  
 LC: Special aspects of education: 4.64 times as many male pronouns  
 G: GEOGRAPHY. ANTHROPOLOGY. RECREATION: 4.45 times as many male pronouns  
 CS: Genealogy: 4.42 times as many male pronouns  
 HD: Industries. Land use. Labor: 4.41 times as many male pronouns  
 ML: Literature on music: 4.25 times as many male pronouns  
 RA: Public aspects of medicine: 4.09 times as many male pronouns  
 NK: Decorative arts: 3.91 times as many male pronouns  
 PN: Literature (General): 3.86 times as many male pronouns  
 CT: Biography: 3.79 times as many male pronouns  
 PQ: French literature - Italian literature - Spanish literature - Portuguese literature: 3.77 times as many male pronouns  
 JX: International law, see JZ and KZ (obsolete): 3.67 times as many male pronouns  
 RC: Internal medicine: 3.37 times as many male pronouns  
 BF: Psychology: 3.28 times as many male pronouns  
 QL: Zoology: 3.26 times as many male pronouns  
 PR: English literature: 3.1 times as many male pronouns  
 DC: France - Andorra - Monaco: 2.84 times as many male pronouns  
 PT: German and Germanic literature: 2.69 times as many male pronouns  
 HV: Social pathology. Social and public welfare. Criminology: 2.66 times as many male pronouns  
 PS: American literature: 2.31 times as many male pronouns  
 PZ: Fiction and juvenile belles lettres: 1.63 times as many male pronouns  
 TX: Home economics: 1.27 times as many male pronouns  
 HQ: The family. Marriage. Women: 0.88 times as many male pronouns  
 RG: Gynecology and obstetrics: 0.74 times as many male pronouns  
  
Of course these things aren't transparently about gender—had I not set a cutoff of 100 books for a genre to be included, you'd see "VK: Navigation. Merchant marine: 0.91 time…" at the bottom of the list, thanks to all those female boats.  But clearly there's some information in the stopwords, and not just at the obvious extremes. For example, more "serious" American literature (PS) has fewer feminine pronouns than 'fiction and juvenile belles lettres' (PZ: although PS also has more criticism, which is part of it) and American literature has the most women, followed by German, then English, then Romance languages, and finally classical literature (way up there). French history has a surprising surfeit of women. Practical theology has way more women than doctrinal theology (and wouldn't you like to know which denominations in 'doctrinal theology' let femininity creep into their discourse a little bit, even if a male God leads to the overwhelmingly male scores in the field as a whole?) And that doesn't even get into change over time, strategies to find citations of women or female actors engaged in specific grammatical constructions, and so on.  
  
Designing databases and running algorithms, I have to decide these things all the time. When I did a topic model of all the genres in my database a couple weeks ago, I took out all stop words (including gendered pronouns) just as the algorithm designers recommend. But now I'm really curious how gendered pronouns would have been distributed had I done so. Curious enough to have my computer spend another 14 hours or so churning through the data with pronouns included? Ah, there's the question. We'll see. I've also been thinking about rebuilding my database around sentences, rather than books, but I think I'd have to take stop words out for that to be feasible. Should I leave gendered pronouns in nonetheless? I'll have to decide for my own purposes how much gendered analysis I'm going to do, and whether the significant costs that imposes (I'd have to move some more MP3s off my hard drive to make room; every query might take 5% longer…) are worth the benefit. Say I worked at ProQuest, though: would you want me to decide for you?  
  
~~  
Historians interested in gender, then, might have good reason to view gender pronouns not as stop words at all, but as content words that might be foregrounded in research. Systems designers, however, might seem them as part of a major deadweight on their database architecture. The organizations that host resources for us will be inclined to omit them in some settings unless they think it's important to preserve possibilities for people doing gender history. Unless people doing gender history show any interest in those resources, that's unlikely to happen. For any other category of analysis, similar factors may be at play--it should be up to scholars to figure out what's possible, but infrastructure places constraints on the questions they can ask.  
  
Shane had an [interesting posts called 'caveat lector'](http://cliotropic.org/blog/2011/03/proquest-historical-serials-caveat-lector/) I missed while away about surprising omissions in ProQuest databases. I'd only complete the chain and say it really is caveat emptor, too: for products like ProQuest, historians are consumers, plain and simple, even if we consume by reading. The fact that a library writes the check shouldn't blind them to that. And in cases like this, they could stand to learn some things from [consumer history](http://www.ucpress.edu/book.php?isbn=9780520235908) about how buyers might change what's available to them.
---
### Comments:
#### I recently discovered your blog and have been lear...
[Caleb McDaniel](http://www.owlnet.rice.edu/~wcm1/ "noreply@blogger.com") - <time datetime="2011-04-03T15:12:16.944-04:00">Apr 0, 2011</time>

I recently discovered your blog and have been learning a lot. Thanks for your work!  
  
This is a question from ignorance, but your interesting observations about stop words made me wonder about Google's decision to lump together spelling variations (for example, if I search "child labor" I get some results about "child labour"). From a database perspective, I assume that what's going on behind the scenes here is different from what happens with a stop word. To a layman like me, it would seem like returning results with multiple spellings of the search term would require more processing, algorithmic power than sticking with the user spelling. But I guess my question is whether there are database design decisions in a case like this that might limit an historian's access to questions that might be interesting--like figuring out the rate at which Anglicized spellings of a word like "labour" disappeared from American texts.
<hr />
#### @Caleb, Thanks, I really liked your
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-04-03T15:35:35.123-04:00">Apr 0, 2011</time>

@Caleb,  
  
Thanks, I really liked your [recent post on Lincoln](http://mcdaniel.blogs.rice.edu/?p=126).  
  
If I actually knew how Google worked, I'd probably go cash out by starting a search-engine optimization firm. So this is written from ignorance. But: Google seems to correct for plurals sometimes, as far as I can tell. If they did it fully, it would actually take less storage and so faster queries, although more initial processing to create it--instead of having database entries for 'pay' and 'paid' and 'paying', you can just have a single one for 'pay.' I've thought about changing my database to work like that, because overall it would work faster. But obviously inflection, just like stopwords, occasionally keeps good information in place. (The N-grams guys go one farther than me in keeping capitalization, but I decided nearly doubling the size of the database to be able to tell polish remover from Polish remover wasn't worth it.)  
  
But probably part of the labor thing is that a British site might link "child labour" to an American site even if it doesn't use that spelling; that's the behavior that [Google Bombing](http://en.wikipedia.org/wiki/Political_Google_bombs_in_the_2004_U.S._Presidential_election) exploits.  
  
But you're right, that's a case in point about how computer systems are designed for audiences. Not many people besides historians care about the difference between labor movements and labour movements, right? So Google's right to assume they should be conflated as far as possible in search results.
<hr />
#### Ben, thanks for this post. On keyword searching ...
[Shane Landrum](https://www.blogger.com/profile/09431323570161284017 "noreply@blogger.com") - <time datetime="2011-04-03T15:43:49.015-04:00">Apr 0, 2011</time>

Ben, thanks for this post.  
  
On keyword searching and the biases of databases, April Merleaux's talk ["The Keyword Historian: Adventures in the Digital Archives"](http://digitalhumanities.yale.edu/pdp/2010/04/28/merleauxthe-keyword-historian-adventures-in-the-digital-archives/), given at the [Past's Digital Presence conference](http://digitalhumanities.yale.edu/pdp/) at Yale last year, may be of interest. The video's online at that link. She talks about her use of the keyword "piloncillo" (a little cone of unrefined sugar) as a way to research the sugar trade on the US-Mexico border in the 19th century. She also, towards the end of the talk, mentions the biases of Ancestry.com and the limitations of its family-focused searching.
<hr />
#### Working on the 19c, the question of spelling norma...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-04-03T15:54:41.543-04:00">Apr 0, 2011</time>

Working on the 19c, the question of spelling normalization is relatively painless. But as you get back before 1800 it becomes hairy -- both because there are more variants, and because the line between "a different spelling" and "a different word" can get blurry. I'm trying to build a corpus that covers 1700-1900, and that's going to be one of the trickier aspects.  
  
The information about gendered pronouns is interesting. Equally interesting is the implicit overview of DH, which hints that on the whole historians are more likely to emphasize big data, and lit types more likely to emphasize intensive analysis of smaller datasets. I think that's probably right, on the whole, although I can think of a number of exceptions on both sides.
<hr />
