<script>

	import Head from '../lib/NavBar/Head.svelte';
	import MainCenter from '../lib/NavBar/MainCenter.svelte';
</script>


<!--<h1 class="text-3xl dark:text-white">Welcome to SvelteKit</h1>-->
<!--<p class="dark:text-white">-->
<!--	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation-->
<!--</p>-->

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
	<Head><title>Jordan Carson</title></Head>

</svelte:head>
<MainCenter />

<style>
	:global(body) {
		padding: 4em;
	}
</style>
