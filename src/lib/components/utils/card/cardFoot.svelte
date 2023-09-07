<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import LinkBtn from '../linkBtn.svelte';
</script>

<div class="card-foot">
	<slot />
</div>

<style>
	.card-foot {
		display: flex;
		justify-content: center;
	}
</style>
