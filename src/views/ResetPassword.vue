<template>
    <div class="d-flex vh-100 justify-content-center align-items-center">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <h2 class="h1" style="font-family:sans-serif">Reset Password</h2>
                </div>
                <div class="card-body">
                    <form class="form" role="form" autocomplete="off" @submit.prevent="handleForm()">
                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input type="password" id="password" class="form-control"
                                v-model="resetPasswordModel.password" required>
                            <span class="form-text small text-muted"> </span>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Retype Password</label>
                            <input type="password" id="password_confirmation" class="form-control" required
                                v-model="resetPasswordModel.password_confirmation">
                            <span class="form-text small text-muted"> </span>
                        </div>

                        <div class="form-group">
                            <label for="otp">OTP</label>
                            <input type="text" id="otp" class="form-control" required maxlength=6 minlength=6
                                v-model="resetPasswordModel.otp">
                            <span class="form-text small text-muted"> </span>
                        </div>

                        <!-- submit btn -->
                        <div class="btn-block ">
                            <!-- /.col -->
                            <div>
                                <button type="submit" class="btn btn-primary btn-block">Reset Password</button>
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- submit btn -->
                    </form>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.login-box -->
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ResetPasswordApi from '../API/Account/ResetPasswordApi'
import ResetPasswordModel from "../Models/Account/ResetPasswordModel"
import AccountService from '../Services/Account/AccountService'
export default {
    data() {
        return {
            resetPasswordModel: new ResetPasswordModel(),
            router: useRouter()
        }
    },
    methods: {
        async handleForm() {
            let response = await AccountService.resetPasswordOnNewAccount(this.resetPasswordModel)
            if (response.success) {
                toastr.success(response.message)
                this.router.push({ name: 'Login' })
            }
        }

    },
    mounted() {
        this.resetPasswordModel.token = this.$route.query.token
        // this.resetPasswordModel.userID = this.$route.query.userID
    },
}
</script>
<style >

</style>
