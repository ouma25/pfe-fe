<template>
  <div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <app-menu></app-menu>
      <main class="page-content mt-2">
        <div class="card">
          <div class="card-body">
            <div v-if="success" class="alert alert-success"><b>Success!</b> operation completed successfully!</div>
            <div v-if="error" class="alert alert-danger"><b>Error!</b> error occurred please try again later!</div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th> <th>User</th> <th>Comment</th> <th>Professional</th> <th>Created at</th> <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="comment in comments">
                  <td>{{ comment.id }}</td> <td>{{ comment.user }}</td> <td>{{ comment.professional }}</td> <td>{{ comment.created_at }}</td> <td><input type="button" value="Delete" class="btn btn-danger" /></td>
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
      comments: [],
      success: false,
      error: false
    }
  },
  methods: {
    getData(){
      this.$http.get('https://127.0.0.1/pfe_backend/public/api/comments/list')
      .then((response) => {
        this.comments = response.data
      })
      .catch(() => {
        this.error = true
      })
    }
  }
}
</script>
