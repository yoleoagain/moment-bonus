<script lang="ts">
  import type { Items } from '../../codegen'

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
    }
    .desc{
        margin-top: 5px;
    }
    .item-main-picture__wrap{
        width: 30%;
    }
    .item-main-picture__wrap img{
        max-width: 100%;
        width: 100%;
        height: auto;
    }
</style>
<div class='item'>
    <div class="item-main-picture__wrap">
        <img src={picture} alt={item.name} />
    </div>
    <span>
        {item.name}
    </span>
    <span class='desc'>
        {item.description}
    </span>
    <span class="desc">
        {item.id}
    </span>
    <button on:click={remove}>X</button>
</div>