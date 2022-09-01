---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'EOIR Database adventures, part I: encoding'
subtitle: ''
summary: ''
authors: [Ben Schmidt]
tags: [EOIR, TRAC]
date: 2020-08-25T22:49:16-04:00
lastmod: 2020-08-25T22:49:16-04:00
featured: false
draft: false

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

As part of the Asylum Lab project at NYU, I've started poking around the database of the Executive office of immigration review (EOIR) published by the department of justice every month. It's a monster of a database; millions of rows detailing each person, charge, and motion in the enormous parallel federal court system that has been set up to track applicants for asylum, proposed deportees, and so on.

This is not exactly a database; instead, it's a bunch of table dumps without
a clear schema. Like most dumps, it requires a bit of futzing to get to work. It's worth leaving a few notes online for anyone else who encounters the same issues, and for myself as well.

The database is--based on the directory paths in the instructions online--held in a Microsoft SQL database on some DOJ system. It's released as CSV files, but even simply to read them into R can be a little tricky for two reasons.

First, they're littered with embedded null characters. The "Not available" value for database fields seems to be the null character, which is not fully kosher in a CSV; to clear those out, I use a script on each exanded csv file to replace them with empty characters.

```sh
find . -name "*.csv" | xargs -n 1 -P 6 perl -pi -e "s/\\0//g
```

Secondly, the character encoding is not defined, and there are a number
of strings that fail to parse as either ASCII or Unicode.
. Looking for invalid ASCII strings, I found that some spellings of 'Mayagüez' in Puerto Rico were encoded not as ASCII or Unicode. After running it through every possible character encoding,
using the following script, I found that the only one that looked plausible was
some Windows version of Latin-1.

```sh
iconv -l | perl -pe 's/ .*//' | head -49 | xargs -n 1 -I{} iconv -f {} invalid
```

Once these problems are dealt with, the CSVs can be loaded into R straightforwardly.

Then the challenge becomes figuring out what's actually in the dozens of tables here.
