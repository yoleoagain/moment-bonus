<script lang="ts">
  import ColumnCenter from '../atoms/ColumnCenter.svelte'
  import { Wave } from 'svelte-loading-spinners'
  import { getContext } from 'svelte'

  const { theme } = getContext('theme')
</script>

<ColumnCenter>
  <Wave size="30" color={$theme.palette.highlitsColor} unit="px" />
  <div class="sp">
    <Wave size="30" class="sp" />
  </div>
</ColumnCenter>

<style>
  .sp {
    transform: rotate(180deg);
  }
</style>
