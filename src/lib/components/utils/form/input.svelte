<script lang="ts">
	import Label from './label.svelte';

	export let required = true;
	export let placeholder = 'Type text here';
	export let value: string = "";
</script>


<input {placeholder} {required} bind:value={value} {...$$props} />


<style>
	input {
		min-width: 500px;
		overflow: auto;
	}

	@media(max-width: 768px) {
		input {
			min-width: 250px;
		}
	}
</style>