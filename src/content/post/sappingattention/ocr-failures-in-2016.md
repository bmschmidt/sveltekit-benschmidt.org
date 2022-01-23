---
title: 'OCR failures in 2016'
date: 2016-12-20T14:55:00.004-05:00
draft: false
url: /2016/12/ocr-failures-in-2016.html
---

This is a quick digital-humanities public service post with a few sketchy questions about OCR as performed by Google.  
  
When I started working intentionally with computational texts in 2010 or so, I spent a while worrying about the various ways that OCR--optical character recognition--could fail.  
  
But a lot of that knowledge seems to have become out of date with the switch to whatever post-ABBY, post-Tesseract state of the art has emerged.  
  
I used to think of OCR mistakes taking place inside of the standard ASCII character set, like this image from Ted Underwood I've used occasionally in slide decks for the past few years:  
  

[![](https://usesofscale.files.wordpress.com/2012/10/smellie.png)](https://usesofscale.files.wordpress.com/2012/10/smellie.png)[![](https://usesofscale.files.wordpress.com/2012/10/ocr.jpg)](https://usesofscale.files.wordpress.com/2012/10/ocr.jpg)

  
  
  
But as I browse through the Google-executed OCR, I'm seeing an increasing number of character-set issues that are more like this, handwritten numbers into a mix of numbers and Chinese characters.  
  

[![](https://4.bp.blogspot.com/-fw1Z2wfxyUs/WFl33N1Yc4I/AAAAAAAAHuo/OPUy4cYU6V464Fsf2ajDUsospljyDKthgCK4B/s200/Screen%2BShot%2B2016-12-20%2Bat%2B1.26.15%2BPM.png)](http://4.bp.blogspot.com/-fw1Z2wfxyUs/WFl33N1Yc4I/AAAAAAAAHuo/OPUy4cYU6V464Fsf2ajDUsospljyDKthgCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.26.15%2BPM.png)[![](https://1.bp.blogspot.com/-fXFTUVv4fcE/WFl332q6wqI/AAAAAAAAHuw/50ESh37QK7cM_Ckf0M_yAVYvRUTcYr2pACK4B/s320/Screen%2BShot%2B2016-12-20%2Bat%2B1.24.28%2BPM.png)](http://1.bp.blogspot.com/-fXFTUVv4fcE/WFl332q6wqI/AAAAAAAAHuw/50ESh37QK7cM_Ckf0M_yAVYvRUTcYr2pACK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.24.28%2BPM.png)

  
  
  
  
or [this](https://babel.hathitrust.org/cgi/pt?id=coo.31924005012962;page=root;view=plaintext;size=100;seq=222;num=222;orient=0) set of typewriting into Arabic:  
  
[![](https://4.bp.blogspot.com/-K15wpoCUChA/WFl4xpl2q8I/AAAAAAAAHu4/jRIbAiYl6iMPWSFLfefCzk_PEWJtxnQiwCK4B/s320/Screen%2BShot%2B2016-12-20%2Bat%2B1.29.51%2BPM.png)](http://4.bp.blogspot.com/-K15wpoCUChA/WFl4xpl2q8I/AAAAAAAAHu4/jRIbAiYl6iMPWSFLfefCzk_PEWJtxnQiwCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.29.51%2BPM.png)[![](https://3.bp.blogspot.com/-fR_d2_bFvrA/WFl4xxiAc5I/AAAAAAAAHvA/DYPqjcUTAFIfdqA3xrT2Am3rjx4xbnZswCK4B/s320/Screen%2BShot%2B2016-12-20%2Bat%2B1.30.01%2BPM.png)](http://3.bp.blogspot.com/-fR_d2_bFvrA/WFl4xxiAc5I/AAAAAAAAHvA/DYPqjcUTAFIfdqA3xrT2Am3rjx4xbnZswCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.30.01%2BPM.png)  
  

  

or [this](https://babel.hathitrust.org/cgi/pt?id=hvd.hh1lnf;page=root;seq=667;view=plaintext;size=100;orient=0) Hebrew into Arabic:

[![](https://3.bp.blogspot.com/-XJqsuPnRQEU/WFl7CuVtogI/AAAAAAAAHvg/aWRa1yNiqb0xBGpEVtM0sR20BC3AKksdQCK4B/s200/Screen%2BShot%2B2016-12-20%2Bat%2B1.39.47%2BPM.png)](http://3.bp.blogspot.com/-XJqsuPnRQEU/WFl7CuVtogI/AAAAAAAAHvg/aWRa1yNiqb0xBGpEVtM0sR20BC3AKksdQCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.39.47%2BPM.png)[![](https://1.bp.blogspot.com/-1kaxifH-T9g/WFl7CuR3VrI/AAAAAAAAHvk/jB3sbZ2OYoc8hd24KLwlQpVKIo1rRYSFACK4B/s320/Screen%2BShot%2B2016-12-20%2Bat%2B1.39.12%2BPM.png)](http://1.bp.blogspot.com/-1kaxifH-T9g/WFl7CuR3VrI/AAAAAAAAHvk/jB3sbZ2OYoc8hd24KLwlQpVKIo1rRYSFACK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.39.12%2BPM.png)

  

  

Or [this](https://babel.hathitrust.org/cgi/pt?id=njp.32101074870609;page=root;seq=5;view=plaintext;size=100;orient=0) set of English into Cherokee characters:  

[![](https://3.bp.blogspot.com/-M0Lm0s8t9rs/WFl5vvVFf4I/AAAAAAAAHvU/xpGi-eMxAJ0e6WLE6F9cwsX9zkuHWycwQCK4B/s200/Screen%2BShot%2B2016-12-20%2Bat%2B1.33.56%2BPM.png)](http://3.bp.blogspot.com/-M0Lm0s8t9rs/WFl5vvVFf4I/AAAAAAAAHvU/xpGi-eMxAJ0e6WLE6F9cwsX9zkuHWycwQCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.33.56%2BPM.png)[![](https://1.bp.blogspot.com/-0i530YrAo9U/WFl5vmXvahI/AAAAAAAAHvM/gs0M6pcpQo0ceRkkPUUDmWjV9dz6PDKYACK4B/s320/Screen%2BShot%2B2016-12-20%2Bat%2B1.34.17%2BPM.png)](http://1.bp.blogspot.com/-0i530YrAo9U/WFl5vmXvahI/AAAAAAAAHvM/gs0M6pcpQo0ceRkkPUUDmWjV9dz6PDKYACK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B1.34.17%2BPM.png)

  

That last example is the key to what's going on here: the book itself \*is\* mostly in Cherokee, but the title page is not. Nonetheless, Google OCR translates the whole thing as being in Cherokee, making some terrible suppositions along the way: depending on your font set, you may not be able to display the following publisher information.

  

> ᏢᎻᏆᏞᎪᎠᎬᏞᏢᎻᏆᎪ:ᎪᎷᎬᎡᏆᏨᎪᎡ ᏴᎪᏢᎢᏆᏚᎢ ᏢᏌᏴᏞᏆᏟᎪᎢᏆᏫᏒ ᏚᏫᏩᏦᎬᎢᎩ,1420 ᏨᎻᎬᏚᎢᎡᏴᎢ ᏚᎢᎡᎬᎬᎢ

  
Some unstructured takeaways:  
  
1\. I usually think of OCR as happening on a letter-by-letter basis with some pre-trained sense of the underlying dictionary. But the state-of-the-art is working at a much larger level where it makes inference on the basis of full pages and books, so the fact that a lot of a book is sideways can make the pages that \*aren't\* sideways get read as Arabic.  
  
2\. There's a cultural imperialism at work here. The Google algorithms can succesfully recognize a book as Cherokee, but nonetheless only about 3 in 4 books in Arabic, Chinese, Greek, or Hebrew are in predominantly the appropriate character set. (Image). This is a little complicated, though; these are pre-1922 texts I'm looking at, so most Japanese, Chinese, and Arabic is not printed.  
[![](https://4.bp.blogspot.com/-eG8ViiF32EE/WFmFtQV7dPI/AAAAAAAAHv0/ApyXhlhSWOMb5S0pNg10EfyfINWAkRMUgCK4B/s640/Screen%2BShot%2B2016-12-20%2Bat%2B2.25.26%2BPM.png)](http://4.bp.blogspot.com/-eG8ViiF32EE/WFmFtQV7dPI/AAAAAAAAHv0/ApyXhlhSWOMb5S0pNg10EfyfINWAkRMUgCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B2.25.26%2BPM.png)  
  
(This is based on a random sample of 28,075 pre-1922 books from Hathi).  
  
But when you look at what characters are incorrectly imputed onto English and French texts, things get tricky. When books are interpreted as Arabic, the entire book tends to get read in Arabic script; the CJK unified ideograph set tends be interspersed with other languages. And there are some baseline assumptions throughout here about what languages count: the unified Han character set gets read in a lot, as do the Japanese extensions, but the only substantial example of Thai character sets erroneously read I can find is not from English but from [Sanskrit](https://babel.hathitrust.org/cgi/pt?id=hvd.32044021144357;page=root;seq=276;view=plaintext;size=100;orient=0). That's an easy problem to define: Google doesn't like to recognize Thai script, and that's bad if you want to read Thai. But why does Google allow books to contain trace amounts of Greek, Cyrillic, and Chinese, but not Arabic or Hebrew? This probably has something to do with training data that includes western-style numerals in particular, I would bet. (You can see this in action above: the Arabic examples I pasted are almost straight Arabic, while the Chinese ones are interspersed.) The implications of this for large corpora are fuzzy to me.  
  

[![](https://3.bp.blogspot.com/-6XXNLtXg5lU/WFmJyiXpMaI/AAAAAAAAHv8/RDh4BqQiyhkf6tp89wkrioLw07bDMyHjQCK4B/s200/Screen%2BShot%2B2016-12-20%2Bat%2B2.42.54%2BPM.png)](http://3.bp.blogspot.com/-6XXNLtXg5lU/WFmJyiXpMaI/AAAAAAAAHv8/RDh4BqQiyhkf6tp89wkrioLw07bDMyHjQCK4B/s1600/Screen%2BShot%2B2016-12-20%2Bat%2B2.42.54%2BPM.png)

You can read this chart if you like, but it's probably not clear what it shows.

  
  
3\. Ordinary mortals don't have access to extensive visual data about books, but the decisions about character set that these algorithms make is a potentially useful shadow of overall image info. Sheet music isn't OCR'ed by Google, for instance, as anything but junk. But it looks to me like it should be possible to train a classifier to pull out sheet music from the Hathi trust just based on a few seeds and the OCR errors that sheet music tends to be misread as.