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
                <th>#</th> <th>Name</th> <th>Description</th> <th>Type</th> <th>Created at</th> <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="service in services">
                <td>{{ service.id }}</td> <td>{{ service.name }}</td> <td>{{ service.description }}</td> <td>{{ service.type }}</td> <td>{{ service.created_at }}</td> <td><button class="btn btn-danger">Delete</button></td>
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
      services: [],
      errors: [],
      success: false,
      error: false
    }
  },
  methods:{
    getData(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/service/list')
      .then((response) => {
        this.services = response.data
      })
      .catch((error) =>{
        this.errors = error.data.errors
      })
    },
    delete(id){
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/service/delete/', { id: id })
      .then(() => {
        this.success = true
      })
      .catch(() => {
        this.error = true
      })
    }
  }
}
</script>
