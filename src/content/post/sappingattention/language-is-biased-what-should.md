---
title: 'Language is biased. What should engineers do?'
date: 2016-08-29T09:53:00.001-04:00
draft: false
url: /2016/08/language-is-biased-what-should.html
---

Word embedding models are kicking up some interesting debates at the confluence of ethics, semantics, computer science, and structuralism. Here I want to lay out some of the elements in one recent place that debate has been taking place inside computer science.  
  
I've been chewing on [this paper](https://freedom-to-tinker.com/blog/randomwalker/language-necessarily-contains-human-biases-and-so-will-machines-trained-on-language-corpora/) out of Princeton and Bath on bias and word embedding algorithms. (Link is to a blog post description that includes the draft). It stands in an interesting relation to [this paper](https://arxiv.org/abs/1607.06520) out of BU and Microsoft Research, which presents many similar findings but also a debiasing algorithm similar to (but better than) [the one I'd used to find "gendered synonyms" in a gender-neutralized model](http://bookworm.benschmidt.org/posts/2015-10-30-rejecting-the-gender-binary.html). (I've since gotten a chance to talk in person to the second team, so I'm reflecting primarily on the first paper here).  
  
  
  
Although it's ostensibly about word embeddings, it draws some extremely large claims that seem like it's worth filtering over into the digital humanities community. They offer further evidence for my argument from last year that word embeddings [offer digital humanists a tool particularly attuned to making broad statements about discourses](http://bookworm.benschmidt.org/posts/2015-10-25-Word-Embeddings.html) and meaning.  
  
The actual content of the paper is not especially surprising: they show that patterns mapping to positive and negative feelings in implicit association tests run by psychologists also exist in word embeddings trained on large corpora. This represents something of an advance over the published literature, I guess, in demonstrating with p-values\* that it isn't just gender binaries that show up in word embeddings: they also associate black names on the side of a pleasant/unpleasant binary with white names.  
  
They also include one killer example of how word embeddings act in a real-world service that's worth trotting out for those who don't think word embeddings are their like are an important piece of social infrastructure:  
  

  
Translations to English from many gender-neutral languages such as Finnish, Estonian, Hungarian, Persian, and Turkish lead to gender-stereotyped sentences. For example, Google Translate converts these Turkish sentences with genderless pronouns: “O bir doktor. O bir hems ̧ire.” to these English sentences: “He is a doctor. She is a nurse.” 

  
The paper quickly moves, though, to some quite broad generalizations about what language, meaning and bias are. These, I think, are more debatable.  
  
  

We demonstrate here for the first time what some have long suspected (Quine, 1960)—that semantics, the meaning of words, necessarily reflects regularities latent in our culture, some of which we now know to be prejudiced.  
  
  

\[...\] Our work lends credence to the highly parsimonious theory that all that is needed to create prejudicial discrimination is not malice towards others, but preference for one’s ingroup  
  
 \[...\] The simplicity and strength of our results suggests a new null hypothesis for explaining origins of prejudicial behavior in humans, namely, the implicit transmission of ingroup/outgroup identity information through language. That is, before providing an explicit or institutional explanation for why individuals make decisions that disadvantage one group with regards to another, one must show that the unjust decision was not a simple outcome of unthinking reproduction of statistical regularities absorbed with language.  

 \[..\] First, our results suggest that word embeddings don’t merely pick up specific, enumerable biases such as gender stereotypes (Bolukbasi et al., 2016), but rather the entire spectrum of human biases reflected in language  

  
\[...\] Bias is identical to meaning, and it is impossible to employ language meaningfully without incorporating human bias. \[In the blog post: "At a high level, bias is meaning. 'Debiasing' these machine models, while intriguing and technically interesting, necessarily harms meaning."\]  

  
\[...\] Normally when we design AI architectures, we try to keep them as simple as possible to facilitate our capacity to debug and maintain AI systems. However, where AI is partially constructed automatically by machine learning of human culture, we may also need an analog of human explicit memory and deliberate actions, that can be trained or programmed to avoid the expression of prejudice.  
Of course, such an approach doesn’t lend itself to a straightforward algorithmic formulation. Instead it requires a long-term, interdisciplinary research program that includes cognitive scientists.  
  

Heady stuff!  
  
What to make of it? Well, my first reaction is that many of these statements much too easily elide "similarity in vector space" with "meaning." Quine's "suspicions" (sort of an odd way to describe analytic philosophy--as a set of suspicions awaiting proof) are only _proven_ if a word embedding is itself true. If you think of word embeddings as a neatly factorized co-occurrence matrix--which is all they actually are--they can't really prove anything, on their own.  
  
There's also a sort of strong Whorfianism to these statements that I think the authors share with a lot of cultural historians (including myself, 4 days a week or so): the implication is strong that language determines our abilities to interpret the world. My current, non-expert understanding, though, is that [linguists](http://languagelog.ldc.upenn.edu/nll/?p=2592) tend to be a bit more restrained.  
  
Some inductions in the second part are real leaps unless you believe a very strong version of the Sapir-Whorf hypothesis, and some other things besides. Why, for example, should 'implicit transmission of ingroup/outgroup identity' through language be the null hypothesis to explain any prejudicial behavior? The jump to ingroup/outgroup seems totally unfounded (even in their three examples; I'd say that humans _identify_ with insects more even as they find flowers more pleasant, and I don't what ingroup-outgroup has to do with assumptions about gender and profession.) And it takes an incredible belief in the power of language to conclude that evidence of bias in language makes language the default _source_ of bias. In a way, it's a correlation/causation problem.  
  
Some of this seems to be coming from an underlying theory of meaning as not embodied in individual actors. One of the authors, Joanna Bryson, links in the comments to [previous, more philosophical, work of hers](https://www.cs.bath.ac.uk/~jjb/ftp/memetics.pdf) that characterizes language in terms of memetics, in which memes evolve "more or less independently of their human-agent substrates." I'm sure there's more to say here; memetics often seems reductionist to people who do cultural studies for a living. One key question going forward, I guess, is whether tokens in vector space and memetics prove to be useful partners for each other.  
  
But the big question here is about social responsibility and how we divvy it up.  
  
The exciting thing about the BU/Microsoft paper is that they show how a fairly simple set of tricks can potentially make word embeddings less biased than they naturally are; and even, potentially, less biased than "ordinary people," whatever that means. (This is exciting only if you didn't share the folk assumption that "algorithms are neutral." I'd guess that while most people think that, most reading this blog don't.) They lay out parameters for eliminating the largest (largest, that is, in magnitude) form of gender bias in a word embedding. Expanded to its limit, the assumption there is that if you can _name_ a prejudice, you can also make it disappear through linear algebra.  
  
The Princeton/Bath paper has a more tragic take; that bias and meaning are entangled (or even identical; at times their stance seems to be that meaning is the sum total of all biases that individuals have), and that elimination of prejudice isn't something we can safely leave to engineers. It needs "cognitive scientists and ethicists."  (In the blog post, cognitive scientists are eliminated in favor of "domain experts." "Domain experts," I've realized, play roughly the same role in computer science as angels and scripture do in Thomistic philosophy; a source of revealed knowledge wholly outside normal channels of deduction.)  
  
There's much to be praised in that sort of disciplinary modesty about engineering social choices. But it's also a little problematic in absolving computer engineering of social responsibility. I suppose there's a valid criticism here of the idea that all word-embeddings should be de-biased before being distributed; but that argument seems like a straw man. It doesn't take a professional ethicist that (say) a job-recommendation engine should be debiased. Telling engineers that that they should consult ethicists before changing embeddings would, in practice, be tantamount to telling them to do nothing.  
  
In some ways, maybe, the debate is over how seriously emerging techniques of "deep learning" are taken seriously as real artificial intelligence. Word embeddings are an interesting place to think about this because in some ways they seem remarkably intelligent (they use "neural networks;" they perform "analogical reasoning;") while in others they're foolishly simple (they're just matrix factorization over a small window; they don't even have a hidden layer in the network, let alone any of the structures that ostensibly make deep learning the new synonym for AI.) The argument from Princeton/Bath is that word embeddings \*do\* know meanings (for some definition of 'meaning'), and that we need to teach them how to avoid prejudice in the same way humans do. The flip side might be that word embeddings are quite arbitrary in any case, however well they work; and it's fine to make them work straightforwardly better.  
  
Or they might be no difference here at all: I don't find it too hard to read the Bath paper as an argument that debiasing should be done when word vectors are \*used\*, not when they're distributed, and that there are cases in which biased vectors are useful. The latter is obviously true; the former might be, although I think in most cases no one would do it.