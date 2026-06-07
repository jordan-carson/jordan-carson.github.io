<script>
  import { onMount } from 'svelte';

  const timeline = [
    {
      year: '2023–Present',
      role: 'AI4Tech Platform Lead, Principal Engineer',
      org: 'J.P. Morgan Chase',
      tag: 'current',
      highlights: [
        'Architect of cloud-native AI coding agent platform',
        'Agent sandbox via Anthropic SRT + bubblewrap',
        'Temporal-backed durable agent orchestration',
        'Multi-layer memory & governance system',
        '65% AWS cost reduction via smart prompt engineering & Anthropic beta headers (1hr TTL cache)',
      ]
    },
    {
      year: '2021–2023',
      role: 'Senior Applied AI Engineer',
      org: 'J.P. Morgan Chase · AWM',
      tag: 'jpmc',
      highlights: [
        'Neo4j Knowledge Graph & News Analytics Platform',
        'Sm@rt RFP — weeks to minutes (patent pending)',
      ]
    },
    {
      year: '2017–2021',
      role: 'Data Scientist, Global Client Analytics',
      org: 'BNP Paribas · Global Markets',
      tag: 'bnp',
      highlights: [
        'Lead Americas data scientist',
        'Salesperson 360 dashboard adopted org-wide',
        'Contributor to pyGCA internal ML library',
      ]
    },
    {
      year: '2012–2017',
      role: 'Earlier Roles',
      org: 'BNP Paribas · UBS Securities · Western Asset Management',
      tag: 'prior',
      highlights: [
        'Fixed income, Trading, & Client Intelligence',
        'Client Onboarding, KYC, & Data Warehousing',
        'Chief Economics Office intern — cubic spline interpolation for defined benefit pension plan valuation',
      ]
    },
  ];

  let visibleItems = new Set();
  let itemEls = [];

  onMount(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          visibleItems = new Set([...visibleItems, e.target.dataset.idx]);
        }
      });
    }, { threshold: 0.15 });

    itemEls.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<section class="timeline">
  <div class="timeline-inner">
    <div class="section-label mono">Career</div>

    <div class="timeline-track">
      {#each timeline as item, i}
        <div
          class="timeline-item"
          class:visible={visibleItems.has(String(i))}
          style="transition-delay: {i * 100}ms"
          data-idx={i}
          bind:this={itemEls[i]}
        >
          <div class="timeline-left">
            <div class="timeline-year mono">{item.year}</div>
            <div class="timeline-dot" class:current={item.tag === 'current'}></div>
          </div>

          <div class="timeline-right">
            {#if item.tag === 'current'}
              <span class="timeline-badge mono">Current</span>
            {/if}
            <div class="timeline-role serif">{item.role}</div>
            <div class="timeline-org mono">{item.org}</div>
            <ul class="timeline-highlights">
              {#each item.highlights as h}
                <li>{h}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}

      <!-- vertical line -->
      <div class="timeline-line"></div>
    </div>
  </div>
</section>

<style>
  .timeline {
    padding: 6rem 2rem;
    background: var(--bg-2);
    border-top: 1px solid var(--border);
  }

  .timeline-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 3rem;
  }

  .timeline-track {
    position: relative;
    padding-left: 0;
  }

  .timeline-line {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 140px;
    width: 1px;
    background: linear-gradient(to bottom, var(--gold-dim), var(--border));
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateX(-16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .timeline-item.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .timeline-left {
    text-align: right;
    padding-right: 1.5rem;
    position: relative;
    padding-top: 2px;
  }

  .timeline-year {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .timeline-dot {
    position: absolute;
    right: -5px;
    top: 4px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--border);
    border: 1.5px solid var(--text-muted);
  }

  .timeline-dot.current {
    background: var(--gold);
    border-color: var(--gold);
    box-shadow: 0 0 8px rgba(201,168,76,0.5);
  }

  .timeline-right {
    padding-bottom: 0.5rem;
  }

  .timeline-badge {
    display: inline-block;
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--gold-dim);
    padding: 0.15rem 0.5rem;
    border-radius: 2px;
    margin-bottom: 0.6rem;
  }

  .timeline-role {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.3rem;
  }

  .timeline-org {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .timeline-highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .timeline-highlights li {
    font-size: 0.88rem;
    color: var(--text-dim);
    padding-left: 1rem;
    position: relative;
  }

  .timeline-highlights li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--gold-dim);
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    .timeline-item { grid-template-columns: 1fr; gap: 0.5rem; }
    .timeline-line { left: 0; }
    .timeline-left { text-align: left; padding-left: 1.5rem; padding-right: 0; }
    .timeline-dot { left: -5px; right: auto; }
  }
</style>
