<script lang="ts">
  import type { Items } from '../../codegen'
  import { fetchItems } from '../../stores/queries/items'
  import { addItem, updateItem } from 'src/codegen'
  import { editItemStore } from '../../stores/queries/items'

  $: refetchQueries = fetchItems

  let item: Items = null
  let error = ''

  editItemStore.subscribe((value) => {
    item = { ...value }
  })

  function close() {
    editItemStore.set(null)
  }

  function send(e) {
    e.preventDefault()

    if (item.id === '') {
      addItem({
        refetchQueries,
        variables: {
          name: item.name,
          description: item.description,
        },
      })
        .then((res) => close())
        .catch((e) => (error = e.message))
    } else {
      updateItem({
        refetchQueries,
        variables: {
          id: item.id,
          name: item.name,
          description: item.description,
        },
      })
        .then((res) => close())
        .catch((e) => (error = e.message))
    }
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
      <button class="button is-light" on:click={close}>Cancel</button>
    </div>
  </div>
</form>
