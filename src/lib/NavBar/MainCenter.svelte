<script lang="ts">
	import Head from './Head.svelte';
	import { Heading, P } from "flowbite-svelte";
</script>

<Head title="Jordan Carson" details={true}><title>Jordan Carson</title></Head>

<section>
	<h1 class="font-bold text-5xl">
		Hi, I'm Jordan <div class="wave">👋</div>
		<br /></h1>
</section>


<style>
	section {
		text-align: center;
		object-fit: fill;
		font-size: 1.25rem;
		/*margin-top: 2em;*/
		color: black;
		margin: 5em auto;
		white-space: unset;
	}

	/* Thanks to https://codepen.io/jakejarvis/pen/pBZWZw */
	.wave {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}
</style>
