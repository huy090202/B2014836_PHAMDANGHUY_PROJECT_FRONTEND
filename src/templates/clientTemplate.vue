<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<template>
  <Header />

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<style lang="scss" scoped></style>
