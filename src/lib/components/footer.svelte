<script lang="ts">
	import * as config from '$lib/settings/config';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
</script>

<footer>
	<ContentsField horizontalPosition="center">
		<small>
			<span class="siteName">{config.title}</span>
			<span class="copyright">&copy; {new Date().getFullYear()} Ryo</span>
		</small>
		<small>
			<span>Music</span>
			<span>by <a href="https://www.youtube.com/@NealKSounds">Neal K</a></span>
		</small>
	</ContentsField>
</footer>

<style>

	footer {
		padding-top: var(--size-7);
		padding-bottom: 100px;
		border-top: 1px solid var(--border);
		background: var(--background-1);
		margin-top: var(--space-between-content);
	}

	small {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: var(--size-4);
		row-gap: var(--size-2);
		color: var(--text-2);
		font-size: var(--font-size-sm);
	}

	small:last-child {
		margin-top: var(--size-2);
	}

	a {
		font-size: inherit;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}
</style>
