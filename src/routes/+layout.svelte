<script>
	import Header from '$lib/components/Header.svelte';
</script>

<div class="block-gradient">
	<!-- <div class="block" style="background-color: #9a9a9a"/> -->
	<div class="block" style="background-color: #bababa"/>
	<!-- <div class="block" style="background-color: #dedede"/> -->
</div>

<Header />

<main>
	<div class="slim-container">
		<slot />
	</div>
</main>

<style>
	.block-gradient {
		width: 100%;
	}
	.block {
		height: 10px
	}
</style>