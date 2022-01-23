---
title: 'Why Digital Humanists don''t need to understand algorithms, but do need to understand transformations'
date: 2016-07-20T14:09:00.000-04:00
draft: false
url: /2016/07/why-digital-humanists-dont-need-to.html
---

_[Debates in the Digital Humanities 2016](http://dhdebates.gc.cuny.edu/debates/2)_ is now online, and includes [my contribution, "Do Digital Humanists Need to Understand Algorithms?"](http://dhdebates.gc.cuny.edu/debates/text/99) (As well as a [pretty snazzy cover image](https://images-na.ssl-images-amazon.com/images/I/41oJkscJ1hL.jpg)…) In it I lay out distinction between _transformations,_ which are about states of texts, and _algorithms,_ which are about processes. Put briefly:  

> Put simply: digital humanists do not need to understand algorithms [](https://www.blogger.com/null)_at all._ They do need, however, to understand the transformations that algorithms attempt to bring about. If we do so, our practice will be more effective and more likely to be truly original.

It then moves into one case study; the [Jockers-Swafford debate of 2015](http://benschmidt.org/HDA15/?page_id=10#week-13-april-16-debates-in-humanities-data-analysis), large parts of which hung on whether the Fourier transform was a black box and how it its use as a smoothing device might be understood. It's like a lot of what's on this blog, only better thought and edited.  
  
The transformation/algorithm distinction is not a completely firm one, but I have found it extremely useful in a lot of research and teaching problems I've approached over the last year. So in addition to advertising that article for your consumption/fall syllabi production, I wanted to take the occasion to put on github a tiny little germ of a project to provide [one-page, transformation-oriented introductions to basic text-analysis concepts](https://github.com/HumanitiesDataAnalysis/transformations) that came out of using this thinking for a workshop on text analysis at the NIH in Bethesda, and describe what's in it. I'd love for anyone else to use it, fork it, whatever.  
  
  
  
The canonical example of transformation/algorithm I give in the article is sorting. "Sortedness" is a transformation you can understand; "[quicksort](https://bost.ocks.org/mike/algorithms/#sorting)" is a particular algorithm that puts a list into sorted order. If you want to use, say, a concordance to the works of Thomas Aquinas, you _must_ understand sortedness and what it does; but the precise sorting algorithm is unimportant.  
  
Saying we don't _need_ to understand algorithms doesn't mean we _shouldn't._ There are many cases where we should. But the need to understand the basic transformations attempted is a bare minimum anyone reading an article or performing an early exploratory step should be able to do.  
  
This has shaped the way I introduce algorithmic concepts for humanities audiences.  
  
Take, for example, [how to introduce topic modeling](https://github.com/HumanitiesDataAnalysis/transformations/blob/master/pdfs/Topic_Modeling.pdf). The genre of topic-modeling literature tends to get very quickly into the _generative method_ that underlies LDA (the most widely used topic modeling algorithm). It stops just shy of what a Direchlet distribution is, but puts probability front and center.  
  
The basic transformation of topic modeling, though, is not probabilistic: it's about breaking up a series of documents into coherent topics that make them up based on co-occurrence. This framing is much larger than LDA, and need have nothing to do with probabilities; I would (maybe controversially) say that for non-insiders, we should think of matrix operations like [latent semantic analysis](https://en.wikipedia.org/wiki/Latent_semantic_analysis) as topic models as well, just of a different stripe. It's fine if stage 2, or stage 3, of understanding topic models is about the probabilities that drive all effective ones. But for stage 1 we should think about the general goal and simply give the basic advice for who has implement it best. (In this case, "Use mallet with hyperparameters.")  
  
Thinking about transformations means spending less time worrying about whether boxes are black or not, and more time thinking about how to create inputs and read outputs. Creating inputs is particularly important for something like topic modeling. One piece of advice that is given much too little in introductions to topic modeling, I think, is: **the most important choice is how big your individual documents will be.** Should you use paragraphs? Book chapters? Whole books? Unlike setting hyperparameters for LDA, that's immediately addressable by any humanist; and it's possible to understand why it matters without knowing anything about the particulars of a topic modeling algorithm.  
  
This has also heavily influenced my thinking about word embedding models. In my [1-page introduction to word embeddings](https://github.com/HumanitiesDataAnalysis/transformations/blob/master/pdfs/Word_Embeddings.pdf), I say "use word2vec" and largely leave it at that. If you want to use LSA, though, or [Michael Gavin's raw vector method based on hand-selected words](http://modelingliteraryhistory.org/2015/09/18/the-arithmetic-of-concepts-a-response-to-peter-de-bolla/), that's great. As with topic models or sorting, the _things you do_ with a word embedding model are largely independent of the algorithm that sorted it.  
  
That's all here. Here's that [link to the article again](http://dhdebates.gc.cuny.edu/debates/text/99).