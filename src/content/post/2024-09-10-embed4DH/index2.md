# Culture slurry

I recently got a chance to spend some time back in my original professional terrain with people from the digital humanities, and realized that for all the excitement about AI, there's an opportunity that's perhaps in the process of being missed. There is a massive conflation of the power of _modern AI_ with _generative AI_. This steers away from precisely the most interesting problems for the humanities, and their most interesting contributions to the rest of the world. Nor is it a problem unique to the humanities; although LLMs that write, draw, and code have captured the imaginations of writers and investors alike, the core facility of LLMs -- [representation learning](https://academic.oup.com/ahr/article-abstract/128/3/1350/7282258)

There are people who care about little things, and people who care about the big picture. Ask an astronomer what their favorite star or biologist their favorite run of base pairs, and they'll look at you like you're an idiot because each individual is just a collection of sensor readings they feed into a model.[^sun] Ask an English professor for their favorite poem, and they'll look at you like you're an idiot because it's like asking their
favorite child, and God forbid if "For the Union Dead" overhear what they're saying about .

[^If it's an uncharacteristically grounded astronomer, they might quickly reply "the sun" instead.]

The weights -- that is, the model -- of an LLM represents the sediment left behind after the flow of trillions of words of through them. Recipes, ads, groundbreaking scientific research, online harassment campaigns, retracted scientific research; it all flows through the network in and leaves parts behind, but never a whole. What is left behind is an undifferentiated, grey **culture slurry** in which the residue of real ideas exists without attributions, roots, or context.

Slurry has its industrial applications. To write code or raise pigs, a slurry is the thing; but if you care about what goes into the models as much as you care what comes out of them, you might rather your culture _not_ get pulped before it goes into an LLM. An LLM is perfectly capable of a poem about the British national debt in the Napoleonic wars, say; but sometimes what's interesting is not that an LLM can do the trick but knowing [that an actual human bothered to do the same thing], and being able to ask why.

One of the more simple-minded critiques of LLMs calls them ['the plagiarism machine.'](https://www.google.com/search?q=%22plagiarism+machine%22) If only. A plagiarist stares at one page and covertly transcribes the words to another.

But while

The rise of generative AI artifacts threatens a rising sea of machine-made cultural work
that derives from the cultural record but that many fear will overwhelm it in a 'textpocalypse.'

Humanists shouldn't fight the tide; instead, they should make use of the equally powerful
abilities of AI to make real cultural float above the slurry, not be subsumed into it.
The humanities bring a dedication to unearth, highlight, and situate real cultural artifacts; the way to do this with AI is to produce not more machine-written texts
but improved machine-readable texts and -- above all -- take advantage of core technologies
for **machine-read texts**.

We propose to build up the library of usable texts by creating a shared library of cultural artifacts that is read into the same high-dimensional space. The primary avenue will be a set of limited term (3-month) grad student fellowships to develop data model and engineering skills while producing embedded sets of texts and studies of gradation and difference, producing research artifacts that can be foundational for future work.

These will include deposit of the underlying image or text datasets, and the distribution of machine-read versions -- that is, the output of embedding models -- that place these various sets into a coherent whole and allows the execution of other research projects on top of them. Crucially this set involves the creation of aligned machine-read corpora of both images and texts into the same space, and the creation of a sustainable pipeline for the generation of similar sets going forward.

One core focus is the creation of well curated texts with metadata in standard formats for the 2020s. The last decade has brought a revolution in data engineering standards that have not been widely adopted even in academic computer science, let alone in the humanities. But
they solve robustly many of the problems that make digital libraries hard to work with. This ecosystem revolves around open source, robustly documented standards -- the Apache Arrow format for columnar data, the parquet format for storage, and the ecosystem of tools around them like DuckDB, polars, and mosaic -- that remove many of the challenges to distributing data. Websites with tens of thousands of documents built around database backends in the 2000s can now be easily migrated to a single static website file; research code that once required R, or Stata, or Python can be easily checkpointed into a format that
anyone can use.

Even more usefully, these

**Cross training across sets**: One of the most valuable opportunities of rich cultural datasets is that a hypothesis in one set -- that the letters of American farmers in the early 19th century became more oriented to the market, say -- might be metadata in another.

**Bringing the vocabularies of linked open data to columnar formats**: The best data documentation of the 2000s used a rich set of vocabularies and schemas to document what
a date was.
**Images and labels**: While search indices have transformed textual research in the last forty years, image datasets.
**Private texts with public readings**: Concerns over copyright and PII cause many valuable
resources to be locked down; rising concerns about non-commercial use have caused even previously aggressively open-access organizations like the Internet Archive to shiver at feeding their goods into the 'plagiarism machine.' We propose
