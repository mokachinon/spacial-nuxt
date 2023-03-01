<template>
    <div class="container">
        <div class="post panorama">
            <a>
                <img src="https://cdn.discordapp.com/attachments/1001718825328320572/1080119916537061478/shadi-XIOsgtpGMaM-unsplash_1.jpg"
                    alt="Nice panorama! Awesome." />
            </a>
            <div class="text">
                <div>
                    <p><a class="tumblr_blog">...</a></p>
                    <blockquote>
                        <input class="input_area" type="email" placeholder="Email" />
                        <div>
                        <p><span>
                                <input class="input_area" placeholder="password..." type="password" />
                            </span></p>
                        </div>
                    </blockquote>
                    <div class="social-buttons">
                        <div class="row">
                            <div class="button">
                                <div class="like_button">
                                    <nuxt-link tag="a" to="/"><font-awesome-icon icon="fa-solid fa-heart" /></nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>so you have an account <nuxt-link tag="a" class="tumblr_blog" to="/user/login">login?</nuxt-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}


.row {
    display: table-row;
}

.post {
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    margin-top: 50px;
    border-radius: 5px;
    overflow: hidden;
    z-index: 20;
    position: relative;
}

.post:hover {
    border-left: 1px solid #4A89DC;
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

.like_button a {
    color: #CCCCCC;
}

.like_button a:hover {
    color: #DA373C;
    transition: .1s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -ms-transition: .2s;
    -o-transition: .2s;
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