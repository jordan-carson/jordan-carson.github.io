<script lang="ts">
	import {onMount} from "svelte";
	// import FlowFooter from '../lib/NavBar/NavbarFooter.svelte';
	import '../app.css';
	// let darkmodebtn =
	// 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
	import { fly } from 'svelte/transition';
	import {variables} from "../lib/variables";

	let theme = '';
	import { store } from '../lib/themes.ts';
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
		store.set(newTheme);
	}

	let open = false;


</script>


<header>
	<div>
		<h2>
			<a href="/"
			><span class="name-long">Jordan Carson</span><span class="name-short">Jordan Carson</span></a
			>
		</h2>
		<nav>
			<a href="/">Home</a>
			<a href="/resume">CV</a>
			<a href="/contact">Contact</a>
			<a href="/resources">Resources</a>
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

<!--<footer>-->

<!--	<div class="row ">-->
<!--		<div class="column">-->
<!--		</div>-->
<!--		<div class="column absolute">-->

<!--			{#if theme === 'dark'}-->
<!--				<a href="https://github.com/jordan-carson" rel="external">-->
<!--					<img-->
<!--							src="/images/github-mark-white.svg"-->
<!--							alt="GitHub"-->
<!--							style="height: 30px;width: 30px"-->
<!--					>-->
<!--				</a>-->
<!--			{:else}-->
<!--				<a href="https://github.com/jordan-carson" rel="external">-->
<!--					<img-->
<!--							src="/images/github-mark.svg"-->
<!--							alt="GitHub"-->
<!--							style="height: 30px;"-->
<!--					>-->
<!--				</a>-->
<!--			{/if}-->

<!--		</div>-->
<!--		<div class="column">-->
<!--			<a href="https://www.linkedin.com/in/jordan-carson" rel="external">-->
<!--				<img-->
<!--						src="/images/languages/linkedin.svg"-->
<!--						alt="LinkedIn"-->
<!--						style="height: 30px;"-->
<!--				>-->
<!--			</a>-->
<!--		</div>-->
<!--		<div class="column">-->
<!--			<a href="https://ko-fi.com/C0C5J1LY6" target="_blank" rel="noreferrer"-->
<!--			><img-->
<!--					src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"-->
<!--					alt="Buy Me a Coffee at ko-fi.com"-->
<!--					style="height: 30px;width: 500px"-->
<!--			/></a-->
<!--			>-->
<!--			</div>-->
<!--	</div>-->

<!--</footer>-->

<style>
	/*.row {*/
	/*	display: flex;*/
	/*	!*text-align: left;*!*/
	/*	justify-content: flex-start;*/
	/*	!*z-index: 20;*!*/
	/*	!*height: 10px;*!*/
	/*	!*width: 200px;*!*/
	/*}*/

	/*.column {*/
	/*	!*flex: 10%;*!*/
	/*	!*display: inline-flex;*!*/
	/*	display: flex;*/
	/*	!*ustify-content: flex-end;*!*/
	/*	!*padding: 10px;*!*/
	/*	width: 100px;*/
	/*}*/
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
	span {
		font-family: "Inter", sans-serif;
	}
	.name-short {
		display: none;
		font-family: "Inter", sans-serif;
	}

	.name-long {
		display: block;
		font-family:"Inter", sans-serif;
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

	/*footer {*/
	/*	position: absolute;*/
	/*	padding: 0.6em 1.2em;*/
	/*	bottom: 0;*/
	/*	width: 100%;*/
	/*	display: inline-flex;*/
	/*	justify-content: right;*/
	/*	color: var(--text-color-light);*/
	/*	!*font-size: 0.9rem;*!*/
	/*}*/

</style>  