<script lang="ts">
	import ContentsField from '$lib/components/utils/contentsField.svelte';

	export let id = '';
	export let cover = false;
	export let verticalCenter = false;
	export let bgColor = 'var(--background-1)';
</script>

<section {id} class:cover class:verticalCenter style:background={bgColor} {...$$props}>
	<slot />
</section>

<style>
	section {
		scroll-margin-top: 50px;
		padding-block: var(--size-fluid-5);
	}
	.cover {
		height: 100dvh;
	}

	.verticalCenter {
		display: flex;
		align-items: center;
	}
</style>
