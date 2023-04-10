<script>
    import { page } from '$app/stores';
    $: path = $page.url.pathname;
    let tabs = [
        { name: 'Home', path: '/' },
        { name: 'CV', path: '/resume' },
        // { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resources', path: '/resources' },
    ];
</script>

<div>
    <nav>
        {#each tabs as tab, i (i)}
            <a
                    href={tab.path}
                    class={`${
					path === tab.path ? 'bg-zinc-900' : 'bg-zinc-900/60'
				}`}
            >
                {tab.name}
            </a>
        {/each}
    </nav>
</div>

<style>
    nav {
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 0.6em;
    }

    nav > *:last-child {
        margin-left: 0.6em;
    }

    nav a {
        color: var(--text-color-light);
        transition: 0.2s ease-in-out;
        text-decoration: none;
    }

    nav a:hover {
        color: var(--text-color);
        text-decoration: underline;
    }
</style>