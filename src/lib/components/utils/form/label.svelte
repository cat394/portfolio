<script>
  export let formName = "Your name"
  export let required = true;
</script>

<label>
  <div>
    <span class="formName">{formName}</span>
    {#if required}
      <span class="input-required">*</span>
    {/if}
  </div>
  <slot />
</label>

<style>
  .formName {
    display: inline-block;
    margin-bottom: var(--size-3);
  }
  .input-required {
    color: red;
  }
</style>