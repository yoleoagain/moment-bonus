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

  const ulStyle = `padding-left: calc(${$theme.paddings.quarter} * ${tree.depth + 1});`
  const liStyle = `background: ${Number(selectedID) === Number(tree.id) ? $theme.palette.mainAccentBackground : ''}`
</script>

{#if +tree.id === 0}
  <span
    on:click={() => {
      console.log('tree', tree)
      onClick(tree)
    }}
    style={liStyle}
  >
    {tree.data.name}</span
  >
{/if}

{#if tree.children}
  <ul style={ulStyle} class="tree">
    {#if tree.children}
      {#each tree.children as el}
        <svelte:self tree={el} />
      {/each}
    {/if}
  </ul>
{:else}
  <li
    on:click={() => {
      console.log('tree', tree)
      onClick(tree)
    }}
    style={liStyle}>{tree.data.name}</li
  >
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
