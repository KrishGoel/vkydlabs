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

<!-- ## If you have somehow found this page, consider not reading because it's nothing more than a braindump right now. -->

# An Introduction

At this stage, I think we* qualify to be more of an experiment than a startup. Let's call this experiment VKYD Labs (pronounced _/ˈwɪkɪd/_).
<figcaption>*Expect the usage of "we" and "I" interchangbly, for reasons explained on the <a href="/">index page</a>.</figcaption>

<!-- VKYD Bot until a better name -->

My goal with the VKYD Labs is to pragmatically resolve the difference between the effectiveness of value-investing and trading in the financial markets _(which seems to be a weirdly polarising issue to me, though realistically, I have zero firsthand experience with the markets)_.

I think a decent kickoff point to explaining this idea would be introducing myself, why I had this idea, and then building it up from there.

~~Krish is a CS Major with a specialization in AI & ML from New Delhi.~~ 
<figcaption>
    A third-person intro would make everything sound very corporate and I would like to keep this as informal and startup-like as possible. Take II - 
</figcaption>

Hi, I am <a href="https://krishgoel.com" rel="external" target="_blank">Krish</a>. I like to believe I (will) operate well at the intersection of tech and finance primarily due to my natural inclinations towards both the domains, this bot will be a venture in the same space, for the same reason.

<figure style="max-width: 400px">
    <img src="/images/about.webp" alt="Krish Goel"/>
    <figcaption>
        I am the "key promoter" of <a href="https://krishgoel.com" rel="external" target="_blank">krishgoel.com</a> and the only one actively building VKYD Labs. Should you wish to join the team, please <a href="mailto:vkydlabs@gmail.com" rel="external">shoot me an email.
    </figcaption>
</figure>

The eureka moment for this venture was in a Calculus-III lecture in my second semester of engineering -----------

<!-- The eureka moment for this venture was in a Calculus-III lecture in my second semester of engineering after I had just finished reading <a href="https://www.principles.com/" rel="external" target="_blank">Principles by Ray Dalio</a>. The book talked about how <a href="https://www.bridgewater.com/" rel="external" target="_blank">Bridgewater Associates</a> uses its set of refined principles to automate investing to a great extent. Normally you’d expect a hedge fund to be rather conservative about bots and long on value-investing, but Bridgewater operates somewhere at the middle of this spectrum and their success is a fair point to not discard quantitative bots altogether (though they do not explicitly use “quants”). 

This got me thinking to exploting
<figcaption>I think Principles (the book) will serve as a guiding light for a considerable part of this idea. Here's the <a href="/images/first-sketch.jpeg" target="_blank">sketch I made in that class</a> (fictitious numbers but you'll get the idea).</figcaption> -->

However, I see a couple of conflicting ideas, “life dogmas” and observations at play here -

### Observations and Ideas
- The fundamental analysis of a listed company (or any commodity) sounds almost mechanical (calculation of the fair price using P/E Ratios, knowing the ideal range of cash-flow-to-debt ratio for viability, etc.), this makes the whole process appear to extremely "automatable".
- I don’t see a clear reason to not exploit the fluctuations in the price of a stock (volatility) other than the <a href="https://nav.al/renting-time" rel="external" target="_blank" aria-label="Naval Ravikant on renting out time">directly proportional time investment</a> but that’ll be automated through code in this case.
- From surfacial research, lack of patience and excessive reactivity and panic (non-stoic traits) are common points of failure for traders, this shouldn’t be a problem with mechanical code (at least until some form of dynamic intelligence is involved) 
<figcaption>AI isn’t a part of my <strong>current</strong> vision, I wish to make it structurally mechanical and <strong>maybe</strong> later introduce AI as and when deemed appropriate).</figcaption>

### Conflicting “Dogmas of Life”

Thermodynamically, _there is no perpetual source of energy_, analogous to energy - _wealth_. And I fail to see how a "buy low, sell high, very fast" algorithm fails, which roughly translates to ensured profits. 

This seems like a false reality because if it were so, quantitative bots would be a lot more widely adopted and not commercially available for sale (the creators would limit their outspread as much as possible under self-interest).
<figcaption>and the markets would just be full of high-speed trading bots. It just sounds like an infinite money glitch.</figcaption>

But again, there is a fair amount of knowledge, intelligence, and skill required create an algorithm that actually works and operate the code, so the effort/reward ratio isn’t exactly 0. This adds a little bit of credibility to the idea.

### 1<sup>st</sup> Order Conclusion

From my current POV, there has to be a point of failure (or multiple) in this approach to investing** but I am limited by both - experience and knowledge and that sounds like a good enough starting point. Time to build it.

<figcaption>**Referring to the act of deploying funds in the market, not strictly "value-investing".</figcaption>

## Plan of Action and What You Can Expect
From the observational conclusion, the first order of business should be getting to the point where the algorithmic trading fails (if at all) by building the prototype followed by fixing the problems that arise.

As I see it, there are 2 major steps to building the prototype -

### 1. Developing the decision-making framework for the bot
This would include reading up on ideas, strategies and principles used by investors, and choosing the ones that seem fundamentally sound.

I’ll be publishing the learnings from the contetn I consume, on this web app and also the social media channels of VKYD Labs. They’ll be available gratis, for lifetime. There will also be a live-document compiling the the principles that will be implemented in the bot and a document describing the progress and working of the decision-making framework.

Also, I do not wish to explore any pre-existing bots in the market (until the prototype is ready) because I want the first version of the VKYD Bot to be as organic and straight-out-of-my-head as possible.
<figcaption>You can better <a href="http://paulgraham.com/think.html" rel="external" target="_blank" aria-label="Paul Graham on thinking independently">understand my reasoning here</a>.</figcaption>

### 2. Programming the actual bot

The logical aspect of this shouldn’t be too hard but it’ll be exhausting because of all the code we’ll have to write. There will be a separate document explaining the tech stack but that’s for later.
<figcaption>Side note: I'll be trying to work with Zerodha APIs or any other solutions they offer because that's just been on my list for some time and I love the company as a whole.</figcaption>

You can also expect periodically published entries on the technological aspect from any resources (blogs, videos, and courses) I come across.

That sounds like pretty much it for now. Godspeed.