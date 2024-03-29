---
title: 'Finding keywords'
date: 2010-12-26T15:58:00.000-05:00
draft: false
url: /2010/12/finding-keywords.html
tags:
  - collocation
---

Before Christmas, I spelled out a few ways of thinking about historical texts as related to other texts based on their use of different words, and did a couple examples using months and some abstract nouns. Two of the problems I've had with getting useful data out of this approach are:

1.  What words to use? I have 200,000, and processing those would take at least 10 times more RAM than I have (2GB, for the record).
2.  What books to use? I can—and will—apply them across the whole corpus, but I think it's more useful to use the data to draw distinctions between types of books we know to be interesting.

I've got tentative solutions to both those questions. For (2), I finally figured out how to get a substantial number of LCC call numbers into my database (for about 30% of the books). More on that later, which I'm obviously excited about. But I finally did some reading to get a better answer for (1), too. This is all still notes and groundwork-laying, so if you're reading for historical analysis or DH commentary, this is the second of several skippable posts. But I like this stuff because it gives us glimpses at the connections between semantics, genre, and word-use patterns.

Basically, I'm going to start off using [tf-idf weight](http://en.wikipedia.org/wiki/Tf%E2%80%93idf). A while ago, I talked about finding ["lumpy"](http://sappingattention.blogspot.com/2010/11/lumpy-words.html) words. Any word appears in x books, and y times overall. We can plot that. (I'm using the data from the ngrams 1-set here instead of mine, because it has a more complete set of words. There are lots of uses for that data, for sure, although I keep finding funny little mistakes in it that aren't really worth blogging—they seem to have messed up their processing of contractions, for instance, and their handling of capital letters forces some guess-work into the analysis I'm doing here). Each blue dot in this graph is a word: the red ones are the 1000 or so ones that appear a lot but in fewer books than you'd think. Those words should be more interesting for analysis.

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TReM3RJosVI/AAAAAAAACYg/dm8HBmMqzHY/s1600/Google+TFIDF.png)](http://4.bp.blogspot.com/_Pge31alC_E8/TReM3RJosVI/AAAAAAAACYg/dm8HBmMqzHY/s1600/Google+TFIDF.png)

(I should have used Christmas colors, I guess... Happy Fourth!)

I'm pulling the red ones out using TF-IDF weight, which is basically the linear approximation I was looking for earlier for that curve. There are various improvements on it that I need to read up on more, but variations on it should be useful for all sorts of selecting interesting words in subsets, instead of those crazy loess curves I was using. Usually it's used to find what terms are particularly important *in a document* compared to the corpus it's drawn from, but you can just treat the corpus itself as one long document. In the ngrams sample, here are the 20 lumpiest words, which are pretty similar to the ones in my sample (FTR, I have about 27,000 books right now, and Google has about 300,000 for 1830 to 1922 by American publishers. I might post more on this later, but their sample seems to have a lot more technical science and music words than mine, while mine has more typo-words than theirs):

\> names(TFIDF)\[1:20\]  
 \[1\] "you"        "she"        "fig"        "her"         
 \[5\] "acid"       "thy"        "thou"       "god"         
 \[9\] "my"         "county"     "church"     "states"      
\[13\] "p"          "mr"         "government" "mrs"         
\[17\] "thee"       "king"       "me"         "your"

So words like "you" and "she" appear rarely or not at all some books but remain incredibly common in the language: words like "county" are quite common in some books but don't appear at all in others. "Fig" is short for figure, I'm pretty sure--books that have illustrations use it a lot, other books don't use it at all.

You can see that some of these are words that are good for categorization. Use of "you" and "she" will be heavily genre-dependent; a word like 'acid' alone could help separate out chemistry; religious language is screaming out that it's a subset of all the books; etc.

(Technical _and_ provisional: there's not much reason for anyone not me to read this paragraph): I've complicated things somewhat in trying to get a list of words to use. What I did was calculate the Tf-idf for each year, relative to itself, from 1830 to 1920 in five year increments. Then I summed across those to find words that were consistently discriminatory, not just in one or two years. Also, I filtered out words less than five characters, because common typos tend to be highly concentrated and are usually on short words. This definitely loses some info, but I think it tends to be less topical and more stylistic. It does a good job for the first 500-1000 words, but around word 1000 they seem to hardly stick out at all on the ngrams overall curve. I think the better way now that I have genre data would be to find words that are good at discriminating each call number I have from the whole, maybe even relative to the overall TF-IDF to weed out typos and other stylistic tics, although that's probably overkill. The years matrix is still useful, though.

Using that year and word-length filter, the following are the words that I'm ending up with as most concentrated in a few books relative to their frequency:

\> colnames(IDF2000)\[1:30\]  
 \[1\] "government"   "states"       "church"        
 \[4\] "christ"       "france"       "president"     
 \[7\] "captain"      "court"        "british"       
\[10\] "political"    "officers"     "disease"       
\[13\] "american"     "governor"     "england"       
\[16\] "religion"     "party"        "policy"        
\[19\] "cases"        "constitution" "council"       
\[22\] "cried"        "paris"        "william"       
\[25\] "towards"      "national"     "military"      
\[28\] "afterwards"   "french"       "thomas"

You can see that I get most of the five-letter+ words in the google set, though in a different order. Most of these words are clearly topical: political, religious, geographical,legal (party, cases) language sticks out. First names, "cried", and "afterwards" might be indicating novels, which are a substantial portion of my dataset. And to give a sense of what creeps in lower, here are some other of the 2000 words:

\> sample(colnames(IDF2000),10)  
 \[1\] "abroad"   "impulse"  "slender"  "division" "final"     
 \[6\] "vague"    "plants"   "guard"    "shoulder" "coast"

For each of these words, there is some substantial subset of books that uses it more frequently than other books. There are a lot of reasons that might characterize such a subset of books:

1.  It might be what we'd recognize as a genre: novels probably use "slender" a lot more than other types of books, botany texts and books about the electrical system use 'plants' a lot more.
2.  It might be a topic matter—division and guard, say, will appear in books about the military whether they're adventure novels, histories, or foreign policy tracts.
3.  They might be authorial ticks, like Mosteller finding Hamilton (Madison?) used "whilst" a lot. "Vague" might be a word like that—some authors just use it more. I actually suspect there are really interesting patterns related to how writers choose choose which words to use like that, because they subtly express our allegiance or indebtedness to some discursive groups. The obvious, nearly conscious ticks are things like "Manassas" vs. "Bull Run" or "Soda" vs. "Pop" to find regional orientations of texts. But I suspect there are some sorts of eventually discernible patterns underlying much more subtle distinctions—the anglophilia in certain spellings, the exposure to Marxist thought in some vocabulary, and so on. I could go on forever about this, and maybe will later.
4.  They might be related to date of composition, although I've tried to filter those out: a word that goes from common to obsolete, like "thou", usually shows up on these lists. Some of these words would be good--if I can get around to understanding it, something like the temporally adjusted latent dirichlet allocation in [this paper](http://kreese.net/wordpress/wp-content/uploads/2010/05/TLDA.pdf) (pdf) would be amazing. But that's a probabilistic distribution model, not a spatial one like I'm using, and I'm not planning to make that leap quite yet. I'm still getting something out of looking at the data this way.
5.  They might be related to something like publisher or font: some house styles will use "coördinate" instead of "coordinate", some fonts will frequently misread "the" as "tlie" and others as "tbe".

## Anyway: I haven't picked these words as interesting in and of themselves, but because given my limited processing power, they should better than other words at discriminating between genres. So that's what I'm looking at next.

### Comments:

#### This is a very good and informative post. This pos...

[Clipping Path](http://www.clippingpathusa.com 'noreply@blogger.com') - <time datetime="2014-05-02T13:26:28.435-04:00">May 5, 2014</time>

This is a very good and informative post. This post has helped a lot of people out there. But I am the only one who'll appreciate it. Thanks!

<hr />
#### Thanks for the information provided in this blog a...
[Alin](http://alin-shop.com/) - <time datetime="2015-01-08T08:03:17.791-05:00">Jan 4, 2015</time>

Thanks for the information provided in this blog as it has been very helpful to what I'm doing with my own works. Appreciate your blog very much.

<hr />
