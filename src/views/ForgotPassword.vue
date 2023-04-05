<template lang="">
    <div class="d-flex vh-100 justify-content-center align-items-center">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <h2 class="h1" style="font-family:sans-serif">Forgot Password</h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="handleForm()">
                        <div class="input-group mb-3">
                            <input type="userID" class="form-control" placeholder="Enter email address" v-model="forgotPasswordModel.userID" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>

                        <!-- submit btn -->
                        <div class="btn-block ">
                            <!-- /.col -->
                            <div>
                                <button type="submit" class="btn btn-primary btn-block">Continue</button>
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- submit btn -->

                        <!-- go to login link -->
                        <div class="go-login ">
                            <router-link :to="{ name: 'Login' }" class="">
                                Back to Login
                            </router-link>
                        </div>
                        <br>
                        <!-- go to login link -->
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
import ForgotPasswordModel from '../Models/Account/ForgotPasswordModel';
import { useRouter } from 'vue-router';
import AccountService from '../Services/Account/AccountService';

export default {
    data() {
        return {
            forgotPasswordModel: new ForgotPasswordModel(),
            router: useRouter()
        }
    },
    methods: {
        async handleForm() {
            let response = await AccountService.sendEmailToUser(this.forgotPasswordModel)
            console.log(response)
            if (response?.success == false) {
                toastr.warning(response.message)
            }
            if (response?.result == true) {
                toastr.success('We have set you an email with reset link.')
                this.router.push({ name: 'Login' })
            }
        }
    },
}
</script>

<style scoped>
.go-login {
    float: right;
    margin-top: 1rem;
}
</style>
