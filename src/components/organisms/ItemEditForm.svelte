<script lang="ts">
  import type { ItemListFieldsFragment } from '../../codegen'
  import { fetchItems } from '../../stores/queries/items'
  import { activeGroupID } from '../../stores/queries/groups'
  import { addItem, updateItem, deleteItem, GetPriceTypes } from 'src/codegen'
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

  $: priceTypes = GetPriceTypes({})
  $: refetchQueries = fetchItems()

  let item: ItemListFieldsFragment = null
  $: price = (item?.prices || []).length === 0 ? '0.00' : item.prices[0].price
  let error = ''

  editItemStore.subscribe((value) => {
    if (value !== null) {
      item = { ...value }
    }
  })

  function close(e: Event | undefined) {
    if (e) {
      e.preventDefault()
    }
    //TODO: Place this ontransistionend event
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
    <h3 class="item-edit_form__header">{item.name + ':'}</h3>
  </div>
  <div class="field">
    <label for="name" class="label">Имя:</label>
    <div class="control">
      <input bind:value={item.name} name="name" class="input" type="text" placeholder="Введите имя" />
    </div>
  </div>
  <label for="name" class="label">Цена и тип цены:</label>
  <div class="field has-addons">
    <p class="control">
      <input style="" bind:value={price} name="name" class="input" placeholder="0.00" type="text" inputmode="numeric" />
    </p>
    <p class="control">
      <input style="max-width: 60px;" class="input" maxlength="3" value="RUB" disabled />
    </p>
    <p class="control">
      <span class="select">
        <select id="price_type_select" value="1" class="select">
          {#each $priceTypes.data?.priceTypes || [] as p}
            <option value={p.id}>{p.name}</option>
          {/each}
        </select>
      </span>
    </p>
  </div>
  <div class="field">
    <label for="name" class="label">Описание:</label>
    <div class="control">
      <textarea bind:value={item.description} name="description" class="textarea" type="text" placeholder="Text input" />
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

<style>
  .item-edit_form__header {
    text-transform: capitalize;
  }
</style>
