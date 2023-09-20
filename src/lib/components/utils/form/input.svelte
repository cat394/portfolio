<script lang="ts">
	import Label from './label.svelte';

	export let formName = 'Type your text';
	export let type = 'text';
	export let required = true;
	export let placeholder = 'Type text here';
</script>

<Label {formName}>
	<div>
		<input {type} {placeholder} {required} {...$$props} />
	</div>
</Label>

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