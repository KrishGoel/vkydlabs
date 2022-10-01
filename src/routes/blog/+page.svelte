<script>
	export let data;
</script>

<h1>Blog</h1>

<h2>2022</h2>

{#each data.posts as post}
	<div class="post">
		<h3><a href={post.path}>{post.meta.title}</a></h3>
		<p>{post.meta.description}</p>
		<p style="font-size: 13px">{post.meta.published}</p>
		<div class="row tags">
			{#each post.meta.tags as tag}
				<p class="tag">{tag}</p>
			{/each}
		</div>
	</div>
{/each}
