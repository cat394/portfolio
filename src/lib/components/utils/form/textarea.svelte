<script lang="ts">
	import Label from './label.svelte';
	export let placeholder = '';
</script>

<Label formName="Your message">
	<textarea {placeholder} {...$$props} />
</Label>
