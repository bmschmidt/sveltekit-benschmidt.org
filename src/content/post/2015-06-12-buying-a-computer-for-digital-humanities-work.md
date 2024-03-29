---
id: 453
title: Buying a computer for digital humanities work
date: 2015-06-12T17:49:01+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=453
url: /2015/06/12/buying-a-computer-for-digital-humanities-work/
categories:
  - Digital Humanities
---

I&#8217;ve gotten a couple e-mails this week from people asking advice about what sort of computers they should buy for digital humanities research. That makes me think there aren&#8217;t enough resources online for this, so I&#8217;m posting my general advice here. (For some solid other perspectives, see here). For keyword optimization I&#8217;m calling this post &#8220;digital humanities.&#8221; But, obviously, I really mean the subset that is humanities computing, what I tend to call humanities data analysis. [Edit: To be clear, ] Moreover, the guidelines here are specifically tailored for text analysis; if you are working with images, you&#8217;ll have somewhat different needs (in particular, you may need a better graphics card). If you do GIS, god help you. I don&#8217;t do any serious social network analysis, but I think the guidelines below should work relatively with Gephi.

<!--more-->

_Pricing_: For each component, I&#8217;m putting up a cheap and an expensive option; I&#8217;m also briefly describing what I myself have been using for the last two years, because those specific examples can be helpful. The cheap option down the line should be reasonable on a grad student budget; the expensive set luxurious for a faculty or staff member with a substantial research budget. I also describe my own setup, which tended towards the luxurious end of the spectrum in the summer of 2013.

The difference between what you can do with cheap and expensive is not great. Don&#8217;t make the mistake of fetishizing the hardware too much; as with most tools, it&#8217;s the performer, not the instrument, that truly matters. University libraries are filled with iMac computers that have incredible computing resources that are never used for anything but e-mail; you could, if you have a certain bent, adopt a no-computer coding and repo management style that stored code on Github and runs it only on public computers. [Here, for example, is a snippet of code you can run on any library computer that will stream the entire Google Ngrams 3-grams corpus to a library server and store only the entries matching a regular expression](https://gist.github.com/bmschmidt/923dce0330d72486ee8d). (Please don&#8217;t run that code trivially, it wastes a lot of resources). You might need to store R or some python modules on a thumb drive to realistically make this work, but you might be able to become a folk hero by doing it.

**1. Laptop vs Desktop.**

_Cheap_: The cheapest route to go is a single laptop supplemented, should you find you need it, with specially purchased virtual server time on one of the cloud services. (Probably it&#8217;s best to use Amazon for this, since that&#8217;s the most widely used option&#8211;see &#8220;Hard drive space&#8221; for a discussion of Amazon with large datasets.)

_Expensive_: You&#8217;re going to need a laptop in any case (anyone planning to use a tablet for presentations is idiosyncratic enough that they aren&#8217;t reading this guide). An additional desktop will let you buy more computing power more cheaply than a new laptop. If you have an office (home or university), I think it makes less sense to max out on an expensive all-in-one laptop, and more to purchase a desktop for computing-intensive tasks and choose your laptop as a piece of consumer electronics&#8211;base it on style, or the keyboard you like best, or weight. Desktops can run continuously, which is useful for long computations, web scraping, and the like. (People are often afraid to let programs run for hours, because they think that they are &#8220;frozen&#8221;; but frequently, a text-analysis task or complicated download may take hours to run. My personal record is a program that ran for about 3 months in the background.) They also can act as a web server, which can be useful for all sorts of tasks, from running an Omeka installation to hosting a backup of your slide deck online.

If you&#8217;re looking at spending over $1400 or so, I would seriously consider getting two computers; if less, focus on the laptop. Keep in mind that running a desktop continuously uses large amounts of electricity; one of the reasons running your own is so much cheaper than using Amazon is that all this carbon-producing effort is billed to your office or home.

_My setup_: I have a MacBook Air for day-to-day use, chosen primarily because it has the most battery life and I frequently forget to charge my computer, and a Linux desktop in a large tower case, described further below. They both ended up costing approximately the same ($1500 or so, plus more for some hard drives), but the desktop is much more powerful for computation.

**2. Operating system.**

_Cheap_: Ubuntu 14.04. (Or 16.04, once it comes out: the even-numbered Ubuntu releases are so-called &#8220;long term service,&#8221; and often the best to stick to if you don&#8217;t want to lose a lot of time on updates). Ubuntu is the most widely used and easiest &#8220;flavor&#8221; of Linux to install, is free, and will generally be the easiest solution for installing software on and \*usually\* works with printers, cameras, and the like (always the biggest problem with Linux). Ubuntu is a little bit commercialized and sometimes too glossy; on really low-end hardware, a version of Debian using a simpler graphics stack may be a better choice.

_Expensive_: Mac OS X. Apple Hardware is pretty and, thanks to their market dominance, often cheaper for things like laptops. [Homebrew](http://brew.sh/) is an indispensable package manager for installing open-source software; under the hood, where most programming happens, Mac OS X is the same as most other Unix. Once you get a version of OS X working, it may be worth skipping Apple&#8217;s frequent updates unless you absolutely need the new functionality they offer. (Edit&#8211;or don&#8217;t mind risking losing an afternoon to fixing things. If you don&#8217;t tweak settings a lot, it may be worth it, but always wait two weeks. Make sure you do all recommended security updates, though.) For a laptop, any of the MacBook varieties is fine. The major reason OS X costs so much is that if you want to get a full-powered server going, you&#8217;ll need to buy the extraordinarily expensive Mac Pro (min $3000) which, at time of writing, is still waiting for an update; a comparably equipped Linux setup may cost half as much.

You <del>absolutely</del> probably (see below) should not plan on running Microsoft Windows as your primary OS for humanities computing. With one exception: ESRI&#8217;s GIS software is only available for Windows. If you primarily do GIS, you&#8217;ll either need to sit in the lab, buy a Windows (or dual-boot) machine, or use QGIS, which is getting better. Since ArcGIS licenses are expensive, I usually recommend that grad students use QGIS so they don&#8217;t lose their ability to finish their dissertation with their library card. I personally use QGIS for some tasks, and the spatial libraries for R for more intensive spatial work, with D3 to render maps beautifully.

_Edit on Windows: Some people on Twitter think this is too harsh, so I&#8217;m changing it to &#8220;probably.&#8221; Windows will generally be fine if you&#8217;re doing number crunching only; python and RStudio will run fine. But use of Unix (the family of operating systems to which Linux and OS X belong) is far more common in DH than Windows, which means that you&#8217;ll have an easier time running other code, and you&#8217;ll have a harder time running DH software that is oriented to the web, such as Omeka, which requires a so-called [LAMP stack](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29).

\_

_My setup_: An old version of OS X on the laptop to keep my homebrew settings intact, and Ubuntu 14.04 on the desktop tower.

**3. Memory (RAM)**

No one seems to call it RAM anymore besides me. This is the single most important upgrade you can get for humanities computing, and most default systems come with less than you want.

_Cheap_: You can survive on 4GB, but it&#8217;s worth splurging for 8 in a laptop. If you&#8217;re only going to be working with python and R (the most common languages for humanities computing) you can get some stuff done on 4 or even 2GB; if you&#8217;re going to be regularly running anything that uses Java (which includes the immensely popular Mallet tool for topic modeling, and the Stanford Natural Language Toolkit), you&#8217;ll be glad to have more.

_Expensive_: As much as possible under the rest of your hardware setups. There are usually hard limits on what your processor can accommodate, and you should go all the way up to them.

My setup: I maxed out the laptop at 8GB, and have the maximum 32GB in the Linux server. When I bought my desktop, this was the most possible on the medium-range motherboards for Intel i7 processors; one of the things the extra money for a Mac Pro gets is the ability to load in 64GB of RAM.

**4. Hard Drive space**

Needs for hard drive space vary enormously from person to person. There are only a few truly large data sets out there (Google NGrams, Hathi Trust, customized JStor data for research abstracts); you can fit tens of thousands of anything onto an ordinary hard drive. Don&#8217;t overestimate the size of your data; if you only want to look at, say, Victorian poetry, you can probably store the entire Hathi collection on your phone, let alone your computer. (Images and audio take more space). Do the math on the files you have and how many you&#8217;ll need to download before wasting money on storage: space is easily expanded, so you don&#8217;t need to spend money up front before you have the data. But you should have a plan for dealing with additional data.

If you plan to use a lot of data (more than 1TB), you will find that cloud computing is not a particularly realistic option. Processor time on the cloud is cheap: but data storage needs to be persistent, and you can easily end up spending several hundred dollars per terabyte, per year, to store copies online. This is rarely economical.

The other thing to keep in mind is that there are &#8220;solid state&#8221; and traditional hard drives. Solid state are better, but hold substantially less.

_Cheap_: Whatever drive comes in the machine; a 128 GB SSD might be enough if you don&#8217;t plan to store your personal music and photographs on the machine. At the absolute bottom level, a small disk drive is acceptable; but some size SSD is the biggest bang-for-the-buck upgrade you can get. To store more data, use external drives; 4TB external drives are now fairly cheap. If you&#8217;re going to be working with the big datasets, you probably should get two. If your analysis produces large data files or they are available online, though, you don&#8217;t \*necessarily\* need to back them up; instead, you can store code on the ssd or as a git repository backed up, ignore the large files for backup but leave perfect code to recreate them. ([A Makefile is a nice way to accomplish this, as Mike Bostock describes.](http://bost.ocks.org/mike/make/)). Back up your code and writing in as many forms as possible; mine are scattered around on Dropbox, Github, and on hard drives at my home and office.

_Expensive_: As big an SSD as you can afford for the operating system and data processing, and traditional drives for additional storage. On Apple hardware you&#8217;ll need an external enclosure for those drives, which again gets expensive; if building a Linux tower, it may be worth getting a case that holds as many expansion drives as possible. You&#8217;ll want to use RAID to join multiple drives into a single array for some redundancy since disks will inevitably fail; RAID 10 is the standard, and RAID 5 and RAID 6 are both reasonable compromises if you&#8217;re squeezed for space. Do the math on what the cheapest cost per gigabyte hard drives are, and use those; keep in mind that with a RAID array your disks generally have to be the same size, so start with a 3 or 4 TB drive if you think there&#8217;s any chance you&#8217;ll need to scale up. Internal SATA connections are fast, and in my experience disk I/O can be a significant bottleneck. If you plan to do external storage, it&#8217;s worth making sure you can have a thunderbolt or at least USB 3 connection.

My setup: a small (100GB) SSD for the operating system. I have a \*lot\* of data stored locally, so I bought a case that holds two small drives and six full size ones. I started with 3TB drives in a RAID 5 configuration for 6TB of space; as I ran out of space, I switched to 6 3TB drives in a RAID 6 for 9TB of storage with more redundancy.

**4. Processors**

Processor speed is less important for humanities computing; while too little memory makes it impossible to do certain things, too slow processors just means that they take longer. That&#8217;s fine; just get in the habit of accepting that certain things will run during your commute, or overnight, or whatever.

Keep in mind that both R and python don&#8217;t take advantage of multi-core processors very well. It&#8217;s possible to take advantage of multiple cores, but in cases there is high overhead. (For Bookworm, I use GNU parallel instead of python&#8217;s multicore library because the overhead of pickling and unpickling text files between python instances is much higher than just passing plain text through the system; in general, it&#8217;s worth learning how to use GNU parallel, the -P flag to xargs in the shell, or the -j argument to make; the system is likely to be better at allocating resources than your python code.)

Java programs are frequently better able to take advantage of multiple cores.

_Cheap_: Whatever: probably two cores.

_Expensive_: The Intel i7 series is fine; a quad-core system effectively gives eight processors, and flies through most tasks. The Mac Pros use Xeons, and are going to switch to something better in the generation. Oddly, they have slower clock speeds the more processors you get; this means, paradoxically, that if you write unoptimized python or R code, it will probably run faster on a cheap Mac Pro than an expensive one, so you should feel just fine about buying the &#8220;cheap&#8221; $3000 one.

**5. Graphics**

Unless you&#8217;re working explicitly with images, this is the place you need the least compared to what an off-the-shelf computer will get you. Real-time video rendering matters a lot for computer games and watching movies, which all commodity computers are built to do at least a little of; but digital humanities rarely make use of their capabilities.

In some limit cases or in three or five years, this may be flipped. Code that is optimized for GPU can be extremely fast indeed; but it&#8217;s often difficult to find and even harder to write, much more so than multiprocessor code. It also varies by architecture, so you&#8217;ll need to do some research about whether there&#8217;s a good SVD algorithm for the GPU written for your particular NVidia card, or whatever.

If you&#8217;re working with photoshop, obviously, the situation is different. 3D modeling, which I don&#8217;t know much about, should benefit enormously. But just because you do data visualization doesn&#8217;t mean you need any graphics card at all; if you plan to do it in the browser or R, the benefits are slight.

My setup: No graphics card on the Linux tower. Whatever comes by default in the MacBook.

**6. Monitor**

Whatever size monitor you get, you will come to feel is the minimum.

**7. Keyboard**

I have a mechanical 1990s IBM model M. It&#8217;s pretty awesome.

**8. Software**

With the exception of ArcGIS, most widely-used software for humanities computing is free. CUNY&#8217;s DH-in-a-box platform contains a lot of what you need. As I said, Python and R are the two most widely-used languages; along with Javascript, Java, and the various C languages, they&#8217;re all free. SPSS, Stata, and the like, are <del>absolutely</del> not worth it; I see no reason to use Matlab, although it&#8217;s common in some other fields. The only coding platform I&#8217;d consider spending my own money on for humanities computing is Mathematica; you can do some amazing things, but won&#8217;t be able to share code.

Learning to interface between your analysis language and a database can be extremely useful for avoiding problems with memory. Python&#8217;s &#8220;shelve&#8221; module is incredibly useful as a persistent key-value store; the dplyr package in R lets you use a SQL database without the unpleasant experience of actually writing SQL code. I use MySQL with MYISAM tables because I believe them to be faster and more portable; most advice you&#8217;ll get nowadays is to use Postgres as a complicated database server, or SQLite for lightweight files. If you do use a database to store data and think that it&#8217;s slow, it&#8217;s worth reading up on how indexing works; there&#8217;s a very good chance you can improve query times by a thousand by adding the right index. Use WordPress for a blog until you know that you need something different; every other platform you might use allows you to convert to it from WordPress. Don&#8217;t use blogger and then regret like me.

Plenty of people use virtual machines even on their local hardware to keep certain things (a webserver, say) clean and easy to back up. I don&#8217;t, because I don&#8217;t want to lose any performance. But a system like Vagrant can be extremely useful for switching code between a local machine and the cloud, particularly under the budget approach.

Some random other advice: Write in markdown with pandoc. Use github, obviously. Everyone loves sublime as a text editor; if you tend to work on remote servers, though, it can be convenient to just always use vim or emacs, since they&#8217;ll always be around. Document each project in its makefile, as described in the Bostock article above. Use the unix command \`find\` instead of \`ls\` if you have more than a thousand files downloaded; I&#8217;m constantly writing lines of code like \`find directoryName -type f | xargs -P 6 someShellCommand.sh\`, and it&#8217;s fast.

&nbsp;
