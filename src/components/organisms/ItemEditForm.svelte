<script lang="ts">
  import type { ItemListFieldsFragment } from '../../codegen'
  import { fetchItems, search } from '../../stores/queries/items'
  import { activeGroupID } from '../../stores/queries/groups'
  import { addItem, updateItem, deleteItem } from 'src/codegen'
  import { editItemStore } from '../../stores/queries/items'

  function remove(e) {
    e.stopPropagation()
    if (item) {
      deleteItem({
        refetchQueries: fetchItems(),
        variables: { id: item.id },
      }).then((res) => editItemStore.set(null))
    }
  }

  $: refetchQueries = fetchItems()

  let item: ItemListFieldsFragment = null
  let price = (item?.prices || []).length === 0 ? '0.00' : item.prices[0]
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
          item_group: String($activeGroupID),
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
        placeholder="Введите имя"
      />
    </div>
  </div>
  <div class="field">
    <label for="name" class="label">Price:</label>
    <div class="control">
      <input
        bind:value={price}
        name="name"
        class="input"
        placeholder="0.00"
        type="text"
        inputmode="numeric"
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
  <!-- <div class="field">
    <label for="name" class="label">Picture:</label>
    <div class="control">
      <input
        name="picture"
        class="input"
        type="file"
        placeholder="Text input"
      />
    </div>
  </div> -->
  <div class="field is-grouped">
    <div class="control">
      <button type="submit" class="button" on:click={send}>Submit</button>
    </div>
    <div class="control">
      <button class="button is-light" on:click={close}>Cancel</button>
    </div>
    <div class="control">
      <button class="button" on:click={remove}>
        <i class="fas fa-trash" />
      </button>
    </div>
  </div>
</form>
