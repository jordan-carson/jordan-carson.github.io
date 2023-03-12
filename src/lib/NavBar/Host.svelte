<script>
	import { variables } from '../variables.js';
</script>

<div>
	<a
		href="https://github.com/jordancarson/timdeschryver.dev/commit/{variables.hash}"
		rel="noreferrer"
		target="_blank">{variables.hash?.substring(0, 6) ?? 'local'}</a
	>
	hosted on Github Pages | Last update: {variables.timestamp.toISOString()}.
</div>
