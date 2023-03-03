<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="post panorama">
            <a>
                <img src="https://cdn.discordapp.com/attachments/1001718825328320572/1080119917057167421/WhatsApp_Image_2023-02-27_at_18.52.53_1.jpeg"
                    alt="Nice panorama! Awesome." />
            </a>
            <div class="text">
                <div>
                    <p><a class="tumblr_blog">Please login first</a>:</p>
                    <blockquote>
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
                                <button class="like_button" type="submit">
                                    <font-awesome-icon icon="fa-solid fa-heart" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p>So you are from out of town <nuxt-link class="tumblr_blog" tag="a" to="/user/register">sign up?</nuxt-link></p>
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
        }
    },
    methods: {
        async onSubmit() {
            await this.$store.dispatch("authenticateUser", {
                isLogin: true,
                email: this.email,
                password: this.password,
            })
            // .then(() => this.$router.push("/"))
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

.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.row {
    display: table-row;
}

.post .item {
    width: 15%;
}

/* profile end */

/* homepage */
.post {
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    z-index: 20;
    margin-top: 20px;

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

.like_button {
  color: #cccccc;
  background: none;
  border: none;
  text-decoration: none;
}

.like_button:hover {
  color: #da373c;
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
</style>