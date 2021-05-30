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
                <th>#</th> <th>First name</th> <th>Last name</th> <th>Email</th> <th>City</th> <th>Phone</th> <th>Created at</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in clients">
                <td>{{ user.id }}</td><td>{{ user.first_name }}</td> <td>{{ user.last_name }}</td> <td>{{ user.email }}</td> <td>{{ user.city }}</td> <td>{{ user.phone }}</td> <td>{{ user.created_at }}</td>
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
      clients: [],
      errors: []
    }
  },
  methods: {
    getData(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/user/clients/list')
        .then((response) => {
          this.clients = response.data
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
