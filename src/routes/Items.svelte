<script lang="ts">
  import type { ItemListFieldsFragment, ItemGroupsFragment } from 'src/codegen'
  import type { Tree } from '../types/common'
  import Item from '../components/atoms/Item.svelte'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import TreeCMT from '../components/organisms/Tree.svelte'
  import { editItemStore, where } from '../stores/queries/items'
  import { baseItem } from '../stores/queries/items'
  import { getContext } from 'svelte'
  import { GetItems, GetGroups } from 'src/codegen'
  import { search } from '../stores/queries/items'
  import { activeGroupID } from '../stores/queries/groups'
  import { Wave } from 'svelte-loading-spinners'
  import { stratify } from 'd3-hierarchy'

  const allGroup = { name: 'Все товары', id: 0 }
  const setActiveGroupId = (v: { id: number }) => {
    console.log(v)
    activeGroupID.set(v.id)
  }

  $: query = GetItems({
    variables: {
      sort: 'created_at:DESC',
      where: $where,
    },
  })
  $: groups = GetGroups({})
  // Upollo return int ids as strings wtf? Unnessasary loop
  $: groupsData = [...[allGroup], ...($groups?.data?.itemGroups || [])].map((g) => ({
    ...g,
    id: +g.id,
  }))
  $: console.log('groupsTree', groupsData)

  $: groupsTree = stratify<ItemGroupsFragment>().parentId((d) => d.parent_group_id)(groupsData)

  let activeItem: ItemListFieldsFragment | null = null
  let { theme } = getContext('theme')

  editItemStore.subscribe((value) => {
    activeItem = value
  })

  const createNewItem = () => editItemStore.set(baseItem)
</script>

{#if activeItem !== null}
  <Modal>
    <ItemEditForm />
  </Modal>
{/if}

<div class="items-wrap is-flex-direction-column is-flex">
  <div class="is-flex-direction-row is-flex is-justify-content-center mb-3">
    <input type="text" class="input search mr-2" placeholder="Поиск" bind:value={$search} class:is-loading={$query.loading} />
    <button class="button " on:click={createNewItem}>
      <i class="fas fa-plus" />
    </button>
  </div>

  <TreeCMT onClick={setActiveGroupId} tree={groupsTree} selectedID={$activeGroupID} />

  <main class="cards">
    <div class="cards-subwrap">
      <div class="row">
        <div style="width: 100%;" class="buttons is-flex align-items-end is-justify-content-end" />

        {#if $query.loading}
          <Wave size="100" color={$theme.palette.highlitsColor} unit="px" />
        {/if}

        <div class="products-wrap">
          {#each $query.data?.items || [] as item}<Item {item} />{/each}
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .products-wrap {
    height: calc(100vh - 210px);
    overflow-y: auto;
  }
  .items-wrap {
    padding: var(--theme-gap-main);
  }
  .cards {
    display: flex;
  }
  .cards-subwrap {
    width: 100%;
    background-color: var(--theme-primaryBackground);
  }
</style>
