<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder,
	} from 'flowbite-svelte';
	import NavRoutes from "./NavbarRoutes.svelte";
</script>

<div class="relative px-8">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 fixed left-0 border-b"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Jordan Carson</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavRoutes {hidden} />
	</Navbar>
	<!--    <div style="height:300px;" class="overflow-scroll pb-16">-->
	<!--        <Skeleton class="mt-16 mb-8" />-->
	<!--        <ImagePlaceholder class="my-8" />-->
	<!--        <TextPlaceholder class="my-8" />-->
	<!--    </div>-->
</div>
