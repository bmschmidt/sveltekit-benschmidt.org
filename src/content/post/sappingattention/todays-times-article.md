---
title: "Today's Times Article"
date: 2010-12-04T15:00:00.000-05:00
draft: false
url: /2010/12/todays-times-article.html
tags:
  - Digital Humanities
  - This Blog
---

[Patricia Cohen's new article](http://www.nytimes.com/2010/12/04/books/04victorian.html?hpw=&pagewanted=all) about the digital humanities doesn't come with the rafts of crotchety comments the first one did, so unlike last time I'm not in a [defensive](http://sappingattention.blogspot.com/2010/11/moscow-and-nytimes.html) [crouch](http://sappingattention.blogspot.com/2010/11/more-on-grafton.html). To the contrary: I'm thrilled and grateful that Dan Cohen, the main subject of the article, took the time in his moment in the sun to [link to me](http://twitter.com/#!/dancohen/status/11085008676589569). The article itself is really good, not just because the Cohen-Gibbs Victorian project is so exciting, but because P. Cohen gets some thoughtful comments and the NYT graphic designers, as always, do a great job. So I just want to focus on the Google connection for now, and then I'll post my versions of the charts the Times published.

There's one strange subtext that I can't quite figure out: the secret google metadata. [Cohen says](http://twitter.com/#!/dancohen/status/11092307533111296) google has substantially better metadata than they put on their site, which makes me somewhat doubtful of just how open they _can_ be with all their resources. If Google can get a full API with access to texts and good metadata, which seems like it's a year or two off, that will obviate any need for databases like the one I've built. But if it's hampered by restrictions put on by content providers, that could cripple their ability to give the full access scholars need to engage in real dialogue with the data. [Google Trends](http://www.google.com/trends/hottrends?q=adrian+gonzalez&date=2010-12-4&sa=X) for historical terms might be worse than nothing, because it would only allow the facile sort of thinking Cohen's discouraging.\* It was a [big, messy production](http://geothought.blogspot.com/2009/11/was-google-maps-data-change-big-mistake.html) for google to wean itself from outside providers to let them do more interesting things with Maps: is metadata for historians and literature scholars going to be worth that effort for them, particularly when errors could result in copyright infringement? The Google employee in the article has a [long comment](http://bit.ly/hvMQJ0) about metadata that makes it sound like they currently have some obligations to providers, which is a bad sign. On the other hand,  Cohen seems to trust them, which is something, and it's their book-scanning and free circulation of PDFs (though not OCR) that makes all of this possible.

But given the lack of clarity on a) what Google will offer, and b) when it will offer it, I'm happy for now to be working with Internet Archive OCR on Google scans, even though their metadata is quite a headache. The completeness of the Google stuff is appealing, but for most of the actual, historical questions I can think of dealing with books (not serials, which is a whole other mess) a combination of Internet Archive sources and Library of Congress catalog information should be fine. (Not that I've made any progress towards getting them to play together since the last time I said that.)

## \*BTW, trends says the Sox just got Adrian Gonzalez? It's taking all my self-control not to dump these posts and just read baseball sites for the next two hours. Forget about more database results for today.

### Comments:

#### Ben, Let's also see some chatter about gettin...

[Hank]("noreply@blogger.com") - <time datetime="2010-12-04T15:47:43.496-05:00">Dec 6, 2010</time>

Ben,

Let's also see some chatter about getting complete runs (pre-1923) of discipline-specific journals for analysis within journal communities!

This will be a separate database, but what problems will we run into when we move from books to (a) periodicals (scientific or otherwise) or (b) Annual Reports, Minutes, and Proceedings from societies (again, scientific or otherwise)?

Seems to me this would be another angle through which to attack some of these questions that (a) might address metadata concerns and (b) might allow you to zoom in on particular "conversations" and address how meaning changes over time with a more fine-grained sample set.

<hr />
#### Encouraging to hear. I think it's deeply probl...
[Allen Riddell](http://ariddell.org "noreply@blogger.com") - <time datetime="2010-12-05T14:58:20.697-05:00">Dec 0, 2010</time>

Encouraging to hear. I think it's deeply problematic to have some scholars working on a dataset to which others don't have access. There are excellent reasons why this kind of practice is increasingly regarded as unacceptable (and not just undesirable) in the natural sciences.

That said, I will note that in my experience some of the internet archive "OCR"s of the google pdfs are \*really\* bad (i.e. much more than 20% errors). This is Google's fault for not providing high quality scans of out-of-copyright works. If it's only a few books that you need from google, I've found you can sometimes get the epub off of google and then convert that to raw text using calibre, for example. But then there's the annoying header and footer that google inserts into the epubs... which brings us back to the concerns already expressed.

<hr />
#### Allen, Good thoughts. I'll have to look at ca...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2010-12-06T17:30:52.108-05:00">Dec 1, 2010</time>

Allen,

Good thoughts. I'll have to look at calibre--I should really try a little bit of OCR to see how it works. As a historian, I don't think I'm worried about preferential access per se--even libraries have usage restrictions, let alone the politicking that surrounds access to archival materials.

The IA OCR (let's go acronym crazy) is bad, but I haven't found 20% errors; you can get an idea what mine looks like from some of my usage samples. It may be that by requiring publisher metadata, I'm getting some of their more recent scans. On the level of words, it's usable. On the level of sentences, though, it might not be--maybe eventually I'll try some language processing, but not for a while.

The headers and the footers are annoying as all hell, particularly because the watermark is faint, so you can't just scan out "google." In case anyone else is doing this sort of thing, here are the perl regexes I'm currently using to drop lines with Google pollution. I should look through my wordlist to see if any other likely candidates are getting through, but this gets some stuff, at least, and I don't think it filters out any English. I know regexes are nearly impossible to read, but maybe someone will spot a problem.

$line =~ s/^.\*digitize?d?.? by.\*$//g;  
$line =~ s/^.\*(\[vli\]j|\[gq\])oo\[gq\] ?\[il1\]\[ce\].\*$//g;

<hr />
#### I hadn't thought about the issue of access fro...
[Allen Riddell](http://ariddell.org "noreply@blogger.com") - <time datetime="2010-12-09T18:41:51.311-05:00">Dec 4, 2010</time>

I hadn't thought about the issue of access from the perspective of a historian working with restricted archives.

Just to be clear -- I'm talking about the IA OCR of google scans (scans-of-scans). Here's an example where I think there might be 10% errors (perhaps 20% was high):  
http://www.archive.org/details/sayingsanddoing02hookgoog

10% isn't a problem unless you're dealing with a smaller sample (like 50-200 texts). I can imagine an analysis of a smaller cluster of texts (say, all novels published between 1810 and 1815) being affected by it. Something to keep in mind.

Since the google header/footers are contiguous I've been using multiline regexps. One virtue of converting the epub into raw text is that there are no typos in the header/footer, so you can grab it reliably (or throw an error when it's not found). Again, I imagine this is likely more of a concern when dealing with a hundred or a thousand volumes rather than 10k+.

Great work. I'll look forward to seeing what comes next.

<hr />
