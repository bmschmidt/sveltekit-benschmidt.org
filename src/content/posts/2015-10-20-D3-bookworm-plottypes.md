---
layout: post
title: Bookworm D3 layouts
date: 2015-10-20
author: Ben Schmidt
categories:
  - bookworm
  - SOTU
---

There's no full description of the D3 bookworm package yet, because it's still something of a moving target.

But Abby Mullen wanted to know what the different possibilities were for charts through the API, so I thought it was time to give a quick tour.

# Core chart types

## Heatmaps (`heatmap`)

Heatmaps show two different categorical variables on the x and y axes; they're one of the most information-dense ways for identifying outliers or complicated patterns, but their use of coloration makes them poor at representing quantities.

- **Required aesthetics**
  - `x`: A categorical or time variable
  - `y`: A categorical or time variable
  - `color`: A word or textcount variable; sets the coloration scheme.
- **Optional aesthetics**
  - None
- **Other configuration**
  - Can be set to a log scale by adding `"scaleType":"log"` in the query.

#### Basic Example: usage of "bicycle" by week and year

```{.bookworm2 width=1000}
{
    "database": "ChronAm",
    "plotType": "heatmap",
    "method": "return_json",
    "search_limits": {
        "word": ["bicycle"]
    },
    "aesthetic": {
        "x": "publish_year",
        "y": "publish_week_year",
		"color": "WordsPerMillion"
    }
}
```

#### With log-scale coloring: pages published per state by year

```{.bookworm2 width=1000}
{
    "database": "ChronAm",
    "plotType": "heatmap",
    "method": "return_json",
    "search_limits": {
    },
    "aesthetic": {
        "x": "publish_year",
        "y": "placeOfPublication_adminName1",
		"color": "TextCount"
    },
	"scaleType":"log"
}
```

## Maps (`map`)

Maps show usages of language on a map.

Zooming is not yet enabled: projections may not be the appropriate size for all screens.

- **Required aesthetics**
  - `point`: A geo point, typically created with the `bookworm-geocode` extension. The returned value if created by hand should be a JSON-encoded string like `[79,150]` of the format `[lat,lon]`.
  - `size`: A quantity variable.
- **Optional aesthetics**
  - `color`: A quantity variable (WordCount, TotalWords, etc.)
  - `time`: Animate the map across years.
  - `label`: An text label to include in the list on mouseover.
- **Other options**
  - `projection` determines the base projection to use.
    - `USA`: The Albers USA
    - `Europe`: An Albers projection focused on Europe
    - `azimuthal`: An azimuthal projection centered on Africa.
    - `boston`: A Mercator projection for plotting the city of Boston.
    - `mercator`: A standard Mercator projection.
  - `scaleType`: By default `linear`; if `log` and `aesthetic.color` is defined, will change the appearance of the color scale.

#### Basic map example: newpapers

```{.bookworm2 width=1000}
{
    "database": "ChronAm",
    "projection": "USA",
    "plotType": "map",
    "method": "return_json",
    "search_limits": {
        "word": ["test"]
    },
    "aesthetic": {
        "size": "TotalWords",
        "point": "placeOfPublication_geo",
        "label": "publisher"
    }
}
```

## Line charts (`linechart`)

Linecharts do not quite implement all the capacities of the linechart bookworm, but they make it much easier to represent a number of other useful linecharts.

Hover does not work: clicking does.

- **Required aesthetics**
  - `x`: A time or or other discrete linear variable
  - `y`: A counttype variable.
- **Optional aesthetics**
  - `color`: A categorical variable.

#### Linechart example: Pages per year of the top 15 papers

```{.bookworm2 width=1000}
{
    "database": "ChronAm",
    "plotType": "linechart",
    "method": "return_json",
    "search_limits": {
	"title__id":{"$lte":15}
    },
    "aesthetic": {
        "x": "publish_year",
        "color": "title",
		"y": "TextCount"
    },
	"scaleType":"log"
}
```

## Streamgraphs (`streamgraph`)

Streamgraphs display quantities over time: they are pretty and give a sense of the dominant materials.

The implementation is imperfect. Interaction does not work, and large return quantities are automatically curtailed.

- **Required aesthetics**
  - `x`: A time or or other discrete linear variables
  - `y`: A counttype variable.
  - `fill`: A categorical variable: if there are more than 10 values, only the ten most common in the returned set will be used.
- **Optional aesthetics**
  - None

#### Streamgraph example:

```{.bookworm2 width=1000}
{
    "database": "ChronAm",
    "plotType": "streamgraph",
    "method": "return_json",
    "search_limits": {
    },
    "aesthetic": {
        "x": "publish_year",
        "fill": "placeOfPublication_adminName1",
		"y": "TextCount"
    },
	"scaleType":"log"
}
```

## pointchart

The layout used for [rate my professors](http://benschmidt.org/profGender).

- `x`
- `y`
- `color`

## barchart

- `x`
- `y`

# Two-part comparisons: slopegraph and worddiv.

These two types compare between two different views.

- compares quantities between `search_limits` and `compare_limits`
- Basic aesthetics are `left` and `right`

## Slope graphs (`slopegraph`)

Needs lots of space. Uses a 'y' aesthetic to position words and a "label" aesthetic to display groups.

## Two-column variable-sized text layout (`worddiv`)

One of the few non-SVG based visualizations.

# Other chart types (passim)

To see other chart types, you can change "charttype":"WHATEVER" in the D3 view, and the _refresh the page_. After doing this, if the chart type is still actively supported the dropdowns will populate with appropriate choices for the database specified.

- table
- sparkline: (suitable for very small areas)
- vectorspace: Really elaborate.
- treemap: probably broken
- sunburst: probably broken
- network: probably broken
