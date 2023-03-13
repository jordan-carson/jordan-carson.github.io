<script lang="ts">
	import {onMount} from "svelte";
	// import FlowFooter from '../lib/NavBar/NavbarFooter.svelte';
	import '../app.css';
	let darkmodebtn =
	'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	import { fly } from 'svelte/transition';

	import {variables} from "../lib/variables";

	let theme = '';
	// import { theme } from '../lib/theme.store';
	// $: segment = $page.url.pathname.substring(1);


	onMount(() => {
		theme =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light';
		document.body.classList.add(theme);
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			toggleTheme(event.matches ? 'dark' : 'light');
		});

	});

	function toggleTheme(newTheme: string) {
		document.body.classList.replace(theme, newTheme);
		theme = newTheme;
	}

	let open = false;

	export let sidebar = false;

</script>


<!--<Sidebar bind:open />-->
<!--<NavbarSimple bind:sidebar/>-->
<!--<StickyNavbar bind:open />-->
<!--<DarkMode btnClass={darkmodebtn} />-->

<header>
	<div>
		<h2>
			<a href="/"
			><span class="name-long">Jordan Carson</span><span class="name-short">Jordan</span></a
			>
		</h2>

		<nav let:hidden let:toggle class="fixed top-3 left-0 z-20 w-full md:h-auto space-x-2">
<!--			<Hamburger bind:open={sidebar} />-->
<!--			<NavHamburger on:click={toggle} class="font-bold " />-->
			<a href="/" class:active={true}>Home</a>
<!--			<a href="/blog" class:active={segment.startsWith('blog')}>BLOG</a>-->
<!--			<a href="/blog/rss.xml" data-sveltekit-reload>RSS</a>-->
			<a href="/contact">Contact</a>
			<a href="/resume">Resume</a>

			<a href="/blog">Blog</a>
			<a href="/tools">Tools</a>


			{#if theme === 'dark'}
				<button
						class="theme-switch"
						title="Switch to light theme"
						on:click={() => toggleTheme('light')}
						in:fly={{ y: 20, duration: 200, delay: 200 }}
				>☀️
				</button>
			{:else}
				<button
						class="theme-switch"
						title="Switch to dark theme"
						on:click={() => toggleTheme('dark')}
						in:fly={{ y: -20, duration: 200, delay: 200 }}
				>🌚
				</button>
			{/if}
		</nav>

	</div>
</header>



<svelte:head>
	<script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js">
	</script>

</svelte:head>

<main>
	<slot />
</main>

<footer>

	<div class="row ">
		<div class="column">
<!--			<a href="https://github.com/jordan-carson" rel="external">-->
<!--				<img-->
<!--						src="/images/github-mark-white.svg"-->
<!--						alt="GitHub"-->
<!--						style="width:30px;height:30px;"-->
<!--				>-->
<!--			</a>-->
		</div>
		<div class="column absolute">

			{#if theme === 'dark'}
				<a href="https://github.com/jordan-carson" rel="external">
					<img
							src="/images/github-mark-white.svg"
							alt="GitHub"
							style="height: 30px;width: 30px"
					>
				</a>
			{:else}
				<a href="https://github.com/jordan-carson" rel="external">
					<img
							src="/images/github-mark.svg"
							alt="GitHub"
							style="height: 30px;"
					>
				</a>
			{/if}

		</div>
		<div class="column">
			<a href="https://www.linkedin.com/in/jordan-carson" rel="external">
				<img
						src="/images/linkedin.svg"
						alt="LinkedIn"
						style="height: 30px;"
				>
			</a>
		</div>
		<div class="column">
			<a href="https://ko-fi.com/C0C5J1LY6" target="_blank" rel="noreferrer"
			><img
					src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
					alt="Buy Me a Coffee at ko-fi.com"
					style="height: 30px;width: 500px"
			/></a
			>
			</div>
	</div>

</footer>
<!--<div class="wrapper relative">-->

<!--</div>-->
<!--<div class="div5">-->
<!--	<a href="https://www.linkedin.com/in/jordan-carson" rel="external">-->
<!--		<img src="/images/linkedin.svg" alt="LinkedIn" style="width:30px;height:30px">-->
<!--	</a>-->
<!--</div>-->
<!--<div class="div6">-->

<!--	{#if theme === 'dark'}-->
<!--		<a href="https://github.com/jordan-carson" rel="external">-->
<!--			<img src="/images/GitHub-Mark-Light-32px.png" alt="GitHub" style="width:30px;height:30px;">-->
<!--		</a>-->
<!--	{:else}-->
<!--		<a href="https://github.com/jordan-carson" rel="external">-->
<!--			<img src="/images/GitHub-Mark-32px.png" alt="GitHub" style="width:30px;height:30px;">-->
<!--		</a>-->
<!--	{/if}-->

<!--</div>-->
<!--<div class="div7">-->
<!--	<a href="https://ko-fi.com/C0C5J1LY6" target="_blank" rel="noreferrer" class="support mt-0"-->
<!--	><img-->
<!--			src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"-->
<!--			alt="Buy Me a Coffee at ko-fi.com"-->
<!--			style="height:36px;border: 0px"-->
<!--			height="36"-->
<!--	/></a-->
<!--	>-->
<!--</div>-->
<!--| Last update: {variables.timestamp.toISOString()}.-->
<style>
	.row {
		display: flex;
		/*text-align: left;*/

		/*z-index: 20;*/
		/*height: 10px;*/
		/*width: 200px;*/
	}

	.column {
		/*flex: 10%;*/
		/*display: inline-flex;*/
		display: flex;
		/*flex-direction: column;*/

		/*padding: 10px;*/
		width: 100px;
	}
	header {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--header-height);
		backdrop-filter: saturate(100%) blur(3px);
		z-index: 3;
	}
	header > div {
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: center;
	}

	header > div > *:nth-child(even) {
		justify-self: right;
	}

	header * {
		margin-top: 0;
	}

	:global(body.light) header {
		box-shadow: rgb(0 0 0 / 5%) 0px 5px 15px;
	}

	:global(body.dark) header {
		box-shadow: rgb(255 255 255 / 5%) 0px 5px 15px;
	}

	.name-short {
		display: none;
		font-family: inherit;
	}

	.name-long {
		display: block;
	}


	@media (max-width: 480px) {
		header > div {
			grid-template-columns: auto auto;
		}

		/*header .current-details.title {*/
		/*	visibility: hidden;*/
		/*}*/

		header .name-short {
			display: block;
		}

		header .name-long {
			display: none;
		}
	}

	header h2 > a {
		text-decoration: none;
	}

	/*header .current-details {*/
	/*	margin-top: -1.5em;*/
	/*	font-size: 0.8rem;*/
	/*}*/

	/*header .current-details.title {*/
	/*	cursor: pointer;*/
	/*}*/

	nav {
		width: 100%;
		display: flex;
		justify-content: end;
		gap: 0.6em;
	}

	nav > *:last-child {
		margin-left: 0.6em;
	}

	nav a {
		color: var(--text-color-light);
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}

	nav a.active,
	nav a:hover {
		color: var(--text-color);
		text-decoration: underline;
	}

	header button {
		padding: 0;
		margin: 0;
		border: none;
	}

	footer {
		position: absolute;
		padding: 0.6em 1.2em;
		bottom: 0;
		width: 100%;
		display: inline-flex;
		justify-content: right;
		color: var(--text-color-light);
		/*font-size: 0.9rem;*/
	}

</style>