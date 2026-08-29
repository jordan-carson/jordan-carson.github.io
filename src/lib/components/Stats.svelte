<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal.js';

  const stats = [
    { value: '7,500+', label: 'Engineers on Platform',   sub: 'Engineering, product & senior management' },
    { value: '90%+',   label: 'Prompt cache hit rate',   sub: 'Anthropic Claude · DevGPT' },
    { value: '32M',    label: 'Peak cache reads / min',  sub: 'Against a 30M TPM budget' },
    { value: '100K+',  label: 'Telemetry events / min',  sub: 'OTel streaming gateway · DevGPT' },
    { value: '~9M',    label: 'TPM live inference demand', sub: 'Down from a 4M/min throttle event, via caching' },
  ];

  let visible = false;
  let el;

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { visible = true; obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<section class="stats" bind:this={el} use:reveal>
  <div class="stats-inner">
    <div class="section-label mono">Impact</div>
    <div class="stats-grid">
      {#each stats as stat, i}
        <div class="stat-card" class:visible style="transition-delay: {i * 80}ms">
          <div class="stat-value mono">{stat.value}</div>
          <div class="stat-label">{stat.label}</div>
          <div class="stat-sub mono">{stat.sub}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stats {
    padding: 6rem 2rem;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--bg-2);
  }

  .stats-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1px;
    background: var(--border);
  }

  .stat-card {
    background: var(--bg-2);
    padding: 2.5rem 2rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease, background var(--transition);
  }

  .stat-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-card:hover {
    background: var(--bg-3);
  }

  .stat-value {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--cyan);
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  .stat-label {
    font-size: 0.95rem;
    color: var(--text);
    font-weight: 400;
    margin-bottom: 0.4rem;
  }

  .stat-sub {
    font-size: 0.7rem;
    color: var(--text-muted);
    letter-spacing: 0.06em;
  }
</style>
