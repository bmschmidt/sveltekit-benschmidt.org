---
title: 'Collocation'
date: 2010-11-07T15:57:00.001-05:00
draft: false
url: /2010/11/collocation.html
tags: 
- Resources
- collocation
---

A collection as large as the Internet Archive's OCR database means I have to think through what I want well in advance of doing it. I'm only using a small subset of their 900,000 Google-scanned books, but that's still 16 gigabytes--it takes a couple hours just to get my baseline count of the 200,000 most common words. I could probably improve a lot of my search time through some more sophisticated database management, but I'll still have to figure out what sort of relations are worth looking for. So what are some?  
  
  
Collocation is the most obvious one--what words appear disproportionately with other words? The Consortium of Historical American English has a good implementation of these, as well as simpler wordcounts, on a 400 million word dataset (about a tenth as many words per year than what I'm using right now). I might want to think about some of differences between my set and his, made for linguists, later. For now, I'll notice that the metadata isn't perfect (although, glass houses). For example, one of his demonstrations is about verbs that increase in use between the 1930s and 1970s--but in the top three new verbs is "to bialystock," apparently entirely based on stage directions involving Max Bialystock in the screenplay for The Producers. Maybe I'll use "Bialystocking" to mean erroneously drawing imputation based on random changes in small percentages of a text corpus. A person would never Bialystock, a computer will do it all the time.  
  
Anyhow. COHA uses collocation in terms of word distance--what appears within six words of a term? I think two other ways will be better for me:  
1) Sentence collocation--what words appear in the same sentence? I've already implemented this. It's for finding, say, varying verbs used with my noun, 'attention.'  
2) Text collocation--what words appear in the same book? I haven't implemented it yet--it will take a \_lot\_ more time to run for any given word--but this might be better for looking at cases like the evolution one, which I'll go into a little more later. It lets us trace, say, whether Darwin is mentioned in books using scientific terms in the 1860s, political terms, etc. Maybe that fall-off in evolution is because it becomes less current in books that use the word 'biology' a lot, but remains more used in books that use the word 'economics.' That would tell us something about diffusion through different fields. Of course, the defining of fields is a big problem in itself, on which more later.