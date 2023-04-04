<template lang="">
  <div class="d-flex vh-100 justify-content-center align-items-center">
      <div class="login-box">
          <!-- /.login-logo -->
          <div class="card card-outline card-primary">
              <div class="card-header text-center">
              <h2 class="h1" style="font-family:sans-serif">BRACNet</h2>
              </div>
              <div class="card-body">
                  <form @submit.prevent="handleForm()">
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Email or Mobile" v-model="loginModel.userID" required>
                          <div class="input-group-append">
                              <div class="input-group-text">
                                  <span class="fas fa-envelope"></span>
                              </div>
                          </div>
                      </div>
                      <div class="input-group mb-3">
                          <input type="password" class="form-control" placeholder="Password" v-model="loginModel.password" required>
                          <div class="input-group-append">
                              <div class="input-group-text">
                                  <span class="fas fa-lock"></span>
                              </div>
                          </div>
                      </div>

                      <!-- submit btn -->
                      <div class="btn-block ">
                          <!-- /.col -->
                          <div>
                              <button type="submit" class="btn btn-primary btn-block">Sign In</button >
                          </div>
                          <!-- /.col -->
                      </div>
                      <!-- submit btn -->
                      

                      <!-- remenber me and forgot pass btn -->
                      <div class="row mt-3">
                          <div class="col-12 forgot-pass">
                              <div class="text-right">
                                  <p class="mb-1">
                                      <router-link :to="{ name: 'Forgot Password' }" class="">
                                          forgot password?
                                      </router-link>
                                  </p>
                              </div>
                          </div>
                      </div>
                      <!-- remenber me and forgot pass btn -->
                  </form>
                  <hr>

              </div>
              <!-- /.card-body -->
          </div>
          <!-- /.card -->
      </div>
      <!-- /.login-box -->
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import LoginModel from '../Models/Account/LoginModel';
import AccountService from '../Services/Account/AccountService';
export default {
  data() {
      return {
          loginModel: new LoginModel(),
          router: useRouter()
      }
  },
  methods: {
      async handleForm() {
          let response = await AccountService.validateUserLogin(this.loginModel)
          if (response.success) {
              AccountService.saveUserDetailsToLocalStorage(response)
              toastr.success(response.message)
              this.router.push({ name: 'Home' })
          } else {
              toastr.error(response.message)
          }
      }
  },
}
</script>
<style scoped>
.fb {
  width: 48%;
  float: left;
}
.google {
  width: 48%;
  float: right;
}
.forgot-pass {
  text-align: right;
}
</style>


