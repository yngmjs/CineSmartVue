<script>
export default {
  data() {
    return {
      sucursales: [
        { nombre: 'Sucursal Santiago Centro', direccion: 'Av. Libertador Bernardo O\'Higgins 1234, Santiago', imagen: 'https://via.placeholder.com/300x200?text=Santiago+Centro' },
        { nombre: 'Sucursal Providencia', direccion: 'Av. Providencia 5678, Providencia', imagen: 'https://via.placeholder.com/300x200?text=Providencia' },
        { nombre: 'Sucursal Las Condes', direccion: 'Av. Apoquindo 9012, Las Condes', imagen: 'https://via.placeholder.com/300x200?text=Las+Condes' },
        { nombre: 'Sucursal Viña del Mar', direccion: 'Av. Libertad 3456, Viña del Mar', imagen: 'https://via.placeholder.com/300x200?text=Viña+del+Mar' },
        { nombre: 'Sucursal Concepción', direccion: 'Av. O\'Higgins 7890, Concepción', imagen: 'https://via.placeholder.com/300x200?text=Concepción' }
      ]
    };
  }
};
</script>

<template>
<div class="container">
    <h1 class="text-white">Sucursales</h1>
    <hr>
    <div class="row">
        <div v-for="sucursal in sucursales" :key="sucursal.nombre" class="col-md-4 mb-4">
            <div class="card">
                <img :src="sucursal.imagen" class="card-img-top" :alt="sucursal.nombre">
                <div class="card-body">
                    <h5 class="card-title">{{ sucursal.nombre }}</h5>
                    <p class="card-text">{{ sucursal.direccion }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
</template>

<style scoped>
.card {
    background-color: #343a40;
    color: white;
    border: none;
}
.card-body {
    padding: 20px;
}
.card-title {
    font-size: 1.25rem;
}
.card-text {
    font-size: 1rem;
}
.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
