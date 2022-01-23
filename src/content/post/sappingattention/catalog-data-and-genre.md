---
title: 'Catalog data and genre'
date: 2010-11-30T20:56:00.002-05:00
draft: false
url: /2010/11/catalog-data-and-genre.html
tags: 
- Building a Corpus
---

Mostly a note to myself:  
  
I think genre data would be helpful in all sorts of ways--tracking evolutionary language through different sciences, say, or finding what discourses are the earliest to use certain constructions like "focus attention." The Internet Archive books have no genre information in their metadata, for the most part. The genre data I think I want to use would Library of Congress call numbers--that divides up books in all sorts of ways at various levels that I could parse. It's tricky to get from one to the other, though. I could try to hit the LOC catalog with a script that searches for title, author and year from the metadata I do have, but that would miss a lot and maybe have false positives, plus the LOC catalog is sort of tough to machine-query. Or I could try to run a completely statistical clustering, but I don't trust that that would come out with categories that correspond to ones in common use. Some sort of hybrid method might be best--just a quick sketch below.  
  
  
A substantial fraction--I'm sure how many, but probably in the 10-40% area—of the books on the Internet Archive site have associated marc records, like the following: http://ia341018.us.archive.org/2/items/orbsaroundusase01procgoog/orbsaroundusase01procgoog\_marc.xml . Those include LOC call numbers. Using those as a base, I could build up some sort of seeded clustering algorithm—though I don't know how to do that yet—that would let me start the machine classification off of a base of a few hundred books in each of the larger LOC catalog areas I'll be dealing with.  
  
There are also OCLC ids and LCCNs associated with some books, probably more than have LOC call numbers. Those could work as access points too, but would involve requests to LOC or Worldcat in between. It might be necessary for more catalogue data.  
  
What I'd \_really\_ like is for the Internet Archive's [own cataloging database](http://openlibrary.org/) to move along, but it doesn't seem to have caught up with their scanned books yet in most cases. Maybe I just picked the wrong books to test it on, though.