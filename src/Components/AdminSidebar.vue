<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <span class="brand-link">
      <img src="/assets/dist/img/BracnetLogo.png" alt="BracnetLogo" class="brand-image img-circle elevation-3"
        style="opacity: 0.8" />
      <span class="brand-text font-weight-bold">BRACNet</span>
    </span>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"
          id="nav_ul">
          <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              <i class="nav-icon fas fa-home mr-2"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'JobAdd' }" class="nav-link">
              <i class="nav-icon fas fa-plus mr-2"></i>
              <p>Add Job</p>
            </router-link>
          </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
#nav_ul a.router-link-active,
.router-link-exact-active {
  background-color: #007bff;
  color: #fff;
}
</style>