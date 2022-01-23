---
title: 'Diffusion patterns for news and technological events'
date: 2010-11-08T13:12:00.001-05:00
draft: false
url: /2010/11/diffusion-patterns-for-news-and.html
tags: 
- Historical memory
- Changes in language over time
- Evolution
---

An anonymous correspondent says:

> You mention in the post about evolution & efficiency that "Offhand, the evolution curve looks more the ones I see for technologies, while the efficiency curve resembles news events."  
>   
> That's a very interesting observation, and possibly a very important one if it's original to you, and can be substantiated. Do you have an example of a tech vs news event graph? Something like lightbulbs or batteris vs the Spanish American war might provide a good test case.  
>   
> Also, do you think there might be changes in how these graphs play out over a century? That is, do news events remain separate from tech stuff? Tech changes these days are often news events themselves, and distributed similarly across media.  
>   
> I think another way to put the tech vs news event could be in terms of the kind of event it is: structural change vs superficial, mid-range event vs short-term.  
>   
> Anyhow, a very interesting idea, of using the visual pattern to recognize and characterize a change. While I think your emphasis on the teaching angle (rather than research) is spot on, this could be one application of these techniques where it'd be more useful in research.

He or she is right that technology vs. news isn't quite the right way to describe it. Even in the 19C, some technology changes are news events, while others aren't. But let's look at some examples here.  

  
  

First, news events. Events aren't usually defined by nonproper nouns the way that technologies or social/intellectual movements.Even the obvious ones, like "war", don't work as well I'd like--if this database included more newspapers and magazines, that would be different. I find it baffling that loess has the use of 'war' peaking in 1860, before hostilities started.

![](http://2.bp.blogspot.com/_Pge31alC_E8/TNhLXkkdUrI/AAAAAAAACDo/T0JkwOqFT9g/s400/war.jpg)

Places can as proxies for events, but only sometimes--take three civil war sites.

  

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TNhNG5mFsaI/AAAAAAAACDw/G4r11ZdqVdQ/s400/shiloh+antietam+sumter.jpg)](http://3.bp.blogspot.com/_Pge31alC_E8/TNhNG5mFsaI/AAAAAAAACDw/G4r11ZdqVdQ/s1600/shiloh+antietam+sumter.jpg)

  

Sumter is the most common, and does about what you'd expect--rises out of obscurity from 1860 (although why the mini-spike in 1860?). The others are messier, but so rare that it's hard to make any generalizations. You're probably wondering why I left out Gettysburg:

[![](http://2.bp.blogspot.com/_Pge31alC_E8/TNhOHP__fKI/AAAAAAAACD4/Z9-tW6G0GN4/s400/gettysburg.jpg)](http://2.bp.blogspot.com/_Pge31alC_E8/TNhOHP__fKI/AAAAAAAACD4/Z9-tW6G0GN4/s1600/gettysburg.jpg)

The huge spike in 1913 would have made the previous chart unreadable. Loess regression ignores it as an outlier, but we know that it's actually the fiftieth anniversary of Lincoln's address. Both Gettysburg and Antietam spike briefly in the 60s, fall off, and then begin a slow climb back up--that says something about the way they took on more important meaning as time went on, perhaps in contrast to Shiloh. Nothing I see here makes me think less of the main themes of David Blight's great book on the civil war in American memory. The database might not be big enough, though, to let us draw inferences about words that rare. That Gettysburg peak is 1700 mentions, and Shiloh is getting about 50-100 mentions a year after the civil war. That's pretty good, but I'd have to implement book counts to see if that's all just driven by, eg., one or two histories of the civil war a year.

  

Anyway, let's say that's an OK way of characterizing a news event--the sudden impingement of a previously obscure place on the national consciousness, followed by recession that leaves it well high of the original point. Here are some for three major wars of the century covered ("Bighorn" and "Hidalgo" for the record, don't have anywhere near as much penetration into language. Plus Bighorn peaks around 1910. Again, interesting. But also indicative that this isn't a science.)

  

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TNhV5P1cRdI/AAAAAAAACEA/LMnkOdS5xfA/s400/philippines+sumter+verdun.jpg)](http://3.bp.blogspot.com/_Pge31alC_E8/TNhV5P1cRdI/AAAAAAAACEA/LMnkOdS5xfA/s1600/philippines+sumter+verdun.jpg)

  

Loess doesn't see that Verdun is already trending down by 1922, but you can.

  

So what about technologies? My imagination is failing me on them, but here are three. When I talked about technologies having slow adoption curves, I was thinking mostly of the telegraph and railroad, which I had tested before.

[![](http://3.bp.blogspot.com/_Pge31alC_E8/TNhY0wFZVsI/AAAAAAAACEI/9JONmm1Fe98/s400/telegraph+telephone+railroad.jpg)](http://3.bp.blogspot.com/_Pge31alC_E8/TNhY0wFZVsI/AAAAAAAACEI/9JONmm1Fe98/s1600/telegraph+telephone+railroad.jpg)

But that telephone line is impressive, even if the strength of the spike is driven largely by the point in 1911.

  

So I agree it's not really about technologies vs. news events--telephones can break into prominence, Antietam can slowly rise.

  

So how could we class these things? Structural vs superficial, mid-range vs. long term are true--I'd also add some sense of magnitude--does a word increase by 5% a year or 60%? But those are all just descriptors of shape, not really sociological models--ideally, I guess, we could move from the math to discover what types of words match it. How would we do that?

  

I see two ways. One is to just look at the shapes of the curves for previously obscure words that rise in prominence--we could cut off everything before it starts to go up, and then normalize the values and run some sort of least-squares comparison on the loess curves. (Or on the moving average--I'm still not totally sold on loess).

  

Another would be to come up with a number of individual dimensions that express what we talked about before: the ratio of the peak to the last available datapoint, the time between the start of the rise and the peak, the slope of the fastest-rising five years, a few other things like that. Then we could do a principle-components analysis to find words that share similar trends. In theory, this is close to the first way, but by choosing the variables used carefully we might be able to pull out the patterns that really seem important. I've always wanted to use pca more than I have in the past, so that might be the route I'll take if I pursue this. The prior way has more purity, however.