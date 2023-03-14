<template>
  <div class="container">
    <UiProfileSmall />
    <UiComponentAdd v-if="$store.getters.isAuthenticated" />
    <HomepagePostList :portfolioData="portfolioList"/>
  </div>
</template>

<script>
export default {
  middleware: 'check-auth',
  async created() {
    await this.$store.dispatch("getPortfolioList");
  },
  computed: {
    portfolioList() {
      return this.$store.state.portfolioList
    }
  }
}
</script>


<style scoped>
.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}
</style>