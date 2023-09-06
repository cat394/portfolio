<script lang="ts">
  import { onMount } from 'svelte';

  type Bubble = {
    diameter: number;
    startXPosition: number;
    animationDuration: number;
  };

  let bubbles: Bubble[] = [];
  let viewportWidth: number;

  const generateBubbleProperties = (): Bubble => ({
    diameter: Math.random() * 10 + 3, 
    startXPosition: Math.random() * viewportWidth,
    animationDuration: Math.random() * 7 + 5
  });

  onMount(() => {
    bubbles = Array.from({ length: 50 }, generateBubbleProperties);
  });
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="bubble-container">
  {#each bubbles as bubble}
    <div 
      class="bubble"
      style="width: {bubble.diameter}px; height: {bubble.diameter}px; left: {bubble.startXPosition}px; animation-duration: {bubble.animationDuration}s;"
    ></div>
  {/each}
</div>

<style>
  .bubble-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .bubble {
    position: absolute;
    bottom: 0;
    background-color: var(--brand-dark);
    opacity: 0.7;
    border-radius: var(--radius-blob-5);
    animation-name: rise;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rise {
    0% {
      bottom: 0;
    }
    100% {
      bottom: 100%;
    }
  }
</style>
