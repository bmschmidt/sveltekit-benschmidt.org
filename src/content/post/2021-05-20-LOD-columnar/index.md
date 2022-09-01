---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Columnar Linked Open Data'
subtitle: ''
summary: ''
authors: []
tags: ['Metadata', 'Arrow']
categories: []
date: 2021-05-08T10:47:56-04:00
lastmod: 2021-05-08T10:47:56-04:00
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
projects: ['Bookworm', 'Nonconsumptive']
---

The files distributed by collections as data initiatives are torn between
two competing goals. One is to provide _fully described_ data according to the
up-to-standards. Linked open data (LOD) is a powerful set of tools for integrating
free-standing resources like web pages with an extensible, standardized vocabulary.
When applied to the release of a full dataset, LOD allows the precise naming of
each attribute of an item, with persistent URIs.

But LOD is also a major commitment to an ecosystem that has not been fully
adopted by non-technical users.
The [w3 guide to LOD](https://www.w3.org/2011/gld/wiki/Linked_Data_Cookbook#Step_5_Convert_Data_to_RDF)
requires that data be serialized into an RDF serialization; although JSON-LD
has seen some uptake, these generally remain difficult to read and slow to
parse and difficult to create. Organizations exporting collections frequently
gravitate toward a pole of _simplicity_ and _accessibility_ that leads in
many cases to the venerable CSV format. CSV provides an open format that is
easily ingested by almost any system, can be edited and shared by non-experts,
and meets basic standards of reproducibility. Carnegie Museum of Art. [https://github.com/cmoa/collection]

Spreadsheets provide some guarantees about a data set as a whole. You can see, for
example, the full list of data types by scanning the column heads, and there
is some guarantee that results will exist for all objects in a dataset. But they
do _not_ present the linked data representation of a JSON-LD schema; there is no
conventional way to designate that the "publicationDate" field in a spreadsheet
represents the `schema.org` "publicationDate" representation, and certainly
no way to capture that a listing of countries uses some particular controlled
vocabulary. Such data can be captured in supporting documentation, but then it
it is unusable by machine-readable implementations.

Let's take as an example some typical Linked Open Data from the Hathi Trust.
It looks like this:

```json
{"schemaVersion":"https://schemas.hathitrust.org/EF_Schema_MetadataSubSchema_v_3.0","id":"http://hdl.handle.net/2027/uiuo.ark:/13960/t44r4jm98","type":["DataFeedItem","Book"],"dateCreated":20200209,"title":"Deutsche industrien und der krieg ...","contributor":{"id":"http://catalogdata.library.illinois.edu/lod/entities/ContributionAgent/Person/ht/Baritsch,%20Karl,%20b.%201877.","type":"http://id.loc.gov/ontologies/bibframe/Person","name":"Baritsch, Karl, b. 1877."},"pubDate":1916,"publisher":{"id":"http://catalogdata.library.illinois.edu/lod/entities/ProvisionActivityAgent/ht/Boysen","type":"http://id.loc.gov/ontologies/bibframe/Organization","name":"Boysen"},"pubPlace":{"id":"http://id.loc.gov/vocabulary/countries/gw","type":"http://id.loc.gov/ontologies/bibframe/Place","name":"Germany"},"language":"ger","accessRights":"pdus","accessProfile":"open","sourceInstitution":{"type":"http://id.loc.gov/ontologies/bibframe/Organization","name":"IUIUC"},"mainEntityOfPage":["https://catalog.hathitrust.org/Record/008959649","http://catalog.hathitrust.org/api/volumes/brief/oclc/40522835.json","http://catalog.hathitrust.org/api/volumes/full/oclc/40522835.json"],"oclc":"40522835","genre":["http://id.loc.gov/vocabulary/marcgt/doc","http://id.loc.gov/vocabulary/marcgt/bib"],"enumerationChronology":"v.3","typeOfResource":"http://id.loc.gov/ontologies/bibframe/Text","lastRightsUpdateDate":20180506}
{"schemaVersion":"https://schemas.hathitrust.org/EF_Schema_MetadataSubSchema_v_3.0","id":"http://hdl.handle.net/2027/uiuo.ark:/13960/t3ws8n13d","type":["DataFeedItem","Book"],"dateCreated":20200209,"title":"Some Middle Pennsylvanian Hoplocarida (Crustacea) and their phylogenetic significance /","contributor":{"id":"http://www.viaf.org/viaf/27127514","type":"http://id.loc.gov/ontologies/bibframe/Person","name":"Schram, Frederick R., 1943-"},"pubDate":1969,"publisher":{"id":"http://catalogdata.library.illinois.edu/lod/entities/ProvisionActivityAgent/ht/Field%20Museum%20of%20Natural%20History","type":"http://id.loc.gov/ontologies/bibframe/Organization","name":"Field Museum of Natural History"},"pubPlace":{"id":"http://id.loc.gov/vocabulary/countries/ilu","type":"http://id.loc.gov/ontologies/bibframe/Place","name":"Illinois"},"language":"eng","accessRights":"ic","accessProfile":"open","sourceInstitution":{"type":"http://id.loc.gov/ontologies/bibframe/Organization","name":"IUIUC"},"mainEntityOfPage":["https://catalog.hathitrust.org/Record/100701032","http://catalog.hathitrust.org/api/volumes/brief/oclc/173147551.json","http://catalog.hathitrust.org/api/volumes/full/oclc/173147551.json"],"oclc":"173147551","genre":["http://id.loc.gov/vocabulary/marcgt/doc","http://id.loc.gov/vocabulary/marcgt/bib"],"enumerationChronology":"Fieldiana, Geology, Vol.12, No.14","typeOfResource":"http://id.loc.gov/ontologies/bibframe/Text","lastRightsUpdateDate":20180315}
{"schemaVersion":"https://schemas.hathitrust.org/EF_Schema_MetadataSubSchema_v_3.0","id":"http://hdl.handle.net/2027/mdp.39015076449795","type":["DataFeedItem","Book"],"dateCreated":20200209,"title":"Catalogue.","contributor":{"id":"http://catalogdata.library.illinois.edu/lod/entities/ContributionAgent/Person/ht/Colgate%20University","type":"http://id.loc.gov/ontologies/bibframe/Person","name":"Colgate University"},"pubDate":1852,"language":"eng","accessRights":"pd","accessProfile":"open","sourceInstitution":{"type":"http://id.loc.gov/ontologies/bibframe/Organization","name":"MIU"},"mainEntityOfPage":["https://catalog.hathitrust.org/Record/005804260"],"genre":"http://id.loc.gov/vocabulary/marcgt/doc","enumerationChronology":"1862-1863","typeOfResource":"http://id.loc.gov/ontologies/bibframe/Text","lastRightsUpdateDate":20180919}
```

Looking at these three entries, you can see that they each use similar values, but
not the precise connections. Loading them into a CSV, one could image placing a
variety of elaborate column names, but repeating that source organizations
use the `http://id.loc.gov/ontologies/bibframe/Organization` schema would quickly
get tiresome. Although this set doesn't set `http://id.loc.gov/ontologies/bibframe/`
as part of a context for any individual item, it clearly would be useful for the set
as a whole.
And certain features of the implementation are type-inconsistent
within this set: 'genre' is a single string for for the third item here, but a list
for the first two.

Columnar Linked Open Data is a refinement of the strategies for JSON-LD to work
in environments where contexts, identifiers, and types are more likely to be
shared across columns for _multiple_ records than within a single dataset.
Like JSON-LD, it does not define a _new_ way of representing data, but instead
provides a way for describing RDF triples in a format that will be immediately
appealing to researchers. While JSON-LD targets web users, CLOD targets data
analysts using tabular data analysis software such as traditional relational
databases and the Hadoop ecosystem, pandas in Python,
dataframes and the 'tidyverse' in R, and developing engines like Apache Arrow
and the Arquero Javascript library.

Unlike JSON, it is also not definitively tied to a particular data storage
format. The new generation of open-source columnar storage formats--
[ORC](https://orc.apache.org/specification/ORCv1/),
[Arrow](https://arrow.apache.org), and [Parquet](https://parquet.apache.org/)--
each have the ability to store standardized column level metadata, so the
strategies laid out here will work for each. Because data manipulation in
Apache Arrow is the most advanced, I focus on that particular format here.
We also suggest a way of expressing CLOD using the traditional CSV.

# Three levels of context

The core strategy for working with columnar linked open data is to
disentangle three different levels of representation which may have linked
open data representations.

1. The _table_ or _dataset_. (E.g., "catalog")
2. The individual _column_. (E.g., "creator")
3. The individual _field_. (E.g., "Dickens, Charles, 1812-1870.")

While JSON-LD allows the creation of contexts and definitions at the _entry_ level,
CLOD instead makes the _column_ be the default level of contextualization. So
in a dataset of authors, for example,

```
"@context": "https://viaf.org/viaf/"
"@type": "https://schema.org/creator"
```

| author        | author@id |
| ------------- | --------- |
| Chas. Dickens | 88666393  |
| Dickens       | 88666393  |
| George Eliot  | 89000553  |

A few notes here.

1. `author` is not a formal category, and as such has no identifier.
2. `author@id` refers to the id within the context of the field.
3. `author@name` is not used
4. Unlike in record-oriented linked data forms, the context and type need not
   be repeated. This greatly increases processing time and storage time.
5. Unlike in record-oriented linked data forms, empty fields must be explicity
   denoted. In cases with a large number of possible headers (for instance,
   a small batch of MARC records) this may markedly increase transfer,
   processing or storage costs.
