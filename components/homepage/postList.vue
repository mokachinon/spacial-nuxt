<template>
    <div>
        <uiProfileBig />
        <div class="container">
            <uiProfileSmall />
            <uiComponentAdd />
            <HomepagePostItem v-for="item in postList" :key="item" :detail="item"/>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'IndexPage',
    computed: {
        postList() {
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