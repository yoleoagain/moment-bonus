<script>
import { routes } from 'src/routes';
import NavLink from '../atoms/NavLink.svelte';

</script>
<style>


  nav {
    background-color: #524f4e;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
</style>
<!-- <nav class="row">
    <span class="one column">{'<-'}</span>
    <span class="ten columns">{'Товары'}</span>
    <span class="one column">{'X'}</span>
</nav> -->
<nav>
    <NavLink to="/">Товары</NavLink>
    <NavLink to="withArgs">Акции</NavLink>
    <NavLink to="mutation">Приложение</NavLink>
    <NavLink to="subscription">Настройки</NavLink>
</nav>