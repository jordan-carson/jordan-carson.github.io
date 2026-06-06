<script>
  const stack = [
    { layer: 'IDE Layer',           items: ['VS Code Extension', 'IntelliJ Plugin', 'Android Studio', 'Xcode Companion'],  color: '#c9a84c' },
    { layer: 'Agent Harness',       items: ['devgpt-harness (TypeScript)', 'ACP Protocol', 'Headless / Cloud modes'],       color: '#8b7ec8' },
    { layer: 'Orchestration',       items: ['Temporal Workflows', 'Pause / Resume / Fork', 'Durable Execution'],            color: '#7c9e87' },
    { layer: 'Execution',           items: ['Kubernetes EKS', 'KEDA Autoscaling', 'Anthropic SRT + bubblewrap'],            color: '#d4856a' },
    { layer: 'Context Assembly',    items: ['EFS Bare Git Clones', 'Per-Task Worktrees', 'Context Assembler'],              color: '#6a9fd4' },
    { layer: 'Memory',              items: ['OpenSearch (Cohere Embed v4)', 'RDS Postgres', 'Dream Cycle Consolidation'],   color: '#a8c47c' },
    { layer: 'Streaming',           items: ['Redis Streams', 'Go Cloud API', 'SSE to IDE'],                                 color: '#c47ca8' },
    { layer: 'Governance',          items: ['PolicyBundle (deny-overrides)', 'Astio Capability Gating', 'SemTrace Audit'], color: '#d4c46a' },
  ];

  const metrics = [
    { v: '6,500+', l: 'Engineers' },
    { v: '<2s',    l: 'Sandbox dispatch target' },
    { v: '4',      l: 'IDE integrations' },
    { v: '2025',   l: 'FINOS Conference' },
  ];
</script>

<svelte:head>
  <title>DevGPT — Jordan Carson</title>
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header">
      <div class="breadcrumb mono">Jordan Carson / Projects / DevGPT</div>
      <h1 class="page-title serif">DevGPT</h1>
      <p class="page-subtitle mono">Cloud-Native AI Coding Agent Platform</p>
      <p class="page-sub">
        An internal platform that enables J.P. Morgan Chase engineers, product & designers to delegate
        software and prototype development tasks to AI and cloud-based AI agents — from feature implementation
        to PR review, running securely within the firm's infrastructure at enterprise scale.
      </p>
    </header>

    <!-- Metrics -->
    <div class="metrics-row">
      {#each metrics as m}
        <div class="metric">
          <div class="metric-value mono">{m.v}</div>
          <div class="metric-label">{m.l}</div>
        </div>
      {/each}
    </div>

    <!-- Architecture Stack -->
    <section class="section">
      <div class="section-label mono">Architecture Stack</div>
      <div class="stack-grid">
        {#each stack as layer, i}
          <div class="stack-row" style="animation-delay: {i * 60}ms">
            <div class="stack-layer mono" style="color: {layer.color}">{layer.layer}</div>
            <div class="stack-items">
              {#each layer.items as item}
                <span class="stack-item mono">{item}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Principles -->
    <section class="section">
      <div class="section-label mono">Architectural Principles</div>
      <div class="principles-grid">
        <div class="principle">
          <div class="principle-title mono">Bridge Stays Thin</div>
          <p>Transport only — connection lifecycle, auth, routing, Redis Streams proxying. All harness logic lives exclusively in the worker image. No exceptions.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Stateless Agents</div>
          <p>All agents are stateless. State lives externally in Redis or Temporal's durable execution engine. Temporal's replay guarantees are a first-class design constraint.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Intention as a Workflow</div>
          <p>Temporal manages intention state continuity across agents and sub-agents — surviving crashes, evictions, failures — while the router/dispatch layer remains stateless.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Single Harness</div>
          <p>Our harness is the single source of truth for agent loop logic. IDE plugins are thin context capture and UI bridge layers only. Porting creates divergence risk.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Deny-Overrides Policies</div>
          <p>Multiple policies per task are composed with deny-overrides and priority-based tie-breaking. PolicyResolver merges into a single PolicyBundle before agent boot.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Memory ≠ Brain</div>
          <p>Memory Service holds per-user structured operational facts. Brain holds platform-wide institutional narrative. Both queried in parallel and merged at agent boot.</p>
        </div>
      </div>
    </section>

    <!-- Sandbox -->
    <section class="section">
      <div class="section-label mono">Sandbox Runtime</div>
      <div class="sandbox-card">
        <div class="sandbox-header">
          <span class="sandbox-badge mono">Anthropic SRT + bubblewrap</span>
          <span class="sandbox-status mono">● Production</span>
        </div>
        <p>
          Agents execute untrusted code in sandboxed subprocesses using Anthropic's Sandbox Runtime,
          which leverages bubblewrap for lightweight, kernel-level process isolation — no privileged containers,
          no separate runtime service. Leveraging Istio Integrated directly into the DevGPT plugin and CLI.
          Sub-2-second dispatch target with warm pod pool strategies via Karpenter NodePool and KEDA ScaledObject.
        </p>
      </div>
    </section>

  </div>
</div>

<style>
  .page {
    padding: 4rem 2rem 8rem;
  }

  .page-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--border);
  }

  .breadcrumb {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .page-title {
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .page-subtitle {
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--text-dim);
    max-width: 600px;
    line-height: 1.8;
  }

  /* Metrics */
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 5rem;
  }

  .metric {
    background: var(--bg-2);
    padding: 2rem 1.5rem;
    transition: background var(--transition);
  }
  .metric:hover { background: var(--bg-3); }

  .metric-value {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .metric-label {
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  /* Sections */
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

  /* Stack */
  .stack-grid {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
  }

  .stack-row {
    background: var(--bg-2);
    padding: 1.25rem 1.75rem;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1.5rem;
    align-items: center;
    transition: background var(--transition);
    animation: fadeUp 0.4s ease both;
  }
  .stack-row:hover { background: var(--bg-3); }

  .stack-layer {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .stack-item {
    font-size: 0.72rem;
    color: var(--text-dim);
    background: var(--bg-3);
    border: 1px solid var(--border);
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    letter-spacing: 0.04em;
  }

  /* Principles */
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .principle {
    background: var(--bg-2);
    padding: 2rem;
    transition: background var(--transition);
  }
  .principle:hover { background: var(--bg-3); }

  .principle-title {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
  }

  .principle p {
    font-size: 0.875rem;
    color: var(--text-dim);
    line-height: 1.75;
  }

  /* Sandbox */
  .sandbox-card {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
    background: var(--bg-2);
  }

  .sandbox-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .sandbox-badge {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--gold-dim);
    padding: 0.2rem 0.75rem;
    border-radius: 3px;
  }

  .sandbox-status {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7c9e87;
  }

  .sandbox-card p {
    font-size: 0.9rem;
    color: var(--text-dim);
    line-height: 1.8;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .stack-row { grid-template-columns: 1fr; gap: 0.5rem; }
  }
</style>
