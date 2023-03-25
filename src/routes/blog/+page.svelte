<script>
    import Card from '$lib/components/Card.svelte';
    const items = [
        {title: "Golang for Microservices", date: '10-12-1991', content: "Some content content here"},
        {title: "Python for MLOps", date: '03-14-2023', content: "Describing the ways to use Python for ML Ops."},
    ];
</script>


<!--{#each items as item}-->
<!--    <Card>-->
<!--        <h1 slot="title">{item.title}</h1>-->
<!--        <span slot="date">{item.date}</span>-->
<!--        <p slot="content">{item.content}</p>-->
<!--    </Card>-->
<!--{/each}-->
<section>
    <h1 class="font-bold text-5xl">Blog</h1>
    <br />

    <br /><br /><br />

<!--    <p><a href="mailto:jordanlouiscarson@gmail.com">Email Me</a></p>-->
    <p>
        Coming Soon...
<!--        <a href="https://github.com/jordan-carson">GitHub</a>-->
    </p>
</section>

<style>
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
    section {
        text-align: center;
        font-size: 1.25rem;
        margin: 5em auto;
        object-fit: fill;
    }
</style>
