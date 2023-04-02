<template lang="">
    <div class="col-lg-3 col-6">
        <!-- small box -->
        <div :class="'small-box bg-'+cardColor">
            <div class="inner">
                <h3>{{ value }}</h3>

                <p>{{ title }}</p>
            </div>
            <div class="icon">
                <i :class="iconClass"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'value',
        'iconClass',
        'cardColor'
    ]
}
</script>
<style lang="">

</style>
