<script>
  export let isError = false
</script>

<span class:error-class={isError} class="moment-label">
  <slot />
</span>

<style>
  .moment-label {
    color: #7b7472;
  }
</style>
