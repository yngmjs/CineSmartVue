<script setup>
//import SucursalComponentVue from '@/components/Sucursales/SucursalComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import PromocionComponentVue from '@/components/Promociones/PromocionComponent.vue'
import MoviesComponent from '../components/MoviesComponent.vue'
</script>

<template>
  <main class="mein">
    <!-- <TheWelcome /> -->
    <br>
    <MoviesComponent />
    <!-- <SucursalComponentVue></SucursalComponentVue> -->
    <!-- <PromocionComponentVue></PromocionComponentVue> -->
     <FooterComponentVue></FooterComponentVue>
  </main>
</template>

<style>
.mein{
    background-color: #69A84B;
}
</style>
