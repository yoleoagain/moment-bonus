<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ThemeContext } from '../../components/context/context'
  import type { ItemGroupsFragment } from '../../codegen'
  import { getContext } from 'svelte'
  import { activeGroupID } from '../../stores/queries/groups'

  let { theme } = getContext<ThemeContext>('theme')
  export let tree: Tree<ItemGroupsFragment>
  let hidden = tree.depth > 1

  // HOW PASS THIS STUFF VIA PROPS!!!
  // TODO: Why this not working via function props or bind prop value ?????????
  // TODO: Request products after active group change?
  // TODO: Hide/expand groups?
  function handleClick() {
    activeGroupID.update((v) => Number(tree.id))
    hidden = !hidden
  }

  const treeItemSTYLE = `padding-left: calc(${$theme.paddings.half} * ${tree.depth + 1});`
</script>

<span class="tree-item" style={treeItemSTYLE} class:active-tree={Number($activeGroupID) === Number(tree.id)} on:click={() => handleClick()}>
  {#if tree.children}
    <span class:tree-item-arrow__active={!hidden} class="tree-item-arrow">&rsaquo;</span>
  {/if}
  <span class="tree-item__name">{tree.data.name}</span>
</span>

{#if tree.children && !hidden}
  <ul class="tree">
    {#if tree.children && !hidden}
      {#each tree.children as el}
        <svelte:self tree={el} />
      {/each}
    {/if}
  </ul>
{/if}

<style>
  .tree-item__name {
    margin-left: 10px;
  }
  .tree-item-arrow {
    position: absolute;
    margin-right: var(--theme-gap-quarter);
    transition-duration: 0.2s;
    transition-property: transform;
  }
  .tree-item-arrow__active {
    transform: rotate(90deg);
  }
  .tree-item {
    user-select: none;
    padding: var(--theme-gap-half);
    border: 1px solid;
    border: var(--theme-hoveredBackground);
    border-bottom: none;
    cursor: pointer;
  }
  .active-tree {
    background-color: var(--theme-mainAccentBackground);
  }
  .tree {
    display: flex;
    flex-direction: column;
  }
  .tree-item:hover {
    background: var(--theme-hoveredBackground);
  }
</style>
