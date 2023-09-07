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

	const audioData = {
		title: '星のメロディー',
		author: 'Neal K',
		src: '/assets/audio/star_melody.mp3',
		thumbImage: '/assets/images/star_melody.webp'
	};
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
		<AudioController {audioData} />
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
