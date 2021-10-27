<script lang="ts">
  import type { ItemGroupsFragment } from 'src/codegen'
  import TreeCMT from '../organisms/Tree.svelte'
  import { GetGroups } from 'src/codegen'
  import { stratify } from 'd3-hierarchy'
  import Loader from '../molecules/Loader.svelte'

  const allGroup = { name: 'Все товары', id: 0 }

  $: groups = GetGroups({})
  $: groupsData = [...[allGroup], ...($groups?.data?.itemGroups || [])].map((g) => ({
    ...g,
    id: +g.id,
  }))
  $: groupsTree = stratify<ItemGroupsFragment>().parentId((d) => d.parent_group_id)(groupsData)
</script>

{#if $groups.loading}
  <Loader />
{:else}
  <TreeCMT tree={groupsTree} />
{/if}
