<script lang="ts">
  import type { Items } from '../../codegen'
  import { deleteItem } from '../../codegen'
  import { editItemStore, fetchItems, search } from '../../stores/queries/items'

  export let item: Items | null

  const noImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fZ_ebLrIR7-37WMGcyj_RO-0TTcZGtUKtg&usqp=CAU'
  const images = item?.item_picture?.pictures

  $: picture = Array(images) && images ? images[0].url : ''

  function edit() {
    editItemStore.set(item)
  }

  function remove(e) {
    e.stopPropagation()
    if (item) {
      deleteItem({
        refetchQueries: fetchItems,
        variables: { id: item.id },
      }).then((res) => editItemStore.set(null))
    }
  }
</script>

<div class="item p-3" on:click={edit}>
  <div class="product-info__wrap">
    <img src={picture || noImage} alt={$editItemStore?.name} />
    <span class="ml-2 item_name margin-left">{item.name}</span>
  </div>
  <button class="button" on:click={remove}>
    <i class="fas fa-trash" />
  </button>
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--theme-borderColor);
    border-radius: var(--theme-mainAccentBackground);
    height: 60px;
    background: var(--theme-mainAccentBackground);
    color: var(--theme-primaryFont);
    cursor: pointer;
  }
  .item:not(:first-child) {
    margin-top: var(--theme-gap-half);
  }
  .item:hover {
    background: var(--theme-hoveredBackground);
  }
  .item img {
    height: 100%;
    width: auto;
  }
  .product-info__wrap {
    display: flex;
    width: 100%;
  }
</style>
