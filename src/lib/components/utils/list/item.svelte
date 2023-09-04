<script lang="ts">
  export let name: string;
</script>

<div class="list-item">{name}</div>

<style>
  .list-item {
    padding: var(--size-3) var(--size-4);
    border: var(--border-size-1) solid var(--brand);
    outline: var(--border-size-1) solid var(--brand);
    outline-offset: 2px;
  }
</style>
