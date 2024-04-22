<script>
    import MainLeftUserInfo from "@/components/mainLeftUserInfo.vue";

    export default {
        components: {
            MainLeftUserInfo
        }
    };
</script>

<template>
    <div class="main">
        <main class="container mt-3">
            <div class="row">
                <div class="col-3" >
                    <MainLeftUserInfo />
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
    min-height: calc(100vh - 240px);
    position: relative;
    background-color: #fff;
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