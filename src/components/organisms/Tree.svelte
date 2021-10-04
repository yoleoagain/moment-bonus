<script lang="ts">
  import type { Tree } from '../../types/common'
  import type { ItemGroups } from '../../codegen'
  import { children } from 'svelte/internal'

  export let tree: Tree<ItemGroups>
</script>

<ul class="tree">
  {#if tree.children}
    {#each tree.children as el}
      <svelte:self tree={el} />
    {/each}
  {:else}
    <li>{tree.data.name}</li>
  {/if}
</ul>

<style>
  .tree {
    display: flex;
    flex-direction: column;
  }
</style>
