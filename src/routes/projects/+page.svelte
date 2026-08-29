<script>
  import { base } from '$app/paths';

  const projects = [
    {
      href: '/projects/devgpt',
      tag: 'Platform',
      title: 'DevGPT',
      subtitle: 'Cloud-Native AI Coding Agent Platform',
      summary: 'An internal platform that enables J.P. Morgan Chase engineers, product & designers to delegate software and prototype development tasks to AI agents — from feature implementation to deployment, running securely within the firm\'s infrastructure at enterprise scale.',
      tags: ['Golang', 'Temporal', 'Anthropic SRT', 'EKS'],
    },
    {
      href: '/projects/stateless-by-design',
      tag: 'Architecture',
      title: 'Stateless by Design',
      subtitle: 'Context, Cache & Prompt Management at Scale',
      summary: 'How DevGPT runs effectively unbounded conversations within a 200K token window — orchestrating system prompts, multi-layer memory, tool schemas, and rolling conversation history around deliberate cache boundaries to sustain ~90% prompt cache hit rates indefinitely.',
      tags: ['Prompt Caching', 'Context Engineering', 'Anthropic'],
    },
  ];
</script>

<svelte:head>
  <title>Projects — Jordan Carson</title>
  <meta name="description" content="Projects and platform architecture work by Jordan Carson — DevGPT, context & cache engineering, and Technology Lifecycle Management at J.P. Morgan Chase." />
</svelte:head>

<div class="page">
  <div class="page-inner">

    <header class="page-header">
      <div class="breadcrumb mono"><a href="{base}/">Jordan Carson</a> / Projects</div>
      <h1 class="page-title serif">Projects</h1>
      <p class="page-sub">
        Platform architecture, agentic infrastructure, and the systems engineering
        underneath them — built and operated at J.P. Morgan Chase scale.
      </p>
    </header>

    <div class="projects-list">
      {#each projects as p, i}
        <a href="{base}{p.href}" class="project-card" style="animation-delay: {i * 100}ms">
          <div class="project-meta mono">
            <span class="project-tag">{p.tag}</span>
          </div>
          <h2 class="project-title serif">{p.title}</h2>
          <p class="project-subtitle mono">{p.subtitle}</p>
          <p class="project-summary">{p.summary}</p>
          <div class="project-tags">
            {#each p.tags as tag}
              <span class="tag mono">{tag}</span>
            {/each}
          </div>
          <div class="project-arrow">↗</div>
        </a>
      {/each}
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
    margin-bottom: 1.5rem;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--text-dim);
    max-width: 520px;
    line-height: 1.8;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .project-card {
    position: relative;
    background: var(--bg-2);
    padding: 2.5rem;
    transition: background var(--transition);
    display: block;
    animation: fadeUp 0.5s ease both;
  }

  .project-card:hover {
    background: var(--bg-3);
  }

  .project-meta {
    margin-bottom: 0.75rem;
  }

  .project-tag {
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--cyan);
  }

  .project-title {
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: -0.01em;
    color: var(--text);
    margin-bottom: 0.4rem;
    line-height: 1.1;
  }

  .project-subtitle {
    font-size: 0.74rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cyan-dim);
    margin-bottom: 1rem;
  }

  .project-summary {
    font-size: 0.9rem;
    color: var(--text-dim);
    line-height: 1.8;
    margin-bottom: 1.25rem;
    max-width: 680px;
  }

  .project-tags {
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

  .project-arrow {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 1.2rem;
    color: var(--cyan-dim);
    transition: color var(--transition), transform var(--transition);
  }

  .project-card:hover .project-arrow {
    color: var(--cyan);
    transform: translate(2px, -2px);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
