<!-- Login.vue -->
<template>
    <div class="container mt-4">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
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
        <button type="submit" class="btn btn-primary me-2">Iniciar Sesión</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#registerModal">
          Registrarme
        </button>
      </form>
  
      <!-- Modal de Registro -->
      <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="registerModalLabel">Registrarme</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="register">
                <div class="mb-3">
                  <label for="registerEmail" class="form-label">Correo</label>
                  <input
                    type="email"
                    class="form-control"
                    id="registerEmail"
                    v-model="registerEmail"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="registerPassword" class="form-label">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="registerPassword"
                    v-model="registerPassword"
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
                <button type="submit" class="btn btn-primary">Registrarme</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        registerEmail: "",
        registerPassword: "",
        confirmPassword: "",
      };
    },
    methods: {
      login() {
        // Aquí iría la lógica para iniciar sesión
        console.log("Iniciar sesión con", this.email, this.password);
      },
      async register() {
        if (this.registerPassword !== this.confirmPassword) {
          alert("Las contraseñas no coinciden");
          return;
        }
        // Aquí iría la lógica para registrarse
        console.log("Registrarse con", this.registerEmail, this.registerPassword);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
  }
  </style>
  