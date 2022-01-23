---
id: 355
title: Building topic models into Bookworm searches
date: 2014-09-23T22:29:38+00:00
author: ben
layout: post
guid: http://benschmidt.org/?p=355
url: /2014/09/23/building-topic-models-into-bookworm-searches/
categories:
  - Bookworm
---
I&#8217;ve been seeing how deeply we could integrate topic models into the underlying Bookworm architecture a bit lately.

My own chief interest in this, because [I tend to be a little wary of topic models in general](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0CDYQFjAD&url=http%3A%2F%2Fjournalofdigitalhumanities.org%2F2-1%2Fwords-alone-by-benjamin-m-schmidt%2F&ei=e-khVJPVEoGlyATn2YDACw&usg=AFQjCNEZ-HbfeSjBnBMmQSSYmwe0ZihLRg&sig2=-QyPN0kuTZlexRtnPVZzdw), is in the possibility for Bookworm to act as a diagnostic tool internally for topic models. I don&#8217;t think simply plotting description absent any analysis of the underlying token composition of topics is all that responsible; Bookworm offers a platform for actually accessing those counts and testing them against metadata.

But topics also have a lot to offer token-based searching. Watching links into the Bookworm browser, I recently stumbled on [this exchange](https://twitter.com/BioInFocus/status/514494148574203907):

![](/wp-content/uploads/2014/09/Tweets.png)

&nbsp;

How can I solve this biologist&#8217;s problem? (Or, at least, waste more of his time?)

The word-level topic assignments I have on hand are actually real useful for this. (I&#8217;m assuming, I should say, that you know both the basics of topic modeling and of the movie bookworm.) I can ask the beta bookworm browser for the top topics associated with each of the words &#8220;fly&#8221; (top) and &#8220;ant&#8221; (bottom):

&nbsp;

<div id="attachment_357" style="width: 808px" class="wp-caption alignnone">
  <a href="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly.png"><img class="wp-image-357 size-full" src="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly.png" alt="fly" width="798" height="672" srcset="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly-624x525.png 624w, http://benschmidt.org/wp/wp-content/uploads/2014/09/fly.png 798w" sizes="(max-width: 798px) 100vw, 798px" /></a>
  
  <p class="wp-caption-text">
    Fly usage by topic
  </p>
</div>

&nbsp;

<div id="attachment_358" style="width: 635px" class="wp-caption alignnone">
  <a href="http://benschmidt.org/wp/wp-content/uploads/2014/09/ant.png"><img class="wp-image-358 size-large" src="http://benschmidt.org/wp/wp-content/uploads/2014/09/ant-1024x730.png" alt="ant" width="625" height="445" srcset="http://benschmidt.org/wp/wp-content/uploads/2014/09/ant-300x214.png 300w, http://benschmidt.org/wp/wp-content/uploads/2014/09/ant-1024x730.png 1024w, http://benschmidt.org/wp/wp-content/uploads/2014/09/ant-624x445.png 624w, http://benschmidt.org/wp/wp-content/uploads/2014/09/ant.png 1121w" sizes="(max-width: 625px) 100vw, 625px" /></a>
  
  <p class="wp-caption-text">
    Ant usage by topic
  </p>
</div>

&nbsp;

&#8220;Fly&#8221; is overwhelmingly associated with the topics &#8220;boat ship Captain island plane sea water&#8221; (airplane flying) and &#8220;life day heart eyes world time beautiful&#8221; (unclear, but might be superman flying). (It&#8217;s even more so than on this chart, since I&#8217;ve lopped off the right side: there are about 2200 uses of &#8220;fly&#8221; in the first topic).

But &#8220;ant&#8221; is most used in two clearly animal related topics: &#8220;water animals years fish time food ice&#8221; and &#8220;dog cat little boy dogs Hey going.&#8221; And both of those topics show up for &#8220;fly&#8221; as well.

So in theory, at least, we can \*restrict searches by topic:\* rather than put into a Bookworm \*every\* usage of the word &#8220;fly&#8221;, we can get only those that seem, statistically, to be used in an animal-heavy context.

With an imperfect, 64-topic model on a relatively small corpus like the Movie Bookworm, this is barely worth doing.

<div id="attachment_360" style="width: 916px" class="wp-caption alignnone">
  <a href="http://benschmidt.org/wp/wp-content/uploads/2014/09/Ant-in-context.png"><img class="wp-image-360 size-full" src="http://benschmidt.org/wp/wp-content/uploads/2014/09/Ant-in-context.png" alt="Ant-in-context" width="906" height="428" srcset="http://benschmidt.org/wp/wp-content/uploads/2014/09/Ant-in-context-624x294.png 624w, http://benschmidt.org/wp/wp-content/uploads/2014/09/Ant-in-context.png 906w" sizes="(max-width: 906px) 100vw, 906px" /></a>
  
  <p class="wp-caption-text">
    Ant in animal topics per million words in all topics
  </p>
</div>

<div id="attachment_359" style="width: 939px" class="wp-caption alignnone">
  <a href="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly2.png"><img class="wp-image-359 size-full" src="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly2.png" alt="fly2" width="929" height="450" srcset="http://benschmidt.org/wp/wp-content/uploads/2014/09/fly2-300x145.png 300w, http://benschmidt.org/wp/wp-content/uploads/2014/09/fly2-624x302.png 624w, http://benschmidt.org/wp/wp-content/uploads/2014/09/fly2.png 929w" sizes="(max-width: 929px) 100vw, 929px" /></a>
  
  <p class="wp-caption-text">
    Fly in animal topics per million words in all topics
  </p>
</div>

And given that &#8220;flying&#8221; is something that plenty of animals do, the &#8220;fly&#8221; topic here is probably not all Order Diptera.

But with collections the size of the Hathi trust, this could potentially be worth exploring, particularly with substantially larger models. &#8220;Evolution&#8221; is one of the basic searches in a few bookworms: but it&#8217;s hard to use, because &#8220;evolution&#8221; means something completely different in the context of 1830s mathematics as opposed to 1870s biology. A topic model that could conceivably make a stab at segregating out just biological &#8220;evolution,&#8221; though, would be immensely useful in tracing out Darwinian changes; one that could disentangle military shooting from the interjection &#8220;shoot!&#8221; might be good at studying slang.

Above all, this might be good at finding words that migrate meanings in early uses: most new phrases actually emerge out of some early construction, but this would let us try to recover meaning through context.

Hell, it might even have an application in Prochronisms work; given a large, pre-built topic model, any new scripts could be classified against it and their words assigned to topics, and tested for their appropriateness as a topic-word combination.

Technical note: the basics of this are pretty easy with the current system: the only issue with incorporating &#8220;topic&#8221; as a metadata field on the primary browser right now is that the larger corpus it compares against would also be limited by topic. This could be solved by using the asterisk syntax that no one uses: {&#8220;\*topic&#8221;:[3],&#8221;\*word&#8221;:[&#8220;fly&#8221;]} will ensure both are dropped, not just one, by just specifying the &#8220;compare_limits&#8221; field manually.

&nbsp;