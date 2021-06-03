<template>
    <div class="col-md-4">
      <div class="card card-profile">
        <div class="card-avatar">
          <a href="#pablo">
            <img class="img" v-if="image" :src="image">
            <img class="img" v-else src="../assets/img/cliente.svg">
          </a>
        </div>
        <div class="card-content">
          <h6 class="category text-gray">{{ job }}</h6>
          <h4 class="card-title">{{ first_name }} {{ last_name }}</h4>
          <b v-if="isme" class="bg-success text-white p-2 rounded-top rounded-bottom">Me</b>
          <p class="card-description">{{ description }}</p>
          <router-link v-if="isme == false" class="btn btn-info btn-round" :to="{ name: 'profile', params: { id: id } }">Contact</router-link>
          <router-link v-if="isme" class="btn btn-info btn-round" :to="{ name: 'profile', params: { id: id } }">My profile</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'job', 'first_name', 'last_name', 'description', 'id'],
  computed:{
    isme(){
      if( localStorage.id == this.id )
      {
        return true
      }
      else
      {
        return false
      }
    }
  }
}
</script>

<style>
</style>
