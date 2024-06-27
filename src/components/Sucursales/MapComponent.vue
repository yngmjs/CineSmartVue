<template>
    <div ref="map" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import { Loader } from "@googlemaps/js-api-loader";
  
  export default {
    props: {
      address: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        map: null
      };
    },
    mounted() {
      this.loadMap();
    },
    methods: {
      loadMap() {
        const loader = new Loader({
          apiKey: "TU_API_KEY_DE_GOOGLE_MAPS",
          version: "weekly"
        });
  
        loader.load().then(() => {
          this.geocodeAddress(this.address);
        });
      },
      geocodeAddress(address) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === "OK") {
            this.map = new google.maps.Map(this.$refs.map, {
              center: results[0].geometry.location,
              zoom: 14
            });
            new google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes ajustar el estilo del contenedor del mapa según sea necesario */
  </style>
  