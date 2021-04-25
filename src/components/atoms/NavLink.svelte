<script>
  import { link } from 'svelte-routing';
  import { palette } from '../theme/palette'

  export let to = '';

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'active' };
    }
    return {};
  }
</script>

<style>
  .link:a{
    text-decoration: none;
    border: none;
  }
  .link:hover{
    text-decoration: none;
    color: "var(--theme-color)";
  }
</style>
<a class="link" href={to} {getProps} use:link style="--theme-color: {palette.hoveredBackground}">
  <slot />
</a>
