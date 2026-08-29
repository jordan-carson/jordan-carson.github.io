<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal.js';

  const timeline = [
    {
      year: '2025–Present',
      role: 'Lead AI Engineer — Agentic Infrastructure, AWM AI4Tech',
      org: 'J.P. Morgan Chase',
      tag: 'current',
      highlights: [
        'Lead architect for DevGPT\'s core agentic systems: the coding harness (reasoning, tool use, memory) and a separate remote sandbox controller for isolated code execution',
        'Coding agent harness — custom agentic loop, tool-calling, and multi-step execution built from scratch, fully decoupled from execution',
        'Remote sandbox controller — pool-managed, session-aware Kubernetes pods on EKS with an AWS-credential identity proxy and NetworkPolicy egress isolation (deny-all except DNS) behind corporate HTTP proxy containment; the harness never holds credentials or network access directly',
        'DevGPT Cloud — the collaboration layer: co-ideate with an agent alongside teammates, push/pull sessions, observe live sandbox execution, browse a team agent marketplace',
        'DevGPT powers Technology Lifecycle Management (TLM) — firm-wide agentic maintenance, currently delivering Java/Moneta Boot migrations, with a roadmap to broader language coverage across Python, Golang, TypeScript, and Terraform',
        'Sole AI4Tech engineer on the AWM AI Center of Excellence, defining agentic development standards across the firm',
        'Designing AWM Agentic Training (in dev) — a Trailhead-style platform using AI as a Socratic brainstorming partner and grader',
        'Temporal-backed durable agent orchestration',
        'Layered memory service — EFS-scoped memory files + Redis + PostgreSQL/pgvector, with hybrid retrieval (vector + BM25 + Reciprocal Rank Fusion)',
        '2-week AWS org migration via Route53 weighted DNS cutover, 30-minute planned maintenance window — zero data loss',
      ]
    },
    {
      year: '2021–2025',
      role: 'Senior Applied AI Engineer — Asset & Wealth Management',
      org: 'J.P. Morgan Chase',
      tag: 'jpmc',
      highlights: [
        'Built DevGPT from the ground up within AWM\'s Architecture & Investment Technology team',
        '~90% prompt cache hit rates on Anthropic models; 32M peak cache reads/min against a 30M TPM budget',
        'Two independent, mission-critical LLM provider services — Anthropic via AWS Bedrock, OpenAI via Azure OpenAI — no shared prompt router; provider selection is a deliberate, user-facing decision',
        'Custom telemetry gateway: producer → SQS → consumer → staging → processors, feeding a federated service (Aurora writes, real-time attribution) and a separate analytics service (read replica, reporting) — ~100K events/min',
        'Kubernetes API gateway on EKS using Cilium with per-LOB auth, rate limiting, load shedding',
        '65% AWS cost reduction — Karpenter/EKS node group migration + smart prompt engineering & context caching',
        'Knowledge Graphs & Event-Driven News Analytics Platform — entity resolution at ~900ms/article',
        'Sm@rt RFP — weeks to minutes for client proposal generation',
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
    {
      year: '2024–2026',
      role: 'AI Systems Interview Coach & Architecture Mentor',
      org: 'Exponent (tryexponent.com) · 1099 Contract',
      tag: 'exponent',
      highlights: [
        '100+ Staff+ mock interviews spanning system design, AI/ML and agentic architecture, and behavioral leadership',
        'Partnered with Exponent leadership to shape a new Agentic AI Engineering interview track, translating production agent-platform patterns into practical architecture exercises and evaluation criteria',
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

    <div class="education-block">
      <div class="section-label mono">Education</div>
      <div class="education-grid">
        <div class="education-item">
          <div class="education-school serif">Johns Hopkins University</div>
          <div class="education-detail mono">Whiting School of Engineering · Graduate Coursework, Data Science &amp; Artificial Intelligence</div>
          <div class="education-year mono">2021–2023</div>
        </div>
        <div class="education-item">
          <div class="education-school serif">Hobart &amp; William Smith Colleges</div>
          <div class="education-detail mono">B.A. Economics</div>
          <div class="education-year mono">2013</div>
        </div>
      </div>
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
    color: var(--cyan);
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
    background: linear-gradient(to bottom, var(--cyan-dim), var(--border));
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
    background: var(--cyan);
    border-color: var(--cyan);
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
    color: var(--cyan);
    border: 1px solid var(--cyan-dim);
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
    color: var(--cyan-dim);
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    .timeline-item { grid-template-columns: 1fr; gap: 0.5rem; }
    .timeline-line { left: 0; }
    .timeline-left { text-align: left; padding-left: 1.5rem; padding-right: 0; }
    .timeline-dot { left: -5px; right: auto; }
  }

  .education-block {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border);
  }

  .education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .education-school {
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 0.4rem;
  }

  .education-detail {
    font-size: 0.8rem;
    color: var(--text-dim);
    line-height: 1.5;
    margin-bottom: 0.4rem;
  }

  .education-year {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--text-muted);
  }
</style>
