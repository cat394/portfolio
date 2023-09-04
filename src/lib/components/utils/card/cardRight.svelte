<div class="card-right">
  <slot />
</div>

<style>
  .card-right {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: var(--size-3);
  }
</style>


