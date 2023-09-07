<script lang="ts">
  export let horizontalPosition: "left" | "center" | "right" = "left";

  let center = horizontalPosition === "center" ? true : false;
  let right = horizontalPosition === "right" ? true : false;
</script>

<div 
  class="contents-field"
>
  <div 
    class:center
    class:right
  >
    <slot />
  </div>
</div>

<style>
  .contents-field {
    width: var(--content-width);
    margin-inline: auto;
    display: grid;
    align-items: baseline;
  }

  .center {
    justify-self: center;
  }

  .right {
    justify-self: end;
  }
</style>