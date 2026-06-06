<script>
  import { onMount } from 'svelte';
  import { skillCategories } from '$lib/data/skills.js';
  import * as d3 from 'd3';

  let container;
  let visible = false;

  // Build nodes and links from categories
  const nodes = [];
  const links = [];

  skillCategories.forEach(cat => {
    nodes.push({ id: cat.id, label: cat.label, icon: cat.icon, color: cat.color, type: 'category', r: 32 });
    cat.skills.forEach(skill => {
      const skillId = skill.id;
      nodes.push({ id: skillId, label: skill.label, desc: skill.desc, color: cat.color, type: 'skill', r: 18 });
      links.push({ source: cat.id, target: skillId });
    });
  });

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        visible = true;
        obs.disconnect();
        initGraph();
      }
    }, { threshold: 0.1 });
    obs.observe(container);
    return () => obs.disconnect();
  });

  function initGraph() {
    const w = container.clientWidth;
    const h = Math.max(520, container.clientWidth * 0.55);

    const svg = d3.select(container)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('viewBox', `0 0 ${w} ${h}`);

    // defs: glow filter
    const defs = svg.append('defs');
    skillCategories.forEach(cat => {
      const filter = defs.append('filter').attr('id', `glow-${cat.id}`);
      filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur');
      const merge = filter.append('feMerge');
      merge.append('feMergeNode').attr('in', 'blur');
      merge.append('feMergeNode').attr('in', 'SourceGraphic');
    });

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(d => d.source.type === 'category' ? 90 : 60).strength(0.8))
      .force('charge', d3.forceManyBody().strength(d => d.type === 'category' ? -400 : -120))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('collision', d3.forceCollide().radius(d => d.r + 12));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => d.source.color || '#2a2a30')
      .attr('stroke-opacity', 0.3)
      .attr('stroke-width', 1);

    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    // circles
    node.append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => d.type === 'category' ? d.color + '22' : d.color + '11')
      .attr('stroke', d => d.color)
      .attr('stroke-width', d => d.type === 'category' ? 1.5 : 0.8)
      .attr('stroke-opacity', d => d.type === 'category' ? 0.9 : 0.5)
      .style('cursor', d => d.type === 'skill' ? 'pointer' : 'grab')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition().duration(150)
          .attr('fill', d.color + '44')
          .attr('stroke-opacity', 1);
        if (d.type === 'skill' && d.desc) {
          const [mx, my] = d3.pointer(event);
          showTooltip(d, mx, my);
        }
      })
      .on('mousemove', function(event, d) {
        if (d.type === 'skill' && d.desc) {
          const [mx, my] = d3.pointer(event);
          d3.select('.tooltip')
            .style('left', (mx + 15) + 'px')
            .style('top', (my - 10) + 'px');
        }
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .transition().duration(150)
          .attr('fill', d.type === 'category' ? d.color + '22' : d.color + '11')
          .attr('stroke-opacity', d.type === 'category' ? 0.9 : 0.5);
        hideTooltip();
      });

    // category icons
    node.filter(d => d.type === 'category')
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.5em')
      .attr('fill', d => d.color)
      .attr('font-size', '16px')
      .attr('font-family', 'Space Mono, monospace')
      .text(d => d.icon);

    // labels
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', d => d.type === 'category' ? '1em' : '0.35em')
      .attr('fill', d => d.type === 'category' ? d.color : '#e8e6e0')
      .attr('font-size', d => d.type === 'category' ? '11px' : '9px')
      .attr('font-family', d => d.type === 'category' ? 'Space Mono, monospace' : 'DM Sans, sans-serif')
      .attr('font-weight', d => d.type === 'category' ? '700' : '300')
      .attr('opacity', d => d.type === 'category' ? 0.95 : 0.75)
      .style('pointer-events', 'none')
      .text(d => d.label);

    // tooltip
    const tooltip = d3.select(container).select('.tooltip');

    function showTooltip(d, x, y) {
      tooltip
        .html(`<strong>${d.label}</strong><br>${d.desc}`)
        .style('left', (x + 15) + 'px')
        .style('top', (y - 10) + 'px')
        .style('opacity', 1);
    }

    function hideTooltip() {
      tooltip.style('opacity', 0);
    }

    simulation.on('tick', () => {
      // clamp nodes within svg
      nodes.forEach(d => {
        d.x = Math.max(d.r + 10, Math.min(w - d.r - 10, d.x));
        d.y = Math.max(d.r + 10, Math.min(h - d.r - 10, d.y));
      });

      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }
</script>

<section class="skills">
  <div class="skills-inner">
    <div class="section-header">
      <div class="section-label mono">Technical Skills</div>
      <p class="section-hint mono">Drag nodes to explore · hover for details</p>
    </div>
    <div class="graph-container" bind:this={container}>
      <div class="tooltip" style="opacity: 0;"></div>
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 6rem 2rem;
  }

  .skills-inner {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .section-hint {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .graph-container {
    width: 100%;
    min-height: 520px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg-2);
    overflow: hidden;
    position: relative;
  }

:global(.tooltip) {
    position: absolute;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    font-family: 'DM Sans', sans-serif;
    color: #e8e6e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10;
    max-width: 220px;
    pointer-events: none;
    transition: opacity 150ms ease;
  }

  :global(.tooltip strong) {
    color: var(--gold);
    font-weight: 600;
  }
</style>