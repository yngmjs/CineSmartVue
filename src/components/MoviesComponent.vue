<script>
import axios from 'axios';

export default {
    name: 'app',
    data() {
        return {
            dato: '',
            imagen: '',
            ListaBird: [],  // Almacenará todos los registros de aves obtenidos de la API
            aux: ''
        }
    },
    computed: {
        firstTenBirds() {
            return this.ListaBird.slice(0, 4);  // Retorna los primeros 10 elementos
        }
    },
    methods: {
        getBird() {
            axios.get('https://aves.ninjas.cl/api/birds/76-buteo-albigula')
                .then(response => {
                    console.log("get cartas");
                    console.log(response.data.message);
                    // No está claro qué es `vue.cartas`, parece ser un error
                    // Debería ser algo como this.cartas = response.data.message si 'cartas' es parte de tu estado
                })
                .catch(error => {
                    console.error("Error fetching specific bird:", error);
                });
        }
    },
    mounted() {
        axios.get('http://localhost:8080/api/v1/pelicula')
            .then(response => {
                console.log("get Movies");
                this.ListaBird = response.data;  // Asegúrate de que la API realmente devuelve un array aquí
                this.aux = JSON.stringify(this.ListaBird);  // Ayuda a ver los datos en consola
                console.log(this.ListaBird);
                console.log(response.data);
                console.log("---------------------------");
            })
            .catch(error => {
                console.error("Error fetching birds:", error);
            });
    }
};
</script>

<template>
    <div class="container">
        <h1 class="text-white">Peliculas</h1>
        <hr>
        <div class="row">
            <div v-for="item in firstTenBirds" :key="item.id" class="col-sm-4"> <!-- Asegúrate de usar una clave única como 'item.id' -->
                <div class="card" style="margin-bottom: 10px;">
                    <!-- Puedes usar 'item.images.main' o la propiedad adecuada de tu objeto 'item' para la imagen -->
                    <img class="imagee" src="https://picfiles.alphacoders.com/349/thumb-1920-349440.jpg" alt="Imagen de la ave" style="width:250px !important; height: 400px !important;">
                    <div class="card-body">
                        <h2>{{ item.titulo }}</h2>
                        <h7>{{ item.sinopsis }}</h7>
                        <h5>Duracion: {{item.duracion}} - Idioma: {{ item.idioma }}</h5>
                        <!-- <h2>{{ item.name.spanish }}</h2> -->
                         <!-- Usar el nombre español del ave, o ajusta según tus datos -->
                        <button type="button" class="btn btn-danger">Ver Horarios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card {
  /* Add shadows to create the "card" effect */
  background-color: #333;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */

.imagee{
    margin-top: 16px;
    margin-left: 16px;
}
</style>