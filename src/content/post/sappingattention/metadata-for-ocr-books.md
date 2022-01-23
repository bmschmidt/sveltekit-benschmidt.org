---
title: 'Metadata for OCR books'
date: 2010-12-09T16:07:00.000-05:00
draft: false
url: /2010/12/metadata-for-ocr-books.html
tags: 
- Metadata
- Building a Corpus
---

A commenter [asked](http://sappingattention.blogspot.com/2010/12/first-principals.html?showComment=1291869098649#c8660428439425233309) about why I don't improve the metadata instead of doing this clustering stuff, which seems just poorly to reproduce the work of generations of librarians in classifying books. I'd like to. The biggest problem right now for text analysis for historical purposes is metadata (followed closely by OCR quality). What are the sources? I'm going to think through what I know, but I'd love any advice on this because it's really outside my expertise.  
  
  
  
You know how [they say](http://en.wikipedia.org/wiki/Project_triangle) you can do a project fast, well, or cheap: choose two? When it comes to OCR with metadata, you could have it a) accessible b) comprehensive, and c) error-free: but the most you can get is for it to sum to about two-thirds of one. Everybody has some year errors and inconsistencies in author's names; things that would be incredibly useful for machine-analysis like call numbers are too rare and inconsistent, because they rely on individual library practices.  
  
Most major sites use the google scans for US books as the major source, but you can get them and metadata from three places. By accessibility:  
  

*   Open Library, the internet archive's crowdsourced cataloging project, is intriguing but a) always changing, and b) with more opaque relations to their own catalogue than I'd like. An Open Library entry often links to an IA scan, and the reverse seems to be true as well--but I don't think they've gotten all that far in universally linking the two. At least, most pages don't link to anything.
*   [HathiTrust](http://www.hathitrust.org/data), an inter-university consortium based at Michigan, is a very promising long-term source. It has a metadata API available but hasn't activated its full API yet. The metadata seems somewhat inconsistent--I get the impression, for instance, that books from Michigan have call numbers, while books from the UC system do not. But it's not bad, and it's got the books from several important libraries.
*   Google currently has some meta-data online, but it's mostly off-limits and there's no good API for what there is. They make PDF's available for download, but don't show their OCR at all. They also have higher quality, private metadata that will be released at some point, somehow. Depending on the API and TOS, there's a good chance this will ultimately be the best we get, [for better](http://www.nytimes.com/2009/10/09/opinion/09brin.html?_r=1) or [for worse.](http://languagelog.ldc.upenn.edu/nll/?p=1701) I'd guess they'll do a good job, but I doubt they'll ever just release their hard won catalogue info into the public domain, where it could be accessed any way scholars wanted. Maybe eventually they'll be able to serve any use from their database we might want. Currently, though, Google is well behind the other two in channels for accessing the books and the data.

Another option is to take the Internet Archive catalog and try to link it to existing metadata. There are only two sources I know of for this that might realistically work:  

*   Worldcat has access issues. Possibly I could get it through the library here.
*   Library of Congress won't have most of the books I want, but at least it would be pretty easy to look up call numbers through LCCNs if I could get them from elsewhere, or else just do some kinds of searches. Access through a scripting language seems possible, but a bit of a pain.

I'm hesitant to try to link up records like these because I know the IA people are doing the same thing. As are Google, and Hathi and probably all sorts of other people. I'm pretty sure my comparative advantage doesn't lie in library science.

  

So metadata is a hard and determinative choice. Whatever I choose might require me to throw away most of the books that I'm using now if I can't match them in the new catalogue, and add a whole bunch of new things. I _really_ like the idea of using the seven largest American publishers for this, but that gets more difficult when you move a different catalogue source. I'd been thinking about doing some form of this project for years, but only the IA's amazing accessibility makes it possible without grant-funding, preferential access, and so on.

  

Back to the project triangle: I can start this research now, with markedly imperfect sources, with weeks of slogging through metadata, or in 2012-13. I'm choosing option 1. So for now, I'm just plowing around in the books I have, a) hoping the year data is mostly right (it does have a few mistakes) and b) trying to ask questions that are congenial to the books that I have. Which I'll get back to soon.