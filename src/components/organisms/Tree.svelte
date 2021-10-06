<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ThemeContext } from '../../components/context/context'
  import type { ItemGroupsFragment } from '../../codegen'
  import { getContext } from 'svelte'
  import { activeGroupID } from '../../stores/queries/groups'

  let { theme } = getContext<ThemeContext>('theme')

  export let tree: Tree<ItemGroupsFragment>

  // HOW PASS THIS STUFF VIA PROPS!!!
  // TODO: Why this not working via function props or bind prop value ?????????
  // TODO: Request products after active group change?
  function handleClick() {
    activeGroupID.update((v) => Number(tree.id))
  } //: (branch: Tree<ItemGroupsFragment>) => void

  const treeItemSTYLE = `padding-left: calc(${$theme.paddings.half} * ${tree.depth + 1});`
</script>

{#if +tree.id === 0}
  <span style={treeItemSTYLE} class="tree-item" class:active-tree={Number($activeGroupID) === Number(tree.id)} on:click={() => handleClick()}>
    {tree.data.name}</span
  >
{/if}

{#if tree.children}
  <ul class="tree">
    {#if tree.children}
      {#each tree.children as el}
        <svelte:self tree={el} />
      {/each}
    {/if}
  </ul>
{:else if +tree.id !== 0}
  <li style={treeItemSTYLE} class="tree-item" class:active-tree={Number($activeGroupID) === Number(tree.id)} on:click={handleClick}
    >{tree.data.name}</li
  >
{/if}

<style>
  .tree-item {
    padding: var(--theme-gap-half);
    border: 1px solid #555;
    border-bottom: none;
  }
  .active-tree {
    background-color: var(--theme-mainAccentBackground);
  }
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
