<script lang="ts">
  import Label from "./label.svelte";

  export let formName = "Type your text";
  export let type = "text";
  export let required = true;
  export let placeholder = "Type text here";
</script>

<Label {formName}>
  <div>
    <input {type} {placeholder} {required} {...$$props} />
  </div>
</Label>

<style>
  input {
    width: var(--input-field-width);
  }

  @media(max-width: 768px) {
    input {
      width: 100%;
    }
  }
</style>