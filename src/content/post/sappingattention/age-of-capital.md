---
title: 'The Age of Capital–'
date: 2010-12-06T08:00:00.003-05:00
draft: false
url: /2010/12/age-of-capital.html
tags:
  - Data exploration and visualization
  - isms
---

Dan [asks](http://sappingattention.blogspot.com/2010/11/century-of-isms-take-one.html?showComment=1291482410754#c810926497419702188) for some numbers on "capitalism" and "capitalist" similar to the ones on ["Darwinism" and "Darwinist"](http://sappingattention.blogspot.com/2010/11/isms-and-ists.html) I ran for Hank earlier. That seems like a nice big question I can use to get some basic methods to warm up the new database I set up this week and to get some basic functionality written into it.

I'm going to go step-by-step here at some length to show just how cyclical a process this is--the computer is bad at semantic analysis, and it requires some actual knowledge of the history involved to get anything very useful out of the raw data on counts. A lot of comments on semantic analysis make it sound like it's asking computers to think for us, so I think it's worth showing that most of the R functions I'm using generally operate at a pretty low level--doing some counting, some index work, but nothing too mysterious.

Dan suggested "capitalism" and "capitalist", but let's start by seeing if there are any other words we can to include. Here's a list of the words perl::stemmer thinks have the same root as "capitalism," along with how many times they appear in my database. (My [cutoff for words I count](http://www.blogger.com/post-edit.g?blogID=8929346053949579231&postID=2785102710377808071) is a little over 150 appearances in 90 years right now).

\> costems("capitalism",counts=T)  
             word  count  
12        capital 352211  
13       capitals  20895  
14 capitalization   4372  
6       capitally   2215  
9      capitalism   2120  
2          capite   2099  
4     capitalized   1385  
1           capit   1270  
10     capitation   1171  
7        capitate   1136  
8      capitalize    585  
5    capitalizing    332  
11    capitalised    220  
3  capitalisation    209

The base word and its plurals get the lion's share of mentions. No surprise. Both those words have a lot of meanings, and it would take a lot of work to disentangle them. "Capitalist" doesn't seem to show up, but we know it should--seems like the stemmer program doesn't know about "-ist." Let's add it in.

\> costems("capitalist",counts=T)  
          word count  
1  capitalists 14687  
2   capitalist 11987  
3 capitalistic  2037

Those numbers are large--capitalistic is almost as common as capitalism, which I wouldn't have necessarily expected. It's also interesting that the plural is more common than the singular of capitalist--we'll want to know what that's about, so we definitely want to put that in.

"Capitalization" would be interesting _if_ it's mostly something that happens to banks in crisis, rather than to letters at the start of words. So to check, I'll take a random sample of usage:

\> find.usage.examples("capitalization",8)  
\[1\] "1916:  the fact that many public service corporations are not paying any dividends at all and that some occasionally fail to pay interest proves that the possibiuty of raising rates under the cover of any given capitalization is not unlimited"                                                                                            
\[2\] "1903: if the capitalization of earnings and the protection of vested interests were seriously considered by the public in a controversy of this character the method of capitalization which we are discussing would have been turned to account by the contestants  we find however that with rare exceptions these arguments were not used"  
\[3\] "1912:   if the allowance proves inadequate for the required purposes an application for further capitalization may be made upon which application the expenditure of the proceeds of stock and bonds already authorized must be shown in detail"                                                                                               
\[4\] "1918: in the alton case they were suffered chiefly by those who bought its bonds and stocks after its recapitalization"                                                                                                                                                                                                                        
\[5\] "1887:   with chapters on hyphenization capitalization spelling etc by f"                                                                                                                                                                                                                                                                       
\[6\] "1922:     was not then earning dividends and fixed charges it did begin paying dividends on its preferred stock in and on its common in  its stock in  j was quoted at which showed that its  earning power had much more than overtaken its expanded capitalization"                                                                          
\[7\] "1912: we have seen that the proposed capitalization of  j per cent bonds and common stock does not work out as safe a financial plan as the one including the watered stock"                                                                                                                                                                   
\[8\] "1912:   now suppose a severe depression in the business sets in and earnings on the total capitalization drop to per cent"

Seven of eight are business meanings, so we'll keep it in. The lack of punctuation and numbers has to do with my pre-processing, and the typos are Internet Archive's. It looks to me like the code is doing a passable, though definitely not perfect, job of splitting the text into sentences right now. I have noticed a few problems with duplication and with handling of certain abbreviations I'll have to fix.

Setting problems aside for later, let's look at the chart for the words that look most promising on that list:

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TPxt21fq4iI/AAAAAAAACWI/mpl5cAGixH8/s1600/capitalization+capitalism+capitalists+capitalist+capitalistic.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TPxt21fq4iI/AAAAAAAACWI/mpl5cAGixH8/s1600/capitalization+capitalism+capitalists+capitalist+capitalistic.png)

Those 1830s spikes confuse things a little, but we the story is I think (Dan?) pretty much what we'd expect from the history of capitalism literature. Capitalist is a noun, probably a negatively inflected one and more often plural than singular. (I was hoping there would be more of a switch from "capitalists" to "capitalist", but there is a little). "Capitalism" only just sneaks in at the end--it's not going to be a major word until even after this period. We perhaps want to check it against a couple other related words:

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TPx-pSG_tPI/AAAAAAAACWM/Nk_ZEUxavFQ/s1600/capitalism+socialism+communism.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TPx-pSG_tPI/AAAAAAAACWM/Nk_ZEUxavFQ/s1600/capitalism+socialism+communism.png)

Socialism is the more relevant comparison, given the various meanings of communism in the nineteenth century, and it laps the field. I'm not exactly surprised to see "capitalism" stay so low during the red scare, but neither would I have necessarily expected it. Scale alters our perception of that, though: adjust the words to be on the same scale (and replace 'communism' with 'americanism') and we can see more of a  political pattern--an initial peak at the end of the turbulent 90s, rising just as socialism sinks; and then staggered rises

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TPyA-wA1V9I/AAAAAAAACWQ/S0CVvy20aqw/s1600/capitalism+socialism+americanism.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TPyA-wA1V9I/AAAAAAAACWQ/S0CVvy20aqw/s1600/capitalism+socialism+americanism.png)

So what about shifting meanings? "Capitalism" is probably more clear, but "capitalist" raises questions. Does it switch from rapacious speculators in the 1830s to sagacious businessmen in the 1890s to a vanilla adjective by the 20s? Computers are bad at finding meaning, but there are a few ways to do this. We could go full-bore machine-processing, which is tough on big, error-ridden corpuses but the best to answer adj/noun questions. The [Corpus of Historical American English](http://corpus.byu.edu/coha/) would be a good tool for that. Or we could look as context--words surprisingly common in the same sentence, or in the same book. That's what I'm working on next. (Well, first I may need to clear out some duplicate texts--there are still too many).

But there's still the old fashioned way: for now, we can just read some text. I'll adjust the algorithm to treat all authors equally, instead of overweighting those who use the word the most, to get the broadest set of meanings:

\> return = find.usage.examples("capitalist",6,yearlim=c(**1830,1840**),weighted=F); paste(return\[\[2\]\]$year,return\[\[1\]\],sep=": ")

\[1\] "1838:  employment during the operation would be given to persons and a  permanent settlement for   surelv if there be any truth or practicability in these speculations and  we think there is both if the country were quiet it would be better and more  iiindable for english capitalists to endeavour to improve poor ireland and settle her population at home rather then send bdth money and people to canada afcica or anstraliai the pole equator or antipodes    bbogabs"

\[2\] "1835: at an early period of her life she appeared on the stage for which she had some talent and attracted the attention of a great capitalist who made her his wife"

\[3\] "1838: no capitalist will speculate in a country when the only return he can expect for his outlay ia to be murdered if he ask for it no soivent agriculturist will settle la a place where bis house is burnt down if he attempt to improve his land no sober industrious man will take a farm where his life is in imminent peril day and niflht from the idle drunken turbulent tenants who were ejected from it"

\[4\] "1839:   i take the expenditure of the capitalist not the value of the capital as my standard because it is the standard upon which amongst us property as an object of taxation is rated"

\[5\] "1832: at each board presided one of the nobility unmasked and in his robes of office for to that class alone belonged the disgraceful monopoly of banking and to increase their degradation they  traded in this commerce of vice not upon their own account but as the hired servants of some wealthy capitalist of infe rior rank who frequently was a jew"

\[6\] "1833: as for goldsmith and churchill whatever they appear to have owed to pope they are remembered and admired for what they possessed independent of him each having wealth enough of his own to be a freeholder of parnassus after paying off any mortgage on his little estate due to that enoroious capitalist"

As you might guess, these all seem to be English books, albeit reprinted by American publishers. #5 aside, the capitalists seem not be as bad as one might think--it would be nice, I guess, to figure out how to tag authors with a little biographical information so we could tell Americans apart. That project is down the line. On the other hand, it's a good transnational reminder that the Philadelphia and New York houses were  publishing English books, and that we'd do well to read those as well as Bancroft and Beecher and Brownson to see what circulated in the USA.

I'll jump straight to 1920:

\> return = find.usage.examples("**capitalist**",6,yearlim=c(**1920,1922**),weighted=F); paste(return\[\[2\]\]$year,return\[\[1\]\],sep=": ")

\[1\] "1921: if you was a capitalist an thinkin of loanin big money to a man you found out had been in prison for manslaughter and that he     had since been accused of robbin a stage an killing the driver  he was in a hurry explained dave"

\[2\] "1920: between these groups of capitalists there has developed a community of interest or harmony of action that has the effect of restraining the competition in rate making     that formerly prevailed among separately managed railway systems"

\[3\] "1920: they have no interest in the russian       soldier except as a pawn to be used in their capitalist war"

\[4\] "1922: the great industrial population can labor only when the capitalist class who own the industries believe they can market their product at a profit"

\[5\] "1922: by the middle of the eighteenth century need was to open up virginias splendid wilderness domain which under the terms of her charter grant extended west and northwest up into the land from sea to sea and just as the original colonization of virginia was undertaken by a company of adventurers and planters of the city of london chartered by the crown so the great woods as this wilderness  region was called was bestowed upon a chartered    body of virginia and british capitalists known as the ohio company  surveyors were sent to the region between the monongahela and the kanawha rivers"

\[6\] "1920: now i believe in rich people who act squarely and in labor unions which are managed with wisdom and justice but when either employee or employer laboring man or capitalist goes wrong i have to cinch him and that is all there is to it"

## Lots of capitalist as an adjective here--and in a surprisingly negative context, for the most part. Not so much 'business-of-america-is-business' attitude in the early 20s. (#6 is Teddy Roosevelt, you could probably guess). It's easy to pooh-pooh that as something we know--there's lots of anti-capitalism in the press—but I don't think every historian would really be able to predict the distributions here. It's just a start, and it obviously requires a lot more reading and could benefit from more computers. But I'll leave off for now, and put computer assignments into another place.

### Comments:

#### This is fantastic. I think it confirms, but nuance...

[Dan](https://www.blogger.com/profile/05217832960135325575 'noreply@blogger.com') - <time datetime="2010-12-06T10:14:14.251-05:00">Dec 1, 2010</time>

This is fantastic. I think it confirms, but nuances, the story I would expect: one that begins with "capital" as an object of practical use and Smithian investigation, moves on to "capitalists" as a term of art for the skilled employer of capital, and becomes an increasingly pejorative "capitalism" by the turn of the twentieth century, before the mid-twentieth century re-appropriation of capitalism and capitalist by big business as positive goods.

Still, I do think there's some established historiography that explains "capitalist" as an analog to "Quaker": a term of derision adopted as a badge of honor. That story doesn't look very solid any more---except perhaps as a story about the twentieth century.

<hr />
#### I appreciated the way you demystified the methodol...
[Pey-Yi]( "noreply@blogger.com") - <time datetime="2010-12-11T11:34:08.246-05:00">Dec 6, 2010</time>

I appreciated the way you demystified the methodology by going step-by-step. It helped me get a better sense of how DH work is done on both technical and interpretive levels. I wonder whether the word "utopia" is on the radar in the long 19th century. Would it make the cut of 150 appearances in 90 years? Anyway, thanks for these interesting posts!

<hr />
