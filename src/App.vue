<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="topnav">
    <RouterLink class="active" to="/">Peliculas</RouterLink>
    <RouterLink  to="/">Cines</RouterLink>
    <RouterLink  to="/">Promociones</RouterLink>
    <RouterLink  to="/">Confiteria</RouterLink>
    <RouterLink  to="/">Login</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
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
</style>
