<script lang="ts">
	export let formName: string;
	export let required = true;
</script>

<label>
	<div>
		{formName}
		{#if required}
			<span class="input-required">*</span>
		{/if}
	</div>
	<div class="input-field">
		<slot />
	</div>
	<small><slot name="errorMessage" /></small>
</label>

<style>
	label {
		display: block;
		width: 100%;
		overflow: auto;
	}

	small {
		color: red;
		font-size: var(--font-size-sm);
		font-weight: bold;
	}
	.input-required {
		color: red;
	}

	.input-field {
		margin-bottom: var(--size-2);
	}
</style>
