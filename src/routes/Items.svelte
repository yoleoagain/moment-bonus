<script lang="ts">
  import type { ItemListFieldsFragment } from 'src/codegen'
  import Item from '../components/atoms/Item.svelte'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import { editItemStore, baseItem, where } from '../stores/queries/items'
  import { getContext } from 'svelte'
  import { GetItems } from 'src/codegen'
  import { search } from '../stores/queries/items'
  import { activeGroupID } from '../stores/queries/groups'
  import { Wave } from 'svelte-loading-spinners'
  import { get } from 'svelte/store'

  // $search

  $: query = GetItems({
    variables: { 
      sort: 'created_at:DESC', 
      where: $where, 
     },
  })

  let activeItem: ItemListFieldsFragment | null = null
  let { theme } = getContext('theme')

  editItemStore.subscribe((value) => { activeItem = value })

  const createNewItem = () => editItemStore.set(baseItem)
</script>

{#if activeItem !== null}
  <Modal>
    <ItemEditForm />
  </Modal>
{/if}
<div class="items-wrap">
  <input
    type="text"
    class="input search"
    placeholder="Поиск"
    bind:value={$search}
    class:is-loading={$query.loading}
  />
  <div>
    <label for="g_id">GROUP_ID: </label>
    <input 
      id="g_id"
      type="numeric"
      placeholder="GROUP_ID"
      bind:value={$activeGroupID}
    />
  </div>
  
  <main class="cards">
    <div class="cards-subwrap">
      <div class="row">
        <div
          style="width: 100%;"
          class="buttons is-flex align-items-end is-justify-content-end control-wrap"
        >
          <button class="button mt-2" on:click={createNewItem}>
            <i class="fas fa-plus" />
          </button>
        </div>

        {#if $query.loading}
          <Wave size="100" color={$theme.palette.highlitsColor} unit="px" />
        {/if}

        {#each $query.data?.items || [] as item}<Item {item} />{/each}
      </div>
    </div>
  </main>
</div>

<style>
  .control-wrap {
    margin-top: var(--theme-gap-half);
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
