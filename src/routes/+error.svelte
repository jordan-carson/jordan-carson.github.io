<script>
  import { Skeleton } from "flowbite-svelte";
</script>

<section />
<Skeleton divClass="content-center bg-cover whitespace-normal" />

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
</style>
