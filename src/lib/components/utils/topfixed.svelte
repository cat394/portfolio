<div class="top-fixed">
  <slot />
</div>

<style>
  .top-fixed {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--layer-5);
  }
</style>