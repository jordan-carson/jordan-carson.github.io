<script>
	import Logo from '../icons/NameLogo.svelte';
	import Hamburger from './NavbarHamburger.svelte';
	import Menu from './Menu.svelte';
	export let sidebar = false;

</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
		<Logo />
	</nav>

	<Menu />
</header>

<style>
</style>
