---
title: 'Poor man''s sentiment analysis'
date: 2012-02-02T15:51:00.003-05:00
draft: false
url: /2012/02/poor-mans-sentiment-analysis.html
tags: 
- Digital Humanities Now Editors' Choice
- Featured
---

Though I usually work with the [Bookworm](http://bookworm.culturomics.org/) database of Open Library texts, I've been playing a bit more with the Google Ngram data sets lately, which have substantial advantages in size, quality, and time period. Largely I use it to check or search for patterns I can then analyze in detail with text-length data; but there's also a lot more that could be coming out of the Ngrams set than what I've seen in the last year.  
  
Most humanists respond to the raw frequency measures in Google Ngrams with some bafflement. There's a lot to get excited about internally to those counts that can help answer questions we already have, but the base measure is a little foreign. If we want to know about the history of capitalism, the [punctuated ascent of its Ngram](http://books.google.com/ngrams/graph?content=capitalism&year_start=1900&year_end=2000&corpus=0&smoothing=3) only tells us so much:  
  

[![](http://1.bp.blogspot.com/-Qis6Wq-vjfM/TyrE2EKfj3I/AAAAAAAAC-g/5uVQTqlLOmM/s1600/Capitalism+Frequency.png)](http://1.bp.blogspot.com/-Qis6Wq-vjfM/TyrE2EKfj3I/AAAAAAAAC-g/5uVQTqlLOmM/s1600/Capitalism+Frequency.png)

It's certainly _interesting_ that the steepest rises, in the 1930s and the 1970s, are associated with systematic worldwide crises--but that's about all I can glean from this, and it's one more thing than I get from most Ngrams. Usually, the game is just tracing individual peaks to individual events; a solitary quiz on historical events in front of the screen. Is this all the data can tell us?  
  
  
  
Ngrams gives us frequency, but that's just background information for a more interesting question: _how_ the word is used, not how much_._ The full machine learning approach would be to tag all the sentences with sentiment analysis and find out whether capitalism is good or bad. I had a conversation with a Harvard professor yesterday who seemed to think that might work well.  
  
So maybe that would be useful. But historical sentiment is rarely so simple as 'good' or 'bad.' (Even when [those are the words](https://www.google.com/search?q=capitalism+is+good&btnG=Search+Books&tbm=bks&tbo=1#q=%22capitalism+is+good%22&hl=en&tbas=0&sa=X&ei=v8YqT6q0DoihtweG5MT7Dw&ved=0CB0QpwUoBA&source=lnt&tbs=cdr:1%2Ccd_min%3A1%2F1%2F1929%2Ccd_max%3A12%2F31%2F1936&tbm=bks&bav=on.2,or.r_gc.r_pw.,cf.osb&fp=1afdd38b09f813c2&biw=1280&bih=988) we search for). Full sentiment analysis would allow us to do a reading of capitalism in seconds, just the way the Ngrams charts allow us to, on whatever polls ("good" vs. "bad") we could come up with. But historians have more time on their hands, and shouldn't necessarily want just that unidimensional view.  
  
In fact, the shades of sentiment about capitalism are bounded only by the capacity of language to express them. And language is just what we've got already. We may say we want sentiment analysis, but what we really want to know are the shifting contexts in how 'capitalism' is used. Before we have to hang our hats on a classifying tools built for other purposes, we should see what the language itself has to say. Let's pretend that there are just as many sentiments in the English language as there are words. What then?   
  
So what I've done is load in all the 2-grams into a new database here at the Cultural Observatory, and split them up into their component words. That means one can easily get a list of the top 20 words that appear immediately _before_ capitalism in the Ngrams dataset, like so:  
  
mysql> SELECT word1,word2,sum(words) as count FROM 2gramcounts WHERE word2='capitalism' GROUP BY word1 ORDER BY count DESC LIMIT 20;  
+------------+------------+---------+  
| word1      | word2      | count   |  
+------------+------------+---------+  
| of         | capitalism | 1208824 |  
| and        | capitalism |  164728 |  
| to         | capitalism |  139893 |  
| under      | capitalism |  135168 |  
| industrial | capitalism |  131933 |  
| that       | capitalism |  125771 |  
| modern     | capitalism |   75524 |  
| monopoly   | capitalism |   73631 |  
| global     | capitalism |   68416 |  
| American   | capitalism |   66332 |  
| state      | capitalism |   66250 |  
| in         | capitalism |   60258 |  
| with       | capitalism |   49600 |  
| late       | capitalism |   49006 |  
| from       | capitalism |   47667 |  
| by         | capitalism |   44138 |  
| between    | capitalism |   41847 |  
| -          | capitalism |   41537 |  
| for        | capitalism |   40552 |  
| market     | capitalism |   39614 |  
+------------+------------+---------+  
20 rows in set (0.00 sec)  
  
This in itself is slightly more useful, because it gives us a hint of what individual phrases we might care about if we use 'capitalism'. It suggests the possibility of [comparing "market" and "state" capitalism](http://books.google.com/ngrams/graph?content=market+capitalism%2Cstate+capitalism&year_start=1800&year_end=2000&corpus=0&smoothing=3), for example, which is slightly more interesting and meaningful than comparing "capitalism" and "communism," though still a little opaque.  
  
But it's not historical, it's ugly, and it doesn't really shop hypotheses the way I'd like. If we solve a few of the problems (modern phrases like 'late capitalism' show up more than they should, etc.) with a little bit of basic arithmetic, [exclude some stopwords](http://sappingattention.blogspot.com/2011/04/stopwords-to-wise.html), and cluster words by their similarity in frequency and trend,\* we start to get towards an ngrams chart that gives a fuller use of the word.  
  
_\*This k-means clustering is \[ed.--along with the loess smoothing on the lines\] the only part of this whole thing that involves any math a typical humanist doesn't know, and it's for visibility only--which quadrant a line appears in. In an earlier version I used a log-likelihood score to select the words most closely associated with 'capitalism', but that turns out not to really be necessary--all the interesting phrases pop up just by using raw frequency. Anytime you can avoid the tricky math, you should._  
  

[![](http://1.bp.blogspot.com/-_rIDQTeWCeA/TyrPxrQhA_I/AAAAAAAAC-o/_8abCGo3_Zk/s640/Relative+share+of+most+frequent+words+preceding+%22Capitalism%22.png)](http://1.bp.blogspot.com/-_rIDQTeWCeA/TyrPxrQhA_I/AAAAAAAAC-o/_8abCGo3_Zk/s1600/Relative+share+of+most+frequent+words+preceding+%22Capitalism%22.png)

(You may want to click to enlarge).  
  
For any given year here, all the displayed words sum to 100%: so 1 in 20 times that 'capitalism' is preceded by any of the above words, it's preceded by 'market,' for example. We could express the ratio as percentage of a) all words, or b) all two-grams ending in capitalism, but there tends to be a lot of not-necessarily-important noise in the first two.  
  
Substantively, there are some interesting points here. (I should note that I looked at [some similar stuff in a much smaller dataset](http://sappingattention.blogspot.com/2010/12/capitalist-lackeys.html) a while ago.) The decline of 'state' and 'private' capitalism as meaningful terms in the upper right suggests the continuing movement away from capitalism as a type of political economy; the depression-era rise of 'finance capitalism' and the lack of any return in the 1970s makes me wonder the modern-day rise of 'market' (including 'free-market') capitalism referring to the same thing, but with a more occluded group of actors. I particularly like the peaks for different countries ("american" peaking in 1960, "british" in the late 1930s, "Japanese" around 1970 (so early!) with a bump later). Put that together with the decline in 'state' capitalism, and you could start to make an interesting argument that the published literature has moved away from the describing varieties of capitalism and towards seeing it more and more as an ideal type.  
  
(Of course, the normal Ngrams weird-sample caveats apply; the incredible ascent of 'late capitalism' is about the prevalence of Western Marxism in academic-press books, surely, and its only historians who get excited about 'agrarian capitalism' in the 1980s.)  
  
Nonetheless, it's an interesting way of thinking about the paths of a lot of words. Here are a few ones with only minor comment, all click-to-expand ready. \*\*\*If you have some individual word or set of words you want to see this on, just let me know.\*\*\*  
  
Words **following "Capitalist"** shows much the same pattern as "capitalism," but the three words in the upper left (declining, common words) more clearly show a strong Marxist influence that declines. And certain very specific phrases ("capitalist encirclement") that I'd never think to Ngram jump out.  
  

[![](http://3.bp.blogspot.com/-nhfk9C3ZAvk/TyrWuoeSQiI/AAAAAAAAC-w/yliGfeIF6xA/s640/Relative+share+of+most+frequent+words+following+%22capitalist%22.png)](http://3.bp.blogspot.com/-nhfk9C3ZAvk/TyrWuoeSQiI/AAAAAAAAC-w/yliGfeIF6xA/s1600/Relative+share+of+most+frequent+words+following+%22capitalist%22.png)

  
  
An abstract word like **Freedom** has a lot of contexts, and it's difficult to generalize. There are some interesting local peaks ('absolute freedom' around 1905, 'religious freedom' around 1850) and some obvious secular trends (declines in the freedom of the ancients, in 'perfect freedom', in 'unlimited freedom') but not an overall trend.  
  

[![](http://2.bp.blogspot.com/-SV33PhzPL7E/TyrXmh488aI/AAAAAAAAC-4/Al54EYE4V0U/s640/Relative+share+of+most+frequent+words+preceding+%22freedom%22.png)](http://2.bp.blogspot.com/-SV33PhzPL7E/TyrXmh488aI/AAAAAAAAC-4/Al54EYE4V0U/s1600/Relative+share+of+most+frequent+words+preceding+%22freedom%22.png)

  
**Words following the adjective free**, on the other hand, have to my mind a clearer set of trends. (This may be a general rule--you can learn more from the adjectival form than the noun form in the two-grams, since that returns nouns which tend to be more easily glossed than adjectives). A lot of the decliners here, on the left side, are words like "communication," "circulation," "navigations" "passage." That gets at one very important but rarely discussed phenomenon; the removal of freedom of movement (one of the 1848 revolutionaries' major demands) from the very heart of liberalism to its extremities. You get some interesting post-civil rights-era changes as well--the extinction of 'free men', the sudden spike in 'free association' (which generally meant freedom to discriminate), and an interesting rise in free press. There's lots more.  
  

[![](http://4.bp.blogspot.com/-nQh_nJdsGuw/TyrsmzHEIkI/AAAAAAAAC_A/rme04No-KvY/s640/Relative+share+of+most+frequent+words+following+%22free%22.png)](http://4.bp.blogspot.com/-nQh_nJdsGuw/TyrsmzHEIkI/AAAAAAAAC_A/rme04No-KvY/s1600/Relative+share+of+most+frequent+words+following+%22free%22.png)

**Words after "slave"** give quite a different story, largely (I suspect) because the printed record has frequently been dominated by opponents of slavery (Boston and New York publishers in the 1850s, historians today). The risers (the two lower cells on the left, mostly) give an interesting list of the topics in slavery that only became heavily discussed in the published literature sometime around/after the modern slavery historiography began: slave women, slave quarters, slave revolts, slave society. "Slave property" and "slave states" obviously change inflection at the Civil War; the "slave market" is interestingly constant, while emphasis somehow shifts from the 'slave trade' (80% of all adjective-ish usage of 'slave' in 1805!) towards 'slave traders' and 'slave trading.'  
  
  

[![](http://1.bp.blogspot.com/-QCQL8RzZX7U/TyrxE3-IxjI/AAAAAAAAC_I/nU8EkUNAhjw/s640/Relative+share+of+most+frequent+words+following+%22slave%22.png)](http://1.bp.blogspot.com/-QCQL8RzZX7U/TyrxE3-IxjI/AAAAAAAAC_I/nU8EkUNAhjw/s1600/Relative+share+of+most+frequent+words+following+%22slave%22.png)

  
In any case; that's all largely to prove that one can create historical texts, as it were, out of the ngrams database that are linguistically complex, promote historical interrogation and argument, and all the rest.  
  
Why doesn't Ngrams or Bookworm have this as a feature, you ask? Two reasons, which I think are somewhat useful to think about:  
  
1) It takes a lot longer to run the queries. Since this is processing through thousands of 2-grams before settling on a few, the process takes several seconds to run. That doesn't sound long: but no one--particularly not non-computer savvy users like most humanists--waits more than one or two seconds on the web, which is a massive barrier to scholarly tools online.  
  
2) It takes more storage space. To make these queries effective at all, you have to store sorted tables. (Effectively--[actually, it's indexes, as I talked about earlier](http://sappingattention.blogspot.com/2011/03/what-historians-dont-know-about.html).) If you want to be able to search for both preceding and succeeding words, in fact, it often makes sense to store two separate copies of the data for quick lookup, one sorted by succeeding words, and one by preceding. So (with the disclaimer that I have no insider knowledge of this at all) at the Google Ngrams site, I think they store the files in an order where "capitalist lackeys" and "capitalist losses" are easily findable, but where "American capitalism" and "British capitalism" are nowhere near each other. You'd have to read every entry in the whole thing to get them both together, which means that for most practical purposes, it's not possible.  
  
\[I think Fred Gibbs and Dan Cohen did in fact do this herculean task for words within 4 of 'marriage' in the Ngrams database, but it took pay-by-the-hour processing time on Amazon Web Services, which is fine for an individual research project, but unsustainable as a service--each query would probably cost ten dollars, give or take an order of magnitude. This is also probably the place to remind you that Cohen said immediately after release that [the longer Ngrams would be more useful to humanists than the unigrams](http://www.dancohen.org/2010/12/19/initial-thoughts-on-the-google-books-ngram-viewer-and-datasets/); it's interesting that, over a year later, no one has taken up the infrastructural task of enabling those uses.\]  
  
In any case: 2-grams are obviously only a test-bed of the real thing here. One would want to compare just certain parts of speech, to group words together at the researcher's whim, and so forth. Perfectionism would probably wait for a natural-language-processing approach to make this work perfectly; a scaled up version of [wordseer](http://www.cs.berkeley.edu/%7Eaditi/projects/wordseer.html). (Or you could just use Mark Davies' version of the Ngrams data). But given that what historians is reading individual words in their contexts, I'm not sure we have to wait.
---
### Comments:
#### This is some terrific work, Ben. Thanks for sharin...
[Brett Bobley](https://www.blogger.com/profile/16289439108255824072 "noreply@blogger.com") - <time datetime="2012-02-03T22:29:44.083-05:00">Feb 5, 2012</time>

This is some terrific work, Ben. Thanks for sharing it.
<hr />
#### I second that. Brilliant approach to the problem o...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 "noreply@blogger.com") - <time datetime="2012-02-04T11:04:45.127-05:00">Feb 6, 2012</time>

I second that. Brilliant approach to the problem of mining 2-grams. I read this and immediately thought "I've got to get something like that set up at Illinois."  
  
I've actually done a bit of messing around with 2- and 3-grams in AWS but it is \*not cheap\*. Maybe it's cheap for people who have bigger research accounts, but I can't spend $100 every time I have a research question.
<hr />
#### Wonderful - and really powerful. It made me wonde...
[Tim Hitchcock](https://www.blogger.com/profile/17851547190864328027 "noreply@blogger.com") - <time datetime="2012-02-08T04:38:39.287-05:00">Feb 3, 2012</time>

Wonderful - and really powerful. It made me wonder if you had considered how one might set this up with something that looks like a Google correlate environment (http://www.google.com/trends/correlate/). The correlate tool looks a bit useless to me at the moment, but within an established ngram set, it strikes that it would provide a fun and intuitive way to xplore linguistic relationships as an extension to a straight ngram system (though I don't see how one could incorporate distance measures within texts). It also seemed to me the sort of environment most historians could get their heads around.
<hr />
#### Brett, Ted: Thanks. Tim: Have you seen Ted's...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2012-02-08T13:31:13.857-05:00">Feb 3, 2012</time>

Brett, Ted: Thanks.  
  
Tim: Have you seen Ted's [Ngrams correlation viewer](http://leovip026.ncsa.uiuc.edu/Correlation/)? That does most, I think, of what you're suggesting. The big problem with correlation finders (both the Illinois and Google ones) is that you have to precompute an enormous amount of information (although the Google method seems to have some extremely clever work-arounds for dealing with huge sets.)  
  
If you extend to include not just words and phrases but _interactions_ like those I'm looking at here, it would get completely out of control, I suspect.  
  
But there are also interesting similarities within each of these grids (certain ways of talking about slavery rise and fall together)--that, I think, can be a tremendously useful way of thinking about conceptual history; that's what got me into these things in general, actually.
<hr />
#### Thanks for this link - it looks perfect and I will...
[Tim Hitchcock](https://www.blogger.com/profile/17851547190864328027 "noreply@blogger.com") - <time datetime="2012-02-12T10:26:40.769-05:00">Feb 0, 2012</time>

Thanks for this link - it looks perfect and I will spend some time playing. I can quite see the problems over pre-computation, etc. but if the corpus was in good shape, it would only need doing once!
<hr />
