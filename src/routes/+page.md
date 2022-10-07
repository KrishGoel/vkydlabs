<script>
	let title= "VKYD Labs";
	let description = "Notes on building a principled algorithmic trading bot.";
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



<a href="mailto:vkydlabs@gmail.com" aria-label="Mail to VKYD Labs"><button>Shoot a mail ></button></a>

<figcaption>*We, here, refers to the team of shared-ideology I aim to build with VKYD, and is in no way indicative of our team's cardinality (which currently stands strong at 1)</figcaption>

<!-- <hr/>

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
	<figcaption>Expect notes over here</figcaption>
{/if} -->