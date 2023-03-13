<script>
  import { NavLi, NavUl } from "flowbite-svelte";
  let hidden;
</script>

<NavUl {hidden}>
  <NavLi href="/" active={true}>Home</NavLi>
  <NavLi href="/about">About</NavLi>
  <NavLi href="/blog">Blog</NavLi>
  <NavLi href="/tools">Tools</NavLi>
  <NavLi href="/resume">Resume</NavLi>
  <NavLi href="/contact">Contact</NavLi>
</NavUl>
