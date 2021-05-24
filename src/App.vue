<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      token: null
    }
  }
}
</script>

<style>
@import 'assets/css/materialkit.css';
</style>
