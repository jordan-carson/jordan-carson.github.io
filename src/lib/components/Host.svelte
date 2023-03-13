<script>
  import { variables } from "$lib/variables";
</script>

<div>
  <a
    href="https://github.com/timdeschryver/timdeschryver.dev/commit/{variables.hash}"
    rel="noreferrer"
    target="_blank">{variables.hash?.substring(0, 6) ?? "local"}</a
  >
  hosted on Github Pages | Last update: {variables.timestamp.toISOString()}.
</div>
