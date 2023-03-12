<script xmlns:svelte="http://www.w3.org/1999/html">
	import Sidebar from '../lib/NavBar/Sidebar.svelte';
	import FlowFooter from '../lib/NavBar/NavbarFooter.svelte';
	import NavbarSimple from "../lib/NavBar/NavbarSimple.svelte";
	import { theme } from '../lib/theme.store';
	import '../app.css';
	import { DarkMode, P } from 'flowbite-svelte';
	let darkmodebtn =
	'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';



	let open = false;
	let sidebar = false;
</script>
<Sidebar bind:open />
<NavbarSimple bind:sidebar/>
<!--<StickyNavbar bind:open />-->
<DarkMode btnClass={darkmodebtn} />

<svelte:head>
	<script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js">
	</script>

</svelte:head>

<slot />
<FlowFooter />


<style>
	:global(body) {
		padding: 0;
	}

</style>