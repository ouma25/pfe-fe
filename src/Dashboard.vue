<template>
  <div>
    <Header></Header>
    <div class="container" id="body">
      <h2>Pick a professional and start converting ideas to real world!</h2>
      <hr>
        <h4>Filter by</h4>
      <br>
      <div class="row">
        <div class="col-md-3">

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
    }
  },
  data(){
    return {
      data: []
    }
  },
  components: {
    'Header' : Header,
    'Footer': Footer,
    'Card': Card
  },
  mounted() {
    this.get_data();
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
