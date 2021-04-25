<script lang="ts">
  import { GetItems, GetItemsDoc, addItem, deleteItem } from 'src/codegen';
  import { Wave } from 'svelte-loading-spinners';
  import Item from '../components/atoms/Item.svelte';
  import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

  export let search = ''
  export let name = ''
  export let description = ''
  export let loadingNewItem = false
  
  const refetchQueries = [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search } }]
  $: query = GetItems({
    variables: {
      sort: 'created_at:DESC',
      search
    }
  });

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

  .card {
    width: 100%;
    height: calc(100vh - 150px);
    padding: 10px;
    background-color: rgb(173, 196, 178);
    box-shadow: 10px 5px 5px #ff3e00;
  }

  .search{
    margin-bottom: 0;
    border-radius: 0;
  }
</style>
<div class:is-loading={$query.loading} class="control is-full">
  <input type="text" class="input is-full search" placeholder="Поиск" bind:value={search} />
</div>
<main class="cards">
  <div class="card">
    <div class="row">
      <div class="column">
        <input class="input is-full" type="text" bind:value={name} />
        <textarea disabled={loadingNewItem} bind:value={description} />
        <button on:click={itemPlus}>
          {#if loadingNewItem}
            <Wave size="20" color="#FF3E00" unit="px" />
          {:else}
            Добавить
          {/if}
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
          />
        </div>
        
      {/each}
    </div>
    </div>
    
</main>
