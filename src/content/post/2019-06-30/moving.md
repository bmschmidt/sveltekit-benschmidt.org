---
title: "Web Migration"
date: 2019-06-30T11:53:19-04:00
draft: false

# Tags and categories
# For example, use `tags: []` for no tags, or the form `tags: ["A Tag", "Another Tag"]` for one or more tags.
tags: []
categories: []

---

Since 2010, I've done most of my web hosting the way that the Internet was built to facilitate: from a computer
under the desk in my office. This worked extremely well for me, and made it possible to rapidly prototype a lot of of websites
serving large amounts of data
which could then stay up indefinitely; I have a curmudgeonly resistance to cloud servers, although I have used them a bit in the last
few years (mostly for course websites where I wanted to keep student information separate from the big stew.)

But as part of my move to NYU, I'm shifting my Apache server to the cloud. (Digital Ocean). That will break some things in the short term, and I'm retiring a few elements of the website.

I'm listing the changes here mostly for my own reference. If I happen to have put up something that you use and want to see back, don't be shy to let me know through my Google email (username bmschmidt) or via benmschmidt on Twitter.


## Awaiting repair

* The Rate My Professor gender language site. I think this gets the most sustained, regular, traffic on my site.
  I'm hopeful this will be out of service only for the first two weeks of July. If you have some kind of curricular lesson or workshop
  for which you need it in that period, let me know and perhaps I can fix it up ahead of time.
* **Other Bookworms (Simpsons, Movies, etc.)**. I see some people using these, and I'll restore them using the same strategy as RMP; they may be offline until September, though, depending on how I address some storage issues. (The basic issue here is that, together, these take several terabytes of storage; that's more than you can drop into a cloud site at an affordable price. I know how I'll solve this, but it will be easier in September than July.

## Working

Anything that didn't have a database backend should be working fine. If it's not, it's probably a quick fix to a problem I'm not aware of.

* Personal website, all parts of *Creating Data*, interactive degree explorer.

## Probably gone

* The Open Library bookworm was a prototype that eventually became the [Hathi Trust Bookworm](https://bookworm.htrc.illinois.edu/develop). I've been recommending everyone use that site, not this one, for a few years rather than count on the old OL one.
* Some prototypes for *Creating Data* that I don't think were widely used.
* Some embedded elements in slideshows.  
* Wordpress installations for courses that I offered prior to 2016. These don't seem worth migrating to me. If you've somehow obtained a URL for one of these courses, you can probably add '/syllabus.pdf' to the end to see the basic materials.
