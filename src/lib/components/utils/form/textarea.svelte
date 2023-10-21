<script lang="ts">
	import Label from './label.svelte';
	export let placeholder = '';
	export let value = ""
</script>

<textarea {placeholder} {...$$props} bind:value />

<style>
	textarea {
		width: 100%;
		margin: auto;
	}
</style>