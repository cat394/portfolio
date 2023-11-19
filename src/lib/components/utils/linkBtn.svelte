<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import { strokeWidth } from '$lib/stores';

	export let href: string;
	export let blank: boolean = false;
</script>

<a {href} {...$$props} target={blank ? '_blank' : '_self'}>
	<div class="wrapper">
		<slot />
		{#if blank}
			<ExternalLink strokeWidth={$strokeWidth} />
		{/if}
	</div>
</a>

<style>
	a {
		display: inline-flex;
		justify-content: center;
		padding: var(--size-3);
		border: var(--border-size-1) solid var(--accent);
		border-radius: var(--radius-round);
		box-shadow: var(--shadow-3);
		transition: all 500ms;
	}

	a:hover {
		color: black;
		background-color: var(--accent);
	}

	.wrapper {
		display: flex;
		gap: var(--size-2);
	}
</style>
