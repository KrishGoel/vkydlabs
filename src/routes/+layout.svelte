<header>
	<div class="block-gradient">
		<!-- <div class="block" style="background-color: #9a9a9a"/> -->
		<div class="block" style="background-color: #bababa" />
		<!-- <div class="block" style="background-color: #dedede"/> -->
	</div>
	<nav>
		<div class="slim-container">
			<h1 style="font-style: italic"><a href="/">VKYD Labs</a></h1>
			<div class="links">
				<a href="/about" style="margin-right: 5px">About</a>
				<a href="/blog">Blog</a>
			</div>
		</div>
	</nav>
	<div class="slim-container">
		<hr />
	</div>
</header>

<main>
	<div class="slim-container">
		<slot />
	</div>
</main>

<div class="slim-container">
	<hr style="margin-bottom: 0"/>
</div>

<footer>
	<div class="slim-container">
		<p>&copy; VKYD Labs</p>
		<div class="links">
			<a href="https://instagram.com/vkydlabs" rel="external" target="_blank" aria-label="Instagram Handle of VKYD Labs" style="margin-right: 5px">Instagram</a>
			<a href="https://twitter.com/VKYDlabs" rel="external" target="_blank" aria-label="VKYD Labs Twitter Handle"  style="margin-right: 5px">Twitter</a>
			<a href="https://github.com/KrishGoel/vkydlabs" rel="external" target="_blank" aria-label="This website's code, written in SvelteKit" >-v1.0</a>
		</div>
	</div>
	<div class="block-gradient">
		<div class="block" style="background-color: #bababa" />
	</div>
</footer>

<style>
	.block-gradient {
		width: 100%;
	}
	.block {
		height: 10px;
	}
	nav, footer {
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	nav {
		padding: 20px 0;
		margin-top: 30px;
	}
	nav .slim-container, footer .slim-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	nav h1 {
		margin: 0;
	}
	nav .links a, footer .links a {
		color: var(--text-dark);
		box-shadow: inset 0 -8px 0 rgba(205, 205, 205, 0.718);
	}
	nav .links a:hover, footer .links a:hover {
		color: #ffffff;
		box-shadow: inset 0 -20px 0 #3a3a3a;
	}
	footer {
		background-color: #ffffff;
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar;
	}
	footer h3, footer p {
		margin: 20px 0;
	}
</style>
