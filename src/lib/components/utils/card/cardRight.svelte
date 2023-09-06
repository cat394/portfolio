<div class="card-right">
  <slot />
</div>

<style>
  .card-right {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  @media(max-width: 768px) {
    .card-right {
      margin-top: var(--size-5);
    }
  }
</style>


