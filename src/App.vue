<template>
  <component :is="layout()">
    <router-view :key="$route.path"></router-view>
  </component>
</template>

<script >
  import AdminLayout from "./Layouts/AdminLayout.vue";
  import AppService from "./Services/App/AppService";

  export default {
    components: { AdminLayout },
    methods: {
      layout() {
        AppService.setAxiosToken()
        return AppService.layoutGenerator();
      }
    }
  };

  
</script>


<style scoped>

</style>
