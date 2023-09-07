<script lang="ts">
	import Container from '$lib/components/utils/container.svelte';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
	import DelayedFly from '$lib/components/utils/delayedFly.svelte';
	import Nav from '$lib/components/nav.svelte';
	import AudioBtn from './utils/audio/audioBtn.svelte';

	let show = false;

	const navigationShow = () => (show = true);
</script>

<Container cover verticalCenter bgColor="none" style="margin-top: 70px; padding-block: 0;">
	<ContentsField>
		<DelayedFly on:introend={navigationShow}>
			<h2><span>Hello!</span><span>I'm...</span></h2>
		</DelayedFly>
		<div class="wrapper" class:show>
			<Nav />
			<AudioBtn audioSrc="/assets/audio/star_melody.mp3">
				<span slot="text">～Site theme BGM～</span>
			</AudioBtn>
		</div>
	</ContentsField>
</Container>

<style>
	h2 {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}
	.wrapper {
		opacity: 0;
		transition: opacity 1s;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--size-fluid-4);
	}
	.show {
		opacity: 1;
	}
</style>
