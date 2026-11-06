<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import { reveal } from '$lib/actions/reveal.js';

  const segments = [
    { id: 'system',       label: 'System Prompt',            tokens: '2K',   pct: 1,  cached: true,  color: '#0e7490' },
    { id: 'org',          label: 'Org Memory',               tokens: '4K',   pct: 2,  cached: true,  color: '#8b7ec8' },
    { id: 'team',         label: 'Team Memory',              tokens: '4K',   pct: 2,  cached: true,  color: '#7c9e87' },
    { id: 'session',      label: 'Session & User Memory',    tokens: '6K',   pct: 3,  cached: true,  color: '#6a9fd4' },
    { id: 'tools',        label: 'Tool Schemas',             tokens: '12K',  pct: 6,  cached: true,  color: '#c47ca8' },
    { id: 'conversation', label: 'Rolling Conversation',     tokens: '152K', pct: 76, cached: true,  color: '#d4856a' },
    { id: 'live',         label: 'Live Turn',                tokens: '20K',  pct: 10, cached: false, color: '#d48b8b' },
  ];

  const steps = [
    {
      eyebrow: 'Stateless by Design',
      title: 'A 200K Window, Played Indefinitely',
      body: [
        'Anthropic\'s models historically gave you a 200,000 token context window (newer models like Opus 4.7/4.8 default to 1M). Most systems treat that as a ceiling — fill it, hit it, truncate, repeat.',
        'DevGPT treats it as an instrument: a fixed canvas where what\'s stable recurs from cache, while only the smallest possible slice is freshly composed each turn. Scroll to see how the window is built.',
      ],
      cachePct: 0,
      activeUpTo: -1,
    },
    {
      eyebrow: 'Layer 1 · 2K tokens',
      title: 'System Prompt',
      body: [
        'At the top of every request sits the system prompt — instructions, persona, formatting rules. It almost never changes, so it\'s the first thing placed above the cache boundary.',
        'Every cache hit starts here.',
      ],
      cachePct: 100,
      activeUpTo: 0,
    },
    {
      eyebrow: 'Layer 2 · +4K tokens',
      title: 'Org Memory',
      body: [
        'Shared institutional knowledge — team conventions, architecture decisions, codebase summaries — identical across every user in an org.',
        'Cache it once, and every subsequent request from anyone in that org reads it for free.',
      ],
      cachePct: 100,
      activeUpTo: 1,
    },
    {
      eyebrow: 'Layer 3 · +4K tokens',
      title: 'Team Memory',
      body: [
        'One layer down: team-specific context — which services this team owns, current priorities, recent incidents.',
        'Still shared across users, still cache-eligible, refreshed on a slower cadence than session state.',
      ],
      cachePct: 100,
      activeUpTo: 2,
    },
    {
      eyebrow: 'Layer 4 · +6K tokens',
      title: 'Session & User Memory',
      body: [
        'Per-user state — what you\'re working on, recent decisions, your preferences. This refreshes more often than org or team memory.',
        'But within a session, it\'s stable enough to sit above the cache boundary too.',
      ],
      cachePct: 100,
      activeUpTo: 3,
    },
    {
      eyebrow: 'Layer 5 · +12K tokens',
      title: 'Tool Schemas',
      body: [
        'Tool and function definitions are large, verbose, and almost never change mid-session.',
        'They\'re some of the highest-value real estate in the cache — pay for them once, reuse them for the entire session.',
      ],
      cachePct: 100,
      activeUpTo: 4,
    },
    {
      eyebrow: 'Layer 6 · +152K tokens',
      title: 'Rolling Conversation Window',
      body: [
        'Here\'s where most systems get it wrong: they resend the entire conversation, uncached, every single turn.',
        'DevGPT manages a rolling window with cache breakpoints placed deliberately — so only the newest few turns fall outside the cached prefix. The rest of the conversation stays cached as it grows.',
      ],
      cachePct: 96,
      activeUpTo: 5,
    },
    {
      eyebrow: 'Layer 7 · +20K tokens',
      title: 'The Live Turn',
      body: [
        'The smallest possible slice — your newest message and the model\'s response — is the only part that always hits live inference.',
        'Everything above it: read from cache, nearly free, nearly instant.',
      ],
      cachePct: 86,
      activeUpTo: 6,
    },
    {
      eyebrow: 'The Result',
      title: 'The Window Never Resets — It Develops',
      body: [
        'A musical theme doesn\'t restart every time it recurs — it\'s restated, varied, built on. That\'s what a well-managed 200K window does.',
        'The stable parts — system prompt, memory, tools, the bulk of the conversation — recur from cache. Only the newest material is freshly composed. Run well, the window never has to reset.',
        'This is what gets DevGPT to ~90% prompt cache hit rates, ~20M peak cache reads/min, and ~6M TPM of live inference against a 30M budget — the same window, sustained indefinitely.',
      ],
      cachePct: 90,
      activeUpTo: 6,
      final: true,
    },
  ];

  let activeStep = 0;
  let stepEls = [];

  // ── Part two: managing the conversation itself ───────────
  const messages = [
    { id: 1, role: 'user',      label: 'Refactor the auth module',                          breakpoint: true },
    { id: 2, role: 'tool',      label: 'Read auth.go · 240 lines',                           big: true, head: 'package auth', tail: 'func (s *Service) Refresh(ctx context.Context) error {' },
    { id: 3, role: 'assistant', label: 'Refactored token validation across 3 files' },
    { id: 4, role: 'user',      label: 'Now add unit tests for the refresh path',            breakpoint: true, fold: 'A' },
    { id: 5, role: 'assistant', label: 'Wrote auth_test.go — 6 new cases',                   fold: 'A' },
    { id: 6, role: 'tool',      label: 'go test ./auth/... · 400+ lines',                    big: true, fold: 'A', head: '=== RUN   TestRefreshToken', tail: 'ok    github.com/.../auth  1.214s' },
    { id: 7, role: 'user',      label: 'One test is failing on nil context — fix it',        breakpoint: true },
    { id: 8, role: 'assistant', label: 'Added nil-context guard, all tests pass' },
    { id: 9, role: 'user',      label: 'Re-read the full conversation and confirm everything\'s correct', breakpoint: true, trigger: true },
  ];

  function rowsFor(flags) {
    if (flags.boundary) {
      const rows = [
        { type: 'compacted', key: 'compacted' },
        { type: 'boundary', key: 'boundary' },
      ];
      messages.slice(6).forEach((m) => rows.push({ type: 'msg', key: 'm' + m.id, m }));
      return rows;
    }

    const rows = [];
    messages.forEach((m) => {
      if (m.fold === 'A') {
        if (flags.fold) {
          if (!rows.find((r) => r.type === 'fold')) rows.push({ type: 'fold', key: 'foldA' });
          return;
        }
      }
      if (flags.snip && m.big) {
        rows.push({ type: 'snip', key: 'm' + m.id, m });
        return;
      }
      rows.push({ type: 'msg', key: 'm' + m.id, m });
    });
    return rows;
  }

  const steps2 = [
    {
      eyebrow: 'Beyond the Window',
      title: 'Managing the Conversation Itself',
      body: [
        'The rolling 152K conversation window isn\'t just a buffer that grows until it\'s full — it\'s actively managed, turn by turn, with a handful of techniques that keep it healthy indefinitely.',
        'Here\'s a representative slice of a real DevGPT session — nine turns into a refactor — and the techniques applied to it as the conversation grows.',
      ],
      tokens: 142000,
      cachePct: 92,
      flags: {},
    },
    {
      eyebrow: 'Technique 1 · Cache Breakpoints',
      title: 'Cache Breakpoints',
      body: [
        'Anthropic\'s prompt cache works on prefixes: everything up to a cache_control breakpoint is either a hit or a miss, as a block.',
        'DevGPT places a breakpoint at the start of each new user turn. Every previous turn — system prompt, memory, tools, and the entire prior conversation — reads from cache. Only the newest turn is ever priced as a miss.',
      ],
      tokens: 142000,
      cachePct: 94,
      flags: { breakpoints: true },
    },
    {
      eyebrow: 'Technique 2 · The Sliding Window',
      title: 'The Sliding Window',
      body: [
        'As the conversation grows past the first few turns, the oldest ones slide out of the "hot" window — but they aren\'t deleted.',
        'They move into a compacted memory tier, ready to be summarized rather than resent verbatim.',
      ],
      tokens: 148000,
      cachePct: 94,
      flags: { breakpoints: true, window: true },
    },
    {
      eyebrow: 'Technique 3 · Snipping Tool Results',
      title: 'Snip, Don\'t Resend',
      body: [
        'Tool calls — reading a 240-line file, running a test suite with 400 lines of output — dump enormous amounts of text into the conversation.',
        'Once that output has served its purpose, DevGPT snips it down to a head and tail, joined by a literal [...snipped...] marker — enough for the model to recall what happened without resending the whole thing on every turn.',
      ],
      tokens: 151000,
      cachePct: 95,
      flags: { breakpoints: true, window: true, snip: true },
    },
    {
      eyebrow: 'Technique 4 · Folded Messages',
      title: 'Folding Related Turns',
      body: [
        'A back-and-forth that resolves cleanly — "add tests," "wrote the tests," "ran them, they pass" — doesn\'t need to stay as three separate turns forever.',
        'DevGPT folds resolved clusters into a single collapsed entry with a one-line summary. The detail is still retrievable if needed, but it stops costing tokens on every turn.',
      ],
      tokens: 154000,
      cachePct: 95,
      flags: { breakpoints: true, window: true, snip: true, fold: true },
    },
    {
      eyebrow: 'Technique 5 · Microcompaction',
      title: 'Microcompaction',
      body: [
        'Snipping and folding aren\'t one-time events — they run continuously as a lightweight background pass, trimming a little more off older, already-condensed turns each time the conversation advances.',
        'It\'s the difference between a single jarring cleanup and a conversation that quietly stays tidy the whole time.',
      ],
      tokens: 151000,
      cachePct: 96,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true },
    },
    {
      eyebrow: 'Technique 6 · Background Workers',
      title: 'A Haiku Generator on the Side',
      body: [
        'Not every tool call needs to block the main conversation. DevGPT runs a small async generator on Haiku alongside the primary model — it watches for outstanding tool calls, picks them up, and waits on the results.',
        'When a result lands, the Haiku worker folds it into a short note and writes it back into the main window as a tool result — so the primary model can fire off several tool calls in one turn and keep going, instead of waiting on each one in sequence.',
      ],
      tokens: 151000,
      cachePct: 96,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true },
    },
    {
      eyebrow: 'Technique 7 · Autocompaction',
      title: 'Autocompaction at 167K',
      body: [
        'Microcompaction buys time, but eventually a session crosses ~167,000 of the 200,000-token budget — close enough to the ceiling that something has to change.',
        'At that point DevGPT runs a full compaction pass: everything before a literal [COMPACTION_BOUNDARY] marker is replaced with a single dense summary. The conversation that follows starts fresh against that summary, well clear of the ceiling, and keeps going.',
      ],
      tokens: 41000,
      cachePct: 97,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true, boundary: true },
    },
    {
      eyebrow: 'A Subtle Lever',
      title: 'Past Tense vs. Future Tense',
      body: [
        'How the compacted summary is phrased matters almost as much as what\'s in it. "Tests were fixed and pass" reads as a closed fact. "Tests will be fixed" reads as an open task.',
        'Summaries — and instructions generally — are written in the past tense, describing what was done, not the future tense describing what should happen next. A future-tense summary reads like a to-do list the model feels obligated to revisit; a past-tense one reads like history it can build on.',
      ],
      tokens: 41000,
      cachePct: 97,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true, boundary: true, tense: true },
    },
    {
      eyebrow: 'Available, Not Always Used',
      title: 'Beta Headers Worth Knowing',
      body: [
        'Anthropic ships some of this behind beta headers. fine-grained-tool-streaming-2025-05-14 streams tool-call arguments incrementally instead of waiting for the full JSON block — useful for the Haiku side-channel above, since it can start acting on a call before the primary model finishes emitting it.',
        'There\'s also a context-1m-* beta for a 1M-token context window. DevGPT doesn\'t use it — the techniques on this page are what make a steady 200K window sufficient — but it\'s there if a workload ever needs the extra headroom.',
      ],
      tokens: 41000,
      cachePct: 97,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true, boundary: true, tense: true },
    },
    {
      eyebrow: 'The Failure Mode',
      title: 'The Word That Causes Infinite Loops',
      body: [
        'All of this works as long as the agent doesn\'t go looking for what\'s no longer there. The phrase that breaks it: "re-read the conversation," "review everything above," "go through all the messages."',
        'Folded and snipped content, and anything before [COMPACTION_BOUNDARY], is gone from the live context — replaced by a summary. An instruction to "re-read" sends the agent hunting for the original text. It isn\'t there, so it calls its tools again to find it, gets the same compacted result, and asks again. Without a guard, that\'s an infinite loop from a single word.',
      ],
      tokens: 41000,
      cachePct: 97,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true, boundary: true, tense: true, loop: true },
    },
    {
      eyebrow: 'Put Together',
      title: 'Indefinite Context, By Design',
      body: [
        'Cache breakpoints, sliding windows, snipped tool output, folded turns, microcompaction, background workers, and autocompaction at the [COMPACTION_BOUNDARY] — seven small disciplines, applied continuously, are what let a single session run for hours without ever resetting or hitting a wall.',
        'Two rules layered on top of all of it: write summaries in the past tense, as completed fact rather than pending work — and never ask the agent to "re-read" what\'s already been compacted. Ask it to continue from the summary instead.',
      ],
      tokens: 44000,
      cachePct: 97,
      flags: { breakpoints: true, window: true, snip: true, fold: true, micro: true, worker: true, boundary: true, tense: true },
      final: true,
    },
  ];

  let activeStep2 = 0;
  let stepEls2 = [];

  onMount(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = stepEls.indexOf(entry.target);
          if (idx !== -1) activeStep = idx;
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    stepEls.forEach((el) => el && obs.observe(el));

    const obs2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = stepEls2.indexOf(entry.target);
          if (idx !== -1) activeStep2 = idx;
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    stepEls2.forEach((el) => el && obs2.observe(el));

    return () => {
      obs.disconnect();
      obs2.disconnect();
    };
  });

  $: current = steps[activeStep] ?? steps[0];
  $: activeUpTo = current.activeUpTo;

  $: current2 = steps2[activeStep2] ?? steps2[0];
  $: flags2 = current2.flags;
  $: rows = rowsFor(flags2);
</script>

<svelte:head>
  <title>Stateless by Design — Jordan Carson</title>
  <meta name="description" content="How DevGPT runs effectively unbounded conversations within a 200K token context window — context, cache, and prompt management working together to sustain ~90% prompt cache hit rates indefinitely." />
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header" use:reveal>
      <div class="breadcrumb mono"><a href="{base}/">Jordan Carson</a> / <a href="{base}/projects">Projects</a> / Stateless by Design</div>
      <h1 class="page-title serif">Stateless<br />by Design</h1>
      <p class="page-subtitle mono">Context, Cache & Prompt Management at Scale</p>
      <p class="page-sub">
        A name for the discipline behind running effectively unbounded conversations inside
        a fixed 200K token window — context assembly, memory, tool schemas, and prompt caching,
        orchestrated together so the window recurs and develops instead of resetting.
      </p>
    </header>

    <div class="scrolly">
      <div class="scrolly-steps">
        {#each steps as step, i}
          <div class="step" class:final={step.final} bind:this={stepEls[i]}>
            <div class="step-eyebrow mono">{step.eyebrow}</div>
            <h2 class="step-title serif">{step.title}</h2>
            {#each step.body as p}
              <p>{p}</p>
            {/each}
          </div>
        {/each}
      </div>

      <div class="scrolly-visual">
        <div class="visual-sticky">
          <div class="visual-header mono">
            <span class="visual-label">Context Window</span>
            <span class="visual-cache">Cache hit · <strong>{current.cachePct}%</strong></span>
          </div>

          <div class="stack">
            {#each segments as seg, i}
              <div
                class="stack-row"
                class:active={i <= activeUpTo}
                style="--seg-color: {seg.color}; transition-delay: {i * 60}ms"
              >
                <span class="stack-dot" style="background: {seg.color}"></span>
                <span class="stack-label mono">{seg.label}</span>
                <span class="stack-tokens mono">{seg.tokens}</span>
                <span class="stack-badge mono" class:cached={seg.cached}>
                  {seg.cached ? 'cached' : 'live'}
                </span>
              </div>
            {/each}
          </div>

          <div class="window-bar" class:visible={current.final}>
            {#each segments as seg}
              <div
                class="window-seg"
                style="width: {seg.pct}%; background: {seg.color};"
                title="{seg.label} · {seg.tokens}"
              ></div>
            {/each}
          </div>
          <div class="window-caption mono" class:visible={current.final}>
            200,000 tokens · composed once, replayed indefinitely
          </div>
        </div>
      </div>
    </div>

    <div class="scrolly part-two">
      <div class="scrolly-steps">
        {#each steps2 as step, i}
          <div class="step" class:final={step.final} bind:this={stepEls2[i]}>
            <div class="step-eyebrow mono">{step.eyebrow}</div>
            <h2 class="step-title serif">{step.title}</h2>
            {#each step.body as p}
              <p>{p}</p>
            {/each}
          </div>
        {/each}
      </div>

      <div class="scrolly-visual">
        <div class="visual-sticky">
          <div class="visual-header mono">
            <span class="visual-label">Conversation Timeline</span>
            <span class="visual-cache">{current2.tokens.toLocaleString()} / 200K · <strong>{current2.cachePct}%</strong></span>
          </div>

          <div class="timeline">
            {#each rows as row (row.key)}
              <div transition:fade={{ duration: 250 }}>
                {#if row.type === 'msg'}
                  <div
                    class="tl-row role-{row.m.role}"
                    class:dim={flags2.window && row.m.id <= 2}
                    class:loop-trigger={flags2.loop && row.m.trigger}
                  >
                    <span class="tl-dot"></span>
                    <span class="tl-label mono">{row.m.label}</span>
                    {#if flags2.breakpoints && row.m.breakpoint}
                      <span class="tl-badge breakpoint mono">cache ⊢</span>
                    {/if}
                  </div>
                {:else if row.type === 'snip'}
                  <div class="tl-snip">
                    <div class="tl-snip-head mono">{row.m.head}</div>
                    <div class="tl-snip-ellipsis mono">[...snipped...]</div>
                    <div class="tl-snip-tail mono">{row.m.tail}</div>
                    {#if flags2.micro}
                      <span class="tl-micro mono">−1.6K</span>
                    {/if}
                  </div>
                {:else if row.type === 'fold'}
                  <div class="tl-fold">
                    <span class="tl-fold-icon">▸</span>
                    <span class="tl-fold-label mono">3 turns folded — auth tests written &amp; passing</span>
                    {#if flags2.micro}
                      <span class="tl-micro mono">−2.4K</span>
                    {/if}
                  </div>
                {:else if row.type === 'compacted'}
                  <div class="tl-compacted">
                    <div class="tl-compacted-row">
                      <span class="tl-compacted-icon">◼</span>
                      <span class="tl-compacted-label mono">Compacted Memory — turns 1–6 summarized (~6.4K tokens)</span>
                    </div>
                    {#if flags2.tense}
                      <div class="tl-tense mono">
                        <span class="tl-tense-good">✓ "tests were fixed and passed"</span>
                        <span class="tl-tense-bad">✗ "tests will be fixed"</span>
                      </div>
                    {/if}
                  </div>
                {:else if row.type === 'boundary'}
                  <div class="tl-boundary">
                    <span class="tl-boundary-label mono">[COMPACTION_BOUNDARY]</span>
                  </div>
                {/if}
              </div>
            {/each}
          </div>

          {#if flags2.loop}
            <div class="loop-warning" transition:fade>
              <span class="loop-warning-icon">⚠</span>
              <p class="mono">"Re-read the full conversation" sends the agent looking for turns 1–6 — but they're gone, replaced by a summary behind [COMPACTION_BOUNDARY]. It re-calls its tools, gets the same summary, and asks again.</p>
            </div>
          {/if}
        </div>
      </div>

      {#if flags2.worker}
        <div class="haiku-fork" transition:fade={{ duration: 300 }}>
          <div class="haiku-fork-header mono">Haiku · async</div>
          <div class="haiku-fork-row mono">
            <span class="haiku-fork-dot"></span>
            go test output
          </div>
          <div class="haiku-fork-arrow mono">↓ summarize</div>
          <div class="haiku-fork-row mono">
            <span class="haiku-fork-dot"></span>
            −1.6K written back
          </div>
          <div class="haiku-fork-arrow mono">↓ summarize</div>
          <div class="haiku-fork-row mono">
            <span class="haiku-fork-dot"></span>
            −2.4K written back
          </div>
        </div>
      {/if}
    </div>

    <section class="closing" use:reveal={{ y: 40, duration: 700 }}>
      <div class="closing-stats">
        <div class="closing-stat">
          <div class="closing-value mono">90%</div>
          <div class="closing-label">Prompt cache hit rate</div>
        </div>
        <div class="closing-stat">
          <div class="closing-value mono">20M</div>
          <div class="closing-label">Peak cache reads / min</div>
        </div>
        <div class="closing-stat">
          <div class="closing-value mono">6M</div>
          <div class="closing-label">Live inference TPM (of 30M budget)</div>
        </div>
        <div class="closing-stat">
          <div class="closing-value mono">167K</div>
          <div class="closing-label">Autocompaction threshold (of 200K)</div>
        </div>
      </div>
    </section>

    <div class="journey-links">
      <a href="{base}/projects" class="back-link mono">← Back to Projects</a>
      <a href="{base}/projects/devgpt" class="back-link mono">View DevGPT Architecture →</a>
    </div>

  </div>
</div>

<style>
  .page {
    padding: 4rem 2rem 8rem;
  }

  .page-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .page-header {
    max-width: 860px;
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

  /* ── Scrollytelling layout ───────────────────────────── */
  .scrolly {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 3rem;
  }

  .scrolly-steps {
    display: flex;
    flex-direction: column;
  }

  .step {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border);
  }

  .step:first-child {
    min-height: 50vh;
  }

  .step:last-child {
    border-bottom: none;
    min-height: 60vh;
  }

  .step-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 1rem;
  }

  .step-title {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 300;
    letter-spacing: -0.01em;
    color: var(--text);
    margin-bottom: 1.25rem;
    line-height: 1.15;
  }

  .step p {
    font-size: 0.95rem;
    color: var(--text-dim);
    line-height: 1.85;
    margin-bottom: 1.1rem;
    max-width: 520px;
  }

  .step.final .step-title {
    color: var(--cyan);
  }

  /* ── Sticky visual ────────────────────────────────────── */
  .scrolly-visual {
    position: relative;
  }

  /* Haiku async fork panel */
  .haiku-fork {
    display: none;
  }

  @media (min-width: 1480px) {
    .scrolly.part-two {
      grid-template-columns: 1fr 380px 170px;
    }

    .haiku-fork {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      grid-column: 3;
      position: sticky;
      top: calc(56px + 3rem);
      padding: 0.9rem;
      border: 1px solid #6a9fd4;
      border-radius: var(--radius);
      background: rgba(106, 159, 212, 0.05);
    }

    .haiku-fork::before {
      content: '';
      position: absolute;
      top: 1.2rem;
      left: -1.5rem;
      width: 1.5rem;
      height: 1px;
      background: #6a9fd4;
      opacity: 0.5;
    }

    .haiku-fork-header {
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6a9fd4;
      margin-bottom: 0.25rem;
    }

    .haiku-fork-row {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.62rem;
      color: var(--text-dim);
      line-height: 1.4;
    }

    .haiku-fork-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #6a9fd4;
      flex-shrink: 0;
    }

    .haiku-fork-arrow {
      font-size: 0.6rem;
      color: var(--text-muted);
      padding-left: 0.95rem;
    }
  }

  .visual-sticky {
    position: sticky;
    top: calc(56px + 3rem);
    border-radius: var(--radius);
    box-shadow: var(--shadow-card);
    background: var(--bg-2);
    padding: 1.5rem;
  }

  .visual-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .visual-cache strong {
    color: var(--cyan);
    font-size: 0.85rem;
    letter-spacing: 0.02em;
    transition: color 200ms ease;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .stack-row {
    display: grid;
    grid-template-columns: 8px 1fr auto auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    opacity: 0.25;
    transform: translateX(-8px);
    transition: opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease;
  }

  .stack-row.active {
    opacity: 1;
    transform: translateX(0);
    border-color: var(--seg-color);
  }

  .stack-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .stack-label {
    font-size: 0.72rem;
    color: var(--text-dim);
    letter-spacing: 0.02em;
  }

  .stack-row.active .stack-label {
    color: var(--text);
  }

  .stack-tokens {
    font-size: 0.66rem;
    color: var(--text-muted);
  }

  .stack-badge {
    font-size: 0.58rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.1rem 0.4rem;
    border-radius: 2px;
    border: 1px solid var(--border);
    color: var(--text-muted);
  }

  .stack-row.active .stack-badge.cached {
    color: #7c9e87;
    border-color: #7c9e87;
  }

  .stack-row.active .stack-badge:not(.cached) {
    color: #d48b8b;
    border-color: #d48b8b;
  }

  /* Proportional window bar */
  .window-bar {
    display: flex;
    height: 10px;
    border-radius: 4px;
    overflow: hidden;
    opacity: 0;
    transform: scaleX(0.96);
    transform-origin: left;
    transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .window-bar.visible {
    opacity: 1;
    transform: scaleX(1);
  }

  .window-seg {
    height: 100%;
  }

  .window-caption {
    margin-top: 0.6rem;
    font-size: 0.62rem;
    letter-spacing: 0.06em;
    color: var(--text-muted);
    text-align: center;
    opacity: 0;
    transition: opacity 600ms ease 200ms;
  }

  .window-caption.visible {
    opacity: 1;
  }

  /* ── Part two: conversation timeline ─────────────────────── */
  .part-two {
    margin-top: 4rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tl-row {
    display: grid;
    grid-template-columns: 8px 1fr auto;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    transition: opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease;
  }

  .tl-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--text-muted);
  }

  .tl-row.role-user .tl-dot { background: var(--cyan); }
  .tl-row.role-assistant .tl-dot { background: #6a9fd4; }
  .tl-row.role-tool .tl-dot { background: #c47ca8; }

  .tl-label {
    font-size: 0.7rem;
    color: var(--text-dim);
    letter-spacing: 0.01em;
  }

  .tl-badge {
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.12rem 0.5rem;
    border-radius: 999px;
    background: var(--cyan-glow);
    color: var(--cyan);
    white-space: nowrap;
  }

  .tl-row.dim {
    opacity: 0.35;
  }

  .tl-row.loop-trigger {
    border-color: #d48b8b;
    animation: loop-pulse 1.6s ease-in-out infinite;
  }

  @keyframes loop-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212, 139, 139, 0.35); }
    50% { box-shadow: 0 0 0 4px rgba(212, 139, 139, 0.12); }
  }

  /* Snipped tool result */
  .tl-snip {
    position: relative;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    border-left: 2px solid #c47ca8;
  }

  .tl-snip-head,
  .tl-snip-tail {
    font-size: 0.66rem;
    color: var(--text-dim);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tl-snip-ellipsis {
    font-size: 0.64rem;
    color: var(--text-muted);
    font-style: italic;
    margin: 0.15rem 0;
  }

  /* Folded message group */
  .tl-fold {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    border-left: 2px solid #7c9e87;
  }

  .tl-fold-icon {
    color: #7c9e87;
    font-size: 0.7rem;
  }

  .tl-fold-label {
    font-size: 0.7rem;
    color: var(--text-dim);
  }

  /* Microcompaction delta badge */
  .tl-micro {
    position: absolute;
    top: 0.4rem;
    right: 0.6rem;
    font-size: 0.6rem;
    letter-spacing: 0.04em;
    color: #7c9e87;
  }

  /* Compacted memory block */
  .tl-compacted {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.8rem 0.7rem;
    border: 1px solid var(--cyan-dim);
    border-radius: 8px;
    background: rgba(14, 116, 144, 0.06);
  }

  .tl-compacted-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .tl-compacted-icon {
    color: var(--cyan);
    font-size: 0.7rem;
  }

  .tl-compacted-label {
    font-size: 0.7rem;
    color: var(--cyan);
  }

  .tl-tense {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding-top: 0.6rem;
    border-top: 1px solid var(--border);
    font-size: 0.62rem;
    letter-spacing: 0.02em;
  }

  .tl-tense-good {
    color: #7c9e87;
  }

  .tl-tense-bad {
    color: #d48b8b;
  }

  /* Compaction boundary divider */
  .tl-boundary {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0.2rem 0;
  }

  .tl-boundary::before,
  .tl-boundary::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .tl-boundary-label {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    white-space: nowrap;
  }

  /* Infinite-loop warning */
  .loop-warning {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    margin-top: 1rem;
    padding: 0.9rem;
    border: 1px solid #d48b8b;
    border-radius: 4px;
    background: rgba(212, 139, 139, 0.06);
  }

  .loop-warning-icon {
    color: #d48b8b;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .loop-warning p {
    font-size: 0.68rem;
    line-height: 1.7;
    color: var(--text-dim);
    margin: 0;
  }

  /* ── Closing stats ────────────────────────────────────── */
  .closing {
    margin-top: 4rem;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-card);
    background: var(--bg-2);
  }

  .closing-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .closing-value {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--cyan);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .closing-label {
    font-size: 0.8rem;
    color: var(--text-dim);
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

  @media (max-width: 860px) {
    .scrolly {
      grid-template-columns: 1fr;
    }

    .scrolly-visual {
      order: -1;
    }

    .visual-sticky {
      position: relative;
      top: 0;
      margin-bottom: 2rem;
    }

    .step {
      min-height: auto;
      padding: 1.5rem 0;
    }

    .step:first-child {
      min-height: auto;
    }
  }
</style>
