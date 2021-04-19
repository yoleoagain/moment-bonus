<script lang="ts">
  import { fade } from 'svelte/transition';
  import { GetItems, addItem, deleteItem } from 'src/codegen';
  import { Wave } from 'svelte-loading-spinners';
  import { debug } from 'svelte/internal';
  import Item from '../components/Item.svelte'

  export let name = ''
  export let description = ''
  export let loadingNewItem = false
  
  $: query = GetItems({});

  function itemPlus(){
    loadingNewItem = true
    addItem({
      variables: { name, description }
    })
      .then(e => { 
        loadingNewItem = false
      })
      .catch(e => { loadingNewItem = false })
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
        name={item.name}
        description={item.description}
        id={item.id}
      />
    {/each}
  </div>
</main>
