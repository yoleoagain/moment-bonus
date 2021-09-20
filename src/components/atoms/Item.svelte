<script lang="ts">
  import type { ItemListFieldsFragment } from '../../codegen'
  import { editItemStore, fetchItems, search } from '../../stores/queries/items'

  export let item: ItemListFieldsFragment | null

  const noImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fZ_ebLrIR7-37WMGcyj_RO-0TTcZGtUKtg&usqp=CAU'
  const images = item?.item_picture?.pictures

  $: picture = Array(images) && images ? images[0].url : ''

  function edit() {
    editItemStore.set(item)
  }
</script>

<div class="item p-3" on:click={edit}>
  <div class="product-info__wrap is-flex is-justify-content-space-between">
    <div class="is-flex">
      <img src={picture || noImage} alt={$editItemStore?.name} />
      <div class="ml-2 is-flex-direction-column is-flex">
        <span>{item.name}</span>
        <span class="item-description">{item.description}</span>
      </div>
    </div>
    <div>
      <span>
        {item.prices.length === 0 ? '0.00' : item.prices[0]} RUB
      </span>
    </div>
  </div>
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--theme-borderColor);
    border-radius: var(--theme-mainAccentBackground);
    height: 70px;
    background: var(--theme-mainAccentBackground);
    color: var(--theme-primaryFont);
    cursor: pointer;
  }
  .item-description {
    color: var(--theme-secondaryFont);
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
