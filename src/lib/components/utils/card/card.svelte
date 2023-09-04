<div class="card surface-1">
  <slot />
</div>

<style>
  .card {
    border: var(--border-size-1) solid var(--brand);
    padding: var(--size-fluid-3);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-8);
  }
</style>