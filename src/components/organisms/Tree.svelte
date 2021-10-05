<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ThemeContext } from '../../components/context/context'
  import type { ItemGroups } from '../../codegen'
  import { getContext } from 'svelte'

  let { theme } = getContext<ThemeContext>('theme')

  export let selectedID: number = 0
  export let tree: Tree<ItemGroups>
  export let onClick: (branch: Tree<ItemGroups>) => void = (tree) => {}
  // HOW to handle click in recursive components? works only parrent... =) Zzz...
</script>

{#if tree.children}
  <ul
    style={`padding-left: calc(${$theme.paddings.quarter} * ${
      tree.depth + 1
    });${
      Number(selectedID) === Number(tree.id)
        ? `background: ${$theme.palette.mainAccentBackground};`
        : ''
    }`}
    class="tree"
  >
    <li>{tree.data.name}</li>
    {#if tree.children}
      {#each tree.children as el}
        <svelte:self tree={el} />
      {/each}
    {/if}
  </ul>
{:else}
  <li>{tree.data.name}</li>
{/if}

<style>
  .tree {
    display: flex;
    flex-direction: column;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    background: var(--theme-hoveredBackground);
  }
</style>
