<script>
	let title= "About | VKYD Labs";
	let description = "VKYD Labs Description";
	let url = "https://vkydlabs.com/about";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content="{title}" />
    <meta name="description" content="{description}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:url" content="{url}" />
    <meta property="og:description" content="{description}" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:url" content="{url}" />
    <meta name="twitter:description" content="{description}" />
</svelte:head>

## If you have somehow found this page, consider not reading because it's nothing more than a braindump right now.

# An Introduction

At this stage, I think we qualify to be more of an experiment than a startup. Let’s call this experiment the **VKYD Bot** until a better name.

<!-- VKYD Bot until a better name -->

The idea behind the VKYD Bot is to pragmatically resolve the difference between the effectiveness of value-investing and trading in the financial markets _(which seems to be a weirdly polarising issue to me, though I haven’t explored the markets firsthand)_.

I think a decent starting point to introduce this idea would be starting with introducing myself first and building it up from there.

~~Krish is a CS Major with a specialization in AI & ML from New Delhi.~~ 
<figcaption>
    A third-person intro would make this sound very corporate and I would like to keep this as informal and startup-like as possible. Take II - 
</figcaption>

Hi, I am <a href="https://krishgoel.com" rel="external" target="_blank">Krish</a>. I like to believe I (will) operate well at the intersection of tech and finance primarily due to my natural inclinations towards both domains, this bot will be a venture in the same space, for the same reason.

<figure style="max-width: 400px">
    <img src="/images/about.webp" alt="Krish Goel"/>
    <figcaption>
        I am the key promoter of <a href="https://krishgoel.com" rel="external" target="_blank">krishgoel.com</a> and the only one actively building VKYD Labs. Should you wish to join the team, please <a href="mailto:vkydlabs@gmail.com" rel="external">shoot me an email.
    </figcaption>
</figure>

The eureka moment for this venture was in a Calculus-III lecture after I had just finished reading <a href="https://www.principles.com/" rel="external" target="_blank">Principles by Ray Dalio</a> last semester. The book talked about how <a href="https://www.bridgewater.com/" rel="external" target="_blank">Bridgewater Associates</a> uses its set of refined principles to automate investing to a great extent. Normally you’d expect a hedge fund to be rather conservative about bots and long on value-investing, but Bridgewater operates somewhere at the middle of this spectrum and their success is a fair point to not discard quantitative bots altogether (though they do not explicitly use “quants”).
<figcaption>I think Principles (the book) will serve as a guiding light for a considerable part of this idea.</figcaption>

There are a couple of conflicting ideas, “life dogmas” and observations at play here -

### Observations and Ideas
- The fundamental analysis of a listed company (or any commodity) sounds almost mechanical (calculation of the fair price using P/E Ratios, knowing the ideal range of cash-flow-to-debt ratio for viability, etc.), this makes the job appear to be extremely “automatable”.
- I don’t see a clear reason to not exploit the movements of the price graph (volatility) other than the <a href="https://nav.al/renting-time" rel="external" target="_blank" aria-label="Naval Ravikant on renting out time">directly proportional time investment</a> but that’ll be automated through code in this case.
- From surface research, lack of patience and excess of panic and reactivity (non-stoic traits) is a common points of failure for traders, this shouldn’t be a problem with mechanical code (at least until some form of dynamic intelligence is involved; AI isn’t a part of my **current** vision, I wish to make it structurally mechanical and _maybe_ later introduce AI as and when deemed appropriate).

### Conflicting “Dogmas of Life”

Thermodynamically, _there is no perpetual source of energy, analogously, wealth_. And I fail to see how a "buy low, sell high, very fast" algorithm fails, which roughly translates to ensured profits. This seems like a false reality because if it were so, quantitative bots would be a lot more widely adopted and not commercially available for sale (the creators would limit their outspread as much as possible under self-interest).
<figcaption>and the markets would just be full of high-speed trading bots. It just sounds like an infinite money glitch.</figcaption>

But again, there is a fair amount of knowledge, intelligence, and skill required to write and operate the code so the effort/reward ratio isn’t exactly 0. This adds a little bit of credibility to the idea and ruling it out starts sounding dull again.

### 1<sup>st</sup> Order Conclusion

From my current POV, there has to be a point of failure (or multiple) in this approach to investing but I am limited by both - experience and knowledge and that sounds like a good enough starting point.

<figcaption>This is just my conclusion from the aforementioned observations and conflicting ideas, not to be confused with takeaways or learnings from the project (they'll come from actually working on this).</figcaption>

## Plan of Action and What You Can Expect
From the observational conclusion, the first order of business should be getting to the point where the algorithmic trading fails (if at all) by building the prototype and then start fixing the problems from there.

As I see it, there are 2 major steps to building the prototype -

### 1. Developing the decision-making framework for the bot
This would include reading up on the principles used by traders and by value investors and choosing the ones that seem fundamentally sound.
I’ll be publishing the learnings from the books I read on this web app and also the social media channels of VKYD Labs, they’ll be available gratis, for a lifetime. There will also be a separate compilation of the principles that will be implemented in the bot and a live document describing the progress and working of the decision-making framework.

Also, I do not wish to explore any pre-existing bots in the market (until the prototype is ready) because I want the first version of the VKYD Bot to be as organic and straight-out-of-my-head as possible.
<figcaption>You can better <a href="http://paulgraham.com/think.html" rel="external" target="_blank" aria-label="Paul Graham on thinking independently">understand my reasoning here</a>.</figcaption>

### 2. Programming the actual bot

The logical aspect of this shouldn’t be too hard but it’ll be exhausting because of all the code we’ll have to write. There will be a separate document explaining the tech stack but that’s for later.
<figcaption>Side note: I'll be trying to work with Zerodha APIs or any other solutions they offer because that's just been on my list for some time and I love the company as a whole.</figcaption>

You can also expect periodically published entries on the technological aspect from any resources (blogs, videos, and courses) I come across.

That sounds like pretty much it for now. Godspeed.