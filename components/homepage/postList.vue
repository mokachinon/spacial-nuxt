<template>
    <div>
        <div v-if="portfolioData.length" class="container">
            <HomepagePostItem v-for="item in portfolioData.slice().reverse()" :key="item.id" :detail="item"/>
        </div>
        <uiWaitingList v-else />
    </div>
</template>
  
<script>

export default {
    name: 'IndexPage',
    props: {
        portfolioData: {
            type: Array,
            default: ""
        },
        isUser: {
            type: Boolean,
            default: false
        }
    }
}
</script>