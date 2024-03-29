---
layout: post
title: Sketching out orthographic normalization with word2vec
date: 2015-12-10
author: Ben Schmidt
categories:
  - word2vec
  - R
  - Word_Embeddings
---

2015-11-19

My [post on 'rejecting the gender
binary'](http://bookworm.benschmidt.org/posts/2015-10-30-rejecting-the-gender-binary.html)
showed a way to use word2vec models (or, in theory, any word embedding
model) to find paired gendered words--that is, words that mean the same
thing except that one is used in the context of women, and the other in
the context of men.

I think that's a particularly interesting application of the combination
of word2vec and vector rejection, but the exact same operations can be
applied to more workaday problems in text processing. Here's an example
of one way word embeddings might fit into a digital humanities pipeline:
orthographically normalizing English-language text from before 1700.

The source base here is a model trained on 25,000 books from [EEBO-TCP
phase 1.](http://www.textcreationpartnership.org/tcp-eebo/) I'm using
the [wordVectors R package](https://github.com/bmschmidt/wordVectors) I
released last month, large amounts of which are code by Jian Li and
Tomas Mikolov.

So here's the problem. Early English books undergo an enormous spelling
shift in the mid-17th century. This means that a naive search engine
will often fail to accurately return results. If you search for, say,
"have" before 1640, it's usually spelled then as "haue":[^1]

```{.bookworm2}

{

    "database": "tcpworm",

    "plotType": "linechart",

    "method": "return_json",

    "search_limits": {

        "word": ["haue", "have"],

        "date_year": {

            "$lte": 1700,

            "$gte": 1480

        }

    },

    "aesthetic": {

        "x": "decade",

        "y": "WordsPerMillion",

        "color": "*unigram"

    }

}

```

What I'm going to show here is the word2vec solution for normalizing
these spelling to each other. Spelling normalization is not a new
problem, and it isn't one I have any reason to think that word2vec is
particularly good at solving. On this particular subject matter, [Anupam
Basu has done far more interesting
work](http://earlyprint.wustl.edu/tooleebospellingbrowserv2.html). I'd
honestly be a bit surprised if this method contributes anything to what
we already know about normalizing early English text.

The point, rather, is threefold:

1.  That once the model is up and running from three pairs of words, it
    offers a fairly robust set of word pairings **without** any
    specialist knowledge in English orthography. It could just as easily
    be used to create lists for Russian orthographic reform, or for
    translating [leetspeak](https://en.wikipedia.org/wiki/Leet), or even
    to identify certain types of codewords in texts meant to be
    difficult to search.

2.  This is a source of information on orthography quite distinct from
    other methods. It doesn't "know" that "unknown" and "vnkowne" look
    the same; it just places them similarly in space. That means that in
    a more complicated classification system, this is quite likely to
    provide a good, fairly independent source of noise.

3.  Interword vectors in word2vec space are fairly robust. A number of
    people have reasonably asked whether using the model to trace out
    gender differences only works because gender is _such_ an important
    feature of language, particularly in the teaching dataset. This
    shows a completely different domain that is almost equally useful.
    So the point is that word embedding models show remarkable
    flexibility as a method for digital humanists to use for exploring
    large collections of texts. "Exploring gendered patterns of language
    use" and "standardizing early modern spelling" seem like entirely
    different problems: so it's interesting that they can be reduced
    down a single chunk of code. (What else could this code do? Give me
    one more example, and maybe I'll try to bundle it into the core
    package.)

## Training a word2vec model on EEBO

OK. First off, here's how I trained a word2vec model on EEBO.

1.  Luckily, I already had a copy of EEBO sitting around as a single
    text file from building a Bookworm. Andrew Goldstone wrote the code
    to export from the original XML into the Bookworm format.

Three simple regular expressions remove the initial volume identifier,
strip out all punctuation, and switch the text to lowercase. (The last
step is optional.)

```{shell}

cat /raid/tcp-texts/generated/eebo-text.tsv | perl -pe 's/.\*\t//;
s/[\^A-Za-zſè\n 0-9]/ /g; tr/A-Z/a-z/;' \> eebo.text

```

Now it's time to train a model. I started at 10:45; RStudio quickly
froze, but inspecting the process list on my computer showed that the
process was running. I went to bed: the model finished at about 12:15am,
so a little less than two hours later for 25,000 volumes with 5 active
cores.

````{R}

library(wordVectors)

library(dplyr)

EEBO\_vectors =
train\_word2vec("/raid/tcp-texts/eebo.text",output\_file="\~/EEBO.vectors",threads=5,window=15,vectors=100)

```{shell}

As Michael Gavin found with his vectorized model of EEBO, the classic
king-queen-man-woman example does not work. Ironic but perhaps
understandable, given that this is the period that kings and queens
actually referred to individual people for decades at a time.

OK. Let's see if we can do some orthographic normalization here. I'll
limit to just the top 10,000 words to start; this method will work on
larger sets, but may drag.

This looks reasonable. "Design" and "scotch" are presumably just new
words. But we also get a substantial number of vectors along, for
example, the u to v substitution (e.g., 'euen' to 'even'.) Since just a
single vector may be noisy, let's try refining with a slightly longer
list. Note that I try to avoid having multiple words from a single
substitution pattern: if I were to just give it dozens of "u" to "v"
examples, it might extract a vector for *that particular shift* rather
than the broader process of orthographic standardization.

That looks decent to me. Again, I would guess that "business" and
"design" are legimitately new words (new in the sense of widespread
use), but many of these show a nice trend from modern to archaic.

It's not clear to me whether this vector shows "orthographic shifts" or
"temporal change." More likely, it's something closer to the latter--but
that can work as a reasonable proxy.

Now I'll just paste in my code to find gendered synonyms. I'll do this
on a smaller dataset to start, just the 50,000 most common words.

What's the precision here? Based on a random sample, I'd say around 80%.

On its own, this isn't a spectacular method for finding orthographic
normalization. But there are certain cases where it might be good as an
initial filter; and it can be easily combined with other methods which
it will be largely independent of. Using a simple filter on string
distance, we could boost the precision to about 95% without losing much
recall.

Some examples from the top hits.
--------------------------------

Here are some examples of the sort of mistakes it makes from one
read-through of the 1000 closest matches (a different list than the
random sample above)

### Not even really mistakes

Evidently the English change how they write roman numberals ending in
"4". This could reasonably be called a spelling change.

xliv\<-\>xliiii

### Synonyms that might displace each other in time.

-   slavery\<-\>thraldome
-   defeats\<-\>ouerthrowes
-   procur\<-\>receiu
-   unwilling\<-\>loth
-   prohibit\<-\>enioyne
-   inhumanity\<-\>crueltie
-   enormous\<-\>haynous
-   inexpressible\<-\>vnspeakeable
-   mercenaries\<-\>souldiors
-   jovial\<-\>merrie
-   promoted\<-\>aduaunced
-   majestie\<-\>highnesse
-   rabble\<-\>crue
-   impostors\<-\>deceiuers
-   alass\<-\>ah
-   boundaries\<-\>boundes

### Interesting mistakes

These might tell us something about the discourse of the time

-   louvre\<-\>pallace

### Bad mistakes

Places where a spelling change collided with some shift in language to
produce a related word that is probably completely distinct in meaning,
or where both words mean the same.

A few pairs on this list (such as `either<->or` or `on<->upon`) suggest
that maybe I'm being too generous in my hope that synonyms actually
displace each other.

-   glocester\<-\>salisburie
-   vitellius\<-\>seuerus
-   retinue\<-\>entertainement
-   buckingham\<-\>pembrooke
-   ibrahim\<-\>soliman
-   prosecuting\<-\>discouering
-   shilling\<-\>pennie
-   earls\<-\>knights
-   irreparable\<-\>calamitie
-   forbidding\<-\>commaunding
-   or\<-\>eyther
-   cover\<-\>grownd
-   paragraphs\<-\>breuity
-   stupidity\<-\>madnes
-   employing\<-\>indeuours
-   despis\<-\>belou
-   expences\<-\>reuenewes
-   on\<-\>vpon
-   sixteen\<-\>eighteene
-   sixty\<-\>fiftie

[^1]: Note that this chart is less striking than the ones Basu makes:
    I'm not sure what the problem with my EEBO set is. This EEBO thing
    is emphatically not yet a ready-for-prime-time Bookworm.
````
