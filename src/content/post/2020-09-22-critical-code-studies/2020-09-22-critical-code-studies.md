---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "2020 09 22 Critical Code Studies"
subtitle: ""
summary: ""
authors: []
tags: ["Programming"]
date: 2020-09-22T09:22:31-04:00
lastmod: 2020-09-22T09:22:31-04:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

For my [Introduction to Programming Class](http://benschmidt.org/code20) this
semester, we read the introduction to Mark Marino's 2020 *Critical Code Studies*.
It's an interesting thing to teach in the context of a programming class. Last
week we read Paul Ford's Bloomberg essay
[What is Code](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/),
which--among many, many other things its 30,000 words--works to demystify code 
for the Bloomberg audience by unpacking some of the ways coders signify by 
choosing a language,
attending conferences, etc. Marino does something very similar for the
English-literature audience, although more focused on individual coders and less
on communities.

Anyhow, to participate in my **own** online signalling, I thought it was worth
noting an interesting problem in the text. The first code example involves
a javascript interview question for algorithms to shuffle a list. In Marino's
example, two programmers, a man and a woman, are asked "to write a
program that computes an anagram of a string."
One submits this:

```
function anagram(text) {
   var a = text.split("");
   for (var i = 0; i < a.length; i += 1) {
       var letter = a[i];
       var j = Math.floor(Math.random() * a.length);
       a[i] = a[j];
       a[j] = letter;
}
   return a.join("");
}
```

and the other submits this:

```
function anagram(text) {
  return text.split("").sort(function () {return 0.5-Math.random()}).join("");
}
```

Googling around I see that someone []

[](http://wg20.criticalcodestudies.com/index.php?p=/discussion/64/from-the-introductory-chapter-a-job-interview.)
