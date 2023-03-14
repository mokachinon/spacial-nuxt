<template>
    <div class="profile-container">
        <div class="profile-content">
            <div class="profile-content__header"
                style="background:url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
            </div>
            <div class="profile-content__image" v-if="$store.getters.isAuthenticated">
                <a><img src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
            </div>
            <div class="logout-btn" v-if="$store.getters.isAuthenticated" @click="logout">
                <a>
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                </a>
            </div>
            <div class="profile-content__text" v-if="$store.getters.isAuthenticated">
                <nuxt-link tag="h3" to="/user" class="title">{{ $store.state.userData.username }}</nuxt-link>
                <p>UI/UX Designers</p>
                <p>A designer, developer, and
                    photographer.</p>
            </div>
            <div class="profile-content__text" v-else>
                <h3>Hey, do you wanna login?</h3>
                <blockquote>
                    <nuxt-link tag="p" to="/user/login">Login</nuxt-link>
                </blockquote>
            </div>
            <div class="profile-content__table" v-if="$store.getters.isAuthenticated">
                <div class="content-table__row">
                    <a class="table-row__item" href="https://dribbble.com/mkchin">
                        <font-awesome-icon icon="fa-solid fa-d" />
                    </a>
                    <a class="table-row__item" href="https://www.instagram.com/masrbb">
                        <font-awesome-icon icon="fa-solid fa-hashtag" />
                    </a>
                    <a class="table-row__item" href="https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async created() {
        await this.$store.dispatch("getPortfolioList");
    },
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.profile-container {
    position: fixed;
}

.profile-content {
    background-color: var(--white);
    position: absolute;
    width: 300px;
    left: -320px;
    border: 1px solid var(--chinese-white);
    border-radius: 5px;
}

.profile-content__header {
    width: 100%;
    height: 200px;
}

.profile-content__image {
    position: absolute;
    top: 150px;
    left: 100px;
}

.profile-content__image img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 5px solid var(--white);
    display: block;
}

.logout-btn {
    float: right;
    display: table-cell;
    padding: 10px;
    width: 15%;
    position: relative;
    cursor: pointer;
    text-align: center;
}

.logout-btn a {
    color: var(--chinese-silver);
}

.logout-btn a:hover {
    color: var(--dark-charcoal);
}

.profile-content__text {
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.profile-content__text h3 {
    color: var(--dark-charcoal);
    font-weight: var(--fwReguler);
}
.profile-content__text .title {
    text-align: center;
    color: var(--dark-charcoal);
    font-weight: var(--fwReguler);
    cursor: pointer;
}

.profile-content__text blockquote p {
    cursor: pointer;
}

.profile-content__table {
    display: table;
    width: 100%;
    text-align: center;
}

.content-table__row {
    display: table-row;
}

.table-row__item {
    display: table-cell;
    padding: 10px;
    width: 33%;
    border-bottom: 5px solid var(--white);
    cursor: pointer;
    position: relative;
}

.table-row__item:nth-child(1) {
    border-radius: 0 0 0 5px;
}

.table-row__item:nth-child(3) {
    border-radius: 0 0 5px 0;
}

.table-row__item:hover {
    border-bottom: 5px solid var(--dark-charcoal);
}

.table-row__item:hover .comment {
    display: block;
}

@media screen and (max-width:990px) {
    .profile-container {
        position: unset;
    }

    .profile-content {
        width: 100%;
        position: unset;
        left: 0;
        border-radius: 0 0 5px 5px;
    }

    .profile-content__text {
        padding: 50px;
    }

    .profile-content .profile-content__text h3 {
        text-align: start;
    }
}

@media screen and (max-width:700px) {
    .profile-container {
        position: unset;
    }

    .profile-content__text {
        padding: 50px;
    }

    .profile-content .profile-content__image {
        top: 150px;
        left: 50px;
    }
}

@media screen and (max-width:500px) {
    .profile-content__text {
        padding: 20px;
        padding-top: 50px;
    }

}

/* end of index */
</style>