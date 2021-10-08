<script lang="ts">
  import { fly, fade } from 'svelte/transition'
</script>

<div class="modal__background" transition:fade on:introstart on:outroend>
  <div class="modal-content p-4" transition:fly={{ y: 50 }} on:introstart on:outroend><slot /></div>
</div>

<style>
  .modal__background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--theme-primaryBackground20);
    height: 100vh;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    max-height: unset;
  }
  .modal-content {
    background: var(--theme-primaryBackground);
    min-width: 370px;
    max-height: 80vh;
    max-width: 90vw;
    width: fit-content;
    border-radius: 8px;
    border: 2px solid var(--theme-borderColor);
  }
  @media only screen and (min-width: 767px) {
    .modal-content {
      max-height: 100vh;
      max-width: 100vw;
    }
  }
</style>
