<script>
	let title= "Notes | VKYD Labs"
	let description = "Notes on automating investing and trading through math and principles.";
	let url = "https://vkydlabs.com/notes"

	export let data
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

<h1>Notes</h1>

<hr/>
{#if data.posts.length != 0}
	<h2>2022</h2>
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
		<div style="height: 40vh"></div>
{/if}