---
title: Day of DH Liveblog, 2022
tags:
  - Digital Humanities
featured: false
draft: false
date: 2022-03-28
---

:::thread

:::tweet
I've never done the "Day of DH" tradition where people explain what, exactly, it means to have a job in digital humanities. But today looks to be a pretty DH-full day, so I think, in these last days of Twitter, I'll give it a shot. (thread)
:::

:::tweet
We'll start it at the beginning--1:30 or so AM, finally sent out an e-mail I'd been procrastinating on to the college grants administrator for a public humanities project about immigrant histories I'm running with @ellennoonan and Sibylle Fischer.
:::

:::tweet
We've had NYU funding as a Bennett-Polonksy Humanities Lab (https://nyuhumanities.org/program/asylum-h-lab-2020-2021/) to this point, but presenting to the history department last month clarified the use in making one of our primary sorts of records--A files--more accessible to historians and family researchers.
:::

:::tweet
But that will take some real institutional support, because the stuff we've obtained--legally!--from US customs and immigration in our trial run is so shockingly personal in a lot of cases that I can't really share it yet.
:::

:::tweet
("Yet" is the wrong word--can't ethically share in my lifetime, probably. But there are still really important reasons to work on auditing these records especially. If you're a naturalized citizen or permanent resident and want any help getting your own A-file, let me know!)
:::

:::tweet
OK, skipping to about 9:50 AM. (Late start b/c the first-grader had a school event and my wife teaches Thursday AM). Today's first teaching, for my class https://benschmidt.org/WWD22 will be focused on 19C directories from the NYPL.
:::

:::tweet
Nick Wolf and @bertspaan digitized these years ago, but there's more to do with them. A couple weeks ago @SWrightKennedy shared a preview of Columbia's
great new geolocation data about 19C New York...
https://mappinghny.com/about/
:::

:::tweet
And yesterday I finally pushed a full pipeline bringing the last two weeks of student work together for doing geo-matching and cleaning of these to the github repo. https://github.com/HumanitiesDataAnalysis/Directories . This should allow some amazing analysis of economic geography, name types, etc.
:::

:::tweet
And yesterday I finally pushed a full pipeline bringing the last two weeks of student work together for doing geo-matching and cleaning of these to the github repo. https://github.com/HumanitiesDataAnalysis/Directories . This should allow some amazing analysis of economic geography, name types, etc.
:::

:::tweet
So now we've got 8.3m individual people for every year from 1850-1889 queued up and ready for a variety of analyses. I want to send the students a map to show how all their R code is paying off, but the deepscatter module is breaking--only one of the filters is working here.
:::

:::tweet
I spend 40 minutes poking in the web code there to try to refactor the code to get the interface working right, but this isn't really relevant for the class right now--more something for the summer, I guess. So I give up and decide to do this DH tweeting instead.
:::

:::tweet
Because of the whole "Twitter is almost over" thing, but some lingering guilt about not blogging enough, I decide that a "Day of DH" post should really be a blog first--so let's finally structure some markdown for a twitter thread that can go on benschmidt.org.
:::

:::tweet
It takes a surprising amount of mucking around with the svelte-kit settings to get things publishing correctly, and I have to remember my own markdown naming conventions. But after a few minutes, we've got full recursion. https://benschmidt.org/post/2022-03-28-day-of-dh/day-of-dh-22/
:::

:::tweet
Whoops, or not... Time to muck with svelte-kit a little more...
:::

:::tweet
Well, this is embarassing but typical. Turns out there was a bug in the bleeding-edge svelte-kit build that broke trailing slash behavior in URLs. Because 'https://benschmidt.org/post/2022-03-19-better-texts/' is different from 'https://benschmidt.org/post/2022-03-19-better-texts.' Finally fixed.
:::

:::tweet
Insane levels of debugging is a real pain and occupational hazard. But to be honest, I don't know how anyone could responsibly teach this stuff without doing this sort of rebuilding and rescaling all the time. Every one of those things is kind of interesting and builds up ability to fix others' code...
:::

:::tweet
Insane levels of debugging is a real pain and occupational hazard. But I don't know how you can responsibly teach this stuff without these frequent rabbit holes. Every one of those things is kind of interesting and builds up ability to fix others' code...
:::

:::
