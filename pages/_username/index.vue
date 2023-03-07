<template>
    <div class="container">
        <uiProfileSmall />
        <HomepagePostList :isUser="true" :portfolioData="portfolioData" />
    </div>
</template>

<script>
export default {
    middleware: ["check-auth", "auth"],
    computed: {
        portfolioData() {
            const userId = this.$store.getters.userId;
            const portfolioList = this.$store.getters.portfolioData;
            return portfolioList.filter((portfolioList) => portfolioList.userName == this.$route.params.username);
        },
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

@media screen and (max-width:990px) {
    .container {
        padding: 20px;
        padding-top: 0px;
    }
}

@media screen and (max-width:500px) {
    .container {
        padding: 10px;
    }
}
</style>