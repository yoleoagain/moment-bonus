<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ThemeContext } from '../../components/context/context'
  import type { ItemGroupsFragment } from '../../codegen'
  import { getContext } from 'svelte'
  import { activeGroupID } from '../../stores/queries/groups'

  let { theme } = getContext<ThemeContext>('theme')

  export let selectedID: number
  export let tree: Tree<ItemGroupsFragment>
  // HOW PASS THIS STUFF VIA PROPS!!!
  // Why this not working via function props or bind prop value ?????????
  function handleClick() {
    activeGroupID.update((v) => Number(tree.id))
  } //: (branch: Tree<ItemGroupsFragment>) => void

  const ulStyle = `padding-left: calc(${$theme.paddings.quarter} * ${tree.depth + 1});`
  const liStyle = `background: ${Number(selectedID) === Number(tree.id) ? $theme.palette.mainAccentBackground : ''}`
</script>

{#if +tree.id === 0}
  <span on:click={() => handleClick()} style={liStyle}> {tree.data.name}</span>
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
  <li on:click={handleClick} style={liStyle}>{tree.data.name}</li>
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
