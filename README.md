# VKYD Labs
> Notes on building a principled algorithmic trading bot

## Markdown Notes
- To use mathematical equations, import KaTEX to the blogpost's markdown file by adding the following snippet inside the content

	```html
	<script>
		import Katex from 'svelte-katex'
	</script>
	```

	Then use the following snippet to add the equations
	```html 
	<Katex>ax^2+bx+c=0</Katex>
	```
- Guide for adding a captioned image 
	```html
	<figure>
		<img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHw%3D&w=1000&q=80" alt="Trulli">
		<figcaption>Fig.1 - 4K Mountains Wallpaper</figcaption>
	</figure>
	```
- Template structure for a post ```src/notes/posts/*.md```
	```md
	---
	title: Post Title
	description: Principles by Ray Dalio is a fantastic read on investing, work and life principles
	date: 2021-12-18
	tags:
	- Book Summary
	- Investing Principles
	---

	[Content goes here]

	[Katex usage sample]
	<script>
		import Katex from 'svelte-katex'
	</script>
	<Katex>ax^2+bx+c=0</Katex>

	```