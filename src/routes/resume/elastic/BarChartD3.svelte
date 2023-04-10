<script>
    import { scaleBand, scaleLinear } from "d3-scale";

    export let main;

    const width = 800;
    const height = 600;

    const margin = { top: 20, right: 20, bottom: 20, left: 180 };
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    $: xDomain = main.map((d) => d.tool);
    $: yDomain = main.map((d) => +d.number);

    $: yScale = scaleBand().domain(xDomain).range([0, innerHeight]).padding(0.1);
    $: xScale = scaleLinear()
        .domain([0, Math.max.apply(null, yDomain)])
        .range([0, innerWidth]);
</script>

<svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
        {#each xScale.ticks() as tickValue}
            <g transform={`translate(${xScale(tickValue)},0)`}>
                <line y2={innerHeight} stroke="black" />
                <text text-anchor="middle" dy=".71em" y={innerHeight + 3}>
                    {tickValue}
                </text>
            </g>
        {/each}
        {#each main as d}
            <text
                    text-anchor="end"
                    x="-3"
                    dy=".32em"
                    y={yScale(d.tool) + yScale.bandwidth() / 2}
            >
                {d.tool}
            </text>
            <rect
                    x="0"
                    y={yScale(d.tool)}
                    width={xScale(d.number)}
                    height={yScale.bandwidth()}
            />
        {/each}
    </g>
</svg>