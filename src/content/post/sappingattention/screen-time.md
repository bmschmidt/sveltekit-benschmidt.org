---
title: 'Screen time!'
date: 2014-09-15T12:33:00.000-04:00
draft: false
url: /2014/09/screen-time.html
---

Here's a very fun, and for some purposes, perhaps, a very useful thing: a [Bookworm browser that lets you investigate onscreen language in about 87,000 movies and TV shows, encompassing together over 600 million words](http://movies.benschmidt.org/). (Go follow that link if you want to investigate yourself).  
  
I've been thinking about doing this for years, but some of the interest in my recent Simpsons browser and some leaps and bounds in the Bookworm platform have spurred me to finally lay it out. This comes from a very large collection of closed captions/subtitles from the website opensubtitles.org; thanks very much to them for providing a bulk download.  
  
Just as a set of line charts, this provides a nice window into changing language. I've been interested in the "need to"/"ought to" shift since [I wrote about it in Mad Men](http://www.theatlantic.com/entertainment/archive/2012/03/the-foreign-language-of-mad-men/254668/): it's quite clear in the subtitle corpus, and the ratio is much higher as of 2014 than anything Ngrams can show.  
  

[![](http://2.bp.blogspot.com/-7ZM0BymTXy8/VBcBSlrWxAI/AAAAAAAAEt0/WXeEqTDNmLM/s1600/Screenshot%2Bfrom%2B2014-09-15%2B11%3A09%3A58.png)](http://2.bp.blogspot.com/-7ZM0BymTXy8/VBcBSlrWxAI/AAAAAAAAEt0/WXeEqTDNmLM/s1600/Screenshot%2Bfrom%2B2014-09-15%2B11%3A09%3A58.png)

Add caption

  
  
  
On the other hand, you know what's going down? Any discussion of global warming. This is probably worth a longer treatment just on its own, to trace out exactly why and when this happened. (It's a phenomenon not just true in movies and TV, but also newspapers and TV news; but it's worth thinking about whether it's a culture-wide failing, or just certain sections of the media.)  
  

[![](http://4.bp.blogspot.com/-PHtZnBcGU-4/VBcIi7JGm7I/AAAAAAAAEuU/LuseNhCgIy4/s1600/warming.png)](http://4.bp.blogspot.com/-PHtZnBcGU-4/VBcIi7JGm7I/AAAAAAAAEuU/LuseNhCgIy4/s1600/warming.png)

  
Like any Bookworm browser, the metadata underneath is just as important as the size of the corpus. Thanks to IMDB.org, there is stellar movie metadata; much more consistent and in-depth than for books. You can see one example even in that chart above, actually: I've limited it to movies that were originally written in English. Movies in other languages don't show the same shift, because in most cases the translations were done after 1990: so there's no past where we translate the characters in _Tokyo Story,_ say, as saying "ought to" even though in some weird sense it might be more "accurate." There is, though, an increase after about 1998, because the epoch of DVD subtitle translations is _itself_ long enough that we can the shift in language underway.  
  

[![](http://1.bp.blogspot.com/-RZSwB4qhQT4/VBcCiFRTtzI/AAAAAAAAEt8/F4ZKSaxuZmc/s1600/Foreign%2BNeed%2Bto.png)](http://1.bp.blogspot.com/-RZSwB4qhQT4/VBcCiFRTtzI/AAAAAAAAEt8/F4ZKSaxuZmc/s1600/Foreign%2BNeed%2Bto.png)

  

  

But original language is only scratching the surface, and only really important for linguistic questions. 

  

There's all sorts of other metadata. (And I've only started converting in the IMDB files). The data has country of filming, so you can compare Hollywood to Bollywood or East Germany to West Germany (although the sample may be a bit small);  it has the filming studio, which seems useless to me but might be fun if you really know your lots.

  

On the biggest level, though, you have movies vs. television; this corpus is about half of each. For a lot of studies, it will make sense to do one or the other. I'll tell you something about "name a word" tools like this: the search logs are often dispiriting, and always deeply profane. It will get worse here: because is the first Bookworm I've seen that's actually interesting to type them into. The movie-TV swearing curve is actually quite interesting: a steady ascent for films, but a leveling off for TV after HBO's curse-heavy heyday. (One of the reasons for the TV decline may be more and more dross from basic cable showing up, though; yet more to do).

  

[![](http://2.bp.blogspot.com/-aOKpy5N83QQ/VBcGTCi_yjI/AAAAAAAAEuE/-4_Fzr7G7I0/s1600/fucking.png)](http://2.bp.blogspot.com/-aOKpy5N83QQ/VBcGTCi_yjI/AAAAAAAAEuE/-4_Fzr7G7I0/s1600/fucking.png)

  

I haven't added in MPAA ratings yet, but those might generate all sorts of queries: when did "asshole" become OK for PG-13?

  

Besides medium, I've also ported over a number of other things; the studio (useful particularly back in the Golden Age, although the list is dominated now by TV production companies). The IMDB textfiles are a strange sort of quasi-relational form (among other things, they don't actually include the IMDB master ID number, which necessitates a lot of workarounds), but if there's anything really useful in them along these lines, I'd love to hear.

  

This also makes it possible to drill down to the individual shows.

  

I love Mad Men, but Deadwood is the greatest historical TV show of them all. And it's wildly anachronistic, which is why I've never subjected it to the quantitative Prochronisms treatment. But as it happens, it--and almost every other HBO show--are in the set, and so you can get some nice tidbits such as that in its second season, "Deadwood" used the word "fucking" more times than it used the word "of."

  

[![](http://4.bp.blogspot.com/-u8U8Nfg4O8g/VBcJRlEFd7I/AAAAAAAAEuc/nJPDFuLRjSQ/s1600/Screenshot%2Bfrom%2B2014-09-15%2B11%3A41%3A06.png)](http://4.bp.blogspot.com/-u8U8Nfg4O8g/VBcJRlEFd7I/AAAAAAAAEuc/nJPDFuLRjSQ/s1600/Screenshot%2Bfrom%2B2014-09-15%2B11%3A41%3A06.png)

  

  

  

People seem to really enjoy the Simpsons browser, so I was a bit tempted to roll out a whole series; one for "Seinfeld," one for "the Sopranos," until eventually I was putting them out for "Everybody Loves Raymond" and "Gunsmoke," and people started to wonder how much time I have on my hands. But really, any individual TV show is possible just by clicking from the dropdown.\*

  

The movie equivalent of a show is, I guess, the director. So that's here too: behold how Woody Allen abandons sex and death for money starting around 1979. (The all-time low point for money, in 1977, is _Annie Hall._

  

[![](http://3.bp.blogspot.com/-HIdJbdtBnyE/VBcHXk81ANI/AAAAAAAAEuM/JPaKZ88cPaI/s1600/WoodyAllen.png)](http://3.bp.blogspot.com/-HIdJbdtBnyE/VBcHXk81ANI/AAAAAAAAEuM/JPaKZ88cPaI/s1600/WoodyAllen.png)

  

  

And as always, the Bookworm guarantee is that you can get as close to the texts as possible. In this case, that means clicking on the chart will show the movies lying behind the point; and that you can click through to IMDB for more metadata, or to open subtitles for the original text. (Which I can't redistribute, sorry.)

  

  

  

There are, as in all things like this, various missing elements and omissions.

  

The SRT files aren't perfect, nor is my parsing of them. 

*   Some SRTs list the wrong movie altogether. I've dropped all movies from the silent era because the errors are too many and too confusing back then; I'm sure there are a number from after, as well.
*   There are also problems with my parsing of the files, or text in the subtitles that's not in the movies. In most cases this isn't a big deal, but if you search for "uploaded," "subtitles," or the username of an opensubtitles user, you'll get almost entirely junk. "Internet" itself might be slightly infected, which is a term I know many people will search for immediately.
*   Transcriptions are imperfect, may have bad spellings, and may have some [eggcorns](http://en.wikipedia.org/wiki/Eggcorn). In some cases, subtitles not originally in English may have been simply machine-translated.
*   Sometimes character names and onscreen depictions of actions are in the subtitles, and sometimes they aren't.

The metadata isn't perfect. In particular, about 10,000 episodes/movies aren't linked up to IMDB metadata. These seem, at first glance, to be mostly television shows that don't use episode titles and movies identified by their foreign-language title. At some point I hope to go back and fix this.

  

Finally (and unfortunately, I think it's necessary to say this explicitly) this is no way a "comprehensive" list. It has most of the movies I can think to look for; it's coverage of television, particularly before about 2000, is wildly patchy. It has most of the classic shows, and a lot of science fiction shows that aren't classic: but it doesn't have the soaps, for instance, at least that I can see, or many of the most popular 60s and 70s dramas. It's weighted towards what people who know how to capture subtitle files want to watch on DVD. But it's probably particularly bad at answering questions like "when did zombies break into the mainstream," because the mainstreaming of zombies means we have a lot more old zombie movies than we otherwise might.

  

There's also lots of interesting stuff yet to come.

  

I haven't yet broken the movies and shows down by time in the episode; that should produce some really interesting stuff when I get an afternoon.

  

There's lots more IMDB metadata to integrate as well.

  

But for now, let me know if you find anything great. [Here's that link again.](http://movies.benschmidt.org/)

  
  
  

\* Not any TV show is available, I guess, because I arbitrarily decided to limit it to the top 50. But if there's any missing show you think should be on the list, just let me know.
---
### Comments:
#### Fantastic work. Appreciated.
[Anonymous]( "noreply@blogger.com") - <time datetime="2014-09-17T13:29:22.101-04:00">Sep 3, 2014</time>

Fantastic work. Appreciated.
<hr />
#### Great! Very interesting linguistic/philosophical/q...
[Anonymous]( "noreply@blogger.com") - <time datetime="2014-09-17T20:28:45.753-04:00">Sep 3, 2014</time>

Great! Very interesting linguistic/philosophical/quantitative :) approach. Thanks
<hr />
#### Courtesy to DVDs, all the old sitcoms and variety ...
[car tv](http://www.ranker.com/crowdranked-list/automotive-tv-shows-and-series "noreply@blogger.com") - <time datetime="2014-10-29T04:22:25.944-04:00">Oct 3, 2014</time>

Courtesy to DVDs, all the old sitcoms and variety shows can now be watched, remembered and cherished by those that remember when they were the stars of television.
<hr />
#### Go and get more new Natok, Movie, Video From
[Tanzina](https://www.blogger.com/profile/09355238537789999101 "noreply@blogger.com") - <time datetime="2014-11-04T06:20:39.086-05:00">Nov 2, 2014</time>

Go and get more new Natok, Movie, Video From  
  
Bangla Natok  
Hindi Natok  
Star Plus Natok  
Star Jalsha Natok  
Mirakkal 8  
Comedy Show  
Reality shows  
Funny video  
Mosharraf Karim Natok  
Dare 2 Dance  
New Movies
<hr />
#### Excellent article. Thanks for this kind of article...
[Minhaz](http://downloadnewmoviex.blogspot.com/ "noreply@blogger.com") - <time datetime="2014-11-05T14:11:14.969-05:00">Nov 3, 2014</time>

Excellent article. Thanks for this kind of article.  
[Download Latest Movie](http://www.downloadnewmoviex.blogspot.com/)
<hr />
#### This Is a nice post. For get more Tvshows, Bangla ...
[Anonymous]( "noreply@blogger.com") - <time datetime="2014-11-14T23:13:24.107-05:00">Nov 5, 2014</time>

This Is a nice post. For get more Tvshows, Bangla natok, Star Jalsha, Zee bangla, Star plus, Funny video, Reality shows go  
  
[Tv shows](www.freetvshows.in/).  
[Bangla Natok](www.freetvshows.in/category/bangla-natok/),  
[Mosharraf karim](www.freetvshows.in/category/bangla-natok/mosharraf-karim/),  
[Star Plus](www.freetvshows.in/category/indian-natok/star-plus-natok/),  
[Funny Video](www.freetvshows.in/category/comedy-shows/),  
[Reality Shows](www.freetvshows.in/category/reality-shows/),  
[Zee Bangla Natok](www.freetvshows.in/category/indian-natok/zee-bangla-natok/),  
[Star Jalsha Natok](www.freetvshows.in/category/indian-natok/star-jalsha-natok/),  
[Ye Hai Mohabbatein](www.freetvshows.in/category/indian-natok/star-plus-natok/ye-hai-mohabbatein/),  
[Indians Raw Star](www.freetvshows.in/category/reality-shows/singing-reality-shows/indias-raw-star-singing-reality-shows/) ,  
[Dare 2 Dance](www.freetvshows.in/category/reality-shows/dance-reality-shows/dare-2-dance/) ,  
[Mirakkel](www.freetvshows.in/category/comedy-shows/mirakkel/),  
[Awards Show](www.freetvshows.in/category/popular-video/awards-show/),
<hr />
#### Thanks for sharing this with us! Some really amazi...
[filmsmakers](https://www.blogger.com/profile/08583028876145013464 "noreply@blogger.com") - <time datetime="2014-11-16T00:36:56.833-05:00">Nov 0, 2014</time>

Thanks for sharing this with us! Some really amazing ideas.  
It’s really helpful people needing information on this topic. All the best guys Thank you for your post. This is excellent information.  
I have some relevant information you can review below.  
  
[Showbiz Junkies](http://www.showbizjunkies.com/)  
[tv recaps](http://www.showbizjunkies.com/)
<hr />
#### Thanks for showing the ranking of
[huin](https://www.blogger.com/profile/09990910746286983589 "noreply@blogger.com") - <time datetime="2014-11-24T03:50:45.814-05:00">Nov 1, 2014</time>

Thanks for showing the ranking of [funniest tv shows](http://www.ranker.com/crowdranked-list/funniest-tv-shows-ever) graphically here. I am sure these facts & figures would be greatly thoughtful for my brother, who is currently working in the survey department of TV show gallery.
<hr />
#### 
[Unknown](https://www.blogger.com/profile/15027496396085684286 "noreply@blogger.com") - <time datetime="2014-11-29T10:54:17.871-05:00">Nov 6, 2014</time>

This comment has been removed by a blog administrator.
<hr />
#### Any ranking that has Fawlty Towers and Curb your E...
[Unknown](https://www.blogger.com/profile/13816952209913667034 "noreply@blogger.com") - <time datetime="2014-12-12T12:34:35.794-05:00">Dec 5, 2014</time>

Any ranking that has Fawlty Towers and Curb your Enthusiasm 63rd and 64th cannot be taken seriously
<hr />
#### Great post. Kinda amazed re the fucking in 1950...
[Unknown](https://www.blogger.com/profile/13816952209913667034 "noreply@blogger.com") - <time datetime="2014-12-12T12:38:20.669-05:00">Dec 5, 2014</time>

Great post. Kinda amazed re the fucking in 1950's TV shows. Care to expand on this?
<hr />
#### Try doing World War 1, World War I, Werld Warre 1...
[Anonymous]( "noreply@blogger.com") - <time datetime="2015-03-13T17:53:04.667-04:00">Mar 5, 2015</time>

Try doing World War 1, World War I, Werld Warre 1, World War 1, Verlde Vorre vun, Global Fight No1, or any other misspelling you can think of. They all come out as a solid million per million words! Same for WWII!
<hr />
#### Uh, neeeever mind, what causes it is three word co...
[Anonymous]( "noreply@blogger.com") - <time datetime="2015-03-13T17:55:14.976-04:00">Mar 5, 2015</time>

Uh, neeeever mind, what causes it is three word combinations. Bug much?
<hr />
