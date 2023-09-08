<script lang="ts">
  import { Play, Pause } from "lucide-svelte";
	import { strokeWidth } from "$lib/stores";
  import { audioGroupState } from "$lib/stores";

  export let src: string;
  export let title: string;
  export let author: string;
  export let thumbImage: string;

  let isPlaying = false;

  const togglePlayback = () => {
    if ($audioGroupState.currentSrc !== src || !$audioGroupState.isPlaying) {
      audioGroupState.update(state => ({ 
        ...state, 
        isPlaying: true, 
        currentSrc: src,
        title,
        author,
        thumbImage
      }));
      isPlaying = true;
    } else {
      audioGroupState.update(state => ({ ...state, isPlaying: false }));
      isPlaying = false;
    }
  };

  $: if ($audioGroupState.currentSrc !== src || !$audioGroupState.isPlaying) {
    isPlaying = false;
    } else if ($audioGroupState.currentSrc === src && $audioGroupState.isPlaying) {
        isPlaying = true;
    }
</script>

<div class="audio-btn">
	<!-- Playback toggle button -->
	<button aria-label={isPlaying ? "Pause" : "Play"} on:click={togglePlayback}>
		{#if !isPlaying}
			<Play strokeWidth={$strokeWidth} />
		{:else}
			<Pause strokeWidth={$strokeWidth} />
		{/if}
	</button>
	<p>{title}</p>
</div>

<style>
	.audio-btn {
		font-size: var(--font-size-sm);
		padding: var(--size-5);
		border-radius: var(--radius-round);
		background-color: var(--background-1);
		border: var(--border-thin) var(--text-1);
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--size-2);
	}

	@media (max-width: 768px) {
		.audio-btn {
			padding: var(--size-3);
		}
	}
</style>