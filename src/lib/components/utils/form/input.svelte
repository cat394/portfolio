<script lang="ts">
	import Label from './label.svelte';

	export let formName = 'Type your text';
	export let type = 'text';
	export let required = true;
	export let placeholder = 'Type text here';

	let currentScrollY: number;

	function handleFocus() {
		currentScrollY = window.scrollY;
		setTimeout(() => {
			window.scrollTo(0, currentScrollY);
		}, 0);
	}
</script>

<Label {formName}>
	<div>
		<input on:focus={handleFocus} {type} {placeholder} {required} {...$$props} />
	</div>
</Label>
