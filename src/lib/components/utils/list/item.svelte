<script lang="ts">
  export let name: string;
</script>

<div class="list-item">{name}</div>

<style>
  .list-item {
    --item-border: var(--border-thin) var(--brand);

    padding: var(--size-3) var(--size-4);
    border: var(--item-border);
    outline: var(--item-border);
    outline-offset: var(--border-size-2);
  }
</style>
