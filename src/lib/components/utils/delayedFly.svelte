<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	type Settings = {
		delay: number;
		x: number;
		y: number;
		duration: number;
	};

	type OptionalSettings = Partial<Settings>;

	export let settings: OptionalSettings = {
		delay: 100,
		x: 0,
		y: 100,
		duration: 1000
	};

	let shouldAnimate: boolean = false;

	let timeoutId: ReturnType<typeof setTimeout>;

	onMount(() => {
		timeoutId = setTimeout(() => {
			shouldAnimate = true;
		}, settings.delay);

		return () => clearTimeout(timeoutId);
	});
</script>

{#if shouldAnimate}
	<div
		in:fly={{ x: settings.x, y: settings.y, duration: settings.duration }}
		on:introstart
		on:introend
	>
		<slot />
	</div>
{/if}
