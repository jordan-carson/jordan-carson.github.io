<script>
    import WordCloud from "../../lib/components/WordCloud.svelte";

    const words = [
        { text: "Halo", count: 100 },
        { text: "Dunia", count: 50 },
        { text: "Gaib", count: 75 },
    ];
</script>

<div>
    <WordCloud words={words}/>
</div>