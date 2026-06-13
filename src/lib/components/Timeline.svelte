<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal.js';

  const timeline = [
    {
      year: '2025–Present',
      role: 'Lead Architect & AI Systems Engineer — AI4Tech',
      org: 'J.P. Morgan Chase',
      tag: 'current',
      highlights: [
        'Architect of AI4Tech, a dedicated platform org with its own SEAL, AWS accounts, and cost center',
        'DevGPT powers Technology Lifecycle Management (TLM) — firm-wide agentic software maintenance across Terraform, Python, Java, and Golang codebases',
        'Supervisor agent reviews patches on a dedicated maintenance branch and routes changes to owning teams for merge',
        'Anthropic SRT + bubblewrap sandbox (early 2026)',
        'Temporal-backed durable agent orchestration',
        'Multi-layer memory system (Org / Team / User / Session)',
        '2-week AWS org migration with 30-minute planned outage — zero data loss',
      ]
    },
    {
      year: '2021–2025',
      role: 'Senior Applied AI Engineer — Asset & Wealth Management',
      org: 'J.P. Morgan Chase',
      tag: 'jpmc',
      highlights: [
        'Built DevGPT from the ground up within AWM\'s Architecture & Investment Technology team',
        '~90% prompt cache hit rates on Anthropic models; 20M peak cache reads/min against a 30M TPM budget',
        'Hybrid model routing — Anthropic via AWS Bedrock, OpenAI via Azure OpenAI',
        'Kubernetes API gateway on EKS using Cilium with per-LOB auth, rate limiting, load shedding',
        '65% AWS cost reduction — Karpenter/EKS node group migration + smart prompt engineering & context caching',
        'Knowledge Graphs & Event-Driven News Analytics Platform — entity resolution at ~900ms/article',
        'Sm@rt RFP — weeks to minutes for client proposal generation (patent pending)',
      ]
    },
    {
      year: '2015–2021',
      role: 'Data Scientist & Analytics Developer',
      org: 'BNP Paribas · Global Markets',
      tag: 'bnp',
      highlights: [
        'Lead Americas data scientist',
        'Salesperson 360 dashboard adopted org-wide',
        'Contributor to pyGCA internal ML library',
      ]
    },
    {
      year: '2013–2015',
      role: 'Software Engineer / Analyst',
      org: 'UBS Securities · Group Data Services',
      tag: 'prior',
      highlights: [
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

<section class="timeline" use:reveal={{ y: 60, duration: 900 }}>
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
