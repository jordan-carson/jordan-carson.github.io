<script>
  import { base } from '$app/paths';

  const stack = [
    { layer: 'IDE Layer',           items: ['VS Code', 'IntelliJ', 'CLI / Headless'],  color: '#c9a84c' },
    { layer: 'Agent Harness',       items: ['devgpt-cli (TypeScript)', 'ACP Protocol', 'Headless / Cloud / Sandbox modes'],       color: '#8b7ec8' },
    { layer: 'Execution',           items: ['Kubernetes EKS', 'KEDA Autoscaling', 'Remote Sandbox Controller + bubblewrap', 'Identity Proxy (AWS creds via TokenReview)'],            color: '#d4856a' },
    { layer: 'Context Assembly',    items: ['EFS Bare Git Clones', 'Per-Task Worktrees', 'Context Assembler'],              color: '#6a9fd4' },
    { layer: 'Memory',              items: ['PostgreSQL / pgvector (Cohere Embed v4)', 'EFS Memory Files + Redis', 'Hybrid Retrieval (BM25 + RRF)', 'Temporal-Orchestrated Consolidation'],   color: '#a8c47c' },
    { layer: 'Streaming',           items: ['WebSockets', 'Redis Streams', 'MSK', 'Go Cloud API', 'SSE to IDE'],           color: '#c47ca8' },
    { layer: 'Governance',          items: ['SRT (Anthropic Sandbox Runtime)', 'Capability Gating', 'NetworkPolicy Egress (deny-all except DNS)'], color: '#d4c46a' },
  ];

  const metrics = [
    { v: '6,500+', l: 'Engineers' },
    { v: '<2s',    l: 'Sandbox dispatch target' },
    { v: '3+',      l: 'IDE integrations' },
    { v: '2025',   l: 'FINOS Conference' },
  ];
</script>

<svelte:head>
  <title>AI — Jordan Carson</title>
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header">
      <div class="breadcrumb mono"><a href="{base}/">Jordan Carson</a> / <a href="{base}/projects">Projects</a> / DevGPT</div>
      <h1 class="page-title serif">DevGPT</h1>
      <p class="page-subtitle mono">Cloud-Native AI Coding Agent Platform</p>
      <p class="page-sub">
        An internal platform that enables J.P. Morgan Chase engineers, product & designers to delegate
        software and prototype development tasks to AI agents — from feature implementation
        to deployment, running securely within the firm's infrastructure at enterprise scale.
      </p>
      <a href="{base}/projects/stateless-by-design" class="journey-link mono">Stateless by Design: Context & Cache at Scale →</a>
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
        <!-- <div class="principle">
          <div class="principle-title mono">Deny-Overrides Policies</div>
          <p>Multiple policies per task are composed with deny-overrides and priority-based tie-breaking. PolicyResolver merges into a single PolicyBundle before agent boot.</p>
        </div> -->
        <div class="principle">
          <div class="principle-title mono">Layered Memory, Hybrid Retrieval</div>
          <p>A dedicated memory service backs the harness with EFS-scoped memory files, Redis, and PostgreSQL/pgvector — retrieval fuses vector similarity with BM25 via Reciprocal Rank Fusion, and an LLM scope classifier tags insights team- vs. project-scoped before Temporal-orchestrated consolidation promotes them to long-term memory.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Warm Pods · Remote Sandbox Controller + Istio Ambient</div>
          <p>Pre-warmed pod pools eliminate cold-start latency at dispatch. Remote sandbox controller pods sit ready behind Istio Ambient Mode — sidecar-free mTLS and L4 policy enforced at the node level, keeping the data plane out of the agent container entirely.</p>
        </div>
        <div class="principle">
          <div class="principle-title mono">Supervisor-Gated Maintenance</div>
          <p>All automated patch branches are reviewed by a supervisor agent before surfacing to human owners. Teams retain merge authority to release/master. Automation proposes; humans decide.</p>
        </div>
      </div>
    </section>

    <!-- Technology Lifecycle Management -->
    <section class="section">
      <div class="section-label mono">Technology Lifecycle Management (TLM)</div>
      <div class="sandbox-card">
        <p>
          DevGPT powers TLM — a firm-wide JPMC initiative for automated software maintenance.
          Agentic workflows are currently delivering Java/Moneta Boot migrations on a dedicated
          maintenance branch, with a roadmap to a harness-driven agent loop and broader language
          coverage across Python, Golang, TypeScript, and Terraform. A supervisor agent reviews
          proposed changes and routes them to the owning team for merge to release/master. TLM
          operates across the full firm while the platform team remains AWM-chartered.
        </p>
      </div>
    </section>

    <!-- Sandbox -->
    <section class="section">
      <div class="section-label mono">Sandbox Runtime</div>
      <div class="sandbox-card">
        <div class="sandbox-header">
          <span class="sandbox-badge mono">Remote Sandbox Controller + bubblewrap</span>
          <span class="sandbox-status mono">● Production</span>
        </div>
        <p>
          Agents execute untrusted code in sandboxed subprocesses via a purpose-built remote sandbox
          controller, which leverages bubblewrap for lightweight, kernel-level process isolation — no privileged containers,
          no separate runtime service. Kubernetes NetworkPolicy egress controls (deny-all except DNS) sit behind
          corporate HTTP proxy containment, and an Identity Proxy brokers AWS credentials to sandboxes via an
          init-container authenticated by Kubernetes TokenReview — the harness never holds credentials directly.
          Sub-2-second dispatch target with warm pod pool strategies via Karpenter NodePool and KEDA ScaledObject.
        </p>
      </div>
    </section>

    <!-- Token Economics -->
    <section class="section">
      <div class="section-label mono">Token Economics & Observability</div>
      <div class="sandbox-card">
        <p>
          A high-throughput event platform (OpenTelemetry ingest, MSK/Kafka streaming) processes
          50K+ events/minute from IDE plugins and LLM proxies, with per-response token attribution
          including cache read/write tokens. The platform is evolving to a CQRS + CDC architecture
          on Aurora Serverless v2 — separating real-time AI attribution writes from analytics and
          reporting reads.
        </p>
      </div>
    </section>

    <!-- AWS Migration -->
    <section class="section">
      <div class="section-label mono">Infrastructure</div>
      <div class="sandbox-card">
        <p>
          In 2025, led a 2-week migration of DevGPT from AWM's shared AWS org into a dedicated
          AWS org via a Route53 weighted DNS cutover, to support firm-wide scale — completed with
          a 30-minute planned maintenance window, zero data loss, no user-facing failures.
        </p>
      </div>
    </section>

    <!-- Tech References -->
    <section class="section">
      <div class="section-label mono">Technology References</div>
      <div class="refs-list">
        <a href="https://github.com/anthropic-experimental/sandbox-runtime" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>anthropic-experimental/sandbox-runtime</span>
          <span class="ref-desc">Remote Sandbox Controller — kernel-level isolation for secure agent execution</span>
        </a>
        <a href="https://github.com/containers/bubblewrap" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>containers/bubblewrap</span>
          <span class="ref-desc">Bubblewrap — unprivileged process isolation underpinning the sandbox controller</span>
        </a>
        <a href="https://temporal.io/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>temporal.io</span>
          <span class="ref-desc">Temporal — durable workflow engine for agent orchestration & intention state</span>
        </a>
        <a href="https://aws.amazon.com/elasticache/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>AWS ElastiCache</span>
          <span class="ref-desc">Redis Streams — real-time agent output streaming and session state</span>
        </a>
        <a href="https://agentcommunicationprotocol.dev/introduction/welcome" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>Agent Communication Protocol (ACP)</span>
          <span class="ref-desc">ACP — open protocol for agent-to-agent and agent-to-harness communication</span>
        </a>
        <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>Agent-to-Agent Protocol (A2A)</span>
          <span class="ref-desc">A2A — cross-platform agent interoperability protocol</span>
        </a>
        <a href="https://arize.com/phoenix/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>Arize Phoenix</span>
          <span class="ref-desc">Phoenix — LLM observability and tracing for agent evaluation</span>
        </a>
        <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>pgvector</span>
          <span class="ref-desc">pgvector — vector similarity search backing the layered memory service</span>
        </a>
        <a href="https://aws.amazon.com/msk/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>AWS MSK</span>
          <span class="ref-desc">Managed Kafka — high-throughput telemetry ingest for token economics</span>
        </a>
        <a href="https://aws.amazon.com/rds/aurora/serverless/" target="_blank" rel="noopener" class="ref-link mono">
          <span class="ref-icon">↗</span>
          <span>Aurora Serverless v2</span>
          <span class="ref-desc">CQRS + CDC write/read split for real-time AI attribution and analytics</span>
        </a>
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

  .journey-link {
    display: inline-block;
    margin-top: 1.5rem;
    margin-right: 2rem;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    border-bottom: 1px solid var(--gold-dim);
    transition: border-color var(--transition);
  }

  .journey-link:hover {
    border-color: var(--gold);
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

  .refs-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .ref-link {
    display: grid;
    grid-template-columns: 1.5rem 1fr auto;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: var(--bg-2);
    font-size: 0.78rem;
    color: var(--text-dim);
    transition: background var(--transition), color var(--transition);
    letter-spacing: 0.02em;
  }

  .ref-link:hover {
    background: var(--bg-3);
    color: var(--gold);
  }

  .ref-icon {
    color: var(--gold-dim);
    transition: color var(--transition);
  }

  .ref-link:hover .ref-icon { color: var(--gold); }

  .ref-desc {
    font-size: 0.68rem;
    color: var(--text-muted);
    letter-spacing: 0.04em;
    text-align: right;
  }
</style>
