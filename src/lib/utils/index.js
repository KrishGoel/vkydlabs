export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const postPath = path.replace(".md", "").replace("/posts", "").replace("/src/routes/", "")

			return {
				meta: metadata,
				path: postPath,
			}
		})
	)

	return allPosts
}