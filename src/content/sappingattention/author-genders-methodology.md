---
title: 'Author Genders: methodology'
date: 2012-05-07T12:05:00.001-04:00
draft: false
url: /2012/05/author-genders-methodology.html
tags:
  - Libraries
  - Gender
---

We just rolled out a [new version of Bookworm](http://bookworm.culturomics.org/) (now going under the name "Bookworm Open Library") that works on the same codebase as the [ArXiv Bookworm](http://arxiv.culturomics.org/) released last month. The most noticeable changes are a cleaner and more flexible UI (mostly put together for the ArXiv by [Neva Cherniavksy](http://people.seas.harvard.edu/~neva/) and Martin Camacho, and revamped by Neva to work on the OL version), couple with some behind-the-scenes tweaks that should make it easy to add new Bookworms on other sets of texts in the future. But as a little bonus, there's an additional metadata category in the Open Library Bookworm we're calling "author gender."

I don't suppose I need to tell anyone that gender has been an important category to the humanities over the last few decades. But it's been important in a way that makes lump categories like this highly fraught, so I want to be slightly careful about this. I'll do that in two posts: this one, explaining the possibilities and limits of the methodology; and a follow-up that actually crunches the data to look at how library holdings, and some word usages, break down by gender.

To go back to basics: the basic idea of Bookworm has been that that metadata is a powerful way of statistically analyzing texts. (I know this probably sounds like a vanilla statement: but topic modeling and other methods developed for _unstructured_ libraries occupy so much space in DH projects that I think it isn't). Some of them are immediately kept by libraries, like publication place or Library of Congress subject heading: others are derived, like author age.

Gender is now one of the latter categories. It is not something that librarians (usually) write down: but it's easy to get some statistics that are quite obviously meaningful (although what exactly they mean is a little opaque). We can do this by looking at the names of authors.

I think these sorts of derived metadata categories offer some of the most interesting information we can get, but they also require a greater tolerance for error. A lot of the time, they will be wrong.

Humanists tend toward violent perfectionism when it comes to mistakes in numeric information, but I think this is a mistake when applied to the sort of data we're using here. The nice thing about author gender metrics is that they will err, for the most part, in exactly the same direction as humans and humanists do. Both humans and computers will jump to the conclusion that someone named "Elmer" must be male, even if she isn't.

If you [go to Bookworm](http://bookworm.culturomics.org/) and play around with some gender searches, you can see this in action. One of the nice things about the interface is that you see the constituent books of a line by clicking on the graph. That means that there's no need to blindly trust the gender algorithm; by clicking on the charts and just looking at what pops up any user will see that he or she, too, would assume from the title page that a given author is female.

Of course, there are a few reasons humans and computers _both might _be wrong. But before I get into that, let me explain the general principle used. It's really simple.

1\. Parse all the first names in 1% samples of the 1910 and 1920 US Censuses ([from IPUMS](http://usa.ipums.org/usa/samples.shtml)) and get their genders. (1910 and 1920 are the only ones with name fields, I believe).

2\. Compare those to the first name of the first author of each book in the Open Library.

3\. If the author's first name is associated with a single gender more than 97% of the time in the census, assume the book was written by someone of that gender. Otherwise the name is ambiguous (e.g., "Ashley", "A.J.", or "Leslie"); then, don't assign a gender.

Here, to give the general idea, is a list of the names being used: on the outside of the black lines, they're classifying gender; on the inside ("Lois," "Christian," "Francis" and "Frances") the names are rejected as too unclear.

[![](http://3.bp.blogspot.com/-aUZITEQJ_NM/T6AIFsxUjMI/AAAAAAAADV8/7yku3gYmpac/s1600/Gender+of+names+used+for+classifying.png)](http://3.bp.blogspot.com/-aUZITEQJ_NM/T6AIFsxUjMI/AAAAAAAADV8/7yku3gYmpac/s1600/Gender+of+names+used+for+classifying.png)

American names in 1910 and 1920 are a reasonable proxy for gender, but things may be different in Britain, in Germany, and so forth. It would be easy to get the accuracy up a smidge by incorporating author birth date and some location information; for the last 100 years, Social Security data would work for Americans as well. That seems eventually worth it, but not necessary for a first pass.

In the selection corpus, this is labeled "Probably male" and "Probably female," because it's not 100% accurate. How accurate is it? I'm reluctant to hazard a guess: right now, quantification would only give false certainty. It's not 97% accurate, because of pseudonyms and initials will end up masking or reclassifying a lot of writers. (Although as I wrote last month, [author use of initials seems not to be as _systematically_ skewing of gender conclusions as I would have thought](http://sappingattention.blogspot.com/2012/03/do-women-hide-their-gender-by.html)\--they're probably hiding as many men as women.) Although a few authors have some biographical information we could check for gender, there's no reason to think that they're representative of the full population of library authors.

_\*More technically, it's not 97% accurate as well because it assumes that a given book is equally likely to be male or female, which we know not to be true. A better prediction of author gender for an individual book would seem to come from a Bayes classifier that took into account that most books are by men. (Just how many is something we can only learn recursively from the names). That would, effectively, push both lines above to the left. (For example, calling "Claude" unambiguously male but bumping "Doris" from definitely female to ambiguous). Since the goal is the overall trendlines, not the individual books, I'm not sure that's desirable. Still, currently it's likely that there are more stealth men among the women than vice versa. A side-effect of that would be, though, that "women" would be even more underrepresented, and there seems something vaguely undesirable (or is it just unfair?) to me about that. **Moreover, the census data is itself suspect in a way that suggests to me that there's a bit of mean-reversion preventing any name from being as uniformly male or female as it is 'in the wild': I bet a lot of the missing distinction between "Francis" and "Frances," for example, is because the 1910s enumerator or the 1990s data enterer misspelled the name, or wrote it down before proceeding on to fill out the 'gender' column.** Any thoughts?_

Given all that, this can only take us so far. What it _does _reflect pretty well is what the reader would think when she picked up a book. Exhuming the authors and counting X-chromosomes would be interesting and all, but not obviously a better way of looking at the way gender acts in society; the publishers knew as well as we what names sounded female, and perhaps the most interesting questions to be answered by these methods are about what language readers thought they were seeing used by women, and what language used by men; or what language publishers and librarians allowed to reach the public by each gender.

Which is to say: I suspect that if there are sound applications for this sort of data, they will build off of everything we've learned in the last decades about the social constructedness of gender. This is less good at restoring lost female voices, or showing the applications of men, than it is at showing the restraints that gender may have placed on individual actors, in ways they may not fully have been aware of.

The constraints on gender are so strong in the late 19th century US that a lot of questions one might want to ask—do men and women address readers differently? are they interested in different things?—are only possible with carefully constructed subsets, if at all. Women only publish with certain publishers, in certain genres, under certain expectations; these comparisons can show the constraints on what 'female'--whether in real life or in pseudonym—could say.\* (Any comparison between the full corpus, for example, will be highly towards fiction and education, the areas with the highest percentage of female authors).

_\*Contradicting that stance, there's actually a fourth step to the algorithm right now. If the author was born in 1819 and is named "George Eliot", we classify them as female. I added that because I figure 80% of the time that someone decides to try to trick the algorithm, that's the example they'll go with; and I feel like denying them the pleasure. In principle, I want to remind people that machine categorization and human knowledge aren't always at odds. Maybe we'll retire it at some point: it actually changes some charts people might see, since the default search is often for 'natural selection,' and Eliot is one of the first female novelists to use the phrase. We'll see._

As always, this raises some funny questions about organizational imperatives. As I said to some people at a big established digital repository a couple weeks ago, this sort of fast-and-loose summary classification might be administratively difficult for a bigger organization. Releasing a classification with known mistakes is just not appropriate for big curators of data. Still, I think it's worth trying.

On the other hand, there are real benefits. In certain fields like the sciences, it can be extremely difficult to find books by women; this search engine is one of the only ways I know to find and arrange them from a big corpus (about 1,000,000 books, which are broadly representative of university library holdings). And although the data won't be perfect, I can't emphasize the degree to which this doesn't matter for the sorts of questions that can usefully be asked of it. If there are substantial differences between writing by the two genders, they will show up with a 90% accurate classifier, just more weakly.

## Those disclaimers out of the way: let me know if you find anything interesting. I'll release some basic statistics on the genre distributions, usage of personal pronouns, and so forth once I get a chance.

### Comments:

#### First and last names are available in all the hist...

[Evan Roberts](https://www.blogger.com/profile/11535512581510397532 'noreply@blogger.com') - <time datetime="2012-05-07T14:14:07.725-04:00">May 1, 2012</time>

First and last names are available in all the historical samples (1930 and earlier), and will be available in 1940 soon.

<hr />
#### You're right: it's as clear as day on the ...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-05-07T14:21:05.274-04:00">May 1, 2012</time>

You're right: it's as clear as day on the IPUMS web site. I have no idea why I thought they weren't.

<hr />
#### Instead of guessing at author gender, why not look...
[Unknown](https://www.blogger.com/profile/05658717311518859311) - <time datetime="2012-05-08T16:55:10.587-04:00">May 2, 2012</time>

Instead of guessing at author gender, why not look them up in Freebase for those which are available and only fall back to guessing if you don't get a hit?

You can lookup by LC NAF, OpenLibrary and a bunch of other IDs. There's also http://genderednames.freebaseapps.com/index?name=Sue

<hr />
#### Yeah, this is a good question. Open Library links ...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-05-08T17:47:29.810-04:00">May 2, 2012</time>

Yeah, this is a good question. Open Library links on a few (very few--less than 1%, if I recall correctly) authors to wikipedia pages; those are the only ones that seem like they'd be easy to link to an entity defined in some linked open data repository. With the rest, moving from name to shared entity is going to be pretty imprecise.

But more to the point: there about 450,000 unique author ids in the OL, most of whom wrote a single book and died before 1930. The majority of these, a little random checking shows, don't show up at all in Freebase, and most of those that do (like [this one, that I pulled randomly from the catalog](http://www.freebase.com/view/en/francois_lenormant)) are almost certainly [just machine categorized by the genderednames app themselves](http://blog.freebase.com/2009/09/09/gender-and-names-in-freebase/). So it's basically whether I want to use my own guessing system for everything, or use someone else's for some fraction (20-30%, I'd hazard?) of uncertain composition. Seems cleaner just to use the one, particularly because I want to have the 97% threshold, which freebase doesn't. Plus, for my sample 1910 names are a better classifying set than all the names in freebase. I don't think there's anything more complicated going on the freebase classifier, but I might be wrong about that.

What we really need is a good multidimensional classifier that would work off whatever available data you had about birth year, nationality, region, and so on. That would probably be easy enough to build off freebase, although I'd want to check it off census data since just using famous people is problematic (and probably skews everything male).

Another thing Freebase would be good for, potentially, is getting a list of female authors with male names: I'm really curious about the degree to which they write differently than women writing as women. I'll have to think about that some more.

<hr />
#### (this is a follow-up to my post below, which I put...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2012-05-08T18:18:50.170-04:00">May 2, 2012</time>

(this is a follow-up to my post below, which I put in the wrong place);

I just logged onto Freebase and classified a few genders myself to see what it was like--I see I may be wrong that machine tagging is predominant, and that a lot of it is likely scanning the wikipedia article for gender clues and then entering it in. Which is pretty valuable. That should be better in a lot of cases than just automatically classifying. So the question is just

1. Whether enough OL authors are in freebase to make it worth the time entering them.
2. Whether a good gender classifier based on census data including location, etc., would be better than a good one based on freebase.
3. Whether I should just keep freebase independent as a check on the methodology.
<hr />

#### I'm a very non-technical person that is trying...

[Anonymous](#) - <time datetime="2012-05-29T10:09:56.889-04:00">May 2, 2012</time>

I'm a very non-technical person that is trying to find out (even just roughly) the % of female vs male authors (globally or nationally) can you give any indication of this?

<hr />
