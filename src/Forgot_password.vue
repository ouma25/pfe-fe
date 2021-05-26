<template>
  <div class="container mt-5 bg-white p-4">
    <h3 class="mb-4 align-self-center text-center">Forgot password</h3>
    <div class="form-group" v-if="success">
      <div class="alert alert-success"><b>Success!</b> a new password has been sent to your email.</div>
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input v-model:value="formData.email" class="form-control" id="email" type="email" />
      <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
    </div>
    <div class="form-group">
      <button @click="forgot_password" class="form-control btn-login btn btn-primary">Forgot password</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      formData:{
        email: null
      },
      errors:{
        email: []
      },
      success: false
    }
  },
  methods:{
    forgot_password(){
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/forgot_password', this.formData, { headers:{'accept':'application/json'} })
          .then((response) => { this.success = true })
          .catch((error) => this.errors = error.data.errors)
    }
  }
}
</script>
