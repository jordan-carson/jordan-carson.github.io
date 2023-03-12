<!--<script lang="ts">-->
<!--	// import svelteLogo from './assets/svelte.svg'-->
<!--	import Counter from './lib/Counter.svelte'-->
<!--	// import { Hamburger } from 'svelte-hamburgers';-->
<!--	import Menu from './lib/Menu.svelte';-->
<!--	import Hamburger from './lib/Hamburger.svelte'-->
<!--	let open;-->
<!--</script>-->


<!--<Hamburger-->
<!--		bind:open-->
<!--		&#45;&#45;color="blue"-->
<!--		&#45;&#45;active-color="white"-->
<!--/>-->
<!--&lt;!&ndash;		&#45;&#45;layer-height="3px"&ndash;&gt;-->
<!--&lt;!&ndash;		&#45;&#45;layer-width="35px"&ndash;&gt;-->

<!--<Menu bind:open />-->


<script>
	import Navbar from './lib/Navbar.svelte'
	import Sidebar from './lib/Sidebar.svelte'
	import Main from './lib/LoadLines.svelte'

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Main/>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<style>
	:global(body) {
		padding: 0;
	}
</style>