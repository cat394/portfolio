<script lang="ts">
  import { Play, Pause } from "lucide-svelte";
  import { strokeWidth, audioGroupState } from "$lib/stores";

  export let audioSrc: string;
  let isPlaying = false;

  const togglePlayback = () => {
    const isCurrentAudio = $audioGroupState.currentSrc === audioSrc;

    if (isCurrentAudio && $audioGroupState.isPlaying) {
      audioGroupState.update(state => ({ ...state, isPlaying: false }));
    } else {
      audioGroupState.update(state => ({ ...state, isPlaying: true, currentSrc: audioSrc }));
    }

    isPlaying = $audioGroupState.isPlaying && isCurrentAudio;
  };

  $: {
    const isCurrentAudio = $audioGroupState.currentSrc === audioSrc;
    isPlaying = isCurrentAudio && $audioGroupState.isPlaying;
  }
</script>

<div class="audio-btn">
  <!-- Playback toggle button -->
  <button class="ax-btn" aria-label={isPlaying ? "Pause" : "Play"} on:click={togglePlayback}>
    {#if !isPlaying}
      <Play strokeWidth={$strokeWidth} />
    {:else}
      <Pause strokeWidth={$strokeWidth} />
    {/if}
  </button>
  <div class="text"><slot name="text" /></div>
</div>

<style>
  .audio-btn {
    font-size: var(--font-size-sm);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: var(--size-5);
    border-radius: var(--radius-round);
    background-color: var(--background-1);
    border: var(--border-thin) var(--text-1);
  }

  .text {
    display: flex;
    gap: var(--size-4);
  }

  @media(max-width: 768px) {
    .audio-btn {
      padding: var(--size-3);
    }
  }
</style>
