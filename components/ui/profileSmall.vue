<template>
    <div>
        <div class="profile-small">
            <div class="header"
                style="background:url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
            </div>
            <!-- </div>
            <div v-if="$store.getters.isAuthenticated">
                <div class="profile-image" >
                    <a href="https://munditheme.tumblr.com/"><img
                            src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
                </div>
                <div class="logout-btn edit">
                    <a>
                        <font-awesome-icon icon="fa-solid fa-ellipsis" />
                    </a>
                    <div class="comment bottom" @click="logout">Logout?</div>
                </div>
                <div class="text">
                    <h3>{{ $store.state.userData.username }}</h3>
                    <p>UI/UX Designers</p>
                    <p>A designer, developer, and
                        photographer.</p>
                </div> -->
            <div class="profile-image" v-if="$store.getters.isAuthenticated">
                <a><img src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
            </div>
            <div class="logout-btn edit" v-if="$store.getters.isAuthenticated">
                <a>
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </a>
                <div class="comment bottom" @click="logout">Logout?</div>
            </div>
            <div class="text" v-if="$store.getters.isAuthenticated">
                <h3>{{ $store.state.userData.username }}</h3>
                <p>UI/UX Designers</p>
                <p>A designer, developer, and
                    photographer.</p>
            </div>
            <div class="text" v-else>
                <h3>Hey, do you wanna login?</h3>
                <blockquote>
                    <nuxt-link tag="p" to="/user/login">Login</nuxt-link>
                </blockquote>
            </div>
            <div class="table" v-if="$store.getters.isAuthenticated">
                <div class="row">
                    <a class="item" href="https://dribbble.com/mkchin">
                        <font-awesome-icon icon="fa-solid fa-d" />
                    </a>
                    <a class="item" href="https://www.instagram.com/masrbb">
                        <font-awesome-icon icon="fa-solid fa-hashtag" />
                    </a>
                    <a class="item" href="https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147">
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
* {
    -webkit-box-sizing: border-box;
    /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;
    /* Firefox, other Gecko */
    box-sizing: border-box;
    /* Opera/IE 8+ */
    transition: all 0.5s;
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

body {
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: #f2f2f2;
    padding-bottom: 100px;
}

h1,
a {
    color: #333;
    font-weight: 300;
    text-decoration: none;
}

p {
    color: #808080;
    font-size: 14px;
    font-weight: 300;
}

ul,
li {
    color: #808080;
    font-weight: 300;
    font-size: 14px;
}

p a {
    text-decoration: underline;
}

blockquote {
    border-left: 3px solid #e0e0e0;
    width: 100%;
    padding-left: 10px;
    margin: 0px;
}

.text {
    padding: 50px 100px;
}

.text blockquote p {
    cursor: pointer;
}

.profile-small {
    background-color: #fff;
    position: relative;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 5px 5px;
}

.header {
    width: 100%;
    height: 200px;
}

.profile-image {
    position: absolute;
    top: 150px;
    left: 100px;
}

.edit {
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
}

.edit a {
    color: #cccccc;
}

.logout-btn {
    display: table-cell;
    padding: 10px;
    width: 15%;
    border-bottom: 5px solid #fff;
    position: relative;
    text-align: center;
}

.logout-btn:hover {
    border-bottom: 5px solid #333;
}

.logout-btn:hover .comment {
    display: block;
    cursor: pointer;

}

.logout-btn .comment {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    color: #808080;
    font-size: 14px;
    position: absolute;
    bottom: -45px;
    left: 50%;
    margin-left: -50px;
    border: 1px solid #e0e0e0;
    display: none;
    z-index: 10;
}

.logout-btn .comment button {
    background: none;
    cursor: pointer;
    border: none;
}

.logout-btn .comment:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #e0e0e0;
}


.profile-image img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 5px solid #fff;
    display: block;
}

.profile-small .profile-image {
    top: 150px;
    left: 100px;
}

.profile-small .text h3 {
    color: #333;
    font-weight: 400;
}

.table {
    display: table;
    width: 100%;
    text-align: center;
}

.row {
    display: table-row;
}

.item {
    display: table-cell;
    padding: 10px;
    width: 33%;
    border-bottom: 5px solid #fff;
    cursor: pointer;
    position: relative;
}

.item:nth-child(1) {
    border-radius: 0 0 0 5px;
}

.item:nth-child(3) {
    border-radius: 0 0 5px 0;
}

.item:hover {
    border-bottom: 5px solid #333;
}

.item:hover .comment {
    display: block;
}

.comment {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    color: #808080;
    font-size: 14px;
    position: absolute;
    bottom: -45px;
    left: 50%;
    margin-left: -50px;
    border: 1px solid #e0e0e0;
    display: none;
    z-index: 10;
}

.comment:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #e0e0e0;
}

.comment .fa-times {
    position: absolute;
    top: 3px;
    right: 5px;
    cursor: pointer;
}

/* profile end */

@media screen and (max-width:700px) {
    .text {
        padding: 50px;
    }

    .profile-small .profile-image {
        top: 150px;
        left: 50px;
    }
}

@media screen and (max-width:500px) {
    .text {
        padding: 20px;
        padding-top: 50px;
    }

}

/* end of index */
</style>