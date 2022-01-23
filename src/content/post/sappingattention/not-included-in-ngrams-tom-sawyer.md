---
title: 'Not included in ngrams: Tom Sawyer'
date: 2010-12-19T13:37:00.002-05:00
draft: false
url: /2010/12/not-included-in-ngrams-tom-sawyer.html
tags: 
- Ngrams
---

I wrote [yesterday](http://ngrams.googlelabs.com/graph?content=Christian+and+Faithful,said+Christiana,Christian+went&year_start=1800&year_end=1900&corpus=5&smoothing=0) about how well the filters applied to remove some books from ngrams work for increasing the quality of year information and OCR compared to Google books.  

  

But we have no idea what books are in there. There's [no connection](http://sappingattention.blogspot.com/2010/12/missing-humanists.html) to the texts from the data.  

  

I'm particularly interested in how they deal with subsequent editions of books. Their [methodology (pdf)](http://www.sciencemag.org/content/suppl/2010/12/16/science.1199644.DC1/Michel.SOM.pdf) talks about multiple editions of _Tom Sawyer._ I think it says that they eliminate multiple copies of the same edition but keep different years.

  

I thought I'd check this. There are [about](http://books.google.com/books?id=yBYmAAAAMAAJ&pg=PA260&dq=%22said+Huck%22&hl=en&ei=fksOTa7EJsX_lgeazfXFDA&sa=X&oi=book_result&ct=result&resnum=1&ved=0CCMQ6AEwAA#v=onepage&q=%22Huck%20said%22&f=false) 5 occasions in _Tom Sawyer_ where the phrase "Huck said" appears with separating quotes, and 11 for "said Huck." Both are phrases that basically appear only in _Tom Sawyer_ in the 19th century (the latter also has a tiny life in legal contracts involving [huckaback](http://www.1911encyclopedia.org/Huckaback), and a [few](http://www.google.com/search?q=%22said+Huck%22&hl=en&sa=X&ei=v0sOTaUGxd-WB5WsqLgM&ved=0CBMQpwU&source=lnt&tbs=bks:1,cdr:1,cd_min:1882,cd_max:1882) other places), so we can use it as a fair proxy for different editions. The first edition of _Tom Sawyer_ was 1881: there are loads of later ones, obviously. Here's what [you get from ngrams](http://ngrams.googlelabs.com/graph?content=said+Huck,Huck+said&year_start=1800&year_end=2000&corpus=0&smoothing=0):

  

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TQ5JnmrX2vI/AAAAAAAACXg/P7iQhYiaIiU/s400/chart-1.png)](http://3.bp.blogspot.com/_Pge31alC_E8/TQ5JnmrX2vI/AAAAAAAACXg/P7iQhYiaIiU/s1600/chart-1.png)

  

  

Three big spikes around 1900, and nothing before. Until about 1940, the ratio is somewhat consistent with the internal usage in the book, 11 to 5, although "said huck" is a little overrepresented as we might think. Note:  

*   No edition of _Tom Sawyer _shows up until 20 years after its first publication;
*   There's probably one edition apiece in 1899 and 1901, and two or three in 1903. Those are all around the authorized edition of Twain's works. Either they're catching multiple copies of that edition, or _Tom Sawyer_ was just coming into the public domain (which, for those of you who don't know, is something that used to happen like LPs or smallpox) which led them to rush out the collected edition. Mark Twain and copyright is such a popular issue I can't find the answer right away. I talked at the end of [this post](http://sappingattention.blogspot.com/2010/12/first-principals.html) about how hard it is to tell that "Collected Works of Mark Twain, vol. 1" and "Innocents Abroad" are the same book. I find a little reassuring that even Google seems to have the same problem. I've had some success using clustering based on patterns of word use. 

So what's the point? I know I said we shouldn't criticize based on metadata; but I'm equally irate at the idea that ngrams truly takes the temperature of American culture. Maybe not including _Tom Sawyer_ as part of "English", or "English One Million", or "English Novels" is a good example of the shortcomings of this approach. 

  

And then: _Tom Sawyer_ [\_does\_ show up](http://ngrams.googlelabs.com/graph?content=said+Huck,Huck+said&year_start=1800&year_end=2000&corpus=5&smoothing=0) in their "American English" sample before 1899. 

  

[![](http://1.bp.blogspot.com/_Pge31alC_E8/TQ5QGJ035cI/AAAAAAAACXk/5Olnnw91NtQ/s400/chart-2.png)](http://1.bp.blogspot.com/_Pge31alC_E8/TQ5QGJ035cI/AAAAAAAACXk/5Olnnw91NtQ/s1600/chart-2.png)

  

  

"American English" is [supposedly](http://ngrams.googlelabs.com/info) a subset of the "English" sample, but clearly that's not the case. Something's wrong here with the data they're presenting. It doesn't match their own description of it. That's always a bad thing.

  

Any ideas what it is?

  

  

  

  

  

  

\~~~~~~~~~~~~~

For the record, this works for other books with distinctive character names: _Pilgrim's Progress_, for example, is a little noisier:  
  

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TQ5JNWWnsyI/AAAAAAAACXc/rDZbotsGxXk/s400/chart.png)](http://2.bp.blogspot.com/_Pge31alC_E8/TQ5JNWWnsyI/AAAAAAAACXc/rDZbotsGxXk/s1600/chart.png)
---
### Comments:
#### This is unrelated, but I wanted to post somewhere ...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-20T19:19:10.993-05:00">Dec 1, 2010</time>

This is unrelated, but I wanted to post somewhere the [ngram for 02138](http://ngrams.googlelabs.com/graph?content=02138&year_start=1800&year_end=2000&corpus=5&smoothing=0), which, before the invention of zip codes, shows what percentage of books have Harvard library bookplates in them. It falls off _completely_ right in 1922.
<hr />
#### Very very good post. You've included all the g...
[Clipping Path](http://www.clippingpathusa.com "noreply@blogger.com") - <time datetime="2014-05-02T13:28:32.800-04:00">May 5, 2014</time>

Very very good post. You've included all the great information in this post. Thanks a million for that. Cheers!
<hr />
