<script lang="ts">
  import ContentsField from "$lib/components/utils/contentsField.svelte";
  
  export let id: string = "";
  export let cover: boolean = false;
  export let verticalCenter: boolean = false;
  export let bgColor: string = "var(--background-1)"
</script>

<section 
  class:cover 
  class:verticalCenter 
  {id}
  style:background={bgColor}
>
  <slot />
</section>

<style>
  section {
    padding-block: var(--size-fluid-5);
    scroll-margin-top: 50px;
  }

  .cover {
    height: 100dvh;
  }

  .verticalCenter {
    display: flex;
    align-items: center;
  }
</style>