<script lang="ts">
	import Label from './label.svelte';
	export let placeholder = '';
</script>

<Label formName="Your message">
	<textarea {placeholder} {...$$props} />
</Label>

<style>
	textarea {
		min-width: 500px;
		overflow: auto;
	}

	@media(max-width: 768px) {
		textarea {
			min-width: 250px;
		}
	}
</style>