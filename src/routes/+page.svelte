<script>

	import Head from '$lib/NavBar/Head.svelte';
	import confetti from 'canvas-confetti';

	let lastConfetti = 0;


	function fireConfetti(evt) {
		if (lastConfetti + 1_111 > Date.now()) return;

		lastConfetti = Date.now();

		const defaults = {
			disableForReducedMotion: true,
			origin: { x: evt.x / window.innerWidth, y: (evt.y - 1) / window.innerHeight },
		};
		confetti({
			...defaults,
			spread: 26,
			startVelocity: 55,
			particleCount: Math.floor(200 * 0.25),
		});
		confetti({
			...defaults,
			spread: 60,
			particleCount: Math.floor(200 * 0.2),
		});
		confetti({
			...defaults,
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
			particleCount: Math.floor(200 * 0.35),
		});
		confetti({
			...defaults,
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
			particleCount: Math.floor(200 * 0.1),
		});
		confetti({
			...defaults,
			spread: 120,
			startVelocity: 45,
			particleCount: Math.floor(200 * 0.1),
		});
	}
</script>


<!--<h1 class="text-3xl dark:text-white">Welcome to SvelteKit</h1>-->
<!--<p class="dark:text-white">-->
<!--	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation-->
<!--</p>-->

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
	<Head title="Jordan Carson" details={true} />
</svelte:head>
<section>
<!--	<h1 class="font-bold text-5xl">-->
<!--		Hi, I'm Jordan-->
<!--	</h1>-->
		<h1 class="font-light text-5xl text-center">Hi, I'm Jordan
		<strong
			on:mouseover={fireConfetti}
			on:focus={fireConfetti}>
		</strong>
		<div class="wave">👋</div>
		<strong
				on:mouseover={fireConfetti}
				on:focus={fireConfetti}>
		</strong>
		<br /></h1>
		<br>
		<p>Mastering in AI and Computational Mathematics at Johns Hopkins University.</p>
		<br>

		<p>
			<br />
			Proud City Carnivore. Enjoy <strong>blogging</strong> about data and <strong>food</strong>. Sometimes creating visual essays with data.
			<br />
		</p>
		<br />
		<p>
			Lifelong learner, <strong>open-source enthusiast</strong>, mainly working on ...this website
		</p>
		<br />

		<p>
			Also a huge <strong>skiier</strong>.
		</p>


</section>

<style>
	h1 {
		font-family: "Lora", sans-serif;
	}
	section {
		text-align: center;
		font-size: 1.25rem;
		margin-top: 2em;
	}

	/* Thanks to https://codepen.io/jakejarvis/pen/pBZWZw */
	.wave {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}
	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>