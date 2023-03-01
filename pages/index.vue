<template>
  <HomepagePostList />
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getPortfolioList");
  },
}
</script>