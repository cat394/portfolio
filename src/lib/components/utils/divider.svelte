<script lang="ts">
	export let space: 'sm' | 'md' | 'lg' = 'md';
	export let lineWidth = '100%';
	export let lineThickness = '1px';
	export let lineColor = 'none';
	export let lineOpacity = '0.3';
</script>

<div class="divider {space}">
	<div
		style:margin-inline="auto"
		style:width={lineWidth}
		style:height={lineThickness}
		style:background-color={lineColor}
		style:opacity={lineOpacity}
	/>
</div>

<style>
	.divider {
		display: flex;
		align-items: center;
	}

	.divider.sm {
		height: 1rem;
	}

	.divider.md {
		height: 2rem;
	}

	.divider.lg {
		height: 3rem;
	}
</style>
