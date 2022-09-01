---
title: 'Fresh set of eyes'
date: 2011-02-14T13:35:00.002-05:00
draft: false
url: /2011/02/fresh-set-of-eyes.html
tags:
  - pca
  - Genres
  - Featured
  - LCC classes
  - Data exploration and visualization
---

One of the most important services a computer can provide for us is a different way of reading. It's fast, bad at grammar, good at counting, and generally provides a different perspective on texts we already know in one way.

And though a text can be a book, it can also be something much larger. Take library call numbers. Library of Congress headings classifications are probably the best hierarchical classification of books we'll ever get. Certainly they're the best human-done hierarchical classification. It's literally taken decades for librarians to amass the card catalogs we have now, with their classifications of every book in every university library down to several degrees of specificity. But they're also a little foreign, at times, and it's not clear how well they'll correspond to machine-centric ways of categorizing books. I've been playing around with some of the data on LCC headings classes and subclasses with some vague ideas of what it might be useful for and how we can use categorized genre to learn about patterns in intellectual history. This post is the first part of that.

\*\*\*  
Everybody loves dendrograms, even if they don't like statistics. Here's a famous one, from the French Encylopedia.

[![](http://3.bp.blogspot.com/-5zJEyRDSLDE/TViYgH--N1I/AAAAAAAACds/MVbcozZhFZU/s320/tree.french.jpg)](http://3.bp.blogspot.com/-5zJEyRDSLDE/TViYgH--N1I/AAAAAAAACds/MVbcozZhFZU/s1600/tree.french.jpg)

(From [http://quod.lib.umich.edu/d/did](http://quod.lib.umich.edu/d/did)/: [translation](http://quod.lib.umich.edu/d/did/tree.html))

That famous tree of knowledge raises two questions for me:

1.  Is there any good way to present a long dendrogram on a printed page or computer screen? Even professional typographers have trouble setting these graphics in ways that fit neatly on a page--all that white space under "imagination" is a white flag.
2.  More seriously: Can we use data about vocabulary to create this type of tree of knowledge back together? Are brute force readings of words alone capable of getting at types of knowledge like the encylopedists hoped for? Or will we get something more like the library of congress classification, or something else entirely?

If we treat each lettered heading subclass in the Library of Congress classification as a single, long text, we can ask the computer to find similar genres based on word usage. \[I'm a little short on processing power, so I'm going to do this only on the 10,000 most common words, and limit myself to 200 random books from each genre.\]

As a reminder: dendrograms are like evolutionary trees, built from the ground up. The clustering algorithm finds similar pairs of genres based on word usage, then builds those pairs into larger groups. The height at which a group comes together shows how similar they are. So for example, BX and BV, Christian denominations and Practical Theology, are about as close in their word usage as any two genres. Outside of the groups, the order is unimportant; so LA, for example, could be at the top of this chart followed by LB and LC without losing any information, and HV is no closer to LA than it is to LB even though they appear next to each other. I thought I'd try a triangular dendrogram because it sets off the groups more elegantly. The downside is that you get line crossing occasionally, but that just accentuates how weird some genres (genealogy, which is all names, I assume) are from everything else.

Here's what we get. You can cut straight to the analysis after the chart. But if I'm right about all this 'aid to thinking' stuff, you'll probably get more out of reading it yourself.

[![](http://2.bp.blogspot.com/-uScJlpv4A2Y/TVldpXCEuzI/AAAAAAAACd0/XRUEPWAG0fo/s1600/tree+of+library+classes.png)](http://2.bp.blogspot.com/-uScJlpv4A2Y/TVldpXCEuzI/AAAAAAAACd0/XRUEPWAG0fo/s1600/tree+of+library+classes.png)

Not quite Diderot here, but it's somewhat interesting. Roughly, this divides into three main groups: one wouldn't be crazy to call them the sciences, the humanities, and genealogy. The social sciences are uneasily divided: the farthest out section of the sciences group is a cluster of law, political science, and economics: while the most distinctive elements of the humanities are the various literature classes.

Most of the time, it roughly matches an intuitive ordering. The physical sciences and technology headings cluster together, as do American and European literature, the various education classifications, etc. So much we know. It's important to see what we know confirmed, in a way.

What's interesting, though, are the 'mistakes.' The splitting apart of the H's and J's  matches my discomfort with that class. The jumble of Q, R, S, and T neatly obliterates distinctions between the sciences and technology, reuniting the practical and the applied. "LAW", a non-standard LC class that sneaks into my database, is united with KF, US law. LD, educational books about specific institutions, is dropped back into American History, where it arguably fits better.

But far and away my favorite is the cluster right in the middle, nestled among the sciences. Here it is again:

[![](http://4.bp.blogspot.com/-XokNZSy_hIs/TVlfYSeOY3I/AAAAAAAACd4/l0MnkcDE80c/s320/Screen+shot+2011-02-14+at+11.58.29+AM.png)](http://4.bp.blogspot.com/-XokNZSy_hIs/TVlfYSeOY3I/AAAAAAAACd4/l0MnkcDE80c/s1600/Screen+shot+2011-02-14+at+11.58.29+AM.png)

That's telling us that there are strong lexical similarities between hunting sciences, recreation, the history of Africa and Oceania, and military science. It's definitely the craziest grouping, but we can nonetheless see how it makes sense. Overall, the computer thinks, the history of oceania and Africa bear less in common with the rest of history, clustered up in the top of the chart, than they do geography, recreation and leisure materials, and publications about the military.

I like this not because it's a new way of categorizing, but because it's closer to our present-day ideas about high colonial historiography than to what historians of the time might have said. They wrote about the undeveloped world in the language of recreation and war, rather than in the language of history. What does it say about the unity of history, epistemologically, when the language used to describe some areas is much closer to other areas?

This is just a first stab in; it doesn't prove anything. But it is a nice illustration of a broader point. I've been saying for a while that I think statistical demonstrations of standard tropes of postmodern tropes might help to make them more persuasive, to be seen as more rigorous and less political. Strategically, I think things like this might be good for teaching; and conceptually, I think they're good for thinking even if they only lead us to analyze a little more why these similarities come up.

But what about the Diderot and D'Alembert clustering?  I'm actually a little surprised that this clustering doesn't match up a little more closely to theirs, just because by focusing on word choice I incorporate a _lot_ of information about verb tense and person. I would have thought that the big three categories of memory, philosophy, and poesy would stand out a little more for that reason. You can see how each of those would have a different set of verbs. I suspect if I changed the number of classes to represent those three more evenly, I could reproduce it better--all of these algorithms are extremely sensitive to initial inputs.

Still, there are some ways that the genres jump out. Here's a different representation: in pca space (which I tried to explain a bit [earlier](http://sappingattention.blogspot.com/2010/12/second-principals.html)) on the 10,000 most common words in the language. It's not perfect, but you can see pretty obvious and clear clustering by genre among the various subgenres in the LC classes. (I've used color to mark off a couple obvious classes). You can use the tree above or [wikipedia](http://en.wikipedia.org/wiki/Library_of_Congress_Classification) to get the names of the classes--I'm plotting just the call letters here. One thing I like about this is that the general letters-QRST for the sciences, eg.--all drift towards the center of common vocabulary usage compared to the specific genres. I'll have a lot more to say about this later (although I'm always disappointed with applications for pca space for language, which I don't think is uncommon) but for now, let me just finish by offering it as a different way of viewing the relations among genres.

[![](http://2.bp.blogspot.com/-WZ5UMT_ZPYc/TVlv-GKyZRI/AAAAAAAACeI/0FSv6NAP6xc/s1600/LC+classes+in+pca+space.png)](http://2.bp.blogspot.com/-WZ5UMT_ZPYc/TVlv-GKyZRI/AAAAAAAACeI/0FSv6NAP6xc/s1600/LC+classes+in+pca+space.png)

[  
](http://1.bp.blogspot.com/-dFYlLlbqaOY/TVlhkR6MCVI/AAAAAAAACeA/RPMmzTpSAOM/s1600/LC+classes+in+pca+space.png)

---

### Comments:

#### Awesome stuff! I've seen published articles --...

[Anonymous]("noreply@blogger.com") - <time datetime="2011-02-14T14:33:21.116-05:00">Feb 1, 2011</time>

Awesome stuff! I've seen published articles -- nay, books -- nay, lots of books! -- that contained less information than this post.

<hr />
#### Interesting work. While not a dendrogram, you mig...
[Kevin Hawkins](https://www.blogger.com/profile/07725552620057595725 "noreply@blogger.com") - <time datetime="2011-02-18T13:46:12.945-05:00">Feb 5, 2011</time>

Interesting work. While not a dendrogram, you might also be interested in http://www.hathitrust.org/visualizations\_callnumbers .

Since you mention "Library of Congress headings", let me clarify that Library of Congress Subject Headings (LCSH) and Library of Congress Classification (LCC) are two different things. LCSH is a semi-controlled vocabulary of English-language subject descriptors, with a hierarchy of terms implied through the use of dashes to separate terms from different levels in the hierarchy. These are only quasi-hierarchical. LCC, which is what you end up discussing, is a hierarchical classification system of letters and numbers that is the basis for call numbers at many libraries. The Library of Congress also provides English-language titles for the main classes (the letters) in LCC. Traditionally each item in a library collection could receive zero to many subject headings but exactly one call number.

In your dendrograms, you show the LCC class letters before the colon and the titles after the colon.

Just want to clarify for your readers in case others want to take this work further.

<hr />
#### Kevin: yeah, I really like the Hathi visualization...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-02-18T13:54:12.784-05:00">Feb 5, 2011</time>

Kevin: yeah, I really like the Hathi visualization. It goes to highlight just how much interesting data there is in catalogs alone, if they are publicly accessible. (Which they usually aren't, unfortunately.)

I'll try to clean up the language a bit, because I know I've been sloppy about classes and subclasses and all the rest. To add to your list, people should also know about LCCNs, Library of Congress Control Numbers, which are non-classifying codes to identify books, sort of like ISBNs.

<hr />
#### Ben: Again, this is great - the visuals work reall...
[Hank](https://www.blogger.com/profile/02841787256060612291 "noreply@blogger.com") - <time datetime="2011-02-19T15:53:42.653-05:00">Feb 6, 2011</time>

Ben: Again, this is great - the visuals work really well for those without the technical expertise, and they're very suggestive of your "new eyes" hopes.

I'd add one suggestion or query: have you been paying attention to discussions of methods and tools in _scientific_ classificatory disciplines? My sense is that ongoing developments in evolutionary biology and its systematic brethren (cladistics, phylogenetics) might have a lot to offer, even if it's only another "set of eyes," this time on ways forward in the development of digital weaponry.

When I was in a laboratory doing basic work on plant systematics, we sent DNA off for sequencing and then organized the code in [Sequencher](http://www.genecodes.com/). Are there any conversations going on between classifiers in the humanities and those in the natural sciences? Worth a look, perhaps...

<hr />
#### I'm guilty of mostly reading what I can unders...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-02-19T16:40:15.658-05:00">Feb 6, 2011</time>

I'm guilty of mostly reading what I can understand, but I think a lot of contemporary phylogenetics uses these sorts of clustering based on genetic distance quite heavily. (I had a friend who did old-fashioned morphology in college, and seemed to get somewhat irritated about the whole thing.) Insofar as I'm using these algorithms in R, I'm just using the table scraps from the bioinformaticists.

Also, of course, the whole culturomics project is very explicit about how much it thinks genomics has to contribute to textual scholarship. Their databases aren't set up right at the moment for this sort of classification, but I wouldn't be surprised if that's a major point of influx down the pike.

<hr />
