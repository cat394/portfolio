<script lang="ts">
	import type { SkillItem as SkillItemType } from '$lib/data/skills.js';
	import Item from '$lib/components/utils/list/item.svelte';
	export let listData: SkillItemType[];
</script>

<ul class="skill-list">
	{#each listData as skill}
		<li>
			<b>{skill.name}</b>
			{#if skill.children}
				<ul class={skill.children[0]?.children ? 'sub-list-vertical' : 'sub-list-horizontal'}>
					{#each skill.children as child}
						<li>
							{#if child.children}
								<svelte:self listData={[child]} />
							{:else}
								<Item name={child.name} />
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</li>
	{/each}
</ul>

<style>
	b {
		display: block;
		padding-bottom: var(--size-3);
	}

	.skill-list > li {
		margin-bottom: var(--size-8);
	}

	.sub-list-vertical {
		padding-left: var(--size-5);
	}

	.sub-list-horizontal {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-4);
		padding-left: var(--border-size-2);
	}
</style>
