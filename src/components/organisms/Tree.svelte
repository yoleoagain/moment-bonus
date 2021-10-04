<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ItemGroups } from '../../codegen'

  export let tree: Tree<ItemGroups>
  export let onClick: (branch: Tree<ItemGroups>) => void = (tree) => {}
  console.log('tree', tree)
</script>

<ul on:click={() => onClick(tree)} class="tree">
  <li>{tree.data.name}</li>
  {#if tree.children}
    {#each tree.children as el}
      <svelte:self tree={el} />
    {/each}
  {/if}
</ul>

<style>
  .tree {
    display: flex;
    flex-direction: column;
  }
</style>
