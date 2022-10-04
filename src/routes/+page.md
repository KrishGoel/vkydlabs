<script>
	let title= "VKYD Labs";
	let description = "VKYD Labs Description";
	let url = "https://vkydlabs.com/";

	export let data;
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

# Welcome to _VKYD Labs_

## Testing with a h2

We're a cool organisation currently venturing into quantitative bot trading. Algorithmic Trading is difficult, and even more so if you are trying to generate real and consistent profits. In this course you will learn everything you need to know to start developing and launching automated trading strategies, while making use of free and [open source]() tools that will not only facilitate your development but also save you a lot of time and money.

<a href="mailto:vkydlabs@gmail.com" aria-label="Mail to VKYD Labs"><button>Shoot a mail ></button></a>

This is the second paragraph. In this course you will learn everything you need to know to start developing and launching automated trading strategies, while making use of free and [open source]() tools that will not only facilitate your development but also save you a lot of time and money.

### This is a 3rd degree heading

We're a cool organisation currently venturing into quantitative bot trading. Algorithmic Trading is difficult, and even more so if you are trying to generate real and consistent profits. In this course you will learn everything you need to know to start developing and launching automated trading strategies, while making use of free and [open source]() tools that will not only facilitate your development but also save you a lot of time and money.

This is the second paragraph. In this course you will learn everything you need to know to start developing and launching automated trading strategies, while making use of free and [open source]() tools that will not only facilitate your development but also save you a lot of time and money.


<hr/>

# Blog

## 2022

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