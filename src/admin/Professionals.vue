<template>
  <div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <app-menu></app-menu>
      <main class="page-content mt-2">
        <div class="card">
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>#</th> <th>Image</th> <th>First name</th> <th>Last name</th> <th>Email</th> <th>City</th> <th>Phone</th> <th>Birthdate</th> <th>Job title</th> <th>Created at</th> <th>Details</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in professionals">
                <td>{{ user.id }}</td><td><img class="img img-circle" v-bind:src="user.image"></td> <td>{{ user.first_name }}</td> <td>{{ user.last_name }}</td> <td>{{ user.email }}</td> <td>{{ user.city }}</td> <td>{{ user.phone }}</td> <td>{{ user.birthdate }}</td> <td>{{ user.job_title }}</td> <td>{{ user.created_at }}</td> <td>
                <input type="button" value="Details" class="btn btn-outline-success"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import menu from './components/Menu'
export default {
  components:{
    'app-menu': menu
  },
  data(){
    return{
      professionals: [],
      errors: []
    }
  },
  methods: {
    getData(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/user/professionals/list')
      .then((response) => {
        this.professionals = response.data
      })
      .catch((error) => {
        this.errors = error.data.errors
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style>

</style>
