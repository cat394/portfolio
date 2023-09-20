<script>
	export let formName = 'Your name';
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
	label {
		width: 100%;
		overflow: auto;
	}
	.input-required {
		color: red;
	}
</style>
