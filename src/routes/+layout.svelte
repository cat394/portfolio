<script lang="ts">
	import Bubbles from '$lib/components/utils/bubbles.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Topfixed from '$lib/components/utils/topfixed.svelte';
	import AudioController from '$lib/components/utils/audio/audioController.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';

	import '../app.css';
</script>

<div class="layout">
	<Bubbles />
	<Topfixed>
		<Header />
	</Topfixed>
	<div class="contents">
		<main>
			<slot />
		</main>
		<Footer />
	</div>
	<AudioController />
</div>

<style>
	.contents {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100dvh;
		position: relative;
		z-index: 1;
	}

	main {
		width: 100%;
		height: 100%;
		display: grid;
		gap: var(--space-between-content);
	}
</style>
