<script lang='ts'>
  import type { Items } from 'src/codegen'

  import { GetItems, deleteItem } from 'src/codegen'
  import { Wave } from 'svelte-loading-spinners'
  import Item from '../components/atoms/Item.svelte'
  import { fade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
  import Modal from '../components/templates/Modal.svelte'
  import ItemEditForm from '../components/organisms/ItemEditForm.svelte'
  import { fetchItems } from '../components/stores/queries/items'

  $: query = GetItems({ variables: { sort: 'created_at:DESC', search } })

  export let search = ''
  export let modalIsOpen = false

  let activeItemID: null | string = null

  $: activeItem = ($query.data?.items || []).find(itm => itm.id === activeItemID)

  function openModal(){ modalIsOpen = true }

  function setActiveItem(item: Items){ 
    modalIsOpen = true
    activeItemID = item.id
  }

  const dropItem = (id) => deleteItem({ refetchQueries: fetchItems(search), variables: { id } })
</script>

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

  .search{
    margin-bottom: 0;
    border-radius: 0;
    width: calc(100% - 60px);
  }
</style>

{#if modalIsOpen && activeItem !== null}
<Modal>
  <ItemEditForm
    bind:isOpen={modalIsOpen}
    search={search}
    item={activeItem} 
  />
</Modal>
{/if}

<div class:is-loading={$query.loading} class='control is-full is-flex'>
  <input type='text' class='input search ' placeholder='Поиск' bind:value={search} />
  <button class='button' on:click={() => {}}>
    <i class='fas fa-filter'></i>
  </button>
</div>
<main class='cards'>
  <div class='cards-subwrap'>
    <div class='row'>
      <div style='width: 100%;' class='buttons is-flex align-items-end is-justify-content-end'>
        <button class='button mt-2' on:click={openModal}>
          <i class='fas fa-plus'></i>
        </button>
      </div>

      {#if $query.loading}
        <Wave size='100' color='#FF3E00' unit='px' />
      {/if}
      
      {#each $query.data?.items || [] as item, key (item.id)}
        <div animate:flip in:fade={{duration: 200}} out:fade={{duration: 200}}>
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
