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