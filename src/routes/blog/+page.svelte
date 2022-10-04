<script context="module">
	export const load = async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`)
		const posts = await response.json()
	
		return {
			posts
		}
	} catch (error) {
		return (error)
		console.error(error);
	}
}
</script>

<script>
	export let data;

	console.log(JSON.stringify(data))
</script>

<h1>Blog</h1>

<h2>2022</h2>

{#each data.posts as post}
	<div class="post">
		<h3><a href={post.path}>{post.meta.title}</a></h3>
		<p>{post.meta.description}</p>
		<p style="font-size: 13px">{post.published}</p>
		<div class="row tags">
			{#each post.meta.tags as tag}
				<p class="tag">{tag}</p>
			{/each}
		</div>
	</div>
{/each}
