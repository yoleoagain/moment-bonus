<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ItemGroups } from '../../codegen'

  export let tree: Tree<ItemGroups>
  export let onClick: (branch: Tree<ItemGroups>) => void = (tree) => {}
</script>

<ul on:click={() => onClick(tree)} class="tree">
  {#each tree.children as el}
    {#if tree.children}
      <svelte:self tree={el} />
    {:else}
      <li>{el.data.name}</li>
    {/if}
  {/each}
</ul>

<style>
  .tree {
    display: flex;
    flex-direction: column;
  }
</style>
