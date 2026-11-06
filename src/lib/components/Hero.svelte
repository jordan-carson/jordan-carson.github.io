<script>
  import { base } from '$app/paths';
</script>

<section class="hero">
  <div class="hero-bg">
    <div class="fade-vignette"></div>
    <div class="glow-orb orb-main"></div>
    <div class="glow-orb orb-accent"></div>
  </div>

  <div class="hero-content">
    <div class="hero-tag mono">Platform AI Architect · Lead AI Engineer · Dude With Laptop</div>

    <h1 class="hero-name serif">
      Jordan<br />Carson
    </h1>

    <p class="hero-sub">
      Platform AI Architect, Lead AI Engineer, and Dude With Laptop with <span class="highlight">13+ years</span>
      delivering production AI systems at scale. Built
      <a href="{base}/projects/devgpt" class="cyan-link">DevGPT</a>, a coding agent harness serving
      <span class="highlight">7,500+ engineers</span> at J.P. Morgan Chase, architected as a clean
      separation between the reasoning harness ("brain") and an isolated remote sandbox controller
      ("hands") for secure, multi-tenant agentic code execution.
      Engineered prompt caching to <span class="highlight">90%+ hit rates</span> and a
      distributed telemetry pipeline.
    </p>

    <div class="hero-cta">
      <a href="{base}/projects/devgpt" class="btn-primary mono">View DevGPT ↗</a>
      <a href="{base}/writings" class="btn-secondary mono">Read Blog →</a>
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

  /* ── Background ─────────────────────────────────── */
  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  /* Soft fade at top/bottom to blend into content */
  .fade-vignette {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom,  var(--bg) 0%, transparent 18%, transparent 80%, var(--bg) 100%),
      linear-gradient(to right, var(--bg) 0%, transparent 12%, transparent 88%, var(--bg) 100%);
  }

  .glow-orb {
    position: absolute;
    border-radius: 50%;
    animation: pulse 8s ease-in-out infinite;
    pointer-events: none;
  }

  .orb-main {
    top: 15%;
    right: 8%;
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, rgba(14,116,144,0.10) 0%, transparent 70%);
  }

  .orb-accent {
    bottom: 10%;
    left: 4%;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%);
    animation-delay: -4s;
    animation-duration: 11s;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%       { transform: scale(1.12); opacity: 0.7; }
  }

  /* ── Content ─────────────────────────────────────── */
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
    color: var(--cyan);
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
    font-size: 1.05rem;
    color: var(--text-dim);
    max-width: 560px;
    line-height: 1.85;
    margin-bottom: 2.5rem;
    animation: fadeUp 0.8s ease both;
    animation-delay: 0.35s;
  }

  .cyan-link {
    color: var(--cyan);
    border-bottom: 1px solid var(--cyan-dim);
    transition: border-color var(--transition);
  }
  .cyan-link:hover { border-color: var(--cyan); }

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
    padding: 0.8rem 1.9rem;
    background: var(--cyan);
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 999px;
    box-shadow: 0 1px 2px rgba(14,116,144,0.15), 0 6px 16px rgba(14,116,144,0.18);
    transition: all var(--transition);
  }
  .btn-primary:hover {
    background: var(--cyan-dim);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(14,116,144,0.18), 0 10px 24px rgba(14,116,144,0.24);
  }

  .btn-secondary {
    padding: 0.8rem 1.9rem;
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 999px;
    transition: all var(--transition);
  }
  .btn-secondary:hover {
    border-color: var(--cyan-dim);
    color: var(--cyan);
    transform: translateY(-1px);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
