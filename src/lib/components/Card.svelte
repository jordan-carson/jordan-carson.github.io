
<div class="card rounded-3xl hover:rounded-lg dark:text-gray-800 dark:hover:text-gray-900 dark:hover:bg-green-300 hover:bg-green-300 bg-green-300">
    <h1 class="font-bold text-xl"><slot name="title" /></h1>
    <p class="text-lg text-left"><slot name="date" /></p>
    <p class="text-left text-base"><slot name="content" /></p>
</div>



<style>
    .card {
        width: 100%;
        border: 1px solid #aaa;
        /*border-radius: 1.5rem;*/
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>