<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ThemeContext } from '../../components/context/context'
  import type { ItemGroups } from '../../codegen'

  import { getContext } from 'svelte'

  let { theme } = getContext<ThemeContext>('theme')

  export let tree: Tree<ItemGroups>
  export let onClick: (branch: Tree<ItemGroups>) => void = (tree) => {}
</script>

<ul
  style={`padding-left: calc(${$theme.paddings.quarter} * ${tree.depth})`}
  on:click={() => onClick(tree)}
  class="tree"
>
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
