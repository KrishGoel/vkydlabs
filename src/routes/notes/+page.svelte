<script>
	export let data;
	// console.log(JSON.stringify(data))
</script>

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
		<figcaption>Expect notes over here</figcaption>
{/if}