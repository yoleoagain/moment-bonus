<script lang="ts">
  import type { Items } from 'src/codegen'
  import Item from '../components/atoms/Item.svelte'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import { editItemStore, baseItem } from '../stores/queries/items'
  import { getContext } from 'svelte'
  import { GetItems } from 'src/codegen'
  import { search } from '../stores/queries/items'
  import { Wave } from 'svelte-loading-spinners'

  $: query = GetItems({
    variables: { sort: 'created_at:DESC', search: $search },
  })

  let activeItem: Items | null = null
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

<div class:is-loading={$query.loading} class="control is-full is-flex">
  <input
    type="text"
    class="input search"
    placeholder="Поиск"
    bind:value={$search}
  />
</div>
<main class="cards">
  <div class="cards-subwrap">
    <div class="row items-list">
      <div
        style="width: 100%;"
        class="buttons is-flex align-items-end is-justify-content-end"
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

<style>
  .items-list {
    padding: var(--theme-gap-main) px;
  }
  .cards {
    display: flex;
  }
  .cards-subwrap {
    width: 100%;
    padding: var(--theme-gap-half);
    background-color: var(--theme-primaryBackground);
    box-shadow: 10px 5px 5px var(--theme-highlitsColor);
  }
</style>
