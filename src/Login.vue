<template>
  <div class="container mt-5">
    <h3 class="mb-4 align-self-center text-center">Login</h3>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input v-model:value="formData.email" class="form-control" id="email" type="email" />
      <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model:value="formData.password" type="password" id="password" class="form-control">
      <p class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
    </div>
    <div class="form-group">
      <button @click="login" class="form-control btn-login btn btn-primary">Log In</button>
    </div>
    <hr>
    <div>
      <router-link class="btn btn-register btn-white" to="/register">Register</router-link>
    </div>
    <router-link class="align-self-center" to="/forgot_password">Forgot password</router-link>
  </div>
</template>

<script>
  export default {
    data()
    {
      return {
        formData:{
          email: null,
          password: null,
          device_name: 'browser'
        },
        errors:{
          email: [],
          password: []
        }
      }
    },
    methods: {
      login()
      {
        this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/login', this.formData, {headers:{ 'accept':'Application/json' }})
            .then((response) => {
              localStorage.token = response.data
              this.$http.get('http://127.0.0.1/pfe_backend/public/api/user/details?email=' + this.formData.email, {}, {headers:{ 'accept':'Application/json' }})
                .then((response) => {
                  localStorage.id = response.data.id
                  localStorage.email = response.data.email
                })
              this.$router.push({ path: '/dashboard' })
            })
            .catch((error) => { this.errors = error.data.errors })
      }
    },
    mounted() {
      if(localStorage.token)
      {
        this.$router.push({ path: '/dashboard' })
      }
    }
  }
</script>

<style scoped>
.btn-login
{
  background-color: #0062cc !important;
}
.btn-login:hover
{
  background-color: #0062cc !important;
}
.container
{
  background-color: white;
  padding: 50px
}
.btn-register
{
  width: 100%;
  color: #0062cc;
}
.btn-register:hover
{
  color: #0062cc;
  border: solid 1px #0062cc !important;
}
</style>
