---
title: 'Wars, Recessions, and the size of the ngrams corpus'
date: 2011-08-28T18:11:00.001-04:00
draft: false
url: /2011/08/word-counts.html
---

Hank wants me to post more, so here's a little problem I'm working on. I think it's a good example of how quantitative analysis can help to remind us of old problems, and possibly reveal new ones, with library collections.

My interest in texts as a historian is particularly focused on books in libraries. Used carefully, an academic library is sufficient to answer many important historical questions. (That statement might seem too obvious to utter, but it's not--the three most important legs of historical research are books, newspapers, and archives, and the archival leg has been lengthening for several decades in a way that tips historians farther into irrelevance.) A fair concern about studies of word frequency is that they can ignore the particular histories of library acquisition patterns--although I think Anita Guerrini takes that point a bit too far in her recent article on culturomics [in Miller-McCune](http://www.miller-mccune.com/media/culturomics-an-idea-whose-time-has-come-34742/). (By the way, [the Miller-McCune article on science PhDs](http://www.miller-mccune.com/magazines/2010-07-01/the-real-science-gap-16191/) is my favorite magazine article of the last couple of years). A corollary benefit, though, is that they help us to start understanding better just what _is_ included in our libraries, both digital and brick.

Background: right now, I need a list of of the most common English words. (Basically to build a much larger version of the database I've been working with; making it is teaching me quite a bit of computer science but little history right now). I mean 'most common' expansively: earlier I found that [about 200,000 words gets pretty much every word worth analyzing](http://sappingattention.blogspot.com/2010/11/how-many-words-are-there-in-english.html). There were some problems with the list I ended up producing. The obvious one, the one I'm trying to fix, is that words from the early 19th century, when many fewer books were published, will be artificially depressed compared to newer ones.

But it turns out that a secular increase in words published per year isn't the only effect worth fretting about. Words in the Google Books corpus doesn't just increase steadily over time. Looking at the data series on overall growth, one period immediately jumped out at me:

[![](http://2.bp.blogspot.com/-xJslCv2KfgI/Tlqqct6v4XI/AAAAAAAAC2g/GTcZPsrvWd0/s320/depression+and+war.png)](http://2.bp.blogspot.com/-xJslCv2KfgI/Tlqqct6v4XI/AAAAAAAAC2g/GTcZPsrvWd0/s1600/depression+and+war.png)

('Counts' is the sum of the most common words, which I'm using as a slightly better proxy for corpus size). The number of words in the Google Books corpus declines substantially in the Great Depression, and then again in the 1940s during the war. I hadn't really thought about it, but this suggests that raw counts will be suppressed or increased by various world-historical events. This is getting back to one of the things I reflect on most often—that even the most basic bibliographic data can produce interesting evidence.

I suspect most historians' reaction to this chart would be: well, of course. Wars and recessions both decrease the amount of resources being spent on books—wouldn't we be surprised if this wasn't the case?

So let me ask a question, then. Suppose I were to tell you that only one of these patterns was actually real: recessions or wars. Which one would you think it was? I would have been wrong.

Thinking about it?

Suppose you said recessions: here's a scatterplot of change in words published over the previous year against change in GDP over the previous year. Farther to the right is the greatest growth in words in the corpus (1946 is 1.3 times as large as 1945), and to the top is change in GDP year-over-year (so 1942 is 1.17 or so times larger than 1941).

[![](http://3.bp.blogspot.com/-u-U-LcfOXL8/Tlqttdc0XFI/AAAAAAAAC2o/Rl1Sbm9G8RI/s1600/book+publication+against+GDP+growth.png)](http://3.bp.blogspot.com/-u-U-LcfOXL8/Tlqttdc0XFI/AAAAAAAAC2o/Rl1Sbm9G8RI/s1600/book+publication+against+GDP+growth.png)

I would have guessed the GDP effect was real, but it turns out there's no correlation between GDP change, and change in words in libraries, at all. (Actually a slightly negative correlation: -0.11).

The war effect, on the other hand, I would have thought was caused by the particular circumstance of paper rationing in WWII. I wouldn't think it was a general problem. But as you can see, 1861 is the worst overall year for change in number of words in the Google Books corpus. (1923 is the second worst: you should know by now [what that's about](http://sappingattention.blogspot.com/2011/01/digital-history-and-copyright-black.html)). That suggest a real war effect, and indeed, the two other total wars the United States has been involved in show a similar pattern to WWII.

[![](http://2.bp.blogspot.com/-phagQmI7Fhg/TlqwyY1n5II/AAAAAAAAC2w/r4g65SPEfjs/s1600/Civil+War+Books.png)](http://2.bp.blogspot.com/-phagQmI7Fhg/TlqwyY1n5II/AAAAAAAAC2w/r4g65SPEfjs/s1600/Civil+War+Books.png)

[![](http://3.bp.blogspot.com/-JGpMCnhj4qI/TlqxGps9K9I/AAAAAAAAC20/whH1tGc_7D4/s1600/World+War+I+books.png)](http://3.bp.blogspot.com/-JGpMCnhj4qI/TlqxGps9K9I/AAAAAAAAC20/whH1tGc_7D4/s1600/World+War+I+books.png)

Now, these statistics are somewhat misleading. For one thing, I suspect the war effect is swamping the year effect a bit: a lot of the outliers are from the 1940s and the 1860s. Multiple regression might find a strong economic effect. In fact, in the 1890s, which had a major recession in 1893 and a minor war in 1898, only the economic travails appear to decrease the number of books:

[![](http://3.bp.blogspot.com/-9N-7D0c36uo/Tlq0rvAgQHI/AAAAAAAAC28/87XQAu0VuUo/s1600/1890s+books.png)](http://3.bp.blogspot.com/-9N-7D0c36uo/Tlq0rvAgQHI/AAAAAAAAC28/87XQAu0VuUo/s1600/1890s+books.png)

[  
](http://3.bp.blogspot.com/-Fdxi88RXwEo/Tlq0fh45oBI/AAAAAAAAC24/cWH67N7J_Vg/s1600/1890s+books.png)

So really, I'm not sure what's going on here. My working hypthesis for now would be that the restrictions on international shipping that emerged in the 1860s, 1910s, and 1940s are the main factor suppressing book counts, with the shift to war production probably less important. (In both the World Wars, the decrease in books starts well before the US was drawn into hostilities). But I'd have to throw British GDP figures in here to get a really good idea.

For my present purposes, I don't think it's a critically important important question. But it might be for some other task. For all historians, these facts about library history are important to know; and they're getting considerably easier to answer quickly.

Among the most frequent concerns about digitization is that it removes the element of serendipity that used to predominate. (If Google makes a new version of ngrams specifically for academics, they should put a big "I feel serendipitous" button next to the search function to preserve the ability to find that unexpected, field-changing piece of evidence.) But the stack-browser who relies on serendipity might be subtly pushed towards books from peacetime and prosperity: it's better if he knows about it.

If you want it, here's the full timeseries, on a log-y scale. (The title should be 1700-2008, obviously).

## [![](http://2.bp.blogspot.com/-ujbCUnBAbgQ/Tlq8sI8JdPI/AAAAAAAAC3A/IMHMRfSfuHE/s1600/Full+series.png)](http://2.bp.blogspot.com/-ujbCUnBAbgQ/Tlq8sI8JdPI/AAAAAAAAC3A/IMHMRfSfuHE/s1600/Full+series.png)

### Comments:

#### Thanks, Ben! Just a quick question that comes from...

[Hank](https://www.blogger.com/profile/02841787256060612291 'noreply@blogger.com') - <time datetime="2011-08-30T11:18:15.782-04:00">Aug 2, 2011</time>

Thanks, Ben! Just a quick question that comes from a place of relative ignorance:

If someone wanted to use this sort of data as a background claim in a work about something else ("If we look at the number of books being published across this period as a whole, we see a sharp decline in 1XXX, attributable perhaps to A or B"), what sort of qualifications would (s)he have to make?

You've discussed this before (I think?), but what I mean is: how well do word counts from the Google corpus stand in for "number of books actually around," and/or \*especially\* for "number of things going into print" or "number of things being read by folks" in this period?

I know it leaves out periodicals (importantly) – which is why I like your claim about the tripartite source base for history (libraries, newspapers, archives) – but what sort of knowledge of a period \*are\* we getting from Google counts?

<hr />
