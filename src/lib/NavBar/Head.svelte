<script lang="ts">
	export let title = "";
	export let details = true;
</script>

<title>{title}</title>
<meta name="title" content={title} class="text-left"/>
<meta
	name="keywords"
	content="Python, Artificial Intelligence, Machine Learning, JavaScript, TypeScript, Blog, Blogger,
	Jordan, Carson, Jordan Carson, NYC, New York, United States"
/>
<meta name="author" content="Jordan Carson" />
<meta name="copyright" content="Jordan Carson" />

{#if details}
	<meta name="description" content="Jordan Carson, AI ML Engineer in NYC." />
	<meta name="og:title" content="Jordan Carson" />
	<meta name="og:description" content="Jordan Carson, AI ML Engineer in NYC." />
{/if}

