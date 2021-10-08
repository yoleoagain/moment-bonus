<div class="app-layout_wrap is-flex-direction-column is-flex">
  <slot class="is-flex-direction-row is-flex is-justify-content-center mb-3" name="tools" />
  <main class="app-layout__main">
    <aside class="app-layout__aside">
      <slot name="aside" />
    </aside>
    <div class="app-layout_content">
      <slot name="main" />
    </div>
  </main>
</div>

<style>
  .app-layout__aside {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
  }
  .app-layout__main {
    display: flex;
    width: 100%;
    height: calc(100vh - 145px);
    min-height: calc(100vh - 145px);
  }
  .app-layout_wrap {
    padding: var(--theme-gap-main);
    height: 100%;
  }
  .app-layout_content {
    width: 100%;
    display: flex;
    margin-left: var(--theme-gap-main);
  }
  /* @media screen and (min-width: 600px) {
    .app-layout__main {
      flex-direction: column;
    }
  } */
</style>
