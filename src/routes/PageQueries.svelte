<script lang="ts">
  import type { Items } from 'src/codegen'
  import Item from '../components/atoms/Item.svelte'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import {
    editItemStore,
    baseItem,
    fetchItems,
  } from '../stores/queries/items'
  import { GetItems, deleteItem } from 'src/codegen'
  import { Wave } from 'svelte-loading-spinners'
  import { fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  $: query = GetItems({
    variables: { sort: 'created_at:DESC', search },
  })

  export let search = ''

  let activeItem: Items | null = null

  editItemStore.subscribe((value) => {
    activeItem = value
  })

  function createNewItem() {
    editItemStore.set(baseItem)
  }
  const dropItem = (id) =>
    deleteItem({
      refetchQueries: fetchItems(search),
      variables: { id },
    }).then((res) => editItemStore.set(null))
</script>

{#if activeItem !== null}
  <Modal>
    <ItemEditForm {search} />
  </Modal>
{/if}

<div
  class:is-loading={$query.loading}
  class="control is-full is-flex"
>
  <input
    type="text"
    class="input search"
    placeholder="Поиск"
    bind:value={search}
  />
  <button class="button" on:click={() => {}}>
    <i class="fas fa-filter" />
  </button>
</div>
<main class="cards">
  <div class="cards-subwrap ">
    <div class="row">
      <div
        style="width: 100%;"
        class="buttons is-flex align-items-end is-justify-content-end"
      >
        <button
          class="button mt-2"
          on:click={createNewItem}
        >
          <i class="fas fa-plus" />
        </button>
      </div>

      {#if $query.loading}
        <Wave size="100" color="#FF3E00" unit="px" />
      {/if}

      {#each $query.data?.items || [] as item, key (item.id)}
        <div
          animate:flip
          in:fade={{ duration: 200 }}
          out:fade={{ duration: 200 }}
        >
          <Item deleteItem={dropItem} {item} />
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  .cards {
    display: flex;
  }

  .cards-subwrap {
    width: 100%;
    padding: 10px;
    background-color: #464444;
    box-shadow: 10px 5px 5px #ff3e00;
  }

  .search {
    margin-bottom: 0;
    border-radius: 0;
    width: calc(100% - 60px);
  }
</style>
