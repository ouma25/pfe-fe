<template>
  <div>
    <Header></Header>
    <div id="main_container" class="container mt-5">
      <div class="main-body">

        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="main-breadcrumb bg-white">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/dashboard">list</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
        <!-- /Breadcrumb -->

        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img v-if="image" v-bind:src="image" alt="Admin" class="rounded-circle" width="150">
                  <img v-else src="../src/assets/img/cliente.svg" alt="Admin" class="rounded-circle" width="150">
                  <div class="mt-3">
                    <h4>{{ first_name }} {{ last_name }}</h4>
                    <p class="text-secondary mb-1">{{ job_title }}</p>
                    <p class="text-muted font-size-sm">{{ city }}</p>
                    <button class="btn btn-primary" v-if="isme == false">Follow</button>
                    <router-link v-if="isme == false" to="/user/conversation" v-bind:id="id" class="btn btn-outline-primary">Contact</router-link>
                  </div>
                  <div class="mt-3">
                    <div class="rating" v-if="rating == 5">
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                    </div>
                    <div class="rating" v-if="rating == 4">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                    </div>
                    <div class="rating" v-if="rating == 3">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                    </div>
                    <div class="rating" v-if="rating == 2">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star text-danger"></span>
                      <span class="fa fa-star text-danger"></span>
                    </div>
                    <div class="rating" v-if="rating == 1">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star text-danger"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                  <span class="text-secondary">@bootdey</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                  <span class="text-secondary">bootdey</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                  <span class="text-secondary">bootdey</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ first_name }} {{ last_name }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ email }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ phone }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ phone }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">City</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ city }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 ">
              <Comment v-for="comment in comments"
                       :commenter="comment.commenter"
                       :image="comment.image"
                       :full_name="comment.full_name"
                       :text="comment.text"
                       :comment_id="comment.comment_id"
                       :created_at="comment.created_at"></Comment>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  Add a new comment :
                </div>
                <div class="card-body">
                  <textarea v-model="mycomment" class="form-control" placeholder="Please type something here ..." cols="30" rows="5"></textarea>
                  <input @click="create_comment" type="button" class="btn btn-primary float-right" value="Comment">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/header';
import Footer from './components/footer';
import Comment from './components/comment';

export default {
  components: {
    'Header': Header,
    'Footer': Footer,
    'Comment': Comment
  },
  data(){
    return{
      id: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      city: null,
      job_title: null,
      image: null,
      professional: null,
      comments: [],
      mycomment: null,
      stars: null,
      rating: null,
      logged_user: localStorage.id
    }
  },
  methods: {
    show_data()
    {
        this.$http.get('http://127.0.0.1/pfe_backend/public/api/user/details/' + this.$route.params.id)
        .then(function(response){
          this.id = response.data.id;
          localStorage.receiver = response.data.id;
          localStorage.receiverName = response.data.first_name + " " + response.data.last_name;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.email = response.data.email;
          this.phone = response.data.phone;
          this.city = response.data.city;
          this.job_title = response.data.job_title;
          this.image = response.data.image;
          this.professional = response.data.id;
        });
    },
    get_comments()
    {
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/comments/list', { professional: this.$route.params.id }, {headers:{ 'accept':'application/json' }})
      .then((response) => {
        this.comments = response.data
      })
      .catch((error) => { console.log(error) })
    },
    create_comment()
    {
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/comments/add', { user: localStorage.id, professional: this.$route.params.id, text: this.mycomment })
      .then(() => {
        this.get_comments()
        this.mycomment = null;
      })
      .catch((error) => {
        console.log(error)
      })
    },
    rate()
    {
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/evaluation/update', {user: localStorage.id, professional: this.id, stars_number: this.stars})
    },
    get_rating()
    {
      this.$http.post('http://127.0.0.1/pfe_backend/public/api/evaluation/get', { professional: localStorage.receiver })
        .then((response) => {
          this.rating = response.data
        })
    }
  },
  beforeMount() {
    this.show_data()
    this.get_comments()
    this.get_rating()
  },
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
body{
  margin-top:20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
#main_container
{
  margin-top: 100px !important;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3, .my-3 {
  margin-bottom: 1rem!important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100%!important;
}
.shadow-none {
  box-shadow: none!important;
}
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center
}

.rating>input {
  display: none
}

.rating>label {
  position: relative;
  width: 1em;
  font-size: 3vw;
  color: #FFD600;
  cursor: pointer
}

.rating>label::before {
  content: "\2605";
  position: absolute;
  opacity: 0
}

.rating>label:hover:before,
.rating>label:hover~label:before {
  opacity: 1 !important
}

.rating>input:checked~label:before {
  opacity: 1
}

.rating:hover>input:checked~label:before {
  opacity: 0.4
}

h1,
p {
  text-align: center
}

h1 {
  margin-top: 150px
}

p {
  font-size: 1.2rem
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 14px
  }

  p {
    font-size: 12px
  }
}
.fa-star:hover
{
  color: red;
}
</style>
