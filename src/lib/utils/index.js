export const fetchMarkdownPosts = async () => {
	try {
		const allPostFiles = import.meta.glob('/src/routes/notes/posts/*.md')
		const iterablePostFiles = Object.entries(allPostFiles)
	
		const allPosts = await Promise.all(
			iterablePostFiles.map(async ([path, resolver]) => {
				const { metadata } = await resolver()
				const postPath = path.replace(".md", "").replace("/posts", "").replace("/src/routes/", "")
				
				const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				const published = monthNames[new Date(metadata.date).getMonth()] + " " + new Date(metadata.date).getDate() // Get "January 10 from "
	
				return {
					meta: metadata,
					path: postPath,
					published: published
				}
			})
		)
	
		return allPosts
	} catch (error) {
		return (error)
		console.error(error);
	}
}