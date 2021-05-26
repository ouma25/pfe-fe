<template>
  <div>
    <Header></Header>
    <div id="main_container" class="container-fluid register">
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
          <h3>Welcome</h3>
          <p>You are 30 seconds away from finding the best professional suited for your business & ideas!</p>
          <router-link class="btn btn-outline-primary btn-login text-white" to="/login">Login</router-link><br/>
        </div>
        <div class="col-md-9 register-right">
          <ul class="nav nav-tabs mb-5 nav-justified" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link text-primary active" @click="activate_client" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Client</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" @click="activate_professional" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Professional</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h3 class="register-heading">Register as a client</h3>
              <div class="row register-form">
                <div class="container" v-if="success">
                  <div class="alert alert-success"><b>Success!</b> thanks for joining us.</div>
                </div>
                <div class="container" v-if="error">
                  <div class="alert alert-error"><b>Error!</b> please try again later.</div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input v-model="firstName" type="text" class="form-control" placeholder="First Name" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="password" type="password" class="form-control" placeholder="Password" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="city" type="text" class="form-control" placeholder="City" value="" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control" placeholder="Your Email *" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="phone" type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="confirmation" type="password" class="form-control"  placeholder="Confirm Password" value="" />
                  </div>
                  <input type="button" @click="registerClient" class="btnRegister"  value="Register"/>
                </div>
              </div>
            </div>

            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h3  class="register-heading">Register as a professional</h3>
              <div class="row register-form">
                <div class="container" v-if="success">
                  <div class="alert alert-success"><b>Success!</b> thanks for joining us.</div>
                </div>
                <div class="container" v-if="error">
                  <div class="alert alert-error"><b>Error!</b> please try again later.</div>
                </div>
                <div class="col-md-6">
                  <div class="form-group text-center">
                    <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                      <div class="fileinput-new thumbnail img-circle img-raised">
                        <img v-bind:src="image" style="width: 100%; height:100%" alt="...">
                      </div>
                      <div class="fileinput-preview fileinput-exists thumbnail img-circle img-raised" style=""></div>
                      <div>
									<span class="btn btn-raised btn-round btn-default btn-file">
										<span class="fileinput-new">Add Photo</span>
										<span class="fileinput-exists">Change</span>
										<input type="hidden"><input type="file" ref="file-input" accept="image/*" @change="uploadImage($event)" ><div class="ripple-container"></div></span>
                        <br>
                        <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input v-model="firstName" type="text" class="form-control" placeholder="First Name" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="email" type="email" class="form-control" placeholder="Email" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="phone" type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone" value="" />
                  </div>
                  <div class="form-group">
                    <input type="text" id="birthdate" v-model="birthdate" placeholder="Birthdate (YYYY-MM-DD)" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input v-model="password" type="password" class="form-control" placeholder="Password" value="" />
                  </div>
                  <div class="form-group">
                    <input v-model="confirmation" type="password" class="form-control" placeholder="Confirm Password" value="" />
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="job_title" class="form-control" placeholder="Job title" />
                  </div>
                  <div class="form-group form-file-upload is-empty is-fileinput">
                    <input type="file" class="form-control" ref="file-input" accept="image/*" @change="uploadAttachement($event)" id="inputFile1">
                    <div class="input-group">
                      <input type="text"  class="form-control" placeholder="CIN image...">
                    </div>
                    <span class="material-input"></span>
                  </div>
                  <div class="form-group">
                    <input type="text" id="city" v-model="city" placeholder="City" class="form-control">
                  </div>
                  <input type="button" @click="registerProfessional" class="btnRegister align-self-center justify-content-center" value="Register"/>
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
export default {
  components:
  {
    'Header' : Header,
    'Footer' : Footer
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      password: null,
      confirmation: null,
      city: null,
      type: 'client',
      success: false,
      error: false,
      birthdate: null,
      job_title: null,
      image_cin: null,
      image: 'https://i.ibb.co/QnnZBgP/placeholder.jpg'
    }
  },
  methods: {
    registerClient(){
        if(this.firstName && this.lastName && this.email && this.phone && this.password && this.city && this.confirmation)
        {
          this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/register', {

            first_name: this.firstName,
            last_name: this.lastName,
            city: this.city,
            email: this.email,
            phone: this.phone,
            password: this.password,
            confirmation: this.confirmation,
            type: 'client'

          }).then(function(){ this.success = true; }).catch(function(){ this.error = true });

        }else
        {
          alert('Please fill all the required fields!');
        }
    },
    registerProfessional(){
        if(this.firstName && this.lastName && this.email && this.phone && this.password && this.city && this.confirmation)
        {
          this.$http.post('http://127.0.0.1/pfe_backend/public/api/user/register', {

            first_name: this.firstName,
            last_name: this.lastName,
            city: this.city,
            email: this.email,
            phone: this.phone,
            password: this.password,
            birthdate: this.birthdate,
            job_title: this.job_title,
            confirmation: this.confirmation,
            type: 'professional',
            image: this.image,
            image_cin: this.image_cin

          }).then(function(response){
            this.success = true;
          }).catch(error => this.error = true);
        }
        else
        {
          alert('Please fill all the required fields!');
        }
    },
    activate_client(){
      document.getElementById("home").classList.add("active");
      document.getElementById("home-tab").classList.add("active");
      document.getElementById("home-tab").classList.add("active-tab");

      document.getElementById("profile").classList.remove("active");
      document.getElementById("profile-tab").classList.remove("active");
      document.getElementById("profile-tab").classList.remove("active-tab");
    },
    activate_professional(){
      document.getElementById("profile").classList.add("active");
      document.getElementById("profile-tab").classList.add("active");
      document.getElementById("profile-tab").classList.add("active-tab");

      document.getElementById("home").classList.remove("active");
      document.getElementById("home-tab").classList.remove("active");
      document.getElementById("home-tab").classList.remove("active-tab");
    },
    uploadImage(event) {

      this.$http.get('http://127.0.0.1/pfe_backend/public/sanctum/csrf-cookie', {}, {headers: {
          'Accept' : 'application/json'
        }})
        .then(response => {
          let data = new FormData();
          data.append('name', 'image');
          data.append('image', event.target.files[0]);

          this.$http.post('http://127.0.0.1/pfe_backend/public/api/upload/image', data, {headers:{
              'Content-Type': 'image/png'
          }}).then(response => this.image = 'http://127.0.0.1/pfe_backend/public/storage/images/' + response.data);
      })
    },
    uploadAttachement(event) {
      this.$http.get('http://127.0.0.1/pfe_backend/public/sanctum/csrf-cookie', {}, {headers: {
          'Accept' : 'application/json'
        }})
        .then(response => {
          let data = new FormData();
          data.append('name', 'image');
          data.append('image', event.target.files[0]);

          this.$http.post('http://127.0.0.1/pfe_backend/public/api/upload/image', data, {headers:{
              'Content-Type': 'image/png'
            }}).then(response => this.image_cin = 'http://127.0.0.1/pfe_backend/public/storage/images/' + response.data);
        })
    },
  },
  mounted() {
    if(localStorage.token)
    {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>

<style scoped>
  #main_container
  {
    margin-top: 80px;
  }
  .btn-login
  {
    color: #0062cc !important;
    font-weight: bold;
    background-color: white !important;
  }
  .register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    padding: 3%;
    height: 1000px
  }
  .register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
  }
  .register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
  }
  .register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
  }
  .register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
  }
  @-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
  @keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
  .register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
  }
  .register .register-form{
    padding: 10%;
    margin-top: 10%;
  }
  .btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
  }
  .register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
  }
  .register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  .register .nav-tabs .nav-link:hover{
    border: none;
  }
  .register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }
  .register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
  }
  #home-tab
  {
    color: #0062cc !important;
  }
  .active-tab
  {
    background-color: white !important;
    color: #0062cc !important;
    padding: 5px;
  }
  .inactive-tab
  {
    background-color: #0062cc !important;
    color: white !important;
  }
</style>
