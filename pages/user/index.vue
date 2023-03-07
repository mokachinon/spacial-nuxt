<template>
    <div class="container">
    <uiProfileSmall />
        <HomepagePostList :isUser="true" :portfolioData="portfolioData"/>
    </div>
</template>

<script>
export default {
    middleware: ["check-auth", "auth"],
    computed: {
        portfolioData() {
            const userId = this.$store.getters.userId;
            const portfolioList = this.$store.getters.portfolioData;
            return portfolioList.filter((portfolioList) => portfolioList.userId == userId);
        },
    }
}
</script>

<style></style>