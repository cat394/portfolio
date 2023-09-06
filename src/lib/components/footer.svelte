<script lang="ts">
	import * as config from '$lib/settings/config';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
</script>

<footer>
	<ContentsField>
		<small>
			<span class="siteName">{config.title}</span>
			<span>&copy {new Date().getFullYear()} Ryo</span>
		</small>
	</ContentsField>
</footer>

<style>
	footer {
		text-align: center;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		background: var(--background-1);
		margin-top: var(--space-between-content);
		padding-bottom: 100px;
	}

	small {
		width: 100%;
		color: var(--text-2);
		font-size: var(--font-size-sm);
	}

	.siteName {
		display: inline-block;
		margin-right: var(--size-3);
	}

	@media(max-width: 768px) {
		.siteName {
			margin: 0;
		}

		small {
			display: grid;
			justify-content: center;
			gap: var(--size-2);
		}
	}
</style>
