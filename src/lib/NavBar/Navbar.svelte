<script>
  import Logo from "../../../exclude/tools/icons/NameLogo.svelte";
  import Hamburger from "../../../exclude/tools/NavbarHamburger.svelte";
  import Menu from "../../../exclude/tools/Menu.svelte";
  export let sidebar = false;
</script>

<header
  class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2"
>
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <Logo />
  </nav>

  <Menu />
</header>

<style>
</style>
