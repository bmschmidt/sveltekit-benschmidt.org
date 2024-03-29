---
title: 'Word counts rule of thumb'
date: 2012-10-18T15:14:00.000-04:00
draft: false
url: /2012/10/word-counts-rule-of-thumb.html
---

Here's a special post from the archives of my 'too-boring for prime time' files. I wrote this a few months ago but didn't know if anyone needed: but now I'll pull it out just for Scott Weingart since I saw him estimating word counts using 'the,' which is exactly what this post is about. If that sounds boring to you: for heaven's sake, don't read any further.

\~~~~~~~~~~~~~~~~~~~~~~

Do you ever read _Cook's Illustrated?_ All the articles in there follow the same format.

1. Description of a perfect recipe elsewhere that can't be done at home:
2. Description of the traditional but wholly inadequate way we've been doing  
   2a) Paragraph ending with a question: can it be done better?
3. Description of 'by-the-book,' perfect solution with too many steps to be practical.
4. Paring down of that elaborate recipe to a nearly-as-good recipe you can make in your kitchen.

Maybe we need more recipes like that for the digital humanities. Maybe we don't: in any case, I've got an extremely minor problem that lends itself to that approach. Here it is.

Say you want to know how long a digital text is, and you can get individual word counts, but can't count the full number of words. The most common scenario: you're on a copyright-restricted site and so want to know which of two articles uses some particular word at a higher rate. It's easy to find how many times they each mention "freedom" or "psychology" or whatever.

But how do you find the number of words to estimate the rate? The obvious thing is to use common words. I usually used a rule of thumb where I take the number of times 'the' appears, multiply by twelve, and call that the total count.

This is a case crying out for a simple linear regression. First we need a benchmark. Just using "the" gives a simple formula: "The" \*15. (Why have I always used twelve? Probably because the bookworm-Ngrams model counts most punctuation marks as words, while most traditional methods don't.) That explains 95% of the variance: we should be able to do better. [The word "the" is used at quite different rates in fiction and science, for instance: 7.8% vs 5.6%.](http://bookworm.culturomics.org/#?%7B%22counttype%22%3A%22Occurrences_per_Million_Words%22%2C%22search_limits%22%3A%5B%7B%22word%22%3A%5B%22the%22%5D%2C%22lc0%22%3A%5B%22P%22%5D%2C%22aLanguage%22%3A%5B%22eng%22%5D%7D%2C%7B%22word%22%3A%5B%22the%22%5D%2C%22lc0%22%3A%5B%22Q%22%5D%2C%22aLanguage%22%3A%5B%22eng%22%5D%7D%5D%7D)

The more words, of course, the better model we'll get. I pulled the first 18 words out of the Bookworm database and regressed against total word count to see how accurate we could get.

```
       Estimate Std. Error t value Pr(>|t|)
The    15.39233    0.07664  200.84   <2e-16 \*\*\*
and     3.25567    0.02845  114.45   <2e-16 \*\*\*
as      4.62599    0.10589   43.69   <2e-16 \*\*\*
be     -4.02102    0.07447  -53.99   <2e-16 \*\*\*
by      8.44284    0.09866   85.57   <2e-16 \*\*\*
\`for\`  15.37461    0.09197  167.17   <2e-16 \*\*\*
he      9.11750    0.09551   95.46   <2e-16 \*\*\*
his    -1.15357    0.08742  -13.20   <2e-16 \*\*\*
\`in\`   10.22212    0.05185  197.15   <2e-16 \*\*\*
is      1.11958    0.05077   22.05   <2e-16 \*\*\*
it     10.87936    0.09357  116.27   <2e-16 \*\*\*
of      2.88249    0.02936   98.19   <2e-16 \*\*\*
that    2.93175    0.05748   51.01   <2e-16 \*\*\*
the     0.26918    0.01835   14.67   <2e-16 \*\*\*
to      6.08482    0.04396  138.41   <2e-16 \*\*\*
was    -5.34591    0.05873  -91.03   <2e-16 \*\*\*
which -15.24474    0.09466 -161.04   <2e-16 \*\*\*
with   23.45264    0.09263  253.18   <2e-16 \*\*\*
```

Or in english (as it were):

Rule 1:  
**Total word count =~** **15.4 times uses of 'The' + 3.3 times uses of 'and' + 4.6 times uses of 'as' + -4 times uses of 'be' + 8.4 times uses of 'by' + 15.4 times uses of '\`for\`' + 9.1 times uses of 'he' + -1.2 times uses of 'his' + 10.2 times uses of '\`in\`' + 1.1 times uses of 'is' + 10.9 times uses of 'it' + 2.9 times uses of 'of' + 2.9 times uses of 'that' + 0.3 times uses of 'the' + 6.1 times uses of 'to' + -5.3 times uses of 'was' + -15.2 times uses of 'which' + 23.5 times uses of 'with' (98.6%)**

Completely impractical. "The" \* 15 requires you to remember two things:  the above model would make you remember 36 terms and coefficients. But it gives a good upper limit: it explains 98.6 % of the wordcount variance.

In between those two may something usable, but easier to remember. I think a good rule of thumb shouldn't have more than three parts. So instead of allowing the coefficients to vary for words, I'm going to look for rules where we add two word counts together, and multiply by a constant.

It's easy enough to check all the top word pairs to see how useful they are. That lets us get the most and least useful pairs. Here are the _**worst**_ results, for example, which sheds a little light on the operations.

```
R-squared word1 word2
```

0.6392093 he his  
0.6880057 he was  
0.7038110 his was  
0.8289833 he that  
0.8412901 be is

```
Using a rule with 'he' and 'his' explains only 64% of the variance, because a) books use those at wildly different rates, and b) 'he' and 'his' are highly correlated to begin with, so they don't add much information. The rest of the worst five are similarly fiction-heavy words, except for "be" and "is", which are also going to be genre-specific (present tense writing is somewhat rare) and correlated (two forms of the same verb).

With that out of the way--what are the best pairs to use?

```

multiplr r-squared word1 word2

````
10.497064 0.9664636   and   the
38.343676 0.9665618   for    in
20.450184 0.9667313   and    in
18.563671 0.9696628   and    to
23.052119 0.9728873    in    to
```

Interestingly, even though 'the' is the most common word, it only makes one appearance. Any of these pairsis better than just using 'the': the best, 'in' and 'to' times 23, gets about halfway to the quality from using everything. Plus, it's a little mnemonically easy to remember: 'in to' is a nice pat phrase that can mean conversion, and 23 is the exponent for Avogadro's number. (OK, that's a stretch--but at least it's a round number, unlike 38 1/3 times ('for' plus 'in').)

Rule 2:
**Total word count =~ 23 \* (uses of 'in' + uses of 'to') (97.2%)**

So that's a decent rule of thumb. But if you want a single-word solution, the easiest to remember and the most accurate turns out not to be 'the' times fifteen. (fifteen isn't the hardest number to multiply by, but it's not great either). It's in. So for an accuracy trade-off, you can estimate word counts with this:

Rule 3:
**Total word count =~** **50 \* uses of 'in' (95.2%)**

Just make sure sure your text is in English, first.
````
