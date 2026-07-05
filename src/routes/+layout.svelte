<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  const navLinks = [
    { href: '/',           label: 'Home'     },
    { href: '/writings',   label: 'Blog'     },
    { href: '/projects',   label: 'Projects' },
  ];

  let theme = 'dark';

  function isDaytime() {
    const h = new Date().getHours();
    return h >= 7 && h < 19;
  }

  function applyTheme(t) {
    theme = t;
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (_) {}
  }

  function toggleTheme() {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }

  onMount(() => {
    let saved;
    try { saved = localStorage.getItem('theme'); } catch (_) {}
    applyTheme(saved ?? (isDaytime() ? 'light' : 'dark'));
  });
</script>

<svelte:head>
  <title>Jordan Carson — Lead AI Systems Engineer & Architect</title>
  <meta name="description" content="Lead AI Systems Engineer & Architect specializing in cloud-native AI systems and agentic developer platforms, powering Technology Lifecycle Management at J.P. Morgan Chase." />
</svelte:head>

<nav>
  <div class="nav-inner">
    <a href="{base}/" class="nav-brand mono">JC<span class="gold">.</span></a>
    <div class="nav-right">
      <div class="nav-links">
        {#each navLinks as link}
          <a
            href="{base}{link.href}"
            class="nav-link mono"
            class:active={link.href === '/'
              ? $page.url.pathname === (base + link.href)
              : $page.url.pathname.startsWith(base + link.href)}
          >
            {link.label}
          </a>
        {/each}
      </div>
      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
        {#if theme === 'dark'}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {:else}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>

<footer>
  <div class="footer-inner mono">
    <span class="text-muted">© 2026 Jordan Carson</span>
    <div class="footer-links">
      <a href="https://github.com/jordan-carson" target="_blank" rel="noopener" class="footer-link">GitHub</a>
      <a href="https://linkedin.com/in/jordan-carson" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
      <a href="https://medium.com/@jordancarson" target="_blank" rel="noopener" class="footer-link">Medium</a>
    </div>
  </div>
</footer>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid var(--border);
    background: var(--nav-bg, rgba(10, 10, 11, 0.88));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background var(--transition), border-color var(--transition);
  }

  :global(:root[data-theme='light']) nav {
    background: rgba(245, 244, 240, 0.88);
  }

  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-brand {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    transition: color var(--transition);
  }
  .nav-brand:hover { color: var(--gold); }

  .gold { color: var(--gold); }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .theme-toggle {
    background: none;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text-dim);
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--transition), border-color var(--transition), background var(--transition);
    padding: 0;
    flex-shrink: 0;
  }

  .theme-toggle:hover {
    color: var(--gold);
    border-color: var(--gold-dim);
    background: var(--gold-glow);
  }

  .nav-link {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
    transition: color var(--transition);
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transition: transform var(--transition);
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--gold);
  }

  .nav-link.active::after,
  .nav-link:hover::after {
    transform: scaleX(1);
  }

  main {
    padding-top: 56px;
    min-height: 100vh;
  }

  footer {
    border-top: 1px solid var(--border);
    padding: 2rem;
    margin-top: 6rem;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
  }

  .text-muted { color: var(--text-muted); }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-link {
    color: var(--text-muted);
    transition: color var(--transition);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  .footer-link:hover { color: var(--gold); }
</style>
