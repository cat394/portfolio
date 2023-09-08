<script>
	import { Twitter, Github, Instagram } from 'lucide-svelte';
	import { strokeWidth } from '$lib/stores';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
	import Toggle from '$lib/components/toggle.svelte';
</script>

<header>
	<ContentsField>
		<div class="vertical-item">
			<h1>Who is Ryo?</h1>
			<ul class="social-icons">
				<li>
					<a class="twitter" href="https://twitter.com/RYO_001231">
						<Twitter strokeWidth={$strokeWidth} />
					</a>
				</li>
				<li>
					<a class="github" href="https://github.com/cat394">
						<Github strokeWidth={$strokeWidth} />
					</a>
				</li>
				<li>
					<a class="instagram" href="https://www.instagram.com/ryo_001231/">
						<Instagram strokeWidth={$strokeWidth} />
					</a>
				</li>
			</ul>
			<Toggle />
		</div>
	</ContentsField>
</header>

<style>
	header {
		background: var(--background-1);
	}
	.vertical-item {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: var(--size-6);
	}

	.social-icons {
		justify-self: end;
		display: flex;
		align-items: center;
		gap: var(--size-4);
	}

	a {
		transition: color 500ms;
	}

	a.twitter:hover {
		color: var(--blue-2);
	}

	a.github:hover {
		color: var(--violet-5);
	}

	a.instagram:hover {
		color: var(--purple-2);
	}
</style>
