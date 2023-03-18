<script>
    import Card from '$lib/components/Card.svelte';
    const items = [
        {title: "Golang for Microservices", date: '10-12-1991', content: "Some content content here"},
        {title: "Python for MLOps", date: '03-14-2023', content: "Describing the ways to use Python for ML Ops."},
    ];
</script>


{#each items as item}
    <Card>
        <h1 slot="title">{item.title}</h1>
        <span slot="date">{item.date}</span>
        <p slot="content">{item.content}</p>
    </Card>
{/each}
