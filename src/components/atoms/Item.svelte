<script lang="ts">
  import Label from '../typography/Label.svelte'
  import type { Items } from '../../codegen'
  
  const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fZ_ebLrIR7-37WMGcyj_RO-0TTcZGtUKtg&usqp=CAU'

  export let deleteItem
  export let item: Items

  const images = item?.item_picture?.pictures

  $: picture = Array(images) && images ? images[0].url : '' 

  function remove(){
    deleteItem(item.id)
  }
</script>
<style>
    .item{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        background: #eee;
        border: 1px solid rgb(155, 155, 155);
        border-radius: 4px;
        margin-top: 10px;
        height: 60px;
    }
    .item img{
        height: 100%;
        width: auto;
    }
    .product-info__wrap{
        display: flex;
        width: 100%;
    }
    .item_name{}
</style>
<div class='item'>
    <div class='product-info__wrap'>
            <img src={picture || noImage} alt={item.name} />
        <span class="item_name margin-left">{item.name}</span>
    </div>
    <button on:click={remove}>X</button>
</div>