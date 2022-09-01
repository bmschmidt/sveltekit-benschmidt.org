---
title: 'Back to Basics'
date: 2010-11-08T10:26:00.002-05:00
draft: false
url: /2010/11/back-to-basics.html
tags:
  - Featured
  - Building a Corpus
---

I've rushed straight into applications here without taking much time to look at the data I'm working with. So let me take a minute to describe the set and how I'm trimming it.

The Internet Archive has copies of some unspecified percentage of the public domain books for which google books has released pdfs. They have done OCR (their own, I think, not google's) for most of them. The metadata isn't great, but it's usable--the same for the OCR. In total, they have 900,000 books from the Google collection--Dan Cohen claims to have 1.2 million from English publishers alone, so we're looking at some sort of a sample. The physical books are from major research libraries--Harvard, Michigan, etc.

900,000 books is too many for me to process at home. Since I'm interested in American history, I made a list of the largest American publishers by doing some preliminary analysis of their catalog, and reading about the publishers online. Publisher names are irregular, so I've searched for a single keyword to represent a publishing house; eg, "Scribner" to catch "Charles Scribner", "Chas. Scribner's sons", "Scribner's", etc.).I keep adding files (which creates more work for me as I retool the database), but the current list is, from largest to smallest: Harper, Appleton, Houghton, Scribner, Putnam, Little, Carey, Ticknor, Riverside. If anyone has any suggestions for what to add, I'm open to it. The only big publisher I've consciously excluded is the Government Printing Office--it's one of the largest, and probably could be subjected to a fascinating analysis in its own right, but clearly has a different intended audience than the literary publishers.

A lot of the files are duplicates--I remove books that have the same author, title, and year from being counted twice, but I'm sure many books are still creeping in through the cracks. Just to give an idea of what sort of books we're catching, here's a randomly selected set of twenty books' titles.

\> sample(full.catalog\[,5\],20)

\[1\] The divorce of Catherine of Aragon; the story as told by the imperial ambassadors resident at the court of Henry VIII..

\[2\] Levana; or, The doctrine of education

\[3\] Cold dishes for hot weather

\[4\] ... Wilbur Fisk

\[5\] London City Churches

\[6\] The writings of Oliver Wendell Holmes

\[7\] Germany and the Germans

\[8\] The Novels of Charles Lever

\[9\] Quality Street: A Comedy

\[10\] The Crescent and the Cross; Or, Romance and Realities of Eastern Travel.

\[11\] A passionate pilgrim

\[12\] The works of Charles Lamb

\[13\] Advanced Arithmetic

\[14\] The Spirit of Old West Point, 1858-1862

\[15\] The moral, social, and professional duties of attorneys and solicitors

\[16\] The favor of kings

\[17\] At the mikado's court; the adventures of three American boys in modern Japan

\[18\] George Washington: An Historical Biography

\[19\] Josiah Wedgwood, F.R.S.: His Personal History

\[20\] Alexander the Great

Those sound reasonable as a sample of American books from the period. Can you guess the years the books are from? Of course, the sample is overweighted towards the 80s and 90s, when we have the most books--if we weight the sample so we're equally likely to end up with books from any period, we end up with something slightly different:

\> full.catalog\[sample(1:nrow(full.catalog),20,prob=prob^2),c(5,7)\]

The Life of John Randolph of Roanoke 1851

Mind in nature; or The origin of life, and the mode of development of animals 1865

Lex Parliamentaria Americana: Elements of the Law and Practice of ... 1874

On amputation of the cervix uteri: In Certain Forms of Procidentia, and on Complete Eversion of ... 1869

White Aprons: A Romance of Bacon's Rebellion, Virginia, 1676 1896

The works of the Right Honorable Edmund Burke 1877

A Centennial Discourse Delivered to the First Congregational Church and Society in Leominster ... 1843

Out-doors at Idlewild; or, The shaping of a home on the banks of the Hudson 1855

The Women of the American Revolution 1850

Progressive religious thought in America; a survey of the enlarging Pilgrim faith 1919

Women in industry; a study in American economic history 1909

Recollections of a varied career 1908

The Balkans: Roumania, Bulgaria, Servia, and Montenegro 1896

New England aviators 1914-1918; their portraits and their records 1919

Ernest Maltravers 1838

Genetic Psychology for Teachers 1903

Work for Women 1883

The Atlantic Islands as Resorts of Health and Pleasure 1878

"The Grasshopper" in Lombard Street 1892

Chronicle of the Coach: Charing Cross to Ilfracombe ... 1886

Novels, monographs, republications--there's a mix, that probably varies over time--but that variation itself is interesting.

So how many books does that leave? About 33,000. Here's a quick plot of the years they come from: over 100 books a year from the 1830s, over 200 from the mid 40s. The sample is best for the GAPE, so analyses will be more reliable from then.  
[![](http://2.bp.blogspot.com/_Pge31alC_E8/TNggkpS1ygI/AAAAAAAACDY/9jhH8lBMjgA/s400/Webplot.jpg)](http://2.bp.blogspot.com/_Pge31alC_E8/TNggkpS1ygI/AAAAAAAACDY/9jhH8lBMjgA/s1600/Webplot.jpg)Now, 100 books a year is not very much, when you think about it--but 1000 books a decade from the 1830s on seems sufficient. We could do decade counts, but that's just one way--and not the best--of smoothing data. For now, I'm using loess normalization, which is a least squares based method--if the data was perfect a moving average would be more appropriate, but given the possibility of outliers (multiple copies of a single book under different authors, say, skewing the numbers for one year) I think loess is an acceptable compromise.

A disclaimer that may not be obvious is that publication date is not the same as date written. For example, about half a percent of the books are by Shakespeare:

[![](http://4.bp.blogspot.com/_Pge31alC_E8/TNgg9AJd7hI/AAAAAAAACDg/O_HczCsjvd8/s400/Webplot.jpg)](http://4.bp.blogspot.com/_Pge31alC_E8/TNgg9AJd7hI/AAAAAAAACDg/O_HczCsjvd8/s1600/Webplot.jpg)

For some uses, this is a feature, not a bug. Actually finding the year a book was written is nearly impossible. (Even nowadays--look at an academic monograph, and try to figure how man of the sentences were first written for seminar papers a decade earlier). And in most cases we _want_ to pick up on the currency of what's being printed--all those Victorian editions of Shakespeare show us, in part, what people were actually reading.

There's one category I'm worried about, though: collected works editions. Browsing the titles, it's clear there are a lot of these--1645, to be precise, or about 4% of the total. Here's a random sample to give an idea:

\[1\] The writings of Charles Dickens, with critical and bibliographical introductions and notes by Edwin Percy Whipple and others;

\[2\] The works of John Greenleaf Whittier;

\[3\] The Poetical Works of Edmund Spenser

\[4\] The Poetical Works of Henry Wadsworth Longfellow: With Bibliographical and ...

\[5\] The works of Robert Louis Stevenson

\[6\] The Complete Poetical Works of Elizabeth Barrett Browning

\[7\] The Works of Washington Irving...

\[8\] The poetical works of Bayard Taylor

\[9\] Darwinism stated by Darwin himself. Characteristic passages from the writings of Charles Darwin

\[10\] The writings of Thomas Jefferson;

\[11\] The Works of John C. Calhoun

\[12\] The works of William Makepeace Thackeray

\[13\] The works of Daniel Webster ..

\[14\] The Poetical Works of William Cullen Bryant

\[15\] The Writings of Bret Harte

\[16\] The writings of George Eliot : together with the life by J. W. Cross

\[17\] The Poetical Works of Thomas Gray ; with a Memoir

\[18\] The Writings of George Washington

\[19\] The poetical works of miss Landon: Complete

\[20\] The Writings of Mark Twain

There are a lot of problems with these editions--the metadata makes it harder to eliminate duplicates (because the creator field can be any combination of the author and editor), they tend to be long and generally not selected for contemporary relevance, and we know that they dilute the currency of the vast majority of terms in them. On the other hand, I'd really hate to miss out on the data contained in no. 9 above in a study of evolutionary language, and the road of truly cleaning up a sample is one that goes a long way. I'm inclined to keep them in for now.

## (I should note now that the numbers above are all a little off, because I was double-counting entries from Appleton by accident--it doesn't change the larger point).

### Comments:

#### One note to myself--there seem to be about 180 boo...

[Ben](https://www.blogger.com/profile/04856020368342677253 'noreply@blogger.com') - <time datetime="2010-11-08T13:06:30.404-05:00">Nov 1, 2010</time>

One note to myself--there seem to be about 180 books being counted twice at the moment, 170 of which are published by Houghton. I could just remove them, but better to figure out why that's happening to see if it can help delete other duplicates.

<hr />
#### FTR, it's because a lot books list both Hought...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-11-28T13:00:12.101-05:00">Nov 0, 2010</time>

FTR, it's because a lot books list both Houghton and Riverside in the publisher field, particular later in the period.

<hr />
