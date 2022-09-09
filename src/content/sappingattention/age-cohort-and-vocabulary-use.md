---
title: 'Age cohort and Vocabulary use'
date: 2011-04-11T17:33:00.002-04:00
draft: false
url: /2011/04/age-cohort-and-vocabulary-use.html
tags:
  - Featured
  - authors
  - Data exploration and visualization
---

Let's start with two self-evident facts about how print culture changes over time:

1.  The words that writers use change. Some words flare into usage and then back out; others steadily grow in popularity; others slowly fade out of the language.
2.  The writers using words change. Some writers retire or die, some hit mid-career spurts of productivity, and every year hundreds of new writers burst onto the scene. In the 19th-century US, median author age stays within a few years of 49: that constancy, year after year, means the supply of writers is constantly being replenished from the next generation.

How do (1) and (2) relate to each other? To what extent do the shifting group of authors create the changes in language, and how much do changes happen in a culture that authors all draw from?

This might be a historical question, but it also might be a linguistics/sociology/culturomics one. Say there are two different models of language use: type A and type B.

- Type A means a speaker drifts on the cultural winds: the language shifts and everyone changes their vocabulary every year.
- Type B, on the other hand, assumes that vocabulary is largely fixed at a certain age: a speaker will be largely consistent in her word choice from age 30 to 70, say, and new terms will not impinge on her vocabulary.

Both of these models are extremes, and we can assume that hardly any words are pure A or pure B. To firm this up, let me concretize this with two nicely alphabetical examples of fictional characters to warm up the subject for all you humanists out there:

- Type A: John Updike's [Rabbit Angstrom](http://www.amazon.com/Rabbit-Run-John-Updike/dp/0449911659). Rabbit doesn't know what he wants to say. Every decade, his vocabulary changes; he talks like a ennui-ed salaryman in the 50s, flirts with hippiedom _and_ Nixonian silent-majorityism in the 60s, spends the late 70s hoarding gold and muttering about Consumer Reports and the Japanese. For Updike, part of Rabbit being an everyman is the shifts he undergoes from book to book: there's a sort of implicit type-A model underlying his transformations. He's a different person at every age because America is different in every year.

- Type B: Richard Ford's [Frank Bascombe](http://www.amazon.com/Independence-Day-Bascombe-Trilogy-2/dp/0679735186). Frank Bascombe, on the other hand, has his own voice. It shifts from decade to decade, to be sure, but 80s Bascombe sounds more like 2000s Bascombe than he sounds like 80s Angstrom. What does change is internal to his own life: he's in the Existence period in the 90s and worries about careers, and the 00s he's in the Permanent Period and worried about death. Bascombe is a dreamy outsider everywhere he goes: the Mississippian who went to Ann Arbor, always perplexed by the present.\*

Anyhow: I don't have good enough author metadata right now to check this on authors (which would be really interesting), but I _can_ do it a bit on words. An Angstrom word would be one that pops up across all age cohorts in society simultaneously; a Bascombe word is one that creeps in more with each succeeding generation, but that doesn't change much over time within an age cohort.

This is getting into some pretty multi-dimensional data, so we need something a little more complicated than line graphs. The solution I like right now is heat maps.

An example: I know that "outside" is a word that shows a [steady, upward trend](http://ngrams.googlelabs.com/graph?content=outside&year_start=1800&year_end=2000&corpus=0&smoothing=3) from 1830 to 1922; in fact, [I found](http://sappingattention.blogspot.com/2011/02/pca-on-years.html) that it was so steady that it was among the best words at helping to date books based on their vocabulary usage. So how did "outside" become more popular? Was it the Angstrom model, where everyone just started using it more? Or was it the Bascombe model, where each succeeding generation used it more and more? To answer that, we need to combine author birth year with year of publication:

[![](http://1.bp.blogspot.com/-k2V0pHWKpvs/TaNn2Kwgj2I/AAAAAAAACww/ussSb3_KdVs/s1600/usage+of+outside+by+age+and+year.png)](http://1.bp.blogspot.com/-k2V0pHWKpvs/TaNn2Kwgj2I/AAAAAAAACww/ussSb3_KdVs/s1600/usage+of+outside+by+age+and+year.png)

[  
](http://3.bp.blogspot.com/-klH-AtS7kOM/TaMrB_6es8I/AAAAAAAACwM/BQ6fmH2sjLY/s1600/usage+of+outside+by+age+and+year.png)

Any given point tells you how much, on average, a given age group used the word in a given year. The scale gives the numeric values for the colors. (This is some messy, incomplete data. There are a lot of years I have no data for at all, and the raw data is so spiky as to be almost unreadable. As a result, I've had to smooth the results, using the same formula I do for charts.) To read it, then, you can pick a random point—60 year olds in 1910, say. It shows you yellowish orange, which means they use the word "outside" a fair amount: maybe .12 words per thousand.

This chart, for example, says that the people using the word 'outside' the _most_ are people in their 30s around 1920; and people using it the _least_ are those in their 70s around 1830. At any given age, it becomes more prevalent as time goes on—fifty-year-olds in 1900 say "outside" more than fifty-year-olds in 1850. That's unsurprising. More interesting is that in any given year, young people seem to use 'outside' more than old people. That indicates there's a substantial generation bias to the way the term enters the language, which tends towards a Bascombe interpretation of how language shifts in this case.

What happens to a single generation over time? The diagonal lines on the chart show how those generations move. Just to the right of 1880 is line labeled "b. 1855". That shows the path on this chart that any _individual_ or _generational cohort_ takes. Eugene Debs, for example, was born in 1855. That line shows how his life fits on this chart. Basically, it just does math for us between the two axes: the line shows how old he was at any time: 30 years old in 1885, 45 years old in 1900, 67 in 1922.

As the 'b. 1855' moves through time, it shows us how Debs' generation changed its usage of "outside" as it aged. The answer: not much. They start off in orange-ish yellow and end there. Although the printed culture _as a whole_ used the word 'outside' more in the 1920s than in the 1890s, the writers of Debs' generation used it just about the same amount. Looking at some of the other diagonal lines, some generations—1835–1840, say—do seem to increase their usage of the word over time, but generally 'outside' seems to be pretty much a Bascombe word.

That basic conclusion—that change happens _across_ generations more than _within_ them—seems to be true for most words that show a remarkable steady drift. 'Outside' is a particularly neat example, but most of the other words that show a steady change in a single direction show a type-B pattern. (By one measure, here are the words I found earlier that showed a steady [decline](http://ngrams.googlelabs.com/graph?content=justly%2Ccircumstances%2Coccasion%2Cprudent%2Cacknowledged%2Cnotwithstanding%2Cdisposed%2Crendered%2Ccommencement%2Ccircumstance%2Cmode&year_start=1822&year_end=1922&corpus=0&smoothing=3) and [ascent](http://ngrams.googlelabs.com/graph?content=justly%2Ccircumstances%2Coccasion%2Cprudent%2Cacknowledged%2Cnotwithstanding%2Cdisposed%2Crendered%2Ccommencement%2Ccircumstance%2Cmode&year_start=1822&year_end=1922&corpus=0&smoothing=3).) To show a couple other charts at random from that set:

[  
](http://4.bp.blogspot.com/-FX8BWdhJlJM/TaM6gHh7Q1I/AAAAAAAACwU/zk1cf7W9PLo/s1600/usage+of+background+by+age+and+year.png)

[![](http://4.bp.blogspot.com/-n5y05-e3WCs/TaNnkw4IggI/AAAAAAAACwk/gqEnUeFSXUU/s1600/usage+of+prudent+by+age+and+year.png)](http://4.bp.blogspot.com/-n5y05-e3WCs/TaNnkw4IggI/AAAAAAAACwk/gqEnUeFSXUU/s1600/usage+of+prudent+by+age+and+year.png)

[![](http://1.bp.blogspot.com/-Cu7bNqgELgQ/TaNnl8MmJCI/AAAAAAAACwo/-XSocCi6ndE/s1600/usage+of+justly+by+age+and+year.png)](http://1.bp.blogspot.com/-Cu7bNqgELgQ/TaNnl8MmJCI/AAAAAAAACwo/-XSocCi6ndE/s1600/usage+of+justly+by+age+and+year.png)

[![](http://2.bp.blogspot.com/-6_XJrvQPsLw/TaNnmlwAu7I/AAAAAAAACws/vtiV3-iNgpE/s1600/usage+of+background+by+age+and+year.png)](http://2.bp.blogspot.com/-6_XJrvQPsLw/TaNnmlwAu7I/AAAAAAAACws/vtiV3-iNgpE/s1600/usage+of+background+by+age+and+year.png)

[  
](http://2.bp.blogspot.com/-TS62-70A5Zw/TaM6hLrR43I/AAAAAAAACwc/h1ihNkrnyZM/s1600/usage+of+justly+by+age+and+year.png)

Most of these don't show a _complete_ diagonal orientation to the contour lines, but they're arguably closer to moving by generation than to moving by year (I actually should concoct a metric for that, but no obviously best method occurs to me).

Are there any natural Angstrom words at all? Well, as I was saying [earlier](http://sappingattention.blogspot.com/2011/04/generations-vs-contexts.html), "evolution"might be one. Here's its heat map:

[![](http://4.bp.blogspot.com/-GqFohwRfoOw/TaNoFhMOKwI/AAAAAAAACw0/h6sstncrIVc/s1600/usage+of+evolution+by+age+and+year.png)](http://4.bp.blogspot.com/-GqFohwRfoOw/TaNoFhMOKwI/AAAAAAAACw0/h6sstncrIVc/s1600/usage+of+evolution+by+age+and+year.png)

It breaks in unevenly but across all age groups from 1870–1890, and in the 1890s is most heavily used by old people (in their late 60s and 70s). One age cohort—those born around 1860, coincidentally the same time as the _Origin_ was published—does seem to use evolution more heavily over time than other generations. But in general, there's very little evidence that "evolution" took up popularity through a youth movement. My initial suspicions that its early advocates are surprisingly elderly seem partly born out.

More ephemeral words tend to be type-A as well: "war", for example, breaks across all ages in 1917 (although it is surprisingly _not_ present in the 1860s: my old sample had more periodicals, but apparently books weren't as up on the Civil War as the Great one:

[![](http://4.bp.blogspot.com/-jE54cS6hWOg/TaNp1mV-I6I/AAAAAAAACw4/gTFzMH-UYn8/s1600/usage+of+war+by+age+and+year.png)](http://4.bp.blogspot.com/-jE54cS6hWOg/TaNp1mV-I6I/AAAAAAAACw4/gTFzMH-UYn8/s1600/usage+of+war+by+age+and+year.png)

An aside: Looking at these charts makes me realize there is actually a third model for word behavior: there could be words that _only_ show variation by author age, and that remain constant across the years. These certainly exist in spoken language, where they correspond to life stages ("Potty", "Homework", "Dorm", "Wheelchair") but it's less clear to me that we should expect to find many in the printed record. Looking at a few dozen randomly generated charts doesn't show anything conclusive enough to share that looks like a type-C word. You can imagine it, though. The coasts of the landmasses on these charts would stretch from east to west, instead of North to South like they do for "war", or southwest to northeast as for "outside."

If I decide how best to test for words fitting each of these models, it might turn up some interesting cases. Are science words more likely to be Bascombes, while phenomenological language like  is more likely to be type-A? How do particularly constructions ("pay attention") shift across generations and time? It would also be possible to test whole baskets of words (or the prevalence of certain topics created by topic-modeling…), which would somewhat correct for the small sample sizes that keep this analysis from being much more than fun at present.

But for now let me say just that I think this an important way of plugging back into _people_ from structures of culture which is what we get from books. Metadata about authors is critically important for this sort of work, as well the ability to do on-the-fly parsing of the relationship between different variables (here, publication year and author birth). That need cuts directly against the desires of content providers (Google Books, Jstor data for research) to keep researchers from being able to reconstruct their content after the fact. This is only possible because of the incredible amount of data that [Open Library](http://openlibrary.org/) at the Internet Archive both makes available and links to their books. (Although eventually, one could do it with HathiTrust data too by just parsing the years out of the author field).

Of course, generations aren't people. Neither are years or genres. But if we want to understand how people relate to the changes in the cultural fabric around them, we need to look at how these variables interact, not just one at a time. If we want to just understand the culture independent of people, we might not. The former solution, I think, is a lot more pregnant with possibility.

## \*Further digression on Updike and Ford: The A-B distinction maps, in a way, to the structure-agency divide. That's why it seems interesting. Angstrom is at the mercy of social forces, while Bascombe has his own path. But it's not just because Bascombe is smarter: Updike himself is a type-A, so great _just because_ he can voice the changing the times. Richard Ford, on the other hand, doesn't seem to have that same need to be recognized as the greatest living American novelist, and picks his own way. (We can even turn this into a dorm-room conversation: Jonathan Franzen [is an Angstrom](http://www.google.com/search?hl=en&client=firefox-a&hs=fp4&rls=org.mozilla%3Aen-US%3Aofficial&q=%22Franzen+knows+that+college+freshmen+are+today+called+%E2%80%9Cfirst+years%2C%E2%80%9D+like+tender+shoots+in+an+overplanted+garden%22&aq=f&aqi=&aql=&oq=), Edith Wharton was a Bascombe, Don Delillo's work since _Underworld_ has been so disappointing because he's a Bascombe who feels the need to be an Angstrom.)

### Comments:

#### Impressive. This is a really fundamental question ...

[Anonymous](#) - <time datetime="2011-04-11T23:34:23.922-04:00">Apr 1, 2011</time>

Impressive. This is a really fundamental question about the way vocabulary changes from one era to another, and these visualizations are answering it very persuasively.

<hr />
#### What was Melville? More soon..
[Hank](https://www.blogger.com/profile/02841787256060612291) - <time datetime="2011-04-12T15:22:05.294-04:00">Apr 2, 2011</time>

What was Melville? More soon..

<hr />
#### Outstanding stuff, Ben. Couple of thoughts: 1. To...
[Willy D.]() - <time datetime="2011-04-14T08:42:13.487-04:00">Apr 4, 2011</time>

Outstanding stuff, Ben. Couple of thoughts:

1\. To what degree are all essentially technical neologisms (novel words from science, technology, industry, law, etc.) going to be disproportionately Angstrom words? How would this reflect the different kinds of hierarchical structures that exist in certain technical realms? Will you see effects whereby older generations of scientists/inventors/jurists/etc. get credit for innovating and coining new concepts before the generations of their students/assistants?

2\. Somewhat relatedly, are there "reverse Boscombe" words? Structures of hierarchy in technical arenas would be one potential source. Another might be political movements, particularly conservative ones. What would "silent majority" look like in the latter half of the 20th century, for example?

<hr />
