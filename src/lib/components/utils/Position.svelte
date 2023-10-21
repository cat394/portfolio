<script lang="ts">
  export let position: 'left' | 'center' | 'right' = 'left'
</script>

<div class={`wrapper ${position}`}>
  <slot />
</div>

<style>
  .wrapper {
    display: flex;
    width: 100%;
  }

  .left {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
</style>