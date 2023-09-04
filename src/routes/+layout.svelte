<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Topfixed from '$lib/components/utils/topfixed.svelte';
	import "video-series-samples/simple-carousel.js";

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.postcss';
</script>

<div class="layout">
	<Topfixed>
		<Header />
	</Topfixed>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		max-width: 1440px;

		/* Sticky footer */
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}

	main {
		display: grid;
		gap: var(--size-content-1);
	}
</style>
