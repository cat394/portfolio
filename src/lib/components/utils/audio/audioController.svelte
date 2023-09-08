<script lang="ts">
	import { onMount } from 'svelte';
	import { strokeWidth, isAudioControllerMounted, audioControllerHeight } from '$lib/stores';
	import { Play, Pause, Repeat } from 'lucide-svelte';
	import { audioGroupState } from '$lib/stores';
	import { fly } from 'svelte/transition';

	let audioElement: HTMLAudioElement;
	let audioController: HTMLDivElement;

	// Reactive statement to handle global audio state changes
	$: {
		if (audioElement) {
			if ($audioGroupState.currentSrc && $audioGroupState.isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
			audioElement.loop = $audioGroupState.loop;
		}
	}

	// Handlers
	const togglePlayback = () => {
		audioGroupState.update((state) => ({
			...state,
			isPlaying: $audioGroupState.currentSrc ? !state.isPlaying : true
		}));
	};

	const toggleLoopStatus = () => {
		audioGroupState.update((state) => ({ ...state, loop: !state.loop }));
	};

	onMount(() => {
		isAudioControllerMounted.set(true);
		audioControllerHeight.set(audioController.offsetHeight);

		return () => {
			isAudioControllerMounted.set(false);
		};
	});

	let showController = false;

	$: if ($audioGroupState.isPlaying) {
		showController = true;
	}
</script>

{#if showController}
	<div in:fly={{ y: 100, duration: 1000 }} class="audio-controller" bind:this={audioController}>
		<audio
			src={$audioGroupState.currentSrc}
			bind:this={audioElement}
			on:ended={() => audioGroupState.update((state) => ({ ...state, currentTime: 0 }))}
			on:loadedmetadata={() => (audioElement.loop = $audioGroupState.loop)}
		/>

		<div class="image-area">
			<img src={$audioGroupState.thumbImage} alt={$audioGroupState.title} width="336" height="168" />
		</div>

		<div class="text-area">
			<p>{$audioGroupState.title}</p>
			<p>{$audioGroupState.author}</p>
		</div>

		<div class="btn-area">
			<!-- Playback toggle button -->
			<button
				class="ax-btn"
				aria-label={$audioGroupState.isPlaying ? 'Pause' : 'Play'}
				on:click={togglePlayback}
			>
				{#if !$audioGroupState.isPlaying}
					<Play strokeWidth={$strokeWidth} />
				{:else}
					<Pause strokeWidth={$strokeWidth} />
				{/if}
			</button>

			<!-- Loop toggle button -->
			<button
				class="ax-btn loop-btn"
				aria-label={$audioGroupState.loop ? 'Stop Repeat' : 'Start Repeat'}
				on:click={toggleLoopStatus}
			>
				<Repeat strokeWidth={$strokeWidth} />
			</button>
		</div>
	</div>
{/if}

<style>
	img {
		max-height: 60px;
		width: auto;
		border-radius: var(--size-2);
	}

	button {
		font-size: var(--font-size-sm);
	}

	.audio-controller {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: var(--size-7);
		padding: var(--size-4);
		padding-right: var(--size-7);
		background-color: var(--background-1);
		overflow: hidden;
	}

	.text-area {
		flex-grow: 1;
		overflow-x: auto;
	}

	.text-area p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: var(--font-size-sm);
	}

	.btn-area {
		display: flex;
		gap: var(--size-6);
		align-self: center;
	}

	.loop-btn {
		transition: color 300ms;
	}

	.loop-btn[aria-label='Start Repeat'] {
		color: var(--brand-dark);
	}

	@media (max-width: 768px) {
		img {
			max-height: 45px;
		}
		button {
			font-size: calc(var(--font-size-sm) / 2);
		}

		.audio-controller {
			gap: 0;
			column-gap: var(--size-3);
			padding: var(--size-2);
			padding-right: var(--size-5);
		}

		.text-area p {
			font-size: var(--font-size-sm);
		}

		.btn-area {
			justify-self: center;
		}

		.loop-btn {
			display: none;
		}
	}
</style>
