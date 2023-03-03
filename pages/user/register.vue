<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="post panorama">
            <a>
                <img src="https://cdn.discordapp.com/attachments/1001718825328320572/1080119916537061478/shadi-XIOsgtpGMaM-unsplash_1.jpg"
                    alt="Nice panorama! Awesome." />
            </a>
            <div class="text">
                <div>
                    <p><a class="tumblr_blog">Who are you?</a></p>
                    <blockquote>
                        <input class="input_area" type="text" placeholder="Username" v-model="username" />
                        <input class="input_area" type="email" placeholder="Email" v-model="email" />
                        <div>
                            <p><span>
                                    <input class="input_area" placeholder="password..." type="password"
                                        v-model="password" />
                                </span></p>
                        </div>
                    </blockquote>
                    <div class="social-buttons">
                        <div class="row">
                            <div class="button">
                                <button class="reblog_button" type="submit">
                                    <font-awesome-icon icon="fa-solid fa-repeat" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p>Or you have an account <nuxt-link tag="a" class="tumblr_blog" to="/user/login">login?</nuxt-link></p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            username: "",
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch("authenticateUser", {
                isLogin: false,
                email: this.email,
                password: this.password,
                displayName: this.username,
            })
                .then(() => this.$router.push("/"))
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

.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}


.post a img {
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
}

.row {
    display: table-row;
}

.post {
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 20px;

    z-index: 20;
    position: relative;
}

.post:hover {
    border-left: 1px solid #333;
}

.input_area {
    width: 100%;
    height: 50px;
    resize: none;
    border: none;
    color: #808080;
    font-size: 14px;
    font-weight: 300;
}

.social-buttons {
    display: table;
}

.button {
    display: table-cell;
    padding: 10px;
    vertical-align: middle;
}

.reblog_button {
    color: #cccccc;
    background: none;
    border: none;
    text-decoration: none;
}

.reblog_button:hover {
    color: #4a89dc;
    transition: 0.1s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
    cursor: pointer;
}

@media screen and (max-width:990px) {
    .container {
        padding: 20px;
        padding-top: 0px;
    }
}

@media screen and (max-width:700px) {
    .text {
        padding: 50px;
    }

}

@media screen and (max-width:500px) {
    .text {
        padding: 20px;
        padding-top: 50px;
    }

    .container {
        padding: 10px;
    }
}

/* end of index */
</style>