<!-- src/Markdown.svelte -->
<script>
    import MarkdownIt from 'markdown-it';

    export let markdown = '';

    // Initialize `markdown-it`
    const md = new MarkdownIt();

    // Render to an html string
    const rendered = md.render(markdown);
</script>

<!-- Render with the `@html` directive -->
<div>
    {@html rendered}
</div>