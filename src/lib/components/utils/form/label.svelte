<script>
  export let formName = "Your name"
  export let required = true;
</script>

<label>
  <div>
    {formName}
    {#if required}
      <span class="input-required">*</span>
    {/if}
  </div>
  <slot />
</label>

<style>
  .input-required {
    color: red;
  }
</style>