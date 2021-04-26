<script lang="ts">
  import type { Items } from "../../codegen"
  import { GetItems, GetItemsDoc, addItem, deleteItem } from 'src/codegen';

  export let item: Items
  export let isOpen
  export let search

  const refetchQueries = [{ query: GetItemsDoc, variables: { sort: 'created_at:DESC', search } }]

  function itemPlus(){
    console.log('item', item)
    console.log('HERERER!!!')
    isOpen = false
    addItem({
      refetchQueries,
      variables: { name: item.name, description: item.description }
    })
      .then(e => { 
        
      })
      .catch(e => {  })
  }

  function send(e){
    e.preventDefault();
    console.log('item', item)
    if (item.isNew)
      itemPlus()
  }
</script>

<form class="form p-2">
  <div class="field">
    <label for="name" class="label">Name:</label>
    <div class="control">
      <input 
        bind:value={item.name}
        name="name"
        class="input"
        type="text"
        placeholder="Text input"
      />
    </div>
  </div>

  <div class="field">
    <label for="name" class="label">Description:</label>
    <div class="control">
      <textarea
        bind:value={item.description}
        name="description"
        class="textarea"
        type="text"
        placeholder="Text input"
      />
    </div>
  </div>
  <div class="field">
    <label for="name" class="label">Picture:</label>
    <div class="control">
      <input 
        name="picture"
        class="input"
        type="file"
        placeholder="Text input"
      />
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button type="submit" class="button" on:click={send}>Submit</button>
    </div>
    <div class="control">
      <button class="button is-light" on:click={() => { isOpen = false }} >Cancel</button>
    </div>
  </div>
</form>