<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import { skillCategories } from '$lib/data/skills.js';
  import * as d3 from 'd3';

  let container;

  const nodes = [];
  const links = [];

  skillCategories.forEach(cat => {
    nodes.push({ id: cat.id, label: cat.label, icon: cat.icon, color: cat.color, type: 'category', r: 30 });
    cat.skills.forEach(skill => {
      nodes.push({ id: skill.id, label: skill.label, desc: skill.desc, color: cat.color, type: 'skill', r: skill.r || 16, catId: cat.id });
      links.push({ source: cat.id, target: skill.id });
    });
  });

  onMount(() => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight) { initGraph(); return; }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { obs.disconnect(); initGraph(); }
    }, { threshold: 0.1 });
    obs.observe(container);
    return () => obs.disconnect();
  });

  function initGraph() {
    const w = container.clientWidth;
    const h = Math.max(540, w * 0.56);
    const cx = w / 2;
    const cy = h / 2;

    // Pin category nodes in a fixed ring
    const catNodes = nodes.filter(n => n.type === 'category');
    const ringR = Math.min(cx, cy) * 0.58;
    catNodes.forEach((n, i) => {
      const angle = (2 * Math.PI * i) / catNodes.length - Math.PI / 2;
      n.fx = cx + ringR * Math.cos(angle);
      n.fy = cy + ringR * Math.sin(angle);
    });

    const svg = d3.select(container)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('viewBox', `0 0 ${w} ${h}`);

    // defs: glow filters
    const defs = svg.append('defs');
    skillCategories.forEach(cat => {
      const f = defs.append('filter').attr('id', `glow-${cat.id}`);
      f.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur');
      const m = f.append('feMerge');
      m.append('feMergeNode').attr('in', 'blur');
      m.append('feMergeNode').attr('in', 'SourceGraphic');
    });

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(70).strength(0.9))
      .force('charge', d3.forceManyBody().strength(d => d.type === 'category' ? 0 : -80))
      .force('collision', d3.forceCollide().radius(d => d.r + 8))
      .force('x', d3.forceX(d => {
        if (d.type === 'category') return d.fx;
        const cat = catNodes.find(c => c.id === d.catId);
        return cat ? cat.fx : cx;
      }).strength(d => d.type === 'skill' ? 0.3 : 0))
      .force('y', d3.forceY(d => {
        if (d.type === 'category') return d.fy;
        const cat = catNodes.find(c => c.id === d.catId);
        return cat ? cat.fy : cy;
      }).strength(d => d.type === 'skill' ? 0.3 : 0));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => {
        const src = nodes.find(n => n.id === (d.source.id || d.source));
        return src?.color || '#333';
      })
      .attr('stroke-opacity', 0.25)
      .attr('stroke-width', 1);

    // Tooltip
    const tooltip = d3.select(container).select('.tooltip');

    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      ;

    node.append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => d.color + (d.type === 'category' ? '20' : '0d'))
      .attr('stroke', d => d.color)
      .attr('stroke-width', d => d.type === 'category' ? 1.5 : 0.8)
      .attr('stroke-opacity', d => d.type === 'category' ? 1 : 0.5)
      .attr('filter', d => d.type === 'category' ? `url(#glow-${d.id})` : null)
      .style('cursor', 'default')
      .on('mouseover', function(event, d) {
        d3.select(this).transition().duration(120)
          .attr('fill', d.color + (d.type === 'category' ? '40' : '22'))
          .attr('stroke-opacity', 1);
        if (d.type === 'skill' && d.desc) {
          tooltip.html(`<strong>${d.label}</strong><br>${d.desc}`)
            .style('left', (event.offsetX + 14) + 'px')
            .style('top', (event.offsetY - 10) + 'px')
            .style('opacity', 1);
        }
      })
      .on('mousemove', function(event, d) {
        if (d.type === 'skill' && d.desc) {
          tooltip.style('left', (event.offsetX + 14) + 'px').style('top', (event.offsetY - 10) + 'px');
        }
      })
      .on('mouseout', function(event, d) {
        d3.select(this).transition().duration(120)
          .attr('fill', d.color + (d.type === 'category' ? '20' : '0d'))
          .attr('stroke-opacity', d.type === 'category' ? 1 : 0.5);
        tooltip.style('opacity', 0);
      });

    // Category icons
    node.filter(d => d.type === 'category')
      .append('text')
      .attr('text-anchor', 'middle').attr('dy', '-0.4em')
      .attr('font-size', '14px').style('pointer-events', 'none')
      .text(d => d.icon);

    // Labels
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', d => d.type === 'category' ? '1em' : '0.35em')
      .attr('class', d => d.type === 'category' ? 'cat-label' : 'skill-label')
      .style('fill', d => d.type === 'category' ? d.color : null)
      .attr('font-size', d => d.type === 'category' ? '10px' : '8px')
      .attr('font-family', 'Space Mono, monospace')
      .attr('font-weight', d => d.type === 'category' ? '700' : '400')
      .attr('opacity', d => d.type === 'category' ? 1 : 0.8)
      .style('pointer-events', 'none')
      .text(d => d.label);

    simulation.on('tick', () => {
      nodes.forEach(d => {
        if (d.type === 'skill') {
          d.x = Math.max(d.r + 4, Math.min(w - d.r - 4, d.x));
          d.y = Math.max(d.r + 4, Math.min(h - d.r - 4, d.y));
        }
      });
      link
        .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }
</script>

<section class="skills" use:reveal={{ y: 60, duration: 800 }}>
  <div class="skills-inner">
    <div class="section-header">
      <div class="section-label mono">Technical Skills</div>
      <p class="section-hint mono">Hover for details</p>
    </div>
    <div class="graph-container" bind:this={container}>
      <div class="tooltip" style="opacity:0;"></div>
    </div>
  </div>
</section>

<style>
  .skills { padding: 6rem 2rem; }

  .skills-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cyan);
  }

  .section-hint {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .graph-container {
    width: 100%;
    min-height: 540px;
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
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    font-size: 0.72rem;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    box-shadow: 0 4px 16px rgba(0,0,0,0.35);
    z-index: 10;
    max-width: 200px;
    pointer-events: none;
    transition: opacity 120ms ease;
  }

  :global(.tooltip strong) {
    color: var(--cyan);
    display: block;
    margin-bottom: 2px;
  }

  :global(.skill-label) {
    fill: #2a2826;
  }

  :global(:root[data-theme='dark'] .skill-label) {
    fill: #d4d0c8;
  }
</style>
