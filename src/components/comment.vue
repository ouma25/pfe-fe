<template>
  <div class="col-m-4">
    <div v-for="comment in comments" class="card mb-4 w-100">
      <div class="card-header bg-white">
        {{ comment.full_name }}
      </div>
      <div class="card-body">
        {{ comment.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    professional: Number
  },
  data(){
    return{
      full_name: null,
      content: null,
      comments: []
    }
  },
  methods: {
    getData(){
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/comments/list', {professional: this.professional}, {headers:{ 'accept':'application/json' }})
      .then((response) => {
      })
    }
  },
  mounter(){
    console.log(professional)
  },
  beforeMount() {
    this.getData()
  },
  mounted(){
    console.log(this.professional)
  }
}
</script>
