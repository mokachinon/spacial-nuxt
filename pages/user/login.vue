<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="login-container">
            <a>
                <img src="https://cdn.discordapp.com/attachments/1001718825328320572/1080119917057167421/WhatsApp_Image_2023-02-27_at_18.52.53_1.jpeg"
                    alt="Nice panorama! Awesome." />
            </a>
            <div class="login-container__form">
                <div>
                    <p><a>Please login first</a>:</p>
                    <blockquote>
                        <input class="input-area" type="email" placeholder="Email" v-model="email" />
                        <input class="input-area" placeholder="password..." type="password" v-model="password" />
                    </blockquote>
                    <div class="container-form__btn">
                        <div class="form-btn__row">
                            <div class="row-content">
                                <button class="submit-btn" type="submit">
                                    <font-awesome-icon icon="fa-solid fa-heart" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p>So you are from out of town
                        <nuxt-link tag="a" to="/user/register">sign up?</nuxt-link>
                    </p>
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
.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.login-container {
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--chinese-white);
    border-radius: 5px;
    overflow: hidden;
    z-index: 20;
    margin-top: 20px;
    position: relative;
}

.login-container a img {
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
}

.login-container:hover {
    border-left: 1px solid var(--dark-charcoal);
}

.login-container__form {
    padding: 50px 100px;
}

.input-area {
    width: 100%;
    height: 50px;
    resize: none;
    border: none;
    color: var(--grey);
    font-size: var(--forParagraph);
    font-weight: var(--fwLight);
}

.container-form__btn {
    display: table;
}

.form-btn__row {
    display: table-row;
}

.row-content {
    display: table-cell;
    padding: 10px;
    vertical-align: middle;
}

.submit-btn {
    color: var(--chinese-silver);
    background: none;
    border: none;
    text-decoration: none;
}

.submit-btn:hover {
    color: var(--jasper);
    cursor: pointer;
}

@media screen and (max-width:990px) {

    .container {
        padding: 20px;
        padding-top: 0px;
    }
}

@media screen and (max-width:700px) {
    .login-container__form {
        padding: 50px;
    }
}

@media screen and (max-width:500px) {
    .login-container__form {
        padding: 20px;
        padding-top: 50px;
    }

    .container {
        padding: 10px;
    }
}
</style>