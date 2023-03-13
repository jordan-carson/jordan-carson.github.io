<!--<script>-->
<!--	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';-->
<!--</script>-->

<!--<Footer class="fixed bottom-0 left-0 z-20 w-full md:h-auto">-->
<!--	<FooterCopyright href="/" by="Jordan Carson™" year={2023} class="align-text"/>-->
<!--</Footer>-->


<script>
	import { variables } from '$lib/variables';
	// import Support from '../icons/IconBuyMeACoffee.svelte';

</script>
<!--<Support />-->
<!--<div class="fixed bottom-0 left-0 z-20 w-full md:h-auto">-->
<div class="row">
	<div class="column">
		<a href="https://www.linkedin.com/in/jordan-carson" rel="external">
			<img src="/images/linkedin.svg" alt="LinkedIn" style="width:30px;height:30px">
		</a>
	</div>
	<div class="column">
		<a href="https://github.com/jordan-carson" rel="external">
			<img src="/images/GitHub-Mark-120px-plus.png" alt="GitHub" style="width:30px;height:30px;">
		</a>
	</div>
	<a href="https://ko-fi.com/C0C5J1LY6" target="_blank" rel="noreferrer" class="support mt-0"
	><img
			src="https://storage.ko-fi.com/cdn/kofi2.png?v=3"
			alt="Buy Me a Coffee at ko-fi.com"
			style="height:36px;border: 0px"
			height="36"
	/></a
	>| Last update: {variables.timestamp.toISOString()}.
<!--</div>-->
</div>

<style>
	.row {
		display: inline-flex;
		z-index: 20;
	}

	.column {
		flex: 10%;
		/*display: inline-block;*/
		padding: 10px;
	}

</style>
<!--<div>-->
<!--style="border:0px;height:18px;"-->
<!--height="18"-->


<!--	<a-->
<!--			href="https://github.com/timdeschryver/timdeschryver.dev/commit/{variables.hash}"-->
<!--			rel="noreferrer"-->
<!--			target="_blank">{variables.hash?.substring(0, 6) ?? 'local'}</a-->
<!--	>-->
<!--	hosted on-->
<!--	<a-->
<!--			href="https://azure.microsoft.com/en-us/services/app-service/static/#features?WT.mc_id={variables.creator_id}"-->
<!--			rel="noreferrer"-->
<!--			target="_blank">Azure</a-->
<!--	>-->
<!--	| Last update: {variables.timestamp.toISOString()}.-->
<!--</div>-->
