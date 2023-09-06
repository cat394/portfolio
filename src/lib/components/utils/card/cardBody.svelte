<script lang="ts">
  import Divider from "../divider.svelte";
</script>
<div class="card-body">
  <slot />
  <Divider lineColor="var(--accent)" lineOpacity="0.5" space="lg" />
</div>

<style>
  .card-body {
    padding-inline: var(--size-5);
  }
</style>