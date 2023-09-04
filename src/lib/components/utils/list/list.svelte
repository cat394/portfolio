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
  .skill-list > li {
    padding-left: 0;
    margin-bottom: var(--size-5);
  }

  .sub-list-horizontal {
    display: flex;
    gap: var(--size-4);
    padding-left: 0;
  }

  .sub-list-vertical {
    padding-left: var(--size-5);
  }

  .sub-list-vertical > li {
    margin-bottom: var(--size-8);
  }
</style>
