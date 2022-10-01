export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`)
	const { title, date, published, description, tags } = post.metadata
	const content = post.default
	const url = params.slug

	return {
		content,
		title,
		date,
		published, 
		description,
		tags,
		url 
	}
}

// Boilerplate, implement try/catch 