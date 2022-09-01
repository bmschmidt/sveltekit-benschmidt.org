---
title: 'Technical notes'
date: 2011-02-01T11:12:00.040-05:00
draft: false
url: /2011/02/technical-notes.html
tags:
  - Metadata
  - Featured
  - Building a Corpus
  - Resources
---

I'm changing several things about my data, so I'm going to describe my system again in case anyone is interested, and so I have a page to link to in the future.

**Platform**  
Everything is done using MySQL, Perl, and R. These are all general computing tools, not the specific digital humanities or text processing ones that various people have contributed over the years. That's mostly because the number and size of files I'm dealing with are so large that I don't trust an existing program to handle them, and because the existing packages don't necessarily have implementations for the patterns of change over time I want as a historian. I feel bad about not using existing tools, because the collaboration and exchange of tools is one of the major selling points of the digital humanities right now, and something like [Voyeur](http://voyeurtools.org/) or [MONK](http://www.monkproject.org/) has a lot of features I wouldn't necessarily think to implement on my own. Maybe I'll find some way to get on board with all that later. First, a quick note on the programs:

- R is a "strongly functional language and environment to statistically explore data sets." I've used R for years and absolutely love it. Once you load some data in, it makes it very easy to do absolutely anything--principal components analysis, loess regressions, social network analysis, map tools, etc. (There is an R text mining package, but I'm not using it because I think it would take up too much size.) The learning curve is quite steep at first, mostly because different data types don't necessarily behave the way you want them to. On the other hand, being able to interact with data makes R far more user-friendly than most true programming languages, while still being a good gateway into writing code. Unlike SPSS, Mathematica, STATA, etc., it's free.
- MySQL is a database program. I started using it quite reluctantly, but the quantity of files I'm using just don't make sense to store as flat text. With proper indexing, it allows much faster access to large amounts of data than anything else. Using it has given me some insights into how the web works that change how I think about various scholarly electronic resources. (I wrote a post a while ago about them that I will eventually put up). Most humanists using databases will use less serious ones like Access and Filemaker, and I think that's for the best.
- Perl is a programming language. It's particularly good at processing text, and has lots of useful libraries available online. I feel a little bad I'm not using a shinier, newer language, and I'm sure  it's not helping me become a better programmer. (I'm still unable to think in terms of object-oriented programming, for example.) On the other hand, I'm basically using it just for scripting, and it's easy to find code examples online for just about anything.

**Data Sources**  
The Internet Archive is my main source. I start with the Open Library data dump, which has good info on each book and should make it easy to soon incorporate new information about authors and original publication dates as well. I use perl to dump that into an SQL database for the subset of data for which I can find Librayr of Congress style call numbers (from either OL or from HathiTrust) and electronic texts (from the Internet Archive). (I might--probably should--expand this in the future). Open Library and Hathi both update their data periodically, and I'm hoping I can automate all the various cleaning functions I have to incorporate their monthly dumps. I'm not there now, though.

Currently, that system gives me about 400,000 titles to choose from. By contrast, the Library of Congress had 3 million books in 1921; Widener library was built with a capacity for 2 million volumes in 1915. That is to say, I do not have anything close to all the books published before the copyright cutoff. On the other hand, the Princeton University Library had [106,000 volumes in 1915.](http://books.google.com/books?id=Oy8ZAAAAMAAJ&pg=PA27&dq=princeton+library+volumes&hl=en&ei=4TVHTYiOKoKdlge8yOUI&sa=X&oi=book_result&ct=result&resnum=1&ved=0CDAQ6AEwAA#v=onepage&q=princeton%20library%20volumes&f=false) And the Stanford library had [240,000 volumes](http://books.google.com/books?id=O0MDAAAAYAAJ&dq=size%20of%20library%20collections&pg=PA70#v=onepage&q=size%20of%20library%20collections&f=false) in the general collection in 1917, making it the 11th largest in the country. So it is a substantial collection, certainly comparable to or better than the entirety of pre-1922 books most professors have in their university library. It's also about the same size as the corpus Google uses for their American English ngrams before 1922 (although many of the open library books are neither American nor in English).

I don't think I can handle all those files at once, so I find ways to cut them down. Currently, I'm using two different slices. The first, and the one I use unless I say otherwise, is a group I created called "bigpubs." Basically, it's an attempt to get a large number of books published by major commercial publishers. The core is a set of fifteen or so publishers studied in depth in the most magisterial-looking history of the publishing industry I could find in the Princeton stacks: John William Tebbel, A History of Book Publishing in the United States (New York: R.R. Bowker Co, 1972): vol 1, The creation of an industry, 1630-1865. I add to that a few large publishers from the postwar era, a few of the largest publishers from outside the Northeast to get some geographical diversity, and a few additional pre-1840 publishers because my sample remains very small in that period. I'm pasting the full list below, in the R code that I used to create it. Most notable here is what I exclude: small publishers, regional publishers, non-American publisher, university presses, and the Government Printing Office. (Among others.) I do this because I think books with larger circulation, or books published for the national market, are intrinsically more interesting. Selecting for more successful publishers is a rough proxy for those. This is a somewhat crazy way to do it, and I wouldn't necessarily think others would want to follow. But I think it helps us remember one important point: books aren't all created equal, and weighting each book the same usually is an approximation, not our actual goal.

The second subset I'm using is a more catholic slice of a few disciplines which I'm particularly interested in for my dissertation on conceptions of attention in the United States. I take every single English language book (or unknown language, which are mostly English) in a number of different Library of Congress call numbers. That list of call numbers follows my publisher list at the end of this post. I'll probably make a few more like it as the need arises.

In terms of my time, it's very easy to create a new subset. It takes a day or two from start to finish on my laptop, however, keeping me from watching movies on Netflix, so I may not do it for any truly large corpuses in the near future. It is tempting, however, to build up a fiction database of some sort. I might be able to help some people with various forms of data dumps or code who have similar projects.

**Processing**  
Once I've decided which books are in a subset, I use perl to a) download the texts from the Internet Archive; b) Clean them up and split them into sentences; and c) count their words and build a few database tables around them. The main table is simply the word counts for each book, on a set of the [200,000 most common non-case sensitive words](http://sappingattention.blogspot.com/2010/11/how-many-words-are-there-in-english.html). A second table aggregates them by year, much like the tables released with Google ngrams.

I also can add some additional info in with some more work. Two or more word phrases can be entered in one by one to the database, as can counts of all the words that appear in the same sentence (as roughly guessed by an imperfect perl script) as any single word or multi-gram. I'd love to keep the sentence level information in the database directly, but I think it would be slow and take up too much space on my hard drive. Same with all the two-word pairs. I don't have any natural-language processing.

Once that data is loaded in to MySQL, I manipulate entirely from within R using functions to generate SQL queries on the database. I've built up various functions to link the data and metadata together. The most useful queries are those that pull out a full set of word counts for a given book, and those that take a given word and return its count in each individual books. (Both return several thousand numbers, which R can then cut down.) I tend to get more excited talking about the R stuff, so that's what I put on the blog.

The vast bulk of judgment, obviously, resides in the last step--the analysis I do in R. Everything else could happily rely on a central server. But there are a number of places—in database design, in choosing texts for groups, and in figuring out what data perl should stash in the database (for example, overall word counts) where a fair amount of humanistic decision-making creeps in. I remain particularly interested in that stuff as a place to reflect on the infrastructure for humanities research.

Let me know if I should edit any of this for clarity.

**APPENDIX: **

Here, in all its messy glory, is the code create a list of publishing house terms I match for the 'bigpubs' set. It matches only the words in quotes, as perl regexes, which means I probably catch many extra books by other publishers with the same last names.

houses = c(

##NEW YORK FIRMS TREATED IN TEBBEL  
"Wiley", #John Wiley and sons  
"Harper",  
"Appleton",  
"Barnes", #AS Barnes and co  
"Putnam",  
"Dodd","Mead", #Dodd and Mead, which doesn't grow until after 1870  
"Scribner",  
"Nostrand",  
"Dutton",

##PHILLY FIRMS IN TEBBEL  
"Carey","Lea","Hart", "Blanchard", #Major early Philadelphia house, with variations cobminations of names  
"Lippincott",  
"Lindsay","Blakiston", #largely scientific texts  
"Childs",

###BOSTON FIRMS IN TEBBEL  
"Ticknor", #Ticknor and Fields, most famous Boston House  
"Houghton","Mifflin","Hurd","Riverside",#Hurd and Houghton or H.O. Houghton, later Houghton Mifflin, published the Riverside Press, mostly Boston but also NYC  
"Little",#Brown not included because it's just too common  
"Shepard", #Lee and Shephard of Boston  
"Sampson",#Phillips, Sampson and co.  
"Jewett", #John P Jeweet  
"Noyes",#A Jewett spinoff house  at times  
"Roberts \[Bb\]r", # Roberts Brothers, Small house with important authors (Dicknson, Luoisa Alcott, etc.)  
"Fuller", #Walker and Fuller  
"Loring", #"Whose chief distinction was to be Horatio Alger's publisher"  
"Lockwood", #largely American Tract Society  
"Crosby", #William Crosby and Crosby, Nichols Lee in Boston. active before the war.  
#"Brewer","Tileston", #major schoolbook publishers--I took them out.  
"Crocker","Brewster", #Some quite early books in Boston.  
"Cummings","Hilliard","Gray", #Cummings and Hilliard, later Hilliard, Gray, and co., connections to Harvard and to Thomas Jefferson, Hilliard died in 1836 so this gets some early books. Brown of Little, Brown apprenticed here.

#VERY LARGE POSTBELLUM FIRMS NOT STUDIED IN TEBBEL  
"Macmillan", #London published books won't be included  
"Century",  
"Holt",  
"Doubleday",  
"Knopf",

#THE MOST REPRESENTED ANTEBELLUM FIRMS IN MY SAMPLE TO INCREASE THE NUMBER OF BOOKS FROM THAT PERIOD  
"Lilly", #Wells and Lilly, Boston, and Lilly Wait, Boston, one of the five largest Boston firms in 1825  
"Gould","Kendall","Edmands", #Gould Kendall Lincoln and Lincoln and Edmands, Boston  
"Hendee", #Carter and Hendee, Boston  
"Munroe", #J Munroe and co., Boston  
"Capen", #Marsh Capen Lyon Boston  
"Perkins.\*Marvin", #Perkins & Marvin; Boston

#THE MOST REPRESENTED PRESSES OUTSIDE OF PA, DC, MA, and NY TO GET A LITTLE MORE GEOGRAPHIC DIVERSITY  
"Merrill", #Bobbs-Merrill, etc., Indianopolis (Wizard of Oz)  
"McClurg", #Chicago: Tarzan, etc.  
"Clarke", #R. Clarke and Belford Clarke and SJ Clarke, Ohio and Illinois--this might be catching too much.  
"Lockwood", #Case, Lockwood and Brainart, CT  
"Jennings", #Jennings and Graham/Jennings and Pye, Cincinatti  
"Foresman", #Scott, Foresman, Chicago (Education?)  
"Callaghan", #Callaghan and co, Chicago largely legal  
"Elder" #California  
)  
And here are the LC classes in the "psych" set, which covers fields I think are relevant to my dissertation:  
c(  
"B", #Just the philosophy and psychology subheadings, not religion  
    "BC",  
    "BF",  
    "BH",  
    "BJ",  
 #Business and marketing and advertising  
    "HF",  
"L", #All Education books  
    "LA",  
    "LB",  
    "LC",  
    "LD",  
    "LE",  
    "LF",  
    "LG",  
    "LH",  
    "LJ",  
    "LT",  
"M", #All Music books  
    "ML",  
    "MT",  
#Physiology     
"QP")

---

### Comments:

#### Hi Ben. I run the Open Library project. This is aw...

[george](https://www.blogger.com/profile/18251729055245254088 'noreply@blogger.com') - <time datetime="2011-02-01T21:00:22.252-05:00">Feb 2, 2011</time>

Hi Ben. I run the Open Library project. This is awesome - it's so great to see our data being looked at!

Let me know if we can help, or if you'd like to come hang out with us, paid or unpaid :)

Cheers,  
George Oates  
glo at archive . org

<hr />
#### This is very helpful. I used to do coding way back...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-02-08T11:04:24.472-05:00">Feb 2, 2011</time>

This is very helpful. I used to do coding way back in the mists of time, but I'm still upgrading the wetware to be 2011-compatible, and what you're doing here is pretty close to what I would like to do -- although in a different period (Britain 1750-1850), and with some uglier OCR to handle.

Started teaching myself R and MySQL over the weekend, so I'm very pleased to see that those are tools you have found useful. Do you use the standard R hclust function to produce your dendrograms?

<hr />
#### Ted- Once you get around the learning curve, they...
[Ben](https://www.blogger.com/profile/04856020368342677253 "noreply@blogger.com") - <time datetime="2011-02-11T14:38:18.513-05:00">Feb 5, 2011</time>

Ted-

Once you get around the learning curve, they both work pretty well, I think. Perl is the weak link here, but OS X python-mysql connectivity is surprisingly difficult, so I'm sticking with it. Let me know if there's anything I can do to help. I use the normal hclust function and kmeans and all the rest, although they're occasionally they're a little clunky--good plotting formatting (eg, horizontal) often seems to require you to transform the output from hclust() using as.dendrogram().

<hr />
#### Thanks, Ben. I've succeeded in getting R and M...
[Anonymous]( "noreply@blogger.com") - <time datetime="2011-02-14T14:36:45.040-05:00">Feb 1, 2011</time>

Thanks, Ben. I've succeeded in getting R and MySQL talking to each other -- finding R a lot of fun to work with -- and I'll be posting some of my early results soon.

<hr />
