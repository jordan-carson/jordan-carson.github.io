<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  // Proficiency scores per category (0–100)
  const data = [
    { axis: 'Languages',      score: 90, color: '#c9a84c' },
    { axis: 'AI / ML',        score: 95, color: '#d4856a' },
    { axis: 'Orchestration',  score: 88, color: '#8b7ec8' },
    { axis: 'Databases',      score: 82, color: '#7c9e87' },
    { axis: 'Observability',  score: 80, color: '#6a9fd4' },
    { axis: 'Service Mesh',   score: 78, color: '#d48b8b' },
    { axis: 'CI / CD',        score: 75, color: '#a8c47c' },
    { axis: 'Networking',     score: 72, color: '#8bd4b8' },
    { axis: 'Frontend',       score: 65, color: '#c47ca8' },
  ];

  let container;

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { obs.disconnect(); initRadar(); }
    }, { threshold: 0.1 });
    obs.observe(container);
    return () => obs.disconnect();
  });

  function initRadar() {
    const size = Math.min(container.clientWidth, 560);
    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.36;
    const levels = 5;
    const total = data.length;
    const angleSlice = (Math.PI * 2) / total;

    const svg = d3.select(container)
      .append('svg')
      .attr('width', size)
      .attr('height', size)
      .attr('viewBox', `0 0 ${size} ${size}`);

    const defs = svg.append('defs');

    // Glow filter
    const filter = defs.append('filter').attr('id', 'radar-glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
    const merge = filter.append('feMerge');
    merge.append('feMergeNode').attr('in', 'blur');
    merge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Gradient fill
    const grad = defs.append('radialGradient').attr('id', 'radar-fill');
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#c9a84c').attr('stop-opacity', 0.25);
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#c9a84c').attr('stop-opacity', 0.05);

    const g = svg.append('g').attr('transform', `translate(${cx},${cy})`);

    // Grid circles
    for (let lvl = 1; lvl <= levels; lvl++) {
      const r = (radius / levels) * lvl;
      g.append('circle')
        .attr('r', r)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(201,168,76,0.12)')
        .attr('stroke-width', 1);

      g.append('text')
        .attr('x', 4)
        .attr('y', -r + 4)
        .attr('fill', 'rgba(201,168,76,0.35)')
        .attr('font-size', '9px')
        .attr('font-family', 'Space Mono, monospace')
        .text(`${(lvl / levels) * 100}%`);
    }

    // Axis lines
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      g.append('line')
        .attr('x1', 0).attr('y1', 0)
        .attr('x2', x).attr('y2', y)
        .attr('stroke', 'rgba(201,168,76,0.15)')
        .attr('stroke-width', 1);

      // Axis labels
      const lx = Math.cos(angle) * (radius + 28);
      const ly = Math.sin(angle) * (radius + 28);
      g.append('text')
        .attr('x', lx)
        .attr('y', ly)
        .attr('text-anchor', Math.abs(lx) < 10 ? 'middle' : lx > 0 ? 'start' : 'end')
        .attr('dominant-baseline', ly < -radius * 0.5 ? 'auto' : ly > radius * 0.5 ? 'hanging' : 'middle')
        .attr('fill', d.color)
        .attr('font-size', '10px')
        .attr('font-family', 'Space Mono, monospace')
        .attr('font-weight', '700')
        .text(d.axis);
    });

    // Radar area path
    const radarLine = d3.lineRadial()
      .radius(d => (d.score / 100) * radius)
      .angle((d, i) => i * angleSlice)
      .curve(d3.curveLinearClosed);

    const pathData = data.map((d, i) => ({ score: d.score, angle: i * angleSlice }));

    g.append('path')
      .datum(pathData)
      .attr('d', radarLine)
      .attr('fill', 'url(#radar-fill)')
      .attr('stroke', '#c9a84c')
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.8)
      .attr('filter', 'url(#radar-glow)')
      .attr('opacity', 0)
      .transition().duration(800).ease(d3.easeCubicOut)
      .attr('opacity', 1);

    // Data point dots
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const r = (d.score / 100) * radius;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;

      g.append('circle')
        .attr('cx', x).attr('cy', y)
        .attr('r', 4)
        .attr('fill', d.color)
        .attr('stroke', 'var(--bg)')
        .attr('stroke-width', 1.5)
        .attr('opacity', 0)
        .transition().delay(600).duration(400)
        .attr('opacity', 1);
    });
  }
</script>

<section class="radar-section">
  <div class="radar-inner">
    <div class="section-label mono">Technical Skills — Radar</div>
    <div class="radar-wrap">
      <div class="radar-container" bind:this={container}></div>
      <div class="radar-legend">
        {#each data as d}
          <div class="legend-row">
            <span class="legend-dot" style="background: {d.color}"></span>
            <span class="legend-axis mono">{d.axis}</span>
            <span class="legend-score mono">{d.score}%</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .radar-section {
    padding: 6rem 2rem;
    border-top: 1px solid var(--border);
    background: var(--bg-2);
  }

  .radar-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 2.5rem;
  }

  .radar-wrap {
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;
  }

  .radar-container {
    flex: 0 0 auto;
    width: min(560px, 100%);
  }

  .radar-legend {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
    min-width: 180px;
  }

  .legend-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .legend-axis {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: var(--text-dim);
    flex: 1;
  }

  .legend-score {
    font-size: 0.68rem;
    color: var(--gold);
    letter-spacing: 0.06em;
  }
</style>
