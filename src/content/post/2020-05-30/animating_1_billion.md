---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Animating One Billion Points with Arrow and WebGL'
subtitle: ''
summary: ''
authors: []
tags: []
categories: []
date: 2020-05-27T16:15:23-04:00
lastmod: 2020-05-27T16:15:23-04:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

> One million points isn't cool. You know what's cool? A billion points.

Sometimes I think summary statistics are sinful. Why not just visualize every
point in a dataset? Don't those points deserve to be seen?

I'm not the only one. Especially for scatterplots, there's been a profusion of interesting projects
lately that find interesting ways to display thousands--even hundreds of thousands--
of points in the browser. Doing that requires rethinking what it is that you want to display.

A couple years ago, I posted a visualization for displaying 14,000,000 books from
the Hathi Trust in scatterplots. For that, I learned the canvas API, which is
vastly faster than SVG elements.

At that time, I put off learning WebGL. But if you want nice interactions
on really large datasets, it's the only way to go for now. But all the existing
frameworks I've seen start with the assumption that you can post an entire
dataset to the user at the beginning of the session.

That set--and some others like it--are the primary reason that I wanted to
expand out. But they are more complicated in some other ways, so I'm starting
with a _simple_ billion point dataset.

## Billion point datasets

A dataset with a billion points is hard to find, but some definitely exist.

The Hathi Trust, for example, has over a billion pages in it. It wouldn't
be impossible to create a meaningful visualization of each page, although
I'll defer on thinking that through for now.

One of the reasons that people in the humanities probably have more

Still, I thought I'd fire it up on something slightly more conventional--a dataset
from the oddly-named Gaia space telescope of the European Space Agency. They
distribute a dataset with about 1.7 billion stars.

This is a nice stress test. If you can visualize 1.7 billion points, there
probably aren't huge issues with scaling to bigger. The points have straightforward
x and y coordinates; the location of each star in the celestial plane.
(3d would
be interesting, but Gaia only has 3d positions for a paltry million stars. If they
can't calculate the parallax from the earth's two positions, it's hard to tell
just how far away a star is.)
And there are other things to visualize for each point, so it's not just
serving static image tiles; for many stars, Gaia has collected the color,
distance, and radius of many of the stars.

In other ways, though, it's not ideal. I had sort of thought that maybe a large
number of stars would have names; but

## Building tiles.

Just building tiles is somewhat difficult. Gaia distributes data in 64,000 individual
CSV files, each corresponding to a different part of the sky. But one of the
core assumptions that I want to make is that

Enter Apache Arrow.

### Apache Arrow

##

| Technology |                               What's good about it                               | Rough Point Limit | Why                                                                                                                                                                  |
| :--------: | :------------------------------------------------------------------------------: | :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    SVG     | Clear, HTML-like way of describing points and transitions; easy to style with D3 |        500        | Each SVG point is a DOM item; past this the browser gets sluggish                                                                                                    |
|   Canvas   |               Faster than SVG. You just draw shapes in a for-loop.               |      20,000       | Each points needs to be drawn in a synchronous loop; especially with aesthetics (point colors, etc.) renderers start to stutter.                                     |
|   WebGL    |                                   Crazy fast.                                    |     1,000,000     | Display issues (that's one pixel per point); even just (x, y) cooordinates for 1,000,000 points takes at least 8 megabytes, which is a lot to transfer over the web. |

Your browser has <span id="pixelcount">maybe 1,000,000</span> total _pixels_. So
what's the point in displaying more?

The answer is, basically, zoom. You can go deeper into any dataset;
with 2d scatterplots, you can borrow all the interface metaphors from online
maps. And it can be really interesting to dive deep into one area of a scatterplots

<script>
document.getElementById("pixelcount")
</script>

# WebGL

WebGL is established. It's even getting a little old--[Doug Duhaime](https://douglasduhaime.com/)
tells me security vulnerabilities persist. At some point it will
be replaced by [WebGPU](https://en.wikipedia.org/wiki/WebGPU),
at which point existing WebGL sites may face their own version of the Flashpocalypse.

# Apache Arrow

Apache Arrow] is
