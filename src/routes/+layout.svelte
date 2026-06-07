<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  const navLinks = [
    { href: '/',           label: 'Home'       },
    { href: '/writings',   label: 'Writing'    },
    { href: '/projects/devgpt', label: 'DevGPT' },
  ];
</script>

<svelte:head>
  <title>Jordan Carson — Principal Engineer</title>
  <meta name="description" content="Principal Engineer specializing in cloud-native AI systems and agentic developer platforms." />
</svelte:head>

<nav>
  <div class="nav-inner">
    <a href="{base}/" class="nav-brand mono">JC<span class="gold">.</span></a>
    <div class="nav-links">
      {#each navLinks as link}
        <a
          href="{base}{link.href}"
          class="nav-link mono"
          class:active={$page.url.pathname === (base + link.href)}
        >
          {link.label}
        </a>
      {/each}
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
    background: rgba(10, 10, 11, 0.88);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
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

  .nav-links {
    display: flex;
    gap: 2rem;
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
