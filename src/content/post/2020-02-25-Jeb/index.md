---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Jeb! the quitter. Digital traces of private devotions.'
subtitle: ''
summary: ''
authors: []
tags: ['Bookworm', 'Data Visualization']
date: 2020-02-26T09:49:26-05:00
lastmod: 2020-02-26T09:49:26-05:00
featured: false
draft: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [Bookworm]
abstract: A graph and story of Jeb! Bush's failed religious devotions.
---

As I often do, I'm going to pull away from various forms of Internet
reading/engagement through Lent. This year, this brings to mind one
of my favorite stray observations about digital libraries that I've
never posted anywhere.

As part of the 2016 Republican Primary, Jeb! Bush released a website
enabling exploration of e-mails related to his official accounts as
governor of Florida in the early 2000s. This whole sentence has an
antiquity to it; the idea of pre-emptive disclosure (in large part to
contrast with his presumed general election opponent, Hilly Clinton)
seems hopelessly antique. And at the time, it
[was critized for accidentally disclosing all sort of personal information, both stories and Social Security Numbers](https://www.theverge.com/2015/2/10/8013531/jeb-bush-florida-email-dump-privacy).
It did not make Jeb! president. Anyhow, back then I downloaded Jeb!'s
e-mails--and Hillary's--to think about what sort of stuff historians
will do with these records in the future.

One thing I looked at was simply the _time of day_ that Jeb sent
letters. Looking at it on a yearly basis, it was clear that there were
some odd seasonal patterns in the way that Jeb! sent his
e-mails. Knowing that Jeb! was Catholic, I had a brainstorm that maybe
this was aligned to the liturgical year. And so I wrote a little bit
of ggplot2 code to break out the Lenten season from the rest of the
year.

(My favorite part of this chart is the color scheme; these are the
color of the vestments word during Lent and ordinary time. I can't
remember how I aligned dates to the liturgical calendar.)

Breaking it out, I think it's far more likely than not that in the
year 2005, Jeb! made some private devotion to get up early and answer
his e-mails before 7AM. The only thing arguing against this is that he
_does_ get up a little early on Mardi Gras and the Monday before as
well; but starting on Ash Wednesday, Jeb! is regularly sending over
50% of his e-mails for the day before he gets to the office.

And then it falls apart a wek or two before Easter. Could he not hold
it together?

There's also some sign that he gave the same effort a shot in 2006,
but it fell apart mush earlier.

{{< figure src="closeup.png" title="Jeb Bush's outgoing e-mail times" >}}

It is odd to me to be able to talk in this particular way about the
intersection of daily life and religious identity. One oddity, of
course, is that this is yet another example of the kinds of
information held inside the great data surplus at the tech companies;
but honestly, the question here is so oddly stated that I can't
imagine datamining ever turning it up. Perhaps it says something about
the potential for biographies in the digital age; the narcissism of
the quantified self movement might look quite different directed at
the quantified other. But is this kind of evidence really compatible
with biography?

Anyhow, off to some e-mails of my own.
