---
title: "Pedagogy shouldn't recapitulate phylogeny: (stop teaching base plot!)"
date: 2022-10-07
draft: false
tags:
  - Teaching
  - Programming
---

When you teach programming skills to people with the goal that they'll
be able to _use_ them, the most important obligation is not to waste
their time or make things seem more complicated than they are. This
should be obvious. But when I'm helping humanists decide what
workshops to take, reviewing introductory materials for classes, or
browsing tutorials to adapt for teaching, I see the same violation of
the principle again and again. Introductory tutorials waste enormous
amounts of time vainly covering ways of accomplishing tasks that not only have
_absolutely no use_ for beginners, but which will
confuse learners by making them

The mistake is: workshop leaders or teachers feel the need to walk through
an 'old' way of doing something before teaching the way that students will actually _do_ the thing.

To get the point
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
happen. In my ["Working with Data"](http://benschmidt.org/WWD22)
class, I get students to do almost all of their manipulation with the
`filter`, `group_by`, `summarize`, `arrange`, `*_join`, and `pivot_*`
functions from the `tidyverse`'s `dplyr` and `tidyr`
packages.[^spread] These functions--as students will learn reading
Hadley Wickham's original article on the 'split-apply-combine'
strategy--are ultimately descended from the original definitions in
SQL.

I, myself, used to write an enormous amount of SQL code. After not doing so
for a few years, my enthusiasm for [duckdb](https://duckdb.org/) has me doing it again.
The point of this will be that the conceptual strategy is the same; and as
a way to talk a bit about language design. (Is a good thing that "AS"
is optional in SQL?) But I come to SQL _after_ doing the basic operations in tidyverse,
not before: the idea is to think about it after the fact.

[^spread]:
    The first time I got the deprecation on `spread` and
    `gather`, I admit my heart sank--now I have to update every example!
    But switching to the new, more explicit, format will certainly be
    just slightly easier for students, I am convinced; and of course I
    won't spend time describing the old way of doing things.
