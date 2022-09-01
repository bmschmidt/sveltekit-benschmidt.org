---
title: 'Teach Ontogeny Not Phylogeny: (stop teaching base plot!)'
date: 2020-01-30T10:03:29-05:00
draft: true
tags:
  - Teaching
  - Programming
---

(I've delivered this rant a few times recently in person,
which makes me think it should be a blog post.)

When you teach programming skills to people with the goal that they'll
be able to _use_ them, the most important obligation is not to waste
their time or make things seem more complicated than they are. This
should be obvious. But when I'm helping humanists decide what
workshops to take, reviewing introductory materials for classes, or
browsing tutorials to adapt for teaching, I see the same violation of
the principle again and again. Introductory tutorials waste enormous
amounts of time vainly covering ways of accomplishing tasks that have
_absolutely no use_ for beginners, and which fundamentally will
confuse learners.

The mistake is: workshop leaders or teachers feel the need to walk through
an 'old' way of doing something before doing the new thing. To get the point
across clearly, let me say some things.

In R, for me this fundamentally means: **commit to the tidyverse**.

1. Only ever teach `ggplot2`; do **not** teach the base plotting functions.
   But above all, never teach both.

In Python

1. Never give the slightest acknowledgement to python 2.7.
2. Never teach matplotlib.

This seems obvious, but it makes me mad to see it. The reason why is not just that
it's a waste of student's time, but that it makes me fear the instructor is either
underqualified (perhaps they don't know how to make a histogram in ggplot).

Are there exceptions? Yes. Or at least, maybe. One is when the
intellectual concept is so much larger than a particular application
that it's worth exploring the general rule. Another is when the
historical example is so, well, historical that exploring it as a
cultural artifact is actually worthwhile. Sometimes both will
happen. In my ["Working with Data"](http://benschmidt.org/WWD20)
class, I get students to do almost all of their manipulation with the
`filter`, `group_by`, `summarize`, `arrange`, `*_join`, and `pivot_*`
functions from the `tidyverse`'s `dplyr` and `tidyr`
packages.[^spread] These functions--as students will learn reading
Hadley Wickham's original article on the 'split-apply-combine'
strategy--are ultimately descended from the original definitions in
SQL. I, myself, used to write an enormous amount of SQL code. (I've
found myself doing less recently--partly because of increased memory,
partly because the new versions just work). But after sitting in a
meeting with some computer scientists who view data analysis without
SQL as malpractice, I'm experimenting with building it back in. The
point of this will be that the conceptual strategy is the same; and as
a way to talk a bit about language design. (Is a good thing that "AS"
is optional in SQL?)

[^spread]:
    The first time I got the deprecation on `spread` and
    `gather`, I admit my heart sank--now I have to update every example!
    But switching to the new, more explicit, format will certainly be
    just slightly easier for students, I am convinced; and of course I
    won't spend time describing the old way of doing things.
