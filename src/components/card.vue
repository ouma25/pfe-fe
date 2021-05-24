<template>
    <div class="col-md-4">
      <div class="card card-profile">
        <div class="card-avatar">
          <a href="#pablo">
            <img class="img" src="../assets/faces/camp.jpg">
          </a>
        </div>

        <div class="card-content">
          <h6 class="category text-gray">{{ job }}</h6>

          <h4 class="card-title">{{ first_name }} {{ last_name }}</h4>

          <p class="card-description">{{ description }}</p>
          <a href="#pablo" class="btn btn-info btn-round">Contact</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'job', 'first_name', 'last_name', 'description']
}
</script>

<style>
</style>
