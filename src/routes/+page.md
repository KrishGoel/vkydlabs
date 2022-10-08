<script>
	let title= "VKYD Labs";
	let description = "Notes on automating investing and trading through math and principles.";
	let url = "https://vkydlabs.com/";

	export let data;
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

# We* are an Experiment
### Pragmatic resolution to investing v/s trading

VKYD Labs is an experimental venture in the financial trading space. We're working on building 2 algorithmic trading bots - each to mimic a principled value investor and a principled trader. You may expect progress updates, revisions, and notes from learnings along the way on this webpage.

To learn more about the _Eureka!_ Moment, or about us in general, check out [/about](/about).

If you're interested in joining the team, please <a href="mailto:vkydlabs@gmail.com" rel="external" target="_blank" aria-label="Mail to VKYD Labs">shoot us an email</a> and we'll get back to you asap.

<!-- <a href="mailto:vkydlabs@gmail.com" aria-label="Mail to VKYD Labs"><button>Shoot a mail ></button></a> -->

<figcaption>*We, here, refers to the team of shared-ideology I aim to build with VKYD and is in no way indicative of our team's cardinality (which currently stands strong at 1)</figcaption>

<hr/>

# Notes

{#if data.posts.length != 0}
	## 2022
	{#each data.posts as post}
		<div class="post">
			<h3><a href={post.path}>{post.meta.title}</a></h3>
			<p>{post.meta.description}</p>
			<p style="font-size: 13px">{post.published}</p>
			<div class="tags">
				{#each post.meta.tags as tag}
					<p class="tag">{tag}</p>
				{/each}
			</div>
		</div>
	{/each}
{:else}
	Expect notes over here
{/if}