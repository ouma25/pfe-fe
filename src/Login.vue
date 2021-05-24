<template>
  <div class="container mt-5">
    <h3 class="mb-4 align-self-center text-center">Login</h3>
    <h6 v-if="error" class="alert alert-danger"><b>Invalid credentials!</b> please try again later.</h6>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input v-model:value="email" class="form-control" id="email" type="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model:value="password" type="password" id="password" class="form-control">
    </div>
    <div class="form-group">
      <button @click="login" class="form-control btn-login btn btn-primary">Log In</button>
    </div>
    <hr>
    <div>
      <router-link class="btn btn-register btn-white" to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>

  import App from './App';

  export default {
    data: function()
    {
      return {
        email: null,
        password: null,
        logged: false,
        token: null,
        error: false
      }
    },
    methods: {
      login()
      {
        if(this.email != null && this.password != null)
        {
          this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/login', {email: this.email, password: this.password})
            .then(function(response){
              if(response)
              {
                App.token = response.data;
                this.$router.push('dashboard');
              }
            });
        }
        else
        {
          alert('Please fill all the required fields first!');
        }
      }
    },
    mounted() {
      if(App.token)
      {
        this.$router.push('dashboard');
      }

      console.log(App.token);
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
