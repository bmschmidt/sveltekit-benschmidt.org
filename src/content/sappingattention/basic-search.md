---
title: 'Basic Search'
date: 2011-01-06T12:26:00.000-05:00
draft: false
url: /2011/01/basic-search.html
---

To my surprise, I built a search engine as a consequence of trying to quantify information about word usage in the books I downloaded from the Internet Archive. Before I move on with the correlations I talked about in my [last post](http://sappingattention.blogspot.com/2011/01/correlations.html), I need to explain a little about that.

I described TF-IDF weights a little bit [earlier](http://sappingattention.blogspot.com/2010/12/finding-keywords.html). They're a basic way to find the key content words in a text. Since a "text" can be any set of words from a sentence to the full works of a publishing house or a decade (as Michael Witmore recently said on his blog, they are "[massively addressable](http://winedarksea.org/?p=926)"), these can be really powerful. And as I said talking about [assisted reading](http://sappingattention.blogspot.com/2010/12/assisted-reading-vs-data-mining.html), search is a technology humanists use all the time to, essentially, do a form of reading for them. (Even though they don't necessarily understand just what search does.) I'm sure there are better implementations than the basic TFIDF I'm using, but it's still interesting both as a way to understand the searches we do and don't reflect on.

More broadly, my point is that we should think about whether we can use that same technology past the one stage in our research we use it for now. Plus, if you're just here for the graphs, it lets us try a few new ones. But they're not until the next couple posts, since I'm trying to keep down the lengths a little bit right now.

A search returns a score as well as an ordered list. More precisely, it returns scores for each word, and then combines them, weighting the rarer words more heavily. Society appears in fewer books than evolution in the 19C, so pretty much any search algorithm is going to weight it more heavily in a joint search. (Unless it's an engine that lets you overweight a term by using plus signs, which I don't get the impression is something end-users take much advantage of). So for an example: if I ask for books that score well on both "society" and "evolution", I get a (sorted) list like this out of my 25,000 books:

title       score  
9 Sociology: The Science of Human Society 0.003568728  
8 Sociology: The Science of Human Society 0.002312226  
3        The Direction of Human Evolution 0.002282892  
2        The Direction of Human Evolution 0.002272362  
1    An introduction to social psychology 0.001858735  
7 Sociology and its psychological aspects 0.001800483  
6           Man in the Light of Evolution 0.001616489  
5               Introduction to Sociology 0.001509010  
4               Introduction to Sociology 0.001449105

(The duplicates are either the same book from different years, or in the first case, a single two-volume book).

That, I think, is pretty much the only way most historians ever use search or other applications of word frequency scores. But they use it all the time.

But what's interesting to me right now are all the other applications. There are _lots_ in the text analysis literature, from sophisticated automatic document classification to those "statistically improbable phrases" on Amazon to methods of finding similar books.

So what's useful for historians? Maybe not the most sophisticated applications, all the time. (Although my tune would change if I could get a full temporal LDA topic model running). In the intermediate stages, though, we can find quite a bit that provides useful building blocks for thinking about how language moves together, particularly when we don't view the book (or article) as the only frame worth searching within.

Here's a point that isn't entirely obvious: when we treat TF-IDF scores as data, search moves both ways. We can do the reverse of traditional search: get the highest scoring words for any document or set of documents. We could find, say, the most overrepresented words for the few books I [definitely know](http://sappingattention.blogspot.com/2010/12/call-numbers.html) are in LC class HM (general sociology):

\> genreTFIDF("HM")\[1:10\]  
Returning results for  17  books  
   sociology       social   activities     economic    evolution   biological  
0.0029217049 0.0020045920 0.0016005260 0.0011624374 0.0009392621 0.0009320906  
  psychology organization   industrial  environment  
0.0008261582 0.0008037530 0.0007802915 0.0007325546

And then we could use that list to start to categorize documents based on keywords. Again, we can treat any aggregation of words as a text: a genre, an author's collected works, or even books that score highly on a particular set of words. (More on that later).

@font-face { font-family: "Calibri"; }@font-face { font-family: "Cambria"; }@font-face { font-family: "Baskerville Semibold"; }@font-face { font-family: "Helvetica Neue Light"; }@font-face { font-family: "Lucida Grande"; }p.MsoNormal, li.MsoNormal, div.MsoNormal { margin: 0in 0in 10pt; font-size: 12pt; font-family: "Times New Roman"; }div.Section1 { page: Section1; }

These search scores might provide more interesting fodder for correlations matrices than just using one word at a time. “Evolution” and “Society” both have a lot of different meanings: sometimes people give this as a reason not to trust any computerized results. But we can start to get around that by looking more at context. Let me stay on evolution to illustrate the problem while I make sure my search engine works well enough for applications.This would be a good place to seriously start skimming.

So we're on the same page, I'm going to fall back on that last resource of desperate undergraduates, the dictionary definition. Whatever dictionary Apple bundles with the OS defines evolution as:

> 1 the process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth.
>
> 2 the gradual development of something, esp. from a simple to a more complex form _: the forms of written languages undergo constant evolution._
>
> 3 _Chemistry_ the giving off of a gaseous product, or of heat.
>
> 4 a pattern of movements or maneuvers _: silk ribbons waving in fanciful evolutions._
>
> 5 (dated) _Mathematics_ the extraction of a root from a given quantity.

One and two are closely related to each other, obviously, but they’re what I’m mostly interested in. Before 1859, though, books the search engine thinks are about “evolution” tend to concentrate definitions 3 and 5. (Although I guess the evolution of a disease, ie its progress, is also part of definition 1.) Here are the top 8 titles for “evolution” before 1859.

\>get.TFIDF.catalog.info("evolution",bookids=catalog$bookid\[catalog$year<=1859\])->bookidss; paste(bookidss$year,bookidss$title,"-- by",bookidss$creator)  
working on item number 1 of 1 (evolution)...  
 \[1\] "1846 Epidemiology; principles and methods -- by MacMahon, Brian, 1923-,Pugh, Thomas F., joint author"  
 \[2\] "1844 Elementary Instruction in Chemical Analysis -- by C. Remigius Fresenius"  
 \[3\] "1855 The Practical Arithmetic: Designed for Such Institutions as Require a Greater Number of Examples ... -- by George Roberts Perkins"  
 \[4\] "1847 A text-book on chemistry. For the use of schools and colleges -- by Draper, John William, 1811-1882"      
 \[5\] "1852 A text-book on chemistry. For the use of schools and colleges -- by Draper, Henry, 1837-1882"               
 \[6\] "1856 Elements of Logic: Together with an Introductory View of Philosophy in General, and a ... -- by Henry Philip Tappan"  
 \[7\] "1846 A Text-book on Chemistry: For the Use of Schools and Colleges -- by John William Draper"  
 \[8\] "1844 Elements of Logic: Together with an Introductory View of Philosophy in ... -- by Henry Philip Tappan"

And for the record, here are the overall results:

\> get.TFIDF.catalog.info("evolution")->bookidss; paste(bookidss$year,bookidss$title,"-- by",bookidss$creator)

working on item number 1 of 1 (evolution)...

\[1\] "1874 A Key to the Treatise on Algebra -- by Elias Loomis"

\[2\] "1878 A Key to the Treatise on Algebra: For the Use of Teachers -- by Elias Loomis"

\[3\] "1922 The Direction of Human Evolution -- by Edwin Grant Conklin"

\[4\] "1917 The origin and evolution of life, on the theory of action, reaction and interaction of energy -- by Osborn, Henry Fairfield, 1857-1935"

\[5\] "1918 The Origin and Evolution of Life: On the Theory of Action, Reaction and ... -- by Henry Fairfield Osborn"

\[6\] "1921 The Direction of Human Evolution -- by Edwin Grant Conklin"

\[7\] "1908 Man in the Light of Evolution -- by John Mason Tyler"

\[8\] "1891 Evolution: Its Nature, Its Evidences, and Its Relation to Religious Thought -- by Joseph Le Conte"

\[9\] "1918 The origin and evolution of life, on the theory of action, reaction and interaction of energy -- by Osborn, Henry Fairfield, 1857-1935"

\[10\] "1892 The Evolution of the Afrio-American -- by Samuel June Barrows , Brooklyn Ethical Association"

We want some way to search out just the portion of books that has to do with definition one; even including books after Darwin, that old math definition still plagues the list. That's a problem for correlations like I was doing earlier—the strength of the correlation between "Darwin" and "evolution" is going to change depending on the internal vocabulary of algebra. There are times we might care about that, and times we might not. In any case, it's one of those things that requires a bit of recursive reading of book titles and textual evidence, which is why I'm boring you with all these titles.

Here's the trick. Not really a trick, I guess: it won't surprise anyone. We're all pretty good at managing search engines at this point, so I think you can think of ways to manage this one. One way, which I haven’t implemented, would be to allow us to eliminate books with certain words (algebra and chemistry, or whatever). Another is to add in words that focus us on our own definition. So I can return the top books for “evolution” AND “animal(s),” say:

\> [get.TFIDF.catalog.info](http://get.tfidf.catalog.info/)(list(c("evolution"),c("animal","animals")))->bookidss; paste(bookidss$year,bookidss$title,"-- by",bookidss$creator)

\[1\] "1891 The evolution of life -- by Mitchell, Hubbard Winslow. \[from old catalog\]"  
\[2\] "1886 Evolution of Today: A Summary of the Theory of Evolution as Held by ... -- by Herbert William Conn"  
\[3\] "1908 Man in the Light of Evolution -- by John Mason Tyler"  
\[4\] "1917 The origin and evolution of life, on the theory of action, reaction and interaction of energy -- by Osborn, Henry Fairfield, 1857-1935"

Or evolution and human, as Hank suggested in the comments:

\>[get.TFIDF.catalog.info](http://get.tfidf.catalog.info/)(list(c("evolution"),c("human","humans")))->bookidss; paste(bookidss$year,bookidss$title,"-- by",bookidss$creator)

\[1\] "1921 The Direction of Human Evolution -- by Edwin Grant Conklin"  
\[2\] "1922 The Direction of Human Evolution -- by Edwin Grant Conklin"  
\[3\] "1908 Man in the Light of Evolution -- by John Mason Tyler"  
\[4\] "1917 An introduction to social psychology -- by Ellwood, Charles Abram, 1873- \[from old catalog\]"  
\[5\] "1922 The History of Medicine in Its Salient Features -- by Walter LIBBY"

All right, enough of that. Next I can move back to those correlation graphs. But several points first about the usefulness of this kind of data more broadly:

1.  This gives us a slightly more sophisticated set of data to work with than wordcounts, even though it starts with only a simple 1-gram dataset. A lot of smart people have been saying that the real benefits of ngrams like data comes from looking at the interactions of words, not the counts of individual words. That's certainly true. But interactions don't have to happen within five words of each other in a sentence.
2.  Search technology has already solved a lot of these problems in ways that can be immediately useful. And, as I keep saying, it's a technology humanists have already bought into. I don't know how well it would at the sentence-paragraph level; but for larger texts, it's pretty good.
3.  It's ironic that Google's first major step into freakumanities didn't leverage their advantage in search at all. If they do, they could a lot of interesting things I'm not picturing. But web interfaces aren't great at dealing with the various kinds of questions historians might want to ask given the many different levels at which we might want to consider either a 'word' or a 'text.' Maybe it's possible, though.
