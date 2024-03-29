---
title: 'Typical TV episodes: visualizing topics in screen time'
date: 2014-12-11T18:56:00.000-05:00
draft: false
url: /2014/12/typical-tv-episodes-visualizing-topics.html
---

The most interesting element of the [Bookworm browser for movies](http://movies.benschmidt.org/) I wrote about i[n my last post here](http://sappingattention.blogspot.com/2014/09/screen-time.html) is the possibility to delve into the episodic structure of different TV shows by dividing them up by minutes. On my website, I previously wrote about [story structures in the Simpsons](http://benschmidt.org/2014/09/11/simpsons-2/) and a [topic model of movies](http://benschmidt.org/2014/09/23/building-topic-models-into-bookworm-searches/) I made using the [general-purpose bookworm topic modeling extension](https://github.com/bmschmidt/Bookworm-Mallet). For a description of the corpus or of topic modeling, see those links.

Note: [Part II of this series, which goes into quantifying the fundamental shared elements of plot arcs, is now up here.](http://sappingattention.blogspot.com/2014/12/typical-tv-episodes-visualizing-topics.html)

In this post, I'm going to combine those two projects. What can we see by looking at the different content of TV shows? Are there elements to the ways that TV shows are laid out--common plot structures--that repeat? How thematically different is the end of a show from its beginning? I want to take a first stab at those questions by looking at a couple hundred TV shows and their structure. To do that, I:

1\. Divided a corpus of 80,000 movies and TV show episodes into 3 minute chunks, and then divided each show into 12 roughly-equal parts.  
2\. Generated a 128-topic model where each document is one of those 3-minute chunks, which should help the topics be better geared to what's on screen at any given time.  
3\. For every TV show, plotted the distribution of the **ten most common topics** with the y-axis roughly representing percent of dialogue of the show in the topic, and the x-axis corresponding to the twelfth of the show it happened in. So dialogue in minute 55 of a 60-minute show will be in chunk 11.

First a note: these images seem not to display in some browsers. If you want to zoom and can't read the legends, **right click and select "view in a new tab."**

Let's start by looking at a particularly formulaic show: **Law and Order.**

[![](http://4.bp.blogspot.com/-3nKzUS3NJ0E/VIoMF5X9jfI/AAAAAAAAE2o/qPCzQsAnEuQ/s1600/Law_%26%2BOrder.png)](http://4.bp.blogspot.com/-3nKzUS3NJ0E/VIoMF5X9jfI/AAAAAAAAE2o/qPCzQsAnEuQ/s1600/Law_%26%2BOrder.png)

The two most common topics in Law & Order are "court case Mr. trial lawyer" and "murder body blood case". Murder is strongest in the first twelfth, when the body is discovered; "court case" doesn't appear in any strength until almost halfway through, after which it grows until it takes up more than half the space by the last twelfth.

That's pretty good straight off: the process accurately captures the central structuring element of the show, which is the handoff from cops to lawyers at the 30 minute mark. (Or really, this suggests, more like the 25 minute mark). Most of the other topics are relatively constant. (It's interesting that the gun topic is constant, actually, but that's another matter). But a few change--we also get a  decrease in the topic "people kid kids talk," capturing some element of the interview process by the cops; a different conversation topic, "talk help take problem," is more associated with the lawyers. Also, the total curve is wider at the end than at the beginning; that's because we're not looking at all the words in Law & Order, just the top ten out of 127 topics. We could infer, preliminarily, that Law and Order is more thematically coherent in the last half hour than the first one: there's a lot of thematic diversity as the detectives roam around New York, but the courtroom half is always the same.

Compare the spinoffs: SVU is almost identical to the Law & Order mothership, but Criminal Intent gets to the courtroom much later and with less intensity.

[![](http://1.bp.blogspot.com/-TwpZ8Se-5dM/VIoPBmXJ6yI/AAAAAAAAFEI/jKjAF7EMp5c/s1600/Law_%26%2BOrder-%2BCriminal%2BIntent.png)](http://1.bp.blogspot.com/-TwpZ8Se-5dM/VIoPBmXJ6yI/AAAAAAAAFEI/jKjAF7EMp5c/s1600/Law_%26%2BOrder-%2BCriminal%2BIntent.png)

[![](http://1.bp.blogspot.com/-5brug0g5cuA/VIoPCJl5V0I/AAAAAAAAFEg/fPqI2vCm19c/s1600/Law_%26%2BOrder-%2BSpecial%2BVictims%2BUnit.png)](http://1.bp.blogspot.com/-5brug0g5cuA/VIoPCJl5V0I/AAAAAAAAFEg/fPqI2vCm19c/s1600/Law_%26%2BOrder-%2BSpecial%2BVictims%2BUnit.png)

See below the fold for more. Be warned: I've put a whole bunch of images into this one.

Some of the things revealed are interesting because they tell us when a show departs from its ostensible topic.

"Grey's Anatomy" (which I've never seen) appears to open as a fairly strong hospital drama, but by the end the medical content has dropped by half. It's not completely clear from the topics what's replaced it, but topics like "sorry feel really" and "remember wanted knew" grow in strength, suggesting the soapier elements get stronger through an episode.

[![](http://3.bp.blogspot.com/-A4kQDbYFFRY/VIoO5ih2-1I/AAAAAAAAFA8/0S1x3q2i2SU/s1600/Grey's_Anatomy.png)](http://3.bp.blogspot.com/-A4kQDbYFFRY/VIoO5ih2-1I/AAAAAAAAFA8/0S1x3q2i2SU/s1600/Grey's_Anatomy.png)

"Sex and the City" is similar, though less marked:the light green sex topic gets less significant through the course of the episode, though the smaller light orange "New York City" topic doesn't change quite so much.

[![](http://4.bp.blogspot.com/-e0Q6uJzlW5s/VIoPT5yo7KI/AAAAAAAAFL0/VnHVoNWa6I8/s1600/Sex_and%2Bthe%2BCity.png)](http://4.bp.blogspot.com/-e0Q6uJzlW5s/VIoPT5yo7KI/AAAAAAAAFL0/VnHVoNWa6I8/s1600/Sex_and%2Bthe%2BCity.png)

"Cheers" moves away from the bar through each episode, and into the language of apology: (this is broken into sixths rather than twelfths; see below for why).  
[![](http://2.bp.blogspot.com/-uax2SqGz3yU/VIonklVpgfI/AAAAAAAAFwM/rD-EhiJq46Q/s1600/Cheers.png)](http://2.bp.blogspot.com/-uax2SqGz3yU/VIonklVpgfI/AAAAAAAAFwM/rD-EhiJq46Q/s1600/Cheers.png)

"Friday Night Lights," on the other, tends to dispose of its football materials *either* in the first scene or between minutes 40-55.  Topics around school and conversation seem to be more concentrated between minutes 10 to 40. Part of this is probably the first-season trend towards ending the episode with the game of the week. The show's perpetual near-cancellation was always tied to the way audiences couldn't tell if it was a football show or a family drama; the way that tension is mirrored in episodic structure is interesting.

[![](http://3.bp.blogspot.com/-r-6hjratSEs/VIoO3lYze3I/AAAAAAAAFAI/WRfHnrpVftM/s1600/Friday_Night%2BLights.png)](http://3.bp.blogspot.com/-r-6hjratSEs/VIoO3lYze3I/AAAAAAAAFAI/WRfHnrpVftM/s1600/Friday_Night%2BLights.png)

Cop/lawyer shows often have the strongest signatures. Perry Mason, like Law & Order, doesn't get into the courtroom for quite a while: but unlike the more recent show, it also takes its time in getting to the murder (which usually isn't mentioned until almost a quarter of the way in.

[![](http://2.bp.blogspot.com/-7DVRViAUL9Q/VIoPNNjTC4I/AAAAAAAAFJA/xJ7ZvdOxvyY/s1600/Perry_Mason.png)](http://2.bp.blogspot.com/-7DVRViAUL9Q/VIoPNNjTC4I/AAAAAAAAFJA/xJ7ZvdOxvyY/s1600/Perry_Mason.png)

"The Mentalist" moves from actually talking about the murder not into a court case, but into topics about truth and lying, and talking about "killing" and "death" (as distinguished, interestingly, from "murder" and "body"). But above all, the last half is concerned with mumbling: the topic dominated by "uh", "Uh," and "Okay" comes to dominate.

[![](http://2.bp.blogspot.com/-eUDl1opxPpA/VIoPfVr32vI/AAAAAAAAFQM/0VGqZMmMhcg/s1600/The_Mentalist.png)](http://2.bp.blogspot.com/-eUDl1opxPpA/VIoPfVr32vI/AAAAAAAAFQM/0VGqZMmMhcg/s1600/The_Mentalist.png)

British mysteries have their own topical signature; neither cops nor lawyers, but "Inspector Professor sir Holmes." "Poirot" is typical; more about the detectives as the show proceeds, less of the upper-class "dear little course darling" chit-chat, and very little talk about how the murder actually happened until the last quarter of the episode.

[![](http://3.bp.blogspot.com/-kGj0StYQf8g/VIoOjAmnFoI/AAAAAAAAE3w/2YyUaZbL6hw/s1600/Agatha_Christie's%2BPoirot.png)](http://3.bp.blogspot.com/-kGj0StYQf8g/VIoOjAmnFoI/AAAAAAAAE3w/2YyUaZbL6hw/s1600/Agatha_Christie's%2BPoirot.png)

Other types of dramas show fewer structural signatures, at least in their most common topics.

"The West Wing," slightly decreases the amount of time it spends talking about the presidency (at least until the last scene), and talks a bit more about "talking, helping, problems." But the signal is overall quite weak.

[![](http://2.bp.blogspot.com/-_QSBTujsBMs/VIoPk3oXR5I/AAAAAAAAFSg/q7s2K76qtks/s1600/The_West%2BWing.png)](http://2.bp.blogspot.com/-_QSBTujsBMs/VIoPk3oXR5I/AAAAAAAAFSg/q7s2K76qtks/s1600/The_West%2BWing.png)

"The Wire" is distinguished by its slang and curses above all; and there's no strong sign of temporality in how they're used.

[![](http://4.bp.blogspot.com/-5m1JIez5GhE/VIoPlErxfxI/AAAAAAAAFSk/q_tDdSMPJls/s1600/The_Wire.png)](http://4.bp.blogspot.com/-5m1JIez5GhE/VIoPlErxfxI/AAAAAAAAFSk/q_tDdSMPJls/s1600/The_Wire.png)

Comedies are less easily read in this version for two reasons. The first is that their topics seem to frequently be more conversational. (A better list of stop words might fix this). For example, "The Office" does have a business topic that generally prevails: but most of the major topics are pure filler.

[![](http://4.bp.blogspot.com/-MfHdxAj4ZpY/VIoPgVnHo8I/AAAAAAAAFQs/ZWPSilyxn4g/s1600/The_Office.png)](http://4.bp.blogspot.com/-MfHdxAj4ZpY/VIoPgVnHo8I/AAAAAAAAFQs/ZWPSilyxn4g/s1600/The_Office.png)

More problematic is the way that I've chunked up the shows; first into 3 minute chunks, and _then_ into twelfth of the show. This helps to keep the total number of documents down. But for twenty-minute shows, it also means that the vagaries of rounding will make certain twelfths very rare, and the charts far too bumpy. The chart for "The Simpsons" is mostly destroyed by this: only a couple episodes seem to have a chunk four out of twelve, so outer space and hospitals seem far more important to the show than they really are.

[![](<http://3.bp.blogspot.com/-lMwMiGIqcTg/VIoPirnJEjI/AAAAAAAAFRc/Y3Gwp7hjfEE/s1600/The_Simpsons%2B(1).png>)](<http://3.bp.blogspot.com/-lMwMiGIqcTg/VIoPirnJEjI/AAAAAAAAFRc/Y3Gwp7hjfEE/s1600/The_Simpsons%2B(1).png>)

If I break it into 6 sections rather than 12, "The Simpsons" has a much clearer arc: mostly stable, with a decrease in most types of dialogue but particularly (as I noted before) in the language about "school", and an increase in the weighty topic "life death world fear heart God soul," something that's a little surprising to see in an animated comedy.

[![](http://4.bp.blogspot.com/-EMXSgUohF1U/VIooH1oHrtI/AAAAAAAAF-E/ON6ZWEk5S4M/s1600/The_Simpsons.png)](http://4.bp.blogspot.com/-EMXSgUohF1U/VIooH1oHrtI/AAAAAAAAF-E/ON6ZWEk5S4M/s1600/The_Simpsons.png)

For this reason, in the appendix below I'm showing shows divided in sixths rather than twelfths.

And just to repeat at the end: [Part II of this series, which goes into quantifying the fundamental shared elements of plot arcs, is now up here.](http://sappingattention.blogspot.com/2014/12/typical-tv-episodes-visualizing-topics.html)

Here are 150 other shows. Let me know if there's an obvious show missing.

[![](http://4.bp.blogspot.com/-ZgSn7JZBC_A/VIongrY3TGI/AAAAAAAAFuc/XCFUCOlQdks/s1600/A_Touch%2Bof%2BFrost.png)](http://4.bp.blogspot.com/-ZgSn7JZBC_A/VIongrY3TGI/AAAAAAAAFuc/XCFUCOlQdks/s1600/A_Touch%2Bof%2BFrost.png)

A Touch of Frost

[![](http://1.bp.blogspot.com/-p4CI10hOXUI/VIonfdo2eeI/AAAAAAAAFuA/pJqbpkCISQc/s1600/Agatha_Christie's%2BPoirot.png)](http://1.bp.blogspot.com/-p4CI10hOXUI/VIonfdo2eeI/AAAAAAAAFuA/pJqbpkCISQc/s1600/Agatha_Christie's%2BPoirot.png)

Agatha Christie's Poirot

[![](http://3.bp.blogspot.com/-dkr75ov7oh4/VIonfTMWP2I/AAAAAAAAFt8/erJ-vNrHybs/s1600/Alfred_Hitchcock%2BPresents.png)](http://3.bp.blogspot.com/-dkr75ov7oh4/VIonfTMWP2I/AAAAAAAAFt8/erJ-vNrHybs/s1600/Alfred_Hitchcock%2BPresents.png)

Alfred Hitchcock Presents

[![](http://4.bp.blogspot.com/-9dPsP49MEfs/VIonf2HD8aI/AAAAAAAAFuI/-DeyQoQqa8Q/s1600/Alias.png)](http://4.bp.blogspot.com/-9dPsP49MEfs/VIonf2HD8aI/AAAAAAAAFuI/-DeyQoQqa8Q/s1600/Alias.png)

Alias

[![](http://2.bp.blogspot.com/-IApilBvlxX4/VIonf5p5_7I/AAAAAAAAFuM/MRUkB30GZjE/s1600/Ally_McBeal.png)](http://2.bp.blogspot.com/-IApilBvlxX4/VIonf5p5_7I/AAAAAAAAFuM/MRUkB30GZjE/s1600/Ally_McBeal.png)

Ally McBeal

[![](http://3.bp.blogspot.com/-YbY8Y1S6CwE/VIongR6JKFI/AAAAAAAAFuY/OIdLEcmV1sI/s1600/American_Dad!.png)](http://3.bp.blogspot.com/-YbY8Y1S6CwE/VIongR6JKFI/AAAAAAAAFuY/OIdLEcmV1sI/s1600/American_Dad!.png)

American Dad!

[![](http://2.bp.blogspot.com/-71dhhicyk9A/VIongpoyMwI/AAAAAAAAFug/-skh7AJALX8/s1600/Andromeda.png)](http://2.bp.blogspot.com/-71dhhicyk9A/VIongpoyMwI/AAAAAAAAFug/-skh7AJALX8/s1600/Andromeda.png)

Andromeda

[![](http://3.bp.blogspot.com/-wnwbdD2-9yo/VIong5VfPJI/AAAAAAAAFuk/MifiwOR8g40/s1600/Angel.png)](http://3.bp.blogspot.com/-wnwbdD2-9yo/VIong5VfPJI/AAAAAAAAFuk/MifiwOR8g40/s1600/Angel.png)

Angel

[![](http://1.bp.blogspot.com/-NOxJSfEqW1o/VIonhI7ygjI/AAAAAAAAFus/_Mzhgh4XnLo/s1600/Army_Wives.png)](http://1.bp.blogspot.com/-NOxJSfEqW1o/VIonhI7ygjI/AAAAAAAAFus/_Mzhgh4XnLo/s1600/Army_Wives.png)

Army Wives

[![](http://4.bp.blogspot.com/-IYnrcWrAtwY/VIonh2436FI/AAAAAAAAFu8/oxjDm-MUeSE/s1600/As_Time%2BGoes%2BBy.png)](http://4.bp.blogspot.com/-IYnrcWrAtwY/VIonh2436FI/AAAAAAAAFu8/oxjDm-MUeSE/s1600/As_Time%2BGoes%2BBy.png)

As Time Goes By

[![](http://1.bp.blogspot.com/-eOku8gxMiAI/VIonhWtHP5I/AAAAAAAAFuw/AxLQvgH1e7U/s1600/Babylon_5.png)](http://1.bp.blogspot.com/-eOku8gxMiAI/VIonhWtHP5I/AAAAAAAAFuw/AxLQvgH1e7U/s1600/Babylon_5.png)

Babylon 5

[![](http://3.bp.blogspot.com/-BBYQFYsE0Fc/VIonpymUsII/AAAAAAAAFyg/97VkkCN4r3w/s1600/Battlestar_Galactica.png)](http://3.bp.blogspot.com/-BBYQFYsE0Fc/VIonpymUsII/AAAAAAAAFyg/97VkkCN4r3w/s1600/Battlestar_Galactica.png)

Battlestar Galactica

[![](http://2.bp.blogspot.com/-ntkF1x7hlr4/VIonhyvriuI/AAAAAAAAFvE/Dms2UlngQlM/s1600/Beverly_Hills%2C%2B90210.png)](http://2.bp.blogspot.com/-ntkF1x7hlr4/VIonhyvriuI/AAAAAAAAFvE/Dms2UlngQlM/s1600/Beverly_Hills%2C%2B90210.png)

Beverly Hills, 90210

[![](http://1.bp.blogspot.com/-4VMS3XZmIi8/VIoniIwDjhI/AAAAAAAAFvI/PjtPFkL_kv4/s1600/Bewitched.png)](http://1.bp.blogspot.com/-4VMS3XZmIi8/VIoniIwDjhI/AAAAAAAAFvI/PjtPFkL_kv4/s1600/Bewitched.png)

Bewitched

[![](http://4.bp.blogspot.com/-9v4WXXC7Xjg/VIoniZPjDnI/AAAAAAAAFvQ/1HiKc9J3d04/s1600/Big_Love.png)](http://4.bp.blogspot.com/-9v4WXXC7Xjg/VIoniZPjDnI/AAAAAAAAFvQ/1HiKc9J3d04/s1600/Big_Love.png)

Big Love

[![](http://4.bp.blogspot.com/-GTL4hgZxjaU/VIonivkIEAI/AAAAAAAAFvU/WfVQpiw4wf4/s1600/Bones.png)](http://4.bp.blogspot.com/-GTL4hgZxjaU/VIonivkIEAI/AAAAAAAAFvU/WfVQpiw4wf4/s1600/Bones.png)

Bones

[![](http://4.bp.blogspot.com/-9Wl4ubSnMXE/VIoniyB7-XI/AAAAAAAAFvc/aMvL7lsUJNk/s1600/Boston_Legal.png)](http://4.bp.blogspot.com/-9Wl4ubSnMXE/VIoniyB7-XI/AAAAAAAAFvc/aMvL7lsUJNk/s1600/Boston_Legal.png)

Boston Legal

[![](http://2.bp.blogspot.com/-h8iqap_LNH4/VIonjR205VI/AAAAAAAAFvo/0tpVSBZqroE/s1600/Brothers_%26%2BSisters.png)](http://2.bp.blogspot.com/-h8iqap_LNH4/VIonjR205VI/AAAAAAAAFvo/0tpVSBZqroE/s1600/Brothers_%26%2BSisters.png)

Brothers %26 Sisters

[![](http://2.bp.blogspot.com/-JGLC0rasPoI/VIonjW3YfmI/AAAAAAAAFvs/Wd1CNzSOzvE/s1600/Buffy_the%2BVampire%2BSlayer.png)](http://2.bp.blogspot.com/-JGLC0rasPoI/VIonjW3YfmI/AAAAAAAAFvs/Wd1CNzSOzvE/s1600/Buffy_the%2BVampire%2BSlayer.png)

Buffy the Vampire Slayer

[![](http://1.bp.blogspot.com/-FPG2n0qHO70/VIonj4VvMFI/AAAAAAAAFv0/7HWU3L0ZniU/s1600/Burn_Notice.png)](http://1.bp.blogspot.com/-FPG2n0qHO70/VIonj4VvMFI/AAAAAAAAFv0/7HWU3L0ZniU/s1600/Burn_Notice.png)

Burn Notice

[![](http://3.bp.blogspot.com/-cY8pF8QneUw/VIonkjnGLhI/AAAAAAAAFwI/1z9lZfDJw_E/s1600/Charmed.png)](http://3.bp.blogspot.com/-cY8pF8QneUw/VIonkjnGLhI/AAAAAAAAFwI/1z9lZfDJw_E/s1600/Charmed.png)

Charmed

[![](http://2.bp.blogspot.com/-uax2SqGz3yU/VIonklVpgfI/AAAAAAAAFwM/rD-EhiJq46Q/s1600/Cheers.png)](http://2.bp.blogspot.com/-uax2SqGz3yU/VIonklVpgfI/AAAAAAAAFwM/rD-EhiJq46Q/s1600/Cheers.png)

Cheers

[![](http://1.bp.blogspot.com/-w8cm-HwzUVw/VIonlOcUjoI/AAAAAAAAFwY/IA0i4zl02e4/s1600/Chuck.png)](http://1.bp.blogspot.com/-w8cm-HwzUVw/VIonlOcUjoI/AAAAAAAAFwY/IA0i4zl02e4/s1600/Chuck.png)

Chuck

[![](http://2.bp.blogspot.com/-NdnR4Tuuwbg/VIonl2scljI/AAAAAAAAFwo/vdCZve7SyhI/s1600/Cold_Case.png)](http://2.bp.blogspot.com/-NdnR4Tuuwbg/VIonl2scljI/AAAAAAAAFwo/vdCZve7SyhI/s1600/Cold_Case.png)

Cold Case

[![](http://3.bp.blogspot.com/-iMnt9FnDRF4/VIonlvJpEuI/AAAAAAAAFwk/X5t_LF1Q-HI/s1600/Columbo.png)](http://3.bp.blogspot.com/-iMnt9FnDRF4/VIonlvJpEuI/AAAAAAAAFwk/X5t_LF1Q-HI/s1600/Columbo.png)

Columbo

[![](http://4.bp.blogspot.com/-cowMqqrsoCs/VIonl0WgeCI/AAAAAAAAFww/NfIsHNCi-bA/s1600/Crossing_Jordan.png)](http://4.bp.blogspot.com/-cowMqqrsoCs/VIonl0WgeCI/AAAAAAAAFww/NfIsHNCi-bA/s1600/Crossing_Jordan.png)

Crossing Jordan

[![](http://1.bp.blogspot.com/-5-f-nSyYMmg/VIonj8L6dRI/AAAAAAAAFv4/XuXC4SUPtuU/s1600/CSI-_Crime%2BScene%2BInvestigation.png)](http://1.bp.blogspot.com/-5-f-nSyYMmg/VIonj8L6dRI/AAAAAAAAFv4/XuXC4SUPtuU/s1600/CSI-_Crime%2BScene%2BInvestigation.png)

CSI- Crime Scene Investigation

[![](http://2.bp.blogspot.com/-Z1UFLs_hFRk/VIonkHgW79I/AAAAAAAAFv8/lefRyo8FUsQ/s1600/CSI-_Miami.png)](http://2.bp.blogspot.com/-Z1UFLs_hFRk/VIonkHgW79I/AAAAAAAAFv8/lefRyo8FUsQ/s1600/CSI-_Miami.png)

CSI- Miami

[![](http://3.bp.blogspot.com/-wgPosG6f-d0/VIonkWsqjFI/AAAAAAAAFwA/30pu3YCSu94/s1600/CSI-_NY.png)](http://3.bp.blogspot.com/-wgPosG6f-d0/VIonkWsqjFI/AAAAAAAAFwA/30pu3YCSu94/s1600/CSI-_NY.png)

CSI- NY

[![](http://1.bp.blogspot.com/-zFFczZfwWWw/VIonmF0UCoI/AAAAAAAAFw0/UokOi5AJ_E4/s1600/Curb_Your%2BEnthusiasm.png)](http://1.bp.blogspot.com/-zFFczZfwWWw/VIonmF0UCoI/AAAAAAAAFw0/UokOi5AJ_E4/s1600/Curb_Your%2BEnthusiasm.png)

Curb Your Enthusiasm

[![](http://4.bp.blogspot.com/-4YUKCyzI0bs/VIonmVifuHI/AAAAAAAAFw8/ZdOyXYAIqMA/s1600/Dallas.png)](http://4.bp.blogspot.com/-4YUKCyzI0bs/VIonmVifuHI/AAAAAAAAFw8/ZdOyXYAIqMA/s1600/Dallas.png)

Dallas

[![](http://3.bp.blogspot.com/-gcKcYd0HVaI/VIonmjMGwrI/AAAAAAAAFxA/V0qp3WAfCz4/s1600/Desperate_Housewives.png)](http://3.bp.blogspot.com/-gcKcYd0HVaI/VIonmjMGwrI/AAAAAAAAFxA/V0qp3WAfCz4/s1600/Desperate_Housewives.png)

Desperate Housewives

[![](http://4.bp.blogspot.com/-SeONUizwYtw/VIonm7EzGhI/AAAAAAAAFxU/2qsX19iXEJg/s1600/Dexter.png)](http://4.bp.blogspot.com/-SeONUizwYtw/VIonm7EzGhI/AAAAAAAAFxU/2qsX19iXEJg/s1600/Dexter.png)

Dexter

[![](http://1.bp.blogspot.com/-Opu7eZ2vAtk/VIonnG8Ao7I/AAAAAAAAFxM/OPnVDzSsO7s/s1600/Doctor_Who.png)](http://1.bp.blogspot.com/-Opu7eZ2vAtk/VIonnG8Ao7I/AAAAAAAAFxM/OPnVDzSsO7s/s1600/Doctor_Who.png)

Doctor Who

[![](http://2.bp.blogspot.com/-SqOtnjvgPFk/VIonnbeP4UI/AAAAAAAAFxY/XIpyMbVgoZo/s1600/Due_South.png)](http://2.bp.blogspot.com/-SqOtnjvgPFk/VIonnbeP4UI/AAAAAAAAFxY/XIpyMbVgoZo/s1600/Due_South.png)

Due South

[![](http://4.bp.blogspot.com/-PfLuluG9z7I/VIonn4R_GTI/AAAAAAAAFxk/A1tJgeW1DqM/s1600/Earth-_Final%2BConflict.png)](http://4.bp.blogspot.com/-PfLuluG9z7I/VIonn4R_GTI/AAAAAAAAFxk/A1tJgeW1DqM/s1600/Earth-_Final%2BConflict.png)

Earth- Final Conflict

[![](http://3.bp.blogspot.com/-GF5wM5yP63E/VIonoUE6TjI/AAAAAAAAFx4/lHDH1wlK_Ug/s1600/Enterprise.png)](http://3.bp.blogspot.com/-GF5wM5yP63E/VIonoUE6TjI/AAAAAAAAFx4/lHDH1wlK_Ug/s1600/Enterprise.png)

Enterprise

[![](http://2.bp.blogspot.com/-TMl3YcH0wEA/VIonoTE0YzI/AAAAAAAAFx0/j6HD-QuCu7k/s1600/Entourage.png)](http://2.bp.blogspot.com/-TMl3YcH0wEA/VIonoTE0YzI/AAAAAAAAFx0/j6HD-QuCu7k/s1600/Entourage.png)

Entourage

[![](http://1.bp.blogspot.com/-o15bKWIKuBA/VIonn7LV0ZI/AAAAAAAAFxo/YEffyiMbdgE/s1600/ER.png)](http://1.bp.blogspot.com/-o15bKWIKuBA/VIonn7LV0ZI/AAAAAAAAFxo/YEffyiMbdgE/s1600/ER.png)

ER

[![](http://1.bp.blogspot.com/-9bma1O6snS8/VIonpGOAx2I/AAAAAAAAFyI/oqJJcbeguKg/s1600/Eureka.png)](http://1.bp.blogspot.com/-9bma1O6snS8/VIonpGOAx2I/AAAAAAAAFyI/oqJJcbeguKg/s1600/Eureka.png)

Eureka

[![](http://2.bp.blogspot.com/-UHYzMHNTOEg/VIonq8CrDQI/AAAAAAAAFy0/3TuOUTZYvqI/s1600/Everwood.png)](http://2.bp.blogspot.com/-UHYzMHNTOEg/VIonq8CrDQI/AAAAAAAAFy0/3TuOUTZYvqI/s1600/Everwood.png)

Everwood

[![](http://2.bp.blogspot.com/-JyNlFAneY_E/VIonptKIxCI/AAAAAAAAFyU/RPO1EoLhAco/s1600/Everybody_Loves%2BRaymond.png)](http://2.bp.blogspot.com/-JyNlFAneY_E/VIonptKIxCI/AAAAAAAAFyU/RPO1EoLhAco/s1600/Everybody_Loves%2BRaymond.png)

Everybody Loves Raymond

[![](http://4.bp.blogspot.com/-BB4rld-WG6c/VIonqCiDeSI/AAAAAAAAFyk/FHJzKN_pedk/s1600/Family_Guy.png)](http://4.bp.blogspot.com/-BB4rld-WG6c/VIonqCiDeSI/AAAAAAAAFyk/FHJzKN_pedk/s1600/Family_Guy.png)

Family Guy

[![](http://4.bp.blogspot.com/-c0onOgP8G3Y/VIonqdN1vWI/AAAAAAAAFys/sGHm8VObuEQ/s1600/Farscape.png)](http://4.bp.blogspot.com/-c0onOgP8G3Y/VIonqdN1vWI/AAAAAAAAFys/sGHm8VObuEQ/s1600/Farscape.png)

Farscape

[![](http://3.bp.blogspot.com/-hEiucn0ZJ7g/VIonqgxgNcI/AAAAAAAAFyw/WroXYnzVGCU/s1600/Felicity.png)](http://3.bp.blogspot.com/-hEiucn0ZJ7g/VIonqgxgNcI/AAAAAAAAFyw/WroXYnzVGCU/s1600/Felicity.png)

Felicity

[![](http://1.bp.blogspot.com/-UvjERgfcGIs/VIonrL5D0lI/AAAAAAAAFy4/dqn7huSow3o/s1600/Forever_Knight.png)](http://1.bp.blogspot.com/-UvjERgfcGIs/VIonrL5D0lI/AAAAAAAAFy4/dqn7huSow3o/s1600/Forever_Knight.png)

Forever Knight

[![](http://1.bp.blogspot.com/-G3IPHQVCqxQ/VIonrBEAd2I/AAAAAAAAFy8/w1MOhDBDVpo/s1600/Foyle's_War.png)](http://1.bp.blogspot.com/-G3IPHQVCqxQ/VIonrBEAd2I/AAAAAAAAFy8/w1MOhDBDVpo/s1600/Foyle's_War.png)

Foyle's War

[![](http://2.bp.blogspot.com/-j-OHsqZw1tk/VIonrDWJJII/AAAAAAAAFzA/DuDuDh2ZOOk/s1600/Frasier.png)](http://2.bp.blogspot.com/-j-OHsqZw1tk/VIonrDWJJII/AAAAAAAAFzA/DuDuDh2ZOOk/s1600/Frasier.png)

Frasier

[![](http://4.bp.blogspot.com/-6t482Udw048/VIonrbV1TXI/AAAAAAAAFzE/qXiEs-Ryhz4/s1600/Friday_Night%2BLights.png)](http://4.bp.blogspot.com/-6t482Udw048/VIonrbV1TXI/AAAAAAAAFzE/qXiEs-Ryhz4/s1600/Friday_Night%2BLights.png)

Friday Night Lights

[![](http://4.bp.blogspot.com/-neXuDUXLx7c/VIontFg2iFI/AAAAAAAAFzw/w6EPdXy7H0I/s1600/Friends.png)](http://4.bp.blogspot.com/-neXuDUXLx7c/VIontFg2iFI/AAAAAAAAFzw/w6EPdXy7H0I/s1600/Friends.png)

Friends

[![](http://2.bp.blogspot.com/-0ohsUFceL8o/VIonr-t9EhI/AAAAAAAAFzI/n51CR98x00M/s1600/Fringe.png)](http://2.bp.blogspot.com/-0ohsUFceL8o/VIonr-t9EhI/AAAAAAAAFzI/n51CR98x00M/s1600/Fringe.png)

Fringe

[![](http://4.bp.blogspot.com/-1yGKe9gSeWY/VIonsEewXSI/AAAAAAAAFzQ/ZxfCXdV-xJo/s1600/Get_Smart.png)](http://4.bp.blogspot.com/-1yGKe9gSeWY/VIonsEewXSI/AAAAAAAAFzQ/ZxfCXdV-xJo/s1600/Get_Smart.png)

Get Smart

[![](http://3.bp.blogspot.com/-m9_MdTONdF4/VIonsPna78I/AAAAAAAAFzU/fNApD49thE4/s1600/Ghost_Whisperer.png)](http://3.bp.blogspot.com/-m9_MdTONdF4/VIonsPna78I/AAAAAAAAFzU/fNApD49thE4/s1600/Ghost_Whisperer.png)

Ghost Whisperer

[![](http://1.bp.blogspot.com/-QSX0xKkM-h4/VIonstfkoQI/AAAAAAAAFzk/x1SA62xJawE/s1600/Gossip_Girl.png)](http://1.bp.blogspot.com/-QSX0xKkM-h4/VIonstfkoQI/AAAAAAAAFzk/x1SA62xJawE/s1600/Gossip_Girl.png)

Gossip Girl

[![](http://2.bp.blogspot.com/-vmGtNPAxszE/VIonsjzJnOI/AAAAAAAAFzg/SFeMKIRHwbc/s1600/Greek.png)](http://2.bp.blogspot.com/-vmGtNPAxszE/VIonsjzJnOI/AAAAAAAAFzg/SFeMKIRHwbc/s1600/Greek.png)

Greek

[![](http://4.bp.blogspot.com/-ANpAOWw8AoU/VIontGIQhJI/AAAAAAAAFzs/55KexUcz9_U/s1600/Grey's_Anatomy.png)](http://4.bp.blogspot.com/-ANpAOWw8AoU/VIontGIQhJI/AAAAAAAAFzs/55KexUcz9_U/s1600/Grey's_Anatomy.png)

Grey's Anatomy

[![](http://1.bp.blogspot.com/-xoI8lhmk6Bc/VIont6VKx4I/AAAAAAAAF0I/ZrQzoNQgnrA/s1600/Hercules-_The%2BLegendary%2BJourneys.png)](http://1.bp.blogspot.com/-xoI8lhmk6Bc/VIont6VKx4I/AAAAAAAAF0I/ZrQzoNQgnrA/s1600/Hercules-_The%2BLegendary%2BJourneys.png)

Hercules- The Legendary Journeys

[![](http://2.bp.blogspot.com/-boOMe6jqbko/VIonu4jIFuI/AAAAAAAAF0Y/AeCJRvLiGy0/s1600/Highlander.png)](http://2.bp.blogspot.com/-boOMe6jqbko/VIonu4jIFuI/AAAAAAAAF0Y/AeCJRvLiGy0/s1600/Highlander.png)

Highlander

[![](http://3.bp.blogspot.com/-Th2pI4fOXEs/VIont1WHpfI/AAAAAAAAF0E/x5HgsUc4LNo/s1600/Hogan's_Heroes.png)](http://3.bp.blogspot.com/-Th2pI4fOXEs/VIont1WHpfI/AAAAAAAAF0E/x5HgsUc4LNo/s1600/Hogan's_Heroes.png)

Hogan's Heroes

[![](http://3.bp.blogspot.com/-1LMFprM0PNo/VIonug6oSnI/AAAAAAAAF0M/pu-n18QpifE/s1600/Home_Improvement.png)](http://3.bp.blogspot.com/-1LMFprM0PNo/VIonug6oSnI/AAAAAAAAF0M/pu-n18QpifE/s1600/Home_Improvement.png)

Home Improvement

[![](http://3.bp.blogspot.com/-hToJxk_-BqI/VIonu1UVM9I/AAAAAAAAF0U/tAgz5J29RNc/s1600/House_M.D..png)](http://3.bp.blogspot.com/-hToJxk_-BqI/VIonu1UVM9I/AAAAAAAAF0U/tAgz5J29RNc/s1600/House_M.D..png)

House M.D.

[![](http://2.bp.blogspot.com/-NduIjHHNbn4/VIonvAUzo6I/AAAAAAAAF0c/RLtSLBw4dd0/s1600/How_I%2BMet%2BYour%2BMother.png)](http://2.bp.blogspot.com/-NduIjHHNbn4/VIonvAUzo6I/AAAAAAAAF0c/RLtSLBw4dd0/s1600/How_I%2BMet%2BYour%2BMother.png)

How I Met Your Mother

[![](http://4.bp.blogspot.com/-7FA3_kFroKo/VIonvUngqrI/AAAAAAAAF0g/stO070OG8zc/s1600/Hustle.png)](http://4.bp.blogspot.com/-7FA3_kFroKo/VIonvUngqrI/AAAAAAAAF0g/stO070OG8zc/s1600/Hustle.png)

Hustle

[![](http://1.bp.blogspot.com/-cavUGDGISto/VIon3M0nhSI/AAAAAAAAF3o/F9ofvX6Rh4w/s1600/In_Treatment.png)](http://1.bp.blogspot.com/-cavUGDGISto/VIon3M0nhSI/AAAAAAAAF3o/F9ofvX6Rh4w/s1600/In_Treatment.png)

In Treatment

[![](http://2.bp.blogspot.com/-Ib_Xy5W5Ans/VIonvo39fzI/AAAAAAAAF0o/NTAEdf8eYNA/s1600/Inspector_Morse.png)](http://2.bp.blogspot.com/-Ib_Xy5W5Ans/VIonvo39fzI/AAAAAAAAF0o/NTAEdf8eYNA/s1600/Inspector_Morse.png)

Inspector Morse

[![](http://1.bp.blogspot.com/-tbNktAKNRjE/VIonvlP2OTI/AAAAAAAAF0s/hMuYD6tX-Ns/s1600/JAG.png)](http://1.bp.blogspot.com/-tbNktAKNRjE/VIonvlP2OTI/AAAAAAAAF0s/hMuYD6tX-Ns/s1600/JAG.png)

JAG

[![](http://4.bp.blogspot.com/-b_f2TSjLscc/VIonwM0qLFI/AAAAAAAAF00/b5nE6Bp3Ecc/s1600/Joan_of%2BArcadia.png)](http://4.bp.blogspot.com/-b_f2TSjLscc/VIonwM0qLFI/AAAAAAAAF00/b5nE6Bp3Ecc/s1600/Joan_of%2BArcadia.png)

Joan of Arcadia

[![](http://1.bp.blogspot.com/-nj4Qd3cVFjA/VIonwHAA-DI/AAAAAAAAF04/l6s6ISMYw_I/s1600/Justice_League.png)](http://1.bp.blogspot.com/-nj4Qd3cVFjA/VIonwHAA-DI/AAAAAAAAF04/l6s6ISMYw_I/s1600/Justice_League.png)

Justice League

[![](http://4.bp.blogspot.com/-wUAG_D9Uc3E/VIonwZb7GeI/AAAAAAAAF1A/UqTaAmRGpCE/s1600/Knight_Rider.png)](http://4.bp.blogspot.com/-wUAG_D9Uc3E/VIonwZb7GeI/AAAAAAAAF1A/UqTaAmRGpCE/s1600/Knight_Rider.png)

Knight Rider

[![](http://3.bp.blogspot.com/-y2-cjTj7w9w/VIonwqDL_mI/AAAAAAAAF1E/hMirj3Tti68/s1600/Kung_Fu.png)](http://3.bp.blogspot.com/-y2-cjTj7w9w/VIonwqDL_mI/AAAAAAAAF1E/hMirj3Tti68/s1600/Kung_Fu.png)

Kung Fu

[![](http://1.bp.blogspot.com/-b4fBTll9j0w/VIonw2Dwt5I/AAAAAAAAF1M/NsGoUc51oEc/s1600/Kyle_XY.png)](http://1.bp.blogspot.com/-b4fBTll9j0w/VIonw2Dwt5I/AAAAAAAAF1M/NsGoUc51oEc/s1600/Kyle_XY.png)

Kyle XY

[![](http://2.bp.blogspot.com/-n06zMJqeOl0/VIonxMq9ILI/AAAAAAAAF1Q/SQrHKP13y_o/s1600/La_Femme%2BNikita.png)](http://2.bp.blogspot.com/-n06zMJqeOl0/VIonxMq9ILI/AAAAAAAAF1Q/SQrHKP13y_o/s1600/La_Femme%2BNikita.png)

La Femme Nikita

[![](http://1.bp.blogspot.com/-NbdPPJHh9E8/VIonxmdFnVI/AAAAAAAAF1U/mT5S8fJA3c0/s1600/Las_Vegas.png)](http://1.bp.blogspot.com/-NbdPPJHh9E8/VIonxmdFnVI/AAAAAAAAF1U/mT5S8fJA3c0/s1600/Las_Vegas.png)

Las Vegas

[![](http://2.bp.blogspot.com/-wZSOoiUz9Ro/VIonx_E3nBI/AAAAAAAAF1c/317Hk6QfDFo/s1600/Law_%26%2BOrder-%2BCriminal%2BIntent.png)](http://2.bp.blogspot.com/-wZSOoiUz9Ro/VIonx_E3nBI/AAAAAAAAF1c/317Hk6QfDFo/s1600/Law_%26%2BOrder-%2BCriminal%2BIntent.png)

Law %26 Order- Criminal Intent

[![](http://3.bp.blogspot.com/-tdyEO8nstTE/VIonyIthd-I/AAAAAAAAF1g/hXuldN2rOVk/s1600/Law_%26%2BOrder-%2BSpecial%2BVictims%2BUnit.png)](http://3.bp.blogspot.com/-tdyEO8nstTE/VIonyIthd-I/AAAAAAAAF1g/hXuldN2rOVk/s1600/Law_%26%2BOrder-%2BSpecial%2BVictims%2BUnit.png)

Law %26 Order- Special Victims Unit

[![](http://3.bp.blogspot.com/-15NsMGu9MPc/VIonyX6DCkI/AAAAAAAAF1k/Aypb25zV4jU/s1600/Law_%26%2BOrder.png)](http://3.bp.blogspot.com/-15NsMGu9MPc/VIonyX6DCkI/AAAAAAAAF1k/Aypb25zV4jU/s1600/Law_%26%2BOrder.png)

Law %26 Order

[![](http://1.bp.blogspot.com/-tOcx9SJHWms/VIony7HsdbI/AAAAAAAAF10/qLvjUiDJ1sg/s1600/Legend_of%2Bthe%2BSeeker.png)](http://1.bp.blogspot.com/-tOcx9SJHWms/VIony7HsdbI/AAAAAAAAF10/qLvjUiDJ1sg/s1600/Legend_of%2Bthe%2BSeeker.png)

Legend of the Seeker

[![](http://3.bp.blogspot.com/-Sq4IvGBlNSc/VIonylOtu3I/AAAAAAAAF1s/Z51c0xPcoGo/s1600/Lexx.png)](http://3.bp.blogspot.com/-Sq4IvGBlNSc/VIonylOtu3I/AAAAAAAAF1s/Z51c0xPcoGo/s1600/Lexx.png)

Lexx

[![](http://4.bp.blogspot.com/-8A7RcF0t0SA/VIony-x4fSI/AAAAAAAAF14/3X6FsDHM7rA/s1600/Lois_%26%2BClark-%2BThe%2BNew%2BAdventures%2Bof%2BSuperman.png)](http://4.bp.blogspot.com/-8A7RcF0t0SA/VIony-x4fSI/AAAAAAAAF14/3X6FsDHM7rA/s1600/Lois_%26%2BClark-%2BThe%2BNew%2BAdventures%2Bof%2BSuperman.png)

Lois %26 Clark- The New Adventures of Superman

[![](http://4.bp.blogspot.com/-R0YAOiarEH0/VIonzDexvxI/AAAAAAAAF2A/-G6xXHGKzBg/s1600/Lost.png)](http://4.bp.blogspot.com/-R0YAOiarEH0/VIonzDexvxI/AAAAAAAAF2A/-G6xXHGKzBg/s1600/Lost.png)

Lost

[![](http://1.bp.blogspot.com/-U9MINrmdBNw/VIonzd69xoI/AAAAAAAAF2E/BbVJX8-N9b0/s1600/MacGyver.png)](http://1.bp.blogspot.com/-U9MINrmdBNw/VIonzd69xoI/AAAAAAAAF2E/BbVJX8-N9b0/s1600/MacGyver.png)

MacGyver

[![](http://3.bp.blogspot.com/-hk9hHKe5dRI/VIonzv30CXI/AAAAAAAAF2M/GE0H7Fy5kfM/s1600/Magnum%2C_P.I..png)](http://3.bp.blogspot.com/-hk9hHKe5dRI/VIonzv30CXI/AAAAAAAAF2M/GE0H7Fy5kfM/s1600/Magnum%2C_P.I..png)

Magnum%2C P.I.

[![](http://1.bp.blogspot.com/-RTQfKjbSPow/VIon1BOipLI/AAAAAAAAF2w/kxQZqGguNFI/s1600/Malcolm_in%2Bthe%2BMiddle.png)](http://1.bp.blogspot.com/-RTQfKjbSPow/VIon1BOipLI/AAAAAAAAF2w/kxQZqGguNFI/s1600/Malcolm_in%2Bthe%2BMiddle.png)

Malcolm in the Middle

[![](http://4.bp.blogspot.com/-bWfJpRoikqk/VIon0dprpWI/AAAAAAAAF2g/SrvOAzki2l0/s1600/Married_with%2BChildren.png)](http://4.bp.blogspot.com/-bWfJpRoikqk/VIon0dprpWI/AAAAAAAAF2g/SrvOAzki2l0/s1600/Married_with%2BChildren.png)

Married with Children

[![](http://3.bp.blogspot.com/-PBmmm8no1G0/VIon0-8KTsI/AAAAAAAAF2s/q41hHLUZjEI/s1600/Medium.png)](http://3.bp.blogspot.com/-PBmmm8no1G0/VIon0-8KTsI/AAAAAAAAF2s/q41hHLUZjEI/s1600/Medium.png)

Medium

[![](http://2.bp.blogspot.com/-d14iZxT80OQ/VIon1kto11I/AAAAAAAAF3A/WxfrKskztMM/s1600/Melrose_Place.png)](http://2.bp.blogspot.com/-d14iZxT80OQ/VIon1kto11I/AAAAAAAAF3A/WxfrKskztMM/s1600/Melrose_Place.png)

Melrose Place

[![](http://4.bp.blogspot.com/-ZOU077iRfPw/VIon1ftStLI/AAAAAAAAF28/BeshfdPD0cg/s1600/Miami_Vice.png)](http://4.bp.blogspot.com/-ZOU077iRfPw/VIon1ftStLI/AAAAAAAAF28/BeshfdPD0cg/s1600/Miami_Vice.png)

Miami Vice

[![](http://3.bp.blogspot.com/-JHHthNAkzjU/VIon12Kl9DI/AAAAAAAAF3I/kI5pj8RuRYc/s1600/Midsomer_Murders.png)](http://3.bp.blogspot.com/-JHHthNAkzjU/VIon12Kl9DI/AAAAAAAAF3I/kI5pj8RuRYc/s1600/Midsomer_Murders.png)

Midsomer Murders

[![](http://1.bp.blogspot.com/-uCeBqjdFqU8/VIon2-7RlOI/AAAAAAAAF3s/xHay1AFyqFk/s1600/Mission-_Impossible.png)](http://1.bp.blogspot.com/-uCeBqjdFqU8/VIon2-7RlOI/AAAAAAAAF3s/xHay1AFyqFk/s1600/Mission-_Impossible.png)

Mission- Impossible

[![](http://4.bp.blogspot.com/-ydXz8v9FknA/VIon2So4KQI/AAAAAAAAF3Y/dWl7o0pfKd0/s1600/Monk.png)](http://4.bp.blogspot.com/-ydXz8v9FknA/VIon2So4KQI/AAAAAAAAF3Y/dWl7o0pfKd0/s1600/Monk.png)

Monk

[![](http://3.bp.blogspot.com/-ht-BgH8V6Mc/VIon4EnGJ6I/AAAAAAAAF4E/wbRSYeYNcyg/s1600/Murder%2C_She%2BWrote.png)](http://3.bp.blogspot.com/-ht-BgH8V6Mc/VIon4EnGJ6I/AAAAAAAAF4E/wbRSYeYNcyg/s1600/Murder%2C_She%2BWrote.png)

Murder%2C She Wrote

[![](http://3.bp.blogspot.com/-v5O4oP96trY/VIon3pADNzI/AAAAAAAAF30/IZ7zk_whaB0/s1600/My_Name%2BIs%2BEarl.png)](http://3.bp.blogspot.com/-v5O4oP96trY/VIon3pADNzI/AAAAAAAAF30/IZ7zk_whaB0/s1600/My_Name%2BIs%2BEarl.png)

My Name Is Earl

[![](http://4.bp.blogspot.com/-So6qxFdK80g/VIon3inrwbI/AAAAAAAAF38/Fk28kt416i0/s1600/NCIS-_Naval%2BCriminal%2BInvestigative%2BService.png)](http://4.bp.blogspot.com/-So6qxFdK80g/VIon3inrwbI/AAAAAAAAF38/Fk28kt416i0/s1600/NCIS-_Naval%2BCriminal%2BInvestigative%2BService.png)

NCIS- Naval Criminal Investigative Service

[![](http://4.bp.blogspot.com/-YGsycVBV2J8/VIon4aRrgdI/AAAAAAAAF4I/667xoX-rElU/s1600/Nip-Tuck.png)](http://4.bp.blogspot.com/-YGsycVBV2J8/VIon4aRrgdI/AAAAAAAAF4I/667xoX-rElU/s1600/Nip-Tuck.png)

Nip-Tuck

[![](http://4.bp.blogspot.com/-0iAxPWCEI64/VIon45yEEtI/AAAAAAAAF4Y/05Cz7gdrUdA/s1600/Northern_Exposure.png)](http://4.bp.blogspot.com/-0iAxPWCEI64/VIon45yEEtI/AAAAAAAAF4Y/05Cz7gdrUdA/s1600/Northern_Exposure.png)

Northern Exposure

[![](http://2.bp.blogspot.com/-98KQdAA_XBE/VIon466RYjI/AAAAAAAAF4U/B3aNscCLfos/s1600/Numb3rs.png)](http://2.bp.blogspot.com/-98KQdAA_XBE/VIon466RYjI/AAAAAAAAF4U/B3aNscCLfos/s1600/Numb3rs.png)

Numb3rs

[![](http://2.bp.blogspot.com/-TZeLrY-8afs/VIon43s0RgI/AAAAAAAAF5E/aCCarwWFbc8/s1600/NYPD_Blue.png)](http://2.bp.blogspot.com/-TZeLrY-8afs/VIon43s0RgI/AAAAAAAAF5E/aCCarwWFbc8/s1600/NYPD_Blue.png)

NYPD Blue

[![](http://3.bp.blogspot.com/-CRsaYS-k_pY/VIon5MK-7hI/AAAAAAAAF4g/Sc-_YN5v0jc/s1600/One_Tree%2BHill.png)](http://3.bp.blogspot.com/-CRsaYS-k_pY/VIon5MK-7hI/AAAAAAAAF4g/Sc-_YN5v0jc/s1600/One_Tree%2BHill.png)

One Tree Hill

[![](http://2.bp.blogspot.com/--hKCphwEOGY/VIon5XSvcnI/AAAAAAAAF4k/CkyeJcFWvZU/s1600/Only_Fools%2Band%2BHorses.....png)](http://2.bp.blogspot.com/--hKCphwEOGY/VIon5XSvcnI/AAAAAAAAF4k/CkyeJcFWvZU/s1600/Only_Fools%2Band%2BHorses.....png)

Only Fools and Horses....

[![](http://4.bp.blogspot.com/-qEWzyGNHOtI/VIon53T8h9I/AAAAAAAAF4w/jKADhw3BsCQ/s1600/Oz.png)](http://4.bp.blogspot.com/-qEWzyGNHOtI/VIon53T8h9I/AAAAAAAAF4w/jKADhw3BsCQ/s1600/Oz.png)

Oz

[![](http://4.bp.blogspot.com/-Oy0XHseT31E/VIon7A15tRI/AAAAAAAAF5Q/ffQeHTKQ_MY/s1600/Perry_Mason.png)](http://4.bp.blogspot.com/-Oy0XHseT31E/VIon7A15tRI/AAAAAAAAF5Q/ffQeHTKQ_MY/s1600/Perry_Mason.png)

Perry Mason

[![](http://2.bp.blogspot.com/-qxoAv0y-Djw/VIon6GByokI/AAAAAAAAF48/6PhB6L1zcnE/s1600/Prison_Break.png)](http://2.bp.blogspot.com/-qxoAv0y-Djw/VIon6GByokI/AAAAAAAAF48/6PhB6L1zcnE/s1600/Prison_Break.png)

Prison Break

[![](http://3.bp.blogspot.com/-2bjrh5tDzVQ/VIon6jAXT1I/AAAAAAAAF5I/dGnb_P56K8U/s1600/Private_Practice.png)](http://3.bp.blogspot.com/-2bjrh5tDzVQ/VIon6jAXT1I/AAAAAAAAF5I/dGnb_P56K8U/s1600/Private_Practice.png)

Private Practice

[![](http://4.bp.blogspot.com/-0HaIjUjAazY/VIon7P40p5I/AAAAAAAAF7I/Q3EICNwYqRQ/s1600/Psych.png)](http://4.bp.blogspot.com/-0HaIjUjAazY/VIon7P40p5I/AAAAAAAAF7I/Q3EICNwYqRQ/s1600/Psych.png)

Psych

[![](http://4.bp.blogspot.com/-A_FGyy10MkY/VIon7RplySI/AAAAAAAAF5U/z3fi1YdNPG8/s1600/ReGenesis.png)](http://4.bp.blogspot.com/-A_FGyy10MkY/VIon7RplySI/AAAAAAAAF5U/z3fi1YdNPG8/s1600/ReGenesis.png)

ReGenesis

[![](http://4.bp.blogspot.com/-m8R1RGdY6OM/VIon7un-dUI/AAAAAAAAF5Y/bvok2FEFVNE/s1600/Relic_Hunter.png)](http://4.bp.blogspot.com/-m8R1RGdY6OM/VIon7un-dUI/AAAAAAAAF5Y/bvok2FEFVNE/s1600/Relic_Hunter.png)

Relic Hunter

[![](http://4.bp.blogspot.com/-XN-H4paJqCA/VIon78oeJuI/AAAAAAAAF5c/P0gA76QTleM/s1600/Remington_Steele.png)](http://4.bp.blogspot.com/-XN-H4paJqCA/VIon78oeJuI/AAAAAAAAF5c/P0gA76QTleM/s1600/Remington_Steele.png)

Remington Steele

[![](http://1.bp.blogspot.com/-msb6diwfbio/VIon8uZvVWI/AAAAAAAAF54/13JcRFmPZlY/s1600/Rescue_Me.png)](http://1.bp.blogspot.com/-msb6diwfbio/VIon8uZvVWI/AAAAAAAAF54/13JcRFmPZlY/s1600/Rescue_Me.png)

Rescue Me

[![](http://3.bp.blogspot.com/-_b-IzZG1PWo/VIon8bYW8mI/AAAAAAAAF5w/a_RHsfBb4ZY/s1600/Roswell.png)](http://3.bp.blogspot.com/-_b-IzZG1PWo/VIon8bYW8mI/AAAAAAAAF5w/a_RHsfBb4ZY/s1600/Roswell.png)

Roswell

[![](http://2.bp.blogspot.com/--mzajYcYXAM/VIon9JaXiWI/AAAAAAAAF6A/Homr-9wxW2s/s1600/Rumpole_of%2Bthe%2BBailey.png)](http://2.bp.blogspot.com/--mzajYcYXAM/VIon9JaXiWI/AAAAAAAAF6A/Homr-9wxW2s/s1600/Rumpole_of%2Bthe%2BBailey.png)

Rumpole of the Bailey

[![](http://4.bp.blogspot.com/-WffeOTyzs8Q/VIon9XIjFgI/AAAAAAAAF6E/NyEuhC4ErXE/s1600/Scrubs.png)](http://4.bp.blogspot.com/-WffeOTyzs8Q/VIon9XIjFgI/AAAAAAAAF6E/NyEuhC4ErXE/s1600/Scrubs.png)

Scrubs

[![](http://4.bp.blogspot.com/--Zn9gvpJF0o/VIon9gpk0RI/AAAAAAAAF6I/rG0-CkZtQF4/s1600/SeaQuest_DSV.png)](http://4.bp.blogspot.com/--Zn9gvpJF0o/VIon9gpk0RI/AAAAAAAAF6I/rG0-CkZtQF4/s1600/SeaQuest_DSV.png)

SeaQuest DSV

[![](http://3.bp.blogspot.com/-HS-YEdYHHCA/VIon9h2G72I/AAAAAAAAF6Q/OOLD2s8HzPc/s1600/Seinfeld.png)](http://3.bp.blogspot.com/-HS-YEdYHHCA/VIon9h2G72I/AAAAAAAAF6Q/OOLD2s8HzPc/s1600/Seinfeld.png)

Seinfeld

[![](http://3.bp.blogspot.com/-IsgWP12ON3g/VIon9-n37lI/AAAAAAAAF6U/bdEvI6Gr9v8/s1600/Sex_and%2Bthe%2BCity.png)](http://3.bp.blogspot.com/-IsgWP12ON3g/VIon9-n37lI/AAAAAAAAF6U/bdEvI6Gr9v8/s1600/Sex_and%2Bthe%2BCity.png)

Sex and the City

[![](http://3.bp.blogspot.com/-eFywQz14Re8/VIon-U5YDrI/AAAAAAAAF6c/XoEd_yrLeEo/s1600/Six_Feet%2BUnder.png)](http://3.bp.blogspot.com/-eFywQz14Re8/VIon-U5YDrI/AAAAAAAAF6c/XoEd_yrLeEo/s1600/Six_Feet%2BUnder.png)

Six Feet Under

[![](http://3.bp.blogspot.com/-NKaSdKzZwKA/VIon-eS6zBI/AAAAAAAAF6g/qwynICpjz68/s1600/Sliders.png)](http://3.bp.blogspot.com/-NKaSdKzZwKA/VIon-eS6zBI/AAAAAAAAF6g/qwynICpjz68/s1600/Sliders.png)

Sliders

[![](http://3.bp.blogspot.com/-aA2zqKT6HzE/VIooAc8BcXI/AAAAAAAAF7Q/-QEaQxI32uU/s1600/Smallville.png)](http://3.bp.blogspot.com/-aA2zqKT6HzE/VIooAc8BcXI/AAAAAAAAF7Q/-QEaQxI32uU/s1600/Smallville.png)

Smallville

[![](http://4.bp.blogspot.com/-7ruk2raTHk0/VIon--xdWrI/AAAAAAAAF60/Rq3yJC1fRy8/s1600/South_Park.png)](http://4.bp.blogspot.com/-7ruk2raTHk0/VIon--xdWrI/AAAAAAAAF60/Rq3yJC1fRy8/s1600/South_Park.png)

South Park

[![](http://1.bp.blogspot.com/-372eeEtuTBs/VIon__hRO0I/AAAAAAAAF7A/wWMorP3_Ur8/s1600/Spin_City.png)](http://1.bp.blogspot.com/-372eeEtuTBs/VIon__hRO0I/AAAAAAAAF7A/wWMorP3_Ur8/s1600/Spin_City.png)

Spin City

[![](http://4.bp.blogspot.com/-oL3g-J_3jx4/VIooAmiGwLI/AAAAAAAAF7Y/UkV16q91utY/s1600/Star_Trek-%2BVoyager.png)](http://4.bp.blogspot.com/-oL3g-J_3jx4/VIooAmiGwLI/AAAAAAAAF7Y/UkV16q91utY/s1600/Star_Trek-%2BVoyager.png)

Star Trek- Voyager

[![](http://1.bp.blogspot.com/-4qpB98iQkhU/VIooAiHUGyI/AAAAAAAAF7U/mkbMHlxBMEc/s1600/Star_Trek.png)](http://1.bp.blogspot.com/-4qpB98iQkhU/VIooAiHUGyI/AAAAAAAAF7U/mkbMHlxBMEc/s1600/Star_Trek.png)

Star Trek

[![](http://1.bp.blogspot.com/-Ud8HxCbRjhY/VIooCIgi6GI/AAAAAAAAF78/b6B6HooXaFk/s1600/Stargate-_Atlantis.png)](http://1.bp.blogspot.com/-Ud8HxCbRjhY/VIooCIgi6GI/AAAAAAAAF78/b6B6HooXaFk/s1600/Stargate-_Atlantis.png)

Stargate- Atlantis

[![](http://3.bp.blogspot.com/-KwAsj35SstI/VIooBSTJqtI/AAAAAAAAF7s/bRsQFg7AHf4/s1600/Stargate_SG-1.png)](http://3.bp.blogspot.com/-KwAsj35SstI/VIooBSTJqtI/AAAAAAAAF7s/bRsQFg7AHf4/s1600/Stargate_SG-1.png)

Stargate SG-1

[![](http://4.bp.blogspot.com/-Umzu1LEHXaM/VIooBaTe05I/AAAAAAAAF7o/OD2Xwo1AM1E/s1600/Supernatural.png)](http://4.bp.blogspot.com/-Umzu1LEHXaM/VIooBaTe05I/AAAAAAAAF7o/OD2Xwo1AM1E/s1600/Supernatural.png)

Supernatural

[![](http://3.bp.blogspot.com/-vHo93bBX5dM/VIooDCmZNpI/AAAAAAAAF8U/NvQl996zHJ8/s1600/Survivor.png)](http://3.bp.blogspot.com/-vHo93bBX5dM/VIooDCmZNpI/AAAAAAAAF8U/NvQl996zHJ8/s1600/Survivor.png)

Survivor

[![](http://4.bp.blogspot.com/-CUqe37OVnmE/VIooCAWdY3I/AAAAAAAAF74/iVjsutmCoWo/s1600/Tales_from%2Bthe%2BCrypt.png)](http://4.bp.blogspot.com/-CUqe37OVnmE/VIooCAWdY3I/AAAAAAAAF74/iVjsutmCoWo/s1600/Tales_from%2Bthe%2BCrypt.png)

Tales from the Crypt

[![](http://1.bp.blogspot.com/-i1c8fYfOkFs/VIooConzB9I/AAAAAAAAF8M/ZMS0Qq5DHmI/s1600/That_'70s%2BShow.png)](http://1.bp.blogspot.com/-i1c8fYfOkFs/VIooConzB9I/AAAAAAAAF8M/ZMS0Qq5DHmI/s1600/That_'70s%2BShow.png)

That '70s Show

[![](http://3.bp.blogspot.com/-lA51KSuw-Sw/VIooChU4HdI/AAAAAAAAF8I/EPA0DYWSWvk/s1600/The_4400.png)](http://3.bp.blogspot.com/-lA51KSuw-Sw/VIooChU4HdI/AAAAAAAAF8I/EPA0DYWSWvk/s1600/The_4400.png)

The 4400

[![](http://3.bp.blogspot.com/-qImdK06DckA/VIooDOH-4LI/AAAAAAAAF-A/zku2PgGaM5U/s1600/The_A-Team.png)](http://3.bp.blogspot.com/-qImdK06DckA/VIooDOH-4LI/AAAAAAAAF-A/zku2PgGaM5U/s1600/The_A-Team.png)

The A-Team

[![](http://1.bp.blogspot.com/-cQppMs6LL0Q/VIooEF_xVnI/AAAAAAAAF8k/3l5ykR1LOpw/s1600/The_Closer.png)](http://1.bp.blogspot.com/-cQppMs6LL0Q/VIooEF_xVnI/AAAAAAAAF8k/3l5ykR1LOpw/s1600/The_Closer.png)

The Closer

[![](http://2.bp.blogspot.com/-YVKk0tBhD6g/VIooDQcavLI/AAAAAAAAF8g/KdlfBkX7mNY/s1600/The_Dead%2BZone.png)](http://2.bp.blogspot.com/-YVKk0tBhD6g/VIooDQcavLI/AAAAAAAAF8g/KdlfBkX7mNY/s1600/The_Dead%2BZone.png)

The Dead Zone

[![](http://4.bp.blogspot.com/--9SrTYGUCmw/VIooEYTIO_I/AAAAAAAAF8s/F3lxPIHCE88/s1600/The_Fresh%2BPrince%2Bof%2BBel-Air.png)](http://4.bp.blogspot.com/--9SrTYGUCmw/VIooEYTIO_I/AAAAAAAAF8s/F3lxPIHCE88/s1600/The_Fresh%2BPrince%2Bof%2BBel-Air.png)

The Fresh Prince of Bel-Air

[![](http://3.bp.blogspot.com/--dKFURfJ2F0/VIooEsnsnsI/AAAAAAAAF80/xVEHX7zqddk/s1600/The_Guardian.png)](http://3.bp.blogspot.com/--dKFURfJ2F0/VIooEsnsnsI/AAAAAAAAF80/xVEHX7zqddk/s1600/The_Guardian.png)

The Guardian

[![](http://1.bp.blogspot.com/-JA90oaTL-eE/VIooE9wbPkI/AAAAAAAAF88/1BeMJC4wKhk/s1600/The_Invaders.png)](http://1.bp.blogspot.com/-JA90oaTL-eE/VIooE9wbPkI/AAAAAAAAF88/1BeMJC4wKhk/s1600/The_Invaders.png)

The Invaders

[![](http://2.bp.blogspot.com/-Esqfp0SNPO0/VIooFEbINPI/AAAAAAAAF9A/-1ZXFV8on9Q/s1600/The_King%2Bof%2BQueens.png)](http://2.bp.blogspot.com/-Esqfp0SNPO0/VIooFEbINPI/AAAAAAAAF9A/-1ZXFV8on9Q/s1600/The_King%2Bof%2BQueens.png)

The King of Queens

[![](http://1.bp.blogspot.com/-PGpGtee9UlQ/VIooFcZ-B3I/AAAAAAAAF9I/pPrZhQu7IYw/s1600/The_L%2BWord.png)](http://1.bp.blogspot.com/-PGpGtee9UlQ/VIooFcZ-B3I/AAAAAAAAF9I/pPrZhQu7IYw/s1600/The_L%2BWord.png)

The L Word

[![](http://1.bp.blogspot.com/-AE35mM_IgDQ/VIooFmhEP0I/AAAAAAAAF9M/Jyy18fzkblg/s1600/The_Lost%2BWorld.png)](http://1.bp.blogspot.com/-AE35mM_IgDQ/VIooFmhEP0I/AAAAAAAAF9M/Jyy18fzkblg/s1600/The_Lost%2BWorld.png)

The Lost World

[![](http://2.bp.blogspot.com/-5xmYclNrKNc/VIooHB353CI/AAAAAAAAF9w/32RkT73jIrw/s1600/The_O.C..png)](http://2.bp.blogspot.com/-5xmYclNrKNc/VIooHB353CI/AAAAAAAAF9w/32RkT73jIrw/s1600/The_O.C..png)

The O.C.

[![](http://2.bp.blogspot.com/-7OiYKECbLks/VIooGb_PTPI/AAAAAAAAF9Y/6jfrMiO1M4Q/s1600/The_Office.png)](http://2.bp.blogspot.com/-7OiYKECbLks/VIooGb_PTPI/AAAAAAAAF9Y/6jfrMiO1M4Q/s1600/The_Office.png)

The Office

[![](http://1.bp.blogspot.com/-QP7OK0bA2oQ/VIooGifiEHI/AAAAAAAAF9o/dXQDtaCDzFQ/s1600/The_Pretender.png)](http://1.bp.blogspot.com/-QP7OK0bA2oQ/VIooGifiEHI/AAAAAAAAF9o/dXQDtaCDzFQ/s1600/The_Pretender.png)

The Pretender

[![](http://1.bp.blogspot.com/-bEf3oAg5ZzE/VIooHAMpwBI/AAAAAAAAF90/x6s1Y_DHrNg/s1600/The_Shield.png)](http://1.bp.blogspot.com/-bEf3oAg5ZzE/VIooHAMpwBI/AAAAAAAAF90/x6s1Y_DHrNg/s1600/The_Shield.png)

The Shield

[![](http://4.bp.blogspot.com/-EMXSgUohF1U/VIooH1oHrtI/AAAAAAAAF-E/ON6ZWEk5S4M/s1600/The_Simpsons.png)](http://4.bp.blogspot.com/-EMXSgUohF1U/VIooH1oHrtI/AAAAAAAAF-E/ON6ZWEk5S4M/s1600/The_Simpsons.png)

The Simpsons

[![](http://2.bp.blogspot.com/-de-OPaFzq3g/VIooIL_iD8I/AAAAAAAAF-Q/YCzy8-AjekE/s1600/The_Sopranos.png)](http://2.bp.blogspot.com/-de-OPaFzq3g/VIooIL_iD8I/AAAAAAAAF-Q/YCzy8-AjekE/s1600/The_Sopranos.png)

The Sopranos

[![](http://3.bp.blogspot.com/-EtV6ysev8Ug/VIooIA5MGUI/AAAAAAAAF-M/z3pQcLPgnNc/s1600/The_Twilight%2BZone.png)](http://3.bp.blogspot.com/-EtV6ysev8Ug/VIooIA5MGUI/AAAAAAAAF-M/z3pQcLPgnNc/s1600/The_Twilight%2BZone.png)

The Twilight Zone

[![](http://3.bp.blogspot.com/--p75APSxBns/VIooItxQKyI/AAAAAAAAF-g/R6c-SfjPcrA/s1600/The_Universe.png)](http://3.bp.blogspot.com/--p75APSxBns/VIooItxQKyI/AAAAAAAAF-g/R6c-SfjPcrA/s1600/The_Universe.png)

The Universe

[![](http://2.bp.blogspot.com/-U3sbq5ye4bQ/VIooIq5XjgI/AAAAAAAAF-Y/fFmUeIlPxvs/s1600/The_West%2BWing.png)](http://2.bp.blogspot.com/-U3sbq5ye4bQ/VIooIq5XjgI/AAAAAAAAF-Y/fFmUeIlPxvs/s1600/The_West%2BWing.png)

The West Wing

[![](http://2.bp.blogspot.com/-GkLvb1if5Cg/VIooIiub_4I/AAAAAAAAF-c/X64BlQSLRcE/s1600/The_Wire.png)](http://2.bp.blogspot.com/-GkLvb1if5Cg/VIooIiub_4I/AAAAAAAAF-c/X64BlQSLRcE/s1600/The_Wire.png)

The Wire

[![](http://1.bp.blogspot.com/-4SYFupT76Ng/VIooJOmVz4I/AAAAAAAAF-k/Ut6UvsdcHqA/s1600/The_X%2BFiles.png)](http://1.bp.blogspot.com/-4SYFupT76Ng/VIooJOmVz4I/AAAAAAAAF-k/Ut6UvsdcHqA/s1600/The_X%2BFiles.png)

The X Files

[![](http://2.bp.blogspot.com/-TauGT6lEXRM/VIooJdJfWPI/AAAAAAAAF-o/3CFdLXquhok/s1600/True_Blood.png)](http://2.bp.blogspot.com/-TauGT6lEXRM/VIooJdJfWPI/AAAAAAAAF-o/3CFdLXquhok/s1600/True_Blood.png)

True Blood

[![](http://4.bp.blogspot.com/-yrHZJlvpwVs/VIooKoi77eI/AAAAAAAAF_A/ytBURAWkkP0/s1600/Two_and%2Ba%2BHalf%2BMen.png)](http://4.bp.blogspot.com/-yrHZJlvpwVs/VIooKoi77eI/AAAAAAAAF_A/ytBURAWkkP0/s1600/Two_and%2Ba%2BHalf%2BMen.png)

Two and a Half Men

[![](http://4.bp.blogspot.com/-6oygyp_yGe4/VIooJh9o39I/AAAAAAAAF-w/yrGd9lBhEU4/s1600/Ugly_Betty.png)](http://4.bp.blogspot.com/-6oygyp_yGe4/VIooJh9o39I/AAAAAAAAF-w/yrGd9lBhEU4/s1600/Ugly_Betty.png)

Ugly Betty

[![](http://1.bp.blogspot.com/-XNBaYYj2Exk/VIooJhk8UsI/AAAAAAAAF-0/l2y7u64x35Y/s1600/Veronica_Mars.png)](http://1.bp.blogspot.com/-XNBaYYj2Exk/VIooJhk8UsI/AAAAAAAAF-0/l2y7u64x35Y/s1600/Veronica_Mars.png)

Veronica Mars

[![](http://1.bp.blogspot.com/-5nFxJ1jDwaY/VIooKPTD_AI/AAAAAAAAF-8/zMrwAfT1aJM/s1600/Waking_the%2BDead.png)](http://1.bp.blogspot.com/-5nFxJ1jDwaY/VIooKPTD_AI/AAAAAAAAF-8/zMrwAfT1aJM/s1600/Waking_the%2BDead.png)

Waking the Dead

[![](http://2.bp.blogspot.com/-D1M_jnD_Mcg/VIooKMaPGQI/AAAAAAAAF_k/jXSpFvvDqBI/s1600/Will_%26%2BGrace.png)](http://2.bp.blogspot.com/-D1M_jnD_Mcg/VIooKMaPGQI/AAAAAAAAF_k/jXSpFvvDqBI/s1600/Will_%26%2BGrace.png)

Will %26 Grace

[![](http://1.bp.blogspot.com/-rzPQYGo_kyc/VIooK13tVEI/AAAAAAAAF_E/U7K5y-lfzD8/s1600/Without_a%2BTrace.png)](http://1.bp.blogspot.com/-rzPQYGo_kyc/VIooK13tVEI/AAAAAAAAF_E/U7K5y-lfzD8/s1600/Without_a%2BTrace.png)

Without a Trace

[![](http://2.bp.blogspot.com/-kbFRlWA-qqQ/VIooLJDk-AI/AAAAAAAAF_I/sMoZ7Gxf2mE/s1600/Wonder_Woman.png)](http://2.bp.blogspot.com/-kbFRlWA-qqQ/VIooLJDk-AI/AAAAAAAAF_I/sMoZ7Gxf2mE/s1600/Wonder_Woman.png)

Wonder Woman

[![](http://4.bp.blogspot.com/-C2kd9iWHn2Y/VIooLcaQQ0I/AAAAAAAAF_M/dhVwlB9GUcY/s1600/Xena-_Warrior%2BPrincess.png)](http://4.bp.blogspot.com/-C2kd9iWHn2Y/VIooLcaQQ0I/AAAAAAAAF_M/dhVwlB9GUcY/s1600/Xena-_Warrior%2BPrincess.png)

## Xena- Warrior Princess

### Comments:

#### This looks really innovative and really valuable; ...

[Ted Underwood](https://www.blogger.com/profile/04012428899328561750 'noreply@blogger.com') - <time datetime="2014-12-11T19:32:23.387-05:00">Dec 4, 2014</time>

This looks really innovative and really valuable; I'm sure it's a method other people will want to use.

Have you tried generating models that are specific to a single show? It might not help; corpus size might be too small. On the other hand, it might reveal variation and temporal patterning within shows that currently look quite constant across time.

<hr />
#### Single-show topics would probably work. For this v...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2014-12-11T19:40:18.396-05:00">Dec 4, 2014</time>

Single-show topics would probably work. For this version, I'm sticking with the current Bookworm-Mallet interface, which is one topic model per corpus. But that might be worth changing. I built a model on the Simpsons with each text as a line of dialogue; that produced junk, but probably because the text size was too small. I suspect a single-show, three-minute-chunk model on something richer, like "The Wire," would reveal some more useful topics. (Although I just don't think there's much quantifiable about the structure of "Wire" episodes, though I might be wrong.)

One thing not noted here is that across the whole corpus--movies and everything--temporal signatures are quite strong.

Probably I've got to write another post, too, about the difference between screen time and historical time. Topic modeling has fewer problems, I think, in this domain; but there are some big ones around repeated phrases. ("To Boldly Go Where No (Man|One) has gone before", repeated a few hundred times, is for sure pushing the model in a particular direction.)

<hr />
#### This is very interesting! I would be curious to se...
[Unknown](https://www.blogger.com/profile/06327867926049101471) - <time datetime="2014-12-11T21:44:46.792-05:00">Dec 4, 2014</time>

This is very interesting! I would be curious to see a topic model of "Community" because of its "meta" nature and frequent parody. Would its "Law and Order" episode fit a pattern more like Law and Order or like other episodes of Community?

<hr />
#### Yeah, I've wondered about Community.
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2014-12-11T22:26:37.219-05:00">Dec 4, 2014</time>

Yeah, I've wondered about Community. [Here's the overall arc for it:](http://benschmidt.org/Community.png) a move away from the school, and towards sex in the middle.

What's particularly interesting there is that we know [Dan Harmon is actually writing every episode according to an 8-part pre-defined schematic.](http://channel101.wikia.com/wiki/Story_Structure_101:_Super_Basic_Shit) Which means there should be some way to track the movement around his "Story Circle," or some other Campbellian myth-archetype.

<hr />
#### Awesome. So many interesting questions here. One o...
[Ted Underwood](https://www.blogger.com/profile/04012428899328561750) - <time datetime="2014-12-11T23:09:57.409-05:00">Dec 4, 2014</time>

Awesome. So many interesting questions here. One of the things you're hinting above is that it would be possible to do this visualization also just for a generic narrative arc, and there could be lots of interesting details revealed there. Just eyeballing above, it seems that certain topics ("sorry," "remember," etc) are so to speak Act III topics. But then, maybe those patterns also change from decade to decade ... so many interesting questions!

I've noticed the problem of repeated phrases when topic modeling books as well. I've gone to a lot of trouble to address the 'running headers' at the tops of pages, because that repetition can otherwise become a significant kind of noise.

But these are all minor tuning details. It's a great method.

<hr />
#### Nice! I can't decide if I am surprised or not ...
[Unknown](https://www.blogger.com/profile/06327867926049101471) - <time datetime="2014-12-12T10:52:05.130-05:00">Dec 5, 2014</time>

Nice! I can't decide if I am surprised or not at how dominate conversational artifacts are, given the nature of the show. Perhaps this is another instance when eliminating stop words might lead to some more revealing topics? To echo Ted, these models bring up some very interesting questions. Great work!

<hr />
#### Yeah, once I feed the genre information into this ...
[Ben](https://www.blogger.com/profile/04856020368342677253) - <time datetime="2014-12-12T17:44:58.600-05:00">Dec 5, 2014</time>

Yeah, once I feed the genre information into this Bookworm instance, I'll definitely take a stab at the typical arcs for at least TV-comedy, movie-comedy, and movie-drama. (Plus maybe the Bechdel test failures compared to the non-Bechdel test ones.) I've looked at the overall arcs, and they're pretty interesting (and quite strong); "morning tomorrow night day today 00 tonight" is more than twice as strong in the first sixth than in the last one.

<hr />
#### These are brilliant, I like the way you represent ...
[David Sherlock](http://paddytherabbit.com) - <time datetime="2015-01-07T09:21:45.458-05:00">Jan 3, 2015</time>

These are brilliant, I like the way you represent change in the topics over time. How do you do the diagrams? Are you using ggplot2? Do you have any code examples you would be willing to share?

<hr />
