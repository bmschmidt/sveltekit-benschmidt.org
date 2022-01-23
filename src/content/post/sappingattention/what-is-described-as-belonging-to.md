---
title: 'What is described as belonging to the "public" versus the "government?"'
date: 2017-07-05T13:54:00.002-04:00
draft: false
url: /2017/07/what-is-described-as-belonging-to.html
---

Robert Leonard has an [op-ed in the Times today](https://www.nytimes.com/2017/07/05/opinion/trump-fox-news-media.html?action=click&pgtype=Homepage&clickSource=story-heading&module=opinion-c-col-left-region&region=opinion-c-col-left-region&WT.nav=opinion-c-col-left-region) that includes the following anecdote:  

> Out here some conservatives aren’t even calling them “public” schools anymore. They call them “government schools,” as in, “We don’t want to pay for your damn ‘government schools.’ ” They’re afraid to send their kids to them.

I'm pretty interested in the process of objects shifting from belonging to the "public" to the "government." In my [2015 interactive at the Atlantic](https://www.theatlantic.com/politics/archive/2015/01/the-language-of-the-state-of-the-union/384575/) about State of the Union addresses, I highlighted the decline of "public" from one of the most common words out of president's mouths into a comparatively rare one. And this is a shift that large digital libraries can help us better understand.  
  
  
The switch is bad if you wish for any sort of small-d democratic politics. A distinction between things controlled by the "public" and the "government" is bad; they \*should\* be the same in a democratic country. If people feel they aren't, that means that they're either resigned to the idea government is controlled by interests other than theirs (this would be the "populist" view) or that they've lost some animating public spirit (this, the "David Brooks" view).  
  
If schools become "government" run instead of "public," that's a loss. But of what sort? This seems like one of the species of questions that it's worth firing up the Google Ngrams database for: what words have shifted from government to public, or the other way around?  
  
The methodology here is pretty simple: pull every phrase "government X" and "public X" from the dataset, filter to those that appear in both forms, and then fit a linear model to the log-ratio. Essentially, this looks for words where the word appears to be undergoing a sigmoid function over time.  
  
So, for example, it used to be that "public taxes" was 99% of uses, and "government taxes" about 1%. In the late 90s (the latest period Google Ngrams is useful) it was more like 80% "government taxes", 20% "public taxes".  

[![](https://3.bp.blogspot.com/-13YSB6Zjjqg/WV0ESkUtYAI/AAAAAAAAIxA/jolOgOgioCMocM1oaf1s4SGzPyTexrhJQCLcBGAs/s640/taxes.png)](https://3.bp.blogspot.com/-13YSB6Zjjqg/WV0ESkUtYAI/AAAAAAAAIxA/jolOgOgioCMocM1oaf1s4SGzPyTexrhJQCLcBGAs/s1600/taxes.png)

  

  
Here are 12 of the most heavily-changing words over 200 years. Note that none of these actually cap out at 100%, probably in part because so much old stuff is reprinted.  
  

[![](https://4.bp.blogspot.com/-osvGBMZHCzE/WV0DImu8HyI/AAAAAAAAIw0/GAjdk88q3AI9g7ncUpIemtsSKSeATThOgCLcBGAs/s640/top.png)](https://4.bp.blogspot.com/-osvGBMZHCzE/WV0DImu8HyI/AAAAAAAAIw0/GAjdk88q3AI9g7ncUpIemtsSKSeATThOgCLcBGAs/s1600/top.png)

  

  
There's a general displacement here, but some of the track is interesting. "Reports" become ascribed to the government before "income" does. "Efforts" is fairly late as well, which suggests it takes until around the New Deal for the things that public efforts might once have addressed (poverty? morals? mineral deposit mapping?) to be firmly placed in the hands of the government.  
  
Most of these are frustratingly vague. But among the biggest changers, there is also a fair amount of physical infrastructure, which is some way more interesting. Do you feel a personal sense of ownership on walking into an official building? For most of the vaguely physical things I checked, the government-to-public ratio is rising (although note the differing y-axes here: although "government schools" is indeed becoming more common, it's now up to about 5% of uses as opposed to 50% for "government archives" or 25% for "government hospitals."  
  

[![](https://1.bp.blogspot.com/-u2DcEgD54do/WV0EGoIV8nI/AAAAAAAAIw4/3V0-JfJ6uKIPzBLZC6Igdior_EpTOP3WACLcBGAs/s640/physical.png)](https://1.bp.blogspot.com/-u2DcEgD54do/WV0EGoIV8nI/AAAAAAAAIw4/3V0-JfJ6uKIPzBLZC6Igdior_EpTOP3WACLcBGAs/s1600/physical.png)

  
(That "archives" has swung so strongly is especially interesting because it suggests that we historians are deeply complicit in the shift, even if we think schools are a public good--the Google Ngrams corpus is, after all, in large part academic writing, and it certainly is when talking about archives. But when we go to archives, we represent them not as part of a public good in whatever country they are, but as a purely arbitrary state object.)  
  
Most words shift towards "government" over this period, as the word "government" [shifts towards greater use as an adjective](https://books.google.com/ngrams/graph?content=government_ADJ&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cgovernment_ADJ%3B%2Cc0) and as it shifts to describe a more permanent entity sort of synonymous with "state." (There cannot be something as permanent as a "government hospital" in the same regime of meaning that allows the sentence "Theresa May struggles to form a government.")  
  
But: there are \*some\* words that change in the opposite direction. Here are the most interesting:  
  

[![](https://2.bp.blogspot.com/-727cuWBx9ZM/WV0lHnY44aI/AAAAAAAAIxY/Nszm_cyywiols9P_BjXrzTDnJByROInFACLcBGAs/s640/wrong_way.png)](https://2.bp.blogspot.com/-727cuWBx9ZM/WV0lHnY44aI/AAAAAAAAIxY/Nszm_cyywiols9P_BjXrzTDnJByROInFACLcBGAs/s1600/wrong_way.png)

  

  
  
"Telephones" and "reaction" are a bit of an anomaly, but "colleges," "university," and "transportation" all point to an ability of this trend to go the other direction. There is no reason not to describe the University of Michigan (say) as a "government college," yet we do not.  And "public transportation" continues to be recognized as a good independent of the government that provides it, displacing whatever "government transportation" would be. (I think it would be a mistake to assume that "government transportation" means subways and not, say, military movements, but I haven't dug into the texts on any of these).  
  
Most interesting is the "public domain," which is one of the few places where it's clearly quite easy to distinguish "public" ownership from "government" ownership, since most of the public domain is intellectual property. (Although especially in the 19th century, I think it would have been largely land.)  
  
And, of course, there are a variety of terms that haven't shifted at all, although it's hard to separate the wheat from the chaff. We don't talk about "government parks" or "government streets" or "government golf courses."  
  
Can we make synoptic statements about what's changed and what hasn't? Maybe we could; parks and schools are places of greater interaction and continuing ownership than are courts and administrative buildings. It's possible that a sensible rearguard action would be to abandon the adjective "public" altogether and insist on speaking about "government parks;" the rhetorical posture that allows "government spending" on "public schools" might help create the rhetorical space for imagining "waste, fraud, and abuse."  
  
But I have to admit that the easiest story I find to tell here is a more pessimistic one in which the administrative state slowly erodes away the spaces for the practice of self government. Lexical fixes are likely not enough.