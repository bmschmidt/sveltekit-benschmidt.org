---
title: A Rose for Ruby
featured: false
draft: false
date: 2022-02-28
tags:
  - Ruby
  - Jekyll
  - Programming Languages
  - Digital Archives
---

![Ruby Logo](https://www.ruby-lang.org/images/header-ruby-logo.png) There are programming languages that people use for money, and
programming languages people use for love. There are Weekend at Bernie's/Jeremy Bentham corpses that you prop up for the cash, and there
are "Rose for Emily" corpses you sleep with every night for decades
because it's too painful to admit that the best version of your life you
ever glimpsed is not going to happen.

It's time we had a hard talk about Ruby.

_This is part three of a series on Web Archives for the 2020s._

I was at a cafe in Ann Arbor in 2014 talking about coding with [Matt
Burton;](https://www.sci.pitt.edu/people/matthew-burton)
he had just discovered Docker, and was rhapsodically describing
how magically it transformed his workflow. At some point he mentioned
something about Ruby and how he was shifting away using it, and a
doleful looking man came over to commiserate over how the Ruby dream was
fading away. It was a good idea, it really figured something out, he
said, but it had lost. He then described whatever new thing **he** had
been working on\--not Docker, maybe Go (I don't think I knew about Go
yet), maybe something else.

People talk about programming "languages," but the language is usually
the easy part; every programming environment is like a foreign city.
Perl was like a Renaissance fair with arcane and inconsistent rules,
filled with people pretending to be monks and issuing apocalypses and
generally orientalizing in a way that wouldn't be cool today. R is a
midwestern college town, orderly, a bit slow, behind the times in
certain ways but with great infrastructure. Go is Singapore, filled with
spaced-out modern infrastructure and more rules for your own good than
you'd like. Javascript is some post-imperial metropolis, filled with
merchants hawking possibly counterfeit wares in countless dialects, with
huge districts constructed without a building code and no overall map.

As a tourist in the landscape, Ruby right now feels like Detroit. In the
1950s, Detroit was an idea of growth, union-led households, orderly
grids, with the UAW ready to push racial integration. The infrastructure
is still there. But it's gutted; you keep going to a corner and finding
the buildings have been torn down. The Wax documents strongly recommend
\`rvm\` for managing versions, but the web page looks to be from a
decade ago and the key authentication doesn't even work. The core
version of Ruby was updated to 3.0 last year, removing a key dependency
(webrick) from the stdlib that makes Jekyll not work, and it seems not
to be a priority for the Jekyll team to immediately add it back in the
Jekyll requirements. Why? Presumably because so few people are starting
up new sites that new people moving to the platform is not a problem
that overwhelms them.

And it's slowwwwww. Wow. Those Hugo-adopters were right. So, so slow. In
Bookworm, I tokenize, reformat, and otherwise transform books all the
time. I've switched over to Pyarrow and polars to get faster
underpinnings; I can often do some operations on a thousand books a
second. Ruby, generating a piddling few dozen pages, can take a minute
or two. I wrote an entire Svelte-kit based wax clone just in the breaks
while waiting for my Wax pages to render. There's a truism out there
that developer time is far more valuable than compiler time, and that all
modern languages are fast _enough_. I've always thought that was basically
true. But that relies on a rough baseline of performance, on someone
periodically going through and pulling out the low-hanging fruit by
optimizing the slowest parts of a language. Jekyll's slowness is of a different
order.

I've never learned Ruby. Based on the love people
show for it, I wish I had to. But I doubt ever will. It should have been bigger. From
everything I've seen, it was better designed than Python. We'd all be in
a better place if the numpy/scipy/tensorflow stack had grown on top of
Ruby rather than Python one. But they didn't. You don't move to a city
for the language they speak; you move there for the jobs, the infrastructure, the
culture, the people. You take care of what's left there.

There are people left who still love Ruby, who will tell you that Jekyll is a simple,
classic, effective way to build web sites.

They are lost souls.
