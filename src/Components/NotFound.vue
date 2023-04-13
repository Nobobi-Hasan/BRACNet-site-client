<template lang="">
    <div class="d-flex vh-100 justify-content-center align-items-center">
        <!-- Main content -->
        <section class="content">
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>

                <div class="error-content">
                    <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                    <p>
                        We could not find the page you were looking for.
                        please go back to any valid url or you may <router-link :to="{name: 'Login'}">Login</router-link>
                    </p>
                </div>
                <!-- /.error-content -->
            </div>
            <!-- /.error-page -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
