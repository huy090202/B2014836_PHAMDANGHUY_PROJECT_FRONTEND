<script>
    import HeaderAdmin from "@/components/headerAdmin.vue";
    import MainLeftAdmin from "@/components/mainLeftAdmin.vue";

    export default {
        components: {
            HeaderAdmin,
            MainLeftAdmin
        }
    };
</script>

<template>
    <div class="main">
        <HeaderAdmin />
        <main class="container mt-3">
            <div class="row">
                <div class="col-3" >
                    <MainLeftAdmin />
                </div>

                <div class="col-9">
                    <router-view />
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.main {
    min-height: 100vh;
    position: relative;
    background-color: #f6f6f7;
}

.main .col-3 {
    height: auto;
    overflow: initial;
}

.main .col-9 {
    height: auto;
    overflow: initial;
}

</style>