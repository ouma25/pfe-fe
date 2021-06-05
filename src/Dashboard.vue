<template>
  <div>
    <Header></Header>
    <div class="container" id="body">
      <h2>Pick a professional and start converting ideas to real world!</h2>
      <hr>
        <h4>Filter by</h4>
      <br>
      <div class="row">
        <div class="col-md-2 mr-4">
          <label for="City">City</label>
          <select class="form-control" @change="fn_filter_city" v-model="filter_city" id="City">
            <option value="" selected>All</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Berrechid">Berrechid</option>
            <option value="Tangier">Tangier</option>
            <option value="Rabat">Rabat</option>
            <option value="El jadida">El jadida</option>
          </select>
          <label for="Service">Service</label>
          <select @change="fn_filter_service" v-model="filter_service" id="Service" class="form-control">
            <option value="" selected>All</option>
            <option v-for="service in services" :value="service.id">{{ service.name }}</option>
          </select>
        </div>
        <div class="col-md-9">
          <div class="row">
              <Card v-for="item in data" v-bind:first_name="item.first_name" v-bind:last_name="item.last_name" v-bind:job="item.job_title" v-bind:image="item.image" v-bind:id="item.id" ></Card>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/header'
import Footer from "./components/footer";
import Card from './components/card';

export default {
  methods: {
    get_data(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/user/professionals/list').then(function(response){
        this.data = response.data;
      });
    },
    get_services(){
      this.$http.get('http://127.0.0.1/pfe_backend/public/api/services/list').
        then((response) => {
          this.services = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    fn_filter_city(){
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/professionals/filter', {city: this.filter_city}).then(function(response){
        this.data = response.data;
      })
      .catch((error) => console.log(error))
    },
    fn_filter_service(){
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/professionals/filter', {service: this.filter_service}).then(function(response){
        this.data = response.data;
      })
      .catch((error) => console.log(error))
    }
  },
  data(){
    return {
      data: [],
      services: [],
      filter_service: "",
      filter_city: ""
    }
  },
  components: {
    'Header' : Header,
    'Footer': Footer,
    'Card': Card
  },
  mounted() {
    if(!localStorage.token)
    {
      this.$router.push({ path: '/login' })
    }
    this.get_data()
    this.get_services()
  }
}

</script>

<style>
#body
{
  margin-top: 150px
}
.fa-star
{
  background-image: url('./assets/icons/star-solid.svg');
}
</style>
