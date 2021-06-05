<template>
  <div class="card">
    <div class="card-header bg-white">
      <img v-if="!image" style="width:35px;" class="img card-img-left mr-3 " height="30" width="30" src="../assets/img/cliente.svg" alt="">
      <img v-else style="width:35px;" class="img card-img-left mr-3 " height="30" width="30" :src="image" alt="">
      <button v-if="deleted" class="btn btn-danger float-right" @click="remove">X</button>
      {{ full_name }}
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
  props: ['id', 'comment_id', 'full_name', 'text', 'created_at', 'image', 'id_comment', 'commenter'],
  data(){
    return{
      deleted: false
    }
  },
  methods:{
    remove()
    {
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/comments/delete', {id: this.comment_id})
      .then(() => {
        this.$router.go();
      })
    }
  },
  beforeMount() {
    if(localStorage.id == this.commenter)
    {
      this.deleted = true
    }
  }
}
</script>
