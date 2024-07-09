<!-- Login.vue -->
<template>
  <div class="row">
    <div class="col-6 offset-4">

      <div class="contaaainer mt-4">
        <div class="card cardigan">
          <br>
          <div class="row">
            <!-- <img src="../assets/cinee.png" width="200px"> -->
            <div class="col-6 offset-4">
              <img src="/src/assets/cinee.png" width="100px">
    
            </div>
          </div>
          <br>
          <form @submit.prevent="login">
            <div class="mb-3">
              <div class="row">
                <div class="col-10 offset-1">
                  <h5 class="text-light">Correo</h5>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-10 offset-1">
                  <br>
                  <h5 class="text-light">Contraseña</h5>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 col-12 mx-auto">
              <hr>
              <button type="submit" class="btn btn-success me-2">Iniciar Sesión</button>
                <hr>
            </div>
      
            <div class="d-grid gap-2 col-12 mx-auto">
                  <router-link class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#registerModal">¡Unete a SmartClub!</router-link>
                  <!-- <button type="button" class="btn btn-warning" @click="register">
                      Registrarme
                  </button> -->
            </div>
            <br>
          </form>
          <!-- Modal de Registro -->
          <div class="modal fade custom-modal" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
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
                      <div class="row">
                        <button type="submit" class="btn btn-success">Registrarme</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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

<style>
.contaaainer {
  max-width: 400px;
}

.cardigan{
  background-color: #1C3230;
}
.custom-modal .modal-content {
  background-color: #1C3230; /* Color de fondo del modal */
  color: #ffffff;           /* Color del texto */
}

.custom-modal .modal-header,
.custom-modal .modal-footer {
  border-color: #1C3230;   /* Color del borde de la cabecera y pie del modal */
}

</style>
