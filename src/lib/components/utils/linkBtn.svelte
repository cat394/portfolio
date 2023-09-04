<script lang="ts">
  import { ExternalLink } from "lucide-svelte";
  export let href: string;
  export let blank: boolean = false;
</script>

<a {href} {...$$props}>
  <div class="wrapper">
    <slot />
    {#if blank}
      <ExternalLink />
    {/if}
  </div>
</a>

<style>
  a {
    display: inline-flex;
    justify-content: center;
    padding: var(--size-3);
    border: var(--border-size-1) solid var(--brand);
    border-radius: var(--radius-round);
  }

  .wrapper {
    display: flex;
    gap: var(--size-2);
  }
</style>
