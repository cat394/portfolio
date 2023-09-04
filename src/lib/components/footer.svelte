<script lang="ts">
	import * as config from '$lib/settings/config';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
</script>

<footer>
	<ContentsField>
		<small>{config.title} &copy {new Date().getFullYear()}</small>
	</ContentsField>
</footer>

<style>
	footer {
		text-align: center;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	small {
		width: 100%;
		color: var(--text-2);
		font-size: var(--font-size-sm);
	}
</style>
