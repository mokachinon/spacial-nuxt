<template>
    <div>
        <!-- <uiProfileBig v-if="$store.getters.isAuthenticated"/> -->
        <div class="container" >
            <!-- <uiProfileSmall v-if="$store.getters.isAuthenticated"/>
            <div class="post" v-else>
                <div class="text">
                    <blockquote>
                        <nuxt-link tag="a" class="input_area" to="/user/login">Login?</nuxt-link>
                    </blockquote>
                </div>
            </div>
            <uiComponentAdd /> -->
            <HomepagePostItem v-for="item in postList.slice().reverse()" :key="item" :detail="item" />
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