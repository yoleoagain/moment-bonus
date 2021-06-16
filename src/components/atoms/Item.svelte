<script lang="ts">
  import type { Items } from '../../codegen'
  
  export let deleteItem
  export let item: Items
  export let setActiveItem: (item: Items) => void

  const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fZ_ebLrIR7-37WMGcyj_RO-0TTcZGtUKtg&usqp=CAU'
  const images = item?.item_picture?.pictures

  $: picture = Array(images) && images ? images[0].url : '' 

  function edit(){ setActiveItem(item) }
  
  function remove(e){
    e.stopPropagation() 
    deleteItem(item.id) 
  }
</script>
<style>
    .item{
        display: flex;
        justify-content: space-between;
        background: #eee;
        border: 1px solid 7b7472;
        border-radius: 4px;
        margin-top: 10px;
        height: 60px;
        background: #524f4e;
        color: #ffffff;
        cursor: pointer;
    }
    .item:hover{
        background: #696664;
    }
    .item img{
        height: 100%;
        width: auto;
    }
    .product-info__wrap{
        display: flex;
        width: 100%;
    }
</style>
<div class='item p-3' on:click={edit}>
    <div class='product-info__wrap'>
        <img src={picture || noImage} alt={item.name} />
        <span class="ml-2 item_name margin-left">{item.name}</span>
    </div>
    <button class="button" on:click={remove}>
        <i class="fas fa-trash"></i>
    </button>
</div>