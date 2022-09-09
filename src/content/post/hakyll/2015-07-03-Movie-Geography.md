---
layout: post
title: Movie Geographies
date:   2015-07-02
author: Ben Schmidt
categories: 
 - bookworm
 - movies
 - subtitles
---

I just saw Matt Wilkens' talk at the Digital Humanities conference on
places mentioned in books; I wanted to put up, mostly for him, a quick
stab at some of the raw data running the equivalents on my [movie bookworm](http://movies.benschmidt.org).


<!--more-->

## Top Mentioned places: cell colors show percentage of movies from decade mentioning place name
```{.bookworm height=650 width=800 id="primary"}
{
    "database": "movies",
    "plotType": "heatmap",
    "method": "return_json",
    "search_limits": {
        "*LOCATION__id": {
            "$lte": 40
        },
        "primary_country": ["USA"]
    },
    "aesthetic": {
        "color": "TextPercent",
        "x": "decade",
        "y": "*LOCATION"
    }
}
```


Matt's paper focused on what he called the "neo-liberal hypothesis"; whether as markets constitute consciousness, centers of capital become more important to literary geographies. 

The above chart shows an interested inverted relationship between New York and Washington that maps somewhat on to that idea with a bit of a twist. New York is highest in the periods of largest income inequality, Washington in the period of teh 60s and 70s when capital is comparatively the least powerful in US history.

## Capital and politics mentions are inverted.
```{.bookworm height=650 width=800 id="primary"}
{
    "database": "movies",
    "plotType": "linechart",
    "method": "return_json",
    "search_limits": {
        "*LOCATION": ["New York","Washington"],
        "primary_country": ["USA"]
    },
    "aesthetic": {
        "color": "*LOCATION",
        "x": "decade",
        "y": "TextPercent"
    }
}
```




## Percent of movies mentioning individual places
```{.bookworm height=450 width=600 id="reviewed" filters="*LOCATION:textArray"}
{
    "database": "movies",
    "plotType": "linechart",
    "method": "return_json",
    "search_limits": {
        "*LOCATION": ["New York"],
        "primary_country": ["USA"]
    },
    "aesthetic": {
        "y": "TextPercent",
        "x": "MovieYear"
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
worm.query.search_limits["*LOCATION"][0] = word;
// Then we just update the plot: it already knows what SVG element it's bound to,
// so the transitions are clean.
worm.updatePlot()
// But we have to mop up that text block to change the word.
d3.select(divid).selectAll("input").node().value = word
}
// code to get top words: cat mainmodelpredictions.coefs.csv | sort -nrk3 --field-separator="," | tail -20 | awk  {FS=","; print "\"" $1 "\"" ","}'
var words = [
"America","New","London","Paris","Europe","France","England","Earth","California","United","China","Washington","US","Chicago","Germany","Japan","Africa","U.S.","Mexico","Rome","Los","Italy","Texas","Florida","India","Russia","Spain","Canada"]


var buttons = d3.select("#buttons2")
.selectAll("button")
.data(words)

buttons.enter()
.append("button")
.on("click",function(d) {fixDirectors(d,"#reviewed")})
.text(function(d) {return d})
</script>
