<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let thickness = "1px";
  export let color: string = "none";
</script>

<div class="divider {size}">
  <div style="width: 100%; height: {thickness}; background-color: {color};"></div>
</div>

<style>
  .divider {
    display: flex;
    align-items: center;
  }

  .divider.sm {
    height: 1rem;
  }
  
  .divider.md {
    height: 2rem;
  }
  
  .divider.lg {
    height: 3rem;
  }
</style>
