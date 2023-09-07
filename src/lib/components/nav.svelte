<script lang="ts">
	import { Triangle } from 'lucide-svelte';
	import { navs } from '$lib/data/navs';
	import { capitalizeFirstLetter } from '$lib/utils/capitalizeFirstLetter';
</script>

<nav>
	<ul class="links">
		{#each navs as nav}
			<li>
				<span class="icon"><Triangle stroke-width="0.5px" size="0.8em" /></span>
				<a href={`#${nav}`}>{capitalizeFirstLetter(nav)}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.links {
		display: grid;
		gap: var(--size-7);
	}

	.links > li {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	.links a {
		position: relative;
	}

	.links a::after {
		content: '';
		position: absolute;
		border-radius: var(--radius-round);
		width: 100%;
		height: 1.5px;
		bottom: 0;
		left: 0;
		background-color: var(--accent);
		transform: scaleX(1);
		transform-origin: bottom left;
		transition: transform 0.8s ease;
	}

	.links a:hover::after {
		transform: scaleX(0);
		transform-origin: bottom right;
	}

	.icon {
		rotate: 180deg;
		animation: bounce 2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	@keyframes bounce {
		0% {
			translate: 0 0;
		}

		50% {
			translate: 0 7px;
		}
	}
</style>
