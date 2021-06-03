<template>
  <div class="card">
    <div class="card-header bg-white">
      <img style="width:35px;" class="img card-img-left mr-3 " height="30" width="30" src="../assets/img/cliente.svg" alt=""> {{ full_name }}
    </div>
    <div class="card-body">
      {{ text }}
    </div>
    <div class="card-footer">
      <h6 class="float-right">{{ created_at }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ['full_name', 'text', 'created_at']
}
</script>
