<!-- Login.vue -->
<template>
  <div class="container mt-4">
    <form @submit.prevent="login">
      <div class="mb-3">
        <h4 class="text-light">Correo</h4>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <h4 class="text-light">Contraseña</h4>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="row">
          <button type="submit" class="btn btn-primary me-2">Iniciar Sesión</button>
          <br>
      </div>

      <div class="row">
            <router-link to="/register" class="btn btn-warning">Registrarme</router-link>
            <!-- <button type="button" class="btn btn-warning" @click="register">
                Registrarme
            </button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Aquí iría la lógica para iniciar sesión
      console.log("Iniciar sesión con", this.email, this.password);
    },
    register() {
      // Navegar a la página de registro (puede ser una ruta diferente en tu router)
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
