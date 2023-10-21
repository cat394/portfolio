<script lang="ts">
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
		width: 100%;
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
