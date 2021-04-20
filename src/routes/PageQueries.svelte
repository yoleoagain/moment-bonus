<script lang="ts">
  import { fade } from 'svelte/transition';
  import { GetItems, GetItemsDoc, addItem, deleteItem } from 'src/codegen';
  import { Wave } from 'svelte-loading-spinners';
  import { debug } from 'svelte/internal';
  import Item from '../components/Item.svelte'

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
    justify-content: descriptionspace-around;
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
</style>
<br />
<main class="cards">
  <div class="card">
    <h2>Items</h2>
    <div class="column">
      <input placeholder='Search' bind:value={search} />
      <input bind:value={name} />
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
    {#each $query.data?.items || [] as item}
      <span>{item.created_at}</span>
      <Item
        deleteItem={dropItem}
        name={item.name}
        description={item.description}
        id={item.id}
      />
    {/each}
  </div>
</main>
