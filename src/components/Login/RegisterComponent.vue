<!-- Register.vue -->
<template>
  <div class="container mt-4">
    <h2>Registrarme</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary me-2">Registrarme</button>
      <button type="button" class="btn btn-secondary" @click="login">
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      // Aquí iría la lógica para registrarse
      console.log("Registrarse con", this.email, this.password);
    },
    login() {
      // Navegar a la página de inicio de sesión (puede ser una ruta diferente en tu router)
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
