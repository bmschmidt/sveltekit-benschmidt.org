---
title: 'Hello again, RSS'
date: 2023-01-01T11:33
draft: false

tags: ['Blog', 'Programming', 'Web']
abstract: |
  Notes on the collapse of Twitter, and declaration that this site finally has a stable RSS feed.
---

The collapse of Twitter under Elon Musk over the last few months feels, in my corner of the universe,
like something potentially a little more germinal; unlike in the various Facebook exoduses of the 2010s, I see people grasping towards different models of the architecture of the Web. Mastodon itself (I've ended up at [\@benmschmidt\@vis.social](https://vis.social/@benmschmidt) for the time being) seems so obviously imperfect as for its imperfections to be a selling point; it's so hard to imagine social media staying on Rails application for the next decade that using it feels like a bet on the future, because everyone now knows they need to be prepared to migrate again.

And federation itself is intensely interesting. As a resolute static-site blogger since around 2013 or so, I've long been frustrated with the loss of _comments_; Mastodon & company offer the first legit opportunity I've seen to bring them back, by allowing discussions to happen in chat apps but to stay linked to the place where a post might live permanently.

I've started noodling around with turning [benschmidt.org](/) into a fediverse node of its own--about which more if I ever make any real process--but in the meantime, I realized that I've actually been neglecting web fundamentals on this site. In the last year I've migrated both this blog and the archived content from [my old, Google-hosted one](https://benschmidt.org/sappingattention/) into a static-site maintained in Svelte-kit and authored in Markdown. Out of obstinance, I've refused to use any Markdown parser other than Pandoc, which has led me into [one of the more interesting projects](https://github.com/bmschmidt/pandoc-svelte-components) I've worked on, implementing Pandoc documents as Svelte-components. But that means the raw HTML is a little tricky to place into RSS, and I have to implement RSS myself... And it's not like having an RSS feed is _interesting_. Having blog posts syndicate right into the Fediverse, maybe stop using Mastodon as my point of origin--_that_ would be interesting.

But doing that without RSS is a cart without a horse. So at the end/beginning of the year, the work is done, thanks to an excellent node package called [feed](https://www.npmjs.com/package/feed). This post serves to announce them: [https://benschmidt.org/rss.xml](https://benschmidt.org/rss.xml) and [https://benschmidt.org/atom.xml](https://benschmidt.org/rss.xml). Subscribe away!
