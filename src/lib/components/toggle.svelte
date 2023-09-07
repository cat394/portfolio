<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { strokeWidth } from '$lib/stores';
	import { theme, toggleTheme } from '$lib/settings/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun strokeWidth={$strokeWidth} />
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon strokeWidth={$strokeWidth} />
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
