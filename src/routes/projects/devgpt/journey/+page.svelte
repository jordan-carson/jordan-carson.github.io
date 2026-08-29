<script>
  import { base } from '$app/paths';
  import { reveal } from '$lib/actions/reveal.js';

  const entries = [
    {
      date: '2023',
      title: 'Autocomplete',
      tag: 'origin',
      body: [
        'DevGPT starts as a thin wrapper — a code autocomplete layer plugged into engineers\' IDEs inside J.P. Morgan\'s Asset & Wealth Management division. The problem it\'s solving is modest: reduce context-switching, surface code suggestions without leaving the editor, make developers a little faster.',
        'The model is GPT-3.5. The infrastructure is minimal. There\'s no caching, no memory, no orchestration. Requests go in, completions come out.',
        'But the usage data tells a different story. Engineers aren\'t just using it for autocomplete. They\'re asking it questions. Pasting in entire functions. Requesting refactors. The completions box is becoming a conversation.',
      ],
      callout: 'The insight: developers don\'t want autocomplete. They want a collaborator.',
    },
    {
      date: 'Early 2024',
      title: 'From Completion to Conversation',
      tag: 'evolution',
      body: [
        'The first major architectural shift: DevGPT evolves from a completion endpoint into a multi-turn assistant. We add session context, conversation history, and expand the IDE integration to VS Code and IntelliJ. We introduce Claude alongside GPT-4 — initially for longer context tasks where GPT-4\'s window was a ceiling.',
        'User count grows from dozens to hundreds. The feedback loop tightens. Engineers want the tool to understand their codebase, not just their current file. They want it to remember what they worked on yesterday. They want it to know what their team is building.',
        'The platform is outgrowing its original design. We begin rebuilding the backend — not iterating on what exists, but re-architecting for what\'s coming.',
      ],
      stack: 'FastAPI backend, PostgreSQL, basic Redis session caching, single-tenant EKS deployment, GPT-4 and Claude 3 via direct API.',
    },
    {
      date: 'Mid 2024',
      title: 'First Signs of Scale Pressure',
      tag: 'pressure',
      body: [
        'By mid-2024, DevGPT has several hundred active users. Every request is a live inference call. Every conversation turn sends the full message history. There\'s no prompt caching, no token budget management, no awareness of what\'s being re-computed on every turn.',
        'It works. But the cost curve is climbing faster than the user curve.',
        'We also begin integrating AWS Bedrock as the primary model layer — routing Anthropic models through Bedrock for compliance, auditability, and AWS-native IAM controls. This is the right call architecturally, but it introduces a new constraint: Bedrock service quotas. We\'re on default quota limits that were never designed for a platform at this trajectory.',
        'We don\'t hit the wall yet. But it\'s visible in the distance.',
      ],
    },
    {
      date: 'Late 2024',
      title: 'Platform Ambitions',
      tag: 'platform',
      body: [
        'The decision is made to invest DevGPT as a real platform — not a productivity tool, but infrastructure. That means:',
      ],
      list: [
        'Single-tenant architecture with per-LOB isolation — true multi-tenancy is blocked by JPMC\'s Route53 routing restrictions, so isolation happens at the LOB layer within a single tenant',
        'A proper context assembly system (not just dumping history into the prompt)',
        'Memory that persists across sessions — the four-layer model: Org / Team / User / Session',
        'A Kubernetes API gateway on EKS using Cilium for per-LOB auth, rate limiting, and load shedding',
        'Two independent services — Anthropic via AWS Bedrock, OpenAI via Azure OpenAI — with Bedrock inference profiles designed across 3 regions by default via Geo CRIS. No shared prompt router; provider selection stays a deliberate, user-facing decision rather than a platform abstraction',
        'IDE expansion: Android Studio and Xcode support on the roadmap — wanted, but never built; not enough time or headcount to take it on alongside everything else',
      ],
      bodyAfter: [
        'The platform begins onboarding product managers and senior leadership alongside engineers. The user base is no longer just developers. DevGPT is becoming infrastructure for how AWM thinks.',
        'User count approaches 2,000. TPM is growing fast.',
        'The user base stays AWM-only — which is why, even at scale, DevGPT tops out around 6,500 users rather than firm-wide.',
      ],
    },
    {
      date: 'September 2025',
      title: 'The Wall',
      tag: 'incident',
      eyebrow: '4 million tokens per minute. AWS throttles us. Users start seeing errors.',
      body: [
        'This is the moment everything breaks.',
        'Total platform TPM reaches approximately 4 million tokens per minute. AWS Bedrock begins throttling requests. Engineers, product managers, and senior leaders across AWM start seeing errors mid-session. Requests fail. Completions time out. The complaints come fast.',
        'The instinct is to blame the infrastructure. The load balancer. The EKS node groups. The API gateway. We dig through every layer.',
        'The root cause is simpler and more fundamental:',
      ],
      callout: 'We have prompt caching disabled. Every single token in every single request is hitting live inference.',
      bodyAfter: [
        'Every conversation turn. Every system prompt. Every shared context block that\'s identical across thousands of requests. All of it being re-computed, re-charged, re-throttled — every time.',
        'With ~2,000+ active users sending multi-turn conversations, the math was brutal. We weren\'t just using our quota — we were burning it on work the model had already done.',
      ],
      stack: 'Golang endpoints using InvokeModelWithResponseStream to Bedrock, running across 20 pods on EKS, with Karpenter for node provisioning and Cilium for networking.',
    },
    {
      date: 'Oct–Nov 2025',
      title: 'The Fix',
      tag: 'fix',
      eyebrow: 'Enabling prompt caching. Working with AWS on quota. Building the telemetry to see what\'s actually happening.',
      subsections: [
        {
          heading: '1. Prompt caching — enabled, properly architected',
          body: [
            'This isn\'t just flipping a flag. Effective prompt caching requires deliberate cache point placement — the system prompt, shared context blocks, and conversation prefixes need to be structured so the cache boundary sits in the right place. We redesign the context assembly layer around cache-friendliness: stable content above the fold, dynamic content below it, cache points placed at the boundaries that matter.',
            'We also implement rolling window management so long conversations don\'t evict their own cache entries, and build org-level shared caching for content that\'s identical across users — team context, codebase summaries, shared system prompts.',
          ],
        },
        {
          heading: '2. AWS service quota engineering',
          body: [
            'We partner directly with AWS to right-size our Bedrock quotas — not just for current load, but for the trajectory we\'re on. This means building a quota management framework: automated monitoring against limits, alerting at threshold percentages, and a capacity planning model tied to user growth projections. We design for the entirety of J.P. Morgan Chase, not just AWM.',
          ],
        },
        {
          heading: '3. Observability',
          body: [
            'We instrument every cache interaction — hit rate, miss rate, eviction patterns, per-request token savings. We integrate Phoenix (Arize) for LLM tracing alongside Datadog and OpenTelemetry. For the first time, we can see exactly what\'s happening at the token level on every request.',
            'In October 2025, we build a full telemetry gateway — Golang, OTEL end-to-end, with SQS separating staging from a federated production schema. It collects events from both the IDE plugins and the Bedrock proxies, giving us a single pipeline for everything flowing through the platform.',
            'This gateway becomes the cornerstone for AI attribution across all of AWM — every model call, every cache hit, every agent action, traceable back to a team, a user, and a cost center.',
          ],
        },
        {
          heading: '4. The Numbers — December 2025',
          body: [
            'By December, the results are not incremental. They\'re structural — 90% prompt cache hit rate, errors gone, users stop complaining.',
          ],
        },
      ],
      table: {
        headers: ['Metric', 'Before', 'After'],
        rows: [
          ['Prompt cache hit rate', '0%', '~90%'],
          ['Live inference TPM (peak)', '~4M (and climbing)', '~6M'],
          ['Cache read TPM (peak)', '0', '~32M'],
          ['TPM budget utilized', '>90% (throttled)', '~20% of 30M budget'],
          ['User-facing errors', 'Frequent', 'Eliminated'],
        ],
      },
      bodyAfter: [
        'Cache reads on Anthropic models peak at 32 million tokens per minute. Live inference consumption drops to approximately 6 million TPM against a 30 million TPM budget. The same platform, serving more users, consuming a fraction of the quota.',
        'Prompt caching alone brings AWS costs down 70% — the same infrastructure, serving a growing user base, at a fraction of the spend.',
        'The remaining edge cases are honest ones: inexperienced users sending requests that exceed Bedrock\'s maximum input token limits. These are operational constraints — not bugs, not architectural failures. We handle them with clear error messaging, input validation, and user education on context window limits.',
      ],
    },
    {
      date: '2025',
      title: 'Platform Migration',
      tag: 'org',
      eyebrow: 'A zero-downtime cutover to support firm-wide scale.',
      body: [
        'DevGPT\'s growth — 6,500 users, firm-wide tooling impact, infrastructure that had outgrown AWM\'s shared environments — forces an infrastructure decision: the platform needs its own dedicated AWS account structure to scale further.',
        'My manager and I execute a two-week migration — a full AWS org cutover with a 30-minute planned maintenance window, zero data loss, no user-facing failures. The new team, AI4Tech, is chartered within AWM to own the platform going forward.',
        'The migration clears the runway for the next phase: autonomous execution infrastructure.',
      ],
    },
    {
      date: 'Early 2026',
      title: 'Agentic Runtime',
      tag: 'runtime',
      eyebrow: 'Remote sandbox controller. Bubblewrap. Sub-2-second sandbox dispatch.',
      body: [
        'With the cost and quota problems solved, the platform can grow. And the next frontier isn\'t conversation — it\'s autonomous execution.',
        'We architect a remote sandbox controller on EKS: a pool-managed, session-aware Kubernetes pod system where agents execute untrusted code in sandboxed subprocesses using bubblewrap for kernel-level process isolation. No privileged containers. No separate runtime service.',
        'Key design decisions:',
      ],
      list: [
        'Warm pod pools eliminate cold-start latency — pods sit ready behind Karpenter NodePools, dispatched in under 2 seconds',
        'Istio Ambient Mode replaces the sidecar model — sidecar-free mTLS and L4 policy enforced at the node level, keeping the data plane completely out of the agent container',
        'KEDA ScaledObjects handle burst autoscaling without over-provisioning',
        'SOCKS5/socat network isolation gives each agent session a contained network surface',
        'VDI-to-AWS-cloud auth flow bridges JPMC\'s on-premise VDI environment to the cloud-native runtime securely',
      ],
      bodyAfter: [
        'The sandbox controller turns DevGPT from a chat interface with code awareness into a platform where agents can actually run code, test it, and iterate — inside the firm\'s security boundary. It\'s deliberately decoupled from the harness: the harness reasons and issues tool calls, the sandbox controller executes them, and neither holds the other\'s credentials.',
      ],
    },
    {
      date: 'May 2026',
      title: 'From Plugin to Platform',
      tag: 'rewrite',
      eyebrow: 'The agent loop was never meant to run without an IDE attached.',
      body: [
        'I\'m tasked with building cloud agents — long-running, asynchronous agents that operate without a developer sitting in front of an editor. The obvious starting point is DevGPT\'s existing agent loop, the same one driving the VS Code and IntelliJ plugins.',
        'It doesn\'t work. The agent loop is built assuming an IDE on the other end of the connection — plugin-side state, editor-bound context capture, UI callbacks baked into the control flow. Cloud agents need none of that, and the coupling makes it impossible to run the loop headless.',
        'Rather than bolt a cloud mode onto a plugin-shaped core, I rewrite the agent loop from the ground up as a CLI-first, headless runtime — the plugins become thin clients on top of it, not the other way around. The same binary that powers a developer\'s IDE session now runs unattended in a pod, dispatched by the SRT, driven by Temporal.',
        'This rewrite becomes the foundation for cloud agents across DevGPT — and for TLM\'s maintenance-branch agents that operate with no human in the loop until the patch is ready for review.',
        'It also lands at the right moment: 2026 is the year JPMC obtains Claude Code licenses firm-wide. With a headless, cloud-capable agent loop already in place, DevGPT becomes the internal answer to Claude Code — the same agentic coding experience, built to run inside JPMC\'s infrastructure and security perimeter.',
      ],
    },
    {
      date: '2025–2026',
      title: 'Technology Lifecycle Management',
      tag: 'tlm',
      eyebrow: 'DevGPT goes firm-wide — under the hood.',
      body: [
        'The most significant expansion of DevGPT\'s scope isn\'t a new UI feature or a new model. It\'s a new use case entirely: automated software maintenance at enterprise scale.',
        'Technology Lifecycle Management (TLM) uses DevGPT\'s agentic infrastructure to automate dependency updates, security patches, and framework migrations across JPMC\'s full technology estate — Java codebases today, expanding to Python, Golang, TypeScript, and Terraform.',
        'The architecture:',
      ],
      list: [
        'Agents operate on a dedicated maintenance branch per repository',
        'A supervisor agent reviews proposed changes — diffs, test results, risk assessment — before surfacing them to the owning team',
        'Teams retain full merge authority to release/master',
        'The system operates continuously, across the entire firm, while the platform team remains AWM-chartered',
      ],
      callout: 'The agents propose. The humans decide. The firm moves faster.',
    },
  ];
</script>

<svelte:head>
  <title>The DevGPT Journey — Jordan Carson</title>
  <meta name="description" content="From autocomplete to agentic platform — a production story at J.P. Morgan Chase. The unfiltered engineering history of DevGPT." />
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header">
      <div class="breadcrumb mono"><a href="{base}/">Jordan Carson</a> / <a href="{base}/projects">Projects</a> / <a href="{base}/projects/devgpt">DevGPT</a> / Journey</div>
      <h1 class="page-title serif">The DevGPT<br />Journey</h1>
      <p class="page-subtitle mono">From Autocomplete to Agentic Platform</p>
      <p class="page-sub">
        The unfiltered engineering history of DevGPT: what it started as, where it broke,
        how we fixed it, and where it's going. Most platform stories are told backwards,
        after everything worked. This one starts from the beginning.
      </p>
    </header>

    <div class="journey-list">
      {#each entries as e, i}
        <section class="journey-entry" use:reveal={{ y: 40, duration: 700, delay: Math.min(i, 4) * 40 }}>
          <div class="entry-date mono" data-tag={e.tag}>{e.date}</div>
          <div class="entry-body">
            <h2 class="entry-title serif">{e.title}</h2>
            {#if e.eyebrow}
              <p class="entry-eyebrow">{e.eyebrow}</p>
            {/if}

            {#each e.body || [] as p}
              <p>{p}</p>
            {/each}

            {#if e.callout}
              <div class="entry-callout">{e.callout}</div>
            {/if}

            {#if e.list}
              <ul class="entry-list">
                {#each e.list as item}
                  <li>{item}</li>
                {/each}
              </ul>
            {/if}

            {#if e.subsections}
              {#each e.subsections as sub}
                <h3 class="entry-subheading mono">{sub.heading}</h3>
                {#each sub.body as p}
                  <p>{p}</p>
                {/each}
              {/each}
            {/if}

            {#if e.table}
              <div class="entry-table-wrap">
                <table class="entry-table">
                  <thead>
                    <tr>
                      {#each e.table.headers as h}
                        <th class="mono">{h}</th>
                      {/each}
                    </tr>
                  </thead>
                  <tbody>
                    {#each e.table.rows as row}
                      <tr>
                        {#each row as cell, ci}
                          <td class={ci === 0 ? 'mono' : ''}>{cell}</td>
                        {/each}
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {/if}

            {#each e.bodyAfter || [] as p}
              <p>{p}</p>
            {/each}

            {#if e.stack}
              <div class="entry-stack mono">Stack at this point: {e.stack}</div>
            {/if}
          </div>
        </section>
      {/each}
    </div>

    <section class="journey-now" use:reveal={{ y: 40, duration: 700 }}>
      <div class="section-label mono">Where We Are Now</div>
      <p class="now-headline serif">6,500 users. Firm-wide reach. Sub-2s sandbox dispatch. 90% cache hit rate.</p>
      <p>
        DevGPT is no longer a tool. It's infrastructure — for how engineers write code, how teams
        manage their technology estate, and how J.P. Morgan Chase thinks about the relationship
        between AI and software development.
      </p>
      <p>
        The journey from a simple autocomplete wrapper in 2023 to an agentic platform powering
        firm-wide software maintenance in 2026 is not a straight line. It's a series of constraints
        hit, root causes diagnosed, and architectural decisions made under real pressure with real
        users depending on the outcome.
      </p>
      <p class="now-closer">That's what production looks like.</p>
    </section>

    <div class="journey-links">
      <a href="{base}/projects/devgpt" class="back-link mono">← Back to DevGPT Architecture</a>
      <a href="{base}/writings" class="back-link mono">Read Writing →</a>
    </div>

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
    margin-bottom: 0.75rem;
  }

  .page-subtitle {
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 1.5rem;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--text-dim);
    max-width: 600px;
    line-height: 1.8;
  }

  .journey-list {
    display: flex;
    flex-direction: column;
  }

  .journey-entry {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 2.5rem;
    padding: 3rem 0;
    border-bottom: 1px solid var(--border);
  }

  .journey-entry:last-child {
    border-bottom: none;
  }

  .entry-date {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: var(--cyan);
    text-transform: uppercase;
    position: relative;
    padding-left: 1rem;
  }

  .entry-date::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.35em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--cyan);
  }

  .entry-title {
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: -0.01em;
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .entry-eyebrow {
    font-size: 1rem;
    color: var(--text);
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .entry-body p {
    font-size: 0.92rem;
    color: var(--text-dim);
    line-height: 1.85;
    margin-bottom: 1.1rem;
    max-width: 640px;
  }

  .entry-body p:last-child {
    margin-bottom: 0;
  }

  .entry-callout {
    border-left: 2px solid var(--cyan);
    padding: 0.25rem 1.25rem;
    margin: 1.25rem 0;
    font-size: 1rem;
    color: var(--text);
    line-height: 1.7;
    font-style: italic;
    max-width: 600px;
  }

  .entry-list {
    list-style: none;
    margin: 0 0 1.1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 640px;
  }

  .entry-list li {
    font-size: 0.88rem;
    color: var(--text-dim);
    line-height: 1.7;
    padding-left: 1.25rem;
    position: relative;
  }

  .entry-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--cyan-dim);
  }

  .entry-subheading {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--cyan);
    margin: 1.75rem 0 0.75rem;
  }

  .entry-subheading:first-child {
    margin-top: 0;
  }

  .entry-table-wrap {
    overflow-x: auto;
    margin: 1.25rem 0;
    border-radius: var(--radius);
    box-shadow: var(--shadow-card);
  }

  .entry-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }

  .entry-table th,
  .entry-table td {
    padding: 0.75rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }

  .entry-table th {
    color: var(--cyan);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.66rem;
    background: var(--bg-2);
  }

  .entry-table td {
    color: var(--text-dim);
  }

  .entry-table tr:last-child td {
    border-bottom: none;
  }

  .entry-stack {
    font-size: 0.72rem;
    color: var(--text-muted);
    letter-spacing: 0.02em;
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    margin-top: 1.25rem;
    line-height: 1.7;
  }

  .journey-now {
    margin-top: 5rem;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-card);
    background: var(--bg-2);
  }

  .journey-now .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 1.5rem;
  }

  .now-headline {
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--text);
    line-height: 1.3;
    margin-bottom: 1.25rem;
    max-width: 640px;
  }

  .journey-now p {
    font-size: 0.92rem;
    color: var(--text-dim);
    line-height: 1.85;
    margin-bottom: 1.1rem;
    max-width: 640px;
  }

  .now-closer {
    color: var(--cyan) !important;
    font-style: italic;
  }

  .journey-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
  }

  .back-link {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
    transition: color var(--transition);
  }

  .back-link:hover {
    color: var(--cyan);
  }

  @media (max-width: 640px) {
    .journey-entry {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
