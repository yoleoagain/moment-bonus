<div class="modal-content p-4"><slot /></div>

<style>
  .modal-content {
    background: var(--theme-primaryBackground);
    height: 100vh;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    max-height: unset;
  }
</style>
