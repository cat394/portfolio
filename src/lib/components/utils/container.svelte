<script lang="ts">
  import ContentsField from "$lib/components/utils/contentsField.svelte";
  
  export let id: string = "";
  export let cover: boolean = false;
  export let verticalCenter: boolean = false;
</script>

<section class="surface-4" class:cover class:verticalCenter {id}>
  <slot />
</section>

<style>
  section {
    padding-block: var(--size-6);
  }

  .cover {
    height: 100dvh;
  }

  .verticalCenter {
    display: flex;
    align-items: center;
  }
</style>