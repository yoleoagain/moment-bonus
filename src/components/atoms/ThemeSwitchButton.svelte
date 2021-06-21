<script lang="ts">
  import { getContext } from 'svelte'

  const { theme, toogle } = getContext('theme')
  let mode = $theme.mode === 'dark' ? 'light' : 'dark'
</script>

<button class="theme-button" on:click={toogle}>T</button>

<style>
  .theme-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: var(--theme-gap-half);
    color: var(--theme-primaryFont);
    background: var(--theme-mainAccentBackground);
    border-radius: 5px;
  }
</style>
