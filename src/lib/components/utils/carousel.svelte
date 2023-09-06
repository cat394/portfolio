<script lang="ts">
  import { strokeWidth } from "$lib/stores";
  import type { Image } from "$lib/data/creations";
  import { ChevronRight, ChevronLeft } from "lucide-svelte";
  import { onMount, afterUpdate } from "svelte";

  export let images: Image[] = [];
  export let autoPlay = true;
  export let duration = 2000;
  export let autoPlayInterval = 3000;

  let currentIndex = 0;
  let timerId: number;

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  };
  
  const prevImage = () => {
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
  };

  onMount(() => {
    if (autoPlay) {
      timerId = setInterval(nextImage, autoPlayInterval + duration);
    }

    return () => clearInterval(timerId);
  });

  afterUpdate(() => {
    if (autoPlay) {
      clearInterval(timerId);
      timerId = setInterval(nextImage, autoPlayInterval + duration);
    }
  });
</script>

<div class="carousel">
  <div class="control-btn">
    <button class="ax-btn prev" on:click={prevImage}><ChevronLeft strokeWidth={$strokeWidth} /></button>
  </div>
  <div class="carousel-image">
    {#each images as image, index (index)}
      <img
        style:transform="translateX(-{currentIndex * 100}%)"
        style:transition="transform {duration}ms ease-out"
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
      />
    {/each}
  </div>
  <div class="control-btn">
    <button class="ax-btn next" on:click={nextImage}><ChevronRight strokeWidth={$strokeWidth} /></button>
  </div>
</div>

<style>
  button {
    font-size: var(--font-size-sm);
  }
  .carousel {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: var(--size-1);
  }

  .carousel-image {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
  }

  .carousel-image > img {
    flex: 0 0 100%;
    height: auto;
  }

  .control-btn {
    display: grid;
    place-items: center;
    padding: var(--size-1);
    border: var(--border-thin) var(--accent);
    border-radius: var(--radius-round);
  }

  button.prev {
    justify-self: start;
  }

  button.next {
    justify-self: end;
  }

  .control-btn:hover {
    outline: var(--border-thin) var(--accent);
  }

  @media(max-width: 768px) {
    button.prev {
      border-left: none;
    }

    button.next {
      border-right: none;
    }
  }
</style>