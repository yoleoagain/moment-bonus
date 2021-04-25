<script>
  export let isError = false
</script>
<style>
  .moment-label{
    color: #7b7472;
  }
</style>
<span 
  class:error-class={isError} 
  class='moment-label'
>
  <slot/>
</span>