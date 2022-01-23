---
id: 407
title: Rate My Professor
date: 2015-02-06T21:47:21+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=407
url: /2015/02/06/rate-my-professor/
categories:
  - Bookworm
---
Just some quick FAQs on my[ professor evaluations visualization](http://benschmidt.org/profGender): adding new ones to the front, so start with 1 if you want the important ones.

-3 (addition): The largest and in many ways most interesting confound on this data is the gender of the _reviewer_. This is not available in the set, and there is strong reason to think that men tend to have more men in their classes and women more women. A lot of this effect is solved by breaking down by discipline, where faculty and student gender breakdowns are probably similar; but even within disciplines, I think the effect exists. (Because more women teach at women&#8217;s colleges, because men teach subjects like military history than male students tend to overtake, etc). Some results may be entirely due to this phenomenon, (for instance, the overuse of &#8220;the&#8221; in reviews of male professors). But even if it were possible to adjust for this, it would only be partially justified. If women are reviewed differently because a different sort of student takes their courses, the fact of the difference in their evaluations remains.

-2 (addition): This  no peer review, and I wouldn&#8217;t describe this as a &#8220;study&#8221; in anything other than the most colloquial sense of the word. (It won&#8217;t be going on my CV, for instance.) A much more rigorous study of gender bias was <a href="http://www.slate.com/blogs/xx_factor/2014/12/09/gender_bias_in_student_evaluations_professors_of_online_courses_who_present.html" target="_blank">recently published out of NCSU</a>. Statistical significance is a somewhat dicey proposition in this set; given that I downloaded all of the ratings I could find, almost any queries that show visual results on the charts are &#8220;true&#8221; as statements of the form &#8220;women are described as x more than men are on rateMyProfessor.com.&#8221; But given the many, many peculiarities of that web site, there&#8217;s no way to generalize from it to student evaluations as used inside universities. (Unless, God forbid, there&#8217;s a school that actually looks at RMP during T&P evaluations.) I would be pleased if it shook loose some further study by people in the field.

-1. (addition): The scores are normalized by gender and field. But some people have reasonably asked what the overall breakdown of the numbers is. Here&#8217;s a chart. The largest fields are about 750,000 reviews apiece for female English and male math professors. (Blue is female here and orange male&#8211;those are the defaults from alphabetical order, which I switched for the overall visualization). The smallest numbers on the chart, which you should trust the least, are about 25,000 reviews for female engineering and physics professors.

![](/wp-content/uploads/2015/02/Screen-Shot-2015-02-07-at-10.16.38-AM.png)

0. (addition): RateMyProfessor excludes certain words from reviews: including, as far as I can tell, &#8220;bitch,&#8221; &#8220;alcoholic,&#8221; &#8220;racist,&#8221; and &#8220;sexist.&#8221; (Plus all the four letter words you might expect.) Sometimes you&#8217;ll still find those words typing them into the chart. That&#8217;s because RMP&#8217;s filters seem not to be case-sensitive, so &#8220;Sexist&#8221; sails through, while &#8220;sexist&#8221; doesn&#8217;t appear once in the database. For anything particularly toxic, check the X axis to make sure it&#8217;s used at a reasonable level. For four letter words, students occasionally type asterisks, so you can get some larger numbers by typing, for example, &#8220;sh *&#8221; instead of &#8220;shit.&#8221;

1. I&#8217;ve been holding it for a while because I&#8217;ve been planning to write up a longer analysis for somewhere, and just haven&#8217;t got around to it. Hopefully I&#8217;ll do this soon: one of the reasons I put it up is to see what other people look for.

2. The reviews were scraped from ratemyprofessor.com slowly over a couple months this spring, in accordance with their robots.txt protocol. I&#8217;m not now redistributing any of the underlying text. So unfortunately I don&#8217;t feel comfortable sharing it with anyone else in raw form.

3. Gender was auto-assigned using Lincoln Mullen&#8217;s [gender package](http://lincolnmullen.com/blog/gender-package-now-on-cran/). There are plenty of mistakes&#8211;probably one in sixty people are tagged with the wrong gender because they&#8217;re a man named &#8220;Ashley,&#8221; or something.

4. 14 million is the number of reviews in the database, it probably overstates the actual number in this visualization. There are a lot of departments outside the top 20 I have here.

5. There are other ways of looking at the data other than this simple visualization: I&#8217;ve talked a little bit at conferences and elsewhere about, for example, using Dunning Log-Likelihood to pull out useful comparisons (for instance, [here, of negative and positive words in history and comp. sci. reviews](http://benschmidt.org/2014/09/11/simpsons-2/).) without needing to brainstorm terms.

6. Topic models on this dataset using vanilla sets are remarkably uninformative.

7.People still use RateMyProfessor, though usage has dropped since its peak in 2005. Here&#8217;s a chart of reviews by month. (It&#8217;s intensely periodic around the end of the semester.

&nbsp;

![](/wp-content/uploads/2015/02/By-Month.png)

&nbsp;

&nbsp;

&nbsp;

8. This includes many different types of schools, but is particularly heavy on masters and community colleges in the most represented schools. Here&#8217;s a bar chart of the top 50 or so institutions:

&nbsp;

![](/wp-content/uploads/2015/02/top-schools.png)