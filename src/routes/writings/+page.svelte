<script>
  import { base } from '$app/paths';

  const mnemonicSeries = [
    {
      part: 'III',
      title: 'Convergent Engineering: How Everyone Built the Same Thing',
      publication: 'Medium · AI Advances',
      date: 'May 2026',
      readTime: '~12 min',
      url: 'https://medium.com/ai-advances/convergent-engineering-how-everyone-built-the-same-thing-9434211959b9',
      summary: 'Dozens of teams built the same agent memory architecture — independently, simultaneously. Examines why multi-tier memory with active consolidation has crossed from open research problem to engineering discipline, drawing on the 2025–2026 convergence across Anthropic, Google, Letta, Mem0, and solo engineers.',
      tags: ['Agent Memory', 'Architecture', 'Distributed Systems'],
    },
    {
      part: 'II',
      title: 'Cloud Ant Colonies',
      publication: 'Medium · AI Advances',
      date: 'April 2026',
      readTime: '~15 min',
      url: 'https://medium.com/ai-advances/cloud-ant-colonies-5b311dcae1d5',
      summary: 'Agent swarms are real. But to understand how they think, coordinate, and grow — we need a better metaphor than "team." We need a colony. Explores how distributed agent swarms, shared memory, and a converging industry are building a genuinely new kind of distributed intelligence — drawing on swarm intelligence, stigmergy, and the principle that when an idea from mathematics is genuinely correct, nature was running it first.',
      tags: ['Agent Swarms', 'Distributed Intelligence', 'Memory Systems', 'Swarm Intelligence'],
    },
    {
      part: 'I',
      title: 'Beyond the Session: Memory Engineering for Agent Teams',
      publication: 'Medium · Towards Artificial Intelligence',
      date: 'April 2026',
      readTime: '~23 min',
      url: 'https://medium.com/towards-artificial-intelligence/beyond-the-session-memory-engineering-for-agent-teams-b69865506bf8',
      summary: 'Autonomous agent teams are real — but to run them well, not just impressively, there\'s a level of memory engineering most teams haven\'t tackled yet. Covers intent-driven architecture, context-driven systems, and the memory substrate that separates coordinated agent teams from chaos with good intentions.',
      tags: ['Agent Teams', 'Memory Systems', 'Platform Engineering'],
    },
  ];

  const writings = [];

  const talks = [
    {
      title: 'Transforming Developer Productivity: Rethinking the SDLC with AI Coding Agents',
      event: 'Open Source Finance Foundation (FINOS)',
      date: 'August 2025',
      role: 'Featured Speaker · Lead Presenter',
      summary: 'Demonstrated how AI coding agents are reshaping the software development lifecycle at enterprise scale. Presented DevGPT\'s architecture and real-world impact across J.P. Morgan Chase — covering cloud-native agent orchestration, secure sandbox execution, and developer productivity gains at scale.',
      tags: ['DevGPT', 'SDLC', 'Enterprise AI', 'Open Source Finance'],
    },
  ];
</script>

<svelte:head>
  <title>Blog — Jordan Carson</title>
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header">
      <div class="breadcrumb mono"><a href="{base}/">Jordan Carson</a> / Blog</div>
      <h1 class="page-title serif">Writing &<br />Reciting</h1>
      <p class="page-sub">
        Thoughts and talks on agent architecture, memory engineering,
        and what it actually takes to run autonomous systems at enterprise scale.
      </p>
    </header>

    <!-- Mnemonic Architecture Series -->
    <section class="section">
      <div class="section-label mono">Series</div>
      <div class="series-block">
        <div class="series-header">
          <div class="series-eyebrow mono">3-Part Series · Medium</div>
          <h2 class="series-title serif">Mnemonic Architecture</h2>
          <p class="series-desc">A deep exploration of memory engineering for autonomous agent systems — from foundational session design to swarm coordination to industry-wide convergence.</p>
        </div>
        <div class="writings-list">
          {#each mnemonicSeries as w, i}
            <a
              href={w.url}
              target="_blank"
              rel="noopener"
              class="writing-card"
              style="animation-delay: {i * 100}ms"
            >
              <div class="writing-meta mono">
                <span class="series-part">Part {w.part}</span>
                <span class="sep">·</span>
                <span class="writing-pub">{w.publication}</span>
                <span class="sep">·</span>
                <span>{w.date}</span>
                <span class="sep">·</span>
                <span>{w.readTime}</span>
              </div>
              <h2 class="writing-title serif">{w.title}</h2>
              <p class="writing-summary">{w.summary}</p>
              <div class="writing-tags">
                {#each w.tags as tag}
                  <span class="tag mono">{tag}</span>
                {/each}
              </div>
              <div class="writing-arrow">↗</div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <!-- Standalone Articles -->
    {#if writings.length > 0}
    <section class="section">
      <div class="section-label mono">Articles</div>
      <div class="writings-list">
        {#each writings as w, i}
          <a
            href={w.url}
            target="_blank"
            rel="noopener"
            class="writing-card"
            style="animation-delay: {i * 100}ms"
          >
            <div class="writing-meta mono">
              <span class="writing-pub">{w.publication}</span>
              <span class="sep">·</span>
              <span>{w.date}</span>
              <span class="sep">·</span>
              <span>{w.readTime}</span>
            </div>
            <h2 class="writing-title serif">{w.title}</h2>
            <p class="writing-summary">{w.summary}</p>
            <div class="writing-tags">
              {#each w.tags as tag}
                <span class="tag mono">{tag}</span>
              {/each}
            </div>
            <div class="writing-arrow">↗</div>
          </a>
        {/each}
      </div>
    </section>
    {/if}

    <!-- Talks -->
    <section class="section">
      <div class="section-label mono">Conferences & Talks</div>
      <div class="writings-list">
        {#each talks as t, i}
          <div class="writing-card talk-card" style="animation-delay: {i * 100}ms">
            <div class="writing-meta mono">
              <span class="writing-pub">{t.event}</span>
              <span class="sep">·</span>
              <span>{t.date}</span>
            </div>
            <div class="talk-role mono">{t.role}</div>
            <h2 class="writing-title serif">{t.title}</h2>
            <p class="writing-summary">{t.summary}</p>
            <div class="writing-tags">
              {#each t.tags as tag}
                <span class="tag mono">{tag}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>

  </div>
</div>

<style>
  .page {
    padding: 4rem 2rem 8rem;
  }

  .page-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 5rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--border);
  }

  .page-title {
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--text-dim);
    max-width: 480px;
    line-height: 1.8;
  }

  .section {
    margin-bottom: 5rem;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2rem;
  }

  .writings-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .writing-card {
    position: relative;
    background: var(--bg-2);
    padding: 2.5rem;
    transition: background var(--transition);
    display: block;
    animation: fadeUp 0.5s ease both;
  }

  .writing-card:hover {
    background: var(--bg-3);
  }

  a.writing-card .writing-arrow {
    display: block;
  }

  .writing-arrow {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 1.2rem;
    color: var(--gold-dim);
    transition: color var(--transition), transform var(--transition);
    display: none;
  }

  .writing-card:hover .writing-arrow {
    color: var(--gold);
    transform: translate(2px, -2px);
  }

  .writing-meta {
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
  }

  .writing-pub { color: var(--gold-dim); }

  .sep { color: var(--border); }

  .talk-role {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    border: 1px solid var(--gold-dim);
    display: inline-block;
    padding: 0.15rem 0.5rem;
    border-radius: 2px;
  }

  .writing-title {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--text);
    line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }

  .writing-summary {
    font-size: 0.9rem;
    color: var(--text-dim);
    line-height: 1.8;
    margin-bottom: 1.25rem;
    max-width: 680px;
  }

  .writing-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    border: 1px solid var(--border);
    padding: 0.2rem 0.6rem;
    border-radius: 2px;
  }

  .series-block {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .series-header {
    padding: 2rem 2.5rem;
    border-bottom: 1px solid var(--border);
    background: var(--bg-2);
  }

  .series-eyebrow {
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.6rem;
  }

  .series-title {
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 0.75rem;
    line-height: 1.1;
  }

  .series-desc {
    font-size: 0.85rem;
    color: var(--text-dim);
    line-height: 1.7;
    max-width: 580px;
  }

  .series-block .writings-list {
    border: none;
    border-radius: 0;
  }

  .series-block .writing-card {
    border-top: 1px solid var(--border);
  }

  .series-part {
    color: var(--gold);
    font-weight: 600;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
