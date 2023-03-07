<template>
    <div class="container">
    <uiWaitingList v-if="isLoading" />
    <AdminPostForm v-else :portfolioData="portfolioDetail" />
    </div>
</template>

<script>
export default {
    middleware: ["check-auth", "auth"],
    data() {
        return {
            isLoading: true,
        }
    },
    async created() {
        await this.$store.dispatch(
            "getPortfolioDetail",
            this.$route.params.detail
        )
        if (this.portfolioDetail.userId !== this.userData.userId) {
            this.$router.push("/")
        } else {
            this.isLoading = false;
        }
    },
    computed: {
        portfolioDetail() {
            return this.$store.state.portfolioDetail
        },
        userData() {
            return this.$store.state.userData
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