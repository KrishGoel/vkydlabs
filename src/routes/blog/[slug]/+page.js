export async function load({ params }) {
	try {
		const post = await import(`../posts/${params.slug}.md`)
		const { title, date, description, tags } = post.metadata
		const content = post.default
		const url = params.slug
	
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const published = monthNames[new Date(date).getMonth()] + " " + new Date(date).getDate() // Get "January 10 from "
	
		return {
			content,
			title,
			date,
			published, 
			description,
			tags,
			url 
		}
	} catch (error) {
		return (error)
		console.error(error);
	}
}

// Boilerplate, implement try/catch 