---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Bookworm Caching'
subtitle: ''
summary: ''
authors: ['Ben Schmidt']
tags: ['Apache Arrow', 'Bookworm']
categories: []
date: 2021-03-07T11:18:47-05:00
lastmod: 2021-03-07T11:18:47-05:00
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
projects: ['Bookworm']
---

I used to blog _everything_ that I did about a project like [Bookworm](https://github.com/bookworm-project),
but have got out of the habit. There are some useful changes coming through
through the pipeline, so I thought I'd try to keep track of them, partly
to update on some of the more widely used installations and partly

The core work on Bookworm happened in 2011-2013 when I was at Harvard working
with Erez Lieberman Aiden and JB Michel as a way of bringing the metadata
in digital libraries to interfaces like the Google Ngram Viewer that they built.

As such, it uses a very 2000s form of content management: a single-server, LAMP
stack oriented architecture that assumes you have a MySQL database always running
and can post individual queries against it.

Over the years, I've tweaked the backend a bit to allow for more resilience
in this architecture. In particular, the web server--like most webservers nowadays--
lives somewhere in the cloud. (On a Digital Ocean droplet, although that's not important.)

That's great, because it means that the server can be basically static. But you
still need a database server somewhere. Even for a medium-sized corpus like
the Rate My Professors one, hosting the databases can be real money simply for
hard drive space--something like $100 a year. On bigger databases like Chronicling
America, these costs are prohibitive on many servers. Historically, I just
used a desktop in my office. But under COVID, that has kind of fallen apart, because
what used to be about 99% uptime on a machine plugged into Ethernet has
degraded into perhaps 50% uptime on a machine on residential wifi in my bedroom
at home.

That means that every week, I get e-mails from people about to run
a workshop suddenly realizing that the site on [gendered teaching evaluations](//benschmidt.org/profGender)
has broken. There are two solutions here.

1. Virtualize the server and run it in the cloud, too.
2. Cache results so that the frontend can run without MySQL entirely.

I'm working on both, but the second is easier--that's what I'm describing here.

The strategy is essentially to build up a local cache of the most common
queries that can live on the webserver. As a format for that cache I'm using
the Apache Arrow's `.feather` format, which I'm become enamored of in the last
year--it's a binary serialization that's far smaller and faster to load than JSON.
For each query I generate an SHA-1 hash from the description of the query; if
that exists among the last 256 queries to the server, a local version of the bookworm
API that runs without MySQL can return the answer directly, whether or not
the database backend is still alive. If it does, great. If not, we fall
back to a proxy form of the API that can reach out to my home server's API
endpoint. In addition to that 256-item LRU (least-recently-used item) cache, there's
also an option to specify a cold storage cache. For the RateMyProfessors
Bookworm, my plan is to fill this with several thousand of the most frequent
queries so that workshops can generally proceed without any trouble even when
the main db is down.

There are other ways of handling caching. This one is notably deficient
in that it's not truly a static solution: there's still a python daemon
running to process the API requests on each query. I had always thought
that I'd probably just store JSON on the server directly so that a Bookworm
could run entirely statically. I may yet do that. But this also serves another
purpose of mine, which is to extend the family of API backends Bookworm can run
on. A local cache backed by MySQL isn't much different than MySQL itself, but
it opens up some more useful possibilities, such as:

1. hitting multiple _different_ MySQL backends,
   which allows sharding bookworm
   servers on extremely large corpora.
2. Building entirely different backends on things like Solr or ElasticSearch.
   (Although I'll note that the old MySQL architecture, dated as it is,
   continues to allow things that none of the Lucene managers I've worked
   with over years think is possible in routine time in terms of aggregating
   queries.)
3. Data transfer over http using arrow, which is now fully supported
   (it's happening behind the scenes on every query now) which opens up some
   useful possibilities for speeding up and making Python and R modules
   more type aware.

### Extremely Technical notes

But a stack this complicated also has complications. Some come from the new
Docker setup. Just as a note to myself and anyone else attempting something
similarly complicated:

1. Remote forwarding to docker requires enabling GatewayPorts on ssh configuration
   both for the client (~/.ssh/config) and the host (`/etc/lib/sshd_config` or something)
2. That's dangerous! So immediately following that, I had to set up `ufw` to
   block all incoming connections to the webserver except on ports 80 and 443.
3. Now docker is once again not allowed to access the host, because it's
   technically an outside host. I allow accept to the docker subnet with
   `ufw allow from 172.24.0.1`. I don't know if `127.24.0.1` is always the
   address for a docker cluster; I found it by doing `docker container ls` to
   get my containers, and then `docker inspect $ID` on the relevant container,
   which gave and IPAddress of `172.24.0.2`. I'm just going to assume that
   anything docker allocated will be in the `172.24.0.*` range.
4. Just as the webserver needs to know where docker lives, docker needs to
   know the webserver. That I get with ifconfig, looking for the docker0 subnet
   IP address. In that context, it's `172.17.0.1`.
   Note `172.17` instead of `172.24`;
   I would have thought they'd be the same, so evidently I don't really understand
   networking.
