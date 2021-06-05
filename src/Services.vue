<template>
  <div>
    <Header></Header>
    <br><br><br>
    <div class="row mt-5 container-fluid justify-content-center">
      <div v-for="service in services" class="col-md-4 m-4">
        <div class="card">
          <div class="card-header">{{ service.name }}</div>
        </div>
        <div class="card-footer">
          <router-link to="/dashboard" class="btn btn-primary">Details</router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
export default {
  components:
    {
      'Header' : Header,
      'Footer' : Footer
    },
  data(){
    return{
      services: []
    }
  },
  methods:{
    get_services(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/services/list').
      then((response) => {
        this.services = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.get_services()
  }
}
</script>
