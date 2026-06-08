<script>
  import { base } from '$app/paths';
</script>

<section class="hero">
  <div class="hero-bg">
    <div class="grid-overlay"></div>
    <div class="glow-orb"></div>
  </div>

  <div class="hero-content">
    <div class="hero-tag mono">Principal Engineer · AI Agent Platforms</div>

    <h1 class="hero-name serif">
      Jordan<br />Carson
    </h1>

    <p class="hero-sub">
      Architect of a <a href="{base}/projects/devgpt" class="gold-link">cloud-native AI coding agent platform</a>
      serving thousands of engineers at J.P. Morgan Chase.
      Built telemetry infrastructure powering AI attribution at scale —
      consuming <span class="highlight">tens of thousands of events/sec</span>
      and peaking at <span class="highlight">multi-million tokens/min</span>.
    </p>

    <div class="hero-cta">
      <a href="{base}/projects/devgpt" class="btn-primary mono">View DevGPT ↗</a>
      <a href="{base}/writings" class="btn-secondary mono">Read Writing →</a>
    </div>

  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* Background */
  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
  }

  .glow-orb {
    position: absolute;
    top: 20%;
    right: 10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
  }

  /* Content */
  .hero-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 4rem;
    position: relative;
    z-index: 1;
  }

  .hero-tag {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    animation: fadeUp 0.8s ease both;
    animation-delay: 0.1s;
  }

  .hero-name {
    font-size: clamp(4rem, 10vw, 9rem);
    font-weight: 300;
    line-height: 0.92;
    letter-spacing: -0.03em;
    color: var(--text);
    margin-bottom: 2rem;
    animation: fadeUp 0.8s ease both;
    animation-delay: 0.2s;
  }

  .hero-sub {
    font-size: 1.1rem;
    color: var(--text-dim);
    max-width: 540px;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    animation: fadeUp 0.8s ease both;
    animation-delay: 0.35s;
  }

  .gold-link {
    color: var(--gold);
    border-bottom: 1px solid var(--gold-dim);
    transition: border-color var(--transition);
  }
  .gold-link:hover { border-color: var(--gold); }

  .highlight {
    color: var(--text);
    font-weight: 500;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    animation: fadeUp 0.8s ease both;
    animation-delay: 0.5s;
  }

  .btn-primary {
    padding: 0.75rem 1.75rem;
    background: var(--gold);
    color: var(--bg);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: var(--radius);
    transition: all var(--transition);
  }
  .btn-primary:hover {
    background: #e0b854;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(201,168,76,0.3);
  }

  .btn-secondary {
    padding: 0.75rem 1.75rem;
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: var(--radius);
    transition: all var(--transition);
  }
  .btn-secondary:hover {
    border-color: var(--gold-dim);
    color: var(--gold);
    transform: translateY(-1px);
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
    writing-mode: vertical-rl;
    animation: fadeUp 1s ease both;
    animation-delay: 0.8s;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
