<script lang="ts">
  import type { ItemListFieldsFragment } from 'src/codegen'
  import Item from '../components/atoms/Item.svelte'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import { editItemStore, where } from '../stores/queries/items'
  import { baseItem } from '../stores/queries/items'
  import { getContext } from 'svelte'
  import { GetItems } from 'src/codegen'
  import { search } from '../stores/queries/items'
  import AppLayout from '../components/templates/AppLayout.svelte'
  import ItemGroups from '../components/organisms/ItemGroups.svelte'
  import Loader from '../components/molecules/Loader.svelte'

  $: query = GetItems({
    variables: {
      sort: 'created_at:DESC',
      where: $where,
    },
  })

  let activeItem: ItemListFieldsFragment | null = null

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

<AppLayout>
  <div class="field has-addons" slot="tools">
    <p style="width: 100%;" class="control">
      <input type="text" style="width: 100%;" class="input search mr-2" placeholder="Поиск" bind:value={$search} class:is-loading={$query.loading} />
    </p>
    <p class="control">
      <button class="button " on:click={createNewItem}>
        <i class="fas fa-plus" />
      </button>
    </p>
  </div>
  <svelte:fragment slot="aside"><ItemGroups /></svelte:fragment>
  <svelte:fragment slot="main">
    <div class="cards-subwrap">
      {#if $query.loading}
        <Loader />
      {:else}
        <div class="products-wrap">
          {#each $query.data?.items || [] as item}<Item {item} />{/each}
        </div>
      {/if}
    </div>
  </svelte:fragment>
</AppLayout>

<style>
  .products-wrap {
    height: 100%;
    overflow-y: auto;
  }
  .cards-subwrap {
    width: 100%;
    background-color: var(--theme-primaryBackground);
  }
</style>
