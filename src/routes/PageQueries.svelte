<script lang="ts">
  import type { Items } from 'src/codegen';
  import { GetItems, GetItemsDoc, addItem, deleteItem } from 'src/codegen';
  import { Wave } from 'svelte-loading-spinners';
  import Item from '../components/atoms/Item.svelte';
  import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
  import Modal from "../components/templates/Modal.svelte";
  import ItemEditForm from "../components/organisms/ItemEditForm.svelte";

  export let search = ''
  export let name = ''
  export let description = ''
  export let loadingNewItem = false
  export let modalIsOpen = false
  export let itemIsNew = false
  export let activeItem: Items = {

  }
  
  
  const refetchQueries = [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search } }]
  $: query = GetItems({
    variables: {
      sort: 'created_at:DESC',
      search
    }
  });

  function openModal(){ 
    modalIsOpen = true
    activeItem = { isNew: true }
  }
  function setActiveItem(item: Items){ 
    modalIsOpen = true
    activeItem = item 
  }

  function itemPlus(){
    loadingNewItem = true
    addItem({
      refetchQueries,
      variables: { name, description }
    })
      .then(e => { 
        loadingNewItem = false
      })
      .catch(e => { loadingNewItem = false })
  }

  const dropItem = (id) => {
    deleteItem({
      refetchQueries,
      variables: { id }
    })
  }
</script>

<style>
  .cards {
    display: flex;
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  .cards-subwrap {
    width: 100%;
    padding: 10px;
    background-color: #464444;
    box-shadow: 10px 5px 5px #ff3e00;
  }

  .search{
    margin-bottom: 0;
    border-radius: 0;
    width: calc(100% - 60px);
  }
</style>

{#if modalIsOpen}
<Modal>
  <ItemEditForm
    bind:isOpen={modalIsOpen}
    search={search}
    item={activeItem} 
  />
</Modal>
{/if}

<div class:is-loading={$query.loading} class="control is-full is-flex">
  <input type="text" class="input search " placeholder="Поиск" bind:value={search} />
  <button class="button" on:click={() => {}}>
    <i class="fas fa-filter"></i>
  </button>
</div>
<main class="cards">
  <div class="cards-subwrap">
    <div class="row">
      <div style="width: 100%;" class="buttons is-flex align-items-end is-justify-content-end">
        <button class="button mt-2" on:click={openModal}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
      {#if $query.loading}
        <Wave size="100" color="#FF3E00" unit="px" />
      {/if}
      {#each $query.data?.items || [] as item (item.id)}
        <div
          animate:flip in:fade={{duration: 200}} out:fade={{duration: 200}}
        >
          <Item
            deleteItem={dropItem}
            item={item}
            setActiveItem={setActiveItem}
          />
        </div>
      {/each}
    </div>
    </div>
    
</main>
