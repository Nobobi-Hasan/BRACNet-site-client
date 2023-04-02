<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav d-flex align-items-center" style="gap: 20px">
      <li class="nav-item">
        <span class="nav-link" data-widget="pushmenu" role="button"><i class="fas fa-bars"></i></span>
      </li>
      <li class="nav-item">
        <span class="text-lg font-weight-bold">{{ loggedUserName }}</span>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

      <li class="nav-item dropdown">
        <!-- <span>Shihab</span> -->
        <span class="nav-link d-flex justify-content-center align-items-center" data-toggle="dropdown">
          <img src="/assets/dist/img/avatar4.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="width: 33px; cursor: pointer" />
        </span>
        <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
          <router-link class="dropdown-item" :to="{ name: profile }">
            <i class="fas fa-envelope mr-2"></i> Profile
          </router-link>
          <!-- <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" :to="{ name: 'Change Password' }">
            <i class="fas fa-key mr-2"></i> Change Password
          </router-link> -->
          <div class="dropdown-divider"></div>
          <span @click="logout()" class="dropdown-item" style="cursor: pointer">
            <i class="fas fa-sign-out-alt mr-2"></i> Logout
          </span>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
import { useRouter } from 'vue-router';
import AccountService from '../Services/Account/AccountService';
import Data from '../Data/Data';

export default {
  data() {
    return {
      router: useRouter(),
      profile: '',
      loggedUserName: '',
    }
  },
  methods: {
    async logout() {
      let response = await AccountService.logout()
      if (response.success) {
        toastr.success("Logout successful")
        localStorage.removeItem("user");
        this.router.push({ name: "Login" })
      }
    },
  },
  async mounted() {
    let userId = AccountService.loggedInUserId()
    // this.profile = AccountService.selectProfile()
    this.profile = 'Home'
    this.loggedUserName = await AccountService.loggedUserName()

  }
};
</script>

<style>

</style>