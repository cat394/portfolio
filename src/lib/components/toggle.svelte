<script lang="ts">
	import { SunMoon } from 'lucide-svelte';
	import { strokeWidth } from '$lib/stores';
	import { toggleTheme } from '$lib/settings/theme';

	function handleClick (element: HTMLButtonElement) {
		element.addEventListener('click', toggleTheme);
		return {
			destroy() {
				element.removeEventListener('click', toggleTheme)
			}
		}
	}
</script>

<button aria-label="Toggle theme" use:handleClick>
	<div><SunMoon strokeWidth={$strokeWidth}/></div>
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
