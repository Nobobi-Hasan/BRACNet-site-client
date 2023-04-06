<template lang="">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="d-flex justify-content-center align-items-center" style="height:80vh">
                    <div class="col-md-6">
                        <span class="anchor" id="formChangePassword"></span>
                        <!-- form card change password -->
                        <div class="card card-outline-secondary">
                            <div class="card-header">
                                <h3 class="mb-0">Change Password</h3>
                            </div>
                            <div class="card-body">
                                <form class="form" role="form" autocomplete="off" @submit.prevent="handleForm()">
                                    <div class="form-group" >
                                        <label for="inputPasswordOld">Current Password</label>
                                        <input type="password" class="form-control" v-model="changePasswordModel.currentPassword"  required >
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPasswordNew">New Password</label>
                                        <input type="password" class="form-control"  v-model="changePasswordModel.newPassword" required >
                                        <span class="form-text small text-muted">
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPasswordNewVerify">Retype Password</label>
                                        <input type="password" class="form-control"  @focusout="matchPassword" v-model="changePasswordModel.retypePassword" required>
                                        <span class="form-text small text-muted">
                                        </span>
                                    </div>

                                     <!-- submit btn -->
                                    <div class="btn-block ">
                                        <!-- /.col -->
                                        <div>
                                            <button type="submit" class="btn btn-primary btn-block" >Change Password</button>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- submit btn -->
                                </form>
                            </div>
                        </div>
                        <!-- /form card change password -->
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
import ChangePasswordModel from '../Models/Account/ChangePasswordModel';
import AccountService from '../Services/Account/AccountService';

export default {
    data() {
        return {
            changePasswordModel: new ChangePasswordModel(),
            // retypePassword: ''
        }
    },
    methods: {
        async handleForm() {
            let response = await AccountService.changePassword(this.changePasswordModel)
            if (response.success) {
                toastr.success(response.message)
            }
            else if (response.success == false) {
                toastr.warning(response.message)
            }
        }
    },
}
</script>
<style >

</style>
