<div class="card surface-1">
	<slot />
</div>

<style>
	.card {
		background: var(--item);

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-8);
		padding: var(--size-8);
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-4);
	}

	@media (max-width: 768px) {
		.card {
			grid-template-columns: 1fr;
			padding-inline: 0;
			gap: 0;
		}
	}
</style>
