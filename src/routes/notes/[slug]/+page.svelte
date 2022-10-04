<script>
	export let data;

	let title = data.title + " | VKYD Labs"
	let description= data.description
	let url = "https://vkydlabs.com/notes/" + data.url
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

<style>
	article hr {
		margin-top: 25px
	}
	article .tags {
		margin-top: 15px
	}
</style>

<article>
	<h1>{data.title}</h1>
	<p>{data.description}</p>
	<p style="color: var(--text-light-grey)">{data.published}</p>
	<div class="row tags">
		{#each data.tags as tag}
			<p class="tag">{tag}</p>
		{/each}
	</div>
	
	<hr />

	<svelte:component this={data.content} />
</article>
