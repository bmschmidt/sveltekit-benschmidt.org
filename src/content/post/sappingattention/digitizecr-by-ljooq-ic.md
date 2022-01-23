---
title: 'digitizecr by ljooq ic'
date: 2010-11-10T01:58:00.001-05:00
draft: false
url: /2010/11/digitizecr-by-ljooq-ic.html
tags: 
- Building a Corpus
- Digital Humanities
---

Obviously, I like charts. But I've periodically been presenting data as a number of random samples, as well.  It's a technique that can be important for digital humanities analysis. And it's one that can draw more on the skills in humanistic training, so might help make this sort of work more appealing. In the sciences, an individual data point often has very little meaning on its own--it's just a set of coordinates. Even in the big education datasets I used to work with, the core facts that I was aggregating up from were generally very dull--one university awarded three degrees in criminal science in 1984, one faculty member earned $55,000 a year. But with language, there's real meaning embodied in every point, that we're far better equipped to understand than the computer. The main point of text processing is to act as a sort of extraordinarily stupid and extraordinarily perseverant research assistant, who can bring patterns to our attention but is terrible at telling which patterns are really important. We can't read everything ourselves, but it's good to check up periodically--that's why I do things like see what sort of words are the 300,000th in the language, or what 20 random book titles from the sample are.  
  
So any good text processing application will let us delve into the individual data as well as giving the individual picture. I'm circling around something commenter "Jamie" said, though not addressing it directly: (quote after break)  
  
  
  
  

> But it seems like \[graphic presentation\] is also an opportunity to present in more compact form the interpretive difficulties and possibilities that historical research involves more generally. The problem of knowing what sources are responsible for word peaks is an efficient way to complicate the issues of source and structure; and the follow-up investigations into genre suggests why the business of "complicating" might be useful or interesting, in addition to being a responsibility.

This is very true. Although I've been selling the loess curves and so on, it's worth remembering that every interpretation of these charts is, ipso facto, a completely traditional act of historical thinking.  
  
And if we program it right, it can be a very good illustration, or better, simplification, of the historical process, to just drill straight down. I can't do it yet, but wouldn't be great to not be stuck speculating about the reason for that 1869 telegraph spike, but instead to just skim fifty of the five hundred sentences that use the word? That's sort of what we use Google Books for right now, but the very randomness can both reacquaint us with the weirdness of our sources, but also open us up more to the vagaries of the real world. One of the things that's good about the acts of interpretation charts force on us is that they're disconnected from other historical discourses--they can structure our answers, but can only make limited contributions to the questions we can ask. That's actually one of the reasons that I strongly urge everyone to not use decade counts for this sort of analysis--one of the things that can hold us back in interpretation is what we think we know about, say, the 1890s as the decade of turmoil and the 1900s as the decade of reform.  
  
One of my other long-term history data goals has been to figure out how to use historical census data to randomly pull out some number single americans from a given year. Where are they from? What do they do for a living? Who do they live with? Sometimes in the classroom we assign students identities that we take to be representative--one is the SNCC activist, another the Goldwater voter, another the union laborer. But what if we actually pulled the names out of a hat at the beginning of a class? That would be an interestingly different perspective on what America looked like. Might work as a short writing exercise, too. It would certainly be an interesting challenge for the teacher to cope with whoever actually came out.  
  
  
  
  
  
\*\*\*\*\*  
Rather than make a post out of it, I'm going to stick some bookkeeping at the end.  
  
I said yesterday that I'd have data on how words were distributed across different books today. I did, but it highlighted some more problems with the OCR--the most universally distributed word was 'i', which is acceptable--but number 2 was "Google." Most of the reason was that I wasn't stripping their intro page as effectively as I thought, which I've changed. But there are also a lot of watermarks scattered through the books, which are always returned slightly differently, in phrases like the title of this post. So I had to go back and edit my pre-processing script, which does things like strip out whitespace, put words that are strung across a line-break by the printers back together, and that sort of stuff. I added a couple of other important to that script too based on what the texts look like--now I strip all possessives before processing so they show up as singulars, not plurals; I added a few more cases of periods that don't indicate the end of a sentence (mostly following common abbreviations--mr, prof, rev, and so on); I skip any line that's more than 50% capital letters, on the theory it's probably a table of contents or, much worse, a chapter heading or book heading that's repeated at the top of every page. (There are probably some others of those in lower-case--they would be a \_real\_ pain to eliminate, and part of my contention in doing this is that we can see interesting things even without perfect data, which is pretty far off). (Footnotes are a mess too--they interrupt sentences in the middle, are full of periods that don't signify sentences, and their actual fact of referencing is hard to pull out. I wonder if Google's OCR is much better than this.)