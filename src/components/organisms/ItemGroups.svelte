<script lang="ts">
  import type { ItemGroupsFragment } from 'src/codegen'
  import TreeCMT from '../organisms/Tree.svelte'
  import { GetGroups } from 'src/codegen'
  import { stratify } from 'd3-hierarchy'
  import ColumnCenter from '../../components/atoms/ColumnCenter.svelte'
  import { getContext } from 'svelte'
  import { Wave } from 'svelte-loading-spinners'

  const allGroup = { name: 'Все товары', id: 0 }
  const { theme } = getContext('theme')

  $: groups = GetGroups({})
  $: groupsData = [...[allGroup], ...($groups?.data?.itemGroups || [])].map((g) => ({
    ...g,
    id: +g.id,
  }))
  $: groupsTree = stratify<ItemGroupsFragment>().parentId((d) => d.parent_group_id)(groupsData)
</script>

{#if $groups.loading}
  <ColumnCenter>
    <Wave size="30" color={$theme.palette.highlitsColor} unit="px" />
  </ColumnCenter>
{:else}
  <TreeCMT tree={groupsTree} />
{/if}
