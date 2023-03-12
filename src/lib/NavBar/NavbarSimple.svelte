<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import Hamburger from "./NavbarHamburger.svelte";
    import NavRoutes from "./NavbarRoutes.svelte";
    export let sidebar = false;

</script>

<Navbar let:hidden let:toggle class="fixed top-0 left-0 z-20 w-full md:h-auto">
    <Hamburger bind:open={sidebar} />
    <NavHamburger on:click={toggle} class="font-bold " />
    <NavRoutes {hidden} />
</Navbar>