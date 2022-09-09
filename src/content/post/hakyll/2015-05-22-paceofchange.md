---
layout: post
title:  Pace of Change replications
date:   2015-05-22
author: Ben Schmidt
categories: 
 - bookworm
 - pandoc
 - HathiTrust
---

This is a quick post to share some ideas for interacting with the data underlying the [recent article by Ted Underwood and Jordan Sellers on the pace of change in literary standards for poetry](http://tedunderwood.com/2015/05/18/how-quickly-do-literary-standards-change/).

The point of this is to begin to think through some of the questions on someone else's work on what useful exploratory apparatus might be for articles using unigram data.

<!--more-->

Their work reminds me of the foundational Mosteller-Wallace piece on classifying Federalist authorship. But while Mosteller and Wallace (in large part because of the capacities of the computers they were working with around 1960) carefully winnow their data down to just a few words, Underwood and Sellers use 3200 words. How do you explore a model like that?

The heart of that article is a classifier built on a list of words against the reception the work got. So the easiest thing to do is, at least, give the relative uses for the words most strongly indicative of publication or not.

From their replication code, I've build up a Bookworm (which takes [about 40 lines of new code](https://github.com/tedunderwood/paceofchange/compare/master...bmschmidt:master)) and then made this chart to display the words with the highest weights (not influence) in their logistic model.

I'd like to be able to display their model itself, but 3200 terms is a bit much to drop on the browser straight away.

The bars here show whether the words are in reviewed volumes of poetry, or from their broader set.

On any of these charts you can click to see works that use the listed words. You can't go straight through to the original books in Hathi, because that would have required (slightly) more work on my part. Since Sellers and Underwood are working from Hathi in the first place, this might be an interesting review to include in the HTRC-Bookworm web site once we get worksets fully supported.

## Top predictors of non-reviewal
```{.bookworm height=150 width=600 id="primary" filters="word:textArray"}
{
    "database": "paceofchange",
    "plotType": "barchart",
    "method": "return_json",
    "search_limits": {"recept":["random","reviewed"],
        "word": ["safety"]
    },
    "aesthetic": {
        "x": "WordsPerMillion",
        "y": "recept"
    }
}
```

<div id="buttons"></div>
<script> 

function fixDirectors(word,divid) {
// I used the id attribute on my code block to name the bookworm block `directors`; the
// bookworm element is hard-bound to the node so we can get at it programatically.
var worm = d3.select(divid).node().__bookworm__
//Once we have the bookworm element, we can change the search limits by operating on the query.
worm.query.search_limits.word[0] = word;
// Then we just update the plot: it already knows what SVG element it's bound to,
// so the transitions are clean.
worm.updatePlot()
// But we have to mop up that text block to change the word.
d3.select(divid).selectAll("input").node().value = word
}
// code to get top words: cat mainmodelpredictions.coefs.csv | sort -nrk3 --field-separator="," | tail -20 | awk  '{FS=",";ORS="\",\""; print $1}'
var words = ["valour",
"twill",
"garb",
"sheen",
"bravely",
"cheers",
"dire",
"riven",
"impart",
"beguile",
"joyful",
"safety",
"promised",
"pledge",
"wayward",
"lately",
"watchful",
"unfurled",
"reigns",
"raging",
"anxious",
"visit",
"portals",
"purest",
"winning",
"fainting",
"safely",
"mission",
"spotless"]

var buttons = d3.select("#buttons")
.selectAll("button")
.data(words)

buttons.enter()
.append("button")
.on("click",function(d) {fixDirectors(d,"#primary")})
.text(function(d) {return d})
</script>

They mention that one major possible confound is the nationality of the poets themselves. Here's one that lets you start to disentangle by individual words the effect that nationality might have on the classifier. (Clicking here will take you to top words for that thing.)



## Top predictors of being reviewed
```{.bookworm height=150 width=600 id="reviewed" filters="word:textArray"}
{
    "database": "paceofchange",
    "plotType": "barchart",
    "method": "return_json",
    "search_limits": {"recept":["random","reviewed"],
        "word": ["harsh"]
    },
    "aesthetic": {
        "x": "WordsPerMillion",
        "y": "recept"
    }
}
```

<div id="buttons2"></div>
<script> 

function fixDirectors(word,divid) {
// I used the id attribute on my code block to name the bookworm block `directors`; the
// bookworm element is hard-bound to the node so we can get at it programatically.
var worm = d3.select(divid).node().__bookworm__
//Once we have the bookworm element, we can change the search limits by operating on the query.
worm.query.search_limits.word[0] = word;
// Then we just update the plot: it already knows what SVG element it's bound to,
// so the transitions are clean.
worm.updatePlot()
// But we have to mop up that text block to change the word.
d3.select(divid).selectAll("input").node().value = word
}
// code to get top words: cat mainmodelpredictions.coefs.csv | sort -nrk3 --field-separator="," | tail -20 | awk  {FS=","; print "\"" $1 "\"" ","}'
var words = [
"vexed",
"stopped",
"scorned",
"level",
"mixed",
"brows",
"follows",
"served",
"cloak",
"twice",
"shivering",
"limb",
"poison",
"hoarse",
"piteous",
"leaning",
"blank",
"shakes",
"ghosts",
"harsh",
"leaned",
"unheard",
"trance",
"wooed",
"haired",
"shuddering",
"hurt",
"hurrying",
"whereon"
]

var buttons = d3.select("#buttons2")
.selectAll("button")
.data(words)

buttons.enter()
.append("button")
.on("click",function(d) {fixDirectors(d,"#reviewed")})
.text(function(d) {return d})
</script>

They mention that one major possible confound is the nationality of the poets themselves. Here's one that lets you start to disentangle by individual words the effect that nationality might have on the classifier. (Clicking here will take you to top words for that thing.)


```{.bookworm width=600 height=200 filters="word:textArray"}
{
    "database": "paceofchange",
    "plotType": "pointchart",
    "method": "return_json",
    "search_limits": {
        "recept": ["reviewed", "random"],
        "word": ["and"]
    },
    "aesthetic": {
        "x": "WordsPerMillion",
        "y": "nationality",
        "color": "recept"
    },
    "counttype": ["WordsPerMillion"],
    "groups": ["nationality", "recept"]
}


```
