<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <div class="topnav">
    <RouterLink class="active" to="/">Peliculas</RouterLink>
    <RouterLink  to="/">Sucursales</RouterLink>
    <RouterLink  to="/">Promociones</RouterLink>
    <RouterLink  to="/">Confitería</RouterLink>
    <RouterLink  to="/">SmartClub</RouterLink>
    <RouterLink  to="/">Login</RouterLink>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./assets/s.png" width="70px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <RouterLink class="nav-link" aria-current="page" to="/">Peliculas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/sucursales">Sucursales</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/confiteria">Confitería</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SmartClub
            </RouterLink>
            <ul class="dropdown-menu nab" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item text-white" to="/promociones">Promociones</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item text-white" href="#">Preventas</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Iniciar Sesión</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar Pelicula" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style>
#app {
  background-color: #69A84B;
}
body{
  margin: 0; 
  padding: 0;
  background-color: #69A84B;
}
/* Add a black background color to the top navigation */
.topnav {
  background-color: #69A84B;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.nab{
  background-color: #69A84B;
}
</style>
