<template>
    <Navbar />
    <AdminSidebar />
    <slot></slot>
    <Footer />
</template>

<script>
import AdminSidebar from '../Components/AdminSidebar.vue';
import Navbar from '../Components/Navbar.vue';
import Footer from '../Components/Footer.vue';
export default {
    components: { AdminSidebar, Navbar, Footer }
}
</script>

<style>
</style>