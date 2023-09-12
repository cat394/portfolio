<script lang="ts">
	import Bubbles from '$lib/components/utils/bubbles.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Topfixed from '$lib/components/utils/topfixed.svelte';
	import AudioController from '$lib/components/utils/audio/audioController.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';

	import '../../app.css';
</script>

<div class="layout">
	<Bubbles />
	<div class="contents">
		<Topfixed>
			<Header />
		</Topfixed>
		<main>
			<slot />
		</main>
		<Footer />
		<AudioController />
	</div>
</div>

<style>
	.layout {
		max-width: 1440px;
	}

	.contents {
		/* Sticky footer */
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		position: relative;
		z-index: 1;
	}

	main {
		display: grid;
		gap: var(--space-between-content);
	}
</style>
