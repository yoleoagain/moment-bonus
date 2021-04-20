<script>
    export let name;
    export let description;
    export let id;
    export let deleteItem;

    function remove(){
        deleteItem(id)
    }

</script>
<style>
    .item{
        display: flex;
        flex-direction: column;
        padding: 5px;
        background: #eee;
        border: 1px solid rgb(155, 155, 155);
        border-radius: 4px;
        margin-top: 10px;
    }
    .desc{
        margin-top: 5px;
    }
</style>
<div class='item'>
    <span>
        {name}
    </span>
    <span class='desc'>
        {description}
    </span>
    <span class="desc">
        {id}
    </span>
    <button on:click={remove}>Удалить</button>
</div>